import React, { useState } from 'react';


const FabPopup: React.FC = () => {
    const [state, setState] = useState({ loading: false });
    const [userID, setUserId] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [upi, setUpi] = useState("");
    const [role, setRole] = useState("Marker");

    async function submitForm(): Promise<any>{
      setState({ ...state, loading: true });
      console.log({ userID, firstName, lastName, email, upi, role });
      const response = await fetch(`https://dev.classe.wumbo.co.nz/api/user`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({userID, firstName, lastName, email, upi, role })
      });
      const content = await response.json();
      setState({ ...state, loading: false });
    }

    return (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                    <div className="relative p-6 flex-auto">
                        <span>
                        <label>Student Id</label>
                        <input
                            className="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                            type="input"
                            id="userId"
                            autoFocus
                            onChange={(evt): void => setUserId(evt.target.value)}
                        />
                        </span>
                    </div>
                    <div className="relative p-6 flex-auto">
                        <span>
                        <label>First Name</label>
                        <input
                            className="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                            type="input"
                            id="firstName"
                            autoFocus
                            onChange={(evt): void => setfirstName(evt.target.value)}
                        />
                        </span>
                    </div>
                    <div className="relative p-6 flex-auto">
                        <span>
                        <label>Last Name</label>
                        <input
                            className="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                            type="input"
                            id="lastName"
                            autoFocus
                            onChange={(evt): void => setlastName(evt.target.value)}
                        />
                        </span>
                    </div>
                    <div className="relative p-6 flex-auto">
                        <span>
                        <label>Email</label>
                        <input
                            className="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                            type="input"
                            id="email"
                            autoFocus
                            onChange={(evt): void => setEmail(evt.target.value)}
                        />
                        </span>
                    </div>
                    <div className="relative p-6 flex-auto">
                        <span>
                        <label>Upi</label>
                        <input
                            className="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                            type="input"
                            id="upi"
                            autoFocus
                            onChange={(evt): void => setUpi(evt.target.value)}
                        />
                        </span>
                    </div>

                    <button className="assignMarker" onClick={submitForm}>
                    {!state.loading ? "Assign" : <div>loading</div>}
                    </button>
                </div>
            </div>
        </div>
      </>
    );
  };

export default FabPopup;