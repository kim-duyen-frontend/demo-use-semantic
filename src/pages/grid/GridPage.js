import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";

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
    </Grid>
  );
}
function TwoColumn() {
  return (
    <Segment>
      <Grid columns={2} stackable stretched>
        <Grid.Column>
          <Segment>
            <Header>
              <Header.Content>Column 1</Header.Content>
            </Header>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Header>
              <Header.Content>Column 2</Header.Content>
            </Header>
          </Segment>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}
const GridPage = () => {
  return (
    <>
      <h2>Dạng 1</h2>
      {TwoColumEqual()}
      <h2>Dạng 2</h2>
      {TwoColumNotEqual()}
      <h2>Dạng 3</h2>
      {TwoColumn()}
    </>
  );
};

export default GridPage;
