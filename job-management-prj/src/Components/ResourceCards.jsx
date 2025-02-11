import React from "react";
import ResourceCard from "./../Components/ResourceCard";
import cardData from "./../resourceDetails.json";

const ResourceCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          {cardData.map((card, index) => (
            <ResourceCard
              key={index}
              platform={card.platform}
              topic = {card.topic}
              description={card.description}
              hrefLink={card.hrefLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceCards;
