import { FC } from 'react';

type Props = {
  src: string;
  className?: string;
};

const YoutubePlayer: FC<Props> = ({ src, className }) => {
  return (
    <div>
      <iframe
        src={src}
        allowFullScreen
        allow='autoplay'
        className={className}
      />
    </div>
  );
};

export default YoutubePlayer;
