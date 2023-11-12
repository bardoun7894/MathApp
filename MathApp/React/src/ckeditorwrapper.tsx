import useCustomEditor from './useCustomEditor';

function CKEditorWrapper({ id ="" }) {
    const { editorRef } = useCustomEditor({
        initialValue: String.raw``,
        onChangeEditor: (data) => {
            console.log(`Editor ${id} data:`, data);
            localStorage.setItem(`ckeditorContent-${id}`, data);
        }
    });

    return (
        <div style={{ margin: '20px 0' }}>
            <h2>{id}</h2>
            <textarea id={id} ref={editorRef} />
        </div>
    );
}

export default CKEditorWrapper;
 