import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import VideoThumbnail from './components/VideoThumbnail';
import VideoPage from './components/VideoPage';
import './App.css';

function App() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/videos');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setVideos(data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchVideos();
    }, []);

    return (
        <Router>
            <div className="App">
                <header>
                    <h1><Link to="/">Video Hosting Site</Link></h1>
                </header>
                <Routes>
                    <Route path="/" element={
                        <div className="video-list">
                            {videos.map(video => (
                                <Link key={video.id} to={`/video/${video.id}`}>
                                    <VideoThumbnail video={video} />
                                </Link>
                            ))}
                        </div>
                    } />
                    <Route path="/video/:videoId" element={<VideoPage videos={videos} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;



// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <h1>Welcome to my streaming website</h1>
//       <video width="700px" height="400px" controls>
//         <source src="https://du8g3gb97v8rn.cloudfront.net/Some%20of%20the%20%E2%80%9Coooh%E2%80%9D%20UFC%20moments%20from%20the%20past.mp4"/>
//       </video>
//     </div>
//   );
// }
//
// export default App;
// https://du8g3gb97v8rn.cloudfront.net/The%20TRUTH%20About%20Failing.mp4
//     https://du8g3gb97v8rn.cloudfront.net/That's%20Where%20You%20Find%20Yourself.mp4
//         https://du8g3gb97v8rn.cloudfront.net/Richard%20Ramirez%20Maury%20Show%20August%2020%201991.mp4
//             https://du8g3gb97v8rn.cloudfront.net/how%20to%20flirt%20with%20women.mp4
//                 https://du8g3gb97v8rn.cloudfront.net/Before%20You%20Chase%20Winning,%20Watch%20This.mp4
//                     https://du8g3gb97v8rn.cloudfront.net/Shawn%20Mendes%20guitarcover.mp4
//                         https://du8g3gb97v8rn.cloudfront.net/Relive%20an%20unbelievable%20final%20two%20overs%20%20Australia%20v%20Sri%20Lanka%20%20T20I%20Series.mp4
//                             https://du8g3gb97v8rn.cloudfront.net/BEST%20UFC%20MOMENTS.mp4
//
//                                 https://du8g3gb97v8rn.cloudfront.net/The%20TRUTH%20About%20Failing.jpg
//                                     https://du8g3gb97v8rn.cloudfront.net/That's%20Where%20You%20Find%20Yourself.jpg
//                                         https://du8g3gb97v8rn.cloudfront.net/Richard%20Ramirez%20Maury%20Show%20August%2020%201991.jpg
//                                             https://du8g3gb97v8rn.cloudfront.net/how%20to%20flirt%20with%20women.jpg
//                                                 https://du8g3gb97v8rn.cloudfront.net/Before%20You%20Chase%20Winning,%20Watch%20This.jpg
//                                                     https://du8g3gb97v8rn.cloudfront.net/Shawn%20Mendes%20guitarcover.jpg
//                                                         https://du8g3gb97v8rn.cloudfront.net/Relive%20an%20unbelievable%20final%20two%20overs%20%20Australia%20v%20Sri%20Lanka%20%20T20I%20Series.jpg
//                                                             https://du8g3gb97v8rn.cloudfront.net/BEST%20UFC%20MOMENTS.jpg
//
