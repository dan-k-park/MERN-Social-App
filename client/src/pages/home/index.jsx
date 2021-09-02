import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import Rightbar from "../../components/Rightbar";
import Feed from "../../components/Feed";
import "./styles.css";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};
export default Home;
