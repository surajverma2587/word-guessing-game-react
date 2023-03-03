import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Word = ({ characters }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#edf6f9",
        borderRadius: "8px",
        p: 4,
        my: 4,
      }}
    >
      {characters.map((character, index) => {
        return (
          <Typography variant="h5" key={index}>
            {character}
          </Typography>
        );
      })}
    </Box>
  );
};
