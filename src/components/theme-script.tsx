import Script from "next/script";

const THEME_INIT = `
(function () {
  try {
    if (localStorage.getItem("theme") === "light") {
      document.documentElement.classList.remove("dark");
    }
  } catch (e) {}
})();
`;

export function ThemeScript() {
  return (
    <Script
      id="theme-init"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: THEME_INIT }}
    />
  );
}
