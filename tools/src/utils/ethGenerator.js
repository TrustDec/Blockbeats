var Wallet = require('ethereumjs-wallet')
let fs = require('fs');
let path = require('path');

const walletObj = [];
// 生成100个钱包地址数量
for (var i = 0; i < 100; i++) {
    const EthWallet = Wallet.default.generate(false);
    walletObj.push({
        address: EthWallet.getAddressString(),
        privateKey: EthWallet.getPrivateKeyString()
    })
}
let text = JSON.stringify(walletObj);
let file = path.join(__dirname, './wallet.json');
//写入文件
fs.writeFile(file, text, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('文件创建成功~' + file);
    }
})
