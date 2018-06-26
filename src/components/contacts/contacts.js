// @ vendors
import React from 'react';
// @ copies
import copies from 'constants/copies'
// @ components
import PageHeader from 'components/commons/pageHeader/pageHeader';

const ContactsPage = () => (
    <section className="page-section">
        <PageHeader title={copies.contactsTitle} />
    </section>
);

export default ContactsPage;