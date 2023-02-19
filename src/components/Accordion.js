import React, { useState } from "react";

export const accordion = () => {
  const [accordions, setAccordions] = useState([
    {
      header: "HTML",
      content:
        "(HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. ",
      isOpen: false, 
      imageSrc: "./images/HTML5.png"
    },
    {
      header: "CSS",
      content:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML",
      isOpen: false,
      imageSrc: "./images/CSS3.png"
    },
    {
      header: "JS",
      content:
        "JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
      isOpen: false,
      imageSrc: "./images/Javascript.png"
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(-1);

  const handleOpen = (index) => {
    setActiveIndex((prevActiveIndex) =>
      prevActiveIndex === index ? -1 : index
    );
  };

  return (
    <div className="accordion-container">
      {accordions.map((accordion, index) => (
        <div key={index} className="accordion">
          <div className="accordion-header" onClick={() => handleOpen(index)}>
            <div>{accordion.header}</div>
            <div>{activeIndex === index ? "-" : "+"}</div>
          </div>
          {activeIndex === index && (
            <div className="accordion-body">
              {accordion.content}
              <img className="imagem-acordion" src={accordion.imageSrc} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};