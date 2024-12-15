import { useSelector, useDispatch } from "react-redux";

useDispatch
function Counter() {
    const { count, add, loading } = useSelector((state) => state); // Get state
    const state = useSelector((state) => state); // Get state
    const dispatch = useDispatch(); // Dispatch actions

  
    return (
      <div>
        <h1 className="text-white">
          Count: {count} and Add: {add} or state = {console.log(state)}
        </h1>
        <button
          className="text-white bg-slate-500 rounded-lg mr-1 p-3"
          onClick={() => {
            dispatch(setLoading(true));
            setTimeout(() => {
              dispatch(increment());
              dispatch(setLoading(false));
            }, 1000);
          }}
          disabled={loading}
        >
          {loading ? "loading..." : "Increment"}
        </button>
        <button
          className="text-white bg-slate-500 rounded-lg  p-3"
          onClick={() => dispatch(decrement())}
          disabled={loading}
        >
          Decrement
        </button>
      </div>
    );
  }

  export default Counter;