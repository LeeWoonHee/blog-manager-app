import { Editor } from "@toast-ui/react-editor";
import ToastEditor from "./ToastEditor";
import { useRef } from "react";

const CreateBlog = () => {
  const editorRef = useRef<Editor>(null);
  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    console.log(data);
  };
  const getContents = () => {
    const markdownContent = editorRef.current?.getInstance().getMarkdown();
    const htmlContent = editorRef.current?.getInstance().getHTML();

    console.log(markdownContent, htmlContent);
  };
  return (
    <div className="w-full h-full">
      <div>
        <ToastEditor editorRef={editorRef} onChange={onChange} />
      </div>
      <button onClick={getContents}>에디터 내용 출력하기</button>
    </div>
  );
};

export default CreateBlog;
