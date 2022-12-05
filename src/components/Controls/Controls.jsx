import "./Controls.css";
import generateNumberPlate from "../../utils/number-plates-generator";

export const Controls = ({ add }) => {
  return (
    <div className="controls">
      <button class="w-btn w-btn-red" type="button" onClick={() => add(generateNumberPlate())}>예약하기</button>
    </div>
  );
};
