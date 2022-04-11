import React from "react";
import { Menu, Image, Label, Segment, Dropdown } from "semantic-ui-react";
import LOGO from "../../assets/logo.svg";

const NavbarPage = () => {
  return (
    <>
      <div>
        <Menu>
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
          <Menu.Item>Item 3</Menu.Item>
          <Menu.Item>Item 4</Menu.Item>
          <Menu.Item>Item 5</Menu.Item>
        </Menu>
      </div>
      <div>
        <Menu>
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
          <Menu.Item>Item 3</Menu.Item>
          <Menu.Item position="right">Item 4</Menu.Item>
          <Menu.Item>Item 5</Menu.Item>
        </Menu>
      </div>

      <div>
        <Menu secondary>
          <Image src={LOGO} width={60} />
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
          <Menu.Item>Item 3</Menu.Item>
          <Menu.Item position="right">Item 4</Menu.Item>
          <Menu.Item>Item 5</Menu.Item>
        </Menu>
      </div>
      <div>
        <Segment inverted>
          <Menu secondary inverted>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
            <Menu.Item position="right">Item 4</Menu.Item>
            <Menu.Item>Item 5</Menu.Item>
            <Dropdown item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </Segment>
      </div>
      <div>
        <Menu vertical inverted>
          <Menu.Item name="inbox">
            <Label color="teal">1</Label>
            Inbox
          </Menu.Item>

          <Menu.Item name="spam">
            <Label>51</Label>
            Spam
          </Menu.Item>

          <Menu.Item name="updates">
            <Label>1</Label>
            Updates
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};

export default NavbarPage;
