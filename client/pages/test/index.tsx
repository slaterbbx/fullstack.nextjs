import React, {Component} from 'react';
import { connect } from 'react-redux';

import Link from 'next/link';

import { countIncrement, countDecrement } from '../../store/reducers/counter';

class Test extends Component {
    
  
    render() {
      return (
          <>
          <span>{this.props.curCount} </span>
          <button onClick={this.props.onIncrement.bind(null, 50)}>INCREMENT</button>
          <button onClick={this.props.onDecrement}>DECREMENT</button>
          <Link href="/"><a> HOME</a></Link>
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
        onIncrement: (amount) => dispatch(countIncrement(amount)),
        onDecrement: () => dispatch(countDecrement(10)), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);