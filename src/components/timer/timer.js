import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './timer.css';
import Countdown from 'react-countdown-now';

const Complete = () => <div className="timer">We&apos;re Married</div>;

// Renderer callback with condition
const renderer = ({ days, completed }) => {
  if (completed) {
    return <Complete />;
  } else {
    return (
      <div className="timer">
        Only <strong>{days} days</strong> to go!
      </div>
    );
  }
};

const Timer = ({ date }) => {
  return (
    <Container>
      <Countdown renderer={renderer} date={date} />
    </Container>
  );
};

Timer.propTypes = {
  date: PropTypes.object.isRequired,
};

export default Timer;
