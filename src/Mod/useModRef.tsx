import React from "react";
import { IModHandle } from "./mod";

const useModRef = () => {
  const ref = React.useRef<IModHandle>(null);

  return ref;
};

export default useModRef;
