import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "./Actions";


export const SetCounter = () => {
    const initialCount = useSelector(state => state.count)
    const [count, setCount] = useState(initialCount);
    const dispatch = useDispatch();

    useEffect(() => {
      setCount(initialCount);
    }, [initialCount]);

    return (
        <form className="form" onSubmit={(event) => {
            event.preventDefault();
            dispatch(set(count));
        }}>
            <label htmlFor="set-to">Set count</label>
            <input type="number" value={count} onChange={(event) => setCount(event.target.value)
            } />
            <input type="submit" className="submit" />
      </form>
    );
}