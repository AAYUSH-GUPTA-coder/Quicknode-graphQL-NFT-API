import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full flex flex-row justify-start items-center gap-10 bg-gray-800 px-10 py-3'>
        <Link href='/Collections'><button className='text-2xl font-bold'>Collections</button></Link>
        <Link href='/WalletNFTs'><button className='text-2xl font-bold'>Wallet NFTs</button></Link>
    </div>
  )
}

export default Navbar