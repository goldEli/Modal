import React from "react";
import { Modal } from "antd";
import { ModalProps } from "antd/lib/modal/index";

type IModWithStylePropw = ModalProps;

const ModWithStyle: React.FC<IModWithStylePropw> = (props) => {
  return <Modal {...props} />;
};

export default ModWithStyle;
