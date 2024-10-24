// import {React, useRef} from "react";

export default function MostPicked(props) {
  const mostPickedRef = props.innerRef;
  return (
    <section className="container mx-auto pt-4 md:px-40 px-4 font-poppins" ref={mostPickedRef}>
      <h4 className="text-xl font-semibold md:mt-16 mt-4 text-start">
        Most Picked
      </h4>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:gap-8 mt-5">
        <div className="md:col-span-1 col-span-1">
          <div className="w-full h-full card">
            <div className="z-10 absolute top-0 right-0 text-white">
              <h2 className="px-6 py-2 bg-rose-500 rounded-bl-lg rounded-tr-xl">
                $
                {props.data !== undefined
                  ? props.data[0].price
                  : ""}{" "}
                per{" "}
                {props.data !== undefined ? props.data[0].unit : ""}
              </h2>
            </div>
            <div className="w-full h-full rounded-xl overflow-hidden">
            <img
              src={
                props.data !== undefined
                  ? props.data[0].imageUrl
                  : ""
              }
              alt="Most Picked"
              className="w-full h-full object-cover transition-all duration-300  scale-110 hover:scale-100"
            />
            </div>
            <div className="z-10 absolute bottom-4 left-4 text-white">
              <p className="font-regular text-xl">
                {props.data !== undefined
                  ? props.data[0].name
                  : ""}
              </p>
              <p className="font-ligth text-sm">
                {props.data !== undefined
                  ? props.data[0].country
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
                  {props.data !== undefined
                    ? props.data[1].price
                    : ""}{" "}
                  per{" "}
                  {props.data !== undefined
                    ? props.data[1].unit
                    : ""}
                </h2>
              </div>
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img
                  src={
                    props.data !== undefined
                    ? props.data[1].imageUrl
                    : ""
                }
                alt="Most Picked"
                className="w-full h-full object-cover transition-all duration-300  scale-110 hover:scale-100"
              />
              </div>
              <div className="z-10 absolute bottom-4 left-4 text-white">
                <p className="font-regular text-xl">
                  {props.data !== undefined
                    ? props.data[1].name
                    : ""}
                </p>
                <p className="font-ligth text-sm">
                  {props.data !== undefined
                    ? props.data[1].country
                    : ""}
                </p>
              </div>
            </div>
            <div className="w-full h-full card">
              <div className="z-10 absolute top-0 right-0 text-white">
                <h2 className="px-6 py-2 bg-rose-500 rounded-bl-lg rounded-tr-xl">
                  $
                  {props.data !== undefined
                    ? props.data[2].price
                    : ""}{" "}
                  per{" "}
                  {props.data !== undefined
                    ? props.data[2].unit
                    : ""}
                </h2>
              </div>
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img
                  src={
                    props.data !== undefined
                    ? props.data[2].imageUrl
                    : ""
                }
                alt="Most Picked"
                className="w-full h-full object-cover transition-all duration-300  scale-110 hover:scale-100"
              />
              </div>
              <div className="z-10 absolute bottom-4 left-4 text-white">
                <p className="font-regular text-xl">
                  {props.data !== undefined
                    ? props.data[2].name
                    : ""}
                </p>
                <p className="font-ligth text-sm">
                  {props.data !== undefined
                    ? props.data[2].country
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
                  {props.data !== undefined
                    ? props.data[3].price
                    : ""}{" "}
                  per{" "}
                  {props.data !== undefined
                    ? props.data[3].unit
                    : ""}
                </h2>
              </div>
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img
                  src={
                  props.data !== undefined
                    ? props.data[3].imageUrl
                    : ""
                }
                alt="Most Picked"
                className="w-full h-full object-cover transition-all duration-300  scale-110 hover:scale-100"
              />
              </div>
              <div className="z-10 absolute bottom-4 left-4 text-white">
                <p className="font-regular text-xl">
                  {props.data !== undefined
                    ? props.data[3].name
                    : ""}
                </p>
                <p className="font-ligth text-sm">
                  {props.data !== undefined
                    ? props.data[3].country
                    : ""}
                </p>
              </div>
            </div>
            <div className="w-full h-full card">
              <div className="z-10 absolute top-0 right-0 text-white">
                <h2 className="px-6 py-2 bg-rose-500 rounded-bl-lg rounded-tr-xl">
                  $
                  {props.data !== undefined
                    ? props.data[4].price
                    : ""}{" "}
                  per{" "}
                  {props.data !== undefined
                    ? props.data[4].unit
                    : ""}
                </h2>
              </div>
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img
                  src={
                    props.data !== undefined
                    ? props.data[4].imageUrl
                    : ""
                }
                alt="Most Picked"
                className="w-full h-full object-cover transition-all duration-300  scale-110 hover:scale-100"
              />
              </div>
              <div className="z-10 absolute bottom-4 left-4 text-white">
                <p className="font-regular text-xl">
                  {props.data !== undefined
                    ? props.data[4].name
                    : ""}
                </p>
                <p className="font-ligth text-sm">
                  {props.data !== undefined
                    ? props.data[4].country
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
