import Box from "@mui/material/Box";

const Services = (props) => {
  console.log("Services props: ", props);
  return <Box>{props.service.title}</Box>;
};

export default Services;
