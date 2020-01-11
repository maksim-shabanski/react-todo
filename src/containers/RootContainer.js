import React from 'react';
import { connect } from 'react-redux';

import { initializeApp } from '../actions/actionCreators';
import Root from '../components/Root';

const RootContainer = props => <Root {...props} />;

const mapDispatchToProps = dispatch => ({
  onAppInit: () => dispatch(initializeApp()),
});

export default connect(null, mapDispatchToProps)(RootContainer);
