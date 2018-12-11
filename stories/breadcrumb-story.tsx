import * as React from "react";
import { MemoryRouter } from "react-router";
import { object } from "@storybook/addon-knobs";
import { getStory, StoryInfo } from "./common";
import { TypeBreadcrumb } from "./imports";

const storyInfo: StoryInfo = { label: "Breadcrumbs", readMeKey: "breadcrumbs" };
const defaultValue = [
  { id: "id1", label: "Star wars" },
  { id: "id2", label: "Episode 1" }
];

getStory(storyInfo)
  .addDecorator((story: any) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add(
    "introduction",
    () => <TypeBreadcrumb classes={object("classes", defaultValue)} />,
    {
      info: `Displaying the naviagtion path to the current node`,
      notes: `To Display bread crumbs in order to show path`
    }
  );
