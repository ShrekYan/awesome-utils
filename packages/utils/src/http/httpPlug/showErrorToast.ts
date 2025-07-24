//import { Toast } from "antd-mobile";
import { debounce } from "es-toolkit";

export default function () {
    const debouncedLog = debounce((errorMsg:string) => {
        // Toast.show({
        //     content: errorMsg,
        //     position: "top"
        // });
    }, 300);
    return debouncedLog;
}
