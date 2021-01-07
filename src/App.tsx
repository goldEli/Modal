import * as React from "react";
import "./styles.css";
import { Button } from "antd";
import Mod, { useMod } from "./Mod";

export default function App() {
  const modal = useMod();
  const handleClick = () => {
    modal?.current?.open();
  };
  return (
    <div className="App">
      <Button onClick={handleClick}>click</Button>
      <Mod
        onCancel={() => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              console.log(123);
              resolve(true);
            }, 3000);
          });
        }}
        onOk={() => {
          return true;
        }}
        ref={modal}
      >
        <h1>hello world</h1>
      </Mod>
    </div>
  );
}
