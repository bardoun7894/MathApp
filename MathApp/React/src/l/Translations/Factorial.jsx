export default function Factorial(text, concated = false, lang = null) {
    text = text.toString();
    if(lang === null) lang = localStorage.getItem("language");
    let result;
    if(concated === false){
        if(lang === 'ar'){
            result = "\\begin{array}{c|}" +
                    "\\alwaysar{" + text + "}" + "\\\\" +
                    "\\hline" +
                    "\\end{array}"
        }
        else{
            result = "\\begin{array}{|c}" +
                    text + "\\\\" +
                    "\\hline" + 
                    "\\end{array}"
        }
    }
    else{
        if(lang == 'ar'){
            result = "\\begin{array}{|c}" +
                    "\\alwaysar{\\alwaysar{" + text + "}}" + "\\\\" +
                    "\\hline" +
                    "\\end{array}"
        }
        else{
            result = "\\begin{array}{|c}" +
                    text + "\\\\" +
                    "\\hline" +
                    "\\end{array}"
        }
    }
    return result;
}