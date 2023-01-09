import React from "react";
import card1 from "../../Assets/card1.png";
import card2 from "../../Assets/card2.png";
import card3 from "../../Assets/card3.png";

const Items = [
  {
    id: 1,
    title: "Customised Curriculum",
    desc: "Customised sessions and module for Basic, Intermediate and Advanced learners.",
    image: card1,
  },
  {
    id: 2,
    title: "Experimental Learning ",
    desc: "Do not study English, rather consume and use it.",
    image: card2,
  },
  {
    id: 3,
    title: "Shadowing Method",
    desc: "Think and speak in English rather than translating it from mother tongue.",
    image: card3,
  },
];
const Cards = () => {
  return (
    <div className='h-[40rem] my-12 w-[80vw] mx-auto'>
      <h1 className='text-4xl font-bold flex justify-center my-12'>
        What we offer ?
      </h1>
      {/* Parent Div */}
      <div className='flex items-center justify-around'>
        {Items?.map((item, i) => (
          <div
            style={{ backgroundImage: `url(${item.image})` }}
            className='rounded-xl'
          >
            <div className='card w-96 glass'>
              <figure className='h-[20rem] w-[24rem]'>
                <img src={item.image} alt='car!' />
              </figure>
              <div className='card-body'>
                <h2 className='card-title text-[#00D2FF]'>{item.title}</h2>
                <p className='text-white w-[90%]'>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
