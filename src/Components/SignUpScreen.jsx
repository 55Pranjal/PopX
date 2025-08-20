import { useNavigate } from "react-router-dom";

const SignUpScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center p-10 min-h-screen bg-slate-50 md:bg-white">
      <div className="flex flex-col justify-center items-center md:border md:border-1 md:border-black w-screen h-screen md:w-[370px] bg-slate-50">
        <div className="min-w-full p-5 mb-auto min-h-full">
          <h1 className="font-bold text-2xl">Create your</h1>
          <h1 className="font-bold text-2xl">PopX account</h1>

          <fieldset className="mt-5 border border-gray-300 rounded-md px-3 pb-2">
            <legend className="text-sm text-violet-600 px-1">
              Full Name *
            </legend>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border-0 focus:ring-0 focus:outline-none bg-slate-50"
            />
          </fieldset>
          <fieldset className="my-4 border border-gray-300 rounded-md px-3 pb-2">
            <legend className="text-sm text-violet-600 px-1">
              Phone number *
            </legend>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border-0 focus:ring-0 focus:outline-none bg-slate-50"
            />
          </fieldset>
          <fieldset className="border border-gray-300 rounded-md px-3 pb-2">
            <legend className="text-sm text-violet-600 px-1">
              Email Address *
            </legend>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full border-0 focus:ring-0 focus:outline-none bg-slate-50"
            />
          </fieldset>
          <fieldset className="my-4 border border-gray-300 rounded-md px-3 pb-2 mb-2">
            <legend className="text-sm text-violet-600 px-1">Password *</legend>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border-0 focus:ring-0 focus:outline-none bg-slate-50"
            />
          </fieldset>
          <fieldset className="mb-3 mt-4 border border-gray-300 rounded-md px-3 pb-2">
            <legend className="text-sm text-violet-600 px-1">
              Company name
            </legend>
            <input
              type="text"
              placeholder="Enter your company"
              className="w-full border-0 focus:ring-0 focus:outline-none bg-slate-50"
            />
          </fieldset>
          <div className="flex">
            <p className="text-sm">Are you an agency?</p>
            <p className="text-sm text-red-500">*</p>
          </div>
          <div className="flex">
            <input type="radio" className="mx-1 mt-2" />
            <label className="mx-2 mt-2">Yes</label>

            <input type="radio" className="mx-1 mt-2" />
            <label className="mx-2 mt-2">No</label>
          </div>
          <button
            onClick={() => navigate("/Profile")}
            className="mt-36 font-semibold text-sm mb-2 bg-purple-800 text-white rounded-md px-5 py-2 w-[100%]"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
