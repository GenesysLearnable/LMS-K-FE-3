import { Link } from "react-router-dom";

export default function ResetPassword() {
  return (
    <>
      <div>
        <header className="bg-[#FFE060] h-[20vh] z-[-5] fixed w-full "></header>
        <div className="w-full bg-transparent flex justify-center">
          <div className="p-10 text-center space-y-10 border-[#FFD012] border-2 rounded-3xl w-[60vw] bg-white  text-[#130E5D] h-fit mt-16 ">
            <div className="w-full flex justify-center">
              <div className=" justify-center items-center border-4 p-4 text-6xl size-24 border-[#FFD012] text-[#FFD012] rounded-full ">
                !
              </div>
            </div>
            <h1 className="text-[2rem] font-bold">Reset Password</h1>
            <p className="text-[1.5] font-medium">Enter your new password.</p>
            <form action="" method="post" className="">
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="new-password"
                className="p-4 w-full font-medium text-[1.5rem] mb-6 rounded-xl text-[#6B6B69] border-2 border-[#130E5D] bg-[#FFF0B6]"
              />
              <input
                type="password"
                name="password"
                placeholder="Retype Password"
                id="retype-password"
                className="p-4 w-full font-medium text-[1.5rem] mb-6 rounded-xl text-[#6B6B69] border-2 border-[#130E5D] bg-[#FFF0B6]"
              />
              <button className="bg-[#130E5D] text-white p-2 rounded-xl w-full h-[78px] px-4 py-2 text-[1.5rem] font-bold mb-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
