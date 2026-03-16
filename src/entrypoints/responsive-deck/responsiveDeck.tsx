import { Input } from "@/components/Input";
import { useGetResponsiveDeckState } from "@/hooks/global/globalState";

const DEVICES = [
  { id: "mobile", name: "iPhone 6/7/8", width: 375, height: 667 },
  { id: "tablet", name: "iPad", width: 768, height: 1024 },
  { id: "laptop", name: "General Laptop", width: 1024, height: 800 },
  { id: "desktop", name: "MacBook Pro", width: 1440, height: 900 },
];

export default function ResponsiveDeck() {
  const { url, isUrlValid } = useGetResponsiveDeckState();

  const [zoom, setZoom] = useState(0.6);

  return (
    <main className="bg-bg-primary  min-h-screen py-3 px-4">
      <section className={""}>
        <Input />
      </section>

      <section aria-label="Deck Grid Preview">
        {/* Grid/Deck Section */}
        {isUrlValid && url ? (
          <section className="flex-1 overflow-x-auto overflow-y-auto custom-scrollbar p-8">
            <div className="flex flex-row items-start justify-start gap-6 min-w-max h-full">
              {DEVICES.map((device) => {
                const scaledWidth = device.width * zoom;
                const scaledHeight = device.height * zoom;

                return (
                  <div key={device.id} className="flex flex-col gap-3">
                    {/* Device Header (Like ResponsivelyApp) */}
                    <div className="flex items-center gap-2 px-1">
                      <span className="text-gray-700 font-medium text-base">
                        {device.name}
                      </span>
                      <span className="text-gray-400 font-mono text-sm">
                        {device.width}x{device.height}
                      </span>
                    </div>

                    <div
                      className="relative bg-white shadow-xl rounded-md overflow-hidden ring-1 ring-gray-200"
                      style={{
                        width: `${scaledWidth}px`,
                        height: `${scaledHeight}px`,
                      }}
                    >
                      <iframe
                        src={url}
                        title={device.name}
                        style={{
                          width: `${device.width}px`,
                          height: `${device.height}px`,
                          transform: `scale(${zoom})`,
                          transformOrigin: "top left",
                          border: "none",
                        }}
                        className="absolute top-0 left-0 bg-white"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ) : (
          <section className="flex-1 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <svg
                className="mx-auto h-12 w-12 mb-3 opacity-20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <p className="text-lg font-medium">
                Enter a URL to preview responsive layouts
              </p>
            </div>
          </section>
        )}
      </section>
    </main>
  );
}
