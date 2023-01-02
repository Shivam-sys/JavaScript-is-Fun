// Implement the SocialNetwork class here
class SocialNetwork {
  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    // let user = { id: ++this.currentID, name }; // !or create a new User class.
    let id = ++this.currentID;
    this.users[id] = { id, name };
    this.follows[id] = new Set();
    return id;
  }

  getUser(userID) {
    return this.users[userID] ? this.users[userID] : null;
  }

  follow(userID1, userID2) {
    if (this.getUser(userID1) && this.getUser(userID2)) {
      this.follows[userID1].add(userID2);
    }
    return this.follows[userID1].has(userID2) ? true : false;
  }

  getFollows(userID) {
    if (this.getUser(userID)) {
      return this.follows[userID];
    }
  }

  getFollowers(userID) {
    let followers = new Set();
    let users = Object.keys(this.follows);
    users.forEach((u) => {
      for (const i of this.getFollows(u)) {
        if (i == userID) {
          followers.add(u);
        }
      }
    });
    return followers;
  }

  getRecommendedFollows(userID, degrees) {
    // TODO: solved till degree = 1.
    let rec = [];
    if (degrees >= 1) {
      let follows = this.getFollows(userID);
      for (let f of follows) {
        let followsOfFollows = this.getFollows(f);
        for (let i of followsOfFollows) {
          if (!rec.includes(i)) rec.push(i);
        }
      }
    }
    return rec;
  }
}

module.exports = SocialNetwork;

// TODO: MORE GRAPH PROBLEMS TO DO.
