import React from 'react';
import code from '../../assets/whatsap.png'


function Qrcode() {
    return (
        <div className="bg-white w-full h-screen">
            <div className="text-center">
                <button className="mt-20 relative right-1/3 border-2 border-yellow-400 w-28 h-14 rounded-lg text-xl text-[#130E5D]">
                    Back
                </button>
                <h2 className="text-[#130E5D] text-6xl font-semibold">Crypto Payment Method</h2>

                <p className='text-[#130e5d] text-xl mt-24 '>kindly make  a direct payment of 0.000016BTC<br/>into the BTC wallet address Below</p>

                <p className='mt-20 font-bold text-xl text-[#130e5d]'>1WCA7kftd4gxLsKxBWz4ATBCbX5Md9mvn</p>
                <p className='text-[#130E5D] text-xl mt-4'>Or</p>
                <p className='text-[#130e5d] text-xl mt-5'>Scan this QR code below</p>

            <p>   <img src={code} className='relative left-[550px] top-16' /></p>

                
                <p className='text-[#130e5d] text-xl relative top-52 ' >waiting for your payment.......(2:23:12:23)</p>
                <img/>

                <div>
                    <button className="w-[676px] h-[78px] text-[32px] bg-[#130E5D] font-bold rounded-lg text-white  mt-64">
                        Confirm your Payment
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Qrcode;
