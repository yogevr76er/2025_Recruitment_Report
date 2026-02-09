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
 * Version 52.0: Methodology Note added to Executive Overview
 */

// Add print styles
const printStyles = `
  @media print {
    @page {
      size: A4;
      margin: 15mm;
    }
    
    body {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      color-adjust: exact !important;
    }
    
    * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    
    .no-break {
      page-break-inside: avoid;
      break-inside: avoid;
    }
    
    section {
      page-break-before: auto;
    }
    
    .no-print {
      display: none !important;
    }
    
    div, section, article {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = printStyles;
  document.head.appendChild(styleSheet);
}

const BRAND = {
  orange: '#d74602',
  dark: '#3d3935',
  white: '#ffffff',
  green: '#3dae2b',
  purple: '#93358d',
  blue: '#1a428a',
  lightGray: '#f8fafc'
};

const COLORS = {
  navy: BRAND.blue,
  emerald: BRAND.green,
  orange: BRAND.orange,
  purple: BRAND.purple,
  blue: BRAND.blue,
  text: BRAND.dark,
  muted: '#64748b'
};

// --- DATA SETS ---
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
  { name: "Technion Uni", value: 12.5 },
  { name: "Ben-Gurion Uni", value: 11.3 }
];

const seniorityStats = [
  { label: 'EXPERT LEVEL (10+ Years)', value: 28.5, color: BRAND.blue },
  { label: 'Senior Level (5-10 Years)', value: 18.8, color: BRAND.green },
  { label: 'Mid-Level (2-5 Years)', value: 22.5, color: BRAND.purple },
  { label: 'ENTRY LEVEL (0-2 Years)', value: 30.0, color: BRAND.orange },
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

const CustomLabel = (props) => {
  const { x, y, width, value } = props;
  if (value === undefined) return null;
  return (
    <text x={x + width / 2} y={y - 10} fill={BRAND.dark} textAnchor="middle" fontSize={10} fontWeight="900">
      {`${value.toFixed(1)}%`}
    </text>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-[1.5rem] p-8 shadow-sm border border-slate-100 h-full flex flex-col no-break ${className}`}>
    {children}
  </div>
);

