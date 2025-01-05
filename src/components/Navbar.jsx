import { Typography, Menu } from "antd";

const { Title } = Typography;

const Navbar = () => {
  return (
    <div className="w-full bg-black text-white flex justify-between items-center p-4">
      <a href="/" style={{ textDecoration: "none" }}>
        <Title level={2} style={{ color: "#FFFFFF", margin: 0 }}>
          PORTFOLIO
        </Title>
      </a>

      <Menu
        mode="horizontal"
        theme="dark"
        style={{ backgroundColor: "transparent" }}
        selectable={false}
      >
        <Menu.Item key="about">
          <a href="/about" title="Know About Me" style={{ color: "#FFFFFF" }}>
            About
          </a>
        </Menu.Item>
        <Menu.Item key="contact">
          <a href="/contact" title="Get In Touch" style={{ color: "#FFFFFF" }}>
            Contact
          </a>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
