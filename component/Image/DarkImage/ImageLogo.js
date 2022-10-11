import React from 'react'
import Image from 'next/image';
const ImageLogo = () => {
    return (
        <Image
          src="/assets/img/logo-dark.png"
          width={138}
          height={43}
          layout="fill"
          objectFit="cover"
          alt="Logo Time Tracking"
        />
      );
}

export default ImageLogo