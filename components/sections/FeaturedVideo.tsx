export default function FeaturedVideo() {
  return (
    <div className="px-[3.3vw] pb-16">
      <div
        className="relative w-full rounded-lg overflow-hidden"
        style={{ paddingBottom: "56.25%", minHeight: "400px" }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/NMmk6jk7pko?autoplay=1&mute=1&rel=0&loop=1&playlist=NMmk6jk7pko"
          title="LangChain: Engineer reliable agents"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
