import icon from '../../assets/gronment.png'
import bitcoin from '../../assets/bitcoinlogo.png'
import  etherum from '../../assets/etheerumlogo.png'
import  usd from '../../assets/usdlogo.png'
import frame from  '../../assets/bit.png'
import Photo from '../../assets/ethe.png'
import picturess from '../../assets/US.png'
function Crypt(){
    return(
        <div className="bg-white  w-full h-screen">
            <div className="text-center">
                
            <button className="mt-20 relative right-1/3 border-2 border-yellow-400 w-28 h-14 rounded-lg text-xl text-[#130E5D]" >Back</button>
                <h2 className="text-[#130E5D] text-6xl font-semibold">Crypto Payment Method</h2>
                
                    <div className='flex justify-between items-center mt-[120px] px-4'>
                        
                                <img src={icon} alt="Iconify" className="w-14 relative left-80" />


                                <div className="flex space-x-4  relative right-80">


                    <img src={bitcoin} className='w-14'/>
                    <img src ={etherum}/>
                    <img src={usd}/>
                    </div>
                    </div>

                    <div>
                   
                   <a href='#' > <img src={picturess} alt="Bitcoin" className='relative left-80 mt-3.5 '/> </a>
                </div>

                <div>
                   <a href='#'> <img src={frame} className='relative left-[350px]' /> </a>
                </div>
                
                <div>
                <a href='#'>   <img src={Photo} className='relative left-[350px]'/> </a>
                </div>


                <div className='text-black font-bold  flex items-center justify-center mt-20'>
                <input id="agree" type="checkbox" className="form-checkbox h-5 w-5 text-blue-600"/>

                <label for="agree" className="ml-2 text-black text-2xl">I have read and agree to the website's terms and conditions</label>

                </div>

                <div>
                    <div className='flex justify-around text-[#130E5D] text-4xl font-bold mt-20'><span className='relative left-[87px]'>Total</span> 
                    <span className='relative right-10'>3.00USD</span> 
                    </div>
                </div>
                <div>
                 
                    <div className='text-[#130E5D] font-bold flex justify-around text-4xl mt-14 '><span className='relative left-[144px]'>Amount in BTC</span> 
                    <span className='relative right-7'>0.000016BTC</span></div>
    
                    </div>
                    <button  className='w-[676px] h-[78px] text-[32px] bg-[#130E5D] font-bold  rounded-lg text-white mt-14'>Confirm your Payment</button>

                    </div>
            </div>
    )
}
export default Crypt