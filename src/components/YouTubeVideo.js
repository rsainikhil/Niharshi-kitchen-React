import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YouTubeVideo = () => {
  const [videos, setVideos] = useState([]);
  const [videosJson, setVideosJson] = useState([]);

  useEffect(() => {
    // Your YouTube Data API Key
    const apiKey = 'AIzaSyBl0lVJgINNU9iYSFhl8BOnN_epifdHZgs';

    // Your YouTube playlist ID or channel ID
    const playlistId = 'UCpT9kL2E6o7DII0IhtBeJlg';

    // Fetch videos from the YouTube Data API
    axios
      .get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
        params: {
          part: 'snippet',
          maxResults: 10, // Adjust as needed
          playlistId: playlistId,
          key: apiKey,
        },
      })
      .then((response) => {
        setVideos(response.data.items);
        // Convert fetched data to JSON format and store it in videosJson state
        const videosData = response.data.items.map((video) => ({
          title: video.snippet.title,
          description: video.snippet.description,
          videoId: video.snippet.resourceId.videoId,
        }));
        setVideosJson(videosData);
      })
      .catch((error) => {
        console.error('Error fetching videos:', error);
      });
  }, []);

  return (
    <div>
      <h1>YouTube Videos</h1>
      <div className="video-list">
        {videosJson.map((video, index) => (
          <div key={index} className="video-item">
            <h2>{video.title}</h2>
            <p>{video.description}</p>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeVideo;
