import { Fragment, useState, useEffect } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState([]);

  const onIncrement = () => {
    setCount((prev) => {
      if (count >= 10) return prev;
      return prev + 1

    })
  }
  const onDecrement = () => {
    setCount((prev) => {
      if (prev <= 0) return prev;
      return prev - 1
    });
  };
  const fetchBackendData = async () => {
    const response = await fetch("http://localhost:3001/user")
    const data = await response.json()
    console.log(data);
    setUser(data)
  }
  useEffect(() => {
    fetchBackendData()
  }, [])


  return (
    <Fragment>
          <ul>
            {
              user.map((data)=>(
                <li>{data.name}</li>
              ))
            }
          </ul>
      {/* <Counter count={count} onDecrement={onDecrement} onIncrement={onIncrement} /> */}
    </Fragment>
  );
}

export default App;
