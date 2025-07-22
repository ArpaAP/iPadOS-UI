import wallpaper from "@/assets/wallpaper.jpeg";

interface App {
  id: string;
  name: string;
  icon: string;
}

interface HomeScreenProps {
  apps?: App[];
}

export function HomeScreen({ apps }: HomeScreenProps) {
  // 기본 앱들 (예시)
  const defaultApps: App[] = [
    { id: "1", name: "Settings", icon: "⚙️" },
    { id: "2", name: "Calendar", icon: "📅" },
    { id: "3", name: "Notes", icon: "📝" },
    { id: "4", name: "Calculator", icon: "🔢" },
    { id: "5", name: "Camera", icon: "📷" },
    { id: "6", name: "Weather", icon: "🌤️" },
    { id: "7", name: "Music", icon: "🎵" },
    { id: "8", name: "Maps", icon: "🗺️" },
    { id: "9", name: "Files", icon: "📁" },
    { id: "10", name: "Clock", icon: "⏰" },
    { id: "11", name: "Contacts", icon: "👥" },
    { id: "12", name: "FaceTime", icon: "📹" },
  ];

  const displayApps = apps || defaultApps;

  return (
    <div
      className="p-12 h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div className="grid grid-cols-6 gap-8 h-full content-start">
        {displayApps.map((app) => (
          <div key={app.id} className="flex flex-col items-center space-y-2">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-4xl cursor-pointer hover:bg-white/30 transition-all hover:scale-105 shadow-lg">
              {app.icon}
            </div>
            <span className="text-white text-sm font-medium text-center truncate w-full">
              {app.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
