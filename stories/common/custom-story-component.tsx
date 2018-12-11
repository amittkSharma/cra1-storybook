import * as React from "react";
import { withDocs } from "storybook-readme";

export const withCustomDocs = withDocs({
  PreviewComponent: ({ children }: any) => (
    <div
      style={{
        textAlign: "left",
        padding: "25px",
        margin: "25px 0",
        boxShadow: "0 0 40px rgba(0, 0, 0, 0.1)"
      }}
    >
      {children}
    </div>
  ),
  FooterComponent: ({ children }: any) => (
    <div
      style={{
        padding: "25px",
        background: "rgba(246, 255, 0, 0.23)",
        borderTop: "2px solid rgba(0, 0, 0, 0.1)"
      }}
    >
      {children}
    </div>
  )
});