const SectionHeader = ({ num, title, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-10 border-b border-slate-50 pb-4 text-left">
    <div style={{ backgroundColor: BRAND.dark }} className="text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
      {num}
    </div>
    <h2 style={{ color: BRAND.dark }} className="text-2xl font-black tracking-tight uppercase flex items-center gap-2 text-left">
      {Icon && <Icon size={24} style={{ color: BRAND.blue }} />}
      {title}
    </h2>
  </div>
);

const App = () => {
  const handlePrint = () => window.print();

  return (
    <div style={{ color: BRAND.dark }} className="min-h-screen bg-slate-50 font-sans p-6 md:p-12 lg:p-16 relative text-left">
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page { size: A4; margin: 12mm 10mm; }
          .print-hidden { display: none !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          body { background: white !important; padding: 0 !important; margin: 0 !important; }
          .bg-slate-50 { background: white !important; }
          .no-break, section, article, .grid > div { page-break-inside: avoid; break-inside: avoid; }
        }
      `}} />

      <div className="max-w-[1400px] mx-auto text-left">
        <header className="mb-10 flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 style={{ color: BRAND.blue }} className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight leading-tight text-left">
              Annual Recruitment Summary 2025
            </h1>
          </div>
          <div className="print-hidden flex flex-col items-end gap-2 text-right">
            <button onClick={handlePrint} style={{ backgroundColor: BRAND.blue }} className="text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 shadow-xl transition-all active:scale-95">
              <Printer size={20} /> Save as PDF
            </button>
            <span className="text-[10px] text-slate-400 font-bold uppercase italic tracking-wider">Enable Background Graphics in Print Dialog</span>
          </div>
        </header>

        <div className="mb-20">
          <h2 style={{ color: BRAND.dark }} className="text-xs font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-3 text-left opacity-60">
            <div className="h-[1px] w-8 bg-slate-200"></div>
            Executive Strategic Outlook
          </h2>
          
          <div className="mb-10 max-w-4xl space-y-4">
            <p style={{ color: BRAND.dark }} className="text-sm leading-relaxed font-normal">
              In 2025, recruitment activity reflected noticeable changes in sourcing mix and talent profile, while continuing to support business needs across sites and core R&D functions.
            </p>
            {/* Added Methodology Note on a separate line, font-normal */}
            <p style={{ color: BRAND.dark }} className="text-sm leading-relaxed font-normal">
              The analysis is based on internal recruitment data, with 2024 data used as a baseline for year-over-year comparison.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
            <Card className="border-t-4" style={{ borderTopColor: BRAND.blue }}>
              <Magnet size={32} style={{ color: BRAND.blue }} className="mb-4" />
              <h3 className="text-base font-black mb-2 uppercase leading-tight">Brand Maturity: 55%</h3>
              <p className="text-xs font-normal leading-relaxed">
                Direct applications surged from 35% to 55% year-over-year, demonstrating 
                accelerated employer brand recognition. This reflects growing candidate awareness and trust in the company, alongside reduced dependency on paid sourcing channels.
              </p>
            </Card>

            <Card className="border-t-4" style={{ borderTopColor: BRAND.dark }}>
              <HeartHandshake size={32} style={{ color: BRAND.dark }} className="mb-4" />
              <h3 className="text-base font-black mb-2 uppercase leading-tight">Internal Advocacy: 34%</h3>
              <p className="text-xs font-normal leading-relaxed">
               1 in 3 hires referred by staff, reflecting strong internal satisfaction. In addition to cost efficiency, referrals consistently bring candidates with stronger alignment to team culture and role expectations.
              </p>
            </Card>

            <Card className="border-t-4" style={{ borderTopColor: BRAND.orange }}>
              <Zap size={32} style={{ color: BRAND.orange }} className="mb-4" />
              <h3 className="text-base font-black mb-2 uppercase leading-tight">Gen Z Rise: 28%</h3>
              <p className="text-xs font-normal leading-relaxed">
                Gen Z hiring grew to 28%, bringing technological adaptability and innovation. This shift supports long-term pipeline sustainability, while requiring continued investment in onboarding, mentoring, and early-career management.
              </p>
            </Card>

            <Card className="border-t-4" style={{ borderTopColor: BRAND.green }}>
              <SafeGraduationCap size={32} style={{ color: BRAND.green }} className="mb-4" />
              <h3 className="text-base font-black mb-2 uppercase leading-tight">Top-Tier Focus: 54%</h3>
              <p className="text-xs font-normal leading-relaxed">
                Elite university graduates rose to 54%, reflecting deliberate focus on academic quality.
              </p>
              <p style={{ color: BRAND.dark }} className="text-[10px] mt-2 italic leading-tight opacity-70">
                Academic background is one of several hiring considerations and complements, rather than replaces experience, practical skills, and team fit.
              </p>
            </Card>

            <Card className="border-t-4" style={{ borderTopColor: BRAND.purple }}>
              <Award size={32} style={{ color: BRAND.purple }} className="mb-4" />
              <h3 className="text-base font-black mb-2 uppercase leading-tight">Adv. Degrees: 21.3%</h3>
              <p className="text-xs font-normal leading-relaxed">
                21.3% hold an advanced degree, supporting complex R&D challenges and long-term technical depth in key domains.
              </p>
            </Card>
          </div>
        </div>

        <section className="mb-24 text-left">
          <SectionHeader num="01" title="Strategic Deployment & Channels" icon={LayoutDashboard} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-8">
              <Card>
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-sm font-black flex items-center gap-2 uppercase tracking-widest"><Magnet size={18} style={{ color: BRAND.blue }}/> Sourcing Breakdown</h3>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: BRAND.blue }}></div><span className="text-[9px] font-black text-slate-500 uppercase">2025</span></div>
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div><span className="text-[9px] font-black text-slate-500 uppercase">2024</span></div>
                  </div>
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sourcingData} margin={{ top: 20, bottom: 0 }} barGap={12}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: BRAND.dark, fontWeight: 700, fontSize: 10}} />
                      <YAxis hide domain={[0, 100]} />
                      <Tooltip cursor={{fill: '#f8fafc'}} />
                      <Bar name="2025" dataKey="2025" fill={BRAND.blue} radius={[4, 4, 0, 0]} barSize={45}>
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
            
            <div className="lg:col-span-4">
              <Card className="bg-slate-100 border-none">
                <div className="flex items-center gap-3 mb-6">
                  <HeartHandshake style={{ color: BRAND.blue }} size={24} />
                  <h4 className="text-sm font-black uppercase tracking-widest">Internal Branding</h4>
                </div>
                <p className="text-xs leading-relaxed font-normal">
                  Employee referrals represent 34% of total hires, indicating high internal advocacy. This channel continues to serve as a strategic asset and will remain a focus area in our recruitment approach.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="mb-24 text-left">
          <SectionHeader num="02" title="ORGANIZATIONAL ALLOCATION & DEMOGRAPHICS" icon={Target} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <Card>
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-sm font-black flex items-center gap-2 uppercase tracking-widest"><Target size={18} style={{ color: BRAND.blue }}/> ALLOCATION</h3>
                  <div className="flex gap-4 text-[9px] font-black text-slate-500">2025/2024</div>
                </div>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={allocationData} margin={{ top: 20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" tick={{fill: BRAND.dark, fontSize: 10, fontWeight: 700}} />
                      <YAxis hide domain={[0, 100]} />
                      <Bar dataKey="2025" fill={BRAND.blue} barSize={40}><LabelList content={<CustomLabel />} /></Bar>
                      <Bar dataKey="2024" fill="#cbd5e1" barSize={40}><LabelList content={<CustomLabel />} /></Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="mt-6 text-[11px] font-normal leading-relaxed italic border-l-2 pl-3" style={{ borderColor: BRAND.blue }}>
                  Hiring allocation continues to reflect a strong prioritization of core R&D roles, in line with product, technology, and business priorities.
                </p>
              </Card>
            </div>

            <div className="lg:col-span-5">
              <Card className="bg-slate-50">
                <h3 className="text-sm font-black flex items-center gap-2 mb-6 uppercase tracking-widest"><PieIcon size={18} style={{ color: BRAND.orange }}/> R&D Unit Split</h3>
                <div className="h-[200px]">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie data={rdUnitData} innerRadius={60} outerRadius={80} dataKey="value">
                        {[BRAND.blue, BRAND.green, BRAND.orange].map((color, i) => <Cell key={i} fill={color} />)}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 space-y-2">
                  {rdUnitData.map((u, i) => (
                    <div key={i} className="flex justify-between text-xs font-black"><span>{u.name}</span><span>{u.value}%</span></div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="lg:col-span-12 text-left">
              <Card>
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-sm font-black flex items-center gap-2 uppercase tracking-widest"><History size={18} style={{ color: BRAND.blue }}/> GENERATIONAL COMPOSITION</h3>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: BRAND.blue }}></div><span className="text-[9px] font-black text-slate-500 uppercase">2025</span></div>
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div><span className="text-[9px] font-black text-slate-500 uppercase">2024</span></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="h-[220px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={genData} layout="vertical" margin={{ left: 20, right: 40 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                        <XAxis type="number" hide domain={[0, 70]} />
                        <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: BRAND.dark, fontWeight: 700, fontSize: 10}} />
                        <Bar dataKey="2025" fill={BRAND.blue} radius={[0, 4, 4, 0]} barSize={25}>
                          <LabelList position="right" formatter={(v) => `${v}%`} style={{fontSize: 10, fontWeight: 900, fill: BRAND.dark}} />
                        </Bar>
                        <Bar dataKey="2024" fill="#cbd5e1" radius={[0, 4, 4, 0]} barSize={25}>
                          <LabelList position="right" formatter={(v) => `${v}%`} style={{fontSize: 10, fontWeight: 900, fill: BRAND.muted}} />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="flex flex-col justify-center space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="p-2 rounded-lg shrink-0" style={{ backgroundColor: BRAND.lightGray, color: BRAND.blue }}><Smartphone size={20} /></div>
                      <div>
                        <span className="block text-[11px] font-black uppercase tracking-wider mb-1" style={{ color: BRAND.muted }}>GEN Z (28%)</span>
                        <p className="text-xs font-normal leading-relaxed">Growing Gen Z representation supports long-term talent sustainability and early adoption of new technologies.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="p-2 rounded-lg shrink-0" style={{ backgroundColor: BRAND.lightGray, color: BRAND.green }}><Users size={20} /></div>
                      <div>
                        <span className="block text-[11px] font-black uppercase tracking-wider mb-1" style={{ color: BRAND.muted }}>MILLENNIALS (48.7%)</span>
                        <p className="text-xs font-normal leading-relaxed">The largest cohort, forming the backbone of team leadership, execution, and delivery.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="p-2 rounded-lg shrink-0" style={{ backgroundColor: BRAND.lightGray, color: BRAND.orange }}><Briefcase size={20} /></div>
                      <div>
                        <span className="block text-[11px] font-black uppercase tracking-wider mb-1" style={{ color: BRAND.muted }}>GEN X (23.3%)</span>
                        <p className="text-xs font-normal leading-relaxed">Bringing deep domain expertise and institutional knowledge across R&D functions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="mb-24 text-left">
          <SectionHeader num="03" title="Talent Quality & DNA" icon={Award} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <Card>
                <h3 className="text-sm font-black mb-8 uppercase tracking-widest">Academic Background</h3>
                <div className="h-[280px]">
                  <ResponsiveContainer>
                    <BarChart data={eduData}>
                      <XAxis dataKey="name" tick={{fontSize: 9, fontWeight: 700, fill: BRAND.dark}} />
                      <YAxis hide />
                      <Bar dataKey="2025" fill={BRAND.green} barSize={35}><LabelList content={<CustomLabel />} /></Bar>
                      <Bar dataKey="2024" fill="#cbd5e1" barSize={35}><LabelList content={<CustomLabel />} /></Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="mt-6 text-[11px] font-normal leading-relaxed italic border-l-2 pl-3" style={{ borderColor: BRAND.green }}>
                  The overall academic profile reflects a quality-focused hiring approach, while maintaining flexibility and avoiding unnecessary narrowing of the talent pool.
                </p>
              </Card>
            </div>
            <div className="lg:col-span-4">
              <Card className="bg-slate-100 border-none">
                <h4 className="text-xs font-black uppercase mb-6 flex items-center gap-2"><Star size={14} style={{ color: BRAND.orange }} /> Top Institutions</h4>
                {top3_2025.map((u, i) => (
                  <div key={i} className="flex justify-between p-3 bg-white mb-2 rounded-xl border border-slate-100 text-xs font-black">
                    <span>{i+1}. {u.name}</span><span style={{ color: BRAND.blue }}>{u.value}%</span>
                  </div>
                ))}
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <Card>
              <h3 className="text-sm font-black mb-8 flex items-center gap-2 uppercase tracking-widest"><History size={18} style={{ color: BRAND.blue }}/> EXPERIENCE LEVELS (2025)</h3>
              <div className="space-y-6">
                {seniorityStats.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase">
                      <span>{item.label}</span>
                      <span>{item.value.toFixed(1)}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${item.value}%`, backgroundColor: item.color }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-[11px] font-normal leading-relaxed italic border-l-2 pl-3" style={{ borderColor: BRAND.blue }}>
                The experience mix supports both immediate delivery needs and long-term capability development across teams.
              </p>
            </Card>

            <Card className="bg-slate-100 border-none">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck style={{ color: BRAND.blue }} size={24} />
                <h4 className="text-sm font-black uppercase tracking-widest">SENIORITY RATIO</h4>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-5xl font-black" style={{ color: BRAND.blue }}>1.85:1</span>
                  <div className="flex flex-col justify-center space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: BRAND.blue }} />
                      <p className="text-xs font-normal leading-relaxed">
                        We onboarded 1.85 experienced professionals (5+ yr) for every junior entry (0-2 yr), maintaining balanced experience distribution across technical teams.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: BRAND.blue }} />
                      <p className="text-xs font-normal leading-relaxed">
                        This balance enables effective knowledge transfer within teams while preserving a healthy and sustainable talent pipeline.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-24 text-left">
          <SectionHeader num="04" title="Site Metrics Comparison" icon={MapPin} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <Card className="border-t-4" style={{ borderTopColor: BRAND.blue }}>
              <h4 className="text-xl font-black mb-6 uppercase flex justify-between items-center" style={{ color: BRAND.blue }}>Kfar Saba <Building2 size={20}/></h4>
              <table className="w-full text-xs text-left font-bold">
                <thead className="text-[10px] uppercase border-b" style={{ color: BRAND.muted }}>
                  <tr><th className="pb-3">Metric</th><th className="pb-3 text-right">2025</th><th className="pb-3 text-right">2024</th></tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="py-3">Hires (Allocation)</td><td className="text-right font-black" style={{ color: BRAND.blue }}>66.3%</td><td className="text-right opacity-70">77.3%</td></tr>
                  <tr><td className="py-3">Senior & Expert (5+ yr)</td><td className="text-right font-black" style={{ color: BRAND.blue }}>56.6%</td><td className="text-right opacity-70">67.2%</td></tr>
                  <tr><td className="py-3">Top-Tier Graduates</td><td className="text-right font-black" style={{ color: BRAND.blue }}>56.6%</td><td className="text-right opacity-70">51.8%</td></tr>
                </tbody>
              </table>
            </Card>

            <Card className="border-t-4" style={{ borderTopColor: BRAND.green }}>
              <h4 className="text-xl font-black mb-6 uppercase flex justify-between items-center" style={{ color: BRAND.green }}>North Hub <MapPin size={20}/></h4>
              <table className="w-full text-xs text-left font-bold">
                <thead className="text-[10px] uppercase border-b" style={{ color: BRAND.muted }}>
                  <tr><th className="pb-3">Metric</th><th className="pb-3 text-right">2025</th><th className="pb-3 text-right">2024</th></tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="py-3">Hires (Allocation)</td><td className="text-right font-black" style={{ color: BRAND.green }}>33.7%</td><td className="text-right opacity-70">22.7%</td></tr>
                  <tr><td className="py-3">Senior & Expert (5+ yr)</td><td className="text-right font-black" style={{ color: BRAND.green }}>51.85%</td><td className="text-right opacity-70">29.4%</td></tr>
                  <tr><td className="py-3">Top-Tier Graduates</td><td className="text-right font-black" style={{ color: BRAND.green }}>48.1%</td><td className="text-right opacity-70">23.5%</td></tr>
                </tbody>
              </table>
            </Card>
          </div>
          <div className="bg-white p-6 rounded-2xl border shadow-sm">
             <h5 className="font-black text-xs uppercase mb-4">North Hub Growth & Maturation</h5>
             {hubInsights[0].details.map((p, i) => (
               <div key={i} className="flex gap-4 mb-4">
                 <div className="p-2 h-fit rounded-lg" style={{ backgroundColor: BRAND.lightGray, color: BRAND.blue }}><Info size={18} /></div>
                 <p className="text-[11px] font-normal leading-relaxed">{p}</p>
               </div>
             ))}
             
             <div className="mt-6 pt-6 border-t border-slate-100">
                <h6 className="font-black text-[10px] uppercase mb-2" style={{ color: BRAND.muted }}>What this enables</h6>
                <p className="text-[11px] leading-relaxed font-normal">
                  The continued maturation of the North hub enables greater operational independence, reduces load on the central site, and supports future growth without compromising seniority or talent quality.
                </p>
             </div>
          </div>
        </section>

        {/* LOOKING AHEAD 2026 - ACTIONABLE FOCUS */}
        <div className="mb-20">
          <Card className="border-none overflow-hidden relative shadow-lg" style={{ backgroundColor: BRAND.lightGray }}>
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Target size={140} style={{ color: BRAND.blue }} />
            </div>
            <div className="relative z-10">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-3" style={{ color: BRAND.blue }}>
                <TrendingUp size={16} /> Looking Ahead – 2026
              </h2>
              <div className="space-y-4">
                {[
                  "Continued attention to employer brand impact and referral-driven hiring, reflecting trends observed in 2025",
                  "Maintaining talent quality while supporting planned business growth",
                  "Ongoing attention to early-career retention and manager enablement"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: BRAND.blue }} />
                    <p className="text-sm font-normal tracking-tight" style={{ color: BRAND.dark }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <footer className="border-t pt-8 pb-10 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: BRAND.muted }}>
          <span>Israel Recruitment Intelligence • Strategic Talent Overview</span>
        </footer>
      </div>
    </div>
  );
};

const SafeGraduationCap = (props) => <GraduationCap {...props} />;

export default App;
