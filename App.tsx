
import React, { useState, useEffect } from 'react';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HEADER SECTION */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-slate-900 uppercase">ASAD ALI <span className="text-blue-600">SHAMI</span></span>
            {!scrolled && <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-500">Exclusively for Real Estate Agents</span>}
          </div>
          <WhatsAppButton variant="sticky" />
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Stop Chasing Buyers. Start Dominating Your Local <span className="text-blue-600">Listing Inventory.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto">
              I build custom Meta Ad funnels that deliver motivated homeowners directly to your WhatsApp. No cold calling. No generic leads.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-12 text-left">
              {[
                { title: "Niche Focused", desc: "Exclusively for real estate seller agents." },
                { title: "Seller Specific", desc: "Targeting homeowners, not window shoppers." },
                { title: "Predictable Results", desc: "Replace door knocking with a scalable system." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                  <div className="text-blue-600 mb-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <WhatsAppButton className="mx-auto" />
            <p className="mt-4 text-sm font-medium text-slate-400">Join 15+ agents booking listing appointments this week.</p>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM AWARENESS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center uppercase tracking-tight">The "Old Way" of Getting Listings is Dying</h2>
            <div className="space-y-6">
              {[
                "Buying 'shared' leads that 5 other agents are calling simultaneously.",
                "Spending 4 hours a day door-knocking or cold-calling unmotivated homeowners.",
                "Relying on referrals that come 'whenever they feel like it'.",
                "Working with agencies that send you 100 'buyer' leads when you asked for 1 listing."
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-red-50/50 rounded-lg border-l-4 border-red-500">
                  <svg className="w-6 h-6 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-slate-700 font-medium">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center italic text-slate-500">
              "You don't need more leads. You need more <strong>conversations</strong> with homeowners ready to sell."
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOLUTION SECTION */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Meta Listing Engine</h2>
              <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                I don't just 'run ads'. I build a dedicated system that identifies homeowners in your specific farm area who are displaying 'selling intent' signals.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Hyper-local targeting (Zip code & Radius focus)",
                  "Custom-tailored 'Home Value' or 'Local Market' hooks",
                  "Direct-to-WhatsApp automation to stop lead leakage",
                  "Qualifying filters to weed out curious renters"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <WhatsAppButton variant="primary" />
            </div>
            <div className="relative">
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
                 <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-700">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                       <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                       </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Real-Time Results</h4>
                      <p className="text-xs text-slate-500 uppercase tracking-widest">Live Dashboard Concept</p>
                    </div>
                 </div>
                 <div className="space-y-4">
                    <div className="h-4 bg-slate-700 rounded-full w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-slate-700 rounded-full w-full animate-pulse delay-75"></div>
                    <div className="h-4 bg-slate-700 rounded-full w-1/2 animate-pulse delay-150"></div>
                 </div>
                 <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                      <p className="text-xs text-slate-500 uppercase font-bold mb-1">Cost Per Lead</p>
                      <p className="text-2xl font-bold text-blue-500">$18.40</p>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                      <p className="text-xs text-slate-500 uppercase font-bold mb-1">Intent Rate</p>
                      <p className="text-2xl font-bold text-green-500">84%</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY ME (POSITIONING) */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why I’m Different From the "Ad Agency" You Fired Last Month</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-red-500 mb-4">The Other Guys</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex gap-2">✕ Automate everything with zero local context</li>
                <li className="flex gap-2">✕ Send you "Buyer" leads disguised as sellers</li>
                <li className="flex gap-2">✕ Locked contracts for 6 months</li>
                <li className="flex gap-2">✕ Hard to reach, slow to communicate</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-600 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-tighter">Freelance Specialist</div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">My Approach</h3>
              <ul className="space-y-4 text-slate-800">
                <li className="flex gap-2 font-semibold">✓ Custom localized ad creative for YOUR market</li>
                <li className="flex gap-2 font-semibold">✓ 100% Focus on Seller Listings ONLY</li>
                <li className="flex gap-2 font-semibold">✓ Month-to-month, performance-driven</li>
                <li className="flex gap-2 font-semibold">✓ One-on-one WhatsApp support with me</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
             <WhatsAppButton variant="outline" />
          </div>
        </div>
      </section>

      {/* 6. PROCESS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">The 4-Step Listing Pipeline</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategy", desc: "We define your target farm area and unique value prop." },
              { step: "02", title: "Launch", desc: "I create & deploy high-intent ads on Meta platforms." },
              { step: "03", title: "Filter", desc: "Leads are qualified through an automated funnel." },
              { step: "04", title: "Convert", desc: "Hot leads hit your WhatsApp. You book the appraisal." }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-5xl font-black text-slate-100 absolute -top-8 left-0 z-0">{item.step}</div>
                <div className="relative z-10">
                  <h4 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SOCIAL PROOF / CREDIBILITY SECTION */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">The Standard I Work By</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <p className="text-4xl font-black text-blue-500 mb-2">100%</p>
              <p className="text-slate-400 font-medium">Seller Focus</p>
            </div>
            <div>
              <p className="text-4xl font-black text-blue-500 mb-2">24h</p>
              <p className="text-slate-400 font-medium">Setup Speed</p>
            </div>
            <div>
              <p className="text-4xl font-black text-blue-500 mb-2">Direct</p>
              <p className="text-slate-400 font-medium">WhatsApp Access</p>
            </div>
          </div>
          <p className="mt-12 text-slate-400 max-w-2xl mx-auto italic">
            "I don't play games with buyer leads. If it's not a homeowner looking to sell, I don't count it. My system is built for agents who want listings, not a bloated database."
          </p>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Will these leads actually want to sell?", a: "Yes. Our ads target homeowners using specific triggers (market reports, appraisal requests) that signal a desire to move. We filter out renters through Meta's demographic data." },
              { q: "How much ad budget do I need?", a: "I recommend starting with at least $30-$50 per day to see consistent results in most markets." },
              { q: "How soon can I see results?", a: "Ads typically go live within 48 hours. Leads usually start arriving in your inbox within 24 hours of launch." },
              { q: "Do you work with buyers too?", a: "No. My systems are 100% optimized for Seller Leads. If you want buyer leads, there are 1,000 other agencies that can help you." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-slate-100 pb-6">
                <h4 className="font-bold text-slate-900 mb-2 flex gap-3">
                  <span className="text-blue-600">Q.</span> {faq.q}
                </h4>
                <p className="text-slate-600 text-sm pl-7 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Ready to Stop Cold Calling and Start Listing?</h2>
          <p className="text-xl text-blue-100 mb-12">
            Let's have a quick 5-minute chat on WhatsApp to see if your area is available. I only work with one agent per zip code.
          </p>
          <div className="flex flex-col items-center gap-6">
            <WhatsAppButton className="!bg-white !text-blue-600 hover:!bg-blue-50" text="Secure My Zip Code on WhatsApp" />
            <p className="text-blue-200 text-sm font-medium">No obligation. No sales pitch. Just results.</p>
          </div>
        </div>
      </section>

      <footer className="py-10 bg-white text-slate-400 text-center border-t border-slate-100">
        <div className="container mx-auto px-6">
          <p className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">ASAD ALI SHAMI</p>
          <p className="text-xs">© {new Date().getFullYear()} - Meta Ads Specialist for Real Estate Agents.</p>
          <div className="mt-4 flex justify-center gap-6 text-[10px] font-semibold uppercase tracking-widest">
            <span>Privately Managed</span>
            <span>Performance Based</span>
            <span>Seller Focused</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
