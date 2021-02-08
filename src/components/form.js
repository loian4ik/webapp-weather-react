import React from "react";

const Form = props => (
  <form onSubmit={props.weatherMethod}>
<input type="text" name="city" placeholder="Сity"/>
<button> Get weather</button>
  </form>

)

export default Form;
