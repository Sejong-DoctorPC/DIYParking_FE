import styles from "./parking-slot.module.scss";

export const ParkingSlot = ({ num, isBusy, numberPlate, remove }) => {
  //if (num == 0) document.querySelector("span").innerText = "입구/출구";
  
  return (
    <>
    <div
      className={`${styles.parkingSlot} ${isBusy ? styles.busy : ""} ${num==1 || num==6 ? styles.disabled:""}`}
      onClick={() => remove(numberPlate)}
    >
      {isBusy ? numberPlate : num}
    </div>
    </>
  );
};
