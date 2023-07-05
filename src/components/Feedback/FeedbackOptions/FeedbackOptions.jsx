import { Button } from '../Button/Button';

export const FeedbackOptions = ({ onLeaveFeedback }) => (
  <ul className="feedback-buttons-list global-list">
    <li>
      <Button mood="good" onLeaveFeedback={onLeaveFeedback}>
        good
      </Button>
    </li>
    <li>
      <Button mood="neutral" onLeaveFeedback={onLeaveFeedback}>
        neutral
      </Button>
    </li>
    <li>
      <Button mood="bad" onLeaveFeedback={onLeaveFeedback}>
        bad
      </Button>
    </li>
  </ul>
);
