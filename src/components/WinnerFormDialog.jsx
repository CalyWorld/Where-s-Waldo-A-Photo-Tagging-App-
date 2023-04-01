import React from "react";
import { WinnerForm } from "./WinnerForm";
export const WinnerFormDialog = ({ isFound, user, handleChange, handleSubmit }) => {
    return (
        isFound && ( //render form component if all images have been found
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "80%",
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
        )
    )
}