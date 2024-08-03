import React, { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import Toast from "../components/toast";
import { ToastProps, PositionType, UseToastReturn } from "../components/types";

const useToast = (
  position: PositionType = "bottom-right"
): UseToastReturn => {
  const [toasts, setToasts] = useState<
    (ToastProps & { id: string; duration: number })[]
  >([]);

  const triggerToast = useCallback(
    (toastProps: ToastProps) => {
      const toastId = uuidv4();
      const duration = toastProps.duration ?? 3000; // Default duration
      setToasts((prevToasts) => [
        ...prevToasts,
        { id: toastId, ...toastProps, duration },
      ]);

      setTimeout(() => {
        setToasts((prevToasts) =>
          prevToasts.filter((n) => n.id !== toastId)
        );
      }, duration);
    },
    []
  );

  const handleToastClose = (index: number) => {
    setToasts((prevToasts) => {
      const updatedToasts = [...prevToasts];
      updatedToasts.splice(index, 1);
      return updatedToasts;
    });
  };

  const ToastContainer = (
    <div
      className={`toast-container ${position} ${position.split("-")[0]}`}
    >
      {toasts.map((toast, index) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => handleToastClose(index)} 
        />
      ))}
    </div>
  );

  return { ToastContainer, triggerToast };
};

export default useToast;
