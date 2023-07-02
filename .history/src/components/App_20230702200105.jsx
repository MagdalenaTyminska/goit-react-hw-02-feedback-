import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import css from './App.module.css';

export function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (name) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: prevFeedback[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (totalFeedback) => {
    const { good } = feedback;
    const positiveFeedback = Math.round((good * 100) / totalFeedback);
    return totalFeedback === 0 ? totalFeedback : positiveFeedback;
  };

  const total = countTotalFeedback();

  render() {
    const total = this.countTotalFeedback();
    return (
      <>
        <div className={css.boxApp}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.handleFeedback}
            />
          </Section>
          <Section title="Statistics">
            {total ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={total}
                positivePercentage={this.countPositiveFeedbackPercentage(total)}
              />
            ) : (
              <Notification message="There is no feedback"></Notification>
            )}
          </Section>
        </div>
      </>
    );
  }
}
