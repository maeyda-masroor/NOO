import React, { useState } from 'react';
import people from './data';
import './Testinomials.css';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Testinomials = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className='review'>
      <div className='img-container'>
      <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      <h4 style={{fontSize:'30px'}}class='text-cursive'>{name}</h4>
      <p class='text-cursive'>{job}</p>
      <p class='text-cursive'>{text}</p>
      </div>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Testinomials;