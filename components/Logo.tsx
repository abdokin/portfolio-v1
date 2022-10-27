import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link
    href={'/'}
  >
    <div style={{
      display:'flex',
      alignItems:'center',
      gap:'1em',
      cursor:'pointer'

    }}>
      <img width={'32px'} height='32px' src={'https://abdo-homepage.vercel.app/_next/image?url=%2Fimages%2Fabdo.jpeg&w=256&q=75'} style={{
        borderRadius: '20%',
      }} />
      <span>Abdo_7fth </span>

    </div>
  </Link>  )
}

export default Logo