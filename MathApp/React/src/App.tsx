import React, { useState } from 'react';
import Editor from './Editor';

function App() {
  const [editorCount, setEditorCount] = useState(1);
  const [editorKeys, setEditorKeys] = useState([0]); // Array to hold unique keys for each editor

  // Handle change in input field
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    const count = parseInt(e.target.value, 10);
    if (!isNaN(count) && count >= 0) {
      setEditorCount(count);
      // Update the keys array
      setEditorKeys(Array.from({ length: count }, (_, i) => i));
    }
  };

  return (
    <div style={{ height: 350 }}>
      <input type="number" onChange={handleInputChange} value={editorCount} />
      {editorKeys.map(key => (
        <Editor key={key} />
      ))}
    </div>
  );
}

export default App;
