import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { BsAlarm } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="my-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mx-28 sm:mx-16">
        <div className="">
          <div className="flex items-center flex-col">
            <div className="flex items-center justify-center">
              <p className="text-rose-500 text-xl ml-1 mb-1">
                Best <span className="text-rose-600 font-bold">Eats</span>
              </p>
            </div>
            <div className="mx-auto ml-2 flex justify-evenly items-center pr-1">
              <p className="text-red-700">
                <BsFillTelephoneFill size={20} />
              </p>
              <span className="font-bold ml-2 mr-2">Phone: </span> 03201465167
            </div>
            <div className="mx-auto ml-2 flex justify-evenly items-center pr-1 my-4">
              <p className="text-red-700">
                <BsFillEnvelopeFill size={20} />{" "}
              </p>
              <span className="font-bold ml-2 mr-2">Email: </span>{" "}
              support@besteats.com
            </div>
            <div className="mx-auto ml-2 flex justify-evenly items-center pr-1">
              <p className="text-red-700">
                <AiFillEnvironment size={20} />{" "}
              </p>
              <span className="font-bold ml-2 mr-2">Address: </span> Gulshan
              Ravi B-581 main bulevard
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex justify-center items-center">
            <p className="text-red-700">
              <BsAlarm size={20} />
            </p>
            <div className="font-bold ml-2">Our Schedule</div>
          </div>
          <div className="mt-2 flex justify-between w-full px-4  ">
            <span>Monday - Saturday</span>
            <span>11:00 AM - 03:00AM</span>
          </div>
          <div className="mt-2 flex justify-between  w-full px-4 ">
            <span>Friday</span>
            <span>02:00 PM - 03:00AM</span>
          </div>
          <div className="mt-2 flex  justify-between  w-full px-4 ">
            <span>Sunday</span>
            <span>11:00 AM - 03:00AM</span>
          </div>
        </div>
      </div>

      <div className="">
        <p className="flex justify-center border-t-2  mt-1 border-gray-400">
          copyright Ⓒ 2022. Best Eats{" "}
          <span className="underline underline-offset-4 mx-1 capitalize">
            privacy policy{" "}
          </span>
          {" | "}
          <span className="underline underline-offset-4 mx-1 capitalize">
            {" "}
            site map
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
