import React, { useMemo, useState } from 'react';
import { Palette, Type, LayoutGrid, Link as LinkIcon } from 'lucide-react';

const COLORS = ['#0ea5e9', '#22c55e', '#f97316', '#ef4444', '#8b5cf6', '#14b8a6', '#111827'];
const FONTS = ['Inter', 'Geist', 'Manrope', 'IBM Plex Sans', 'Mona Sans'];
const LAYOUTS = ['Classic', 'Split', 'Masonry'];

function PreviewCard({ color, font, layout }) {
  const blocks = useMemo(() => {
    switch (layout) {
      case 'Split':
        return 'grid grid-cols-1 md:grid-cols-2 gap-3';
      case 'Masonry':
        return 'columns-2 md:columns-3 gap-3 [column-fill:balance]';
      default:
        return 'space-y-3';
    }
  }, [layout]);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="text-xs text-slate-500">Live preview</div>
      </div>
      <div className={`${blocks}`} style={{ fontFamily: font }}>
        <div className="rounded-lg bg-slate-100 h-24" />
        <div className="rounded-lg bg-slate-100 h-14" />
        <div className="rounded-lg bg-slate-100 h-20" />
        <div className="rounded-lg bg-slate-100 h-32" />
        <div className="rounded-lg bg-slate-100 h-10" />
      </div>
      <div className="mt-4 h-2 rounded-full" style={{ backgroundColor: color }} />
    </div>
  );
}

export default function CustomizerPanel() {
  const [color, setColor] = useState(COLORS[0]);
  const [font, setFont] = useState(FONTS[0]);
  const [layout, setLayout] = useState(LAYOUTS[0]);
  const [links, setLinks] = useState({ github: 'https://github.com/you', twitter: 'https://x.com/you' });

  return (
    <section id="customize" className="relative py-20 bg-slate-50">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Make it yours</h2>
          <p className="text-slate-600">Fine-tune colors, typography, layout, and social links. Your changes render instantly.</p>

          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 font-semibold mb-3"><Palette className="w-4 h-4" /> Color theme</div>
              <div className="flex flex-wrap gap-2">
                {COLORS.map(c => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`w-8 h-8 rounded-full border ${color === c ? 'ring-2 ring-offset-2 ring-slate-900' : ''}`}
                    style={{ backgroundColor: c }}
                    aria-label={`Set color ${c}`}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 font-semibold mb-3"><Type className="w-4 h-4" /> Typography</div>
              <div className="flex flex-wrap gap-2">
                {FONTS.map(f => (
                  <button
                    key={f}
                    onClick={() => setFont(f)}
                    className={`px-3 py-1.5 rounded-lg border text-sm ${font === f ? 'bg-slate-900 text-white border-slate-900' : 'border-slate-300 text-slate-700 hover:bg-slate-100'}`}
                    style={{ fontFamily: f }}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 font-semibold mb-3"><LayoutGrid className="w-4 h-4" /> Layout</div>
              <div className="flex flex-wrap gap-2">
                {LAYOUTS.map(l => (
                  <button
                    key={l}
                    onClick={() => setLayout(l)}
                    className={`px-3 py-1.5 rounded-lg border text-sm ${layout === l ? 'bg-slate-900 text-white border-slate-900' : 'border-slate-300 text-slate-700 hover:bg-slate-100'}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 font-semibold mb-3"><LinkIcon className="w-4 h-4" /> Social links</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.keys(links).map((k) => (
                  <input
                    key={k}
                    value={links[k]}
                    onChange={(e) => setLinks({ ...links, [k]: e.target.value })}
                    className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <PreviewCard color={color} font={font} layout={layout} />
      </div>
    </section>
  );
}
