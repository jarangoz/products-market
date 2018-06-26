// @ vendors
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

// @ contants
import copies from 'constants/copies';
import categories from 'constants/categories';

// @ styles
import CategoryStyles from './category.scss';

const Category = ({ category }) => {
    const buildCategories = categories.map(item => {
        const buildUrl = item.id !== copies.categorieAll ? `/products/${item.id}` : '/products';
        const activeClass = category === item.id;
        const classNamesBind = classnames.bind(CategoryStyles);
        const categoryClass = classNamesBind('category-option__link', { 'category-option__link-active': activeClass });
        const categoryIconClass = CategoryStyles[`category-option__link-icon-${item.icon}`];

        return (
            <Link
                key={item.id}
                to={buildUrl}
                className={CategoryStyles['category-option']}
            >
                <li className={categoryClass}>
                    <i className={categoryIconClass} />
                    <span className={CategoryStyles['category-option__link-text']}>{item.text}</span>
                </li>
            </Link>
        );
    });

    return buildCategories;
};

Category.propTypes = {
    category: PropTypes.string
};

Category.defaultProps = {
    category: ''
};

export default Category;