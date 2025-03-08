export default function HomeVideoPage() {
  return (
    <video
      autoPlay
      muted
      playsInline
      loop
      className="w-full max-w-[53rem] h-[30rem] object-fill rounded-base"
    >
      <source
        src="https://res.cloudinary.com/dyzqa6uuu/video/upload/c_scale,h_480,q_auto:eco,w_854/v1741258207/ffapfsst6gsx1p97zitg.mp4"
        type="video/mp4"
      />
      <track kind="captions" src="סרטון תדמית על הארגון שעה של פוקוס" />
    </video>
  );
}
