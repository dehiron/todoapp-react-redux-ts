import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent/FirstComponent';
import TodolistSection from './components/TodolistSection/TodolistSection';

type Item = {
  id: number,
  title: string
}

const App = () => {
  const message: string = "ハローReact"
  const items: string[] = [ "item1", "item2", "item3" ]
  const objItems: Item[] = [
    {
      id: 1,
      title: "object item 1"
    },
    {
      id: 2,
      title: "object item 2"
      
    },
    {
      id: 3,
      title: "object item 3"
    }
  ]

  const [count, setCount] = useState<number>(0)
  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    setCount(count - 1)
  }

  const [messageState, setMessageState] = useState<string>("")
  const handleMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessageState(event.target.value)
  }

  return (
    <div className="App" style={{width:"100vw"}}>
      <p style={{fontSize:"24px", fontWeight:"600", borderBottom:"2px solid rgb(211,211,211)", padding:"10px" }}>
        Ract × Redux × TypeScript PlayGround
      </p>

      <div style={{display:"flex"}}>

        <div style={{width:"50%"}}>
          <p>{message}</p>
          <div>
            {items.map((item, index) => (
              <p key={index}>{item}</p>    
            ))}
          </div>
          <div>
            {objItems.map((item, index) => (
              <p key={index}>{item.title}</p>    
            ))}
          </div>

          {/* 子要素はチルドレンとして渡せる */}
          <FirstComponent message={message} >
            <p>チルドレン1</p>
            <p>チルドレン2</p>
          </FirstComponent>

          <div>
            <p>ここからカウントステートの例</p>
            {count}
            <div>
              <button onClick={handleDecrement}>-</button>
              <button onClick={handleIncrement}>+</button>
            </div>
          </div>

          <div>
            <p>ここからメッセージステートの例</p>
            {messageState}
            <div>
              <input type="text" value={messageState} onChange={handleMessage} />
            </div>
          </div>
        </div>

        <div style={{width:"50%"}}>
          <TodolistSection />
        </div>
      
      </div>

    </div>
  );
}

export default App;
