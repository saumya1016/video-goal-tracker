import { useState } from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

function AddGoalForm({ onAddGoal }) {
  const [title, setTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState('');

  const validateUrl = url => {
    return ReactPlayer.canPlay(url);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !videoUrl) {
      setError('Please fill all fields');
      return;
    }
    if (!validateUrl(videoUrl)) {
      setError('Invalid video URL');
      return;
    }
    onAddGoal({ id: Date.now(), title, videoUrl, progress: 0 });
    setTitle('');
    setVideoUrl('');
    setError('');
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Goal title"
        style={{ marginBottom: '20px' }}
      />
      <input
        value={videoUrl}
        onChange={e => setVideoUrl(e.target.value)}
        placeholder="Video URL (e.g., YouTube)"
        style={{ marginBottom: '20px' }}
      />
      {error && (
        <motion.p
          style={{ color: '#ff4d4d', fontSize: '0.9rem', marginBottom: '20px', fontWeight: 500 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {error}
        </motion.p>
      )}
      <motion.button
        type="submit"
        style={{
          background: 'linear-gradient(45deg, #00f7ff, #ff4797)',
          color: '#fff',
        }}
        whileTap={{ scale: 0.95 }}
        whileHover={{ boxShadow: '0 6px 20px rgba(0, 247, 255, 0.5)' }}
      >
        Add Goal
      </motion.button>
    </motion.form>
  );
}

export default AddGoalForm;