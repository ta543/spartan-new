const svgToDataUri = (svg: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

const avatarPalette = [
  ["#dbeafe", "#1d4ed8"],
  ["#dcfce7", "#15803d"],
  ["#fae8ff", "#a21caf"],
  ["#fef3c7", "#b45309"],
  ["#fee2e2", "#b91c1c"],
  ["#e0f2fe", "#0369a1"],
] as const;

const pickPalette = (seed: string) => {
  const index = [...seed].reduce((total, char) => total + char.charCodeAt(0), 0) % avatarPalette.length;
  return avatarPalette[index];
};

export const commentAvatarSrc = (name: string) => {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
  const [background, foreground] = pickPalette(name);

  return svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" role="img" aria-label="${name}">
      <rect width="80" height="80" rx="8" fill="${background}" />
      <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" fill="${foreground}" font-family="Arial, sans-serif" font-size="28" font-weight="700">${initials}</text>
    </svg>
  `);
};

export const commentLikeIconSrc = svgToDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="img" aria-label="Like icon">
    <path fill="#1877f2" d="M6.8 6.2V2.8c0-.9.7-1.8 1.6-1.8.3 0 .6.1.8.4l.5.6c.4.5.6 1.1.6 1.8v1.4H13c.8 0 1.4.7 1.3 1.5l-.6 5.5c-.1.7-.6 1.2-1.3 1.2H6.8c-.4 0-.8-.2-1-.5L4.5 11V6.9l1.2-.9c.7-.5 1.1-1.1 1.1-1.8Z"/>
    <path fill="#1877f2" d="M2 6h1.5c.3 0 .5.2.5.5v6c0 .3-.2.5-.5.5H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"/>
  </svg>
`);
