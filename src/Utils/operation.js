import {tezos} from './tezos'
import bytes2Char from '@taquito/utils'


// export const  buyNftOperation =  async () =>{
//     try{
//         const contract  = await tezos.wallet.at("")
//         const op = await contract.methods.buy_nft().send({
//             amount: 5.08,
//             mutez: false
//         })

//         await op.confirmation(5.08)
//     } catch(err){
//         throw (err)
//     }
   

// }























    const getUserNfts = async(address) =>{



    const contract = await tezos.wallet.at("")
   const nftStorage = await contract.storage()
   const getTokenIds = await nftStorage.reverse_ledger.get(address)
   if(getTokenIds){
   const userNfts = await Promise.all([
        getTokenIds.map(async id =>{
            const tokenId = id.toNumber()
            const metadata = await nftStorage.token_metadata.get(tokenId)
            const tokenInfoBytes = metadata.token_info.get("")
            const tokenInfo = bytes2Char(tokenInfoBytes) 
            return{
                tokenId,
                ipsHash: tokenInfo.slice(0,7) === "ipfs//" ? tokenInfo.slice(7):null
            }
        })
    ])
   }
                                                
}


export default getUserNfts