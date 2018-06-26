// @ vendors
import React from 'react';
// @ copies
import copies from 'constants/copies'
// @ components
import PageHeader from 'components/commons/pageHeader/pageHeader';

const ClientsPage = () => (
    <section className="page-section">
        <PageHeader title={copies.clientsTitle} />
    </section>
);

export default ClientsPage;