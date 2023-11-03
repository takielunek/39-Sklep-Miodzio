import React from 'react';


const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label className={`${styles.heading2}`} htmlFor={props.input.id}>{props.label}</label>
      <input className='border-2 border-gray rounded-[10px]' ref={ref} {...props.input} />
    </div>
  );
});

export default Input;