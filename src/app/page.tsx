import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-10">
        <h1 className="font-bold text-5xl">League of Legends 사전</h1>
        <span>League of Legends에 관한 정보들을 탐색할 수 있습니다.</span>
      </div>
      <div>
        <Image
          src={"/images/frontBanner.jpg"}
          alt="front image"
          width={700}
          height={700}
        />
      </div>
    </section>
  );
}
