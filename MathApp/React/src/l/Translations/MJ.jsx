import React, { useEffect, useState } from 'react';
import ToLatex from './ToLatex';

function MJ({ j = "", lang = null, ...rest }) {
    const [spanId, setSpanId] = useState("mj" + Math.round(Math.random() * 1000000));

    useEffect(() => {
        let init = function (iteration) {
            if (typeof window === 'undefined') {
                setTimeout(function() { init(iteration) }, 500);
                return;
            }
            if (window.MathJax) {
                const span = document.getElementById(spanId);
                if (span) {
                    span.innerHTML = ToLatex(j, lang);
                    window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, spanId]);
                }
                return;
            }
            if (iteration >= 60) return; // timeout after 30 seconds
            setTimeout(function() { init(iteration + 1) }, 500);
        }
        init(0);
    }, [j, lang, spanId]);

    return (
        <span
            id={spanId}
            style={{ margin: "0 6px", display: "inline-block" }}
            {...rest}
        ></span>
    );
}

export default MJ;
