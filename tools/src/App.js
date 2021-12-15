
import TrustWallet from './utils/trust_wallet'
function getRandomAlphaNum(len) {
  var rdmString = "";
  for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
  return rdmString.substr(0, len);
}
function App() {
  let cindex = 0;
  const request = async(addr) => {
    const email = `trusttheboy+${getRandomAlphaNum(6)}@gmail.com`
    const url = "https://api.socialfi.ai/api/v1/register"
    let testRequest = new Request(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8;'
      },
      body: JSON.stringify(
        {
          "addr": addr,
          "email": email,
          "inviter": "HGtfLi"
        }
      )
    })
    const response = await fetch(testRequest);
    let result =await response.json()
    console.log(`${cindex}:email:${email};addr:${addr}`,result)
    ++cindex
    // getAddr(cindex)
    
  }
  const getAddr= async(index)=>{
    request(TrustWallet[cindex])
   
  }
  return (
    <div className="App">
      <button onClick={getAddr}>开始</button>
    </div>
  );
}

export default App;
