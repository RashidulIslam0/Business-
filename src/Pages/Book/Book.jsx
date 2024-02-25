import React from "react";
import { InlineWidget } from "react-calendly";
import "./book.css";
function Book() {
  return (
    <>
      <div className="Book ">
        <InlineWidget url="https://calendly.com/rashidulislam0/30min?month=2024-02" />
      </div>
    </>
  );
}

export default Book;
