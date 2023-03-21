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
        fireStoreusers.map((data) => (
          <div key={data.id} className="flex justify-around mt-5">
            <div className="w-20">{data.name}</div>
            <div>
              {data.hourTimer}:{data.minuteTimer}:{data.secondTimer}
            </div>
          </div>
        ))
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};
