import React from 'react'

export default function Background({ img, children, className }) {
  return (
    <div>
      <div className={`section-main w-full -z-10 ${className} absolute top-0`} style={{
                backgroundImage: `url('${img}')`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'rgba(0,0,0,0.7)',
                backgroundSize: 'cover',
                backgroundBlendMode: 'darken',
                boxShadow: '0px -50px 100px #0F1016 inset',
                // backgroundPositionX: 'center',
            }}>
                {children}
            </div>
    </div>
  )
}
