import { put } from 'redux-saga/effects';
import es6promise from 'es6-promise'

import {
    countIncrement,
    countDecrement,
} from '../reducers/counter';

es6promise.polyfill()

export function* delayedIncrement(amount: number) {
	// We are using the saga to pass the countIncremenent payload back to itself
	// This is only to show that the Sagas are functioning.
    put(countIncrement(amount))
}

export function* delayedDecrement(amount: number) {
	// We are using the saga to pass the countDecrement payload back to itself
	// This is only to show that the Sagas are functioning.
    put(countDecrement(amount))
}
