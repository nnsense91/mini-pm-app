import { useState } from "react";
import { useGetFakePostsQuery } from "./api/fakePostsApi";

const App = () => {
  const [postCount, setPostCount] = useState<string>("");
  const { data = [], isLoading } = useGetFakePostsQuery(postCount);

  return (
    <div className="App">
      APP
      {isLoading && <h3>Loading.......</h3>}
      <select value={postCount} onChange={(e) => setPostCount(e.target.value)}>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="">all</option>
      </select>
      {data.map((item) => (
        <div key={item.id}>
          <div>{item.id}</div>
          <div>{item.title}</div>
          <div>{item.body}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
