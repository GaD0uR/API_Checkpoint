import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import UserCard from "./Components/UserCard";
import UsersInfo from "./Components/UsersInfo";
import "./App.css";

class App extends React.Component {
  state = {
    users: [],
    posts: [],
    comments: [],
  };

  getAllUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => this.setState({ users: res.data }))
      .catch((error) => {
        console.error(error);
        alert("Can not fetch users list");
      });
  };

  componentDidMount = () => {
    this.getAllUsers();
    this.getPostsById();
  };

  getPostsById = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => this.setState({ posts: res.data }))
      .catch((error) => {
        console.error(error);
        alert("Can not fetch user's posts");
      });
  };

  render() {
    return (
      <div>
        <Navbar />

        <div className="App">
          <Route
            exact
            path="/"
            render={() =>
              this.state.users.map((el, i) => <UserCard key={i} user={el} />)
            }
          />
        </div>

        {this.state.users.map((user) => (
          <Route
            exact
            path={`/${user.id}`}
            render={() => (
              <UsersInfo
                key={user.id}
                user={user}
                posts={this.state.posts.filter(
                  (post) => post.userId === user.id
                )}
              />
            )}
          />
        ))}
      </div>
    );
  }
}

export default App;
