import bazel from "@/assets/bazel.png";
import { useEffect, useRef, useState } from "react";

interface IPadFrameProps {
  children: React.ReactNode;
}

export function IPadFrame({ children }: IPadFrameProps) {
  const [scale, setScale] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imageLoaded || !containerRef.current || !imageRef.current) return;

    const calculateScale = () => {
      const container = containerRef.current;
      const image = imageRef.current;

      if (!container || !image) return;

      // 컨테이너의 사용 가능한 크기
      const containerWidth = container.clientWidth - 40; // 패딩 20px씩 제외
      const containerHeight = container.clientHeight - 40;

      // 이미지의 자연스러운 크기 (베젤 이미지의 실제 크기)
      const imageNaturalWidth = image.naturalWidth;
      const imageNaturalHeight = image.naturalHeight;

      // 컨테이너에 맞는 스케일 계산 (비율 유지)
      const scaleX = containerWidth / imageNaturalWidth;
      const scaleY = containerHeight / imageNaturalHeight;

      // 비율을 유지하기 위해 더 작은 스케일 선택
      let newScale = Math.min(scaleX, scaleY);

      // 최대 1 (확대하지 않음), 최소 0.1 (너무 작아지지 않음)
      newScale = Math.min(newScale, 1);
      newScale = Math.max(newScale, 0.1);

      setScale(newScale);
    };

    // 초기 계산
    calculateScale();

    // 리사이즈 이벤트 핸들러
    let timeoutId: number;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(calculateScale, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [imageLoaded]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <main
      ref={containerRef}
      className="w-screen h-screen flex items-center justify-center p-5"
    >
      <div
        className="relative transition-transform duration-300 ease-out"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        {/* 베젤 이미지 */}
        <img
          ref={imageRef}
          src={bazel}
          alt="iPad bezel"
          className="block select-none max-w-none"
          draggable={false}
          onLoad={handleImageLoad}
        />

        {/* 실제 화면 영역 */}
        <div className="absolute inset-0 w-full h-full px-[55.2px] py-[53.5px]">
          {children}
        </div>
      </div>
    </main>
  );
}
