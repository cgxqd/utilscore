import utilscore from "utilscore";
export default function fetchReleaseTag() {
  const tagLineParagragh = document.querySelector(
    "div.VPHero.has-image.VPHomeHero > div > div.main > h1.name"
  );
  const docsReleaseTagSpan = document.createElement("samp");
  docsReleaseTagSpan.classList.add("docs-github-release-tag");
  docsReleaseTagSpan.innerText = utilscore.version;
  tagLineParagragh?.appendChild(docsReleaseTagSpan);
}
