import React from "react";
import { Button, Icon, Popup } from "semantic-ui-react";

const PopUpPage = () => {
  return (
    <div>
      <Popup
        trigger={<Button>Click me</Button>}
        content="Hide the popup on any scroll event"
        on="click"
        hideOnScroll
        inverted
      />
      <Popup
        trigger={<Button>Hover me</Button>}
        content="Hide the popup on any scroll event"
        hideOnScroll
      />
      <div>
        <Popup
          trigger={<Icon name="ellipsis vertical" size="large" />}
          content={
            <>
              <p style={{ margin: "0", padding: "0" }}>Create</p>
              <p style={{ margin: "0", padding: "0" }}>Add</p>
              <p style={{ margin: "0", padding: "0" }}>Edit</p>
              <p style={{ margin: "0", padding: "0" }}>Delete</p>
            </>
          }
          on="click"
          hideOnScroll
          position="right center"
        />
      </div>
    </div>
  );
};

export default PopUpPage;
