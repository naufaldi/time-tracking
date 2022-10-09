import React from 'react'
import Image from 'next/image';
const ImageIllustration = () => {
    return (
        <Image
          src="/assets/img/Illustration.png"
          width={620}
          height={664}
          layout="fill"
          objectFit="cover"
          alt="Illustration Time Tracking"
        />
      );
}

export default ImageIllustration