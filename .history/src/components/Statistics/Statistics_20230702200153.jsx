export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <div className={css.statisticsItem}>
        <span> Good: {good} </span>
        <span> Neutral: {neutral} </span>
        <span> Bad: {bad} </span>
        <span> Total: {total} </span>
        <span> Positive feedback: {positivePercentage}% </span>
      </div>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
