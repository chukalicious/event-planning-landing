import { howItworks as steps } from "../../helpers/howItWorks";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useTheme from "@mui/material/styles/useTheme";
import HowItWorksStep from "./HowItWorksStep";
import services from "../../assets/services.svg";

const HowItWorksContainer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "5rem",
        width: "85%",
        mx: "auto",
        // border: "green 3px solid",
        backgroundImage: `url(${services})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom right",
        backgroundSize: "contain",
        // transform: "rotateY(180deg)",
        [theme.breakpoints.down("md")]: {
          justifyContent: "space-between",
          border: "red 3px solid",
          backgroundImage: `url(${services})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom ",
          backgroundSize: "contain",
        },
        [theme.breakpoints.up("lg")]: {
          flexDirection: "column",
          justifyContent: "space-between",
          border: "red 3px solid",
          backgroundImage: `url(${services})`,
          backgroundPositionX: "right",
          backgroundPositionY: "center",
          // backgroundSize: "50% 50%",
          backgroundSize: "45% 45%",
        },
      }}
    >
      <Box
        sx={{
          p: "1.5rem 2.35rem",
          border: "blue 3px solid",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: theme.typography.fontFamily,
            fontWeight: "bold",
            textTransform: "capitalize",
            textAlign: "center",
          }}
        >
          How It Works
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",

            [theme.breakpoints.up("md")]: {
              flexDirection: "row",
            },
          }}
        >
          {steps.map((step, i) => (
            <HowItWorksStep step={step} key={i} />
          ))}
        </Box>
      </Box>

      <Button
        variant="contained"
        color="warning"
        sx={{
          borderRadius: "50px",
          mx: "auto",
          my: "2rem",
          width: "65%",
          elevation: 10,
          boxShadow:
            "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "1.5rem",
            py: "1.25rem",
          }}
        >
          book a consultation
        </Typography>
      </Button>
    </Box>
  );
};

export default HowItWorksContainer;
