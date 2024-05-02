import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <section className="feedback">
      <ul className="feedback__list">
        {options.map((item, index) => (
          <li key={index} className="feedback__item">
            <button
              name={item}
              onClick={onLeaveFeedback}
              className="feedback__btn"
              type="button"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};


FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
