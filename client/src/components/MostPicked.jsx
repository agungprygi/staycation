import React from "react";

export default function MostPicked(props) {
  console.log(props.mostPicked);
  return (
    <section className="container mx-auto pt-4 md:px-40 px-4 font-poppins">
      <h4 className="text-xl font-semibold md:mt-16 mt-4 text-start">
        Most Picked
      </h4>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:gap-8 mt-5">
        <div className="md:col-span-1 col-span-1">
          <div className="w-full h-full card">
            <div className="z-10 absolute top-0 right-0 text-white">
              <h2 className="px-6 py-2 bg-rose-500 rounded-bl-lg rounded-tr-xl">
                $
                {props.mostPicked !== undefined
                  ? props.mostPicked[0].price
                  : ""}{" "}
                per{" "}
                {props.mostPicked !== undefined ? props.mostPicked[0].unit : ""}
              </h2>
            </div>
            <img
              src={
                props.mostPicked !== undefined
                  ? props.mostPicked[0].imageId[0].imageUrl
                  : ""
              }
              alt="Most Picked"
            />
            <div className="w-full h-full card bg-black opacity-0 hover:opacity-50 absolute top-0 left-0 transition-all duration-300 z-5"></div>
            <div className="z-10 absolute bottom-4 left-4 text-white">
              <p className="font-regular text-xl">
                {props.mostPicked !== undefined
                  ? props.mostPicked[0].title
                  : ""}
              </p>
              <p className="font-ligth text-sm">
                {props.mostPicked !== undefined
                  ? props.mostPicked[0].state
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 col-span-1">
          <div className="flex flex-col md:gap-8 gap-4">
            <div className="w-full h-full card">
              <div className="z-10 absolute top-0 right-0 text-white">
                <h2 className="px-6 py-2 bg-rose-500 rounded-bl-lg rounded-tr-xl">
                  $
                  {props.mostPicked !== undefined
                    ? props.mostPicked[1].price
                    : ""}{" "}
                  per{" "}
                  {props.mostPicked !== undefined
                    ? props.mostPicked[1].unit
                    : ""}
                </h2>
              </div>
              <img
                src={
                  props.mostPicked !== undefined
                    ? props.mostPicked[1].imageId[0].imageUrl
                    : ""
                }
                alt="Most Picked"
              />
              <div className="w-full h-full card bg-black opacity-0 hover:opacity-50 absolute top-0 left-0 transition-all duration-300 z-5"></div>
              <div className="z-10 absolute bottom-4 left-4 text-white">
                <p className="font-regular text-xl">
                  {props.mostPicked !== undefined
                    ? props.mostPicked[1].title
                    : ""}
                </p>
                <p className="font-ligth text-sm">
                  {props.mostPicked !== undefined
                    ? props.mostPicked[1].state
                    : ""}
                </p>
              </div>
            </div>
            <div className="w-full h-full card">
              <div className="z-10 absolute top-0 right-0 text-white">
                <h2 className="px-6 py-2 bg-rose-500 rounded-bl-lg rounded-tr-xl">
                  $
                  {props.mostPicked !== undefined
                    ? props.mostPicked[2].price
                    : ""}{" "}
                  per{" "}
                  {props.mostPicked !== undefined
                    ? props.mostPicked[2].unit
                    : ""}
                </h2>
              </div>
              <img
                src={
                  props.mostPicked !== undefined
                    ? props.mostPicked[2].imageId[0].imageUrl
                    : ""
                }
                alt="Most Picked"
              />
               <div className="w-full h-full card bg-black opacity-0 hover:opacity-50 absolute top-0 left-0 transition-all duration-300 z-5"></div>
              <div className="z-10 absolute bottom-4 left-4 text-white">
                <p className="font-regular text-xl">
                  {props.mostPicked !== undefined
                    ? props.mostPicked[2].title
                    : ""}
                </p>
                <p className="font-ligth text-sm">
                  {props.mostPicked !== undefined
                    ? props.mostPicked[2].state
                    : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 col-span-1">
          <div className="flex flex-col md:gap-8 gap-4">
          <div className="w-full h-full card">
              <div className="z-10 absolute top-0 right-0 text-white">
                <h2 className="px-6 py-2 bg-rose-500 rounded-bl-lg rounded-tr-xl">
                  $
                  {props.mostPicked !== undefined
                    ? props.mostPicked[3].price
                    : ""}{" "}
                  per{" "}
                  {props.mostPicked !== undefined
                    ? props.mostPicked[3].unit
                    : ""}
                </h2>
              </div>
              <img
                src={
                  props.mostPicked !== undefined
                    ? props.mostPicked[3].imageId[0].imageUrl
                    : ""
                }
                alt="Most Picked"
              />
               <div className="w-full h-full card bg-black opacity-0 hover:opacity-50 absolute top-0 left-0 transition-all duration-300 z-5"></div>
              <div className="z-10 absolute bottom-4 left-4 text-white">
                <p className="font-regular text-xl">
                  {props.mostPicked !== undefined
                    ? props.mostPicked[3].title
                    : ""}
                </p>
                <p className="font-ligth text-sm">
                  {props.mostPicked !== undefined
                    ? props.mostPicked[3].state
                    : ""}
                </p>
              </div>
            </div>
            <div className="w-full h-full card">
              <div className="z-10 absolute top-0 right-0 text-white">
                <h2 className="px-6 py-2 bg-rose-500 rounded-bl-lg rounded-tr-xl">
                  $
                  {props.mostPicked !== undefined
                    ? props.mostPicked[4].price
                    : ""}{" "}
                  per{" "}
                  {props.mostPicked !== undefined
                    ? props.mostPicked[4].unit
                    : ""}
                </h2>
              </div>
              <img
                src={
                  props.mostPicked !== undefined
                    ? props.mostPicked[4].imageId[0].imageUrl
                    : ""
                }
                alt="Most Picked"
              />
               <div className="w-full h-full card bg-black opacity-0 hover:opacity-50 absolute top-0 left-0 transition-all duration-300 z-5"></div>
              <div className="z-10 absolute bottom-4 left-4 text-white">
                <p className="font-regular text-xl">
                  {props.mostPicked !== undefined
                    ? props.mostPicked[4].title
                    : ""}
                </p>
                <p className="font-ligth text-sm">
                  {props.mostPicked !== undefined
                    ? props.mostPicked[4].state
                    : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
