import { useEffect, useState } from "react";

const calculateProgressBarWidth = () => {
    const maxHeight = document.documentElement.scrollHeight;
    const sizeHeight = window.innerHeight;
    const scrolls = window.scrollY;
    return (scrolls / (maxHeight - sizeHeight)) * 100;
};

const useScrollProgressBar = () => {
    const [width, setWidth] = useState("0%");

    useEffect(() => {
        const sideEffectFunction = () => {
            setWidth(`${calculateProgressBarWidth()}%`);    
        };
        document.addEventListener("scroll", sideEffectFunction);
        return () => {
            document.removeEventListener("scroll", sideEffectFunction);
        };
    }, []);

    return width;
};

export const ScrollProgressBar = () => {
    const progressBarWidth = useScrollProgressBar();
    return (
        <div
            style={{
                backgroundColor: "#2bc10d",
                position: "fixed",
                zIndex: "99999",
                width: progressBarWidth,
                height: "4px",
                top: "0",
                left: "0",
            }}
        ></div>
    );
};
