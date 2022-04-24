import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Icon,
  Message,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./style.scss";

const FormPage = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const handleChangeField = (event) => {
    loginInfo[event.target.name] = event.target.value;
    setLoginInfo({ ...loginInfo });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ ...loginInfo });
  };

  return (
    <Grid centered verticalAlign="middle" className="grid">
      <Grid.Column className="grid-column">
        <Header as="h2" icon color="violet" textAlign="center">
          <Icon name="code branch" color="violet" />
          Đăng nhập
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              name="email"
              type="email"
              placeholder="Email"
              label={"Email"}
              fluid
              icon="mail"
              iconPosition="left"
              onChange={handleChangeField}
              value={loginInfo.email}
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="Password"
              label={"Password"}
              fluid
              icon="lock"
              iconPosition="left"
              onChange={handleChangeField}
              value={loginInfo.password}
            />
            <Button fluid size="large" color="violet">
              Submit
            </Button>
          </Segment>
        </Form>
        <Message error>
          <h3>Error</h3>
          Error message
        </Message>
        <Message>
          Nếu không có tài khoản <Link to="/register">Đăng ký</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default FormPage;
