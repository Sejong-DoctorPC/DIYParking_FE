import axios from '../../api/axios';
const LOGOUT_URL = '/users/logout';

function Logout(props) {
  const handleLogout = () => {
    // 로그아웃을 위한 메소드 제작
    axios
      .get(LOGOUT_URL, null, {
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
