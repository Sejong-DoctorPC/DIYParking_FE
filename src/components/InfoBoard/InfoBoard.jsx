import "./InfoBoard.css";
import ModeNavTab from "./ModeNavBar";

export const InfoBoard = ({ availableSlotsCount }) => {

  return (
    <div>
      <h3>🅿️ 오늘의 주차장 모드를 선택해보세요</h3>
      <div>
        <ModeNavTab></ModeNavTab>
        <div className="left">
          남은 자리:  <span className={availableSlotsCount >=5 ? "normal" : "busy"}>
            {availableSlotsCount}</span><br/> <span id="disabled">장애인 주차구역: 2</span></div> 
      </div>
    </div>
  );
};
