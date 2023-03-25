import React from "react";

export const WaldoDropDown = ({
    openModal,
    fireStoredata,
    setModal,
    clickPosition,
    CheckCoord,
    setFirestoreData,
    setFound,
    setShowMatchFound,
    Dropdown
}) => {
    return (
        <>
            {openModal && (
                <Dropdown
                    fireStoredata={fireStoredata}
                    setModal={setModal}
                    clickPosition={clickPosition}
                    CheckCoord={CheckCoord}
                    setFirestoreData={setFirestoreData}
                    setFound={setFound}
                    setShowMatchFound={setShowMatchFound}
                />
            )}
        </>
    );
};
