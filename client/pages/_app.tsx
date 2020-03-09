import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import makeStore from '../store/store';

class MyApp extends App {

  render () {
		// @ts-ignore
    const { Component, store } = this.props
    return (
      <>
        <Provider store={store}>
          <Component/>
        </Provider>
      </>
    )
  }
};

export default withRedux(makeStore)(withReduxSaga({ async: true })(MyApp));