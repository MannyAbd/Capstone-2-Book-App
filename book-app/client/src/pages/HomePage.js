import React from "react";

/** Homepage of site.
 *
 * Shows welcome message or login/register buttons.
 *
 * Routed at /
 *
 * Routes -> Homepage
 */

const HomePage = () => {
  return (
      <div className="Homepage">
        <div>
          <h1>Home Page</h1>
          <p className="lead">Find books</p>

        </div>
      </div>
  );
}

export default HomePage;
