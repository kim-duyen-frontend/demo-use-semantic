import React from "react";
import { Divider, Grid, Header, Segment } from "semantic-ui-react";

function TwoColumEqual() {
  return (
    <Grid stackable stretched>
      <Grid.Column width="8">
        <Segment>
          <Header>
            <Header.Content>Column 1</Header.Content>
          </Header>
        </Segment>
      </Grid.Column>
      <Grid.Column width="8">
        <Segment>
          <Header>
            <Header.Content>Column 2</Header.Content>
          </Header>
        </Segment>
      </Grid.Column>
      <Divider></Divider>
    </Grid>
  );
}
function TwoColumNotEqual() {
  return (
    <Grid stackable stretched>
      <Grid.Column width="4">
        <Segment>
          <Header>
            <Header.Content>Column 1</Header.Content>
          </Header>
        </Segment>
      </Grid.Column>
      <Grid.Column width="12">
        <Segment>
          <Header>
            <Header.Content>Column 2</Header.Content>
          </Header>
        </Segment>
      </Grid.Column>
      <Divider></Divider>
    </Grid>
  );
}
const GridPage = () => {
  return (
    <>
      {TwoColumEqual()}
      {TwoColumNotEqual()}
    </>
  );
};

export default GridPage;
