import React from "react";
import { Flex } from "../components";
import { Text } from "../components";

const ChildComp = () => {
  return <Text> Hello from flex </Text>;
};
export const primary = {
  args: {
    alignItems: "start",
    justifyContent: "start",
    direction: "start",
    children: <ChildComp />,
  },
};

export default {
  title: "Flex",
  component: Flex,
  parameter: {
    layour: "centered",
  },
};
