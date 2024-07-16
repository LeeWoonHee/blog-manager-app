import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/toastui-editor.css";
type Props = {
  editorRef: React.Ref<Editor>;
  onChange: () => void;
};
const ToastEditor = ({ editorRef, onChange }: Props) => {
  return (
    <Editor
      initialValue=" "
      previewStyle="vertical"
      height="70vh"
      initialEditType="wysiwyg"
      useCommandShortcut={false}
      ref={editorRef}
      hideModeSwitch={true}
      onChange={onChange}
    />
  );
};

export default ToastEditor;
