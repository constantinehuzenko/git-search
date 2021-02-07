import { store } from "../store/store";
import { useEffect } from "react";
import { Observer } from "mobx-react";

export const UserPage = (props) => {
  const userID = Number(props.match.params.id);

  useEffect(() => {
    store.getUserPage(userID);
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
        </>
      )}
    </Observer>
  );
};
