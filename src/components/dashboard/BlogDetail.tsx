import { Link, useParams } from "react-router-dom";
import { useBlogStore } from "../../store/store";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { blogList } = useBlogStore();
  const blogItem = blogList.find((item) => item.id === Number(id));

  if (!blogItem) {
    return <div>블로그 게시물을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="h-full w-full relative">
      <div className="w-full h-full border-[1px] border-[#eee] ">
        <div className="px-[1.5vw] w-full h-full overflow-auto">
          <Viewer initialValue={blogItem.description} />
        </div>
      </div>
      <Link to="/" className="text-[1vw] absolute top-[5px] right-[15px]">
        돌아가기
      </Link>
    </div>
  );
};

export default BlogDetail;
