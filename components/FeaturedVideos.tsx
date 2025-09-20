import { Youtube } from 'lucide-react';

function getYouTubeVideoId(url: string): string | null {
  if (!url) return null;
  let videoId = null;
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname === 'youtu.be') {
      videoId = urlObj.pathname.slice(1);
    } else if (urlObj.hostname.includes('youtube.com')) {
      if (urlObj.pathname.startsWith('/embed/')) {
        videoId = urlObj.pathname.split('/')[2];
      } else {
        videoId = urlObj.searchParams.get('v');
      }
    }
  } catch (error) {
    // Fallback for non-URL strings or invalid URLs
    const patterns = [
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|)([\w-]{11})/,
      /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([\w-]{11})/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        videoId = match[1];
        break;
      }
    }
  }

  // Final check on the extracted ID format
  if (videoId && /^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
    return videoId;
  }
  
  return null;
}

export default async function FeaturedVideos() {
  const videos = [
    {
      id: '1',
      youtubeUrl: 'https://www.youtube.com/watch?v=F55UtgXeIDs',
    },
    {
      id: '2',
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    }
  ];

  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Videos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our latest property tours and market updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => {
            const videoId = getYouTubeVideoId(video.youtubeUrl);
            if (!videoId) return null;

            return (
              <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="Featured Property Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
