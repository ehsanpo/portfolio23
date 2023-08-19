import React from "react";

const testimonial_data = [
  {
    id: 1,
    name: "Kenzie Edgar 1",
    title: "CEO of Company",
    img: "https://i.pravatar.cc/100?img=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.",
  },
  {
    id: 2,
    name: "Kenzie Edgar 2",
    title: "CEO of Company",
    img: "https://i.pravatar.cc/100?img=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.",
  },
  {
    id: 3,
    name: "Kenzie Edgar 3",
    title: "CEO of Company",
    img: "https://i.pravatar.cc/100?img=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.",
  },
  {
    id: 4,
    name: "Kenzie Edgar 4",
    title: "CEO of Company",
    img: "https://i.pravatar.cc/100?img=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.",
  },
  {
    id: 5,
    name: "Kenzie Edgar 4",
    title: "CEO of Company",
    img: "https://i.pravatar.cc/100?img=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.",
  },
  {
    id: 6,
    name: "Kenzie Edgar 4",
    title: "CEO of Company",
    img: "https://i.pravatar.cc/100?img=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.",
  },
];

const Testimonial = () => {
  const emptyArray = Array.from({ length: 3 });
  const rows = 3;
  const cols = 2;

  return (
    <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
      <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
              What people <br />
              are saying.
            </h1>
            <h3 className="text-xl mb-5 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <div key={rowIndex} className="flex flex-col">
                {testimonial_data
                  .slice(rowIndex * cols, (rowIndex + 1) * cols)
                  .map((item) => (
                    <blockquote 
                      key={item.id}
                      className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
                    >
                      <div className="w-full flex mb-4 items-center">
                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                          <img src={item.img} alt="" />
                        </div>
                        <div className="flex-grow pl-3">
                          <h6 className="font-bold text-sm uppercase text-gray-600">
                            {item.name}
                          </h6>
                        </div>
                      </div>
                      <div className="w-full">
                        <p className="text-sm leading-tight">
                          <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">“</span>
                          {item.desc}
                          <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">“</span>
                        </p>
                      </div>
                    </blockquote >
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
