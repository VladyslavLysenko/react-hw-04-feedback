import { Stats } from './Stats/Stats';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions ';
import { Section } from './Section/Section';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleIncrement = event => {
    const { name } = event.target;
    console.log(name);

    switch (name) {
      case 'good':
        setGood(value => value + 1);
        break;

      case 'neutral':
        setNeutral(value => value + 1);
        break;

      case 'bad':
        setBad(value => value + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / (countTotalFeedback() || 1)) * 100);

  return (
    <>
      <Section title="Leave feedback">
        <FeedbackOptions onLeaveFeedback={handleIncrement} options={options} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Stats
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <p>Here is 0 feedbacks, try click</p>
        )}
      </Section>
    </>
  );
};
