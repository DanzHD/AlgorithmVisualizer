import "./_button.scss";
import cx from "classnames";
import IButton, {ButtonOptions, ButtonTypes} from "./IButton.tsx";



export default function Button({
    children,
    onClick,
    disabled,
    className,
    id,
    small,
    fullWidth,
    dynamicWidth,
    type = ButtonTypes.secondary,
    buttonOption = ButtonOptions.BUTTON
}: IButton) {


    const computedClasses = cx(
        "button",
        `button--${type}`,
        {
            "button--small": small,
            "button--full-width": fullWidth,
            "button--dynamic-width": dynamicWidth,
        },
        className
    );


    return <button type={buttonOption} onClick={onClick} id={id} className={computedClasses} disabled={disabled}>{children}</button>
}