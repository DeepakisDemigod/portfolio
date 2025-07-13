/*export default function Main() {
  return (
    <div
      className="px-4 h-screen sepia-35 brightness-90 bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url("/Hibiscus-m.png")`,
        backgroundAttachment: "fixed",
        backgroundColor: "#000", // optional fallback
        opacity: "0.9",
      }}
    >
      <div className="flex items-end justify-between">
        <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl">
          PORTFOLIO
        </h1>
      </div>
    </div>
  );
}*/
"use client";
import React, { useState } from "react";

export default function Main() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        className="px-4 h-screen sepia-35 brightness-90 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url("/Hibiscus-sm.png")`,
          backgroundAttachment: "fixed",
          backgroundColor: "#000",
          opacity: "0.9",
        }}
      >
        <div className="flex items-center justify-between ">
          <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl">
            PORTFOLIO
          </h1>

          <svg
            className={`ham ham6 ${active ? "active" : ""}`}
            viewBox="0 0 100 100"
            width="60"
            onClick={() => setActive(!active)}
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 
                -24.612039,5.327373 9.016154,-52.337577 
                -12.75751,-30.563913 l -28.284272,28.284272"
            />
            <path
              className="line middle"
              d="m 70,50 c 0,0 -32.213436,0 -40,0 
                -7.786564,0 -6.428571,-4.640244 
                -6.428571,-8.571429 
                0,-5.895471 6.073743,-11.783399 
                12.286435,-5.570707 
                6.212692,6.212692 28.284272,28.284272"
            />
            <path
              className="line bottom"
              d="m 69.575405,67.073826 h -40 
                c -13.100415,0 -14.380204,-31.80258 
                -6.899646,-33.421777 
                24.612039,-5.327373 
                -9.016154,52.337577 
                12.75751,30.563913 
                l 28.284272,-28.284272"
            />
          </svg>
        </div>
      </div>

      <style>{`
        .ham {
          cursor: pointer;
          transition: transform 400ms;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        .line {
          fill: none;
          stroke: #fff;
          stroke-width: 6;
          stroke-linecap: square;
          transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
        }

        .ham6 .top {
          stroke-dasharray: 40 172;
        }

        .ham6 .middle {
          stroke-dasharray: 40 111;
        }

        .ham6 .bottom {
          stroke-dasharray: 40 172;
        }

        .ham6.active .top {
          stroke-dashoffset: -132px;
        }

        .ham6.active .middle {
          stroke-dashoffset: -71px;
        }

        .ham6.active .bottom {
          stroke-dashoffset: -132px;
        }


      `}</style>
    </>
  );
}
