import { useEffect } from "react";

export const ScrollProgressBar = () => {
    return (
        <div
            id="scrollProgressBar"
            style={{
                backgroundColor: "#2bc10d",
                position: "fixed",
                zIndex: "99999",
                width: "0%",
                height: "4px",
                top: "0",
                left: "0",
            }}
        >
            {useEffect(() => {
                const calculateScrollProgress = () => {
                    const maxHeight = document.body.scrollHeight;
                    const sizeHeight = window.innerHeight;
                    const scrolls = window.scrollY;
                    document.getElementById("scrollProgressBar").style.width = `${
                        (scrolls / (maxHeight - sizeHeight)) * 100
                    }%`;
                };
                document.addEventListener("scroll", calculateScrollProgress);

                return () => {
                    document.removeEventListener("scroll", calculateScrollProgress);
                };
            }, [])}
        </div>
    );
};
