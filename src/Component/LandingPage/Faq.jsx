import { useState } from "react";
import { PlusOutlined, UpOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
const text = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        cumque libero repellendus ullam accusantium iure molestias iste eveniet
        dolor dignissimos!
`;

const Faq = () => {
  const [activeKey, setActiveKey] = useState(["1"]);

  const panelStyle = {
    marginBottom: 16,
    background: "#fff",
    borderRadius: "10px",
    padding: ".6rem",
    boxShadow: " 0 0 6px 2px rgba(0, 0, 0, 0.1)",
    color: "#00ab9e",
  };

  const activePanelStyle = {
    ...panelStyle,
    border: "2px solid #00ab9e",
  };

  const getItems = (activeKey) => [
    {
      key: "1",
      label: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
          placeat.
        </p>
      ),
      children: <span>{text}</span>,
      style: activeKey.includes("1") ? activePanelStyle : panelStyle,
    },
    {
      key: "2",
      label: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
          placeat.
        </p>
      ),
      children: <p>{text}</p>,
      style: activeKey.includes("2") ? activePanelStyle : panelStyle,
    },
    {
      key: "3",
      label: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
          placeat.
        </p>
      ),
      children: <p>{text}</p>,
      style: activeKey.includes("3") ? activePanelStyle : panelStyle,
    },
    {
      key: "4",
      label: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
          placeat.
        </p>
      ),
      children: <p>{text}</p>,
      style: activeKey.includes("4") ? activePanelStyle : panelStyle,
    },
    {
      key: "5",
      label: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
          placeat.
        </p>
      ),
      children: <p>{text}</p>,
      style: activeKey.includes("5") ? activePanelStyle : panelStyle,
    },
  ];

  return (
    <>
      <div className="section faq-container">
        {/* <h2>FAQ</h2> */}
        <h1>Frequently Asked Questions</h1>

        <div className="accordionConatiner">
          <Collapse
            className="ant-collapse-itemss"
            size="large"
            bordered={false}
            defaultActiveKey={activeKey}
            onChange={setActiveKey}
            expandIcon={({ isActive }) =>
              isActive ? (
                <UpOutlined style={{ fontSize: "24px", color: "#00ab9e" }} />
              ) : (
                <PlusOutlined style={{ fontSize: "24px", color: "#00ab9e" }} />
              )
            }
            style={{
              background: "transparent",
            }}
            items={getItems(activeKey)}
          />
        </div>
      </div>
    </>
  );
};

export default Faq;
