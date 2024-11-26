import React from "react";
import useWindowSize from "../hooks/useWindowSize";

const ScreenInfo = () => {
    const { width, height } = useWindowSize();

    return (
        <div className="screen-info">
            <h2>Screen Size Information</h2>
            <p>
                <strong>Width:</strong> {width}px <br />
                <strong>Height:</strong> {height}px <br />
            </p>

            {width > 1024 ? <p> You are using a large screen</p> : width > 768 ? <p> You are using a medium screen</p> : <p>You are using a small screen</p>}
        </div>
    );
};

export default ScreenInfo;
