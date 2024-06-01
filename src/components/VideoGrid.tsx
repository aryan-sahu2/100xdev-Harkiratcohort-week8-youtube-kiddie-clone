import { VideoCard } from "./VideoCard";

export function VideoGrid() {
  const videoGrid = [
    {
      title: "How to learn to sleep in metro",
      thumbnail: "/thumbnailimg.jpg",
      logo: "/logo.png",
      author: "Aryan Sahu",
      views: "12Mn",
      timeStamp: "12/Mar/2024",
    },
    {
      title: "How to learn to sing in metro",
      thumbnail: "/thumbnailimg.jpg",
      logo: "/logo.png",
      author: "Aryan Sahu",
      views: "12Mn",
      timeStamp: "12/Mar/2024",
    },
    {
      title: "How to learn to scroll in metro",
      thumbnail: "/thumbnailimg.jpg",
      logo: "/logo.png",
      author: "Aryan Sahu",
      views: "12Mn",
      timeStamp: "12/Mar/2024",
    },
    {
      title: "How to learn to play in metro",
      thumbnail: "/thumbnailimg.jpg",
      logo: "/logo.png",
      author: "Aryan Sahu",
      views: "12Mn",
      timeStamp: "12/Mar/2024",
    },
    {
        title: "How to learn to sleep in metro",
        thumbnail: "/thumbnailimg.jpg",
        logo: "/logo.png",
        author: "Aryan Sahu",
        views: "12Mn",
        timeStamp: "12/Mar/2024",
      },
      {
        title: "How to learn to sing in metro",
        thumbnail: "/thumbnailimg.jpg",
        logo: "/logo.png",
        author: "Aryan Sahu",
        views: "12Mn",
        timeStamp: "12/Mar/2024",
      },
      {
        title: "How to learn to scroll in metro",
        thumbnail: "/thumbnailimg.jpg",
        logo: "/logo.png",
        author: "Aryan Sahu",
        views: "12Mn",
        timeStamp: "12/Mar/2024",
      },
      {
        title: "How to learn to play in metro",
        thumbnail: "/thumbnailimg.jpg",
        logo: "/logo.png",
        author: "Aryan Sahu",
        views: "12Mn",
        timeStamp: "12/Mar/2024",
      },
      {
        title: "How to learn to sleep in metro",
        thumbnail: "/thumbnailimg.jpg",
        logo: "/logo.png",
        author: "Aryan Sahu",
        views: "12Mn",
        timeStamp: "12/Mar/2024",
      },
      {
        title: "How to learn to sing in metro",
        thumbnail: "/thumbnailimg.jpg",
        logo: "/logo.png",
        author: "Aryan Sahu",
        views: "12Mn",
        timeStamp: "12/Mar/2024",
      },
      {
        title: "How to learn to scroll in metro",
        thumbnail: "/thumbnailimg.jpg",
        logo: "/logo.png",
        author: "Aryan Sahu",
        views: "12Mn",
        timeStamp: "12/Mar/2024",
      },
      {
        title: "How to learn to play in metro",
        thumbnail: "/thumbnailimg.jpg",
        logo: "/logo.png",
        author: "Aryan Sahu",
        views: "12Mn",
        timeStamp: "12/Mar/2024",
      },
      {
        title: "How to learn to sleep in metro",
        thumbnail: "/thumbnailimg.jpg",
        logo: "/logo.png",
        author: "Aryan Sahu",
        views: "12Mn",
        timeStamp: "12/Mar/2024",
      },
      {
        title: "How to learn to sing in metro",
        thumbnail: "/thumbnailimg.jpg",
        logo: "/logo.png",
        author: "Aryan Sahu",
        views: "12Mn",
        timeStamp: "12/Mar/2024",
      },
      {
        title: "How to learn to scroll in metro",
        thumbnail: "/thumbnailimg.jpg",
        logo: "/logo.png",
        author: "Aryan Sahu",
        views: "12Mn",
        timeStamp: "12/Mar/2024",
      },
      {
        title: "How to learn to play in metro",
        thumbnail: "/thumbnailimg.jpg",
        logo: "/logo.png",
        author: "Aryan Sahu",
        views: "12Mn",
        timeStamp: "12/Mar/2024",
      },
  ];
  return (
    <div className="grid grid-cols-8 ">
      {videoGrid.map((e, i) => (
        <div className="col-span-8 sm:col-span-6 md:col-span-4 xl:col-span-2   mb-4 mx-4  " key={i}> 
          <VideoCard 
            title={e.title}
            thumbnail={e.thumbnail}
            logo={e.logo}
            author={e.author}
            views={e.views}
            timeStamp={e.timeStamp}
          ></VideoCard>
        </div>
      ))}
    </div>
  );
}
