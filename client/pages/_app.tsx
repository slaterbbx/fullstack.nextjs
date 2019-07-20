import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import makeStore from '../store/store';

class MyApp extends App {

  render () {
    const { Component, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component/>
        </Provider>
      </Container>
    )
  }
};

export default withRedux(makeStore)(withReduxSaga({ async: true })(MyApp));