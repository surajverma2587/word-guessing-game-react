import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export const Categories = ({ handleCategoryClick }) => {
  return (
    <Box
      sx={{
        padding: "16px",
        backgroundColor: "#edf6f9",
        borderRadius: "8px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="success"
            size="large"
            fullWidth
            onClick={handleCategoryClick}
            name="movies"
          >
            Movies
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="success"
            size="large"
            fullWidth
            onClick={handleCategoryClick}
            name="sports"
          >
            Sports
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="success"
            size="large"
            fullWidth
            onClick={handleCategoryClick}
            name="countries"
          >
            Countries
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="success"
            size="large"
            fullWidth
            onClick={handleCategoryClick}
            name="random"
          >
            Random
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
