import { useState } from "react/cjs/react.development";
import ReactPaginate from "react-paginate";

const Page = ({ page, setPage, data, pageSkipe }) => {
  const [currentItem, setCurrentItem] = useState(null);
  const [itemOffset, setItemOffset] = useState(20);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 20) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const pageCount = Math.round(646005 / itemOffset);

  return (
    <div className="page">
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Page;
