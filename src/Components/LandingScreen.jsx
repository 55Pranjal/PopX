import { useNavigate } from "react-router-dom";

const LandingScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center p-10 min-h-screen bg-slate-50 md:bg-white">
      <div className="flex flex-col justify-center items-center md:border md:border-1 md:border-black w-screen h-screen md:w-[370px] bg-slate-50">
        <div className="min-w-full p-5 mt-auto">
          <h1 className="font-bold text-2xl">Welcome to PopX</h1>
          <p className="opacity-[80%] mt-1">Lorem ipsum dolor sit amet,</p>
          <p className="opacity-[80%] mb-4">consectetur adipisicing elit,</p>

          <div className="flex flex-col">
            <button
              onClick={() => navigate("/SignUpScreen")}
              className="font-semibold text-sm mb-2 bg-purple-800 text-white rounded-md px-5 py-2 w-[100%]"
            >
              Create Account
            </button>

            <button
              onClick={() => navigate("/LoginScreen")}
              className="font-semibold text-sm bg-purple-200 rounded-md mb-6 px-5 py-2"
            >
              Aready Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
