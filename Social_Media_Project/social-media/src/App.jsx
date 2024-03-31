import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
import "./App.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider >
      <div className="appContainer">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        <div className="content">
          <Header className="header" />
          {selectedTab === "Home" ? <PostList></PostList> : <CreatePost />}
          <Footer className="footer" />
        </div>
      </div>
    </PostListProvider>
  );
}
export default App;
