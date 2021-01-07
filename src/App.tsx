import * as React from "react";
import "./styles.css";
import { Button } from "antd";
import Mod, { useModRef } from "./Mod";

export default function App() {
  const modalRef = useModRef();
  const modalRef1 = useModRef();
  const handleClick = () => {
    modalRef?.current?.open();
  };
  const handleClick1 = () => {
    modalRef1?.current?.open();
  };
  return (
    <div className="App">
      <Button onClick={handleClick}>first</Button>
      <Mod
        onCancel={() => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(true);
            }, 3000);
          });
        }}
        onOk={() => {
          return true;
        }}
        ref={modalRef1}
      >
        <h1>second</h1>
      </Mod>
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
        ref={modalRef}
      >
        <Button onClick={handleClick1}>second</Button>
      </Mod>
    </div>
  );
}
