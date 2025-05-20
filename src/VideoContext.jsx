import { createContext, useState } from 'react';

export const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [videoSettings, setVideoSettings] = useState({
    autoPlay: false,
    volume: 0.5,
  });

  const toggleAutoPlay = () =>
    setVideoSettings({ ...videoSettings, autoPlay: !videoSettings.autoPlay });

  const updateVolume = volume =>
    setVideoSettings({ ...videoSettings, volume });

  return (
    <VideoContext.Provider value={{ videoSettings, toggleAutoPlay, updateVolume }}>
      {children}
    </VideoContext.Provider>
  );
}