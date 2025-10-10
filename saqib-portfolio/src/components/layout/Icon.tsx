// src/components/Icon.tsx
import type { JSX } from "solid-js";
import { icon } from "@fortawesome/fontawesome-svg-core";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

// Import the icons you need
import { faUser, faHome, faCog, faMoon, faLandmark, faSchool, faBriefcase, faHistory } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faGitlab, faGoogle, faWordpress, faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

// Map icon names to Font Awesome definitions
const iconMap: Record<string, IconDefinition> = {
  user: faUser,
  home: faHome,
  settings: faCog,
  moon: faMoon,
  landmark: faLandmark,
  briefcase: faBriefcase,
  school: faSchool,
  history: faHistory,
  github: faGithub,
  linkedin: faLinkedinIn,
  gitlab: faGitlab,
  google: faGoogle,
  wordpress: faWordpress,
  facebook: faFacebookF,
  twitter: faTwitter,
  instagram: faInstagram,
};

interface IconProps {
  name: keyof typeof iconMap;
  class?: string; // allow Tailwind classes
}

export default function Icon(props: IconProps): JSX.Element {
  const faIcon = icon(iconMap[props.name]);
  if (!faIcon) return <span />;

  return (
    <span
      class={props.class}
      innerHTML={faIcon.html[0]} // inject SVG string
    />
  );
}