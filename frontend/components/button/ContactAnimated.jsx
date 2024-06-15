import React, { useEffect } from 'react';
import { GoArrowUpRight } from "react-icons/go";

const ContactAnimated = ({ text, charClassName }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${charClassName}`);
   

    const step = 360 / elements.length;
    elements.forEach((elem, i) => {
      elem.style.setProperty('--char-rotate', `${i * step}deg`);
    });
    const foo = 360 / 7;

  }, [charClassName]);


  
  return (
    <div className="badge c-black" id="badge">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`badge__char ${charClassName}  char-${char}-${index}`}
        >
          {char}
        </span>
      ))}
      <div className="badge__emoji hover:border-4 md:w-28 w-16 h-16 md:h-28 block shadow-2xl relative rounded-full bg-amber-400 border-amber-500">
        <GoArrowUpRight className='w-20 h-20 md:w-24 md:h-24 inneicon' />
      </div>
    </div>
  );
};

export default ContactAnimated;
