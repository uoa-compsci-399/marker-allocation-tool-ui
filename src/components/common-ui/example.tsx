import React from "react";
import clsx from "clsx";

interface ExampleProps {
  title: string;
  description: string;
}

const Example = ({ title, description }: ExampleProps): JSX.Element => {
  return (
    <div className="max-w-full overflow-hidden bg-white shadow-md min-w-fullmx-auto rounded-xl">
      <div className="md:flex">
        <div className="p-8">
          <div
            className={clsx(
              //  utillity classes at different screen widths
              "text-sm font-semibold tracking-wide lg:text-indigo-700 uppercase",
              "md:text-green-800",
              "sm:text-red-700"
            )}
          >
            {title}
          </div>
          <a
            href="/"
            className="block mt-1 text-lg font-medium leading-tight text-black hover:underline"
          >
            Some Link
          </a>
          <p className="mt-2 text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Example;
