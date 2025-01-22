import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(-1)
  let result = -1;


  const meFunction = () => {
    setCount(-1)
  }


  const myFunction = () => {
    setCount
    let num = Math.round(Math.random() * 10);
    result = num % 2
    setCount(count + 1 + result)
  }

  console.log(count);

  return (
    <>
    <div className='wrapper'>
      <button className='btn' onClick={meFunction}>Сброс</button>
      <button className='btn' onClick={myFunction}>Узнать ответ</button>
    </div>
      {count == -1 && <div className='box-1'></div>}
      {count == 0 && <div className='box-2'>да</div>}
      {count == 1 && <div className='box-3'>нет</div>}
    </>
  )
}


export default App
