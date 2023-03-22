import React from "react";
import { doc } from "firebase/firestore";
import { db } from "../firebase";
import { useFetchUsers } from "../hooks/useFetchUsers";
export const Dashboard = () => {
  const docRef = doc(db, "waldo", "waldoUsers");
  const { fireStoreusers } = useFetchUsers(docRef);

  return (
    <div>
      {fireStoreusers.length > 0 ? (
        fireStoreusers.sort((a, b)=>{
          const timeA = (a.hourTimer * 3600) + (a.minuteTimer * 60) + (a.secondTimer);
          const timeB = (b.hourTimer * 3600) + (b.minuteTimer * 60) + (b.secondTimer);
          return timeA - timeB;
        }).map((data) => (
          <div key={data.id} className="flex justify-around mt-5">
            <div className="w-20 flex justify-center">{data.name}</div>
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
