import PropTypes from 'prop-types';
import './CategoryList.css';
const CategoryList = ({ categories, selectedCategory, onCategorySelect }) => {
    return (
        <div className="category-list">
            {categories.map((category) => (
                <button
                    key={category}
                    className={selectedCategory === category ? 'active' : ''}
                    onClick={() => onCategorySelect(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};
CategoryList.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedCategory: PropTypes.string,
    onCategorySelect: PropTypes.func.isRequired,
};
export default CategoryList;
