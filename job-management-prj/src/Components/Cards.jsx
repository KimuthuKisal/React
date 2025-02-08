import React from "react";
import Card from "./../Components/Card";
import cardData from "./../cardDetails.json"

const Cards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          {cardData.map((card, index) => (
            <Card
              key={index}
              header={card.header}
              description={card.description}
              btnInfo={card.btnInfo}
              bgColor={card.bgColor}
              btnColor={card.btnColor}
              btnHoverColor={card.btnHoverColor}
              hrefLink={card.hrefLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
