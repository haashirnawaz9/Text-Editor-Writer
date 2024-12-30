import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="flex justify-between items-center">
        <div className="flex items-center p-2 ml-3">
            <Image src="/logo.png" alt="logo" width={50} height={50}/>
            <h2 className="ml-2 font-bold">HLDocs</h2>
        </div>
    </div>
  )
}

export default Header