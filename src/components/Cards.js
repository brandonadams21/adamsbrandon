import React, { useState } from "react";
import "./Cards.css";

function Cards() {
  const [cards, setCards] = useState([
    {
      id: 1,
      flipped: false,
      title: "Blog Project",
      description:
        "BlogSpace is a dynamic and responsive blogging platform that showcases my proficiency in web development with technologies such as React, HTML, JavaScript, and CSS. The integration of graphCMS enables efficient content management and enhances the platform's user experience, making it a valuable addition to my software engineering portfolio.",
      sourceLink: "https://github.com/brandonadams21/blog/tree/main/blogger",
      previewImage: "images/blogPhoto.png",
    },
    {
      id: 2,
      flipped: false,
      title: "SAT by VKIS",
      description:
        "Contributed to creating, designing, and developing SAT by VKIS. Fullstack SaaS application built in react, javascript, css, html, and nodeJS.",
      sourceLink: "https://sat.vkintsys.com",
      previewImage: "images/sat.png",
    },
  ]);

  const handleFlip = (id) => {
    const newCards = cards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          flipped: !card.flipped,
        };
      }
      return card;
    });
    setCards(newCards);
  };

  return (
    <>
      <div id="projects">
        <h1 className="projectHeader">Projects</h1>
        <div className="cardGrid">
          {cards.map((card) => (
            <div
              className={`card ${card.flipped ? "flipped" : ""}`}
              key={card.id}
            >
              <div className="front">
                <h2 className="cardHeader">{card.title}</h2>
                <img className="blogImg" src={card.previewImage} />
                <a className="sourceTag" target="_blank" href={card.sourceLink}>
                  Source
                </a>
                <a
                  className="descriptionTag"
                  href="#flip"
                  onClick={() => handleFlip(card.id)}
                >
                  Description
                </a>
              </div>
              <div className="back">
                <h2 className="cardHeader">About this project</h2>
                <p className="pTag">{card.description}</p>
                <a
                  className="backTag"
                  href="#flip"
                  onClick={() => handleFlip(card.id)}
                >
                  Back
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards;
