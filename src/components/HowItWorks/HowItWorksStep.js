import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";

const HowItWorksStep = (props) => {
  console.log("HowItWorksStep props: ", props);

  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        [theme.breakpoints.up("md")]: {
          display: "flex",
          flexDirection: "column",
          width: "30%",
          mx: "auto",
        },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: "superbold",
          color: props.step.color,
          p: "1rem",
          textAlign: "center",
        }}
      >
        {props.step.place}
      </Typography>
      <Typography
        variant="h2"
        sx={{
          textTransform: "capitalize",
          textAlign: "center",
          fontWeight: "bold",
          minWidth: "fit-content",
        }}
      >
        {props.step.title}
      </Typography>
      <Typography
        sx={{
          fontSize: theme.typography.body1,
          p: ".5rem",
        }}
      >
        {props.step.text}
      </Typography>
    </Box>
  );
};

export default HowItWorksStep;
