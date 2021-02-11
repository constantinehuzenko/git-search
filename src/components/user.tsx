import { store } from "../store/store";
import { useEffect } from "react";
import { Observer } from "mobx-react";
import { UserInfo } from "./userInfo";
import { UserRepos } from "./userRepos";

interface IMAtchProp {
  match: { params: { login: string } };
}

export const UserPage = (props: IMAtchProp) => {
  const { login } = props.match.params;

  useEffect(() => {
    store.fetchUserPage(login);
  }, [login]);

  return (
    <Observer>
      {() => (
        <>
          {store.userPage.mainInfo[0] === undefined ? (
            <h4>Loading user info...</h4>
          ) : (
            <UserInfo data={store.userPage.mainInfo[0]} />
          )}

          <ul>
            {store.userPage.repos[0] === undefined ? (
              <h4>Loading user repos...</h4>
            ) : (
              <UserRepos data={store.userPage.repos[0]} />
            )}
          </ul>
        </>
      )}
    </Observer>
  );
};
