import React, { useState, useEffect, useContext } from "react";
import styles from "../../Styles/Fdl.module.css";
import Language from "../../Translations/LanguageContext";
import FunctionPlotter from "../../CustomComponents/FunctionPlotterReem";
import MathInput from "Components/MathTools/MathInput";
import Keyboard from "../../CustomComponents/Keyboard";
import { getMathInputWithId, filterSyntaxMathError_afterAlgeb } from "../../Scripts/Functions";
import MJ from "Components/Translations/Loader/MJ";
import Loader from "Components/Translations/Loader/Loader";
import WithMathJax from "Components/Translations/Loader/WithMathJax";
// import { ButtonMain, SelectInputLatex } from "@gazzar97/widgets";
import { derivative } from "mathjs";
import { trigArabic } from "../../Scripts/trigArabic";
import { CalculationOfy } from "../../Scripts/calulate-y";
import Algebrite from "algebrite";
import round from "Components/Utilities/Math/round";
import tnum from "Components/Translations/tnum";

const Step3 = (props) => {
  const Lang = useContext(Language);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [inputFunction1, setInputFunction1] = useState("");
  const [inputFunction2, setInputFunction2] = useState("");
  const [inputKey1, setInputKey1] = useState(Math.random());
  const [inputKey2, setInputKey2] = useState(Math.random());
  const [waiting, setWaiting] = useState(false);
  const [drawingFlag, setDrawingFlag] = useState(0);
  const [selectValue, setSelectValue] = useState("");
  const [nextValue, setnexttValue] = useState("");
  const [differentiation, SetDifferentiation] = useState("");
  const [diff, SetDiff] = useState("");
  const [Eq, SetEq] = useState("");
  const [tangentline, SetTangentline] = useState("");
  const [b, Setb] = useState("");
  const [waitingForMathAPI, setWaitingForMathAPI] = useState(true);
  const nerdamer = require("nerdamer/all.min");

  let onChangeselect1 = (selectValue) => {

    let nextValue = selectValue;
    if (nextValue == 1) {
      nextValue = Math.PI / 2
    }
    else if (nextValue == 2) {
      nextValue = Math.PI / 3
    }
    else if (nextValue == 3) {
      nextValue = Math.PI / 4
    }
    else if (nextValue == 4) {
      nextValue = Math.PI / 6;
    }
    else if (nextValue == 5) {
      nextValue = 0
    }
    setSelectValue(selectValue);
    setnexttValue(nextValue);
  };

  const data = [
    {
      id: 0, value: <>
        <WithMathJax />
      </>
    }, {
      id: 1, value: <div style={{ display: "inline-grid" }}>
        <div>π</div>
        <div style={{ backgroundColor: "black", height: "1px" }} />
        <div>{tnum(2)}</div>
      </div>
    }, {
      id: 2, value: <div style={{ display: "inline-grid" }}>
        <div>π</div>
        <div style={{ backgroundColor: "black", height: "1px" }} />
        <div>{tnum(3)}</div>
      </div>
    }, {
      id: 3, value: <div style={{ display: "inline-grid" }}>
        <div>π</div>
        <div style={{ backgroundColor: "black", height: "1px" }} />
        <div>{tnum(4)}</div>
      </div>
    }, {
      id: 4, value: <div style={{ display: "inline-grid" }}>
        <div>π</div>
        <div style={{ backgroundColor: "black", height: "1px" }} />
        <div>{tnum(2)}</div>
      </div>
    }, {
      id: 5, value: <div>
        {tnum(0)}
      </div>
    }];

  const handleClickDraw = () => {
    /** Tangent **/
    try {
      if (nextValue !== "") {
        let x = nextValue;
        let yeq = CalculationOfy(Eq);
        let y = eval(yeq);

        let eveq = CalculationOfy(diff);
        let m1 = eval(eveq);
        let b1 = (y - (m1 * x));

        let eq = "" + round(m1, 5) + " * x + (" + round(b1, 5) + ")";
        SetTangentline(eq);
      }
    }
    catch {
      //error
    }
    /** Tangent **/
    setDrawingFlag(drawingFlag + 1);
  };

  const toggleKeyboardAppearance = () => {
    setShowKeyboard(!showKeyboard);
  };

  const handleChangeInputFunction = async (input_id) => {
    setWaitingForMathAPI(true);
    const standardInput = await getMathInputWithId(input_id);
    setTimeout(() => {
      setWaitingForMathAPI(false);
    });
    //* I will not simplify input here, it will be simplify in the plotting component
    if (input_id == "math-input-1") {
      setInputFunction1(filterSyntaxMathError_afterAlgeb(standardInput))
    }
    else {
      setInputFunction2(filterSyntaxMathError_afterAlgeb(standardInput))
    };
  };
  return (
    <Loader className={`${styles["try-container"]}`} style={{ alignItems: "center" }}>
      <WithMathJax inputs={null} />
      <div style={{color:'#4f79b4',fontSize:'20px'}}>{Lang.keys["Reem"]["try3"]}</div>
      <div className={`${styles["flex-col"]}`}>
      <div className={`${styles["all-row-xs-col"]}`} style={{ width: "100%", alignItems: "center" }}>
        <div
          className={`${styles["all-col-xs-row"]} ${waiting ? styles["disabled-section"] : ""}`}
          style={{ minWidth: "200px", alignItems: "center" }}
        >
            
          <div className={`${styles["flex-col"]}`}>
            <div className={`${styles["flex-row"]}`} style={{ alignItems: "baseline", minHeight: "45px" }}>
          <MJ j={`\\transs{f}{د}(x)=`} />{" "}
          <MathInput
            key={inputKey1}
            id={"math-input-1"}
            value={"cos(x)"}
            onChange={
              async (value) => {
                let init = () => {
                  if (window.ocpu)
                    window.ocpu.seturl(
                      "https://cloud.opencpu.org/ocpu/apps/KareemMohamed95/LatexToR/R"
                    );
                  else setTimeout(init, 500);
                };
                init();
                window.ocpu.rpc("latex2r", { l: value }, (result) => {
                  let standardMath = result[0];
                  if (standardMath == "syntax error") {
                    SetDifferentiation("");
                    return;
                  }
                  SetEq(standardMath);
                  let diff = derivative(standardMath, "x").toString();
                  SetDiff(diff);
                  let simplifiedMath = Algebrite.simplify(diff).toString();
                  var Latex = nerdamer(simplifiedMath).toTeX();
                  SetDifferentiation(trigArabic(Latex));
                  handleChangeInputFunction("math-input-1");
                });
              }}
          />
      </div>

    <div className={`${styles["flex-row"]}`}
         style={{ alignItems: "baseline", minHeight: "45px", marginTop: "5px" }}>
        <MJ j={'x='}></MJ>
      {/* <SelectInputLatex
        data={data}
        id={"math-input-2"}
        value={selectValue}
        style={{ width: '120px' }}
        onChange={onChangeselect1}

      ></SelectInputLatex> */}
      </div>

      <div className={`${styles["all-row-xs-col"]}`}>
        {/* <ButtonMain onClick={toggleKeyboardAppearance}>
          {Lang.keys["Reem"]["Keyboard"]}
        </ButtonMain> */}
      
        <br />
        <MJ j={''}></MJ>
        <div >
          {/* <ButtonMain onClick={handleClickDraw}>{Lang.keys["Reem"]["Draw"]}</ButtonMain> */}
        </div>
      </div>

      <div className="flex-row">
        <Keyboard showKeyboard={showKeyboard} rows={[true, true, true, false, false, false]} />
      </div>
        </div>
        </div>
      <div className={`${styles["flex-col"]}`} style={{ margin: "10px" }}>
        
        <FunctionPlotter
          samplesCount={1700}
          plotDim={450}
          nx={9}
          ny={9}
          xStep={1}
          yStep={1}
          numberOfFunctions={1}
          inputFunctions={[inputFunction1]}
          xRange={{ min: -9, max: 9 }}
          plottingColors={["#4f79b4", "#26bf00"]}
          drawByButton={true}
          onWaiting={setWaiting}
          tangentline={tangentline}
          valueofx={nextValue}
          drawingFlag={drawingFlag}
        />
      </div>
      </div>
      </div>

    </Loader>
  );
};

export default Step3;