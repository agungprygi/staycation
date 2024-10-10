import React from "react";
import ImageHero from "./../assets/banner.png";

export default function Hero(props) {
  return (
    <section className="container mx-auto pt-4 px-40 font-poppins">
      <div className="hero h-1/3 w-full">
        <div className="flex flex-row-reverse justify-between items-center w-full">
          <img src={ImageHero} className="w-1/2" />
          <div className="w-5/12">
            <h1 className="text-5xl font-bold">
              Forget Busy Work, Start Next Vacation
            </h1>
            <p className="py-6 text-gray-400">
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <button className="bg-primary py-2 px-10 rounded-lg text-lg font-medium text-white">Show Me Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
