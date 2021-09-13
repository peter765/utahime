export function shuffle(arr: Array<Object>) {
  arr.sort(() => Math.random() - 0.5);
}