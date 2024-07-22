export const Tab = ({ name, clickHandler }) => {
    return (
        <button style={{ height: "40px", width: "90px", marginRight: "20px" }} 
                onClick={clickHandler}>
            {name}
        </button>
    );
};
