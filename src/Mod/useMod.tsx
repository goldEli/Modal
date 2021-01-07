import React from "react";
import { IModHandle } from "./mod";

const useMod = () => {
  const modRef = React.useRef<IModHandle>(null);

  return modRef;
};

export default useMod;
