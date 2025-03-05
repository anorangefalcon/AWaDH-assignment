import { LINKS } from "../constants";

export default function AdditionalLinks() {
  return (
    <div className="additional-links frosted-glass">
      <a href={LINKS["github"]} target="_blank">
        Source Code
      </a>
      <a href={LINKS["portfolio"]} target="_blank">
        Portfolio
      </a>
    </div>
  );
}
