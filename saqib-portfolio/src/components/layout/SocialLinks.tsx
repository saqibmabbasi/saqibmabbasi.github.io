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

// Map social networks to their brand colors
const colorMap: Record<string, string> = {
  'fab fa-linkedin-in': 'bg-blue-700',
  'fab fa-github': 'bg-gray-900',
  'fa-brands fa-gitlab': 'bg-orange-600',
  'fab fa-google': 'bg-red-500',
  'fa-brands fa-wordpress': 'bg-blue-900',
  'fab fa-facebook-f': 'bg-blue-600',
  'fab fa-twitter': 'bg-blue-400',
  'fab fa-instagram': 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500'
};

export default function SocialLinks(){
    return (
        <>
            <div class="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4">
                {sociallinks.map(p => (
                    <A 
                        href={p.url} 
                        title={p.title}
                        class="hover:opacity-80 transition-opacity flex items-center justify-center"
                    >
                        <div class={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center ${colorMap[p.icon] || 'bg-gray-500'}`}>
                            <Icon name={iconMap[p.icon] as any} class="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                    </A>
                ))}
            </div>
        </>
    )
}