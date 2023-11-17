import useCustomEditor from './useCustomEditor';

function Editor() {
  const { editorRef } = useCustomEditor({
    initialValue: '',
    onChangeEditor: (data) => {
      console.log('Editor data:', data);
    },
  });
  //hello 
  //dd
  

  return <textarea ref={editorRef} />;
}

export default Editor;
