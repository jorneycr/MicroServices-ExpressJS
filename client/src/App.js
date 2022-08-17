import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  return (
    <div className="container">
      <h2>Create Post</h2>
      <PostCreate />
      <hr />
      <h1>Posts List</h1>
      <PostList />
    </div>
  );
}

export default App;
