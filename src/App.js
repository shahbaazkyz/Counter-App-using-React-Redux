import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.counter);

  const decrement = (e) => {
    if (state === 0) {
      alert("Cannot less than 0")
    }
    else {
      dispatch( {type : "DECREMENT"})
    }
  }

  return (
    <>
      <div className="main-project-wrapper">
        <div className="project-6-page-wrapper">
          <h2> Counter Project</h2>
          <div className="project-6-wrapper">
            <div className="counter-box-wrapper">
              <div className="counter-number" id="counter-placeholder">
               {state}
              </div>
              <button className="count-btns" id="btn-increment"
                onClick={
                  () => {
                    dispatch({
                      type: "INCREMENT"
                    }
                    )
                  }}
              >
                Increment
              </button>
              <button className="count-btns" id="btn-decrement"
              onClick = { decrement}
              >
                Decrement
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
