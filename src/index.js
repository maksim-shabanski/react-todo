import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import RootContainer from 'containers/RootContainer';
import store from 'store';

ReactDOM.render(
  <Provider store={store}>
    <RootContainer />
  </Provider>,
  document.getElementById('root')
);
