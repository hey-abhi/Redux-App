import './App.css';
import { connect } from 'react-redux'
import { increment, decrement, reset } from './actions'

function App(props) {
  return (
    <div className="App">
      <div>{props.counter}</div>
      <button onClick={()=>{props.incrementfun()}}>Increment</button>
      <button onClick={()=>{props.decrementfun()}}>Decrement</button>
      <button onClick={()=>{props.resetfun()}}>Reset</button>
    </div>
  );
}

const mapStateToProps = state => ({
      counter : state
})
const mapDispatchToProps = dispatch => ({
      incrementfun : () => dispatch(increment()),
      decrementfun : () => dispatch(decrement()),
      resetfun : () => dispatch(reset())
    })
    export default connect(mapStateToProps, mapDispatchToProps)(App);
