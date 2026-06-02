import { useState } from 'react';
import { FileText, Combine, Scissors, RotateCw, FileStack, Trash2, Droplet, Copy, ArrowUpDown, Hash, Palette, Info, FilePlus, Camera, Crop, Zap, BookMarked, Linkedin, Github, Twitter, Instagram, ExternalLink, Code2 } from 'lucide-react';
import { ToolType } from './types';
import Scanner from './components/Scanner';
import MergeTool from './components/MergeTool';
import SplitTool from './components/SplitTool';
import RotateTool from './components/RotateTool';
import ExtractTool from './components/ExtractTool';
import DeleteTool from './components/DeleteTool';
import WatermarkTool from './components/WatermarkTool';
import RemoveDuplicatesTool from './components/RemoveDuplicatesTool';
import ReverseTool from './components/ReverseTool';
import PageNumberTool from './components/PageNumberTool';
import GrayscaleTool from './components/GrayscaleTool';
import MetadataTool from './components/MetadataTool';
import BlankPageTool from './components/BlankPageTool';
import CropTool from './components/CropTool';
import OptimizeTool from './components/OptimizeTool';
import HeaderFooterTool from './components/HeaderFooterTool';
import CompressTool from './components/CompressTool';
import BatchTool from './components/BatchTool';
import ReorderTool from './components/ReorderTool';

