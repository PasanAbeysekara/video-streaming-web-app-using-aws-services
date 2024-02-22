import React from 'react';

const VideoThumbnail = ({ video }) => {
    return (
        <div className="video-thumbnail">
            <img src={video.thumbnailUrl} alt={video.name} />
            <h4>{video.name}</h4>
            <p>Uploaded on: {video.date}</p>
            <p>Views: {video.views}</p>
        </div>
    );
};

export default VideoThumbnail;
