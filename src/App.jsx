import React, { useState } from 'react';
import Hero3D from './components/Hero3D';
import TemplateGallery from './components/TemplateGallery';
import CustomizerPanel from './components/CustomizerPanel';
import DemoSection from './components/DemoSection';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleUseTemplate = (tpl) => {
    setSelectedTemplate(tpl);
    // Smoothly jump users to the customizer when a template is chosen
    const el = document.getElementById('customize');
    if (el && el.scrollIntoView) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero3D />
      <TemplateGallery onUse={handleUseTemplate} />
      <CustomizerPanel selectedTemplate={selectedTemplate} />
      <DemoSection />

      <footer className="py-12 text-center text-sm text-slate-500 bg-slate-50 border-t border-slate-200">
        Built for creators — craft your portfolio, your way.
      </footer>
    </div>
  );
}

export default App;
