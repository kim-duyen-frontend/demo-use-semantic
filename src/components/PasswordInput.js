import React, { useState } from "react";
import { Input, Icon } from "semantic-ui-react";

function PasswordInput(props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Input
      {...props}
      type={showPassword ? "text" : "password"}
      action={
        <span onClick={handleShowPassword}>
          <Icon name={showPassword ? "eye" : "eye slash"} />
        </span>
      }
    />
  );
}

export default PasswordInput;
