import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper.min.css";
import cl from "./Info.module.css";
import { ArraySwipers, CLIENT_URL } from "./models";
// wrapp swiper
const Swip = ({ children }) => {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      spaceBetween={0}
      navigation={true}
      pagination={true}
      modules={[FreeMode, Pagination, Navigation]}
      className={cl.wrappImagesInfo}
    >
      {children}
    </Swiper>
  );
};
// body swiper
const RenderSwip = () => {
  return (
    <>
      {ArraySwipers.map((item) => (
        <>
          <h1>{item.h1}</h1>
          {item?.swiper?.length ? (
            <>
              <Swip>
                {item?.swiper?.map((img) => (
                  <SwiperSlide key={img} id={cl.childSwiperInfo}>
                    <img src={CLIENT_URL + img} alt="" />
                  </SwiperSlide>
                ))}
              </Swip>
              {item?.swiper2?.length ? (
                <>
                  <Swip>
                    {item?.swiper2?.map((img) => (
                      <SwiperSlide key={img} id={cl.childSwiperInfo}>
                        <img src={CLIENT_URL + img} alt="" />
                      </SwiperSlide>
                    ))}
                  </Swip>
                </>
              ) : (
                ""
              )}
              {item?.dowload?.map((child, i) => (
                <a className={cl.dowload} href={CLIENT_URL + child} download>
                  <img
                    src={CLIENT_URL + `/src/components/mainpages/info/file.svg`}
                    alt=""
                  />
                  {"Документ_" + (i + 1) + "." + child.split(".")[1]}
                </a>
              ))}
            </>
          ) : (
            ""
          )}
        </>
      ))}
    </>
  );
};
// render all
const Info = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  //     var pathToFile = "....";
  //          downloadFile(file) {
  //     location.href = pathToFile + file;
  // }
  return (
    <div className={cl.privacyPolicyContainer}>
      <RenderSwip />
    </div>
  );
};

export default Info;
