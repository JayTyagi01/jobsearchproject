import React from "react";
import { BiTimeFive } from "react-icons/bi";

const Data = [
  {
    id: 1,
    image: "",
    title: "Web Developer",
    time: "Now",
    location: "Delhi, India",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepeobcaecati eligendi in minus voluptas molestias rem repellat totam",
    company: "Abc Co.",
  },
  {
    id: 2,
    image: "",
    title: "Software Eng",
    time: "3hrs",
    location: "Pune, India",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepeobcaecati eligendi in minus voluptas molestias rem repellat totam",
    company: "Abc Co.",
  },
  {
    id: 3,
    image: "",
    title: "UI/UX Designer",
    time: "15hrs",
    location: "Banglore, India",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepeobcaecati eligendi in minus voluptas molestias rem repellat totam",
    company: "Abc Co.",
  },
  {
    id: 4,
    image: "",
    title: "Data Scientist",
    time: "1day8hrs",
    location: "Jaipur, India",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepeobcaecati eligendi in minus voluptas molestias rem repellat totam",
    company: "Abc Co.",
  },
  {
    id: 5,
    image: "",
    title: "Product Designer",
    time: "15hrs",
    location: "Mumbai, India",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepeobcaecati eligendi in minus voluptas molestias rem repellat totam",
    company: "Abc Co.",
  },
];

function Jobs() {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded[10px] hover:bg-bluecolor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc]">
                  <BiTimeFive />
                  {time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>
              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>
              <div className="company felx items-center gap-2">
                <img src={image} alt="" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>
              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Jobs;
