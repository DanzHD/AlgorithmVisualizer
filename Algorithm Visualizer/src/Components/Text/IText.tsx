import React from "react";

export interface IText {
    heading?: boolean,
    subheading?: boolean,
    children: React.ReactNode,
    bold?: boolean,
    className?: string,
    centered?: boolean,
    small?: boolean,
    ellipsis?: boolean,
    onClick?: React.MouseEventHandler
}