import { IUserRepos } from "./types";

export const UserRepos = (props: { data: IUserRepos[] }) => {
  return (
    <>
      <h2>User repos</h2>
      {props.data.map((el: IUserRepos) => (
        <li key={el.id}>{el.full_name}</li>
      ))}
    </>
  );
};
