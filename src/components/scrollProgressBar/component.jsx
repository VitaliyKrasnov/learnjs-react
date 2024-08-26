import { useEffect, useState } from "react";

import styles from "./styles.module.css"

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
        <div className={styles.progressBar}
            style={{width: progressBarWidth}}
        ></div>
    );
};
