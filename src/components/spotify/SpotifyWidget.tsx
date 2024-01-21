import { Show, createResource } from "solid-js";
import type { NowPlayingResponse } from "../../pages/api/spotify/now-playing";
import { AnimatedSoundbars } from "./AnimatedSoundbars.tsx";

async function getNowPlaying(): Promise<NowPlayingResponse> {
  const nowPlayingResponse = await fetch(
    import.meta.env.PUBLIC_API_URL + "/api/spotify/now-playing"
  );

  if (!nowPlayingResponse.ok) {
    throw new Error("Failed to fetch now playing data");
  }

  const nowPlaying = await nowPlayingResponse.json();
  return nowPlaying;
}

export function SpotifyWidget() {
  const [nowPlaying] = createResource(getNowPlaying);
  const isOnline = nowPlaying()?.isOnline;
  return (
    <div class="border border-white rounded-lg w-full px-3 py-3 flex items-center justify-between h-[66px] lg:h-[74px]">
      <div class="flex items-center gap-4">
        <Show
          when={isOnline}
          fallback={
            <>
              <img
                src="/spotify-icon.png"
                alt="Album Art"
                width={48}
                height={48}
                class="rounded-md w-8 h-8 lg:w-10 lg:h-10"
              />
              <span>Currently offline</span>
            </>
          }
        >
          <>
            <img
              src={nowPlaying()?.albumArt || ""}
              alt="Album Art"
              width={48}
              height={48}
              class="rounded-md w-8 h-8 lg:w-12 lg:h-12"
            />
            <div class="flex flex-col text-sm lg:text-base overflow-hidden">
              <span class="line-clamp-1">
                Now Playing: {nowPlaying()?.name}
              </span>
              <span class="text-gray-400 line-clamp-1">
                by {nowPlaying()?.artist}
              </span>
            </div>
          </>
        </Show>
      </div>
      <Show
        when={isOnline}
        fallback={<span class="rotate-90 mr-2">:&lpar;</span>}
      >
        <AnimatedSoundbars />
      </Show>
    </div>
  );
}
