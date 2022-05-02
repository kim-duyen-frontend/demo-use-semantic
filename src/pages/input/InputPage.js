import React, { useState } from "react";
import { Form, Input, Popup, Icon, Button } from "semantic-ui-react";
import PasswordInput from "../../components/PasswordInput";

const InputPage = () => {
  const [info, setInfo] = useState({ userName: "", password: "" });
  const [validateInfo, setValidateInfo] = useState({
    min8Chars: false,
    specialChar: false,
    number: false,
    lowerCase: false,
    upperCase: false,
  });

  const handleChangeFieldInfo = (name) => (e, data) => {
    setInfo({ ...info, [name]: data.value });
    if (name === "password") {
      handleValidatePassword(data.value);
      return;
    }
  };
  const handleValidatePassword = (_password = null) => {
    const containNumberReg = /\d/;
    const containUpperReg = /(?=.*[A-Z])/;
    const containLowerReg = /(?=.*[a-z])/;
    const containSpecialReg = /(?=.*[-+_!@#$%^&*., ?])/;
    setValidateInfo({
      ...validateInfo,
      min8Chars: _password.length >= 8,
      number: containNumberReg.test(_password),
      lowerCase: containLowerReg.test(_password),
      upperCase: containUpperReg.test(_password),
      specialChar: containSpecialReg.test(_password),
    });
  };
  const getValidatePasswordStyle = (name, type) => {
    if (type === "className") {
      if (validateInfo[name]) {
        return "text-theme-color--green";
      }
      return "text-theme-color--red";
    }
  };
  const handleConfirmCreateAccount = () => {
    console.log(info);
  };

  return (
    <Form>
      <Form.Field
        control={Input}
        value={info["userName"]}
        onChange={handleChangeFieldInfo("userName")}
        label="UserName"
      />
      <Popup
        flowing
        trigger={
          <Form.Field
            control={PasswordInput}
            value={info["password"]}
            onChange={handleChangeFieldInfo("password")}
            label="Password"
            onBlur={() => handleValidatePassword(info.password)}
          />
        }
        content={
          <>
            <b>Password must contain the following:</b>
            <hr />
            <p className={getValidatePasswordStyle("lowerCase", "className")}>
              <Icon name={getValidatePasswordStyle("lowerCase", "icon")} /> A{" "}
              <b>lowercase letter</b>
            </p>
            <p className={getValidatePasswordStyle("upperCase", "className")}>
              <Icon name={getValidatePasswordStyle("upperCase", "icon")} /> A{" "}
              <b>capital (uppercase) letter</b>
            </p>
            <p className={getValidatePasswordStyle("number", "className")}>
              <Icon name={getValidatePasswordStyle("number", "icon")} /> A{" "}
              <b>number</b>
            </p>
            <p className={getValidatePasswordStyle("specialChar", "className")}>
              <Icon name={getValidatePasswordStyle("specialChar", "icon")} /> A{" "}
              <b>special character</b>
            </p>
            <p className={getValidatePasswordStyle("min8Chars", "className")}>
              <Icon name={getValidatePasswordStyle("min8Chars", "icon")} />{" "}
              Minimum <b>8 characters</b>
            </p>
          </>
        }
        on="focus"
      />
      <Form.Field>
        <Button
          type="submit"
          content="Confirm"
          onClick={handleConfirmCreateAccount}
        />
      </Form.Field>
    </Form>
  );
};

export default InputPage;
