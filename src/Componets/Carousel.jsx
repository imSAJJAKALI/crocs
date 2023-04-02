import { LeftButton, RightButton } from "chakra-ui-carousel";

function Slider() {
  return (
    <Box>
      <Provider>
        <Carousel gap={50}>
        
        </Carousel>
        <LeftButton bgColor="red.500" textColor="white" />
        <RightButton bgColor="blue.500" />
      </Provider>
    </Box>
  );
}