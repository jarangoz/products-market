// @ vendors
import React from 'react';
import { Link } from 'react-router-dom';

// @ constants
import copies from 'constants/copies'

// @ styles
import NavigationStyles from './navigationBar.scss';

const NavigationBar = () => (
    <nav className={NavigationStyles['navigation-section']}>
        <Link to="/">{copies.homeTitle}</Link>
        <Link to="/products">{copies.productsTitle}</Link>
        <Link to="/clients">{copies.clientsTitle}</Link>
        <Link to="/contacts">{copies.contactsTitle}</Link>
    </nav>
);

export default NavigationBar;