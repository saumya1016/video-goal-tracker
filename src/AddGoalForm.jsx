import { useState } from 'react';
import ReactPlayer from 'react-player';

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
    <form onSubmit={handleSubmit}>
      <input style={{
        
      }}
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Goal title"
      />
      <input
        value={videoUrl}
        onChange={e => setVideoUrl(e.target.value)}
        placeholder="Video URL (e.g., YouTube)"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" style={{
        
        padding: "7px",
        background: "linear-gradient(to right, #333333, #dd1818)",
        marginLeft: "5PX",
      }}>Add Goal</button>
    </form>
  );
}

export default AddGoalForm;
