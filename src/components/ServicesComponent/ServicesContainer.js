import Services from "./Services";
import { services } from "../../helpers/services";
import Box from "@mui/material/Box";

const ServicesContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "85%",
        mx: "auto",
        my: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "50%",
          justifyContent: "space-between",
          border: "3px solid red",
        }}
      >
        <Box>
          {services.map((service) => (
            <Services service={service} key={service.id} />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          width: "50%",
        }}
      >
        image
      </Box>
    </Box>
  );
};

export default ServicesContainer;
