
// pragma solidity ^0.8.23;

//     contract Lock{
//     struct Memo{
//         string name;
//         string message;
//         uint timestamp;
//         address from;
//     }
//     Memo[] memos;
//     address payable owner;
//     constructor(){
//         owner=payable (msg.sender);
//     }
//     function buyChai(string calldata name,string calldata message) external payable {
//         require(msg.value > 0,"you entered null");
//         owner.transfer(msg.value);
//         memos.push(Memo(name,message,block.timestamp,msg.sender));
//     }
//     function getMemos() public view returns(Memo[] memory){
//         require(memos.length==0,"memos is empty");
//         return memos;
//     }
// }
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.23;

contract Lock {
    struct Memo {
        string name;
        string message;
        uint timestamp;
        address from;
    }
    Memo[] public memos;
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function buyChai(string calldata name, string calldata message) external payable {
        require(msg.value > 0, "you entered null");
        owner.transfer(msg.value);
        memos.push(Memo(name, message, block.timestamp, msg.sender));
    }

    function getMemos() public view returns (Memo[] memory) {
        require(memos.length > 0, "memos is empty");
        return memos;
    }
}


