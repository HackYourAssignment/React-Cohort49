import PropTypes from "prop-types";

const Category = ({ title, onClick, isActive }) => {
  return (
    <>
      <button
        className="category"
        onClick={() => {
          onClick(title);
        }}
        aria-pressed={isActive}
      >
        {title}
      </button>
    </>
  );
};

Category.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Category;
