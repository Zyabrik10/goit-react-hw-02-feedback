import { Notification } from './Feedback/Notification/Notification';
import { Statistics } from './Feedback/Statistics/Statistics';
import { Section } from './Feedback/Section/Section';
import { FeedbackOptions } from './Feedback/FeedbackOptions/FeedbackOptions';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  total = 0;
  positives = 0;

  countTotalFeedback = () => {
    this.total += 1;
  };

  countPositiveFeedbackPercentage = () => {
    this.positives = Number(
      (this.total === 0 ? 0 : (this.state.good / this.total) * 100).toFixed(0)
    );
  };

  increase = mood => {
    this.setState({ [mood]: this.state[mood] + 1 });
  };

  buttonEvent = ({ target }) => {
    const mood = target.getAttribute('data-mood');

    this.increase(mood);
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <main className="main">
        <div className="feedback-box">
          <Section
            title="Please leave us feedback"
            className={'feedback'}
            titleClassName={'feedback-title'}
          >
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.buttonEvent}
            />
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
      </main>
    );
  }
}
