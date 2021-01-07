import React, { useState, useImperativeHandle } from "react";
import { Modal } from "antd";

interface IModProps {
  onOk?: () => boolean | Promise<boolean>;
  onCancel?: () => boolean | Promise<boolean>;
  ref: React.Ref<IModHandle>;
  children: any;
}
export interface IModHandle {
  open: () => void;
}

const Mod = React.forwardRef<IModHandle, IModProps>((props, ref) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => {
      setIsModalVisible(true);
    }
  }));

  const close = () => {
    setIsModalVisible(false);
  };

  const onOk = async () => {
    if (typeof props.onOk === "function") {
      const ret = await props?.onOk?.();
      if (ret) {
        close();
      }
    } else {
      close();
    }
  };

  const onCancel = async () => {
    if (typeof props.onCancel === "function") {
      const ret = await props?.onCancel?.();
      if (ret) {
        close();
      }
    } else {
      close();
    }
  };
  return (
    <>
      <Modal
        {...props}
        onOk={onOk}
        onCancel={onCancel}
        visible={isModalVisible}
      >
        {props.children}
      </Modal>
    </>
  );
});

export default Mod;
