import { observable } from "mobx";

export const store = observable({
  users: [],
  userData: {},

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
});
