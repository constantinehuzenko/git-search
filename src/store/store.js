import { observable } from "mobx";

export const store = observable({
  users: [],
  userData: {},
  userRepos: {},

  fetchData: function (url, endPoint) {
    return new Promise(() => {
      fetch(url + endPoint)
        .then((data) => data.json())
        .then((data) => this.uploadData(data))
        .catch((err) => this.fetchError(err));
    });
  },

  uploadData: function (obj) {
    if (obj.message === "Not Found") return;
    this.users.push(obj);
  },

  fetchError: (reason) => {
    console.log(reason);
  },

  getUserPage: function (id) {
    const newData = this.users.filter((el) => el.id === id);
    this.userData = newData[0];
  },

  fetchRepos: function(url) {
    return new Promise(() => {
      fetch(url)
        .then((data) => data.json())
        .then((data) => this.uploadRepos(data))
        .catch((err) => this.fetchError(err));
    })
  },

  uploadRepos: function (obj) {
    if (obj.message === "Not Found") return;
    this.userRepos = obj;
  },


});
