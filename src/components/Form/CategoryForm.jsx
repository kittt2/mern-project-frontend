import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="category-form w-100 ">
        <div className="mb-3">
          <input
            type="text"
            className="form-control form-control-lg border-0 shadow-sm rounded-pill"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark rounded-pill shadow-sm px-4">
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
