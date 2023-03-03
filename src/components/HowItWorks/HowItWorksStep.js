import Box from "@mui/material/Box";

const HowItWorksStep = (props) => {
  console.log("HowItWorksStep props: ", props);
  return <Box>{props.step.title}</Box>;
};

export default HowItWorksStep;
