import { FC } from 'react';

type Props = {
  src: string;
  width?: string;
  height?: string;
};

const YoutubePlayer: FC<Props> = ({ src, width = '100%', height = '100%' }) => {
  return (
    <div>
      <iframe
        src={src}
        allowFullScreen
        style={{ width, height }}
        allow='autoplay'
      />
    </div>
  );
};

export default YoutubePlayer;
