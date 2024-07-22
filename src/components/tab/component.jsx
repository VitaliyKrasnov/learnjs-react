export const Tab = ({ name, clickHandler, disabled }) => {
    return (
        <button disabled={disabled} style={{ height: "40px", width: "90px", marginRight: "20px" }} 
                onClick={clickHandler}>
            {name}
        </button>
    );
};
