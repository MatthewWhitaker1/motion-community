import { AudioUpload } from '@/components/AudioUpload'
import { UploadButton } from "@/components/buttons/UploadButton";
import Header from "@/components/header";
import Waveform from "@/components/Waveform";

const audioUrl = new URL('https://matthewwhitaker1.github.io/piano.mp3').toString();

export default function Home() {
  return (
    <div>
      <Header />
      <Waveform audio={audioUrl} />
      <form className="container mx-auto py-8">
        <AudioUpload />
      </form>
    </div>
  );
}