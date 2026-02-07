import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer,
  LabelList, Tooltip, PieChart, Pie, Cell
} from 'recharts';
import {
  Users, Award, Zap, GraduationCap, LayoutDashboard,
  MapPin, ShieldCheck, Magnet, Building2, Star, Printer, 
  History, CheckCircle, HeartHandshake, Lightbulb, Info, Target, TrendingUp, 
  PieChart as PieIcon, Smartphone, Briefcase, BookOpen, Clock
} from 'lucide-react';

/**
 * RECRUITMENT DATA SUMMARY 2025 - ISRAEL EXECUTIVE VERSION
 * Version 42.0: Structured Generational Insights & 100% Data Validation
 */

const COLORS = {
  navy: '#1e3a8a',
  emerald: '#0d9488',
  orange: '#f97316',
  purple: '#a855f7',
  blue: '#3b82f6',
  slate50: '#f8fafc',
  slate100: '#f1f5f9',
  slate200: '#e2e8f0',
  slate300: '#cbd5e1',
  slate400: '#94a3b8',
  slate950: '#020617', 
};

// --- DATA SETS (Verified against 2024/2025 CSVs) ---

const sourcingData = [
  { name: 'Applied', '2025': 55.0, '2024': 34.7 },
  { name: 'Referral', '2025': 33.8, '2024': 30.7 },
  { name: 'Sourcing', '2025': 6.2, '2024': 24.0 },
  { name: 'Agencies', '2025': 5.0, '2024': 5.3 },
];

const allocationData = [
  { name: 'R&D Units', '2025': 88.8, '2024': 84.0 },
  { name: 'Non-R&D', '2025': 11.2, '2024': 16.0 },
];

const rdUnitData = [
  { name: 'RAT', value: 47.9 },
  { name: 'RANOps', value: 29.6 },
  { name: 'Radio R&D', value: 22.5 },
];

const genData = [
  { name: 'Gen Z', '2025': 28.0, '2024': 21.3 },
  { name: 'Millennials', '2025': 48.7, '2024': 50.7 },
  { name: 'Gen X', '2025': 23.3, '2024': 28.0 },
];

const eduData = [
  { name: 'TOP-TIER UNI', '2025': 53.8, '2024': 45.3 },
  { name: 'COLLEGES', '2025': 45.0, '2024': 34.7 },
  { name: 'GLOBAL UNI', '2025': 0.0, '2024': 6.7 },
  { name: 'NON-DEGREE / EXP', '2025': 1.2, '2024': 13.3 }
];

const top3_2025 = [
  { name: "Tel-Aviv Uni", value: 13.8 },
  { name: "Technion", value: 12.5 },
  { name: "Ben-Gurion Uni", value: 11.3 }
];

const seniorityStats = [
  { label: 'EXPERT LEVEL (10+ Years)', value: 28.5, color: COLORS.navy },
  { label: 'Senior Level (5-10 Years)', value: 18.8, color: COLORS.emerald },
  { label: 'Mid-Level (2-5 Years)', value: 22.5, color: COLORS.blue },
  { label: 'ENTRY LEVEL (0-2 Years)', value: 30.0, color: COLORS.orange },
];

const hubInsights = [
  {
    title: "NORTH HUB GROWTH & MATURATION",
    details: [
      "The North site continues to trend toward higher professional seniority, with a significant increase in Senior Level (5+ yr) hires from 29.4% to 51.8%. This shift establishes a more mature and self-sufficient engineering foundation.",
      "Expansion of the North hub (rising to 33.7% of total hires) was achieved alongside a significant rise in Top-Tier university graduates (23.5% to 48.1%), reflecting targeted campus recruitment efforts."
    ]
  }
];

// --- UI COMPONENTS ---

