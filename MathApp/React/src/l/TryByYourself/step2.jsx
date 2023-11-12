import React , { useContext , useEffect, useState} from 'react'
import Language from '../../Translations/LanguageContext'
import WithMathJax from 'Components/Translations/Loader/WithMathJax'
import Loader from 'Components/Translations/Loader/Loader'
import MJ from 'Components/Translations/Loader/MJ'
import MathInput from "Components/MathTools/MathInput";
import MathWidgets from "Components/MathTools/MathWidgets";
import Algebrite from "algebrite";
import { derivative } from "mathjs";
import { trigArabic } from "../../Scripts/trigArabic";
import Styles from "../../Styles/ahmed.module.css"
import FunctionPlotter from "../../CustomComponents/FunctionPlotterAhmed";
// import { ButtonMain } from "@gazzar97/widgets";
// import { OrangeMessage  } from '@gazzar97/widgets'

const Step2 = () => {
  const Lang = useContext(Language);
  const keys = Lang.keys["AhmedMostafa"];
  const isEnglish = Lang.current === "en";
  const[showCalculator, SetShowCalculator] = useState(false);
  const [differentiation, SetDifferentiation] = useState("");
  const [inputFunction1, setInputFunction1] = useState("");
  const [inputFunction2, setInputFunction2] = useState("");
  const [inputFunction, setInputFunction] = useState("");
  const [waiting, setWaiting] = useState(true);
  const [drawingFlag, setDrawingFlag] = useState(0);
  const [waitingForMathAPI, setWaitingForMathAPI] = useState(true);
  const[orangeMessageFlag, setOrangeMessageFlag] = useState(0);
  const[orangeMessageFlagN, setOrangeMessageFlagN] = useState(1);
  const [orangeMessageContent, setOrangeMessageContent] = useState({
    inputFraction: "",
    differentiation: "",
    flag: false
  })
  const nerdamer = require("nerdamer/all.min");
  function showKeyboardHandler (){
      if (!showCalculator) 
        SetShowCalculator(true);
      else SetShowCalculator(false);
  }
  const getMathInputWithId = async (input_id) => {
    let latexValue = window.MIValue(input_id);

    if (latexValue === "") return "empty";
    window.ocpu.seturl("https://cloud.opencpu.org/ocpu/apps/KareemMohamed95/LatexToR/R");
  
    let standardMath = await new Promise((resolve) =>
      window.ocpu.rpc("latex2r", { l: latexValue }, (result) => {
        resolve(result[0]);
      })
    );
    if (standardMath === "syntax error") {
      setInputFunction("syntax error");
      return "syntax error";
    }
    else return standardMath;
  };
  const handleClickDraw = () => {
    setDrawingFlag(drawingFlag + 1);
  };
  const handleChangeInputFunction = async (input_id, draw = false) => {
    try {
      setWaitingForMathAPI(true); 
      setOrangeMessageFlag(orangeMessageFlag + 1);
      const standardInput = await getMathInputWithId(input_id);
      if (standardInput === "syntax error") {
        SetDifferentiation("");
      }
      let input = nerdamer(standardInput).toTeX();
      setInputFunction(trigArabic(input));
      let diff = derivative(standardInput, "x").toString();
      let simplifiedMath = Algebrite.simplify(diff).toString();
      var Latex = nerdamer(simplifiedMath).toTeX();
      SetDifferentiation(trigArabic(Latex));
      setTimeout(() => {
        setWaitingForMathAPI(false);
      });
      setDrawingFlag(drawingFlag + 1);
      setInputFunction1(standardInput);
      setInputFunction2(simplifiedMath);
      if(draw === true) {
        setOrangeMessageContent({
          inputFraction: trigArabic(input),
          differentiation: trigArabic(Latex),
          flag: true
        })
      }
    }
    catch(e) {
      
    }
  };
  
  useEffect(() => {
    let init =  () => {
      if (window.ocpu){
        window.ocpu.seturl(
          "https://cloud.opencpu.org/ocpu/apps/KareemMohamed95/LatexToR/R"
        );
      }
      else setTimeout(init, 500);
    };
    init();
  }, []);
  return(
    <>
    <WithMathJax inputs={null}/>
    <div className = "row flex-center wrapflex text-out" style={{margin: "2vh 10px"}}>
        <Loader className="text-out">
          <div className={`${Styles.blueText}`}>{keys["T2.1"]}</div>
          <div className="flex-even">
            <div className="flex-center wrapflex" style={{fontSize: "20px", position: "relative", left: isEnglish ? "-54px" : "0px", right: isEnglish ? "0px" : "-58px", alignContent: "center"}}>
              <MJ j={"\\transs{f}{د}(x) = "}/>
              <MathInput
                id={"math-input"}
                width={"250px"}
                onChange = {() =>{handleChangeInputFunction("math-input")}}
              />
              <div className="w-100" style={{height: "15px"}}/>
              <div>
                <div className="flex-center">
                  
                  <div className={`${waitingForMathAPI ? Styles["disabled-section"]  : ""}`}>
                    
                  </div>
                </div>
                <div>
                  {showCalculator && <MathWidgets containerClass={`${Styles["widgets-div"]}`} />}
                </div>
                <Loader inputs={[orangeMessageContent.inputFraction, orangeMessageContent.differentiation]}>
                  {(orangeMessageContent.flag === false) ? 
                    <div></div> :
                    <div style={{position:"relative", top: "25px"}}>
                     
                    </div>

                  }
                </Loader>
              </div>
            </div>
            <div style={{ margin: "10px" }}>
              <FunctionPlotter
                samplesCount={1700}
                plotDim={450}
                nx={9}
                ny={9}
                xStep={1}
                yStep={1}
                numberOfFunctions={2}
                inputFunctions={[inputFunction1, inputFunction2]}
                xRange={{ min: -9, max: 9 }}
                plottingColors={["#4f79b4", "#26bf00"]}
                drawByButton={true}
                onWaiting={setWaiting}
                drawingFlag={drawingFlag}
              />
            </div>
          </div>
        </Loader>
    </div>
    </>
  )
  
}

export default Step2