import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AlbumList } from "./components/Album/AlbumList";
import Navbar from "./components/Navbar";
import { PostsList } from "./components/Post/PostList";
import { TodosList } from "./components/ToDos/TodoList";
import { Home } from "./components/Home";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts">
          <PostsList />
        </Route>
        <Route path="/albums">
          <AlbumList />
        </Route>
        <Route path="/todos">
          <TodosList />
        </Route>
      </Switch>
    </Router>
  );
}
