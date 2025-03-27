import Image from 'next/image'
import React from 'react'

export default function NotFound() {
  return (
    <div>
        <Image src="/images/imgs.svg" alt="404" width={500} height={500} />
    </div>
  )
}
