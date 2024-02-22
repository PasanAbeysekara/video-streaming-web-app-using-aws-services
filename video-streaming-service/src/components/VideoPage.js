import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const VideoPage = ({ videos }) => {
    let { videoId } = useParams();
    const video = videos.find(video => video.id.toString() === videoId);
    const [likes, setLikes] = useState(video ? video.likes : 0);
    const [comments, setComments] = useState(video ? video.comments : []);

    const [newComment, setNewComment] = useState('');

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        const commentId = comments.length + 1; // Simple ID generation strategy
        setComments([...comments, { id: commentId, text: newComment, author: "Anonymous" }]);
        setNewComment(''); // Reset input field
    };

    if (!video) {
        return <div>Video not found</div>;
    }

    const handleLike = () => {
        setLikes(likes + 1);
    };

    if (!video) {
        return <div>Video not found</div>;
    }

    return (
        <div className="video-page">
            <div className="video-container">
                <iframe
                    width="560"
                    height="315"
                    src={video.videoUrl}
                    title={video.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <h2>{video.name}</h2>
            <p>{video.views} views</p>
            <p>Uploaded on: {video.date}</p>
            <button onClick={handleLike}>👍 Like {likes}</button>
            <div className="comments-section">
                <h3>Comments</h3>
                {comments.map(comment => (
                    <div key={comment.id} className="comment">
                        <strong>{comment.author}</strong>: {comment.text}
                    </div>
                ))}
            </div>

            <form onSubmit={handleCommentSubmit}>
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                />
                <button type="submit">Submit</button>
            </form>

        </div>
    );
};

export default VideoPage;
