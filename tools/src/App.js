import React, { useState } from 'react'
import TrustWallet from './utils/wallet.json'
const inviterCode = "HGtfLi"
const emailName = "trusttheboy"
function getRandomAlphaNum(len) {
  let rdmString = "";
  for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
  return rdmString.substr(0, len);
}
function App() {
  const [cindex, setCindex] = useState(0)
  const request = async (addr) => {
    const inviter = inviterCode
    const email = `${emailName}+${getRandomAlphaNum(6)}@gmail.com`
    const url = "https://api.socialfi.ai/api/v1/register"
    let testRequest = new Request(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8;'
      },
      body: JSON.stringify({ addr, email, inviter })
    })
    const response = await fetch(testRequest);
    let result = await response.json()
    console.log(`${cindex}:email:${email};addr:${addr}`, result)
    setCindex(cindex + 1)
  }
  const getAddr = () => {
    request(TrustWallet[cindex].address)
  }
  return (
    <div className="App">
      <a href="javascript:void(0);" className="btn" onClick={getAddr}>Send Gmail:第{cindex}次</a>
    </div>
  );
}
export default App;
