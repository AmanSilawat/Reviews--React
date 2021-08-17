import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, set_index] = useState(0);
  const { name, job, image, text } = people[index];

  const check_number = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number
  }

  const next_person = () => {
    set_index((index) => {
      let new_index = index + 1;
      return check_number(new_index);
    })
  }

  const prev_person = () => {
    set_index((index) => {
      let new_index = index - 1;
      return check_number(new_index);
    })
  }

  const random_person = () => {
    let random_number = Math.floor(Math.random() * people.length);
    if (random_number === index) {
      random_number = index + 1;
    }
    set_index(check_number(random_number));
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prev_person}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={next_person}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={random_person}>surprise me</button>
    </article>
  )
};

export default Review;
