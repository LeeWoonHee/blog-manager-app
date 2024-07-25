import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link, useNavigate } from "react-router-dom";
import { useBlogStore } from "../../store/store";
import axios from "axios";
type FunctionProps = {
  selected: number;
};

const BlogList = () => {
  const itemsPerPage = 10; // 페이지당 표시할 항목 수
  const [currentPage, setCurrentPage] = useState(0);
  const { blogList, accessToken } = useBlogStore();
  const router = useNavigate();

  // 현재 페이지의 항목을 계산
  const offset = currentPage * itemsPerPage;
  const currentItems = blogList.slice(offset, offset + itemsPerPage);
  const pageCount =
    Math.ceil(blogList.length / itemsPerPage) === 0
      ? 1
      : Math.ceil(blogList.length / itemsPerPage);

  const handlePageClick = ({ selected }: FunctionProps) => {
    setCurrentPage(selected);
  };

  const onRemoveBlogItem = async (id: number) => {
    try {
      await axios.delete(`http://localhost:4000/blog/${id}`);
      alert("글이 삭제되었습니다.");
      router("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="w-full h-full">
      <div className="w-full h-[10%] flex flex-wrap items-center">
        {currentItems.length > 0 ? (
          currentItems.map((item, index) => (
            <div
              key={index}
              className="w-full h-full  border-[1px] px-[4vw] border-[#eee] flex items-center justify-between"
            >
              <div className="flex items-center flex-1 h-full cursor-pointer">
                <Link to={`/blog/${item.id}`} className="w-full">
                  <div className="text-left  text-xl font-[500]">
                    {item.title ? item.title : "제목 없음."}
                  </div>
                </Link>
              </div>
              {accessToken && (
                <div className="flex justify-between">
                  <div className="bg-[#bbb] w-[3vw] text-white font-bold text-sm h-[2vw] flex items-center justify-center rounded-lg mr-2">
                    <Link
                      to={`/modify/${item.id}`}
                      className="h-full w-full flex items-center justify-center"
                    >
                      수정
                    </Link>
                  </div>
                  <div className="bg-[#bbb] w-[3vw] text-white font-bold text-sm h-[2vw] flex items-center justify-center rounded-lg">
                    <button
                      className="h-full w-full flex items-center justify-center"
                      onClick={() => onRemoveBlogItem(item.id)}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="w-full flex justify-center items-center text-[1.6vw] text-[#aaa]">
            데이터가 없습니다.
          </div>
        )}
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageLinkClassName={"pagination__link"}
        activeLinkClassName={"pagination__link__active"}
        pageClassName={"page-item"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        breakClassName={"page-item"}
        disabledClassName={"disabled"}
      />
    </div>
  );
};

export default BlogList;
