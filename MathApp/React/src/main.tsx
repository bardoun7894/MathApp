import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'  
// import MathResources from '../src/l/MathTools/MathResources'
// import MathInput from '../src/l/MathTools/MathInput'
import './index.css'
// import  Lesson  from '../src/l/Lesson.jsx';

// import MathInput from '../src/l/MathTools/MathInput.jsx';
// import MathWidgets from './l/MathTools/MathWidgets.jsx'; 
//import   MathResources   from '../src/l/MathTools/MathResources' ;
// locimport { MathInput } from 'Components/MathTools/MathInput' ;
 //import Lesson from './l/Lesson'; 
//import Translations from "./l/Translations/Translations" ; 
// Select all div elements that follow the pattern "react-root"
document.querySelectorAll('[id^="ckeditor-"]').forEach(rootElement => {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
      <React.StrictMode>
          <App />
      </React.StrictMode>
  );
});