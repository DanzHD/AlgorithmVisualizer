import {ReactNode} from "react";

export default interface IButton {
    children: ReactNode,
    onClick?: () => void,
    disabled?: boolean,
    className?: string,
    id?: string,
    small?: boolean,
    fullWidth?: boolean,
    dynamicWidth?: boolean
    type?: ButtonTypes,
    buttonOption?: ButtonOptions

}

export enum ButtonOptions {
    SUBMIT = "submit",
    BUTTON = "button",
    RESET = "reset"
}

export enum ButtonTypes {
    secondary = "primary",
    primary = "secondary"
}