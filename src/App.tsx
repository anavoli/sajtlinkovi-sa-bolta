import React from 'react';
import { Github, Instagram, Linkedin, Mail, Twitter, Video, Music, Image, Link, Book, Headphones, Code, ShoppingBag } from 'lucide-react';

const getIconComponent = (iconName: string) => {
  const icons: { [key: string]: React.ReactNode } = {
    video: <Video className="w-5 h-5" />,
    music: <Music className="w-5 h-5" />,
    image: <Image className="w-5 h-5" />,
    link: <Link className="w-5 h-5" />,
    book: <Book className="w-5 h-5" />,
    podcast: <Headphones className="w-5 h-5" />,
    code: <Code className="w-5 h-5" />,
    shop: <ShoppingBag className="w-5 h-5" />
  };
  return icons[iconName] || <Link className="w-5 h-5" />;
};

function App() {
  const linkGroups = [
    {
      groupName: "Video Sadržaj",
      icon: "video",
      links: [
        { text: "YouTube Kanal", url: "#" },
        { text: "Twitch Stream", url: "#" }
      ]
    },
    {
      groupName: "Audio",
      icon: "music",
      links: [
        { text: "Spotify Playlist", url: "#" },
        { text: "Podcast", url: "#" }
      ]
    },
    {
      groupName: "Portfolio",
      icon: "image",
      links: [
        { text: "Galerija Radova", url: "#" },
        { text: "Projekti", url: "#" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-blue-600 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <img
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400"
            alt="Profilna slika"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-xl"
          />
          <h1 className="text-4xl font-bold text-white mb-2">Vaše Ime</h1>
          <p className="text-purple-100">Dobrodošli na moju stranicu sa linkovima</p>
        </div>

        <div className="space-y-8">
          {linkGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 p-2 rounded-lg text-white">
                  {getIconComponent(group.icon)}
                </div>
                <h2 className="text-xl font-semibold text-white">{group.groupName}</h2>
              </div>
              <div className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    className="block py-3 px-4 bg-white rounded-xl text-center font-semibold text-purple-700 transform transition-all hover:scale-105 hover:shadow-lg"
                    data-netlify-cms-editable="true"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-6 mt-12">
          <SocialLink icon={<Twitter className="w-6 h-6" />} href="#" />
          <SocialLink icon={<Instagram className="w-6 h-6" />} href="#" />
          <SocialLink icon={<Linkedin className="w-6 h-6" />} href="#" />
          <SocialLink icon={<Github className="w-6 h-6" />} href="#" />
          <SocialLink icon={<Mail className="w-6 h-6" />} href="#" />
        </div>
      </div>
    </div>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="text-white hover:text-purple-200 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

export default App;