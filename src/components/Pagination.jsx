import React from "react";
import { useGlobalcontext } from "../context";

const Pagination = () => {
  const { page, nbPages, getPrevPage, getNextPage } = useGlobalcontext();
  return (
    <>
      <div className="pagination-btn">
        <button onClick={() => getPrevPage()}>PREV</button>
        <p>
          {page + 1} of {nbPages}
        </p>
        <button onClick={() => getNextPage()}>NEXT</button>
      </div>
    </>
  );
};

export  {Pagination};