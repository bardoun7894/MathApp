import React, { useEffect, useState, useRef } from "react";
import { createRoot } from "react-dom/client";

import MathResources from "./MathTools/MathResources";
import Translations from "./Translations/Translations";
import { tserver } from './master/Translations/server'
import MathInput from "./MathTools/MathInput";
import  MathWidgets  from './MathTools/MathWidgets';

function DevelopmentMode({
  InitMathTools,
  LanguageContext,
  EnglishTrans,
  ArabicTrans,
  MathOptions = { arabicMapping: "1" }, 
}) {
  const rootRef = useRef(null);
  let lang =
    localStorage.getItem("language") == undefined
      ? "en"
      : localStorage.getItem("language");
  let keys = lang == "en" ? EnglishTrans : ArabicTrans;
  const LanguageProvider = LanguageContext.Provider;
  const language = {
    keys: keys,
    current: lang,
  };
  const GTranslations = tserver(); 
  var template =   <>
   <Translations />
   <MathResources MathOptions={MathOptions} /> 
  <div className="container-fluid">
    <br />
    <div id="lessonPage" className={language.current}>
      <LanguageProvider value={language}>
        <div  style={{  textAlign: "end" ,direction:'rtl' }} >
        <MathInput width = "200px"  /> 
          <div>
            <div id="Header-one" style={{ display: "inline-block", width: "45%" }}>
              <h4>{language.keys["Lesson Name"]}</h4>
            </div>
            <div style={{ display: "inline-flex", width: "54%", justifyContent: "flex-end" }}>
              <button  id="appinit_language"  type="button"
                className="btn btn-default action-button bgtrans shiny-bound-input"
                onClick={() => {
                  localStorage.setItem("language", language.current == "en" ? "ar" : "en");
                  window.location.reload();
                }}
              >
                {GTranslations["Change Language"]}
              </button>
            </div>
          </div>
        </div>
        <MathWidgets   ></MathWidgets>
      </LanguageProvider>
    </div>
  </div>
  </>; 

  useEffect(() => {
    if (!rootRef.current) {
      rootRef.current = createRoot(document.getElementById("appTemplateContent"));
    }
    rootRef.current.render(template);
  }, []);

  return <div id="appTemplateContent" />;
}

export default DevelopmentMode;
