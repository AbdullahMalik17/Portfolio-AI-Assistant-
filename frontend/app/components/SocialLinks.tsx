'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaFilePdf } from 'react-icons/fa';

const SocialLinks = ({ className = '' }: { className?: string }) => {
    const links = [
        {
            name: 'GitHub',
            icon: <FaGithub className="w-6 h-6" />,
            url: 'https://github.com/AbdullahMalik17',
            color: 'hover:text-gray-800 dark:hover:text-white',
            ariaLabel: "Visit Abdullah Malik's GitHub profile",
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin className="w-6 h-6" />,
            url: 'https://www.linkedin.com/in/muhammad-abdullah-athar',
            color: 'hover:text-blue-600',
            ariaLabel: "Visit Abdullah Malik's LinkedIn profile",
        },
        {
            name: 'Twitter',
            icon: <FaTwitter className="w-6 h-6" />,
            url: 'https://x.com/Ab4695Athar?t=nqRO0biMuBDrTIuzZOHq8A&s=08',
            color: 'hover:text-blue-400',
            ariaLabel: "Visit Abdullah Malik's Twitter profile",
        },
        {
            name: 'Email',
            icon: <FaEnvelope className="w-6 h-6" />,
            url: 'mailto:muhammadabdullah51700@gmail.com',
            color: 'hover:text-red-500',
            ariaLabel: "Send an email to Abdullah Malik",
        },
        {
            name: 'Resume',
            icon: <FaFilePdf className="w-6 h-6" />,
            url: '/Abdullah_resume.pdf',
            color: 'hover:text-red-600',
            ariaLabel: "View Abdullah Malik's Resume",
        },
    ];

    return (
        <div className={`flex items-center gap-6 ${className}`}>
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-500 dark:text-gray-400 transition-all duration-300 transform hover:scale-110 ${link.color}`}
                    aria-label={link.ariaLabel || `Visit Abdullah Malik's ${link.name} profile`}
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
