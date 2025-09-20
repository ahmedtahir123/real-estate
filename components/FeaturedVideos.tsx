import { getFeaturedVideos } from '@/lib/propertyData';
import { Youtube } from 'lucide-react';

function getYouTubeVideoId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);

  if (match && match[2].length === 11) {
    return match[2];
  } else {
    return null;
  }
}

export default async function FeaturedVideos() {
  const videos = await getFeaturedVideos();

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
