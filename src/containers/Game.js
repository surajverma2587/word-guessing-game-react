import { Word } from "../components/Word";
import { Keyboard } from "../components/Keyboard";
import { Strikes } from "../components/Strikes";

export const Game = () => {
  return (
    <div>
      <Word />

      <Keyboard />

      <Strikes />
    </div>
  );
};
