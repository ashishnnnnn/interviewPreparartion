import React, { useState, useEffect, useRef } from 'react';


import useWhyDidYouUpdate from './useWhyDidYouUpdate';

const Counter = React.memo((props) => {
  useWhyDidYouUpdate('Counter', props);
  return <div style={props.style}>{props.count}</div>;
});

const KyuUpdate = () => {
  const [count, setCount] = useState(0);
  const [userId, setUserId] = useState(0);

  const counterStyle = {
    fontSize: '3rem',
    color: 'red',
  };

  return (
    <div style={{margin:"4px auto"}}>
      <div className="counter">
        <Counter count={count} style={counterStyle} />
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <h2 userId={userId} onClick={() => setUserId(userId + 1)} >
            {userId}
      </h2>
    </div>
  );
};

export default KyuUpdate;
