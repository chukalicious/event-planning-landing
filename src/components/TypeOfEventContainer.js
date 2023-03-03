import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import { useTheme } from "@mui/material/styles";
import { typesOfEvent as cards } from "../helpers/typesOfEvent";
import TypeofEventItem from "./TypeofEventItem";

const TypeOfEventContainer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        mt: "5rem",
        width: "85%",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          p: "1.5rem 2.35rem",
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontSize: "2rem",
            fontFamily: theme.typography.fontFamily,
            fontWeight: "bold",
          }}
        >
          Every Type of Event
        </Typography>
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontFamily: theme.typography.body1,
            mt: "1rem",
          }}
        >
          insert lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          lacus in nisl aliquet aliquam. Nulla facilisi. Nulla facilisi. Nulla
        </Typography>
      </Box>
      <Box sx={{ p: "2rem", width: "95%", mx: "auto" }}>
        <ImageList
          cols={{ sm: 1 }}
          gap={20}
          sx={{
            [theme.breakpoints.up("sm")]: {
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            },
          }}
        >
          {cards.map((card, i) => (
            <TypeofEventItem category={card} key={i} />
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default TypeOfEventContainer;
