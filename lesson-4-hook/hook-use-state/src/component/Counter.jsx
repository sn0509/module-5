import React, { useState } from 'react'

function Counter() {
    let [count, setCount] = useState(0);


    const handleClick = () => {
        const newValue = count +1;
        setCount(newValue);
    }
  return (
    <>
        <div>
            Bạn đã nhấn nút {count} lần
            <div>
                <button onClick={handleClick}>Click me</button>
            </div>
        </div>
    </>
  );
}

export default Counter