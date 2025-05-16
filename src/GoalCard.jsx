import React from 'react';
import { useContext } from 'react';
import ReactPlayer from 'react-player';
import { VideoContext } from './VideoContext';
import useVideoPlayback from './useVideoPlayback';

function GoalCard({ id, title, progress, videoUrl, onUpdateProgress, onDelete }) {
  const { videoSettings } = useContext(VideoContext);
  const { playing, setPlaying, playedSeconds, handleProgress } =
    useVideoPlayback(videoUrl);

  console.log('Rendering GoalCard');

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>{title}</h3>
      <p>Progress: {progress}%</p>
      <p>Watched: {Math.floor(playedSeconds)} seconds</p>
      <div style={{ maxWidth: '400px' }}>
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="200px"
          controls
          playing={videoSettings.autoPlay}
          volume={videoSettings.volume}
          onProgress={handleProgress}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
      </div>
      <button onClick={() => onUpdateProgress(id, Math.min(progress + 10, 100))}>
        +10%
      </button>
      <button onClick={() => onUpdateProgress(id, Math.max(progress - 10, 0))}>
        -10%
      </button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default React.memo(GoalCard);
