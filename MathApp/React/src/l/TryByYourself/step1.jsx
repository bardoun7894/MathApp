import React, { useContext, useEffect, useState } from "react";
import Language from "../../Translations/LanguageContext";
import WithMathJax from 'Components/Translations/Loader/WithMathJax'
import Loader from 'Components/Translations/Loader/Loader'
import MJ from 'Components/Translations/Loader/MJ'
import MathInput from "Components/MathTools/MathInput";
import MathWidgets from "Components/MathTools/MathWidgets";
import Algebrite from "algebrite";
import { derivative } from "mathjs";
import { trigArabic } from "../../Scripts/trigArabic";
import Styles from "../../Styles/ahmed.module.css"

const Step1 = () => {
  const Lang = useContext(Language);
  const [differentiation, SetDifferentiation] = useState("");
  const [showCalculator, SetShowCalculator] = useState(false);
  const nerdamer = require("nerdamer/all.min");
  const keys = Lang.keys["AhmedMostafa"];
  const isEnglish = Lang.current === "en";
  function showKeyboardHandler() {
    if (!showCalculator) {
      SetShowCalculator(true);
    } else {
      SetShowCalculator(false);
    }
  }
  useEffect(() => {
    let init = () => {
      if (window.ocpu)
        window.ocpu.seturl(
          "https://cloud.opencpu.org/ocpu/apps/KareemMohamed95/LatexToR/R"
        );
      else setTimeout(init, 500);
    };
    init();
  });
  return (
    <>
    <WithMathJax inputs={null}/>
    <Loader className="text-out">
      <div className={`${Styles.blueText}`} style={{padding: "25px 0px"}}>{keys["T1.1"]}</div>
      <div className="flex-even" style={{ marginTop: "10px" }}>
        <div style={{ textAlign: Lang.current == "en" ? "left" : "right" }}>
          <span>{keys["T1.2"]}</span>
          <br />
          <MathInput
            id={"learnMathIn"}
            width={"250px"}
            onChange={async (value) => {
              console.log(value)
              // window.ocpu.rpc("latex2r", { l: value }, (result) => {
              //   let standardMath = result[0];
              //   if (standardMath == "syntax error") {
              //     SetDifferentiation("");
              //     return;
              //   }
              //   let diff = derivative(standardMath, "x").toString();
              //   let simplifiedMath = Algebrite.simplify(diff).toString();
              //   var Latex = nerdamer(simplifiedMath).toTeX();
              //   SetDifferentiation(trigArabic(Latex));
              // });
            }}
          />
        </div>
        <div style={{ textAlign: isEnglish ? "left" : "right" }}>
          <span>{keys["T1.3"]}</span>
          <br />
          <Loader className={`${Styles.differentiationDiv}`} inputs={[differentiation]}>
            <MJ j={differentiation} />
          </Loader>
        </div>
      </div>
      <div className="col-sm-12">
        <span>
          {" "}
          <button
            className={`${Styles.keyboardButton}`}
            style={{ marginBottom: "10px" }}
            onClick={showKeyboardHandler}
          >
            {" "}
            {keys["Keyboard"]}
          </button>
        </span>
        <span>
          {showCalculator && <MathWidgets containerClass={`${Styles["widgets-div"]}`} />}
        </span>
      </div>
    </Loader>
    </>
  );
};

export default Step1;