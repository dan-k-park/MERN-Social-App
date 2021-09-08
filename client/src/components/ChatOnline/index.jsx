import axios from "axios";
import { useState, useEffect } from "react";
import "./styles.css";
const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/api/users/friends/" + currentId);
      setFriends(res.data);
    };
    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(
      friends.filter((friend) => onlineUsers.includes(friend._id))
    );
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `/api/conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="chatOnline">
      {onlineFriends.map((onFriend) => (
        <div className="chatOnlineFriend" onClick={() => handleClick(onFriend)}>
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={
                onFriend.profilePicture
                  ? publicFolder + onFriend.profilePicture
                  : publicFolder + "/person/noAvatar.png"
              }
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{onFriend.username}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatOnline;
