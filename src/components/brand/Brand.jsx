import React, { useState } from 'react';
import './brand.css';
import { data } from '../../edit/data/export';

const { technologies } = data;

const Brand = () => {

  const [stackInfo, setStackInfo] = useState("");
  const [isStackInfoVisible, setIsStackInfoVisible] = useState(false);
  const [isStackActive, setIsStackActive] = useState(false);

  function handleStackMouseEnter(num) {
    technologies.map((stack, i) => {
      if (i === num) {
        setStackInfo(stack.info);
        setIsStackActive(true);
        setIsStackInfoVisible(true);
      }
    })
  }

  function handleStackMouseLeave(num) {
    technologies.map((stack, i) => {
      if (i === num) {
        setStackInfo("");
        setIsStackActive(false);
        setIsStackInfoVisible(false);
      }
    })
  }

  return (
    <div className='gpt3__brand section__padding'>
      {
        technologies.map((stack, i) => (
          <div key={i}>
            <img
              className="scale-up-center"
              onMouseEnter={() => handleStackMouseEnter(i)}
              onMouseLeave={() => handleStackMouseLeave(i)}
              src={stack.src}
              alt={stack.alt}
            />
          </div>
        ))
      }
      {
        <>
          {isStackInfoVisible && isStackActive && (
            <p className='scale-up-center'>{stackInfo}</p>
          )}
        </>
      }
    </div>
  )
}
export default Brand
