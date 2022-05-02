import React, { useState } from "react";
import MyModal from "../../components/MyModal";
import { Button } from "semantic-ui-react";

const HomePage = () => {
  const [createAccountModal, setCreateAccountModal] = useState(false);
  const handleCloseCreateAccountModal = () => {
    setCreateAccountModal(false);
  };
  const handleOpenCreateAccountModal = () => {
    setCreateAccountModal(true);
  };
  return (
    <div>
      <Button onClick={handleOpenCreateAccountModal}>
        Open Modal
      </Button>
      <MyModal
        open={createAccountModal}
        onClose={handleCloseCreateAccountModal}
      />
    </div>
  );
};

export default HomePage;
