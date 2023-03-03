import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import { useTheme } from "@mui/material/styles";

const TypeofEventItem = (props) => {
  console.log("TypeofEventItem props: ", props);

  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        mb: "3rem",
        flexDirection: "column",
        [theme.breakpoints.up("sm")]: {
          width: "30%",
        },
      }}
    >
      <ImageListItem>
        <img src={props.category.url} alt={props.category.category} />
        <ImageListItemBar
          title={props.category.category}
          sx={{
            fontFamily: theme.typography.body1,
            textTransform: "uppercase",
            textAlign: "center",
            width: "100%",
            height: "100%",
            pt: "11rem",
            letterSpacing: ".5rem",
          }}
        />
      </ImageListItem>
      <Box
        sx={{
          backgroundColor: props.category.color,
          width: "65%",
          textAlign: "center",
          p: ".5rem .25rem .25rem .25rem",
        }}
      >
        <Typography sx={{ color: "#fff" }}>
          <EastSharpIcon sx={{ fontWeight: "light", fontSize: "1rem" }} />{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default TypeofEventItem;
