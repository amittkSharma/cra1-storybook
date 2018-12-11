import * as React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

interface Ref {
  id: string;
  label: string;
}

export interface TypeBreadcrumbProps {
  classes: Ref[];
}

export const TypeBreadcrumb = ({ classes }: TypeBreadcrumbProps) => (
  <Breadcrumb className="type-breadcrumb" separator="/">
    {classes.map(cls => (
      <Breadcrumb.Item key={cls.id}>
        <Link className="type-link" to={`/something/${cls.id}`}>
          {cls.label}
        </Link>
      </Breadcrumb.Item>
    ))}
  </Breadcrumb>
);
