import React from "react";
import { Link } from "react-router-dom";

export default function Section({
  withContainer,
  children,
  title,
  breadcrumbs = [],
}) {
  return (
    <section
      className={`py-6 space-y-6 ${withContainer ? "custom-container" : ""}`}
    >
      <div className="space-y-2">
        {title && <h2 className="font-medium lg:text-2xl">{title}</h2>}
        {breadcrumbs.length > 0 && (
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {breadcrumbs.map((breadcrumb, index) =>
                breadcrumb.link ? (
                  <li key={index}>
                    <Link to={breadcrumb.link}>{breadcrumb.name}</Link>
                  </li>
                ) : (
                  <li key={index}>{breadcrumb.name}</li>
                )
              )}
            </ul>
          </div>
        )}
      </div>

      {children}
    </section>
  );
}
