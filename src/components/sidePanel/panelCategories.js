// @ vendors
import React from 'react';
import PropTypes from 'prop-types';

// @ styles
import PanelStyles from './panelCategories.scss';

// @ components
import Category from './category';

// @ contants
import copies from 'constants/copies';

const PanelCategories = ({ category }) => (
    <section className={PanelStyles['panel-categories-section']}>
        <nav className={PanelStyles['panel-categories-section__nav']}>
            <span className={PanelStyles['panel-categories-section__nav-title']}>{copies.categories}</span>

            <ul
                className={`${PanelStyles['panel-categories-section__nav-list']} ${PanelStyles['md-list']} ${PanelStyles['md-list--drawer']}`}
            >
                <Category category={category} />
            </ul>
        </nav>
    </section>
);

PanelCategories.propTypes = {
    category: PropTypes.string
};

PanelCategories.defaultProps = {
    category: ''
};

export default PanelCategories;