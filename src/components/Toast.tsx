import { ToastContainer } from "react-toastify";
import { IToast } from "types/events";

const Toast = ({ status, toastisActive }: IToast) => {
  return (
    <>
      {status === 400 && (
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
        />
      )}
      {toastisActive && (
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
        />
      )}
    </>
  );
};

export default Toast;
