import { useSelector} from "react-redux";
import { useActions } from "./use-actions";
import { set, increment, decrement } from "./Actions";
import { SetCounter } from "./SetCounter";
import { useCounter } from "./useCounter";
import "./index.css";

const App = () => {
  const { count, increment, decrement, set } = useCounter();
  
  return (
    <section>
      <header>Days since last incident</header>
      <div className="count">{count}</div>
      <div className="btn-container">
        <button onClick={() => decrement()} className="decrement">
          decrement
        </button>
        <button onClick={() => set(0)} className="set">
          set
        </button>
        <button onClick={() =>increment()} className="increment">
          increment
        </button>
      </div>

      <SetCounter/>
    </section>
  );
}

export default App;