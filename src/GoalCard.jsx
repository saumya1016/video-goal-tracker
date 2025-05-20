import { useContext } from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import { VideoContext } from './VideoContext';
import useVideoPlayback from './useVideoPlayback';
import React from 'react';

function GoalCard({ id, title, progress, videoUrl, onUpdateProgress, onDelete }) {
  const { videoSettings } = useContext(VideoContext);
  const { playing, setPlaying, playedSeconds, handleProgress } = useVideoPlayback(videoUrl);

  console.log('Rendering GoalCard');

  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.03, boxShadow: '12px 12px 24px rgba(0, 0, 0, 0.5), -12px -12px 24px rgba(50, 50, 50, 0.3)' }}
      transition={{ duration: 0.3 }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
        <div className="progress-circle">
          <svg width="60" height="60">
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f7ff" />
                <stop offset="100%" stopColor="#ff4797" />
              </linearGradient>
            </defs>
            <circle className="background" cx="30" cy="30" r="27" />
            <motion.circle
              className="progress"
              cx="30"
              cy="30"
              r="27"
              strokeDasharray="169.65"
              strokeDashoffset={(169.65 * (100 - progress)) / 100}
              initial={{ strokeDashoffset: 169.65 }}
              animate={{ strokeDashoffset: (169.65 * (100 - progress)) / 100 }}
              transition={{ duration: 0.5 }}
            />
          </svg>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#e0e0e0',
              fontSize: '0.9rem',
              fontWeight: 600,
            }}
          >
            {progress}%
          </div>
        </div>
        <h3 style={{ fontSize: '1.6rem', color: '#ffffff', flex: 1 }}>{title}</h3>
      </div>
      <p style={{ color: '#b0b0b0', fontSize: '0.9rem', marginBottom: '15px' }}>
        Watched: {Math.floor(playedSeconds)}s
      </p>
      <div className="video-player" style={{ maxWidth: '480px', marginBottom: '20px' }}>
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="240px"
          controls
          playing={playing}
          volume={videoSettings.volume}
          onProgress={handleProgress}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
      </div>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <motion.button
          style={{
            background: 'linear-gradient(45deg, #00f7ff, #ff4797)',
            color: '#fff',
          }}
          whileTap={{ scale: 0.95 }}
          whileHover={{ boxShadow: '0 6px 20px rgba(0, 247, 255, 0.5)' }}
          onClick={() => onUpdateProgress(id, Math.min(progress + 10, 100))}
        >
          +10%
        </motion.button>
        <motion.button
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            color: '#fff',
          }}
          whileTap={{ scale: 0.95 }}
          whileHover={{ boxShadow: '0 6px 20px rgba(255, 255, 255, 0.2)' }}
          onClick={() => onUpdateProgress(id, Math.max(progress - 10, 0))}
        >
          -10%
        </motion.button>
        <motion.button
          style={{
            background: '#ff4d4d',
            color: '#fff',
          }}
          whileTap={{ scale: 0.95 }}
          whileHover={{ boxShadow: '0 6px 20px rgba(255, 77, 77, 0.5)' }}
          onClick={() => onDelete(id)}
        >
          Delete
        </motion.button>
      </div>
    </motion.div>
  );
}

export default React.memo(GoalCard);