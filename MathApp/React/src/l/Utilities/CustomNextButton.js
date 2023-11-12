import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
// import { ButtonMain, ButtonTemp } from '@gazzar97/widgets';
import { tserver } from 'Components/Master/Translations/server'

const CustomNextButton = ({ LanguageContext,
  Config,
  currentTab,
  currentStep,
  lessonSlug }) => {

  const Lang = useContext(LanguageContext);
  const GTranslations = tserver();
  const history = useHistory();
  let RenderedButton = Number(currentStep) === Number(Config.tabs.learn.numberOfSteps)
                       ? "ButtonTemp" : "ButtonMain";
  return (
    <RenderedButton
      onClick={() => {
        if (Number(currentStep) === Number(Config.tabs.learn.numberOfSteps)) {
          sessionStorage.setItem("learnCompleted", "yes");
          history.push(`/lessons/${lessonSlug}/quiz`);
        } 
        else history.push(`/lessons/${lessonSlug}/learn?step=${Number(currentStep) + 1}`)
      }}
      style={{ width: "170px", whiteSpace: "nowrap" }}>
      {Number(currentStep) === Number(Config.tabs.learn.numberOfSteps) && GTranslations['Quiz']}
      {Number(currentStep) !== Number(Config.tabs.learn.numberOfSteps) && GTranslations['Next Button']}
    </RenderedButton>
  )
}

export default CustomNextButton