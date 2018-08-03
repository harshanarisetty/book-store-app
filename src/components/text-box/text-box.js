import React from "react";

// stateless component that returns JSX selement of a div containing an input oftype text
const TextBox = (props) => {
  return (
    <div className="text-box-style">
      <input
        className='input-style'
        type="text"
        value={props.value}
        onChange={props.change}
      />
    </div>
  );
};

export default TextBox;
