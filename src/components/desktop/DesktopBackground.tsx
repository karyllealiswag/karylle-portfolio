import Image from "next/image";

const BACKGROUND_IMAGE_SRC: string | null = "/background_2.png";

export function DesktopBackground() {
  return (
    <>
      {BACKGROUND_IMAGE_SRC ? (
        <Image
          src={BACKGROUND_IMAGE_SRC}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-20"
          style={{ backgroundColor: "#008080" }}
        />
      )}
      <div aria-hidden="true" className="fixed inset-0 -z-10 bg-black/10" />
    </>
  );
}
