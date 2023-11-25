import React, { useState } from "react";
import "./ListingPagination.css";
import styled from "styled-components";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowLeftSharpIcon from "@mui/icons-material/KeyboardDoubleArrowLeftSharp";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";

function ListingPagination({ totalItems, itemsPerPage, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page <= 1) {
      setCurrentPage(1);
      return;
    } else if (page > totalPages) {
      setCurrentPage(totalPages);
      return;
    }
    setCurrentPage(page);
    onPageChange(page);
  };
  const handleToOne = () => {
    setCurrentPage(1);
    onPageChange(1);
  };
  const handleToEnd = () => {
    setCurrentPage(totalPages);
    onPageChange(totalPages);
  };
  return (
    <PaginationContainer>
      <PaginationTotal>
        <span>
          Page {currentPage} of {totalPages}
        </span>
      </PaginationTotal>
      <PaginationTotalNumberContainer>
        <PaginationPrevDiv>
          <KeyboardDoubleArrowLeftSharpIcon onClick={handleToOne} />
          <KeyboardArrowLeftIcon
            style={{ fontSize: "2.3rem" }}
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </PaginationPrevDiv>
        <PaginationTotalNumberSpanContainer>
          {Array.from({ length: totalPages }).map((_, i) => {
            if (
              i === 0 ||
              i === totalPages - 1 ||
              (i >= currentPage - 2 && i <= currentPage + 2)
            ) {
              return (
                <span
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  style={{
                    background: currentPage === i + 1 ? "#3a9978" : "white",
                    color: currentPage === i + 1 ? "white" : "black",
                  }}
                >
                  {i + 1}
                </span>
              );
            } else if (
              (i === currentPage - 3 && currentPage > 4) ||
              (i === currentPage + 3 && currentPage < totalPages - 3)
            ) {
              return <span key={i}>...</span>;
            }
            return null;
          })}
        </PaginationTotalNumberSpanContainer>
        <PaginationNextDiv>
          <KeyboardArrowRightIcon
            style={{ fontSize: "2.3rem" }}
            onClick={() => handlePageChange(currentPage + 1)}
          />
          <KeyboardDoubleArrowRightSharpIcon onClick={handleToEnd} />
        </PaginationNextDiv>
      </PaginationTotalNumberContainer>
    </PaginationContainer>
  );
}

export default ListingPagination;

const PaginationContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  text-transform: none;
  position: relative;
`;
const PaginationTotal = styled.div`
  width: 20%;
  position: absolute;
  top: 40px;
  left: 50px;
  color: black;
`;
const PaginationTotalNumberContainer = styled.div`
  width: 100%;
  // margin-right: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PaginationTotalNumberSpanContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    margin: 10px 10px;
    cursor: pointer;
    transition: 0.6s all ease;
    border-radius: 20px;
    &:hover {
      transform: scale(1.2);
      background: #3a9978;
      color: white;
    }
  }
`;
const PaginationPrevDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    margin: 0;
    padding: 0;
    margin-right: 10px;
    transition: 0.6s all ease;
    &:hover {
      transform: scale(1.1);
    }
  }
  svg {
    transition: 0.6s all ease;
    font-size: 30px;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
const PaginationNextDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    margin: 0;
    padding: 0;
    margin-left: 10px;
    transition: 0.6s all ease;
    &:hover {
      transform: scale(1.1);
    }
  }
  svg {
    transition: 0.6s all ease;
    font-size: 30px;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
