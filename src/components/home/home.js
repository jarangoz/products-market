// @ vendors
import React from 'react';
// @ copies
import copies from 'constants/copies'
// @ components
import PageHeader from 'components/commons/pageHeader/pageHeader';

const HomePage = () => (
    <section className="page-section">
        <PageHeader title={copies.homeTitle} />
    </section>
);

export default HomePage;