function App() {
  const [selectedView, setSelectedView] = useState<ToolType | 'scanner' | 'home' | null>('home');

  const tools = [
    {
      id: 'scanner' as const,
      name: 'Document Scanner',
      description: 'Scan documents with camera and create PDFs',
      icon: Camera,
      color: 'bg-blue-600',
    },
    {
      id: 'merge' as ToolType,
      name: 'Merge PDFs',
      description: 'Combine multiple PDF files into one',
      icon: Combine,
      color: 'bg-blue-500',
    },
    {
      id: 'split' as ToolType,
      name: 'Split PDF',
      description: 'Split a PDF into separate pages',
      icon: Scissors,
      color: 'bg-green-500',
    },
    {
      id: 'rotate' as ToolType,
      name: 'Rotate PDF',
      description: 'Rotate pages in your PDF',
      icon: RotateCw,
      color: 'bg-orange-500',
    },
    {
      id: 'extract' as ToolType,
      name: 'Extract Pages',
      description: 'Extract specific pages from a PDF',
      icon: FileStack,
      color: 'bg-teal-500',
    },
    {
      id: 'delete' as ToolType,
      name: 'Delete Pages',
      description: 'Remove unwanted pages from PDF',
      icon: Trash2,
      color: 'bg-red-500',
    },
    {
      id: 'watermark' as ToolType,
      name: 'Add Watermark',
      description: 'Add watermark to all pages',
      icon: Droplet,
      color: 'bg-cyan-500',
    },
    {
      id: 'remove-duplicates' as ToolType,
      name: 'Remove Duplicates',
      description: 'Remove duplicate pages',
      icon: Copy,
      color: 'bg-cyan-400',
    },
    {
      id: 'reverse' as ToolType,
      name: 'Reverse Pages',
      description: 'Reverse page order',
      icon: ArrowUpDown,
      color: 'bg-sky-500',
    },
    {
      id: 'page-numbers' as ToolType,
      name: 'Page Numbers',
      description: 'Add page numbers to PDF',
      icon: Hash,
      color: 'bg-emerald-500',
    },
    {
      id: 'grayscale' as ToolType,
      name: 'Grayscale',
      description: 'Convert PDF to grayscale',
      icon: Palette,
      color: 'bg-slate-500',
    },
    {
      id: 'metadata' as ToolType,
      name: 'Edit Metadata',
      description: 'Edit PDF properties',
      icon: Info,
      color: 'bg-fuchsia-500',
    },
    {
      id: 'blank-pages' as ToolType,
      name: 'Blank Pages',
      description: 'Insert blank pages',
      icon: FilePlus,
      color: 'bg-amber-500',
    },
    {
      id: 'crop' as ToolType,
      name: 'Crop Pages',
      description: 'Remove margins and crop pages',
      icon: Crop,
      color: 'bg-rose-500',
    },
    {
      id: 'optimize' as ToolType,
      name: 'Optimize PDF',
      description: 'Reduce file size and improve performance',
      icon: Zap,
      color: 'bg-yellow-500',
    },
    {
      id: 'header-footer' as ToolType,
      name: 'Header & Footer',
      description: 'Add header and footer text to pages',
      icon: BookMarked,
      color: 'bg-lime-500',
    },
    {
      id: 'compress' as ToolType,
      name: 'Compress PDF',
      description: 'Reduce file size while maintaining quality',
      icon: Zap,
      color: 'bg-cyan-500',
    },
    {
      id: 'batch' as ToolType,
      name: 'Batch Process',
      description: 'Apply operations to multiple PDFs',
      icon: Copy,
      color: 'bg-purple-500',
    },
    {
      id: 'reorder-advanced' as ToolType,
      name: 'Reorder Pages',
      description: 'Rearrange pages in any order',
      icon: ArrowUpDown,
      color: 'bg-pink-500',
    },
  ];

  const renderView = () => {
    switch (selectedView) {
      case 'scanner':
        return <Scanner onBack={() => setSelectedView('home')} />;
      case 'merge':
        return <MergeTool onBack={() => setSelectedView('home')} />;
      case 'split':
        return <SplitTool onBack={() => setSelectedView('home')} />;
      case 'rotate':
        return <RotateTool onBack={() => setSelectedView('home')} />;
      case 'extract':
        return <ExtractTool onBack={() => setSelectedView('home')} />;
      case 'delete':
        return <DeleteTool onBack={() => setSelectedView('home')} />;
      case 'watermark':
        return <WatermarkTool onBack={() => setSelectedView('home')} />;
      case 'remove-duplicates':
        return <RemoveDuplicatesTool onBack={() => setSelectedView('home')} />;
      case 'reverse':
        return <ReverseTool onBack={() => setSelectedView('home')} />;
      case 'page-numbers':
        return <PageNumberTool onBack={() => setSelectedView('home')} />;
      case 'grayscale':
        return <GrayscaleTool onBack={() => setSelectedView('home')} />;
      case 'metadata':
        return <MetadataTool onBack={() => setSelectedView('home')} />;
      case 'blank-pages':
        return <BlankPageTool onBack={() => setSelectedView('home')} />;
      case 'crop':
        return <CropTool onBack={() => setSelectedView('home')} />;
      case 'optimize':
        return <OptimizeTool onBack={() => setSelectedView('home')} />;
      case 'header-footer':
        return <HeaderFooterTool onBack={() => setSelectedView('home')} />;
      case 'compress':
        return <CompressTool onBack={() => setSelectedView('home')} />;
      case 'batch':
        return <BatchTool onBack={() => setSelectedView('home')} />;
      case 'reorder-advanced':
        return <ReorderTool onBack={() => setSelectedView('home')} />;
      default:
        return null;
    }
  };

  if (selectedView !== 'home') {
    return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">{renderView()}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6 shadow-lg">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-slate-800 mb-4">PDF Ki Bari</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Complete PDF solution - scan documents, merge, split, rotate, extract, and more
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-12">
        <section aria-label="PDF Tools" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <article key={tool.id}>
                <button
                  onClick={() => setSelectedView(tool.id)}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300 hover:-translate-y-1 w-full text-center"
                  aria-label={`${tool.name}: ${tool.description}`}
                >
                  {/* CENTERED ICON */}
                  <div className="flex justify-center mb-4">
                    <div className={`flex items-center justify-center w-14 h-14 ${tool.color} rounded-xl shadow-md transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-7 h-7 text-white stroke-[2.2]" />
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold text-slate-800 mb-2">{tool.name}</h2>
                  <p className="text-slate-600 leading-relaxed">{tool.description}</p>
                </button>
              </article>
            );
          })}
        </section>

        <section className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm border border-slate-200">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></div>
            <span className="text-sm text-slate-600">All processing happens in your browser - your files never leave your device</span>
          </div>
        </section>

        <section className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Why Choose PDF Ki Bari?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">100% Secure</h3>
                <p className="text-sm text-slate-600">All processing happens locally in your browser. Your files never leave your device.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Lightning Fast</h3>
                <p className="text-sm text-slate-600">Instant processing with no upload wait times. Works offline once loaded.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Completely Free</h3>
                <p className="text-sm text-slate-600">No hidden fees, no subscriptions. All 20+ tools are free forever.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <span className="font-semibold text-slate-800">How do I merge multiple PDF files?</span>
                  <svg className="w-5 h-5 text-slate-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-slate-600 px-4">Click on the "Merge PDFs" tool, upload your PDF files, arrange them in the desired order by dragging, and click "Merge & Download". The combined PDF will be downloaded instantly.</p>
              </details>
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <span className="font-semibold text-slate-800">Is there a file size limit?</span>
                  <svg className="w-5 h-5 text-slate-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-slate-600 px-4">Since all processing happens in your browser, the only limit is your device's memory. Most modern devices can handle PDFs up to several hundred megabytes without issues.</p>
              </details>
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <span className="font-semibold text-slate-800">Can I use this on my phone or tablet?</span>
                  <svg className="w-5 h-5 text-slate-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-slate-600 px-4">Yes! PDF Ki Bari is fully responsive and works on all devices - smartphones, tablets, and desktop computers. The document scanner tool is particularly useful on mobile devices.</p>
              </details>
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <span className="font-semibold text-slate-800">Do you store my files on your servers?</span>
                  <svg className="w-5 h-5 text-slate-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-slate-600 px-4">No, we never store your files. All PDF processing happens entirely in your browser using JavaScript. Your files never leave your device, ensuring complete privacy and security.</p>
              </details>
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <span className="font-semibold text-slate-800">What browsers are supported?</span>
                  <svg className="w-5 h-5 text-slate-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-slate-600 px-4">PDF Ki Bari works on all modern browsers including Chrome, Firefox, Safari, Edge, and Opera. We recommend using the latest version of your preferred browser for the best experience.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="mt-16 max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 shadow-sm border border-blue-200">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Ready to Edit Your PDFs?</h2>
            <p className="text-lg text-slate-600 mb-6">Join millions of users who trust PDF Ki Bari for their PDF editing needs.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-slate-700 shadow-sm">No Registration Required</span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-slate-700 shadow-sm">100% Free Forever</span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-slate-700 shadow-sm">Works Offline</span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-slate-700 shadow-sm">20+ Tools Available</span>
            </div>
          </div>
        </section>

        <section className="mt-16 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-12 shadow-2xl border border-slate-700">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6 shadow-lg">
                <Code2 className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-2">About the Developer</h2>
              <p className="text-blue-300 text-lg">Meet the creator behind this amazing tool</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Aayush Sharma</h3>
                  <p className="text-blue-300 font-semibold mb-4">Aspiring Software Developer | Web Development Enthusiast</p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    A passionate Computer Science and Engineering (AI) student with keen interest in web development, artificial intelligence, and open-source contributions. With hands-on experience in React, Tailwind CSS, TypeScript, and database management, I enjoy building modern, user-friendly web applications that solve real-world problems.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Beyond coding, I actively contribute to open-source projects, mentor peers, and participate in technical initiatives that foster learning and collaboration. Always eager to explore new technologies and bridge the gap between academic knowledge and real-world applications.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Skills & Expertise</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-slate-700 rounded-lg px-3 py-2">
                      <p className="text-sm text-slate-300"><span className="text-blue-400 font-semibold">Languages:</span> JavaScript, TypeScript, Python, Java, C++</p>
                    </div>
                    <div className="bg-slate-700 rounded-lg px-3 py-2">
                      <p className="text-sm text-slate-300"><span className="text-blue-400 font-semibold">Frontend:</span> React, Tailwind CSS, HTML, CSS</p>
                    </div>
                    <div className="bg-slate-700 rounded-lg px-3 py-2">
                      <p className="text-sm text-slate-300"><span className="text-blue-400 font-semibold">Backend:</span> Node.js, Firebase, MongoDB</p>
                    </div>
                    <div className="bg-slate-700 rounded-lg px-3 py-2">
                      <p className="text-sm text-slate-300"><span className="text-blue-400 font-semibold">Tools:</span> Git, GitHub, VS Code</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-700 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Education</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="text-white font-semibold">B.Tech - Computer Science & Engineering (AI)</p>
                      <p className="text-slate-300 text-sm">Poornima College of Engineering | 2022-2026</p>
                      <p className="text-blue-300 text-sm font-medium">CGPA: 9.13</p>
                    </div>
                    <div className="border-l-4 border-blue-400 pl-4">
                      <p className="text-white font-semibold">Senior Secondary (Grade 12)</p>
                      <p className="text-slate-300 text-sm">Kendriya Vidyalaya No. 5, Jaipur | 91.6%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-700 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Experience Highlights</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▸</span>
                      <span><span className="text-white font-semibold">SAS Certified Specialist</span> - Visual Business Analytics (2025)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▸</span>
                      <span><span className="text-white font-semibold">Web Development Intern</span> - Ui System Pvt. Ltd. (2023)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▸</span>
                      <span><span className="text-white font-semibold">Project Team Lead</span> - TEK-Connect 2024 Exhibition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▸</span>
                      <span><span className="text-white font-semibold">Technical Lead</span> - Poornima Nexus Open Source Project</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-700 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Achievements</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">★</span>
                      <span><span className="text-white font-semibold">Ganga Quest 2021 Winner</span> - Ministry of Jal Shakti</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">★</span>
                      <span><span className="text-white font-semibold">SAS Certified</span> - Multiple SAS Analytics Certifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">★</span>
                      <span><span className="text-white font-semibold">CBSE Certificate of Merit</span> - Mathematics Standard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">★</span>
                      <span><span className="text-white font-semibold">AI Badges</span> - AI For All (CBSE & Intel)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Notable Projects</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">→</span>
                      <span><span className="text-white font-semibold">Handwriting Converter</span> - Transform digital text to handwritten notes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">→</span>
                      <span><span className="text-white font-semibold">PCE Library Platform</span> - Online knowledge repository</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">→</span>
                      <span><span className="text-white font-semibold">Poornima Nexus</span> - Open source collaboration platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">→</span>
                      <span><span className="text-white font-semibold">AIClassOf26</span> - B.Tech CSE (AI) Class website</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Connect & Follow</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="https://www.linkedin.com/in/aayush-sharma-a44062299/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded-lg transition-colors">
                      <Linkedin className="w-5 h-5 text-blue-400" />
                      <span className="text-white text-sm font-medium">LinkedIn</span>
                    </a>
                    <a href="https://github.com/aayushsh2003" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded-lg transition-colors">
                      <Github className="w-5 h-5 text-slate-300" />
                      <span className="text-white text-sm font-medium">GitHub</span>
                    </a>
                    <a href="https://x.com/aayushSh2003" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded-lg transition-colors">
                      <Twitter className="w-5 h-5 text-sky-400" />
                      <span className="text-white text-sm font-medium">Twitter</span>
                    </a>
                    <a href="https://www.instagram.com/aayushsh2003" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded-lg transition-colors">
                      <Instagram className="w-5 h-5 text-pink-400" />
                      <span className="text-white text-sm font-medium">Instagram</span>
                    </a>
                  </div>
                  <a href="https://aayush-ki-pehchan.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                    <span className="text-white font-semibold">Visit Portfolio</span>
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-400 text-sm">
                Passionate about creating innovative solutions | Open Source Contributor | Always learning, always growing
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-slate-200">
        <div className="text-center text-sm text-slate-600">
          <p className="mb-2">PDF Ki Bari - Free Online PDF Tools</p>
          <p>All processing happens in your browser. Your files are never uploaded to any server.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
