import React, { useMemo } from "react";

export default function HeartRain({ count = 18 }) {
  const hearts = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const left = Math.round(Math.random() * 100); // percent
      const delay = (Math.random() * 4).toFixed(2) + "s"; // stagger
      const duration = (4 + Math.random() * 6).toFixed(2) + "s"; // how long to rise
      const size = 12 + Math.round(Math.random() * 28); // px font-size
      const rotate = Math.round((Math.random() - 0.5) * 60); // rotation deg
      return { id: i, left, delay, duration, size, rotate };
    });
  }, [count]);

  return (
    <div className="overflow-hidden">
      <div className="realtive w-full h-96  z-50">
        Finalmente Casados Pra sempre 😍🥰🥳
        <div className="absolute inset-0 pointer-events-none z-50">
          {hearts.map((h) => (
            <span
              key={h.id}
              className="heart absolute select-none will-change-transform text-red-500 z-50"
              style={{
                left: `${h.left}%`,
                bottom: `-10%`,
                fontSize: `${h.size}px`,
                transform: `translateX(-50%) rotate(${h.rotate}deg)`,
                animationDelay: h.delay,
                animationDuration: h.duration,
              }}
              aria-hidden
            >
              ❤️
            </span>
          ))}
        </div>
        <style>{`
        .heart{
          display:inline-block;
          user-select:none;
          filter: drop-shadow(0 6px 12px rgba(239,68,68,0.25));
          animation-name: floatUp;
          animation-timing-function: cubic-bezier(.18,.9,.36,1);
          animation-iteration-count: infinite;
        }

        @keyframes floatUp{
          0%{
            transform: translateX(-50%) translateY(0) scale(1) rotate(var(--r,0deg));
            opacity: 0; /* start slightly invisible */
          }
          6%{
            opacity: 1; /* pop into view */
          }
          70%{
            opacity: 1;
            transform: translateX(-50%) translateY(-85vh) scale(1.05) rotate(var(--r,0deg));
          }
          90%{
            transform: translateX(-50%) translateY(-95vh) scale(1.6) rotate(var(--r,0deg));
            opacity: 0.95;
          }
          100%{
            transform: translateX(-50%) translateY(-105vh) scale(0);
            opacity: 0;
          }
        }

        .heart:nth-child(4n){ animation-timing-function: ease-in-out; }
        .heart:nth-child(2n){ animation-direction: normal; }

      `}</style>
      </div>
    </div>
  );
}
