// @ vendors
import React from 'react';
import PropTypes from 'prop-types';

// @ styles
import TitleStyles from './pageHeader.scss';

const PageHeader = ({ title }) => (
    <header className={TitleStyles['section-header']}>
        <h1 className={TitleStyles['section-header__title']}>{title}</h1>
    </header>
);

PageHeader.propTypes = {
    title: PropTypes.string.isRequired
};

export default PageHeader;