import React from "react";
import ImageHero from "./../assets/banner.png";
import TravelIcon from "./../assets/icons/ic_traveler.png";
import CameraIcon from "./../assets/icons/ic_treasure.png";
import LocationIcon from "./../assets/icons/ic_cities.png";

export default function Hero(props) {
  if (props.hero == undefined) {
    return (
      <section className="container mx-auto pt-4 px-40 font-poppins">
        {/* <div className="hero h-1/3 w-full">
          <div className="flex flex-row-reverse justify-between items-center w-full">
            <img src={ImageHero} className="w-1/2" />
            <div className="w-5/12">
            <div>
              <h1 className="text-5xl font-bold">
                Forget Busy Work, Start Next Vacation
              </h1>
              <p className="py-6 text-gray-400">
                We provide what you need to enjoy your holiday with family. Time
                to make another memorable moments.
              </p>
              <button className="bg-primary py-2 px-10 rounded-lg text-lg font-medium text-white">Show Me Now</button>
              </div>
              <div className="flex">
            <div className="flex-1" >
                <img src={TravelIcon} alt="Treasure" className="w-8"/>
                <div>
                  <p className="font-medium skeleton h-6 w-24 mt-1"></p>
                </div>
            </div>
          </div>
            </div>
          </div>
        </div> */}
      </section>
    );
  } else {
    return (
      <section className="container mx-auto pt-4 md:px-40 px-4 font-poppins">
        <div className="hero h-1/3 w-full">
          <div className="md:flex flex-row-reverse justify-between items-center w-full">
            <img src={ImageHero} className="md:w-1/2" />
            <div className="md:w-5/12 flex flex-col">
              <div>
                <h1 className="text-5xl font-bold">
                  Forget Busy Work, Start Next Vacation
                </h1>
                <p className="py-6 text-gray-400">
                  We provide what you need to enjoy your holiday with family.
                  Time to make another memorable moments.
                </p>
                <button className="bg-primary py-2 px-10 rounded-lg text-lg font-medium text-white w-full md:w-1/2" onClick={props.scrollToMostPicked}>
                  Show Me Now
                </button>
              </div>
              <div className="flex md:mt-48 mt-8 justify-between items-center">
                <div className="md:flex-1">
                  <img src={TravelIcon} alt="Treasure" className="w-10" />
                  <div>
                    <p className="font-medium">
                      {props.hero.travelers.toLocaleString()}
                      <span className="font-light text-gray-500">
                        {" "}travelers
                      </span>
                    </p>
                  </div>
                </div>
                <div className="md:flex-1">
                  <img src={CameraIcon} alt="Treasure" className="w-10" />
                  <div>
                    <p className="font-medium">
                      {props.hero.treasures.toLocaleString()}
                      <span className="font-light text-gray-500">
                      {" "} treasure
                      </span>
                    </p>
                  </div>
                </div>
                <div className="md:flex-1">
                  <img src={LocationIcon} alt="Treasure" className="w-10" />
                  <div>
                    <p className="font-medium">
                      {props.hero.cities.toLocaleString()}
                      <span className="font-light text-gray-500">
                      {" "} cities
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
