import { useState } from "react";
import styled, { keyframes } from "styled-components";

function App() {
  const [value, setValue] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };

  return (
    <div>
      <form>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        ></input>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default App;
