import { A } from "@solidjs/router";

import sociallinks from '../../data-files/social-network.json';
import Icon from './Icon';

// Map CSS class names to icon names for our Icon component
const iconMap: Record<string, string> = {
  'fab fa-linkedin-in': 'linkedin',
  'fab fa-github': 'github',
  'fa-brands fa-gitlab': 'gitlab',
  'fab fa-google': 'google',
  'fa-brands fa-wordpress': 'wordpress',
  'fab fa-facebook-f': 'facebook',
  'fab fa-twitter': 'twitter',
  'fab fa-instagram': 'instagram'
};

export default function SocialLinks(){
    return (
        <>
            <div class="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4">
                {sociallinks.map(p => (
                    <A 
                        href={p.url} 
                        title={p.title}
                        class="bg-blue-100 dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-gray-600 p-2 md:p-3 rounded-full transition-colors flex items-center justify-center"
                    >
                        <Icon name={iconMap[p.icon] as any} class="w-5 h-5 md:w-6 md:h-6" />
                    </A>
                ))}
            </div>
        </>
    )
}