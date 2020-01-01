import React from "react";

const Form = props => (
  <form
    onSubmit={props.getProfile}
    style={{
      marginBottom: "2rem"
    }}
  >
    <input
      className="form__input"
      type="text"
      name="profileName"
      placeholder="Type github profile here"
    />
    <span>
      <button className="form__button">Search</button>
    </span>
  </form>
);

export default Form;
