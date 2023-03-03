import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const Strikes = ({ strikes, maxStrikes }) => {
  const strikesArray = new Array(maxStrikes).fill(<FavoriteIcon />);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        p: 4,
        my: 4,
        color: "red",
      }}
    >
      {strikesArray.map((_, index) =>
        index < strikes ? (
          <FavoriteIcon key={index} />
        ) : (
          <FavoriteBorderIcon key={index} />
        )
      )}
    </Box>
  );
};
