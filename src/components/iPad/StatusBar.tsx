import { useEffect, useState } from "react";

export function StatusBar() {
  const [battery, setBattery] = useState<number>(80);

  const currentTime = new Date();

  const time = currentTime.toLocaleTimeString("ko-KR", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const date = currentTime.toLocaleDateString("ko-KR", {
    month: "short",
    day: "numeric",
    weekday: "long",
  });

  useEffect(() => {
    const getBattery = navigator[
      "getBattery" as keyof Navigator
    ] as () => Promise<any>;

    getBattery().then((battery) => {
      setBattery(Math.round(battery.level * 100));
    });
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-[26px] py-1 text-white z-50 text-[12px] font-medium">
      {/* 좌측: 시간 */}
      <div className="items-center flex gap-2 py-0.5">
        <span>{time}</span> <span>{date}</span>
      </div>

      {/* 우측: 배터리, WiFi 등 */}
      <div className="flex items-center space-x-1.5">
        {/* WiFi 아이콘 */}
        <div className="w-4 h-4">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-label="WiFi">
            <title>WiFi</title>
            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
          </svg>
        </div>

        {/* 배터리 퍼센트 */}
        <span>{battery}%</span>

        {/* 배터리 아이콘 */}
        <div className="w-6 h-3 border border-white/40 rounded-[3.5px] relative">
          <div className="absolute right-[-3.5px] top-1/2 transform -translate-y-1/2 w-[1.5px] h-[3.5px] bg-white/40 rounded-r-sm" />
          <div className="absolute inset-[1px] bg-white rounded-[1.5px]" />
        </div>
      </div>
    </div>
  );
}
