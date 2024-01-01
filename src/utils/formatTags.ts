export function formatTags(tags: string) {
  return tags.split(",").map((tag) => `[${tag}] `);
}
