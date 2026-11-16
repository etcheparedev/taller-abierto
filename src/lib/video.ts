/** Returns the YouTube video id of a URL, or null when it is not a YouTube link. */
export function youtubeId(link: string): string | null {
  const url = new URL(link);
  const host = url.hostname.replace(/^(www|m)\./, '');

  let id: string | null = null;
  if (host === 'youtu.be') id = url.pathname.slice(1);
  else if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
    // /watch?v=ID, /shorts/ID, /embed/ID, /live/ID
    id = url.searchParams.get('v') ?? url.pathname.match(/^\/(?:shorts|embed|live)\/([^/]+)/)?.[1] ?? null;
  }
  return id && /^[\w-]{11}$/.test(id) ? id : null;
}
