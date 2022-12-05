import React, { useState, useEffect } from 'react';
import axios from "../api/axios"

const CURRENT_STATUS_URL = "/current";

// async/await 사용을 원한다면, 함수 외부에 `async` 키워드를 추가하세요.
function ParkingGet() {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchCars = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setCars(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(CURRENT_STATUS_URL);
        //console.log(response);
        setCars(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
  
    useEffect(() => {
      fetchCars();
    }, []);
  
    if (loading) return <div>로딩중..</div>; 
    if (error) return <div>에러가 발생했습니다</div>;
  
      // 아직 users가 받아와 지지 않았을 때는 아무것도 표시되지 않도록 해줍니다.
    if (!cars) return null;
  
    return (
        <div>
          <ul>
            {cars.map(car => (
              <li key={car.parker}>
                {car.zone} ({car.state})
              </li>
            ))}
          </ul>
              // button을 클릭하면 API를 다시 불러와줍니다.
              <button onClick={ fetchCars }>다시 불러오기</button>
        </div>
    );
}
  
  export default ParkingGet;