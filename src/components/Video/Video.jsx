import scss from './Video.module.scss';
import VideoChapter from './VideoChapter/VideoChapter';
import VideoContainer from './VideoContainer/VideoContainer';

function Video() {
  const language = {
    ua: 'відео',
    uk: 'video',
  };

  return (
    <section id="videos" className={scss.video}>
      <div className={scss.video_container}>
        <VideoChapter VChapter={language ? language.uk : language.ua} />
        <VideoContainer />
      </div>
    </section>
  );
}

export default Video;
