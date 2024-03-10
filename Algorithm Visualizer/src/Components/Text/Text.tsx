import {IText} from "./IText.tsx";
import cx from 'classnames'
import React from "react";
import "./_text.scss"

export default function Text({
    heading,
    subheading,
    children,
    bold,
    className,
    centered,
    small,
    ellipsis,
    onClick
}: IText) {

    const textStyles: React.CSSProperties = {
        textAlign: centered ? "center": 'start',
        textOverflow: ellipsis ? "ellipsis" : 'none'
    }


    const computedClassNames = cx(
        'text',
        {
            'text--small': small,
            'text--bold': bold
        },
        className
    );

    if (heading) {
        return <h1 onClick={onClick} style={textStyles} className={computedClassNames}>{children}</h1>
    }

    if (subheading) {
        return <h2 onClick={onClick} style={textStyles} className={computedClassNames}>{children}</h2>
    }

    return <p onClick={onClick} style={textStyles} className={computedClassNames}>{children}</p>
}