import React, { useMemo } from 'react';
import { Play } from 'lucide-react';

export default function DemoSection() {
  const demoUrl = import.meta.env.VITE_DEMO_VIDEO_URL;
  const steps = useMemo(() => ([
    { title: 'Pick a template', desc: 'Choose from 100+ professional layouts tailored to your role.' },
    { title: 'Customize instantly', desc: 'Swap colors, fonts, and sections with one click.' },
    { title: 'Add your content', desc: 'Import projects, write your bio, and link socials.' },
    { title: 'Publish', desc: 'Export to your domain with blazing-fast hosting.' },
  ]), []);

  return (
    <section id="demo" className="relative py-20 bg-slate-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/10 via-cyan-500/10 to-transparent pointer-events-none" />
      <div className="relative container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">See it in action</h2>
            <p className="text-slate-300">A quick walkthrough showing how to go from template to published portfolio in under a minute.</p>

            {demoUrl ? (
              <div className="aspect-video rounded-xl overflow-hidden border border-white/10 bg-black">
                <video src={demoUrl} controls className="w-full h-full" />
              </div>
            ) : (
              <div className="aspect-video rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center relative">
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%)]" />
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10">
                    <Play className="w-7 h-7" />
                  </div>
                  <div className="font-semibold">Interactive walkthrough</div>
                  <div className="text-sm text-slate-300">Use the steps on the right to simulate the process.</div>
                </div>
              </div>
            )}

            <div className="text-sm text-slate-400">Have your own clip? Set VITE_DEMO_VIDEO_URL to stream it here.</div>
          </div>

          <div className="w-full lg:w-[420px] bg-white/5 border border-white/10 rounded-2xl p-6">
            <ol className="space-y-5">
              {steps.map((s, i) => (
                <li key={s.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-semibold">{s.title}</div>
                    <div className="text-slate-300 text-sm">{s.desc}</div>
                  </div>
                </li>
              ))}
            </ol>
            <a href="#customize" className="mt-6 inline-flex w-full items-center justify-center bg-white text-slate-900 font-medium rounded-lg px-4 py-2 hover:bg-slate-100">
              Try the customizer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
