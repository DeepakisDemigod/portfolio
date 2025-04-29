import React, { useEffect } from "react";
import { Typography, Button, Space } from "antd";
import "../App.css";

const { Title } = Typography;

const Hero = () => {
  useEffect(() => {
    document.title = "Portfolio (Deepak Thapa) Home";
  }, []);

  return (
    <div
      id="body"
      className="flex flex-col items-center justify-center h-[100vh] bg-black text-red-600"
    >
      <p className="text-5xl">🏗️</p> <br />
      🚧 the site is under construction, <br /> you may want to leave a mail 🚧
      <a className="underline" href="deepakthapa1423@gmail.com">
        deepakthapa1423@gmail.com
      </a>
    </div>
  );
};

export default Hero;
