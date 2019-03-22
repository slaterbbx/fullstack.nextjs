import React, {Component} from 'react';
import { connect } from 'react-redux';

import Link from 'next/link';

import { countIncrement, countDecrement } from '../store/reducers/counter';

class Index extends Component {
    
  
    render() {
		// Typescript compile test
		let test: number;
		test = 10;
		console.log(test);

      return (
          <>
          <span>{this.props.curCount} </span>
          <button onClick={this.props.onIncrement}>INCREMENT</button>
          <button onClick={this.props.onDecrement}>DECREMENT</button>
          <Link href="/test"><a> LINK!</a></Link>
          </>
      )
    }
};

const mapStateToProps = state => {
    return {
        curCount: state.counter.count,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch(countIncrement(10)),
        onDecrement: () => dispatch(countDecrement(10)), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);