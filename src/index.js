// @ vendors
import React from 'react';
import ReactDOM from 'react-dom';
import WebFontLoader from 'webfontloader';

// @ service worker
import registerServiceWorker from './registerServiceWorker';

// @ components
import Routes from 'routes/routes';

// @ store
import store from 'state/store/store'

// @ styles
import 'styles/index.scss';

WebFontLoader.load({
    google: {
        families: ['Roboto:300,400,500,700', 'Material+Icons'],
    },
});

ReactDOM.render(<Routes store={store} />, document.getElementById('root'));
registerServiceWorker();
