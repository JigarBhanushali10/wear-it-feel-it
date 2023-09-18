import { useEffect, useState } from "react";
import { wallpapers } from "../localDb/db";

function Slider() {
  const [prodIndex, setProdIndex] = useState(0);
  //destructuring the image from the image object of product images array
  const { img } = wallpapers[prodIndex];
  const lastIndex = wallpapers.length - 1;
  // for going to previous slide
  const prevSlide = () => {
    setProdIndex((prev) => (prev > 0 ? prev - 1 : lastIndex));
  };
  // for going to next slide
  const nextslide = () => {
    setProdIndex((prev) => (prev < lastIndex ? prev + 1 : 0));
  };
  let sliderTimer: string | number | NodeJS.Timer | undefined;
  useEffect(() => {
    sliderTimer = setTimeout(() => {
      nextslide();
    }, 2500);
  }, []);

  return (
    <>
      <div className="container">
        <figure className="slider overflow-hidden position-relative">
          <span
            className="icon-arrow-left text-center position-absolute cursor-pointer  p-2 top-50 start-0 ms-2  rounded-circle btn btn-outline-primary"
            onClick={() => {
              clearTimeout(sliderTimer);
              prevSlide();
            }}
          ></span>
          <img className="img-fluid" src={img} alt="argentina jersey" />
          <span
            className="icon-arrow-right text-center position-absolute cursor-pointer  p-2 top-50 end-0 me-2 rounded-circle btn btn-outline-primary"
            onClick={() => {
              clearTimeout(sliderTimer);
              nextslide();
            }}
          ></span>
        </figure>
      </div>
    </>
  );
}

export default Slider;
