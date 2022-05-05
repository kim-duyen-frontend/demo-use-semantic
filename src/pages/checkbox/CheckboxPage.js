import React, { useState } from "react";
import { Checkbox } from "semantic-ui-react";

const CheckboxPage = () => {
  const [checked, setChecked] = useState(false);

  const handleChangeCheckBox = (checked) => {
    setChecked(checked); //làm dấu tích sáng lên
    console.log(checked);
  };
  return (
    <div>
      <Checkbox
        label="Check this box 1"
        onChange={(e, data) => handleChangeCheckBox(data.checked)}
        checked={checked}
      />
      <div>
        {/* <Button onClick={() => setChecked((prevChecked) => !prevChecked)}>
          Toggle it
        </Button>
        <Checkbox
          label="Check this box 2"
          onChange={(e, data) => setChecked(data.checked)}
          checked={checked}
        /> */}
      </div>
    </div>
  );
};

export default CheckboxPage;
