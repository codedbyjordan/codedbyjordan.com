import type { APIRoute } from "astro";

const clientId = import.meta.env.SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = import.meta.env.SPOTIFY_REFRESH_TOKEN;

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async (): Promise<string> => {
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const params = "grant_type=refresh_token&refresh_token=" + refreshToken;
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });
  const { access_token: accessToken } = await response.json();
  return accessToken;
};

const getNowPlaying = async () => {
  const accessToken = await getAccessToken();

  const res = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const json = await res.json();
  const {
    item: { name, artists, album },
  } = json;
  console.log(json);

  const nowPlaying = {
    name,
    artist: artists[0].name,
    albumArt: album.images[0].url,
  };

  return nowPlaying;
};

export const GET: APIRoute = async () => {
  const nowPlaying = await getNowPlaying();

  return new Response(JSON.stringify(nowPlaying));
};
