import React, {useEffect} from 'react'

export default function WithMathJax({inputs = []}) {
    useEffect(() => {
        let typeset = (iteration) => {
            if (typeof window === 'undefined') {
                setTimeout(() => typeset(iteration), 500);
                return;
            }
            if (window.MathJax) {
                window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub])
                return;
            }
            if (iteration >= 60) return; //timeout 
            setTimeout(() => typeset(iteration + 1), 500);
        }
        typeset(0);
    }, inputs)
    return null
}