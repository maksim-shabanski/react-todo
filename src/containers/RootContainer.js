import React from 'react';
import { connect } from 'react-redux';

import Root from 'components/Root';
import { initializeApp } from 'actions/actionCreators';

const RootContainer = props => <Root {...props} />;

const mapDispatchToProps = dispatch => ({
  onAppInit: () => dispatch(initializeApp()),
});

export default connect(null, mapDispatchToProps)(RootContainer);
