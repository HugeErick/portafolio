import { metadata } from "@/app/layout";

const MainTitle = () => {
  return (
    <div className="my-8 text-center">
      <h1
        className="mt-10 max-sm:text-4xl max-sm:font-semibold text-7xl font-bold"
        style={{ textShadow: "0 0.1rem 0 #fff, 0 0 8rem rgba(0,0,0,.8)" }}
      >
        {metadata.title}
      </h1>
      <h4 className="my-2 px-2 max-sm:text-3xl max-sm:font-normal text-4xl font-medium">
        {metadata.description}
      </h4>
    </div>
  );
};

export default MainTitle;
