export interface IUserInfo {
  login: string;
  id: string;
  node_id: string;
  avatar_url: string;
  name: string;
  location: string;
  email: string;
  bio: string;
  followers: number;
  following: number;
  created_at: string;
}

export interface IUserInfo {
  avatar_url: string;
  name: string;
  bio: string;
  location: string;
  email: string;
  created_at: string;
  followers: number;
  following: number;
}

export interface IUserRepos {
  id: string;
  full_name: string;
}

export interface Ig {
  id: number;
  full_name: string;
  owner: {};
}
