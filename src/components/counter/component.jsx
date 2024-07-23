export const Counter = ({ value, increment, decrement }) => {
    return (
      <>
        <button style={{marginLeft: '30px'}} onClick={decrement}>-</button>
        <span readOnly style={{paddingLeft: '10px', paddingRight: '10px', textAlign: 'center'}}>{value}</span>
        <button onClick={increment}>+</button>
      </>
    );
  };
  