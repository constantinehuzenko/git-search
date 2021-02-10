import { store } from "../store/store";
import { useEffect, useState } from "react";
import { Observer } from "mobx-react";
import { UserInfo } from "./userInfo";

export const UserPage = (props) => {
  const { login } = props.match.params;
  useEffect(() => {
    store.fetchUserPage(login);
  }, [login]);

  setTimeout(() => {
    console.log(store.userPage.mainInfo[0].login);
  }, 5000);
  return (
    <Observer>
      {() => (
        <>
          {store.userPage.mainInfo[0] === undefined ? (
            <h4>Loading data...</h4>
          ) : (
            <UserInfo data={store.userPage.mainInfo[0]} />
          )}
        </>
      )}
    </Observer>
  );
};
