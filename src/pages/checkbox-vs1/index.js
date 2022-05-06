import React, { useState } from "react";
import { Checkbox, Table } from "semantic-ui-react";
import TableItem from "../../components/TableItem";

const Demo = () => {
  const data = [
    {
      id: 1,
      title: "Apple",
      price: 200,
      size: 2,
    },
    {
      id: 2,
      title: "Orange",
      price: 310,
      size: 3,
    },
  ];
  const [listSelect, setListSelect] = useState([]);
  const [tickbox, setTickbox] = useState(false);

  const handleChangeClickCheckbox = (productId, checked) => {
    if (checked) {
      setListSelect([...listSelect, productId]);
    } else {
      let filterChecked = listSelect.filter((_id) => _id !== productId);
      setListSelect(filterChecked);
    }
  };

  const handleChangeAllSelect = (checked, name) => {
    setTickbox(checked);
    let selectAll;
    if (checked && name === "all") {
      selectAll = data?.map((item) => item);
    } else {
      selectAll = [];
    }
    setListSelect(selectAll);
  };
  console.log("xem: ", listSelect);
  return (
    <Table unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            <Checkbox
              name="all"
              checked={listSelect.length === data.length}
              onChange={(e, data) =>
                handleChangeAllSelect(data.checked, data.name)
              }
            />
          </Table.HeaderCell>
          <Table.HeaderCell>Food</Table.HeaderCell>
          <Table.HeaderCell>Calories</Table.HeaderCell>
          <Table.HeaderCell>Protein</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map((item) => (
          <TableItem
            product={item}
            key={item.id}
            listSelect={listSelect}
            tickbox={tickbox}
            handleChangeClickCheckbox={handleChangeClickCheckbox}
          />
        ))}
      </Table.Body>
    </Table>
  );
};

export default Demo;
