import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/toastui-editor.css";

type Props = {
  editorRef: React.Ref<Editor>;
  onChange: () => void;
  initialValue?: string;
};

const ToastEditor = ({ editorRef, onChange, initialValue = " " }: Props) => {
  return (
    <Editor
      initialValue={initialValue}
      previewStyle="vertical"
      height="70vh"
      initialEditType="wysiwyg"
      useCommandShortcut={false}
      ref={editorRef}
      hideModeSwitch={true}
      onChange={onChange}
      toolbarItems={[
        ["heading", "bold", "italic", "strike"],
        ["hr", "quote"],
        ["ul", "ol", "task"],
        ["link"],
        ["code", "codeblock"],
      ]}
    />
  );
};

export default ToastEditor;
