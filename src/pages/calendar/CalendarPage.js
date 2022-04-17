import React, { useState } from "react";
import { DateInput } from "semantic-ui-calendar-react-17";
import { Segment } from "semantic-ui-react";

const CalendarPage = () => {
  const [date, setDate] = useState("");

  const handleChange = (event, { name, value }) => {
    console.log(value);
    setDate(value);
  };
  return (
    <div>
      <Segment>
        <p>{date}</p>
      </Segment>
      <DateInput
        name="date"
        placeholder="Date"
        value={date}
        iconPosition="left"
        onChange={handleChange}
      />
    </div>
  );
};

export default CalendarPage;
