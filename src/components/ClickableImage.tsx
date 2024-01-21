import { createSignal } from "solid-js";

type ClickableImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function ClickableImage({
  src,
  alt,
  width,
  height,
}: ClickableImageProps) {
  const [isImageModalOpen, setIsImageModalOpen] = createSignal(false);

  return (
    <>
      <button onClick={() => setIsImageModalOpen(true)}>
        <img src={src} alt={alt} width={width} height={height} />
      </button>

      <div
        class={`fixed inset-0 bg-black/80 ${
          isImageModalOpen() ? "flex" : "hidden"
        }`}
      >
        <button
          class="w-full h-full flex flex-col justify-center items-center gap-2"
          onClick={() => setIsImageModalOpen(false)}
        >
          <img src={src} alt={alt} width={width * 2} height={height * 2} />
          <span class="underline text-white">close</span>
        </button>
      </div>
    </>
  );
}
