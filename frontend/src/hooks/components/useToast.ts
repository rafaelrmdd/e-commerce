import toast, { Toaster } from "react-hot-toast";

export const useToast = () => {
    const notifySuccess = (message : string) => {
        toast.success(message, {
            position: "bottom-right",
            duration: 2000,
        });
    }

    const notifyFailure = (message : string) => {
        toast.error(message, {
            position: "bottom-right",
            duration: 2000,
        });
    }

    return {
        notifySuccess,
        notifyFailure,
        Toaster,
        
    }
}