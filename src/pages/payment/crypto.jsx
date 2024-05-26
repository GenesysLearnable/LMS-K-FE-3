function Crypto(){
    return(
        <div className="bg-white  w-full h-screen">
            <div className="text-center">
                
            <button className="mt-20 relative right-1/3 border-2 border-yellow-400 w-28 h-14 rounded-lg text-xl text-[#130E5D]" >Back</button>
                <h2 className="text-[#130E5D] text-6xl font-semibold">Crypto Payment Method</h2>
                <div>
                    <img/>
                    <img/>
                </div>
                <p><img/><span>Bitcoin</span></p>
                <p><img/>Ethereum</p>
                <p><img/>USDT</p>
                <p>
                    I have  read and agreed with this website
                </p>
                <div>
                    <div>Total</div>
                    <div>3.00USD</div>
                </div>
                <div>
                    <div>Amount in BTC</div>
                    <div>0.000016BTC</div>
                    </div>
                    <button>Confirm Payment</button>

                    </div>
            </div>
    )
}
export default Crypto