interface DockProps {
  apps?: Array<{
    id: string
    name: string
    icon: string
  }>
}

export function Dock({ apps = [] }: DockProps) {
  // 기본 앱들 (예시)
  const defaultApps = [
    { id: '1', name: 'Safari', icon: '🌐' },
    { id: '2', name: 'Mail', icon: '✉️' },
    { id: '3', name: 'Photos', icon: '📸' },
    { id: '4', name: 'Messages', icon: '💬' },
  ]

  const dockApps = apps.length > 0 ? apps : defaultApps

  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40">
      <div className="bg-white/20 backdrop-blur-md rounded-2xl px-4 py-2">
        <div className="flex space-x-4">
          {dockApps.map((app) => (
            <div
              key={app.id}
              className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl cursor-pointer hover:bg-white/20 transition-colors"
              title={app.name}
            >
              {app.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 