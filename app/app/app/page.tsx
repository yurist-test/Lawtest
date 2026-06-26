import { SealEmblem } from "@/components/SealEmblem";

const STATS = [
  { value: "2,400+", label: "Savollar bazasi" },
  { value: "18", label: "Huquq yo'nalishi" },
  { value: "2 til", label: "O'zbek va Rus" },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <span className="font-display text-xl font-semibold text-ink-100">
            Law<span className="text-gold-gradient">Test</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="glass flex rounded-full p-1 text-sm">
            <button className="rounded-full bg-gold-500/15 px-3 py-1 text-gold-300">UZ</button>
            <button className="rounded-full px-3 py-1 text-ink-400 hover:text-ink-100">RU</button>
          </div>
          <a href="/login" className="hidden text-sm font-medium text-ink-300 hover:text-gold-300 sm:inline">
            Kirish
          </a>
        </div>
      </header>

      <section className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-12 pb-24 text-center sm:pt-20">
        <SealEmblem className="mb-8 h-24 w-24 opacity-90 sm:h-28 sm:w-28" />

        <p className="eyebrow animate-fade-in-up [animation-delay:0.05s]">
          Yuridik OTM imtihonlariga tayyorgarlik
        </p>

        <h1 className="mt-5 max-w-3xl animate-fade-in-up font-display text-4xl font-semibold leading-tight [animation-delay:0.15s] sm:text-5xl sm:leading-tight">
          Imtihon kuni omadga emas,{" "}
          <span className="text-gold-gradient">tayyorgarlikka</span> tayanadi
        </h1>

        <p className="mt-6 max-w-xl animate-fade-in-up text-base text-ink-400 [animation-delay:0.25s] sm:text-lg">
          LawTest — O&apos;zbekiston yuridik oliy ta&apos;lim muassasalariga
          kiruvchi abituriyentlar uchun maxsus ishlab chiqilgan sinov
          platformasi. Konstitutsiyaviy, fuqarolik, jinoyat huquqi va boshqa
          yo&apos;nalishlar bo&apos;yicha.
        </p>

        <div className="mt-9 flex animate-fade-in-up flex-col gap-3 [animation-delay:0.35s] sm:flex-row">
          <a href="/register" className="btn-gold">
            Ro&apos;yxatdan o&apos;tish
          </a>
          <a href="/login" className="btn-outline">
            Kirish
          </a>
        </div>

        <div className="hairline mt-16 max-w-md" />

        <div className="mt-12 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="glass glass-hover animate-fade-in-up px-6 py-6 [animation-delay:0.45s]"
            >
              <div className="font-display text-2xl font-semibold text-gold-300">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-ink-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 mx-auto max-w-6xl px-6 py-8 text-center text-xs text-ink-600">
        © 2026 LawTest. Barcha huquqlar himoyalangan.
      </footer>
    </main>
  );
}
