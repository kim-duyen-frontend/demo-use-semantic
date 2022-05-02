import React from "react";
import { Input } from "semantic-ui-react";

const InputCheckDuplicate = ({ currentValue, ...props }) => {
  // const [isDuplicated, setIsDuplicated] = useState(false);
  // const [isFocused, setIsFocused] = useState(false);
  console.log("New Value: ", props.value); //các giá trị nhập từ onChange
  // const handleFocusInput = () => {
  //   setIsFocused(true);
  // };
  // const handleCheckPropertyDuplicate = async () => {
  //   // setIsFocused(false);
  //   const newValue = props.value;
  //   if (newValue && newValue !== currentValue) {
  //     try {
  //       //gọi hàm bên api/APICall.js
  //       // const data = await props.checkPropertyDuplicateApi(
  //       //   props.name,
  //       //   newValue
  //       // );
  //       // if (data.isDuplicated) {
  //       //   console.log("Lỗi");
  //       // }
  //       // setIsDuplicated(data.isDuplicated);
  //     } catch (error) {}
  //   } else {
  //     // setIsDuplicated(false);
  //   }
  // };
  return (
    <Input
      fluid
      {...props}
      // onBlur={() => {
      //   props.onBlur();
      //   handleCheckPropertyDuplicate();
      // }}
      // onFocus={handleFocusInput}
      // icon={
      //   props.value && !isFocused ? (
      //     <Icon
      //       name={isDuplicated ? "close" : "check"}
      //       color={isDuplicated ? "red" : "green"}
      //     />
      //   ) : (
      //     false
      //   )
      // }
    />
  );
};

export default InputCheckDuplicate;
