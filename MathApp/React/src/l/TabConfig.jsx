const config = {
  tabs:{
    learn: {
      name: 'Learn',
      numberOfSteps: 4,
      currentStep: 1,
      visible: false,
      params:{
        step: 1
      }
    },
    common: {
      name: 'Common Examples',
      numberOfSteps: 4,
      currentStep: 1,
      visible: false,
      params:{
        step: 1
      }
    },
    quiz: {
      name: 'Quiz',
      visible: false,
      params: {},
      numberOfQuestions: 18
    },
    challenge: {
      name: 'Challenge',
      visible: false,
      params: {},
      numberOfQuestions: 3
    },
    challengegames: {
      name: 'Challenge Games',
      numberOfGames: 1,
      visible: false
    },
    trybyyourself: {
      name: 'Try by yourself',
      numberOfSteps: 3,
      visible: true
    }
  }
}

export default config
