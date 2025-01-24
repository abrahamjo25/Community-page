import React from "react";
import Posts from "./Posts";
import Latest from "../components/Latest";
import { Provider } from "./Provider";
export const Home = () => {
  return (
    <div>
      <Provider>
        <Posts />
        <Latest />
      </Provider>
    </div>
  );
};
