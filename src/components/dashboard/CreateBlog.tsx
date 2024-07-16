import { Editor } from "@toast-ui/react-editor";
import ToastEditor from "./ToastEditor";
import { useRef } from "react";

const CreateBlog = () => {
  const editorRef = useRef<Editor>(null);
  const onChange = () => {
    const data = editorRef.current?.getInstance().getHTML();
    console.log(data);
  };
  const getContents = () => {
    const htmlContent = editorRef.current?.getInstance().getHTML();

    console.log(htmlContent);
  };
  return (
    <div className="w-full h-full">
      <div>
        <ToastEditor editorRef={editorRef} onChange={onChange} />
      </div>
      <div className="w-full flex justify-end items-center mt-[1vw]">
        <div className="w-[8vw] h-[3vw] bg-[#ccc] flex justify-center items-center rounded-lg duration-300 hover:bg-[#aaa] hover:font-bold">
          <button className="w-full h-full" onClick={getContents}>
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
