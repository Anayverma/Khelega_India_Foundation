import {ethers} from "ethers"
const Buy=({state})=>{
    const buyChai=async(event)=>{
        event.preventDefault();
        const {contract}=state;
        const name=document.querySelector("#name").value;
        const message=document.querySelector("#message").value;
        const amt=document.querySelector("#amount").value;
        const amount={value:ethers.utils.parseEther(amt)};
        const transaction=await contract.buyChai(name,message,amount);
        await  transaction.wait();
        console.log("transaction successful");
    }
    return <>
    <form onSubmit={buyChai}>
        <input id="name" type="text" />
        <input id="message"  type="text" />
        <input id="amount" type="text" />
        <button>pay</button>
    </form>
    </>
}
export default Buy;