import React from "react";
import { Table } from "semantic-ui-react";

const TablePage = () => {
  return (
    <div>
      <Table unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="th">Food</Table.HeaderCell>
            <Table.HeaderCell className="th">Calories</Table.HeaderCell>
            <Table.HeaderCell className="th">Protein</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Apples</Table.Cell>
            <Table.Cell>200</Table.Cell>
            <Table.Cell>0g</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Orange</Table.Cell>
            <Table.Cell>310</Table.Cell>
            <Table.Cell>0g</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default TablePage;
