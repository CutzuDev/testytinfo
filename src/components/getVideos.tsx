import Image from "next/image";
import { Client } from "youtubei";

const youtube = new Client({ youtubeClientOptions: { hl: "en", gl: "US" } });

async function GetVideos() {
  const result = await youtube.getVideo("E6W83SpUEzU");
  result?.channel.name;

  function Container({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex justify-center items-center gap-5">{children}</div>
    );
  }

  return (
    <div className="flex justify-center items-center flex-col gap-2.5">
      <Container>
        <span>Channel</span>
        <span>{result?.channel.subscriberCount}</span>
      </Container>
      <Container>
        <span>Views:</span>
        <span>{result?.viewCount}</span>
      </Container>
      <Container>
        <span>Likes:</span>
        <span>{result?.likeCount}</span>
      </Container>
    </div>
  );
}

export default GetVideos;
