import React, { useState, useEffect, useRef } from "react";
import { ListItem } from "./listItem";
import { store } from "../store/store";
import { Observer } from "mobx-react";

export const Home = () => {
  const [input, setInput] = useState("");
  const URL = `https://api.github.com/users/`;
  const firstRenderRef = useRef(true);
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
    } else {
      store.fetchData(URL, input);
    }
  }, [input]);

  return (
    <>
      <input onChange={(e) => inputHandler(e)} value={input} type="text" />
      <Observer>
        {() => (
          <ul className="list">
            {store.users.map((el: any) => (
              <ListItem data={el} key={el.id} />
            ))}
          </ul>
        )}
      </Observer>
    </>
  );
};
