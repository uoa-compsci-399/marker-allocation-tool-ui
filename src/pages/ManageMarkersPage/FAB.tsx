import React from 'react';

const FloatingButton = (): JSX.Element => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="fixed bottom-2 right-20">
      <button
        className="p-0 w-20 h-20 bg-blue-500 rounded-full hover:bg-blue-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
        onClick={(): void => setShowModal(true)}
      >
        <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" className="w-6 h-6 inline-block">
          <path
            fill="#FFFFFF"
            d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                        C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                        C15.952,9,16,9.447,16,10z"
          />
        </svg>
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header/title*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add a Marker</h3>
                </div>
                {/*Body/Input*/}

                <div className="relative p-6 flex-auto">
                  <div className="mb-4 relative">
                    <input
                      placeholder="First Name"
                      className="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                      id="email"
                      type="text"
                      autoFocus
                    />
                  </div>
                  <div className="mb-4 relative">
                    <input
                      placeholder="Last Name"
                      className="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                      id="password"
                      type="password"
                      autoFocus
                    />
                  </div>
                  <div className="mb-4 relative">
                    <input
                      placeholder="Email"
                      className="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                      id="email"
                      type="text"
                      autoFocus
                    />
                  </div>
                  <div className="mb-4 relative">
                    <input
                      placeholder="Phone Number"
                      className="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                      id="password"
                      type="password"
                      autoFocus
                    />
                  </div>
                  <div className="mb-4 relative">
                    <input
                      placeholder="Assigned CourseId"
                      className="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                      id="password"
                      type="password"
                      autoFocus
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={(): void => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={(): void => setShowModal(false)}
                  >
                    Assign
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default FloatingButton;
