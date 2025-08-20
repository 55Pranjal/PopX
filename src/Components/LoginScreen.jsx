import { useNavigate } from "react-router-dom";
const LoginScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center p-10 min-h-screen bg-slate-50 md:bg-white">
      <div className="flex flex-col justify-center items-center md:border md:border-1 md:border-black w-screen h-screen md:w-[370px] bg-slate-50">
        <div className="min-w-full p-5 mb-auto">
          <h1 className="font-bold text-2xl">Signin to your</h1>
          <h1 className="font-bold text-2xl">PopX account</h1>
          <p className="opacity-[80%] mt-1">Lorem ipsum dolor sit amet,</p>
          <p className="opacity-[80%] mb-4">consectetur adipisicing elit,</p>

          <fieldset className="border border-gray-300 rounded-md px-3 pb-2">
            <legend className="text-sm text-violet-600 px-1">
              Email Address
            </legend>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full border-0 focus:ring-0 focus:outline-none bg-slate-50"
            />
          </fieldset>
          <fieldset className="border border-gray-300 rounded-md px-3 pb-2 mb-2">
            <legend className="text-sm text-violet-600 px-1">Password</legend>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border-0 focus:ring-0 focus:outline-none bg-slate-50"
            />
          </fieldset>

          <button
            onClick={() => navigate("/Profile")}
            className="text-white font-semibold text-sm bg-[#b5b5b3] rounded-md w-full px-5 py-2"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
