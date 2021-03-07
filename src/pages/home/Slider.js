import Swiper, { Navigation, Pagination } from "swiper";
import Image from "next/image";

Swiper.use([Navigation, Pagination]);
const swiper = new Swiper();
const Slider = () => {
  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: false,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
  return (
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide text-center">
          <span>
            KombineBul uygulaması tamamen ücretsizdir.
            <br></br>
            <Image
              src="/static/assets/png/app-store.png"
              width={"200%"}
              height={"200%"}
            />
          </span>
        </div>
        <div class="swiper-slide text-center">
          <span>
            Hemen Deneyin
            <br></br>
            <Image
              src="/static/assets/png/app-store.png"
              width={"200%"}
              height={"200%"}
            />
          </span>
        </div>
        <div class="swiper-slide text-center" id="slider3">
          Rahatça biletinizi devredebilir <br></br>veya istediğiniz maça bilet
          bulabilirsiniz.
        </div>
      </div>
      <div class="swiper-pagination"></div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <div class="swiper-scrollbar"></div>
    </div>
  );
};

export default Slider;
