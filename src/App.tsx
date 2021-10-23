import React from "react";
import { Home } from "pages/Home/Home";
import { Toaster } from "react-hot-toast";

export const App: React.FC = () => {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{ style: { background: "#333333", color: "#eeeeee" } }}
      />
      <Home />
    </>
  );
};
