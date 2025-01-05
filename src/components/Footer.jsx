import React from "react";
import { Typography, Layout } from "antd";

const { Footer } = Layout;
const { Text } = Typography;

const AppFooter = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        backgroundColor: "black",
        color: "white",
        padding: "20px",
      }}
    >
      <Text strong style={{ color: "white" }}>
        © 2025 Deepak Thapa
      </Text>
    </Footer>
  );
};

export default AppFooter;
