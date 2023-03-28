import Services from "./Services";
import { services } from "../../helpers/services";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";

const ServicesContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column-reverse",
        width: "85%",
        mx: "auto",
        my: "2rem",
        // border: "3px solid yellow",
      }}
    >
      <Box
        sx={{
          display: "flex",
          // width: "50%",
          justifyContent: "space-between",
          // border: "3px solid red",
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
          // border: "3px solid darkblue",
          display: "flex",
          flexDirection: "row-reverse",
          height: "55vh",
        }}
      >
        <Box
          sx={{
            // border: "3px solid green",
            minWidth: "30%",
          }}
        >
          <Box
            sx={{
              backgroundColor: "darkgray ",
              height: "50%",
            }}
          ></Box>
          <Box
            sx={{
              backgroundColor: "papayaWhip ",
              height: "50%",
            }}
          ></Box>
        </Box>

        <Box sx={{ display: "flex" }}>
          <ImageListItem sx={{ objectFit: "fit" }}>
            <img
              src="https://live.staticflickr.com/65535/52775451167_75d9479a92_c.jpg"
              alt=""
            />
          </ImageListItem>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesContainer;
