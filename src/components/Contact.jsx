import React, { useEffect, useState } from "react";
import { useForm } from "@formspree/react";
import { Input, Button, Form, notification } from "antd";
import { MailOutlined, SendOutlined, SmileOutlined } from "@ant-design/icons";
import Confetti from "./Confetti.jsx";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Deepak Thapa";
  }, []);

  const [state, handleSubmit] = useForm("meqybged");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const openNotification = () => {
    notification.open({
      message: <span style={{ color: "white" }}>Message Sent 🎉</span>,
      description: (
        <span style={{ color: "white" }}>
          Thank you for reaching out! Your message has been sent successfully. I’ll get back to you shortly.
        </span>
      ),
      icon: <SmileOutlined style={{ color: "#52c41a" }} />,
      placement: "topRight",
      style: {
        backgroundColor: "#111111",
        borderRadius: "8px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      },
    });
  };

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      setEmail("");
      setMsg("");
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

      openNotification(); // Trigger the elegant notification
    }
  }, [state.succeeded]);

  return (
    <div className="w-full bg-black text-white p-6">
      {showSuccess && <Confetti />}
      <div className="flex flex-col items-center justify-start h-[100vh]">
        <h3 className="text-center text-3xl mt-10 mb-10 text-white">
          Get In Touch
        </h3>

        <Form
          style={{ background: "#111111", padding: "12px", borderRadius: "8px" }}
          onFinish={handleSubmit}
          className="w-full max-w-md flex flex-col gap-4"
        >
          <Form.Item
            label={<span style={{ color: "white" }}>Email Address</span>}
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input a valid email!",
              },
            ]}
          >
            <Input
              style={{
                background: "#222222",
                color: "white",
                borderColor: "#333333",
              }}
              prefix={<MailOutlined style={{ color: "#888888" }} />}
              placeholder="johnhenkin@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form.Item>

          <Form.Item
            label={<span style={{ color: "white" }}>Message</span>}
            name="message"
            rules={[{ required: true, message: "Please input your message!" }]}
          >
            <Input.TextArea
              style={{
                background: "#222222",
                color: "white",
                borderColor: "#333333",
              }}
              placeholder="Your message for me.."
              rows={5}
              onChange={(e) => setMsg(e.target.value)}
              value={msg}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<SendOutlined />}
              loading={state.submitting}
              block
            >
              Submit
            </Button>
          </Form.Item>

          <Form.Item>
            <span
              className="text-xs font-normal"
              style={{ color: "white", opacity: 0.6 }}
            >
              After submitting, please wait a few seconds, as the mail may take a
              while to send.
            </span>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
