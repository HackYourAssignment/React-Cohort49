import { useState, useEffect, useDebugValue } from "react";

function useWindowSize() {
    const [windowsSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useDebugValue(windowsSize, size => `width: ${size.width}, height: ${size.height}`);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowsSize;
}

export default useWindowSize;
