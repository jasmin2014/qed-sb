import React from "react";
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: "lg" | 'sm';
    btnType?: "primary" | "default" | "danger" | "link";
    children: React.ReactNode;
    href?: string;
}
declare type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
declare const Button: React.FC<ButtonProps>;
export default Button;
