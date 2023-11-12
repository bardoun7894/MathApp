import React, { useEffect } from "react";

function MathResources({ MathOptions = { arabicMapping: "1" } }) {

  useEffect(() => {
    function init() {
      // Check for window object
      if (typeof window === 'undefined') {
        setTimeout(init, 500);
        return;
      }
      
      // Load jQuery if it's not loaded
      if (window.$ === undefined || window.$ === null) {
        let script = document.createElement('script');
        script.src = 'https://code.jquery.com/jquery-3.6.0.min.js'; // jQuery URL
        script.onload = init; // Once jQuery loads, re-call init
        script.onerror = () => console.error('Failed to load jQuery');
        document.head.appendChild(script);
        return;
      }

      // jQuery is loaded at this point
      let language = localStorage.getItem("language") || "en";
      let resUrl = "https://kareemmohamed95.github.io/react/math-assets";
      
      // Append MathQuill CSS
      let mathquillcss = document.createElement('link');
      mathquillcss.rel = "stylesheet";
      mathquillcss.type = "text/css";
      mathquillcss.href = `${resUrl}/mathquill/${language}/mathquill.css`;
      document.head.appendChild(mathquillcss);

      // Append Arabic Mapping script if the language is Arabic
      if (language === 'ar') {
        let arabicMapping = document.createElement('script');
        arabicMapping.src = `${resUrl}/mathquill/ar/arabicMapping/option${MathOptions.arabicMapping}.js`;
        arabicMapping.onload = () => console.log('Arabic Mapping script loaded');
        arabicMapping.onerror = () => console.error('Failed to load Arabic Mapping script');
        document.head.appendChild(arabicMapping);
      }

      // Append MathQuill script
      let mathquill = document.createElement('script');
      mathquill.src = `${resUrl}/mathquill/${language}/mathquill.js`;
      mathquill.onload = () => console.log('MathQuill script loaded');
      mathquill.onerror = () => console.error('Failed to load MathQuill script');
      document.head.appendChild(mathquill);
    }

    init();
  }, []);

  return null;
}

export default MathResources;
