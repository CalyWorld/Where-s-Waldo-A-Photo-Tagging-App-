import React, { useEffect, useRef, useState } from "react";
import waldo from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/waldo.jpeg";
import { WinnerForm } from "./WinnerForm";
import { isFoundTrue } from "./isFound";
import { useTimer } from "./timer";
export const Waldo = ({
  openModal,
  setModal,
  data,
  setFirestoreData,
  Dropdown,
  CheckCoord,
  setFound,
  setShowMatchFound,
}) => {
  const {seconds, minutes, hours, setIsRunning} = useTimer();
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [user, setName] = useState({
    name: "",
  });

  console.log(hours, minutes,seconds);
  const [winner, setWinner] = useState([]);
  const imgRef = useRef(null);

  //checks if all found property are found or not
  const[isFound, setIsFound] = useState(isFoundTrue(data));

  //renders if all found property is true
  const isGameOver = (event) => {
    if (isFound === false) {
      getCoords(event);
    } else  {
      console.log("Game Won");
    }
  };

  useEffect(()=>{
    setIsFound(isFoundTrue(data));
    if(isFoundTrue(data)){
      setIsRunning(false);
    }
  },[data, setIsRunning]);

  //get coordinates in percentage
  const getCoords = (event) => {
    if (event) {
      setModal(true);
      const { clientWidth, clientHeight } = imgRef.current;
      const { clientX, clientY } = event;
      const xPercent = (clientX / clientWidth) * 100;
      const yPercent = (clientY / clientHeight) * 100;
      setClickPosition({ x: xPercent, y: yPercent });
    }
  };

  // adjust the coordinates clicked based on window resize
  useEffect(() => {
    const handleResize = () => {
      const { clientWidth, clientHeight } = imgRef.current;
      const { x, y } = clickPosition;
      const newWidthPercent = (x / 100) * clientWidth;
      const newHeightPercent = (y / 100) * clientHeight;
      setClickPosition({
        x: (newWidthPercent / clientWidth) * 100,
        y: (newHeightPercent / clientHeight) * 100,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [clickPosition]);

  const handleChange = (e) => {
    e.preventDefault();
    setName({ ...user, [e.target.name]: e.target.value });
  };

  //debug later

  const handleSubmit = (e) => {
    e.preventDefault();
    setWinner([...winner, user]);
    setFound(false);
  };
  // console.log(clickPosition.x, clickPosition.y);
  // console.log(winner);
  

  return (
    <div className="flex flex-row justify-center items-center relative">
      <div className="relative">
        <img
          src={waldo}
          ref={imgRef}
          alt="background"
          onClick={(e) => {
            isGameOver(e); // call game() function with event object as argument
          }}
        />
        {isFound && ( //render form component if all images have been found
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60%",
              height: "50%",
              background: "white",
            }}
          >
            <div style={{ position: "relative" }}>
              <WinnerForm
                user={user}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        )}
      </div>
      {openModal && (
        <Dropdown
          data={data}
          setModal={setModal}
          clickPosition={clickPosition}
          CheckCoord={CheckCoord}
          setFirestoreData={setFirestoreData}
          setFound={setFound}
          setShowMatchFound={setShowMatchFound}
        />
      )}
    </div>
  );
};
