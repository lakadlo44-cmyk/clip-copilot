export default function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <div>
        <h1 className="text-3xl font-bold">🎬 ClipPilot AI</h1>
        <p className="text-gray-400">
          AI Campaign & Reel Generator
        </p>
      </div>

      <div className="text-sm bg-zinc-800 px-4 py-2 rounded-lg">
        MVP v0.1
      </div>
    </header>
  );
}
