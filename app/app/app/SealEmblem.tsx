import { cn } from "@/lib/utils/cn";

export function SealEmblem({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("animate-seal-stamp", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sealGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F2DA9C" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8F7220" />
        </linearGradient>
      </defs>

      <circle cx="100" cy="100" r="94" fill="none" stroke="url(#sealGold)" strokeWidth="1.5" opacity="0.5" />
      <circle cx="100" cy="100" r="84" fill="none" stroke="url(#sealGold)" strokeWidth="1" opacity="0.7" />

      <path id="sealTextPath" d="M 100,100 m -70,0 a 70,70 0 1,1 140,0" fill="none" />
      <text fontSize="11" fill="#D4AF37" letterSpacing="4" fontFamily="var(--font-mono)">
        <textPath href="#sealTextPath" startOffset="50%" textAnchor="middle">
          LAWTEST · LAWTEST ·
        </textPath>
      </text>

      <g stroke="url(#sealGold)" strokeWidth="2.2" fill="none" strokeLinecap="round">
        <line x1="100" y1="60" x2="100" y2="135" />
        <line x1="68" y1="78" x2="132" y2="78" />
        <path d="M 68 78 L 56 100 a 14 14 0 0 0 24 0 Z" />
        <path d="M 132 78 L 120 100 a 14 14 0 0 0 24 0 Z" />
        <line x1="84" y1="135" x2="116" y2="135" />
      </g>
    </svg>
  );
}
