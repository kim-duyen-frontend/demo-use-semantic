import React from "react";
import PropTypes from "prop-types";
import { Checkbox, Table } from "semantic-ui-react";

const TableItem = ({
  product,
  listSelect,
  handleChangeClickCheckbox,
  tickbox,
}) => {
  return (
    <>
      <Table.Row>
        <Table.Cell>
          <Checkbox
            name={product.title}
            checked={listSelect.includes(product.id) || tickbox}
            onChange={(e, data) =>
              handleChangeClickCheckbox(product.id, data.checked)
            }
          />
        </Table.Cell>
        <Table.Cell>{product.title}</Table.Cell>
        <Table.Cell>{product.price}</Table.Cell>
        <Table.Cell>{product.size}g</Table.Cell>
      </Table.Row>
    </>
  );
};
TableItem.propTypes = {
  product: PropTypes.object,
  listSelect: PropTypes.array,
  handleChangeClickCheckbox: PropTypes.func,
  tickbox: PropTypes.bool,
};
export default TableItem;
