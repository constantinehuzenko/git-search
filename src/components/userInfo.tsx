import { IUserInfo } from "./types";

export const UserInfo = (props: { data: IUserInfo }) => {
  const { avatar_url, name, bio, location, email, created_at, followers, following } = props.data;
  return (
    <>
      <img src={avatar_url} alt="" />
      <h2>{name}</h2>
      <h3>bio: {bio}</h3>
      <ul>
        <li>location: {location}</li>
        <li>email: {email}</li>
        <li>created_at: {created_at}</li>
        <li>followers: {followers}</li>
        <li>following: {following}</li>
      </ul>
      <ul></ul>
    </>
  );
};
