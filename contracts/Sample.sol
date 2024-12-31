// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Sample {
    string public greeting = "Hello, Solidity!";
    
    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
    
    function getGreeting() public view returns (string memory) {
        return greeting;
    }
} 