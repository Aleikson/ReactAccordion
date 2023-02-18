import React, { useState } from "react";

export const accordion = () => {
  const [accordions, setAccordions] = useState([
    {
      header: "HTML",
      content:
        "(HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. ",
      isOpen: false,
    },
    {
      header: "CSS",
      content:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML",
      isOpen: false,
    },
    {
      header: "JS",
      content:
        "JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
      isOpen: false,
    },
  ]);

  const handleOpen = (index) => {
    setAccordions(
      accordions.map((accordion, i) =>
        i === index ? { ...accordion, isOpen: !accordion.isOpen } : accordion
      )
    );
  };

  return (
    <div className="accordion-container">
      {accordions.map((accordion, index) => (
        <div key={index} className="accordion">
          <div className="accordion-header" onClick={() => handleOpen(index)}>
            <div>{accordion.header}</div>
            <div>{accordion.isOpen ? "-" : "+"}</div>
          </div>
          {accordion.isOpen && (
            <div className="accordion-body">{accordion.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

