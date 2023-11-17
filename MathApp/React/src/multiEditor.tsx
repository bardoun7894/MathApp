// multiEditor.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './Editor';

const editors = ['reactEditor1', 'reactEditor2', 'reactEditor3'];

editors.forEach(editorId => {
    const editorContainer = document.getElementById(editorId);
    if (editorContainer) {
        ReactDOM.render(<Editor />, editorContainer); 
    }
});
