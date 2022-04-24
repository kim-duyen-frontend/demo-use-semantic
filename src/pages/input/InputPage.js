import React, { useState } from "react";
import { Form, Input } from "semantic-ui-react";
import PasswordInput from "../../components/PasswordInput";

const InputPage = () => {
  const [loginInfo, setLoginInfo] = useState({ userName: "", password: "" });
  const handleChangeLoginInfo = (name) => (e, data) => {
    setLoginInfo({ ...loginInfo, [name]: data.value });
  };
  console.log(loginInfo);
  return (
    <Form>
      <Form.Field
        control={Input}
        value={loginInfo["userName"]}
        onChange={handleChangeLoginInfo("userName")}
        label="Email"
      />
      <Form.Field
        control={PasswordInput}
        value={loginInfo["password"]}
        onChange={handleChangeLoginInfo("password")}
        label="Password"
      />
    </Form>
  );
};

export default InputPage;
