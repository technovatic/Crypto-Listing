import React from 'react'
import RenderCoin from './RenderCoin'
import '../index.css'

function Coins({coins}) {
    return (
        <div className='max-w-screen-lg m-auto'>
            <div>
                <div className='flex flex-row justify-between items-center bg-gray-900 rounded-lg font-bold mx-4 my-8 py-3 px-4 shadow-sm'>
                    <p>#</p>
                    <p className='-ml-16'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Market Cap</p>
                </div>

                {coins.map(coin => (
                    <RenderCoin 
                        key={coin.id}
                        coin={coin}
                    />
                ))}
            </div>
        </div>
    )
}

export default Coins
