import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useState } from "react";

import { Banner } from "./components/Banner";
import { Categories } from "./components/Categories";
import { Game } from "./containers/Game";

export const App = () => {
  const [category, setCategory] = useState();

  const handleCategoryClick = ({ target }) => {
    const categorySelected = target.name;

    setCategory(categorySelected);
  };

  const handleReset = () => {
    setCategory();
  };

  return (
    <Box>
      <Banner handleReset={handleReset} />

      <Container
        maxWidth="md"
        sx={{
          marginTop: "16px",
        }}
      >
        {category ? (
          <Game category={category} />
        ) : (
          <Categories handleCategoryClick={handleCategoryClick} />
        )}
      </Container>
    </Box>
  );
};
