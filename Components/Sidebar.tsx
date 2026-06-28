export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-zinc-900 p-6">

      <h2 className="text-xl font-bold mb-8">
        ClipPilot
      </h2>

      <nav className="space-y-4">

        <div className="cursor-pointer">
          Dashboard
        </div>

        <div className="cursor-pointer">
          New Campaign
        </div>

        <div className="cursor-pointer">
          History
        </div>

      </nav>

    </aside>
  );
}
