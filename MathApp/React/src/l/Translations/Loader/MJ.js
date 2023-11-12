import React from 'react'
import ToLatex from '../ToLatex';

export default function MJ({j = "" , lang = null, style = {}, ...rest}) {
    return (
        <span style={{margin: "0 6px", display: "inline-block", ...style}} {...rest}>
            {ToLatex(j, lang)}
        </span>
    )
}