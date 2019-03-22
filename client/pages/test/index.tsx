import * as React from 'react';
import { connect } from 'react-redux';

import Link from 'next/link';

import { countIncrement, countDecrement } from '../../store/reducers/counter';

interface Props {
	curCount: number,
	onIncrement: () => any,
	onDecrement: () => any,
}

const Test = (props: Props) => {
	const {curCount, onIncrement, onDecrement } = props

	let amount: number;
	amount = 10;

	return (
		<>
			<span>{curCount} </span>
			<button onClick={onIncrement.bind(null, amount)}>INCREMENT</button>
			<button onClick={onDecrement.bind(null, amount)}>DECREMENT</button>
			<Link href="/"><a> HOME</a></Link>
		</>
	)
};

const mapStateToProps = state => ({
        curCount: state.counter.count,
})

const mapDispatchToProps = dispatch => ({
        onIncrement: (amount: number) => dispatch(countIncrement(amount)),
        onDecrement: (amount: number) => dispatch(countDecrement(amount)), 
})

export default connect(mapStateToProps, mapDispatchToProps)(Test);