import Carousel, { CarouselItem } from "../Carousel";

const Proyexx = () => {
  return (
    <div className="my-2">
      <div id="projects"></div>
      <h2 className="my-2 text-2xl font-medium">My Projects</h2>
      <div className="border-solid rounded-[1vh] dark:border-neutral-100 border-black z-[11] border-4 my-2">
        <Carousel>
          <CarouselItem>
            <div>Item 1</div>
          </CarouselItem>
          <CarouselItem>
            <div>Item 2</div>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  );
};

export default Proyexx;
