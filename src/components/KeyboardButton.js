import Button from "@mui/material/Button";
import { useState } from "react";

export const KeyBoardButton = ({ letter, handleCheck }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleButtonClick = () => {
    setIsDisabled(true);

    handleCheck(letter);
  };

  return (
    <Button
      variant="outlined"
      sx={{ m: 1 }}
      disabled={isDisabled}
      onClick={handleButtonClick}
    >
      {letter}
    </Button>
  );
};
