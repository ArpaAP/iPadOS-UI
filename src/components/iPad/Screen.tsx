import { Dock } from "./Dock";
import { HomeIndicator } from "./HomeIndicator";
import { StatusBar } from "./StatusBar";

interface ScreenProps {
  children?: React.ReactNode;
  showDock?: boolean;
  background?: string;
}

export function Screen({ children, showDock = true }: ScreenProps) {
  return (
    <div className="relative w-full h-full rounded-[30px] overflow-hidden">
      {/* 상태바 */}
      <StatusBar />

      {/* 메인 콘텐츠 영역 */}
      <div className="absolute inset-0 overflow-hidden">{children}</div>

      {/* 독 */}
      {showDock && <Dock />}

      {/* 홈 인디케이터 */}
      <HomeIndicator />
    </div>
  );
}
