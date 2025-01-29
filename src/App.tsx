import React from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import { routes } from "./routes/Routes";

const App: React.FC = () => {
  const _routes = useRoutes(routes());
  return <> {_routes}</>;
  // return (
  //   // <Routes>
  //   //   <Route path="/" element={<LoginPage />} />
  //   //   {/* <Route path="/home" element={<HomePage />} /> */}
  //   // </Routes>

  // );
};

export default App;
