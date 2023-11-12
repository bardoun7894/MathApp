import React from "react";
import DevelopmentMode from "../l/DevelopmentMode";
import LanguageContext from "../l/MathTools/Translations/LanguageContext";
import English from "../l/MathTools/Translations/en.json";
import Arabic from "../l/MathTools/Translations/ar.json";  

function Lesson({ location = "" }) {
 
  return (
    <DevelopmentMode 
      InitMathTools={true}
      LanguageContext={LanguageContext}
      EnglishTrans={English}
      ArabicTrans={Arabic} 
      Location={location}
     />
  );
}
export default Lesson;
