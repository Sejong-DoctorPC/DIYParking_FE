import axios from "axios";

function Logout(props) {
  const handleLogout = () => {
    // 로그아웃을 위한 메소드 제작
    axios
      .post("https://sejong-uspace.herokuapp.com/user/logout", null, {
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
