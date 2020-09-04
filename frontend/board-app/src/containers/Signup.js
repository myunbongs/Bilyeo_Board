import React, { useState } from "react";
function SignIn() {
  const [ID, password, password2] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleChange = ({ target: { value } }) => SignIn(value);

  const handleSubmit = async (event) => {
    setDisabled(true);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    if (password != password2) {
      alert("패스워드가 같지 않습니다.");
    } else {
      alert("회원가입 되었습니다");
    }
    setDisabled(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input>
        type = "ID" name = "ID" value ={ID}
        type = "password" name = "password" value ={password}
        type = "password" name = "password2" value ={password2}
        onChange={handleChange}
      </input>
      <button type="submit" disabled={disabled}>
        회원가입
      </button>
    </form>
  );
}
export default SignIn;
