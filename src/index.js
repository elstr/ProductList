import React from 'react';
import ReactDOM from 'react-dom';
import ProductTable from './Components/ProductTable'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ProductTable />, document.getElementById('root'));
registerServiceWorker();
