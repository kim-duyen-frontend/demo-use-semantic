import React from "react";
import { Grid, Card, Form, Button, Header, Icon } from "semantic-ui-react";
import "./style.scss";

const RegisterPage = () => {
  return (
    <div>
      <Grid centered>
        <Grid.Column className="form-column">
          <Header as="h2" icon textAlign="center">
            <Icon name="users" circular />
            <Header.Content>Sign Up</Header.Content>
          </Header>
          <Card fluid>
          <Card.Content>
          <Form unstackable>
            <Form.Group widths={2}>
              <Form.Input label="First Name" placeholder="First Name" />
              <Form.Input label="Last Name" placeholder="Last Name" />
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Input label="Country" placeholder="Country" />
              <Form.Input label="Phone Number" placeholder="Phone Number" />
            </Form.Group>
            <Button fluid primary type="submit">
              Create Account
            </Button>
          </Form>
          </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default RegisterPage;
