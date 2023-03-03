import { howItworks as steps } from "../../helpers/howItWorks";
import { Box, Typography } from "@mui/material";

const HowItWorksContainer = () => {
  return (
    <Box sx={{ display: "flex", border: "red 3px solid", height: "auto" }}>
      <Typography variant="h2">How It Works</Typography>
    </Box>
  );
};

export default HowItWorksContainer;
