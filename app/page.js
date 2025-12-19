import Image from "next/image";

export default function Home() {
  const authorName = "Myca Joanne M. Faeldonia";
  const submissionInfo = "M1 FA4 Submission";
  const todayDate = "December 19, 2025";

  return (
    <div className="min-h-screen bg-[#f9f7f1] text-stone-900 font-serif p-4 md:p-8 selection:bg-black selection:text-white">
      {/* Top Bar: Weather & Market Status */}
      <div className="max-w-6xl mx-auto border-t-2 border-b border-black py-1 flex justify-between text-[10px] md:text-xs font-sans uppercase font-bold tracking-widest mb-2">
        <span>Weather: Sunny & 28°C</span>
        <span className="hidden md:inline text-red-700 underline underline-offset-2 animate-pulse">Late Breaking: Utility-First CSS is taking over the world</span>
        <span>Davao, Philippines</span>
      </div>

      {/* Newspaper Masthead */}
      <header className="max-w-6xl mx-auto border-b-4 border-black mb-2">
        <div className="flex justify-between items-end border-b border-stone-400 pb-1 text-xs md:text-sm font-sans uppercase tracking-widest">
          <span>{submissionInfo}</span>
          <span className="font-black text-xl tracking-tighter italic">"Veritas in Utilitate"</span>
          <span>Vol. 01 — No. 01</span>
        </div>
        <div className="py-6 text-center">
          <h1 className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter border-y-2 border-black py-4 leading-none">
            Tailwind Times
          </h1>
          <p className="mt-4 italic text-xl text-stone-700 max-w-2xl mx-auto">
            "Everything you need to know about modern web styling, curated by {authorName}"
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="max-w-6xl mx-auto border-b-2 border-black py-2 mb-8 sticky top-0 bg-[#f9f7f1] z-50">
        <div className="flex flex-wrap justify-center gap-4 md:gap-10 font-sans font-bold uppercase text-[10px] md:text-xs tracking-[0.2em]">
          <a href="#intro" className="hover:bg-black hover:text-white px-2 transition">The Lead</a>
          <a href="#box-model" className="hover:bg-black hover:text-white px-2 transition">Box Model</a>
          <a href="#responsive" className="hover:bg-black hover:text-white px-2 transition">Responsiveness</a>
          <a href="#colors" className="hover:bg-black hover:text-white px-2 transition">Colors</a>
          <a href="#typography" className="hover:bg-black hover:text-white px-2 transition">Typography</a>
          <a href="#layouts" className="hover:bg-black hover:text-white px-2 transition">Layouts</a>
          <a href="#utilities" className="hover:bg-black hover:text-white px-2 transition">States</a>
          <a href="#forms" className="hover:bg-black hover:text-white px-2 transition">Forms</a>
          <a href="#filters" className="hover:bg-black hover:text-white px-2 transition">Effects</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto">
        {/* Top Feature: Two Column Lead */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12 border-b-2 border-stone-300 pb-12">
          
          <div className="lg:col-span-2">
            <article id="intro">
              <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase leading-[0.9] tracking-tight">
                The Death of the Cascading Stylesheet?
              </h2>
              <p className="text-xs font-sans font-bold mb-4 uppercase text-stone-500 italic border-l-4 border-black pl-3">
                By {authorName} | Published {todayDate}
              </p>
              
              <div className="columns-1 md:columns-2 gap-8 text-justify leading-relaxed">
                <p className="mb-4">
                  <span className="text-7xl float-left mr-3 mt-1 font-black leading-none">S</span>
                  ince the dawn of the internet, developers have struggled with the "C" in CSS. Global styles bleeding into other elements and the constant battle with specificity created a nightmare for scale. Tailwind CSS proposes a radical solution: stop writing CSS.
                </p>
                <p className="mb-4">
                  Instead of a separate stylesheet file, Tailwind provides atomic utility classes. To some, it looks messy at first. But for the modern developer, it represents ultimate freedom. You can build complex, custom layouts in seconds without once leaving your HTML structure. 
                </p>
                <p>
                  As we explore this framework, we find that the power lies in its constraints. You aren't picking random hex codes; you are picking from a curated design system that ensures consistency across every page of your blog or application.
                </p>
              </div>
            </article>
          </div>

          <div className="bg-stone-200 p-6 border-l-2 border-black">
            <h3 className="font-sans font-black uppercase text-sm mb-4 tracking-widest border-b border-black pb-2">Top Tutorials</h3>
            <ul className="space-y-4">
              <li className="border-b border-stone-400 pb-2">
                <span className="text-xs font-sans font-bold text-stone-500 uppercase">01</span>
                <p className="font-bold leading-tight hover:underline cursor-pointer">Mastering the Flexbox Grid in 5 Minutes</p>
              </li>
              <li className="border-b border-stone-400 pb-2">
                <span className="text-xs font-sans font-bold text-stone-500 uppercase">02</span>
                <p className="font-bold leading-tight hover:underline cursor-pointer">Pseudo-classes: Hover, Active, and Focus</p>
              </li>
              <li className="border-b border-stone-400 pb-2">
                <span className="text-xs font-sans font-bold text-stone-500 uppercase">03</span>
                <p className="font-bold leading-tight hover:underline cursor-pointer">The Magic of Dark Mode Toggles</p>
              </li>
            </ul>
            <div className="mt-8 pt-4 border-t-4 border-double border-black">
              <p className="text-xs italic text-center uppercase font-bold tracking-tighter">"CSS is the paint, Tailwind is the brush."</p>
            </div>
          </div>
        </div>

        {/* THE SPACING LEDGER (BOX MODEL) */}
        <section id="box-model" className="mb-12 border-b-2 border-stone-300 pb-12">
            <h3 className="text-3xl font-black uppercase mb-6 bg-black text-white inline-block px-2 italic">The Spacing Ledger</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-black p-0 bg-stone-300">
                    <div className="bg-stone-400 p-8 m-4 border-2 border-dashed border-stone-600 text-center">
                        <span className="font-mono text-xs uppercase font-bold bg-white px-2">Margin (m-4)</span>
                        <div className="bg-[#f9f7f1] p-12 border border-black shadow-lg">
                            <span className="font-mono text-xs uppercase font-bold bg-stone-300 px-2">Padding (p-12)</span>
                            <p className="mt-4 font-bold">The Box Model visualized.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center space-y-4 font-sans">
                    <p className="text-sm border-l-2 border-black pl-4 leading-relaxed">
                        <strong>Padding (p-*)</strong> controls the space <em>inside</em> the border. <br/>
                        <strong>Margin (m-*)</strong> controls the space <em>outside</em> the border. <br/>
                        <strong>Space-Between (space-x/y-*)</strong> allows you to add gaps between child elements without touching the children themselves.
                    </p>
                    <div className="flex gap-2">
                        <div className="w-10 h-10 bg-black"></div>
                        <div className="w-10 h-10 bg-stone-500"></div>
                        <div className="w-10 h-10 bg-stone-300"></div>
                        <span className="text-xs self-center font-bold">gap-2</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Middle Section: 3-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 italic">
          
          {/* Column 1: Responsive Design */}
          <section id="responsive" className="border-r-0 md:border-r border-stone-300 pr-0 md:pr-4">
            <h4 className="text-xl font-black uppercase border-b-2 border-black mb-4">Mobile First</h4>
            <p className="text-sm leading-snug mb-4">
              Tailwind uses a mobile-first breakpoint system. It means that unprefixed classes (like <code className="bg-stone-200">uppercase</code>) apply to all screen sizes, while prefixed classes (like <code className="bg-stone-200 font-bold">md:uppercase</code>) only apply at the specified breakpoint and above.
            </p>
            <div className="bg-black text-white p-4 text-xs font-mono lowercase">
              class="w-full md:w-1/2 lg:w-1/3"
            </div>
          </section>

          {/* Column 2: The Color Palette */}
          <section id="colors" className="border-r-0 md:border-r border-stone-300 px-0 md:px-4">
            <h4 className="text-xl font-black uppercase border-b-2 border-black mb-4">The Ink & Paper</h4>
            <p className="text-sm leading-snug mb-4">
              Standardized colors allow for a professional finish. Every color in Tailwind comes with 10 shades, from 50 (lightest) to 950 (darkest).
            </p>
            <div className="flex gap-1 h-12 border border-black p-1">
              <div className="flex-1 bg-stone-900"></div>
              <div className="flex-1 bg-stone-600"></div>
              <div className="flex-1 bg-stone-400"></div>
              <div className="flex-1 bg-stone-200"></div>
              <div className="flex-1 bg-stone-50 border border-stone-200"></div>
            </div>
          </section>

          {/* Column 3: Typography */}
          <section id="typography" className="pl-0 md:pl-4">
            <h4 className="text-xl font-black uppercase border-b-2 border-black mb-4">Typesetting</h4>
            <p className="text-sm leading-snug mb-2">Tailwind offers three font families out of the box:</p>
            <ul className="text-xs space-y-2 font-sans">
              <li className="font-serif">1. Sans - Modern, clean lines.</li>
              <li className="font-serif italic text-lg">2. Serif - Classic, editorial feel.</li>
              <li className="font-mono">3. Mono - For code and data.</li>
            </ul>
          </section>
        </div>

        {/* --- THE TYPOGRAPHIC SCALE --- */}
        <section id="typography-sizing" className="border-y-2 border-black py-12 mb-12">
          <h3 className="text-3xl font-black uppercase mb-8 text-center tracking-[0.2em]">The Typographic Specimen</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-xs uppercase font-sans font-bold text-stone-500 mb-4 border-b border-stone-300">Scale Analysis</p>
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono text-stone-400 italic block">text-6xl</span>
                  <h2 className="text-6xl font-black leading-none">Broadsheet</h2>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-stone-400 italic block">text-4xl</span>
                  <h3 className="text-4xl font-bold">Headline News</h3>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-stone-400 italic block">text-2xl</span>
                  <h4 className="text-2xl font-semibold">Sub-heading editorial style</h4>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-stone-400 italic block">text-base</span>
                  <p className="text-base leading-relaxed">Standard body copy. This represents the foundation of readability in our newspaper layout, utilizing the default 16px size.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 border border-stone-300 shadow-inner">
              <p className="text-xs uppercase font-sans font-bold text-stone-500 mb-6 border-b border-stone-300">Leading & Tracking</p>
              <div className="space-y-8">
                <p className="leading-loose text-sm italic">
                  <strong>leading-loose:</strong> This paragraph demonstrates increased line height, often used for artistic pull-quotes or legal disclaimers to improve white space.
                </p>
                <p className="tracking-[0.5em] uppercase text-xs font-black text-center">
                  tracking-widest: Letter Spacing
                </p>
                <div className="border-t-2 border-black pt-4">
                  <p className="text-7xl font-black tracking-tighter text-center">TIGHT</p>
                  <p className="text-[10px] text-center font-sans uppercase font-bold tracking-widest mt-1">tracking-tighter</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- THE LAYOUT LABORATORY --- */}
        <section id="layouts" className="mb-16">
          <div className="flex items-baseline gap-4 mb-6">
            <h3 className="text-3xl font-black uppercase">Architecture</h3>
            <span className="text-sm italic text-stone-500">A Study in Structural Composition</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Featured Image Layout */}
            <div className="md:col-span-2 md:row-span-2 border-2 border-black p-2 bg-white">
              <div className="bg-stone-200 w-full h-64 md:h-full flex flex-col items-center justify-center border border-stone-400 relative group overflow-hidden">
                <span className="font-bold text-stone-400 uppercase tracking-widest">Multimedia Feature</span>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                {/* Peer State Demo */}
                <input type="checkbox" className="peer absolute top-2 right-2 opacity-0" id="reveal" />
                <label htmlFor="reveal" className="absolute bottom-4 bg-black text-white px-3 py-1 text-xs cursor-pointer select-none peer-checked:bg-red-700">
                    Peer State Toggle
                </label>
              </div>
            </div>

            {/* Nested Grid Column */}
            <div className="md:col-span-2 border-b-2 border-black pb-4">
              <h5 className="font-sans font-black uppercase text-xs mb-2 tracking-widest border-l-4 border-black pl-2">The Grid System (Grid-Cols-2)</h5>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-20 bg-stone-900 text-white p-2 text-[10px] uppercase font-bold flex items-center justify-center">Grid A</div>
                <div className="h-20 bg-stone-400 text-stone-900 p-2 text-[10px] uppercase font-bold flex items-center justify-center">Grid B</div>
              </div>
              <p className="text-[10px] mt-2 italic font-sans uppercase">Columns are easily defined with grid-cols-[n]</p>
            </div>

            {/* Flexbox Alignment Study */}
            <div className="md:col-span-1 border-r border-stone-300 pr-4">
              <h5 className="font-sans font-black uppercase text-[10px] mb-2 underline">Flex Justification</h5>
              <div className="flex justify-between items-center border border-stone-300 p-2 h-16 bg-white">
                <div className="w-4 h-4 bg-black"></div>
                <div className="w-4 h-4 bg-black"></div>
                <div className="w-4 h-4 bg-black"></div>
              </div>
              <p className="text-[9px] mt-1 font-mono uppercase text-center">justify-between</p>
            </div>

            <div className="md:col-span-1">
              <h5 className="font-sans font-black uppercase text-[10px] mb-2 underline text-red-800">Flex Wrap</h5>
              <div className="flex flex-wrap gap-1 p-1 bg-stone-100 border border-black">
                <div className="w-6 h-6 bg-stone-800"></div>
                <div className="w-6 h-6 bg-stone-800"></div>
                <div className="w-6 h-6 bg-stone-800"></div>
                <div className="w-6 h-6 bg-stone-800"></div>
                <div className="w-6 h-6 bg-stone-800"></div>
              </div>
              <p className="text-[9px] mt-1 font-mono uppercase text-center">flex-wrap</p>
            </div>
          </div>
        </section>

        {/* FORMS & INPUTS (THE PUBLIC NOTICE) */}
        <section id="forms" className="mb-16 border-t-2 border-black pt-8">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-stone-200 p-8 border border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div>
                    <h3 className="text-2xl font-black uppercase mb-4 underline">Public Notices</h3>
                    <p className="text-sm italic mb-6">"All styling for inputs is handled via focus rings and outline offsets."</p>
                    <div className="space-y-4 font-sans">
                        <div>
                            <label className="block text-xs font-bold uppercase mb-1">Electronic Mail</label>
                            <input type="text" placeholder="user@domain.com" className="w-full bg-white border border-black p-2 text-sm focus:ring-2 focus:ring-black outline-none transition-all placeholder:italic" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase mb-1">Subscriber Message</label>
                            <textarea placeholder="Type your inquiry..." className="w-full bg-white border border-black p-2 text-sm h-24 focus:ring-2 focus:ring-black outline-none transition-all"></textarea>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center space-y-4">
                    <div className="p-4 border-2 border-dashed border-black">
                        <p className="font-bold text-xl uppercase mb-2">Checkboxes & Radios</p>
                        <div className="flex gap-4 font-sans text-xs font-bold">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="accent-black w-4 h-4" /> Option A
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="r" className="accent-black w-4 h-4" /> Option B
                            </label>
                        </div>
                    </div>
                    <button className="w-full bg-black text-white py-3 font-black uppercase tracking-widest hover:invert transition-all active:scale-95">
                        Submit Dispatch
                    </button>
                </div>
             </div>
        </section>

        {/* FILTERS & EFFECTS (THE ART GALLERY) */}
        <section id="filters" className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 border-4 border-double border-black p-4 text-center">
                <h4 className="font-black uppercase mb-4">Blur & Shadow</h4>
                <div className="relative group cursor-none">
                    <div className="w-full h-32 bg-stone-400 group-hover:blur-sm transition-all duration-700"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 font-black uppercase text-xl transition-all">
                        Classified
                    </div>
                </div>
                <p className="text-[10px] mt-2 italic">filter: blur-[n]</p>
            </div>
            <div className="md:col-span-1 border-4 border-double border-black p-4 text-center">
                <h4 className="font-black uppercase mb-4">Grayscale</h4>
                <div className="w-full h-32 bg-red-600 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"></div>
                <p className="text-[10px] mt-2 italic">filter: grayscale-[n]</p>
            </div>
            <div className="md:col-span-1 border-4 border-double border-black p-4 text-center">
                <h4 className="font-black uppercase mb-4">Opacity & Skew</h4>
                <div className="w-full h-32 bg-black opacity-30 hover:opacity-100 hover:skew-x-6 transition-all duration-300"></div>
                <p className="text-[10px] mt-2 italic">transform: skew-x-[n]</p>
            </div>
        </section>

        {/* Bottom Feature: Buttons and Visuals */}
        <section id="utilities" className="border-t-4 border-black pt-8 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <h3 className="text-3xl font-black uppercase leading-none mb-4 italic">The Interaction Archives</h3>
              <p className="text-sm leading-relaxed">Utility classes enable complex logic like <strong>hover</strong>, <strong>active</strong>, <strong>focus</strong>, and even parent-state tracking with <strong>group-hover</strong>.</p>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 gap-4">
              <div className="border-2 border-black p-4 text-center hover:bg-black hover:text-white transition-all cursor-crosshair">
                <span className="uppercase font-bold text-xs font-sans tracking-[0.3em]">Hover: Invert</span>
              </div>
              <div className="border-2 border-black p-4 text-center active:scale-90 transition-transform bg-stone-900 text-white cursor-pointer ring-offset-2 focus:ring-4 ring-black outline-none" tabIndex={0}>
                <span className="uppercase font-bold text-xs font-sans tracking-[0.3em]">Active: Scale</span>
              </div>
              <div className="border-2 border-black p-4 text-center group cursor-help overflow-hidden relative">
                <span className="uppercase font-bold text-xs font-sans tracking-[0.3em] transition-all duration-500 group-hover:translate-y-10 block">Translate</span>
                <span className="uppercase font-bold text-[8px] font-sans tracking-[0.3em] absolute inset-0 flex items-center justify-center -translate-y-10 group-hover:translate-y-0 transition-all duration-500 italic">Entered the Group</span>
              </div>
              <div className="border-2 border-black p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1">
                <span className="uppercase font-bold text-xs font-sans tracking-[0.3em]">Drop Shadow</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="max-w-6xl mx-auto border-t-4 border-black mt-16 pt-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h4 className="text-4xl font-black uppercase tracking-tighter mb-2 italic underline">Tailwind Times</h4>
            <p className="text-xs font-sans leading-relaxed max-w-sm">
              Established in 2025 as a study in utility-first architecture. This project serves as my <strong>M1 | FA4 Submission</strong> for Web Programming course. Built using Next.js and Tailwind CSS framework.
            </p>
          </div>
          <div>
            <h5 className="font-black uppercase text-xs border-b border-black mb-3 pb-1">Editor-in-Chief</h5>
            <p className="text-sm font-bold uppercase">{authorName}</p>
            <p className="text-[10px] font-sans text-stone-600 mt-1 uppercase font-black">Full- Stack Developer and Designer</p>
          </div>
          <div className="text-right">
            <h5 className="font-black uppercase text-xs border-b border-black mb-3 pb-1">Edition Info</h5>
            <p className="text-[10px] uppercase font-bold tracking-widest">{todayDate}</p>
            <p className="text-[10px] text-stone-500 italic mt-1 font-sans">Full Comprehensive Guide - Page 01</p>
            <p className="text-[10px] text-stone-500 uppercase mt-1 font-sans font-black tracking-widest">Davao City, PH</p>
          </div>
        </div>
        <div className="mt-12 text-center text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-stone-400 border-t border-stone-300 pt-4">
          *** END OF EDITION ***
        </div>
      </footer>
    </div>
  );
}