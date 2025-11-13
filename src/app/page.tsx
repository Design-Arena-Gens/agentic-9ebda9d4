import Image from "next/image";

const categories = [
  {
    name: "Free Fire",
    highlight: "1450 Diamonds",
    price: "Rp184.000",
    description: "Stok selalu ready untuk push rank tanpa delay.",
    glow: "from-cyan-400/70 via-sky-500/50 to-blue-900/40",
  },
  {
    name: "Mobile Legends",
    highlight: "165 Diamonds (150 + 15)",
    price: "Rp147.730",
    description: "Top up aman untuk squad dan turnamen MLBB.",
    glow: "from-blue-500/70 via-indigo-500/60 to-sky-900/40",
  },
  {
    name: "PUBG Mobile",
    highlight: "42002 + 16801 UC",
    price: "Rp485.379",
    description: "Premium UC untuk unlock outfit dan Royale Pass.",
    glow: "from-sky-400/60 via-cyan-500/60 to-blue-900/40",
  },
  {
    name: "Voucher & Entertainment",
    highlight: "Netflix, Spotify, Garena, Steam, & lainnya",
    price: "Mulai Rp50.000",
    description: "Voucher global & lokal buat hiburan tanpa batas.",
    glow: "from-indigo-500/70 via-sky-500/60 to-violet-900/40",
  },
];

const highlights = [
  {
    title: "Instan & Otomatis",
    description: "Pengiriman saldo kurang dari 60 detik dengan sistem terhubung langsung ke publisher.",
  },
  {
    title: "Keamanan Terjamin",
    description: "ID game diverifikasi dua langkah, transaksi terenkripsi, dan bukti kirim real-time.",
  },
  {
    title: "Harga Kompetitif",
    description: "Diskon menarik setiap hari dengan promo spesial untuk member komunitas.",
  },
];

