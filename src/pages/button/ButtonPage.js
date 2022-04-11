import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ButtonPage = () => {
  return (
    <div>
      <Button>Button 1</Button>
      <Button primary>Button 2</Button>
      <Button secondary>Button 3</Button>
      <Button color="orange" as={Link} to="/">
        Back to Home
      </Button>
      <Button circular color="facebook" icon="facebook" />
      <Button circular color="twitter" icon="twitter" />
      <Button circular color="linkedin" icon="linkedin" />
      <Button circular color="google plus" icon="google plus" />
      <div>
        <Button icon="file" />
        <Button primary basic icon>
          <Icon name="add"></Icon> Button 4
        </Button>
        <Button color="red" basic icon>
          <Icon name="log out"></Icon> Button 5
        </Button>
      </div>
      <div>
        <Button size="mini">Mini</Button>
        <Button size="tiny">Tiny</Button>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
        <Button size="big">Big</Button>
        <Button size="huge">Huge</Button>
        <Button size="massive">Massive</Button>
      </div>
      <div>
        <Button color="facebook">
          <Icon name="facebook" /> Facebook
        </Button>
        <Button color="twitter">
          <Icon name="twitter" /> Twitter
        </Button>
        <Button color="google plus">
          <Icon name="google plus" /> Google Plus
        </Button>
        <Button color="vk">
          <Icon name="vk" /> VK
        </Button>
        <Button color="linkedin">
          <Icon name="linkedin" /> LinkedIn
        </Button>
        <Button color="instagram">
          <Icon name="instagram" /> Instagram
        </Button>
        <Button color="youtube">
          <Icon name="youtube" /> YouTube
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
