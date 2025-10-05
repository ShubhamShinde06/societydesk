import { toast } from "sonner";

export const showSuccessToast = ({ heading, message } = {}) => {
  toast(
    <div className="text-white space-y-1">
      <p className="font-semibold">{heading}</p>
      <p className="text-sm">{message}</p>
    </div>,
    {
      style: {
        background: "#22C55E",
        color: "#ff6b6b",
        border: "0px",
        borderRadius: "8px",
      }
    }
  );
};

export const showErrorToast = ({ heading, message } = {}) => {
  toast(
    <div className="text-white space-y-1">
      <p className="font-semibold">{heading}</p>
      <p className="text-sm text-white">{message}</p>
    </div>,
    {
      style: {
        background: "#EF4444",
        color: "#ff6b6b",
        border: "0px",
        borderRadius: "8px",
      }
    }
  );
};  