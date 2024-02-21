import { useState } from "react"
const Counter = () => {
    const [num, setNum] = useState(0)

    const add = () => {
        setNum(num + 1)
    }

    return (
        <div>
            <button onClick={() => setNum(num - 1)}>-</button>
            <h1>{num}</h1>
            <button onClick={add}>+</button>
        </div>
    )
}
export default Counter