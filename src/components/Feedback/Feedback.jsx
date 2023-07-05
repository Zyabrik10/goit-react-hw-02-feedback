import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  total = this.countTotalFeedback.call(this, this.state);
  positives = this.countPositiveFeedbackPercentage.call(this, this.state);

  countTotalFeedback(obj) {
    this.total = obj.good + obj.neutral + obj.bad;
    return this.total;
  }

  countPositiveFeedbackPercentage(obj) {
    this.positives = (
      this.total === 0 ? 0 : (obj.good / this.total) * 100
    ).toFixed(0);
    return this.positives;
  }

  increase({ target }) {
    const mood = target.getAttribute('data-mood');

    this.setState(function (prevState) {
      const obj = {
        ...this.state,
        [mood]: prevState[mood] + 1,
      };

      this.countTotalFeedback(obj);
      this.countPositiveFeedbackPercentage(obj);

      return obj;
    });
  }

  increaseEvent = this.increase.bind(this);

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="feedback-box">
        <Section
          title="Please leave us feedback"
          className={'feedback'}
          titleClassName={'feedback-title'}
        >
          <FeedbackOptions onLeaveFeedback={this.increaseEvent} />
        </Section>
        <Section
          title={'Statistics'}
          className={'statistics'}
          titleClassName={'statistics-title'}
        >
          {this.total ? (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={this.total}
              positives={this.positives}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}
