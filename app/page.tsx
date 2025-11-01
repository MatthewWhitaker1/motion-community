import Header from "@/components/header";
import Waveform from "@/components/Waveform";

const audioUrl = new URL('localhost:3000')

export default function Home() {
  return (
    <div>
      <Header />
      <Waveform audio={audioUrl} />
    </div>
  );
}
