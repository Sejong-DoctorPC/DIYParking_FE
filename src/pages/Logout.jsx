import axios from "axios";

function Logout(props) {
  const handleLogout = () => {
    // 로그아웃을 위한 메소드 제작
    axios
      .post("https://sejong-uspace.herokuapp.com/users/logout", null, {
        "Content-Type": "application/json",
        //withCredentials: true,
      })
      .then(() => props.logoutHandler()) // 로그인 상태 변경
      .catch((e) => alert(e));
  };

  return  (
    <div>
      <div className="mypageContainer">
        <div>
          <span className="title"> Mypage </span>{" "}
          <button className="logoutBtn" onClick={handleLogout}>
            logout{" "}
          </button>{" "}
        </div>{" "}
        <hr />
        <div>
          안녕하세요. <span className="name"> {props.userData.userId} </span>님!
          로그인이 완료되었습니다.{" "}
        </div>{" "}
        <br />
        <div className="item">
          {" "}
          나의 유저 네임: {props.userData.userId}{" "}
        </div>{" "}
        <div className="item"> 나의 이메일 주소: {props.userData.email} </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Logout;
