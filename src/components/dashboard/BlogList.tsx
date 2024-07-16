import { useState } from "react";
import ReactPaginate from "react-paginate";
type FunctionProps = {
  selected: number;
};

type BlogType = {
  id: number;
  title: string;
  image: string;
};

const BlogList = () => {
  const blogList: BlogType[] = [
    // {
    //   id: 1,
    //   title: "test1",
    //   image:
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1566px-Test-Logo.svg.png?20150906031702",
    // },
    // {
    //   id: 2,
    //   title: "test2",
    //   image:
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1566px-Test-Logo.svg.png?20150906031702",
    // },
    // {
    //   id: 3,
    //   title: "test3",
    //   image:
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1566px-Test-Logo.svg.png?20150906031702",
    // },
    // {
    //   id: 4,
    //   title: "test4",
    //   image:
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1566px-Test-Logo.svg.png?20150906031702",
    // },
  ];
  const itemsPerPage = 9; // 페이지당 표시할 항목 수
  const [currentPage, setCurrentPage] = useState(0);

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
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-wrap justify-between items-center">
        {currentItems.length > 0 ? (
          currentItems.map((item, index) => (
            <div key={index} className="w-[31%] mt-5">
              <div>
                <img src={item.image} alt={item.title} />
              </div>
              <div className="text-center mt-2">{item.title}</div>
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
