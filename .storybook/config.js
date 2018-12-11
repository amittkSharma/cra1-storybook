import { configure, addDecorator } from "@storybook/react";
// import { withOptions } from "@storybook/addon-options";
import { withKnobs } from "@storybook/addon-knobs";
import { withReadme } from "storybook-readme";
import * as readMe from "../README_CONTROLS.md";
import "antd/dist/antd.css";

// addDecorator(
//   withOptions({
//     name: "Component Showcase",
//     url: "#",
//     goFullScreen: false,
//     showStoriesPanel: true,
//     showAddonPanel: true,
//     showSearchBox: false,
//     addonPanelInRight: true,
//     selectedAddonPanel: undefined,
//     sortStoriesByKind: true
//   })
// );
const req = require.context("../stories", true, /\.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withKnobs);
addDecorator(withReadme(readMe));

configure(loadStories, module);
