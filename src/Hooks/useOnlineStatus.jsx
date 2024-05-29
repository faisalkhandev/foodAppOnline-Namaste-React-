import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    const updateOnlineStatus = () => {
        setIsOnline(navigator.onLine);
    };

    useEffect(() => {
        window.addEventListener("Online", updateOnlineStatus);
        window.addEventListener("Offline", updateOnlineStatus);
    }, []);

    return isOnline;
};

export default useOnlineStatus;
