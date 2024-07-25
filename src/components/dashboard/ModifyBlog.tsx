import { Editor } from "@toast-ui/react-editor";
import ToastEditor from "./ToastEditor";
import { useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogStore } from "../../store/store";

const ModifyBlog = () => {
  const editorRef = useRef<Editor>(null);
  const router = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { blogList } = useBlogStore();
  const blogItem = blogList.find((item) => item.id === Number(id));

  const onChange = () => {
    const data = editorRef.current?.getInstance().getHTML();
    console.log(data);
  };
  const onEeditorSave = async () => {
    const editorInstance = editorRef.current?.getInstance();
    const parser = new DOMParser();
    const htmlContent = editorInstance.getHTML();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const firstHeading = doc.querySelector("h1, h2, h3, h4, h5, h6");
    const title = firstHeading?.textContent;

    try {
      await axios.patch(`http://localhost:4000/blog/${id}`, {
        title,
        description: htmlContent,
      });
      alert("글이 저장되었습니다.");
      router("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="w-full h-full pt-[2vw]">
      <div>
        <ToastEditor
          editorRef={editorRef}
          onChange={onChange}
          initialValue={blogItem?.description}
        />
      </div>
      <div className="w-full flex justify-end items-center mt-[1vw]">
        <div className="w-[8vw] h-[3vw] bg-[#ccc] flex justify-center items-center rounded-lg duration-300 hover:bg-[#aaa] hover:font-bold">
          <button className="w-full h-full" onClick={onEeditorSave}>
            수정하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModifyBlog;
