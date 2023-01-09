import React from "react";
import Group8519 from "../../Assets/Group 8519.png";
const BannerTwo = () => {
  return (
    <div>
      <div className='flex mx-auto max-[1050px]:my-[10rem]'>
        <div className='2xl:flex items-center justify-start gap-[18rem] max-[1050px]:flex-col max-[1050px]:items-start'>
          <img src={Group8519} className='max-[1050px]:mb-[3rem]' />

          <div className='lg:ml-48 max-[1050px]:text-center'>
            <p className='text-sm text-emerald-600 font-bold'>Book a trail</p>
            <h1 className='text-3xl font-bold'>
              Start your English <br /> speaking journey today!
            </h1>
            <p className='py-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
              Neque pellentesque praesent vitae sit sagittis <br /> venenatis.
            </p>
            <button className='btn border-none mr-5 rounded-3xl  bg-[#FF736A]'>
              Book a trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
