import { Users } from "../../dummyData";
import Online from "../Online";
import "./styles.css";
const Rightbar = ({ user }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>John</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={`${publicFolder}/person/1.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Name Last</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${publicFolder}/person/1.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Name Last</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${publicFolder}/person/1.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Name Last</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${publicFolder}/person/1.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Name Last</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${publicFolder}/person/1.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Name Last</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${publicFolder}/person/1.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Name Last</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
