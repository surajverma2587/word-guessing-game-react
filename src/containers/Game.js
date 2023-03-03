import { useState } from "react";

import { Word } from "../components/Word";
import { Keyboard } from "../components/Keyboard";
import { Strikes } from "../components/Strikes";
import { getRandomWord } from "../utils/getRandomWord";
import { getMaskedCharacters } from "../utils/getMaskedCharacters";

export const Game = ({ category }) => {
  const randomWord = getRandomWord(category);
  const maskedCharacters = getMaskedCharacters(randomWord);

  const [word, setWord] = useState(randomWord);
  const [characters, setCharacters] = useState(maskedCharacters);
  const [strikes, setStrikes] = useState(5);

  return (
    <div>
      <Word />

      <Keyboard />

      <Strikes />
    </div>
  );
};
