var f = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];

export function watermark() {
  location.hash = f[Math.floor((Date.now() / 100) % f.length)];

  setTimeout(watermark, 50);
}
