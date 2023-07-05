export const Button = ({ children, mood, onLeaveFeedback }) => {
  return (
    <button
      className="button-mood global-button"
      type="button"
      data-mood={mood}
      onClick={onLeaveFeedback}
    >
      {children}
    </button>
  );
};
