import React from 'react';
import './button.scss';

interface ButtonProp {
    className?: string;
}

// 判断child是否有值 有值则返回
function childValue(child: React.ReactNode) {
    return <span>{child}</span>;
}

const Button: React.FC<ButtonProp> = (props) => {
    const {children} = props;
    const text = children || children === 0 ? childValue(children) : null;
    return <button className={'hm-btn'}>
        {text}
    </button>
};

export default Button;