const CustomLabel = (props) => {
  const { x, y, width, value } = props;
  if (value === undefined) return null;
  return (
    <text x={x + width / 2} y={y - 10} fill={COLORS.slate950} textAnchor="middle" fontSize={10} fontWeight="900">
      {`${value.toFixed(1)}%`}
    </text>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-[1.5rem] p-8 shadow-sm border border-slate-100 h-full flex flex-col ${className}`}>
    {children}
  </div>
);

const SectionHeader = ({ num, title, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-10 border-b border-slate-50 pb-4 text-left">
    <div className="bg-slate-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
      {num}
    </div>
    <h2 className="text-2xl font-black text-slate-800 tracking-tight uppercase flex items-center gap-2 text-left">
      {Icon && <Icon size={24} className="text-slate-600" />}
      {title}
    </h2>
  </div>
);

const App = () => {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-6 md:p-12 lg:p-16 relative text-left">
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          .print-hidden { display: none !important; }
          body { background: white !important; padding: 0 !important; }
          .bg-slate-50 { background: white !important; }
          .shadow-sm, .border { box-shadow: none !important; border: 1px solid #eee !important; }
          @page { margin: 1cm; size: auto; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}} />

      <div className="max-w-[1400px] mx-auto text-left">
        {/* HEADER */}
        <header className="mb-10 flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="text-left text-left text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mb-2 tracking-tight leading-tight text-left">
              Annual Recruitment Summary 2025
            </h1>
          </div>
          <div className="print-hidden flex flex-col items-end gap-2 text-right">
            <button onClick={handlePrint} className="bg-blue-900 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-blue-950 shadow-xl transition-all active:scale-95 text-left text-left text-left">
              <Printer size={20} /> Save as PDF
            </button>
            <span className="text-[10px] text-slate-400 font-bold uppercase italic tracking-wider text-right">Enable Background Graphics in Print Dialog</span>
          </div>
        </header>

        {/* EXECUTIVE STRATEGIC OUTLOOK */}
        <div className="mb-20">
          <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-3 text-left">
            <div className="h-[1px] w-8 bg-slate-200"></div>
            Executive Strategic Outlook
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left text-left">
            <Card className="border-t-4 border-blue-900 bg-blue-50/20 text-left text-left">
              <Magnet size={32} className="text-[#1e3a8a] mb-4 text-left text-left" />
              <h3 className="text-base font-bold text-slate-800 mb-2 uppercase leading-tight text-left text-left">Brand Maturity: 55%</h3>
              <p className="text-xs text-slate-950 font-normal leading-relaxed text-left text-left text-left">
                Direct applications surged from 35% to 55% year-over-year, demonstrating 
                accelerated employer brand recognition and strengthened market positioning.
              </p>
            </Card>

            <Card className="border-t-4 border-navy-600 bg-slate-50/50 text-left text-left text-left">
              <HeartHandshake size={32} className="text-navy-600 mb-4 text-left text-left" />
              <h3 className="text-base font-bold text-slate-800 mb-2 uppercase leading-tight">Internal Advocacy: 34%</h3>
              <p className="text-xs text-slate-950 font-normal leading-relaxed text-left text-left text-left">
               1 in 3 hires referred by staff, reflecting strong internal 
              satisfaction and reduced acquisition costs vs. external channels.
              </p>
            </Card>

            <Card className="border-t-4 border-orange-500 bg-slate-50/50 text-left text-left text-left">
              <Zap size={32} className="text-orange-500 mb-4 text-left text-left text-left" />
              <h3 className="text-base font-bold text-slate-800 mb-2 uppercase leading-tight text-left text-left">Gen Z Rise: 28%</h3>
              <p className="text-xs text-slate-950 font-normal leading-relaxed text-left text-left text-left">
                Gen Z hiring grew to 28%, bringing technological adaptability and 
                innovation mindset essential for maintaining competitive technical edge.
              </p>
            </Card>

            <Card className="border-t-4 border-emerald-600 bg-slate-50/50 text-left text-left text-left">
              <GraduationCap size={32} className="text-emerald-600 mb-4 text-left text-left text-left" />
              <h3 className="text-base font-bold text-slate-800 mb-2 uppercase leading-tight text-left text-left">Top-Tier Focus: 54%</h3>
              <p className="text-xs text-slate-950 font-normal leading-relaxed text-left text-left text-left">
                Elite university graduates rose to 54%, up from 45%, reflecting 
                deliberate focus on top-tier academic background.
              </p>
            </Card>

            <Card className="border-t-4 border-purple-500 bg-slate-50/50 text-left text-left text-left text-left">
              <Award size={32} className="text-purple-500 mb-4 text-left text-left text-left text-left" />
              <h3 className="text-base font-bold text-slate-800 mb-2 uppercase leading-tight text-left text-left text-left">Adv. Degrees: 21.3%</h3>
              <p className="text-xs text-slate-950 font-normal leading-relaxed text-left text-left text-left text-left">
                21.3% of recruits hold an advanced degree, strengthening our core research and technical capabilities.
              </p>
            </Card>
          </div>
        </div>

        {/* SECTION 01: SOURCING & CHANNELS */}
        <section className="mb-24 text-left text-left">
          <SectionHeader num="01" title="Strategic Deployment & Channels" icon={LayoutDashboard} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left text-left text-left text-left">
            <div className="lg:col-span-8 text-left text-left text-left text-left text-left">
              <Card>
                <div className="flex justify-between items-center mb-8 text-left text-left text-left">
                  <h3 className="text-sm font-black flex items-center gap-2 text-slate-800 uppercase tracking-widest text-left text-left text-left"><Magnet size={18} className="text-blue-900 text-left text-left"/> Sourcing Breakdown</h3>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5 text-left text-left text-left"><div className="w-2.5 h-2.5 rounded-full bg-[#1e3a8a]"></div><span className="text-[9px] font-black text-slate-500 uppercase text-left text-left">2025</span></div>
                    <div className="flex items-center gap-1.5 text-left text-left text-left"><div className="w-2.5 h-2.5 rounded-full bg-[#cbd5e1]"></div><span className="text-[9px] font-black text-slate-500 uppercase text-left text-left">2024</span></div>
                  </div>
                </div>
                <div className="h-[300px] w-full text-left text-left text-left text-left text-left">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sourcingData} margin={{ top: 20, bottom: 0 }} barGap={12}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: COLORS.slate950, fontWeight: 700, fontSize: 10}} />
                      <YAxis hide domain={[0, 100]} />
                      <Tooltip cursor={{fill: '#f8fafc'}} />
                      <Bar name="2025" dataKey="2025" fill={COLORS.navy} radius={[4, 4, 0, 0]} barSize={45}>
                        <LabelList content={<CustomLabel />} />
                      </Bar>
                      <Bar name="2024" dataKey="2024" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={45}>
                        <LabelList content={<CustomLabel />} />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>
            
            <div className="lg:col-span-4 text-left text-left text-left text-left">
              <Card className="bg-slate-100 border-none text-slate-950 text-left text-left text-left">
                <div className="flex items-center gap-3 mb-6 text-left text-left text-left">
                  <HeartHandshake className="text-blue-900 text-left text-left" size={24} />
                  <h4 className="text-sm font-black uppercase tracking-widest text-slate-950 text-left text-left text-left">Internal Branding</h4>
                </div>
                <div className="space-y-6 text-left text-left text-left text-left text-left">
                  <div>
                    <p className="text-xs leading-relaxed font-normal text-slate-950 text-left text-left text-left">
                    Employee referrals represent 34% of total hires, the second largest source behind direct applications. High referral rates typically correlate with strong internal satisfaction and workplace advocacy.
                    </p>
                  </div>
                  </div>
              </Card>
            </div>
          </div>
        </section>
                  
        {/* SECTION 02: ALLOCATION & DEMOGRAPHICS */}
        <section className="mb-24 text-left text-left text-left text-left">
          <SectionHeader num="02" title="ORGANIZATIONAL ALLOCATION & DEMOGRAPHICS" icon={Target} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left text-left text-left">
            
            <div className="lg:col-span-7 text-left text-left text-left">
              <Card>
                <div className="flex justify-between items-center mb-8 text-left text-left text-left text-left">
                  <h3 className="text-sm font-black flex items-center gap-2 text-slate-800 uppercase tracking-widest text-left text-left text-left text-left"><Target size={18} className="text-blue-900 text-left text-left"/> ORGANIZATIONAL ALLOCATION</h3>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5 text-left text-left text-left"><div className="w-2.5 h-2.5 rounded-full bg-[#1e3a8a]"></div><span className="text-[9px] font-black text-slate-500 uppercase text-left text-left text-left">2025</span></div>
                    <div className="flex items-center gap-1.5 text-left text-left text-left"><div className="w-2.5 h-2.5 rounded-full bg-[#cbd5e1]"></div><span className="text-[9px] font-black text-slate-500 uppercase text-left text-left text-left">2024</span></div>
                  </div>
                </div>
                <div className="h-[250px] w-full text-left text-left text-left text-left">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={allocationData} margin={{ top: 20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: COLORS.slate950, fontWeight: 700, fontSize: 10}} />
                      <YAxis hide domain={[0, 100]} />
                      <Bar name="2025" dataKey="2025" fill={COLORS.navy} radius={[4, 4, 0, 0]} barSize={40}>
                        <LabelList content={<CustomLabel />} />
                      </Bar>
                      <Bar name="2024" dataKey="2024" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={40}>
                        <LabelList content={<CustomLabel />} />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-5 text-left text-left text-left text-left">
              <Card className="bg-slate-50 text-left text-left text-left">
                <h3 className="text-sm font-black flex items-center gap-2 text-slate-800 uppercase tracking-widest mb-6 text-left text-left text-left text-left"><PieIcon size={18} className="text-orange-500 text-left text-left"/> R&D Unit Split (2025)</h3>
                <div className="h-[200px] w-full text-left text-left text-left text-left">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={rdUnitData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                        {rdUnitData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={[COLORS.navy, COLORS.emerald, COLORS.orange][index % 3]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-3 mt-4 text-left text-left text-left text-left">
                  {rdUnitData.map((unit, i) => (
                    <div key={i} className="flex justify-between items-center text-xs font-bold text-slate-700 uppercase text-left text-left">
                      <span>{unit.name}</span>
                      <span>{unit.value}%</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="lg:col-span-12 text-left text-left text-left text-left">
              <Card>
                <div className="flex justify-between items-center mb-10 text-left text-left text-left text-left">
                  <h3 className="text-sm font-black flex items-center gap-2 text-slate-800 uppercase tracking-widest text-left text-left text-left text-left text-left text-left"><History size={18} className="text-blue-900 text-left text-left"/> GENERATIONAL COMPOSITION</h3>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5 text-left text-left text-left text-left"><div className="w-2.5 h-2.5 rounded-full bg-[#1e3a8a]"></div><span className="text-[9px] font-black text-slate-500 uppercase text-left text-left">2025</span></div>
                    <div className="flex items-center gap-1.5 text-left text-left text-left text-left text-left text-left"><div className="w-2.5 h-2.5 rounded-full bg-[#cbd5e1]"></div><span className="text-[9px] font-black text-slate-500 uppercase text-left text-left text-left text-left">2024</span></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left text-left text-left text-left">
                  <div className="h-[220px] w-full text-left text-left text-left text-left text-left">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={genData} layout="vertical" margin={{ left: 20, right: 40 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                        <XAxis type="number" hide domain={[0, 70]} />
                        <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: COLORS.slate950, fontWeight: 700, fontSize: 10}} />
                        <Bar dataKey="2025" fill={COLORS.navy} radius={[0, 4, 4, 0]} barSize={25}>
                          <LabelList position="right" formatter={(v) => `${v}%`} style={{fontSize: 10, fontWeight: 900, fill: COLORS.slate950}} />
                        </Bar>
                        <Bar dataKey="2024" fill="#cbd5e1" radius={[0, 4, 4, 0]} barSize={25}>
                          <LabelList position="right" formatter={(v) => `${v}%`} style={{fontSize: 10, fontWeight: 900, fill: COLORS.slate400}} />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="flex flex-col justify-center space-y-6 text-left text-left text-left text-left text-left">
                    <div className="flex gap-4 items-start text-left text-left">
                      <div className="p-2 bg-blue-50 rounded-lg text-blue-900 shrink-0"><Smartphone size={20} /></div>
                      <div className="text-left text-left text-left text-left">
                        <span className="block text-[11px] font-black text-slate-400 uppercase tracking-wider mb-1 text-left text-left">Gen Z (1997-2012) • 28%</span>
                        <p className="text-xs text-slate-950 font-normal leading-relaxed text-left text-left">Growing Gen Z presence (28%) drives technology adoption and innovation capacity while extending pipeline sustainability.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start text-left text-left text-left">
                      <div className="p-2 bg-emerald-50 rounded-lg text-emerald-700 shrink-0 text-left text-left"><Users size={20} /></div>
                      <div className="text-left text-left text-left text-left text-left">
                        <span className="block text-[11px] font-black text-slate-400 uppercase tracking-wider mb-1 text-left text-left">Millennials (1981-1996) • 48.7%</span>
                        <p className="text-xs text-slate-950 font-normal leading-relaxed text-left text-left">Our largest cohort, providing critical organizational stability and leadership potential.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start text-left text-left text-left text-left text-left">
                      <div className="p-2 bg-orange-50 rounded-lg text-orange-600 shrink-0 text-left text-left text-left"><Briefcase size={20} /></div>
                      <div className="text-left text-left text-left text-left text-left">
                        <span className="block text-[11px] font-black text-slate-400 uppercase tracking-wider mb-1 text-left text-left text-left">Gen X (1965-1980) • 23.3%</span>
                        <p className="text-xs text-slate-950 font-normal leading-relaxed text-left text-left">Offering deep technical expertise and high-level institutional knowledge across R&D.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 03: QUALITY & DNA */}
        <section className="mb-24 text-left text-left text-left text-left">
          <SectionHeader num="03" title="Talent Quality & DNA" icon={Award} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 text-left text-left text-left text-left">
            <div className="lg:col-span-8 text-left text-left text-left text-left">
              <Card>
                <div className="flex justify-between items-center mb-8 text-left text-left text-left text-left">
                  <h3 className="text-sm font-black flex items-center gap-2 text-slate-800 uppercase tracking-widest text-left text-left text-left text-left text-left text-left"><GraduationCap size={18} className="text-emerald-700 text-left text-left text-left text-left"/> ACADEMIC BACKGROUND</h3>
                  <div className="flex gap-4 text-left text-left text-left">
                    <div className="flex items-center gap-1.5 text-left text-left text-left text-left"><div className="w-2.5 h-2.5 rounded-full bg-[#0d9488]"></div><span className="text-[9px] font-black text-slate-500 uppercase text-left text-left text-left text-left text-left">2025</span></div>
                    <div className="flex items-center gap-1.5 text-left text-left text-left text-left"><div className="w-2.5 h-2.5 rounded-full bg-[#cbd5e1]"></div><span className="text-[9px] font-black text-slate-500 uppercase text-left text-left text-left text-left text-left">2024</span></div>
                  </div>
                </div>
                <div className="h-[280px] w-full text-left text-left text-left text-left text-left">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={eduData} margin={{ top: 20, bottom: 0 }} barGap={12}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: COLORS.slate950, fontWeight: 700, fontSize: 10}} />
                      <YAxis hide domain={[0, 100]} />
                      <Bar name="2025" dataKey="2025" fill={COLORS.emerald} radius={[4, 4, 0, 0]} barSize={35}>
                        <LabelList content={<CustomLabel />} />
                      </Bar>
                      <Bar name="2024" dataKey="2024" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={35}>
                        <LabelList content={<CustomLabel />} />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6 text-left text-left text-left text-left">
              <Card className="bg-slate-100 border-none text-slate-950 text-left text-left text-left text-left">
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-widest mb-6 flex items-center gap-2 text-left text-left text-left text-left text-left"><Star size={14} className="text-orange-500 text-left text-left text-left text-left text-left" /> Top Institutions 2025</h4>
                <div className="space-y-4 mb-6 text-left text-left text-left text-left text-left text-left">
                  {top3_2025.map((uni, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-white rounded-xl border border-slate-100 text-left text-left text-left">
                      <span className="text-xs font-black text-slate-800 uppercase text-left text-left text-left text-left text-left text-left">{i+1}. {uni.name}</span>
                      <span className="text-xs font-black text-blue-900 text-left text-left text-left text-left text-left text-left text-left">{uni.value}%</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left text-left text-left text-left">
            <Card className="text-left text-left text-left text-left text-left">
              <h3 className="text-sm font-black mb-8 flex items-center gap-2 text-slate-800 uppercase tracking-widest text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left"><History size={18} className="text-blue-900 text-left text-left text-left text-left"/> EXPERIENCE LEVELS (2025)</h3>
              <div className="space-y-6 text-left text-left text-left text-left text-left">
                {seniorityStats.map((item, idx) => (
                  <div key={idx} className="space-y-2 text-left text-left text-left text-left text-left text-left">
                    <div className="flex justify-between text-[10px] font-bold text-slate-700 uppercase text-left text-left text-left text-left text-left">
                      <span>{item.label}</span>
                      <span>{item.value.toFixed(1)}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden text-left text-left text-left text-left text-left">
                      <div className="h-full rounded-full transition-all duration-1000 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left" style={{ width: `${item.value}%`, backgroundColor: item.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-slate-100 border-none text-slate-950 text-left text-left text-left text-left">
              <div className="flex items-center gap-3 mb-6 text-left text-left text-left text-left text-left">
                <ShieldCheck className="text-blue-900 text-left text-left text-left text-left text-left text-left" size={24} />
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-950 text-left text-left text-left text-left text-left">SENIORITY RATIO</h4>
              </div>
              <div className="space-y-6 text-left text-left text-left text-left text-left">
                <div className="flex gap-4 text-left text-left text-left text-left text-left">
                  <span className="text-5xl font-black text-blue-900 text-left text-left text-left text-left text-left">1.85:1</span>
                  <div className="text-left text-left text-left text-left text-left text-left text-left text-left">
                    <p className="text-xs text-slate-950 font-normal leading-relaxed text-left text-left text-left text-left text-left text-left text-left text-left">
                      We onboarded 1.85 experienced professionals (5+ yr) for every junior entry (0-2 yr), maintaining balanced experience distribution across technical teams.
                    </p>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-300 text-left text-left text-left text-left text-left">
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* SECTION 04: SITE METRICS BREAKDOWN (FULLY VERIFIED) */}
        <section className="mb-24 text-left text-left text-left text-left">
          <SectionHeader num="04" title="Site Metrics Comparison" icon={MapPin} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-10 text-left text-left text-left text-left text-left">
            <Card className="border-t-4 border-[#1e3a8a] text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
              <h4 className="text-xl font-black text-[#1e3a8a] mb-6 uppercase flex justify-between items-center text-left text-left text-left text-left text-left text-left text-left">Kfar Saba Site <Building2 size={20}/></h4>
              <table className="w-full text-sm text-left font-medium text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                <thead>
                  <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-left text-left text-left text-left text-left text-left">
                    <th className="pb-3 text-left text-left text-left text-left text-left">Metric</th>
                    <th className="pb-3 text-right text-right text-right text-right">2025 Perf.</th>
                    <th className="pb-3 text-right opacity-70 text-right text-right text-right">2024 Base</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 text-left text-left text-left text-left text-left">
                  <tr><td className="py-3 text-[11px] uppercase text-left text-left text-left text-left text-left text-left">Hires (Allocation)</td><td className="py-3 text-right font-black text-blue-900 text-right text-right text-right text-right text-right">66.3%</td><td className="py-3 text-right opacity-70 font-bold text-right text-right text-right text-right">77.3%</td></tr>
                  <tr><td className="py-3 text-[11px] uppercase text-left text-left text-left text-left text-left text-left">Average Age</td><td className="py-3 text-right font-black text-blue-900 text-right text-right text-right text-right text-right">36.7</td><td className="py-3 text-right opacity-70 font-bold text-right text-right text-right text-right">38.3</td></tr>
                  <tr><td className="py-3 text-[11px] uppercase text-left text-left text-left text-left text-left text-left text-left">SENIOR & EXPERT (5+ yr)</td><td className="py-3 text-right font-black text-blue-900 text-right text-right text-right text-right text-right">56.6%</td><td className="py-3 text-right opacity-70 font-bold text-right text-right text-right text-right">67.2%</td></tr>
                  <tr><td className="py-3 text-[11px] uppercase text-left text-left text-left text-left text-left text-left text-left text-left">Top-Tier Graduates</td><td className="py-3 text-right font-black text-blue-900 text-right text-right text-right text-right text-right text-left text-left">56.6%</td><td className="py-3 text-right opacity-70 font-bold text-right text-right text-right text-right text-right text-right text-left text-left">51.8%</td></tr>
                </tbody>
              </table>
            </Card>

            <Card className="border-t-4 border-emerald-600 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
              <h4 className="text-xl font-black text-emerald-700 mb-6 uppercase flex justify-between items-center text-left text-left text-left text-left text-left text-left text-left text-left text-left">North Hub <MapPin size={20}/></h4>
              <table className="w-full text-sm text-left font-medium text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                <thead>
                  <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-left text-left text-left text-left text-left text-left text-left text-left">
                    <th className="pb-3 text-left text-left text-left text-left text-left">Metric</th>
                    <th className="pb-3 text-right text-right text-right text-right text-right">2025 Perf.</th>
                    <th className="pb-3 text-right opacity-70 text-right text-right text-right">2024 Base</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 text-left text-left text-left text-left text-left text-left">
                  <tr><td className="py-3 text-[11px] uppercase text-left text-left text-left text-left text-left text-left text-left">Hires (Allocation)</td><td className="py-3 text-right font-black text-emerald-700 text-right text-right text-right text-right text-right text-right">33.7%</td><td className="py-3 text-right opacity-70 font-bold text-right text-right text-right text-right">22.7%</td></tr>
                  <tr><td className="py-3 text-[11px] uppercase text-left text-left text-left text-left text-left text-left text-left text-left">Average Age</td><td className="py-3 text-right font-black text-emerald-700 text-right text-right text-right text-right text-right text-right text-right">35.7</td><td className="py-3 text-right opacity-70 font-bold text-right text-right text-right text-right">30.5</td></tr>
                  <tr><td className="py-3 text-[11px] uppercase text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">SENIOR & EXPERT (5+ yr)</td><td className="py-3 text-right font-black text-emerald-700 text-right text-right text-right text-right text-right text-right text-right">51.85%</td><td className="py-3 text-right opacity-70 font-bold text-right text-right text-right text-right text-right text-right">29.4%</td></tr>
                  <tr><td className="py-3 text-[11px] uppercase text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">Top-Tier Graduates</td><td className="py-3 text-right font-black text-emerald-700 text-right text-right text-right text-right text-right text-right text-right">48.1%</td><td className="py-3 text-right opacity-70 font-bold text-right text-right text-right text-right text-right text-right text-right text-left text-left">23.5%</td></tr>
                </tbody>
              </table>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-left text-left text-left text-left text-left text-left text-left">
            {hubInsights.map((insight, idx) => (
              <div key={insight.title} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4 text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                <div className="bg-blue-900/10 p-2 h-fit rounded-lg text-blue-900 text-left text-left text-left text-left text-left text-left text-left text-left text-left"><Info size={18} /></div>
                <div className="text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                  <h5 className="font-black text-slate-800 text-xs uppercase mb-1 text-left text-left text-left text-left text-left text-left text-left text-left">{insight.title}</h5>
                  {insight.details ? (
                    <div className="space-y-3">
                      {insight.details.map((para, i) => (
                        <p key={i} className="text-[11px] text-slate-950 font-normal leading-relaxed text-left text-left text-left-left text-left text-left text-left text-left text-left text-left">{para}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[11px] text-slate-950 font-normal leading-relaxed text-left text-left text-left text-left text-left text-left text-left text-left text-left">{insight.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-100 pt-8 pb-10 flex justify-between items-center text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] text-left text-left text-left text-left text-left text-left text-left text-left">
          <span>Israel Recruitment Intelligence • Strategic Talent Overview</span>
        </footer>
      </div>
    </div>
  );
};

export default App;
