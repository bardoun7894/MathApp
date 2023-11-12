import React, {useContext} from 'react';
import WithMathJax from 'Components/Translations/Loader/WithMathJax';
import MJ from 'Components/Translations/Loader/MJ';

export default function MixedFraction({
    whole = 2,
    num = 3,
    dom = 4,
    initParser = false,
    ...props
}) {
    const Lang = localStorage.getItem("language");
    return(
        <>
        {
            initParser === true &&
            <WithMathJax />
        }
        {
            Lang === "ar" &&
            <MJ j={`\\frac{${num}}{${dom}}${whole}`} {...props}/>
        }
        {
            Lang !== "ar" &&
            <MJ j={`${whole}\\frac{${num}}{${dom}}`} {...props}/>
        }
        </>
    )
}