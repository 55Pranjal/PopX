import React from "react";

const LoginScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center p-10 min-h-screen bg-slate-50 md:bg-white">
      <div className="flex flex-col md:border md:border-1 md:border-black w-screen h-screen md:w-[370px] bg-slate-50">
        <div className="bg-white w-full py-4 px-2 font-semibold ">
          Account Settings
        </div>
        <div className="w-full border-b border-dashed border-opacity-[30%] border-1 border-black py-4 px-2">
          <div className="flex m-2">
            <img
              src="https://media.licdn.com/dms/image/v2/C5603AQFaM0NT4zwbeQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1635832846026?e=1758758400&amp;v=beta&amp;t=wxk-q3y2PJP-9ExNUhbRQBoLmsS_Ft4o681U-InWE1A"
              alt="Mary Traut"
              className="rounded-full size-16 border border-1 border-black border-opacity-[30%] mr-3"
            />
            <div>
              <p className="text-sm">Mary Doe</p>
              <p className="text-sm">Marry@gmail.com</p>
            </div>
          </div>
          <p className="text-sm mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            voluptatibus ipsam consectetur provident dicta quis, ab, fugit
            beatae ipsa ullam
          </p>
        </div>
        <div className="w-full border-b border-dashed border-opacity-[30%] border-1 border-black mt-auto"></div>
        <div className="h-[5%]"></div>
      </div>
    </div>
  );
};

export default LoginScreen;
