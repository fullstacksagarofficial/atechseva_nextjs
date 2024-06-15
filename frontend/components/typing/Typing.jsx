import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation';

const Typing = () => {
  const [textColor, setTextColor] = useState('#FFEBB2');
  useEffect(() => {
    if (animationSequence[step]) {
      setTextColor(animationSequence[step].color);
    }
  }, [step, animationSequence]);

  const sequence = animationSequence.map((item, index) => [
    item.text,
    1000,
    () => setStep(index + 1),
  ]).flat();
  return (
    <h1 className='text-white md:leading-[70px] font-space font-extrabold' style={{ color: textColor }}>
      <TypeAnimation
        sequence={sequence}
        speed={50}
        repeat={Infinity}
      />
    </h1>
  )
}

export default Typing