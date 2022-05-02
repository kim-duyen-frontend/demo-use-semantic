import React from "react";
import { Image, Modal,Button,Icon } from "semantic-ui-react";
import logo from "../assets/logo.svg";

const MyModal = ({ open, onClose }) => {
  return (
    <Modal onClose={onClose} open={open}>
      <Modal.Header>Create account</Modal.Header>
      <Modal.Content image>
        <Image
          size="medium"
          //   src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
          src={logo}
          wrapped
        />
        <Modal.Description>
          <p>
            Your inbox is getting full, would you like us to enable automatic
            archiving of old messages?
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={onClose}>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" onClick={onClose}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
export default MyModal;
