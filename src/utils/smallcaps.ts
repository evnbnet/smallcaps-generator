// src/utils/smallcaps.ts
export const smallCapsMap: Record<string, string> = {
  a: "ᴀ",
  b: "ʙ",
  c: "ᴄ",
  d: "ᴅ",
  e: "ᴇ",
  f: "ꜰ",
  g: "ɢ",
  h: "ʜ",
  i: "ɪ",
  j: "ᴊ",
  k: "ᴋ",
  l: "ʟ",
  m: "ᴍ",
  n: "ɴ",
  o: "ᴏ",
  p: "ᴘ",
  q: "ǫ",
  r: "ʀ",
  s: "ꜱ",
  t: "ᴛ",
  u: "ᴜ",
  v: "ᴠ",
  w: "ᴡ",
  x: "x",
  y: "ʏ",
  z: "ᴢ",
  "0": "𝟢",
  "1": "𝟣",
  "2": "𝟤",
  "3": "𝟥",
  "4": "𝟦",
  "5": "𝟧",
  "6": "𝟨",
  "7": "𝟩",
  "8": "𝟪",
  "9": "𝟫",
};

export function convertToSmallCaps(text: string): string {
  let result = '';
  for (const char of text) {
    const lower = char.toLowerCase();
    result += smallCapsMap[lower] ?? char;
  }
  return result;
}