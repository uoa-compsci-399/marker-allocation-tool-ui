const SearchBar = (): JSX.Element => {
  return (
    <div className="flex flex-wrap w-1/3 h-10 m-auto mt-0 mb-8">
      <div className="flex flex-col w-1/3 h-full my-auto text-center border">
        <select className="h-full ml-4 text-lg">
          <option value="course_cood">Coordinator</option>
          <option value="course_name">Course Name</option>
        </select>
      </div>
      <input
        className="flex flex-col w-1/2 text-lg text-center border-t border-b"
        type="text"
        placeholder="Type something..."
      />
      <div className="flex flex-col w-1/6 h-full my-auto border-l">
        <button className="h-full text-lg text-white bg-blue-500 border-blue-500">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
