import React, { useEffect } from 'react';
import useCustomEditor from './useCustomEditor';
import Lesson from './l/Lesson';
 
function App(): JSX.Element {
  const { editorRef } = useCustomEditor({
    initialValue: String.raw`.`,
    onChangeEditor: (data) => {
      console.log('Editor 1 data:', data);
    },   
  }); 

  return ( 
      <textarea ref={editorRef} />  
  );
}

export default App;
