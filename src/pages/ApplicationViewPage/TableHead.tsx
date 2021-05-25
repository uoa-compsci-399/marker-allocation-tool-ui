const TableHead = (): JSX.Element => {
  return (
    <thead className="bg-gray-50">
      <tr>
        <th
          scope="col"
          className="w-1/5 py-3 text-lg font-medium tracking-wider text-left text-gray-600 uppercase px-9"
        >
          Name
        </th>
        <th
          scope="col"
          className="w-1/6 px-3 py-3 text-xl font-medium tracking-wider text-left text-gray-600 uppercase font-a"
        >
          Location
        </th>
        <th
          scope="col"
          className="w-1/6 px-3 py-3 text-xl font-medium tracking-wider text-left text-gray-600 uppercase"
        >
          Status
        </th>
        <th className="w-1/6"></th>
      </tr>
    </thead>
  );
};

export default TableHead;
