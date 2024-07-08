import React from "react";
import { Box, Flex, Text } from "../components";

const ChildComp = () => {
  return (
    <Flex>
      <Text>This is Box Component </Text>
    </Flex>
  );
};

export const primary = {
  args: {
    position: "absolute",
    css: { top: "100px", left: "200px" },
    children: <ChildComp />,
  },
};
export default {
  title: "Box",
  component: Box,
  parameter: {
    layour: "centered",
  },
};
