import React from "react";

import "./test-component.scss";

interface IProps {
    theme: "primary" | "secondary";
}

const TestComponent: React.FC<IProps> = ({ theme }) => (
    <div className={`test-component test-component-${theme}`}>
        <h1 className="heading">测试组件</h1>
        <h2>看到此组件证明Storybook成功</h2>
    </div>
);

export default TestComponent;