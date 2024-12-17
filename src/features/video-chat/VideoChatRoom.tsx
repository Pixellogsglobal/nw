import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AgoraRTC, { IAgoraRTCClient, ICameraVideoTrack, IMicrophoneAudioTrack } from 'agora-rtc-react';
import { Camera, Mic, MicOff, Video, VideoOff, Phone } from 'lucide-react';

interface VideoChatRoomProps {
  channelName: string;
  token: string;
  uid: number;
  onLeave: () => void;
}

const VideoChatRoom: React.FC<VideoChatRoomProps> = ({ channelName, token, uid, onLeave }) => {
  const [client, setClient] = useState<IAgoraRTCClient | null>(null);
  const [localVideoTrack, setLocalVideoTrack] = useState<ICameraVideoTrack | null>(null);
  const [localAudioTrack, setLocalAudioTrack] = useState<IMicrophoneAudioTrack | null>(null);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);

  useEffect(() => {
    const init = async () => {
      const agoraClient = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
      
      try {
        await agoraClient.join(process.env.VITE_AGORA_APP_ID!, channelName, token, uid);
        
        const videoTrack = await AgoraRTC.createCameraVideoTrack();
        const audioTrack = await AgoraRTC.createMicrophoneAudioTrack();
        
        await agoraClient.publish([videoTrack, audioTrack]);
        
        setClient(agoraClient);
        setLocalVideoTrack(videoTrack);
        setLocalAudioTrack(audioTrack);
      } catch (error) {
        console.error('Error joining video chat:', error);
      }
    };

    init();

    return () => {
      client?.leave();
      localVideoTrack?.close();
      localAudioTrack?.close();
    };
  }, [channelName, token, uid]);

  const toggleVideo = async () => {
    if (localVideoTrack) {
      if (isVideoEnabled) {
        await localVideoTrack.setEnabled(false);
      } else {
        await localVideoTrack.setEnabled(true);
      }
      setIsVideoEnabled(!isVideoEnabled);
    }
  };

  const toggleAudio = async () => {
    if (localAudioTrack) {
      if (isAudioEnabled) {
        await localAudioTrack.setEnabled(false);
      } else {
        await localAudioTrack.setEnabled(true);
      }
      setIsAudioEnabled(!isAudioEnabled);
    }
  };

  const handleLeave = async () => {
    if (client) {
      await client.leave();
      client.removeAllListeners();
      if (localVideoTrack) {
        localVideoTrack.close();
      }
      if (localAudioTrack) {
        localAudioTrack.close();
      }
      onLeave();
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Video Container */}
      <div className="relative h-full">
        <div id="local-video" className="w-full h-full" />
        
        {/* Controls Overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
            flex items-center gap-4 px-6 py-4 bg-black/50 backdrop-blur-lg rounded-full"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleVideo}
            className={`p-4 rounded-full ${
              isVideoEnabled ? 'bg-gray-700' : 'bg-red-500'
            }`}
          >
            {isVideoEnabled ? (
              <Video className="w-6 h-6 text-white" />
            ) : (
              <VideoOff className="w-6 h-6 text-white" />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleAudio}
            className={`p-4 rounded-full ${
              isAudioEnabled ? 'bg-gray-700' : 'bg-red-500'
            }`}
          >
            {isAudioEnabled ? (
              <Mic className="w-6 h-6 text-white" />
            ) : (
              <MicOff className="w-6 h-6 text-white" />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLeave}
            className="p-4 bg-red-500 rounded-full"
          >
            <Phone className="w-6 h-6 text-white" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoChatRoom;