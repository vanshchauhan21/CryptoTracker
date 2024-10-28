import React from "react";
import "./styles.css";

import Pagination from "@mui/material/Pagination";

export default function PaginationControlled({ page, handlePageChange }) {
  return (
    <div className="pagination-div">
      <Pagination
        sx={{
          "& .MuiPaginationItem-text": {
            color: "var(--pagination-text-color) !important",
            border: "1px solid var(--pagination-border-color)",
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "var(--pagination-hover-bg-color) !important",
          },
          "& .Mui-selected  ": {
            backgroundColor: "var(--pagination-selected-bg-color)",
            borderColor: "var(--pagination-selected-border-color)",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }}
        count={10}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}
