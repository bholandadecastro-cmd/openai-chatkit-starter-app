// app/page.tsx
import App from "./App";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1220]">
      <div className="mx-auto max-w-3xl p-4 md:p-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          Converse com o Simãozinho
        </h1>
        <p className="text-slate-300 mt-2">
          Pergunte sobre pessoas, obras e temas do acervo
        </p>

        {/* Cartão que contém o chat */}
        <div className="fs-chat-card mt-6 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
          {/* Aqui fica o componente original do starter */}
          <App />
        </div>
      </div>

      {/* Estilinho extra (opcional) */}
      <style jsx global>{`
        .fs-chat-card::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(500px 160px at 20% -10%, rgba(34,197,94,.12), transparent 60%),
            radial-gradient(400px 140px at 80% -20%, rgba(59,130,246,.10), transparent 60%);
        }
      `}</style>
    </main>
  );
}
