import * as React from 'react';
import { connect } from 'react-redux';

import { countIncrement, countDecrement } from '../../store/reducers/counter';

type Props = {
	curCount: number,
	onIncrement: () => any,
	onDecrement: () => any,
}

const CounterUI = (props: Props) => {
	const { curCount, onIncrement, onDecrement } = props;

	let amount: number;
	amount = 20;

	return (
		<>
			<span className="count">{curCount} </span>
			<button onClick={onIncrement.bind(null, amount)}>INCREMENT</button>
			<button onClick={onDecrement.bind(null, amount)}>DECREMENT</button>
		</>
	)
};

const mapStateToProps = state => ({
	curCount: state.counter.count,
});

const mapDispatchToProps = dispatch => ({
	onIncrement: (amount: number) => dispatch(countIncrement(amount)),
    onDecrement: (amount: number) => dispatch(countDecrement(amount)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterUI);