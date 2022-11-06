import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent/FirstComponent';

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

  return (
    <div className="App">
      <p>{message}</p>
      <ul>
        {items.map((item, index) => (
          <p key={index}>{item}</p>    
        ))}
      </ul>
      <ul>
        {objItems.map((item, index) => (
          <p key={index}>{item.title}</p>    
        ))}
      </ul>

      {/* 子要素はチルドレンとして渡せる */}
      <FirstComponent message={message} >
        <p>チルドレン1</p>
        <p>チルドレン2</p>
      </FirstComponent>

    </div>
  );
}

export default App;
