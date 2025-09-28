// src/components/Icon.tsx
import { JSX } from "solid-js";
import { icon, IconDefinition } from "@fortawesome/fontawesome-svg-core";

// Import the icons you need
import { faUser, faHome, faCog } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Map icon names to Font Awesome definitions
const iconMap: Record<string, IconDefinition> = {
  user: faUser,
  home: faHome,
  settings: faCog,
  github: faGithub,
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
