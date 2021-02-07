import { store } from "../store/store";
import { useEffect, useState } from "react";
import { Observer } from "mobx-react";

export const UserPage = (props) => {
  const userID = Number(props.match.params.id);
  const userLogin = store.userData.login
  const URL = `https://api.github.com/users/${userLogin}/repos`

  useEffect(() => {
    store.getUserPage(userID);
    store.fetchRepos(URL);

    // console.log(store.userRepos[0])
  }, [userID]);

  return (
    <Observer>
      {() => (
        <>
          <img src={store.userData.avatar_url} alt="" />
          <h2>{store.userData.name}</h2>
          <h3>bio: {store.userData.bio}</h3>
          <ul>
            <li>location: {store.userData.location}</li>
            <li>email: {store.userData.email}</li>
            <li>created_at: {store.userData.created_at}</li>
            <li>followers: {store.userData.followers}</li>
            <li>following: {store.userData.following}</li>
          </ul>
          <ul>
            {store.userRepos.map(el => (
              <li key={el}>{el.full_name}</li>
            ))}
          </ul>
        </>
      )}
    </Observer>
  );
};
