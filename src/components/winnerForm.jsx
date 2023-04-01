import React from "react";

export const WinnerForm = ({ user, handleChange, handleSubmit }) => {
  return (
    <div className="">
      <div id="title-container" className="flex justify-center">
        <h1>Record your score</h1>
      </div>
      <form className="flex justify-center items-center mt-10">
        <label className="flex gap-3">
          Name:
          <input
            type="text"
            placeholder="Enter Name.."
            name="name"
            onChange={handleChange}
            value={user.name}
            className="text-black"
          ></input>
        </label>
        <button className="bg-red-500 hover:bg-red-600 text-white" type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};
