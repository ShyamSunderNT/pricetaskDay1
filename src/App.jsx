import React from 'react';
import Card from "./components/Card"
import './App.css';

function App() {
  const data = [
    {
      subscriptionType: "FREE",
      subscriptionFee: "0",
      firstpoint: "Single",
      transparency: "transparency",
      check: "×",
      lastPoint: "× Monthly Status Reports"
    },
    {
      subscriptionType: "PLUS",
      subscriptionFee: "9",
      firstpoint: "5",
      singleTransparency: "singleTransparency",
      check: "√",
      lastPoint: "× Monthly Status Reports"
    },
    {
      subscriptionType: "PRO",
      subscriptionFee: "49",
      firstpoint: "Unlimited",
      check: "√",
      lastPoint: "√ Monthly Status Reports"
    }
  ];

  return (
    <div className="app">
      {data.map((value, index) => (
        <Card
          key={index}
          type={value.subscriptionType}
          fee={value.subscriptionFee}
          user={value.firstpoint}
          transparency={value.transparency}
          singleTransparency={value.singleTransparency}
          check={value.check}
          lastPoint={value.lastPoint}
        />
      ))}
    </div>
  );
}

export default App;