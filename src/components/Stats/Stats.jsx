import PropTypes from 'prop-types';

export const Stats = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <section className="stats">
      <h2 className="stats__title">Statistics</h2>
      <ul className="stats__list">
        <li className="stats__item">
          <span>Good:{good}</span>
        </li>
        <li className="stats__item">
          <span>Neutral: {neutral}</span>
        </li>
        <li className="stats__item">
          <span>Bad:{bad}</span>
        </li>
        <li className="stats__item">Total: {total}</li>
        <li className="stats__item">
          Positive feedback:{positivePercentage}%
        </li>
      </ul>
    </section>
  );
};


Stats.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};