import {useSelector, useDispatch} from 'react-redux'
import { decrementAsync, incrementAsync } from '../redux/actions'
import { selectCount } from '../redux/selectors'
import { AppDispatch } from '../redux/types'
import '../index.css';


const Counter = () => {
    const count = useSelector(selectCount)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div>
            <h1>
                Count: {count}
            </h1>
            <input type="text" value={count} />
            <button className="button" onClick={() => dispatch(decrementAsync())}>Decrement</button>
            <button className="button" onClick={() => dispatch(incrementAsync())}>Increment</button>
        </div>
    );
};

export default Counter;