import { ChainId, WETH, Token, Fetcher } from '../src'

// TODO: replace the provider in these tests
describe.skip('data', () => {
  it('Token', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.TESTNET, '0x4200000000000000000000000000000000000023') // WEHT
    expect(token.decimals).toEqual(18)
  })


  it('Pair', async () => {
    const token = new Token(ChainId.TESTNET, '0x3890f9dC7db9c21894dA6f0C5149E31b37746E49', 18) // USDT Token
    const pair = await Fetcher.fetchPairData(WETH[ChainId.TESTNET], token)
    expect(pair.liquidityToken.address).toEqual('0xCe6B8Dea3b9b144BbF1739a6C8A058983A8F44c1')
  })
})
