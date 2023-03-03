import { Banner } from "./components/Banner";
import { Categories } from "./components/Categories";
import { Game } from "./containers/Game";

export const App = () => {
  return (
    <div>
      <Banner />

      <Categories />

      <Game />
    </div>
  );
};
