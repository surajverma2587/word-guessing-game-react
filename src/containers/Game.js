import { useState } from "react";
import Box from "@mui/material/Box";

import { Word } from "../components/Word";
import { Keyboard } from "../components/Keyboard";
import { Strikes } from "../components/Strikes";
import { getRandomWord } from "../utils/getRandomWord";
import { getMaskedCharacters } from "../utils/getMaskedCharacters";

export const Game = ({ category }) => {
  const randomWord = getRandomWord(category);
  const maskedCharacters = getMaskedCharacters(randomWord);
  const maxStrikes = 5;

  const [word, setWord] = useState(randomWord);
  const [characters, setCharacters] = useState(maskedCharacters);
  const [strikes, setStrikes] = useState(maxStrikes);

  const handleCheck = (letter) => {
    const letterToCheck = letter.toUpperCase();

    const existsInWord = word.includes(letterToCheck);

    if (!existsInWord) {
      setStrikes((strikes) => strikes - 1);
    }
  };

  return (
    <Box>
      <Strikes strikes={strikes} maxStrikes={maxStrikes} />

      <Word characters={characters} />

      <Keyboard handleCheck={handleCheck} />
    </Box>
  );
};
