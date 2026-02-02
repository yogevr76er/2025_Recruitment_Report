import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer,
  LabelList, Tooltip, Cell, PieChart, Pie
} from 'recharts';
import {
  Users, Award, Zap, GraduationCap, LayoutDashboard,
  MapPin, ShieldCheck, Magnet, Building2, Star, Printer, 
  User, UserCheck, TrendingUp, History, CheckCircle, HeartHandshake, Lightbulb
} from 'lucide-react';

const COLORS = {
  navy: '#1e3a8a',
  emerald: '#0d9488',
  orange: '#f97316',
  purple: '#a855f7',
  blue: '#3b82f6',
  slate50: '#f8fafc',
  slate100: '#f1f5f9',
  slate200: '#e2e8f0',
  slate400: '#94a3b8',
  slate500: '#64748b',
  slate700: '#334155'
};

// --- DATA ---
const sourcingData = [
  { name: 'Applied', '2025': 55.0, '2024': 34.7 },
  { name: 'Referral', '2025': 33.8, '2024': 30.7 },
  { name: 'Sourcing', '2025': 6.3, '2024': 24.0 },
  { name: 'Agencies', '2025': 5.0, '2024': 5.3 },
];

const destinationData = [
  { name: 'R&D', '2025': 88.8, '2024': 84.0 },
  { name: 'Core Operations*', '2025': 11.2, '2024': 16.0 },
];

const rdUnitData = [
  { name: 'RAT', ofRD: 47.9, ofTotal: 42.5, color: COLORS.navy },
  { name: 'RANOps', ofRD: 29.6, ofTotal: 26.3, color: COLORS.emerald },
  { name: 'Radio R&D', ofRD: 22.5, ofTotal: 20.0, color: COLORS.orange }
];

const eduData = [
  { name: 'TOP-TIER UNI', '2025': 53.8, '2024': 45.3 },
  { name: 'COLLEGES', '2025': 45.0, '2024': 34.7 },
  { name: 'GLOBAL UNI', '2025': 0.0, '2024': 6.7 },
  { name: 'NON-DEGREE / EXP', '2025': 1.3, '2024': 13.3 }
];

const seniorityStats = [
  { label: 'Leadership (10-20Y)', value: 20.0, color: COLORS.navy },
  { label: 'Established (5-10Y)', value: 30.0, color: COLORS.emerald },
  { label: 'Experienced (2-5Y)', value: 28.7, color: COLORS.blue },
  { label: 'Junior (0-2Y)', value: 21.3, color: COLORS.orange },
];

