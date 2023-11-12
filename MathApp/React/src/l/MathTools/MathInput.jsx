import React, { useEffect } from 'react'
import IsEmpty from '../Utilities/IsEmpty';

function MathInput({id = "mi12", 
                    width = "200px",
                    onChange = (value)=> {
                        console.log(value);  
                    },
                    defaultLatex = ""}) {
 useEffect(() => {
            let init = (id) => {
            if (typeof window === 'undefined') {
                setTimeout(() => init(id), 500);
                return;
            }
            if(IsEmpty(window.$) || IsEmpty(window.MQ)) {
                setTimeout(() => init(id), 500);
                return;
               }
            let htmlElement = document.getElementById(id);
            let config = {
            handlers: { 
                edit: function(){ 
                        onChange(window.MIValue(id));
                }},
                enter: function() { 
                     onChange(window.MIValue(id));},
                    restrictMismatchedBrackets: true
                };
            window.MQ.MathField(htmlElement, config);
            if(!IsEmpty(defaultLatex))
               window.MQ.MathField(document.getElementById(id)).latex(defaultLatex);
               console.log(defaultLatex);
 
        }
        init(id);
    }, []) 
    return (<div id = {id}  style = {{width: width}}
                onFocus = {() => window.lastFocusedMQ = id}>
            </div>)
}
export default MathInput