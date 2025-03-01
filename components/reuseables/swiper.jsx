"use client";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

import WorkoutChartPerDay from "./chartPerDay";
import WorkoutChartPerSet from "./chartPerSet";

const charts = [WorkoutChartPerDay, WorkoutChartPerSet];

const ChartSlider = ({ workoutId, refreshedSets }) => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
        }}
        className="relative h-full"
        style={{
          "--swiper-pagination-color": "#1e3a8a",
          "--swiper-navigation-color": "rgb(250, 204, 21)",
        }}
      >
        {charts.map((ChartComponent, index) => (
          <SwiperSlide key={index}>
            <div className="py-12">
              <ChartComponent
                workoutId={workoutId}
                refreshedSets={refreshedSets}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ChartSlider;
