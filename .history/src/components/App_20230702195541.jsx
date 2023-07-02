import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import css from './App.module.css';

export class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    totalFeedback: 0,
    positiveFeedback: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleFeedback = button => {
    const { name } = button.currentTarget;
    this.setState(state => ({
      [name]: ++state[name],
    }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage(totalFeedback) {
    const positiveFeedback = Math.round(
      (this.state.good * 100) / totalFeedback
    );
    return totalFeedback === 0 ? totalFeedback : positiveFeedback;
  }

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
