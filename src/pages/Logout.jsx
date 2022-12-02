import axios from "axios";

function Logout(props) {
  const handleLogout = () => {
    // 로그아웃을 위한 메소드 제작
    axios
<<<<<<< HEAD
      .get("https://sejong-uspace.herokuapp.com/users/logout", null, {
=======
      .get("https://sejong-uspace.herokuapp.com/user/logout", null, {
>>>>>>> 6ea564552f6b12c6622bb24ef307f1f5228a0861
        "Content-Type": "application/json",
        //withCredentials: true,
      })
      .then(() => props.logoutHandler()) // 로그인 상태 변경
      .catch((e) => alert(e));
  };

  return (
    <div>
      <div className="mypageContainer">
        <div>
          <span className="title"> Mypage </span>{" "}
          <button className="logoutBtn" onClick={handleLogout}>
            logout{" "}
          </button>{" "}
        </div>{" "}
        <hr />
        <br />
      </div>{" "}
    </div>
  );
}

export default Logout;