const payments = ["DANA", "BCA", "Krom Bank", "SeaBank", "QRIS", "GoPay"];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#020515] via-[#050a1f] to-[#030617]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-16 top-1/3 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-[28rem] bg-gradient-to-r from-cyan-500/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center opacity-60 mix-blend-screen" />
      </div>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-12 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-6 rounded-3xl border border-white/5 bg-white/5/10 p-8 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:gap-8 lg:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-lg font-semibold text-white shadow-[0_0_45px_rgba(56,189,248,0.45)]">
              R
            </div>
            <div>
              <p className="font-[450] uppercase tracking-[0.35em] text-cyan-300">
                RIWOXX
              </p>
              <p className="font-medium text-sm uppercase tracking-[0.3em] text-white/70">
                Top Up Store
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-white/70 sm:justify-end">
            <span className="rounded-full border border-white/15 px-4 py-1 uppercase tracking-[0.25em]">
              24/7 Support
            </span>
            <span className="rounded-full border border-white/15 px-4 py-1 uppercase tracking-[0.25em]">
              100% Trusted
            </span>
          </div>
        </header>

        <section className="grid items-center gap-12 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-8">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
                Digital Powerhouse
              </span>
              <h1 className="font-display text-4xl leading-tight text-white drop-shadow-[0_0_25px_rgba(61,191,255,0.35)] md:text-5xl lg:text-[3.35rem]">
                Top Up Game & Voucher Instan — Aman & Terpercaya
              </h1>
              <p className="max-w-xl text-base text-white/70 sm:text-lg">
                Beli Diamonds, UC, Voucher, dan Pulsa tanpa ribet! Bayar pakai
                DANA, BCA, Krom Bank, atau SeaBank. Transaksi cepat, bukti kirim
                realtime, dan layanan 24 jam buat gamers dan creators.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://riwoxxstore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#051028] transition hover:shadow-[0_0_35px_rgba(56,189,248,0.55)] sm:w-auto"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-white/30 transition-transform duration-300 group-hover:scale-x-100" />
                <span className="relative">Order Sekarang</span>
              </a>
              <div className="flex flex-1 items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-xs text-white/60">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm font-semibold text-white">
                  ⚡
                </div>
                <p className="leading-relaxed">
                  Selesaikan top up hanya dengan ID game. Proses otomatis kurang
                  dari 1 menit.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_35px_rgba(15,23,42,0.35)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent opacity-70" />
                  <div className="relative space-y-3">
                    <h3 className="font-display text-lg text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/65">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                Metode Pembayaran
              </h4>
              <div className="flex flex-wrap gap-3">
                {payments.map((method) => (
                  <span
                    key={method}
                    className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-cyan-200"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-[36px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 via-sky-500/10 to-transparent blur-3xl" />
            <div className="relative w-full max-w-lg space-y-6">
              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] shadow-[0_0_55px_rgba(56,189,248,0.18)]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                <Image
                  src="/hero-illustration.svg"
                  alt="Neon gaming illustration"
                  width={640}
                  height={480}
                  priority
                  className="h-full w-full object-cover opacity-95"
                />
                <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.85)]" />
                  Live Match Ready
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl shadow-[0_0_65px_rgba(56,189,248,0.25)] sm:p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-transparent to-transparent" />
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                        Real-Time Dashboard
                      </p>
                      <h3 className="font-display text-2xl text-white">
                        Status Top Up
                      </h3>
                    </div>
                    <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">
                      Online
                    </span>
                  </div>

                  <div className="space-y-4">
                    {categories.slice(0, 3).map((category) => (
                      <div
                        key={category.name}
                        className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                              {category.name}
                            </p>
                            <p className="font-display text-lg text-white">
                              {category.highlight}
                            </p>
                          </div>
                          <p className="text-sm font-semibold text-cyan-300">
                            {category.price}
                          </p>
                        </div>
                        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                          <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-transparent p-4 text-sm text-white/70">
                    <p>
                      “Pesan jam berapa pun langsung masuk! Admin fast respon,
                      harga paling stabil, dan bisa request invoice untuk tim
                      esports.” —{" "}
                      <span className="text-white">Komunitas Orion</span>
                    </p>
                  </div>
                </div>

                <div className="absolute -top-8 -left-8 h-40 w-40 rounded-full bg-cyan-500/35 blur-3xl" />
                <div className="absolute -bottom-10 right-8 h-32 w-32 rounded-full bg-indigo-500/30 blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col gap-3 text-center">
            <h2 className="font-display text-3xl text-white md:text-4xl">
              Kategori Produk Unggulan
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/60 sm:text-base">
              Pilih top up favoritmu, konfirmasi ID, lakukan pembayaran, dan
              nikmati saldo instan tanpa login akun tambahan.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {categories.map((category) => (
              <div
                key={category.name}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-400/40 hover:shadow-[0_0_65px_rgba(56,189,248,0.25)]"
              >
                <div
                  className={`pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rotate-12 rounded-full bg-gradient-to-br ${category.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                        {category.name}
                      </p>
                      <h3 className="font-display text-2xl text-white">
                        {category.highlight}
                      </h3>
                    </div>
                    <span className="rounded-full border border-cyan-400/35 bg-cyan-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-100">
                      Ready Stock
                    </span>
                  </div>
                  <p className="text-sm text-white/65">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-cyan-300">
                      {category.price}
                    </p>
                    <a
                      href="https://riwoxxstore.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70 underline-offset-8 transition hover:text-cyan-200 hover:underline"
                    >
                      Top Up Sekarang
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="flex flex-col-reverse items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-8 text-white/60 md:flex-row md:px-10">
          <p className="text-xs uppercase tracking-[0.35em]">
            © {new Date().getFullYear()} RIWOXX TOP UP — Powered by Digital Fastlane
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            <span>Discord Community</span>
            <span>Official Reseller</span>
            <span>Garansi Aman</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
