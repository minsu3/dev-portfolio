import React from "react";
import Header from "../src/components/Header";
import routes from "../src/routes";

const App = () => {
  return (
    <div>
      <Header />
      {routes}
    </div>
  );
};

export default App;
