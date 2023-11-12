import React, { useEffect, useState } from 'react'
import Animation from './Animation'

export default function Loader({
    children = <></>, 
    className = "",
    style = {},
    anim = "always",
    aclassName = "",
    astyle = {},
    inputs = [],
    ...rest}) {

    const initial = {
        container: "none",
        animation: astyle.display ? astyle.display:null
    }
    const [display, setDisplay] = useState(initial);
    const [cycle, setCycle] = useState(0);
    useEffect(() => {
        let reset = () => {
            if(display.container !== "none") {
                setDisplay(initial)
                if(cycle === 0)setCycle(1)
            } 
        }
        let typeset = (iteration) => {
            if (typeof window === 'undefined') {
                setTimeout(() => typeset(iteration), 500);
                return;
            }
            if (window.MathJax) {
                window.MathJax.Hub.Queue(() => {
                    setDisplay({
                        animation: "none",
                        container: style.display ? style.display:null
                    })
                });
                return;
            }
            if (iteration >= 60) return; //timeout 
            setTimeout(() => typeset(iteration + 1), 500);
        }
        reset()
        typeset(0);
    }, inputs);
    return (
        <>
            {anim === "always" && display.animation !== "none" &&
            <div className={className} style={style} {...rest}>
                <Animation className={aclassName} style={astyle}/>
            </div>
            }
            {anim === "refresh" && cycle === 1 && display.animation !== "none" &&
            <div className={className} style={style} {...rest}>
                <Animation className={aclassName} style={astyle}/>
            </div>
            }
            <div className={className} style={{...style, display: display.container}} {...rest}>
                {children}
            </div>
        </>
    )
}
