// sizes for media queries
const sizes = {
  giant: 1080,
  desktop: 922,
  tablet: 768,
  phone: 576
};

export const baseURL = "http://localhost:3000";

export const fontSize = {
  smallFontSize: "9px",
  normalFontSize: "12px",
  largeFontSize: "15px"
};

export const websiteTitle = "👀 Movisualization";

export const headerHeight = "6rem";

export const color = {
  bgColor: "#dae3f7",
  fontColor: "#121212",
  mainColor: "skyblue",
  html: "#f16524",
  css: "#1da1f2",
  js: "#fb9e21",
  react: "#61dbfb"
};

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media: any = {
  custom: customMediaQuery,
  desktop: customMediaQuery(sizes.desktop),
  tablet: customMediaQuery(sizes.tablet),
  phone: customMediaQuery(sizes.phone)
};
