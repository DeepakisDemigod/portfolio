import React, { useEffect } from "react";
import { Typography, Button, Space } from "antd";
import "../App.css";

const { Title } = Typography;

const Hero = () => {
  useEffect(() => {
    document.title = "Portfolio (Deepak Thapa) Home";
  }, []);

  return (
    <div id="body" className="bg-black text-white">
      <div id="background-wrap">
        <div className="bubble x1"></div>
        <div className="bubble x2"></div>
        <div className="bubble x3"></div>
        <div className="bubble x4"></div>
        <div className="bubble x5"></div>
        <div className="bubble x6"></div>
        <div className="bubble x7"></div>
        <div className="bubble x8"></div>
        <div className="bubble x9"></div>
        <div className="bubble x10"></div>
      </div>

      <div className="flex flex-col items-center justify-center h-screen gap-8 p-4">
        <Title
          level={1}
          className=" font-extrabold text-center"
          style={{
            fontSize: "clamp(3rem, 6vw, 8rem)",
            marginTop: "-85px",
          }}
        >
          <p id="phrase" style={{ color: "white" }}>
            "Curiosity Finds Great New Experinces"
          </p>
        </Title>

        <div className=" font-bold text-center">
          <Title level={3} id="phrase" style={{ color: "#FFFFFF" }}>
            Student from University of Delhi, India
          </Title>
        </div>

        <Space size="large" className="flex text-center">
          <a href="/about">
            <Button
              id="button"
              type="primary"
              size="large"
              style={{ backgroundColor: "#1c1c1c", borderColor: "#1c1c1c" }}
            >
              Know About Me
            </Button>
          </a>
          <a href="/contact">
            <Button
              id="button"
              type="default"
              size="large"
              style={{
                backgroundColor: "#1c1c1c",
                borderColor: "#1c1c1c",
                color: "#FFFFFF",
              }}
            >
              Get In Touch
            </Button>
          </a>
        </Space>
      </div>
    </div>
  );
};

export default Hero;
