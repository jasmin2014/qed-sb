import classNames from "classnames";
import React from "react";

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: "lg" | 'sm';
    btnType?: "primary" | "default" | "danger" | "link";
    children: React.ReactNode,
    href?: string
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;

// Partial 将所有属性都设置为可选的属性；
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

export const Button: React.FC<ButtonProps> = (props) => {
    const { 
        btnType,
        className,
        disabled,
        size,
        children,
        href,
        ...restProps
    } = props;

    // btn, btn-lg, btn-primary
    const classes = classNames('btn', {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === "link") && disabled
    }, className)
    if(btnType === "link" && href) {
        return (
            <a
            className={classes}
            href={href}
            {...restProps}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
            className={classes}
            disabled={disabled}
            {...restProps}
            >
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    disabled: false,
    btnType: "default"
}

export default Button