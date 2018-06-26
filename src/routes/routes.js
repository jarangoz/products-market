// @ vendors
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// @ components
import HomePage from 'components/home/home';
import ClientsPage from 'components/clients/clients';
import ProductList from 'containers/products/products';
import ContactsPage from 'components/contacts/contacts';
import NavigationBar from 'components/commons/navigationBar/navigationBar';

// @ styles
import Styles from './routes.scss';

const Routes = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <section>
          <NavigationBar />

          <div className={Styles['application-section']}>
            <Route path="/" exact component={HomePage} />
            <Route path="/clients" exact component={ClientsPage} />
            <Route path="/contacts" exact component={ContactsPage} />
            <Route path="/products" exact component={ProductList} />
            <Route path="/products/:category" exact component={ProductList} />
          </div>
        </section>
      </Router>
    </Provider>
  )
}

export default Routes;
