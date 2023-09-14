import Image from 'next/image';

const socialMediaImages = {
  Instagram: 'https://i.postimg.cc/cLC0Nzb2/instagram.png',
  Facebook: 'https://i.postimg.cc/XYP3N8MJ/facebook.png',
  Twitter: 'https://i.postimg.cc/bJxjTfZD/twiter.png',
  Pinterest: 'https://i.postimg.cc/5tFJXC1m/pinterest.png',
  Youtube: 'https://i.postimg.cc/V6Q8nkkP/youtube.png',
};

const SocialMediaImages = () =>
  Object.entries(socialMediaImages).map(
    ([socialMediaName, socialMediaImageUrl]) => (
      <Image
        key={socialMediaName}
        src={socialMediaImageUrl}
        width={50}
        height={50}
        alt=""
      />
    )
  );

export default SocialMediaImages;
