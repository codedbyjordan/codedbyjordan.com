<script lang="ts">
  export let src: string;
  export let alt: string;
  export let width: number;
  export let height: number;

  let isImageModalOpen = false;
</script>

<button on:click={() => (isImageModalOpen = true)}>
  <img {src} {alt} {width} {height} />
</button>

<div
  class={`fixed inset-0 bg-black/80 ${isImageModalOpen ? "flex" : "hidden"}`}
>
  <button
    class="w-full h-full flex flex-col justify-center items-center gap-2"
    on:click={() => (isImageModalOpen = false)}
    ><img {src} {alt} width={width * 2} height={height * 2} /><span
      class="underline text-white">close</span
    ></button
  >
</div>
