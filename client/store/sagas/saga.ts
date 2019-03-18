import { put } from 'redux-saga/effects';
import es6promise from 'es6-promise'
// import axios from 'axios'

import {
    countIncrement,
    countDecrement,
} from '../reducers/counter';

es6promise.polyfill()

export function* delayedIncrement(amount) {
    put(countIncrement(amount))
}

export function* delayedDecrement(amount) {
    put(countDecrement(amount))
}
