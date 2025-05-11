import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { GSliderProducts } from "./api/GSliderProducts";

const Slider = () => {
   const { data: products } = GSliderProducts();

   const sliderContainerRef = useRef<HTMLDivElement | null>(null);
   const [sliderRef, instanceRef] = useKeenSlider({
      loop: true,
      slides: {
         perView: 4.5,
         spacing: 5,
      },
      breakpoints: {
         "(max-width: 1440px)": {
            slides: { perView: 3 },
         },
         "(max-width: 1024px)": {
            slides: { perView: 3 },
         },
         "(max-width: 768px)": {
            slides: { perView: 2 },
         },
         "(max-width: 480px)": {
            slides: { perView: 1 },
         },
      },
   });

   const intervalRef = useRef<NodeJS.Timeout | null>(null);

   useEffect(() => {
      const startAutoPlay = () => {
         intervalRef.current = setInterval(() => {
            instanceRef.current?.next();
         }, 3000);
      };

      const stopAutoPlay = () => {
         if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
         }
      };

      startAutoPlay();

      const container = sliderContainerRef.current;
      if (container) {
         container.addEventListener("mouseenter", stopAutoPlay);
         container.addEventListener("mouseleave", startAutoPlay);
      }

      return () => {
         stopAutoPlay();
         if (container) {
            container.removeEventListener("mouseenter", stopAutoPlay);
            container.removeEventListener("mouseleave", startAutoPlay);
         }
      };
   }, [instanceRef]);

   return (
      <div ref={sliderContainerRef} className="container relative w-full mt-24">
         <div
            ref={sliderRef}
            className="keen-slider w-full max-w-full overflow-hidden"
         >
            {products?.map((product: any) => (
               <div key={product.id} className="keen-slider__slide flex px-2.5">
                  <ProductCard product={product} />
               </div>
            ))}
         </div>

         <div className="absolute -top-16 left-0 flex gap-2">
            <Button
               onClick={() => instanceRef.current?.prev()}
               className="w-10 h-10 rounded-full"
               variant="outline"
            >
               <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
               onClick={() => instanceRef.current?.next()}
               className="w-10 h-10 rounded-full"
               variant="outline"
            >
               <ArrowLeft className="w-4 h-4" />
            </Button>
         </div>
      </div>
   );
};

export default Slider;
