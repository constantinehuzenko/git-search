import { Link } from "react-router-dom";

export const ListItem = (props: any) => {
  const { data } = props;
  return (
    <>
      <Link to={`users/${data.login}`}>
        <li className="list__item">
          <img className="item__item-img" src={data.avatar_url} alt="" />
          <span className="item__item-name">{data.login}</span>
        </li>
      </Link>
    </>
  );
};
