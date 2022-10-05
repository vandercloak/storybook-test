import React from "react";

import Table from "./table";

export default {
  title: "Example/Table",
  component: Table,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Primary = () => <Table />;
