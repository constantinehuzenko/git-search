import { observable } from "mobx";

export const store = observable({
  users: [],

  userPage: {
    mainInfo: [],
    repos: [],
  },

  fetchData: function (url, endPoint) {
    return new Promise(() => {
      fetch(url + endPoint)
        .then((data) => data.json())
        .then((data) => this.uploadData(data))
        .catch((err) => this.fetchError(err));
    });
  },

  fetchUserPage: function (param) {
    const userUrl = new Promise(() => {
      fetch(`https://api.github.com/users/${param}`)
        .then((data) => data.json())
        .then((data) => this.uploadUserPageData(data, 1))
        .catch((err) => this.fetchError(err));
    });
    const userReposUrl = new Promise(() => {
      fetch(`https://api.github.com/users/${param}/repos`)
        .then((data) => data.json())
        .then((data) => this.uploadUserPageData(data, 2))
        .catch((err) => this.fetchError(err));
    });

    Promise.all([userUrl, userReposUrl]);
  },

  uploadData: function (obj) {
    if (obj.message === "Not Found") return;
    this.users.push(obj);
  },

  uploadUserPageData: function (obj, path) {
    if (obj.message === "Not Found") return;
    if (path === 1) {
      this.userPage.mainInfo = [];
      this.userPage.mainInfo.push(obj);
    } else if (path === 2) {
      this.userPage.repos = [];
      this.userPage.repos.push(obj);
    }
  },

  fetchError: (reason) => {
    console.log(reason);
  },
});
