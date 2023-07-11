import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

import LatestReleaesIconPlay from './LatestReleaesIconPlay/LatestReleaesIconPlay';
import LatestReleaesText from './LatestReleasesText/LatestReleasesText';
import LatestReleasesVideoSlider from './LatestReleasesVideoSlider/LatestReleasesVideoSlider';

import scss from './LatestReleasesItem.module.scss';

function LatestReleaesItem({ indexItem, songImage, songLink, videoText }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoPlay = indexItem => {
    if (currentVideoIndex !== null && currentVideoIndex !== indexItem) {
      setCurrentVideoIndex(null);
    }
    setCurrentVideoIndex(indexItem);
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setCurrentVideoIndex(null);
  };

  return (
    <li className={scss.playerBox}>
      <div
        style={{
          width: '100%',
          height: '100%',
        }}
        className={isPlaying ? scss.imageMusicNoEffects : scss.imageMusic}
      >
        <ReactPlayer
          className={isPlaying ? scss.imageMusicNoEffects : scss.reactPlayer}
          light={songImage.url()}
          url={songLink}
          width="100%"
          height="100%"
          playIcon={
            <LatestReleaesIconPlay
              currentVideoIndex={currentVideoIndex}
              indexItem={indexItem && indexItem}
              className={scss.iconPlayRelease}
            />
          }
          playing={currentVideoIndex === indexItem}
          onPlay={() => handleVideoPlay(indexItem)}
          onPause={handleVideoPause}
        />
      </div>
      <LatestReleaesText
        currentVideoIndex={currentVideoIndex}
        videoText={videoText}
        indexItem={indexItem && indexItem}
      />
      <LatestReleasesVideoSlider
        currentVideoIndex={currentVideoIndex}
        indexItem={indexItem && indexItem}
      />
    </li>
  );
}

LatestReleaesItem.propTypes = {
  videoText: PropTypes.string.isRequired,
  songImage: PropTypes.object.isRequired,
  songLink: PropTypes.string.isRequired,
};

export default LatestReleaesItem;
