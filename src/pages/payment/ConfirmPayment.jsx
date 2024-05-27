export default function ConfirmPayment() {
    const handleDone = () => {};
    return (
      <div className="bg-white w-full ">
        <div className="mt-14 mx-auto max-w-[55%] text-center space-y-12">
          <h2 className="text-center text-[#130E5D] text-4xl font-semibold">
            Crypto Payment Method
          </h2>
  
          <div className="text-black text-xl max-w-[60%] font-bold text-center mx-auto space-y-3">
            <div>Your transfer of 0.000016BTC</div>
            <div> Into the BTC wallet address was Successful</div>
          </div>
  
          <div className="">
            <svg
              className="mx-auto size-28"
              viewBox="0 0 143 142"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M71.5007 130.167C104.178 130.167 130.667 103.678 130.667 71C130.667 38.3223 104.178 11.8334 71.5007 11.8334C38.8229 11.8334 12.334 38.3223 12.334 71C12.334 103.678 38.8229 130.167 71.5007 130.167ZM41.9173 71L65.584 88.75L95.1673 47.3334"
                fill="#908EAE"
              />
              <path
                d="M41.9173 71L65.584 88.75L95.1673 47.3334M71.5007 130.167C104.178 130.167 130.667 103.678 130.667 71C130.667 38.3223 104.178 11.8334 71.5007 11.8334C38.8229 11.8334 12.334 38.3223 12.334 71C12.334 103.678 38.8229 130.167 71.5007 130.167Z"
                stroke="#130E5D"
                strokeWidth="10"
              />
            </svg>
          </div>
          <button
            onClick={handleDone}
            className=" w-1/2 h-[50px] text-xl bg-[#130E5D] font-bold  rounded-lg text-white"
          >
            Done
          </button>
        </div>
      </div>
    );
  }
  