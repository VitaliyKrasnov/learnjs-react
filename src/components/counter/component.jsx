export const Counter = ({ dishAmount, incDishAmount, decDishAmount }) => {
    return (
      <>
        <button style={{marginLeft: '30px'}} onClick={decDishAmount}>-</button>
        <span readOnly style={{paddingLeft: '10px', paddingRight: '10px', textAlign: 'center'}}>{dishAmount}</span>
        <button onClick={incDishAmount}>+</button>
      </>
    );
  };
  