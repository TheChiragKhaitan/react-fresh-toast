export type PositionType =
  | "bottom-left"
  | "bottom-right"
  | "top-left"
  | "top-right"
  | "top-center";

export interface ToastProps {
  type: "success" | "info" | "warning" | "error";
  message: string;
  onClose ?: () => void; // Optional
  animation ?: "fade" | "pop" | "slide";
  duration ?: number; // Optional
}

export interface UseToastReturn {
  ToastContainer: JSX.Element;
  triggerToast: (toastProps: ToastProps) => void;
}
