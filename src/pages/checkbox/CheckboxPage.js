import React, { useState } from "react";
import { Checkbox, Button } from "semantic-ui-react";

const CheckboxPage = () => {
  const VersionCheckBox_One = () => {
    const [checked, setChecked] = useState(false);
    const handleChangeCheckBox = (checked, name) => {
      setChecked(checked); //làm dấu tích sáng lên
      console.log(checked);
      console.log(name);
    };
    return (
      <div>
        <Checkbox
          name="box-one"
          label="Check this box 1"
          onChange={(e, data) => handleChangeCheckBox(data.checked, data.name)}
          checked={checked}
        />
      </div>
    );
  };
  const VersionCheckBox_Two = () => {
    const [checked, setChecked] = useState(false);
    return (
      <div>
        <Checkbox
          label="Check this box 1"
          onChange={(e, data) => setChecked(data.checked)}
          checked={checked}
        />
        <Checkbox
          label="Check this box 2"
          onChange={(e, data) => setChecked(data.checked)}
          checked={checked}
        />
      </div>
    );
  };
  const VersionCheckBox_Three = () => {
    const [checked, setChecked] = useState(false);
    return (
      <div>
        <Button onClick={() => setChecked((prevChecked) => !prevChecked)}>
          Toggle it
        </Button>
        <Checkbox
          label="Check this box 2"
          onChange={(e, data) => setChecked(data.checked)}
          checked={checked}
        />
      </div>
    );
  };
  return (
    <div>
      <h2>Dạng 1</h2>
      {VersionCheckBox_One()}
      <h2>Dạng 2</h2>
      {VersionCheckBox_Two()}
      <h2>Dạng 3</h2>
      {VersionCheckBox_Three()}
    </div>
  );
};

export default CheckboxPage;
