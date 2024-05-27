import { useNavigate } from "react-router-dom";
import code from "../../assets/whatsap.png";
import { useState } from "react";
import Web3 from 'web3';

function Qrcode() {
  const navigate = useNavigate();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const handleConfirm = () => {
    navigate("/PaymentPage/confirmpayment");
  };


  
const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"minter","type":"address"}],"name":"mintTokens","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
const contractAddress = "0xE194051F9c21c3Dd0B32B966a1F26E8D9c32Db7d";

const web3 = new Web3('https://sepolia.infura.io/v3/cf560557c9b640158273f0cd835e0522')

var contract = new web3.eth.Contract(ABI, contractAddress);
var blockNumber;

async function getBlockNum() {
    blockNumber = await web3.eth.getBlockNumber()
    console.log(blockNumber)
}

getBlockNum();

setInterval(function() {

    contract.getPastEvents(
        'Transfer', 
        {
            //filter: {to: ''},
            //filter: {from: '0x634bC37172eCDD1Eb18Fb1C1f1E043006be5Cc60'},
            fromBlock: blockNumber, 
            toBlock: 'latest'
        }, 
        (error, events) => {console.log(error)}
      
      ).then((event) => {
        console.log(event)
        const data = event;
        console.log(data[0])
        console.log(data[0].returnValues.value);
        var test = data[0].returnValues.value
        if(test == 50) {
          console.log("successful")
          setIsConfirmed(true)
      
        }else {
          console.log("unsuccessful")
        }
      })

}, 5000)




  return (
    <div className="bg-white w-full h-screen">
      <div className="text-center">
        <button className="mt-20 relative right-1/3 border-2 border-yellow-400 w-28 h-14 rounded-lg text-xl text-[#130E5D]">
          Back
        </button>
        <h2 className="text-[#130E5D] text-6xl font-semibold">
          Crypto Payment Method
        </h2>

        <p className="text-[#130e5d] text-xl mt-24 ">
          kindly make a direct payment of 50 $USDT
          <br />
          into the USDT wallet address Below
        </p>

        <p className="mt-20 font-bold text-xl text-[#130e5d]">
        0x634bC37172eCDD1Eb18Fb1C1f1E043006be5Cc60
        </p>
        <p className="text-[#130E5D] text-xl mt-4">Or</p>
        <p className="text-[#130e5d] text-xl mt-5">Scan this QR code below</p>

        <p>
          {" "}
          <img src={code} className="relative left-[550px] top-16" />
        </p>

        <p className="text-[#130e5d] text-xl relative top-52 ">
          waiting for your payment.......(2:30)
        </p>
        <img />

        <div>
          <button
            disabled={!isConfirmed}
            onClick={handleConfirm}
            className={`w-[676px] h-[78px] text-[32px] bg-[#130E5D] font-bold rounded-lg text-white  mt-64 ${
              !isConfirmed && "opacity-25"
            }`}
          >
            Confirm your Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Qrcode;
