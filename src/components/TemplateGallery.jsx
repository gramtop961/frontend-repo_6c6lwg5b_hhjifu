import React, { useMemo, useState } from 'react';
import { Search, Sparkles } from 'lucide-react';

const categories = ['All', 'Developer', 'Designer', 'Photographer', 'Writer', 'Marketer', 'Minimal', 'Bold'];

function generateTemplates() {
  const names = [
    'Aurora', 'Nebula', 'Quantum', 'Vertex', 'Nova', 'Pulse', 'Orbit', 'Glyph', 'Linear', 'Monaco', 'Nimbus', 'Atlas',
    'Cinder', 'Echo', 'Flux', 'Halo', 'Iris', 'Juno', 'Kairo', 'Lumen', 'Muse', 'Nexus', 'Onyx', 'Prism', 'Quill', 'Rune',
    'Sol', 'Tetra', 'Umbra', 'Vanta', 'Wave', 'Xeno', 'Yonder', 'Zenith'
  ];
  const cats = ['Developer', 'Designer', 'Photographer', 'Writer', 'Marketer', 'Minimal', 'Bold'];
  const list = [];
  for (let i = 1; i <= 120; i++) {
    const name = `${names[i % names.length]} ${i}`;
    const category = cats[i % cats.length];
    list.push({ id: i, name, category });
  }
  return list;
}

const TEMPLATES = generateTemplates();

function TemplateCard({ template, onUse }) {
  const hue = (template.id * 23) % 360;
  return (
    <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-xl transition">
      <div
        className="h-40 w-full relative"
        style={{
          background: `linear-gradient(135deg, hsl(${hue} 85% 85%), hsl(${(hue + 40) % 360} 85% 75%))`,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_0%,transparent_40%)] opacity-60 pointer-events-none" />
        <div className="absolute bottom-2 left-2 bg-white/80 backdrop-blur px-2 py-1 rounded text-xs font-medium text-slate-700">
          {template.category}
        </div>
      </div>
      <div className="p-4 flex items-center justify-between gap-3">
        <div>
          <div className="font-semibold text-slate-900">{template.name}</div>
          <div className="text-xs text-slate-500">Responsive • SEO ready</div>
        </div>
        <button
          onClick={() => onUse(template)}
          className="inline-flex items-center gap-1 bg-slate-900 text-white text-sm px-3 py-2 rounded-lg hover:bg-slate-800"
        >
          <Sparkles className="w-4 h-4" /> Use
        </button>
      </div>
    </div>
  );
}

export default function TemplateGallery({ onUse }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    return TEMPLATES.filter(t =>
      (active === 'All' || t.category === active) &&
      t.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, active]);

  return (
    <section id="templates" className="relative py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Choose a template</h2>
            <p className="text-slate-600">Browse 100+ handcrafted designs. Filter by profession and style.</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search templates"
                className="pl-10 pr-3 py-2 rounded-lg border border-slate-300 w-64 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-3 py-1.5 rounded-full text-sm border ${active === cat ? 'bg-slate-900 text-white border-slate-900' : 'border-slate-300 text-slate-700 hover:bg-slate-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((tpl) => (
            <TemplateCard key={tpl.id} template={tpl} onUse={onUse} />
          ))}
        </div>
      </div>
    </section>
  );
}
