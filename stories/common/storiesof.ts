import { storiesOf, Story } from "@storybook/react";
import { StoryInfo } from "./interfaces";
import { Options, withInfo } from "@storybook/addon-info";

const withInfoOptions: Options = {
  header: false,
  inline: true,
  source: true
};

const DEFAULT_SECTION = "Components";
export function getStoryHierarchy(
  label: string,
  sectionName?: string,
  subSectionName?: string
) {
  return sectionName
    ? subSectionName
      ? `${sectionName}/${subSectionName}/${label}`
      : `${sectionName}/${label}`
    : subSectionName
    ? `${DEFAULT_SECTION}/${subSectionName}/${label}`
    : `${DEFAULT_SECTION}/${label}`;
}

export function getStory(p: StoryInfo): Story {
  return storiesOf<Story>(
    getStoryHierarchy(p.label, p.sectionName, p.subSectionName),
    module
  ).addDecorator(withInfo(withInfoOptions));
}
