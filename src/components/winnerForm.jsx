import React from "react";

export const WinnerForm = ({ user, handleChange, handleSubmit }) => {
  return (
    <div className="p-3">
      <div id="title-container" className="flex justify-center">
        <h1>Record your score</h1>
      </div>
      <form className="flex justify-center items-center gap-5">
        <label className="flex gap-3">
          Enter Name:
          <input
            type="text"
            placeholder="Enter Name.."
            name="name"
            onChange={handleChange}
            value={user.name}
            className="text-black"
          ></input>
        </label>
        <button type="button" onClick={handleSubmit}>Enter</button>
      </form>
    </div>
  );
};
