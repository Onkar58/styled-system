import React from "react";
import { Link, Text } from "../components";

const ChildComp = () => {
  return <Text>Google</Text>;
};

export const primary = {
  args: {
    href: "https://www.google.com",
    css: { color: "#0f0", fontSize: "30px" },
    children: <ChildComp />,
  },
};

export default {
  title: "Link",
  component: Link,
  parameter: {
    layour: "centered",
  },
};
