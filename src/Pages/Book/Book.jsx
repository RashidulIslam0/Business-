import React from "react";
import { InlineWidget } from "react-calendly";
import "./book.css";
function Book() {
  return (
    <>
      <div className="Book">
        <InlineWidget url="https://calendly.com/rashidulislam0" />
      </div>
    </>
  );
}

export default Book;
