import React from 'react';

const SearchBar = (): JSX.Element => {
  return (
    <div className="flex flex-wrap w-1/3 mt-0 mb-8 h-10 m-auto">
      <div className="flex flex-col w-1/3 my-auto text-center border h-full">
        <select className="ml-4 h-full text-lg">
          <option value="course_cood">Coordinator</option>
          <option value="course_name">Course Name</option>
        </select>
      </div>
      <input
        className="flex flex-col w-1/2 text-center text-lg border-t border-b"
        type="text"
        placeholder="Type something..."
      />
      <div className="flex flex-col w-1/6 my-auto border-l h-full">
        <button className="h-full border-blue-500 bg-blue-500 text-lg text-white">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
