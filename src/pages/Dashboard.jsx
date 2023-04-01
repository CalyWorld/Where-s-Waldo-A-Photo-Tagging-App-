import React from "react";
import { useFetchUsers } from "../hooks/useFetchUsers";
export const Dashboard = () => {
  const { fireStoreusers } = useFetchUsers();
  const icons = [
    "https://cdn-icons-png.flaticon.com/512/2583/2583381.png",
    "https://cdn-icons-png.flaticon.com/512/2583/2583350.png",
    "https://cdn-icons-png.flaticon.com/512/2583/2583448.png",
  ];
 
  return (
    <div>
      <div className= "flex justify-center"><h2>Game Winners so far, try to beat the top score</h2></div>
      {fireStoreusers.length > 0 ? (
        fireStoreusers
          .sort((a, b) => {
            const timeA =
              a.hourTimer * 3600 + a.minuteTimer * 60 + a.secondTimer;
            const timeB =
              b.hourTimer * 3600 + b.minuteTimer * 60 + b.secondTimer;
            return timeA - timeB;
          })
          .map((data, index) => (
            <div key={data.id} className="flex justify-around mt-5 w-full">
              <div className="flex gap-2 items-center">
                <div className="w-9">
                  {index < icons.length && (
                    <img
                      src={`${icons[index]}`}
                      alt="rank-icon"
                      className="w-5 h-5"
                    />
                  )}
                </div>
                <div>{data.name}</div>
              </div>
              <div>         
                {data.hourTimer}h:{data.minuteTimer}m:{data.secondTimer}s
              </div>
            </div>
          ))
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};
