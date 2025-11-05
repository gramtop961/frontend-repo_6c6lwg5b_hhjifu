import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2">
            <Star className="w-4 h-4 text-yellow-300" />
            <span className="text-sm text-slate-200">100+ modern templates • No-code customization</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build a stunning portfolio in minutes
          </h1>
          <p className="text-slate-300 text-lg max-w-xl">
            Mix and match sections, tweak styles, and publish — all inside an interactive 3D workspace. Designed for developers, designers, and creators.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#templates"
              className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 transition rounded-lg px-5 py-3 font-medium"
            >
              <Rocket className="w-5 h-5" />
              Explore templates
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 bg-transparent border border-white/30 hover:border-white transition rounded-lg px-5 py-3 font-medium"
            >
              Watch quick demo
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/20 via-cyan-400/10 to-transparent rounded-3xl blur-3xl pointer-events-none" />
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { label: 'Templates', value: '100+' },
                { label: 'Blocks', value: '350+' },
                { label: 'Themes', value: '12' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 rounded-xl p-4">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-sm text-slate-200">
              Drag blocks, edit colors and fonts, add projects and socials — your site updates instantly.
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
    </section>
  );
}