// --- UI COMPONENTS ---
const CustomLabel = (props) => {
  const { x, y, width, value } = props;
  if (value === undefined) return null;
  return (
    <text x={x + width / 2} y={y - 10} fill={COLORS.slate700} textAnchor="middle" fontSize={10} fontWeight="900">
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
    <h2 className="text-2xl font-black text-slate-800 tracking-tight uppercase flex items-center gap-2">
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
          body { background: white !important; padding: 0 !important; margin: 0 !important; }
          .bg-slate-50 { background: white !important; }
          @page { size: A4 portrait; margin: 8mm; }
          .max-w-original { 
            width: 1400px !important; 
            max-width: 1400px !important; 
            zoom: 0.52; 
            margin: 0 auto !important;
          }
          section { page-break-inside: avoid; break-inside: avoid; margin-bottom: 30px; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}} />

      <div className="max-w-[1400px] mx-auto max-w-original">
        
        {/* HEADER */}
        <header className="mb-10 flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="text-left">
            <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest mb-1">
              <ShieldCheck size={16} />
              <span>Executive Recruitment Summary</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mb-2 tracking-tight leading-tight">
              Annual Recruitment Analytics 2025
            </h1>
          </div>
          <button onClick={handlePrint} className="print-hidden bg-blue-900 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-blue-950 transition-all shadow-xl">
            <Printer size={20} /> Save as PDF
          </button>
        </header>

        {/* SECTION 01: SOURCING & ALLOCATION */}
        <section className="mb-20">
          <SectionHeader num="01" title="Sourcing Strategy & Unit Allocation" icon={LayoutDashboard} />
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <Card className="flex-row items-center gap-5 py-6 border-l-8 border-[#1e3a8a]">
              <div className="bg-[#1e3a8a] p-3 rounded-xl text-white"><Users size={24} /></div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Total Hires 2025</span>
                <span className="text-4xl font-black text-[#1e3a8a]">80</span>
              </div>
            </Card>
            <Card className="flex-row items-center gap-5 py-6 opacity-60 bg-slate-50 border-dashed">
              <div className="bg-slate-200 p-3 rounded-xl text-slate-400"><Users size={24} /></div>
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">2024 Baseline</span>
                <span className="text-4xl font-black text-slate-500">75</span>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <Card>
              <h3 className="text-lg font-bold mb-8 uppercase flex items-center gap-2"><Magnet size={20} className="text-blue-900"/> Sourcing Channels</h3>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sourcingData} margin={{ top: 40, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" tick={{fontWeight: 700, fontSize: 11}} />
                    <Legend verticalAlign="top" align="right" />
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

            <Card>
              <h3 className="text-lg font-bold mb-8 uppercase flex items-center gap-2"><Building2 size={20} className="text-emerald-600"/> Org Allocation</h3>
              <div className="h-[200px] w-full mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={destinationData} margin={{ top: 30, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" tick={{fontWeight: 700, fontSize: 11}} />
                    <Bar name="2025" dataKey="2025" fill={COLORS.emerald} radius={[4, 4, 0, 0]} barSize={40}>
                      <LabelList content={<CustomLabel />} />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="border-t pt-4 space-y-2">
                {rdUnitData.map(unit => (
                  <div key={unit.name} className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                    <span className="text-[11px] font-bold uppercase" style={{color: unit.color}}>{unit.name}</span>
                    <span className="text-xs font-black">{unit.ofRD.toFixed(1)}%</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* SECTION 02: TALENT PROFILE & DIVERSITY - החזרתי הכל לכאן */}
        <section className="mb-20">
          <SectionHeader num="02" title="Talent Profile & Diversity" icon={UserCheck} />
          
          <div className="grid grid-cols-12 gap-8">
            {/* Education Chart */}
            <div className="col-span-7">
              <Card>
                <h3 className="text-lg font-bold mb-8 uppercase flex items-center gap-2"><GraduationCap size={20} className="text-blue-900"/> Academic Landscape</h3>
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={eduData} layout="vertical" margin={{ left: 40, right: 40 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" tick={{fontSize: 10, fontWeight: 700}} width={120} />
                      <Legend verticalAlign="top" />
                      <Bar name="2025" dataKey="2025" fill={COLORS.navy} radius={[0, 4, 4, 0]} barSize={20} />
                      <Bar name="2024" dataKey="2024" fill="#cbd5e1" radius={[0, 4, 4, 0]} barSize={20} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            {/* Seniority Distribution */}
            <div className="col-span-5">
              <Card>
                <h3 className="text-lg font-bold mb-6 uppercase">Seniority Mix</h3>
                <div className="space-y-4">
                  {seniorityStats.map((item, idx) => (
                    <div key={idx} className="relative">
                      <div className="flex justify-between text-[10px] font-bold uppercase mb-1">
                        <span>{item.label}</span>
                        <span>{item.value}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all" style={{ width: `${item.value}%`, backgroundColor: item.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t grid grid-cols-2 gap-4">
                    <div className="text-center">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Avg Age 2025</p>
                        <p className="text-2xl font-black text-slate-800">36.4</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Female Ratio</p>
                        <p className="text-2xl font-black text-purple-600">20%</p>
                    </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 03: HUB PERFORMANCE */}
        <section className="mb-20">
          <SectionHeader num="03" title="Hub Performance Comparison" icon={MapPin} />
          <div className="grid grid-cols-2 gap-8">
            <Card className="border-t-4 border-[#1e3a8a]">
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-2xl font-black text-[#1e3a8a]">KFAR SABA</h4>
                <Building2 size={24} className="text-[#1e3a8a] opacity-10"/>
              </div>
              <table className="w-full text-sm">
                <thead className="text-[10px] font-black text-slate-400 uppercase border-b">
                  <tr><th className="pb-3 text-left">Key Metric</th><th className="pb-3 text-right">2025</th><th className="pb-3 text-right opacity-40">2024</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-50 font-bold">
                  <tr><td className="py-4 text-xs uppercase">Hires %</td><td className="py-4 text-right text-blue-900">66.3%</td><td className="py-4 text-right opacity-40">68.0%</td></tr>
                  <tr><td className="py-4 text-xs uppercase">Avg Age</td><td className="py-4 text-right text-blue-900">36.7</td><td className="py-4 text-right opacity-40">37.2</td></tr>
                  <tr><td className="py-4 text-xs uppercase">Seniority Index</td><td className="py-4 text-right text-blue-900">67.9%</td><td className="py-4 text-right opacity-40">65.0%</td></tr>
                </tbody>
              </table>
            </Card>

            <Card className="border-t-4 border-emerald-600">
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-2xl font-black text-emerald-700">NORTH HUB</h4>
                <MapPin size={24} className="text-emerald-700 opacity-10"/>
              </div>
              <table className="w-full text-sm">
                <thead className="text-[10px] font-black text-slate-400 uppercase border-b">
                  <tr><th className="pb-3 text-left">Key Metric</th><th className="pb-3 text-right">2025</th><th className="pb-3 text-right opacity-40">2024</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-50 font-bold">
                  <tr><td className="py-4 text-xs uppercase">Hires %</td><td className="py-4 text-right text-emerald-700">33.7%</td><td className="py-4 text-right opacity-40">32.0%</td></tr>
                  <tr><td className="py-4 text-xs uppercase">Avg Age</td><td className="py-4 text-right text-emerald-700">35.9</td><td className="py-4 text-right opacity-40">36.5</td></tr>
                  <tr><td className="py-4 text-xs uppercase">Seniority Index</td><td className="py-4 text-right text-emerald-700">66.7%</td><td className="py-4 text-right opacity-40">64.0%</td></tr>
                </tbody>
              </table>
            </Card>
          </div>
        </section>

        <footer className="border-t pt-8 pb-10 flex justify-between text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
          <span>Executive Summary 2025 • Recruitment Intelligence</span>
          <span>© Talent Analytics Suite</span>
        </footer>
      </div>
    </div>
  );
};

export default App;
