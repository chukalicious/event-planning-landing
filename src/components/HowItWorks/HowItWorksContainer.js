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
    <>
      <Box
        sx={{
          width: "100%",
          backgroundImage: `url(${services})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "contain",
          justifyContent: "space-between",
          [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${services})`,
          },
          [theme.breakpoints.up("md")]: {
            flexDirection: "column",
            backgroundImage: `url(${services})`,
            backgroundPositionX: "right",
            backgroundPositionY: "bottom",
            backgroundSize: "55% 55%",
          },
          [theme.breakpoints.up("lg")]: {
            flexDirection: "column",
            backgroundImage: `url(${services})`,
            backgroundPositionX: "right",
            backgroundPositionY: "55%",
            backgroundSize: "55% 55%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: "5rem",
            width: "75%",
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
                fontWeight: "bold",
                textTransform: "capitalize",
                textAlign: "center",
              }}
            >
              How It Works
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              [theme.breakpoints.up("md")]: {
                flexDirection: "row",
                width: "90%",
                mx: "auto",
              },
            }}
          >
            {steps.map((step, i) => (
              <HowItWorksStep step={step} key={i} />
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "85%",
          mx: "auto",
          mt: "2rem",
        }}
      >
        <Button
          variant="contained"
          color="warning"
          sx={{
            borderRadius: "50px",
            mx: "auto",
            my: "2rem",
            elevation: 10,
            boxShadow:
              "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
          }}
        >
          <Typography
            sx={{
              color: "white",
              py: "1.25rem",
              fontSize: theme.typography.button,
              fontWeight: "bold",
              letterSpacing: "0.15rem",
            }}
          >
            book a consultation
          </Typography>
        </Button>
      </Box>
    </>
  );
};

export default HowItWorksContainer;
