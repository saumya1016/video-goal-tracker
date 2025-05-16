import { useState, useEffect } from 'react';
function useVideoPlayback(videoUrl) {
  const [playing, setPlaying] = useState(false);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const handleProgress = state => {
    setPlayedSeconds(state.playedSeconds);
  };
  useEffect(() => {
    setPlaying(false); // Reset when URL changes
  }, [videoUrl]);
  return { playing, setPlaying, playedSeconds, handleProgress };
}
export default useVideoPlayback;