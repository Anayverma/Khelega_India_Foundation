import { useState ,useEffect} from 'react'
import abi from "./contractJson/Lock.json"
import {ethers} from "ethers"
import Memos from './components/Memos/Memos.jsx'
import Buy from './components/Buy/Buy.jsx'
import './App.css'
import chai from "./chai.png";

function App() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })
  const [account,setAccount]=useState('Not connected');
  useEffect(()=>{
    const template=async()=>{
   
      const contractAddres="0xB11Ef7c1bB900f2097c22152B32719547528c33F";
      const contractABI=abi.abi;
      //Metamask part
      //1. In order do transactions on goerli testnet
      //2. Metmask consists of infura api which actually help in connectig to the blockhain
      try{

        const {ethereum}=window;
        const account = await ethereum.request({
          method:"eth_requestAccounts"
        })
 
        window.ethereum.on("accountsChanged",()=>{
         window.location.reload()
        })
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum);//read the Blockchain
        const signer =  provider.getSigner(); //write the blockchain
        
        const contract = new ethers.Contract(
          contractAddres,
          contractABI,
          signer
        )
        console.log(contract)
      setState({provider,signer,contract});
       
      }catch(error){
        console.log(error)
      }
    }
    template();
  },[])
  return (
  //  <>
  //  <div>
  //   connected account :`${account}`
  //  </div>
  // {/* <Memos state={state}/> */}

  // <Buy  state={state}/>
  //  </>
  <div >
    <img src={chai} className="img-fluid" alt=".." width="100%" />
    <p style={{ marginTop: "10px", marginLeft: "5px" }}>
      <small>Connected Account - {account}</small>
    </p>
   
      <Buy state={state} />
      <Memos state={state} />
   
  </div>
  )
}

export default App
