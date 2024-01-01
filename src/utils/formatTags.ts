export function formatTags(tags: string) {
  tags.split(",").map((tag) => `[${tag}] `);
}
