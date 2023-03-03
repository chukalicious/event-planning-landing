import { howItworks as steps } from "../../helpers/howItWorks";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import HowItWorksStep from "./HowItWorksStep";

const HowItWorksContainer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
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
          variant="h2"
          sx={{
            fontFamily: theme.typography.fontFamily,
            fontsize: "1rem",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          How It Works
        </Typography>
        <Box>
          {steps.map((step, i) => (
            <HowItWorksStep step={step} key={i} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HowItWorksContainer;
