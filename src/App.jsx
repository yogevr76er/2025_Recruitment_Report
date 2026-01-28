import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer,
  LabelList, PieChart, Pie, Cell, Tooltip
} from 'recharts';
import {
  Users, Award, Zap, GraduationCap, LayoutDashboard,
  Clock, MapPin, ShieldCheck, Info, Magnet, Building2, Star, Printer, FileText, HelpCircle
} from 'lucide-react';

const COLORS = {
  navy: '#1e3a8a', emerald: '#0d9488', orange: '#f97316',
  purple: '#a855f7', blue: '#3b82f6', slate100: '#f1f5f9',
  slate500: '#64748b', slate700: '#334155'
};

// --- DATA SETS ---
const sourcingData = [
  { name: 'Applied', '2025': 55.0, '2024': 34.7 },
  { name: 'Referral', '2025': 33.8, '2024': 30.7 },
  { name: 'Sourcing', '2025': 6.3, '2024': 24.0 },
  { name: 'Agencies', '2025': 5.0, '2024': 5.3 },
];

const destinationData = [
  { name: 'R&D', '2025': 88.8, '2024': 84.0 },
  { name: 'Non-R&D Depts*', '2025': 11.2, '2024': 16.0 },
];

const rdUnitData = [
  { name: 'RAT', ofRD: 47.9, ofTotal: 42.5, color: COLORS.navy },
  { name: 'RANOps', ofRD: 29.6, ofTotal: 26.3, color: COLORS.emerald },
  { name: 'Radio R&D', ofRD: 22.5, ofTotal: 20.0, color: COLORS.orange }
];

const eduData = [
  { name: 'Top-Tier Uni', '2025': 53.8, '2024': 45.3 },
  { name: 'Colleges', '2025': 45.0, '2024': 34.7 },
  { name: 'Global Uni', '2025': 0.0, '2024': 6.7 },
  { name: 'Non-Degree / Exp', '2025': 1.2, '2024': 13.3 }
];

const top3_2025 = [
  { name: "Technion", value: 18.8 },
  { name: "Tel-Aviv Uni", value: 16.3 },
  { name: "Ben-Gurion Uni", value: 11.3 }
];

const top3_2024 = [
  { name: "Technion", value: 16.0 },
  { name: "Tel-Aviv Uni", value: 14.7 },
  { name: "Hebrew Uni", value: 9.3 }
];

const genderData = [
  { name: 'Male', value: 80, color: COLORS.navy },
  { name: 'Female', value: 20, color: COLORS.orange }
];

const ageData = [
  { name: '20-25', value: 7.5 }, { name: '26-30', value: 21.3 },
  { name: '31-35', value: 22.5 }, { name: '36-40', value: 22.5 }, { name: '41+', value: 26.2 }
];

const seniorityData = [
  { name: '0-1 Y', value: 21.3 }, { name: '1-3 Y', value: 16.3 },
  { name: '3-5 Y', value: 12.5 }, { name: '5+ Y', value: 50.0 }
];

// --- COMPONENTS ---
const SafeLabel = (props) => {
  const { x, y, width, value } = props;
  if (value === null || value === undefined) return null;
  return (
    <text x={x + width / 2} y={y - 10} fill={COLORS.slate700} textAnchor="middle" fontSize={8} fontWeight="900">
      {typeof value === 'number' ? value.toFixed(1) : value}%
    </text>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-[1.5rem] p-8 shadow-sm border border-slate-100 ${className}`}>
    {children}
  </div>
);

const SectionHeader = ({ num, title, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-10 border-b border-slate-50 pb-4 text-left">
    <div className="bg-slate-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">{num}</div>
    <h2 className="text-2xl font-black text-slate-800 tracking-tight uppercase flex items-center gap-2">
      {Icon && <Icon size={24} />} {title}
    </h2>
  </div>
);

const App = () => {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-6 md:p-12 lg:p-16 text-left relative">
      <style>{`@media print { .print-hidden { display: none !important; } body { background: white !important; } }`}</style>
      
      <button onClick={handlePrint} className="print-hidden fixed bottom-8 right-8 bg-blue-900 text-white px-6 py-4 rounded-full shadow-2xl z-50 flex items-center gap-3">
        <Printer size={20} /> <span className="font-bold">Save as PDF</span>
      </button>

      <div className="max-w-6xl mx-auto">
        <header className="mb-10 flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="text-left">
            <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest mb-3">
              <ShieldCheck size={18} /> <span>Audited Recruitment Analytics 2025</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#1e3a8a] mb-2 tracking-tight leading-tight">Executive Summary</h1>
            <p className="text-lg text-slate-500 font-medium max-w-2xl leading-relaxed">Comprehensive overview of talent acquisition landscape and workforce DNA evolution.</p>
          </div>
          <button onClick={handlePrint} className="print-hidden bg-white border-2 border-blue-900 text-blue-900 px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50">
            <FileText size={18} /> Export Report
          </button>
        </header>

        {/* STRATEGIC HIGHLIGHTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-black">
          <Card className="border-t-4 border-blue-900"><Magnet size={36} className="text-blue-900 mb-6"/><h3 className="text-lg font-bold">Brand Pull: 55%</h3><p className="text-xs text-slate-700">Direct applications reached 55%.</p></Card>
          <Card className="border-t-4 border-orange-500"><Zap size={36} className="text-orange-500 mb-6"/><h3 className="text-lg font-bold">Gen Z Pivot: 28%</h3><p className="text-xs text-slate-700">Securing future-ready pipeline.</p></Card>
          <Card className="border-t-4 border-emerald-600"><Award size={36} className="text-emerald-600 mb-6"/><h3 className="text-lg font-bold">Elite Entry: 54%</h3><p className="text-xs text-slate-700">Top-Tier intake maintained.</p></Card>
          <Card className="border-t-4 border-purple-500"><GraduationCap size={36} className="text-purple-500 mb-6"/><h3 className="text-lg font-bold">Adv. Degrees: 25%</h3><p className="text-xs text-slate-700">Competitive IP advantage.</p></Card>
        </div>

        {/* SECTION 01: RECRUITMENT OVERVIEW */}
        <section className="mb-32">
          <SectionHeader num="01" title="Recruitment Overview" icon={LayoutDashboard} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <Card className="flex items-center gap-5 py-6">
              <div className="bg-blue-900 p-3 rounded-xl text-white"><Users size={24} /></div>
              <div><span className="text-xs font-bold text-slate-400 uppercase">Total Hires 2025</span><br/><span className="text-4xl font-black text-blue-900">80</span></div>
            </Card>
            <Card className="flex items-center gap-5 py-6 opacity-60">
              <div className="bg-slate-200 p-3 rounded-xl text-slate-400"><Users size={24} /></div>
              <div><span className="text-xs font-bold text-slate-400 uppercase">Total Hires 2024</span><br/><span className="text-4xl font-black text-slate-500">75</span></div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <h3 className="text-lg font-bold mb-8 flex items-center gap-2 uppercase text-slate-800"><Magnet size={20} className="text-blue-600"/> Sourcing</h3>
              <div style={{ height: 400, width: '100%' }}>
                <ResponsiveContainer><BarChart data={sourcingData} margin={{ top: 80 }} barGap={25}><CartesianGrid strokeDasharray="3 3" vertical={false} /><XAxis dataKey="name" axisLine={false} tickLine={false} /><YAxis hide domain={[0, 100]} /><Legend verticalAlign="top" align="right" /><Bar name="2025" dataKey="2025" fill={COLORS.navy} radius={[4, 4, 0, 0]} barSize={28}><LabelList content={<SafeLabel />} /></Bar><Bar name="2024" dataKey="2024" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={28}><LabelList content={<SafeLabel />} /></Bar></BarChart></ResponsiveContainer>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-bold mb-8 flex items-center gap-2 uppercase text-slate-800"><Building2 size={20} className="text-emerald-600"/> Talent Allocation</h3>
              <div style={{ height: 400, width: '100%' }}>
                <ResponsiveContainer><BarChart data={destinationData} margin={{ top: 80 }} barGap={25}><CartesianGrid strokeDasharray="3 3" vertical={false} /><XAxis dataKey="name" axisLine={false} tickLine={false} /><YAxis hide domain={[0, 100]} /><Legend verticalAlign="top" align="right" /><Bar name="2025" dataKey="2025" fill={COLORS.emerald} radius={[4, 4, 0, 0]} barSize={28}><LabelList content={<SafeLabel />} /></Bar><Bar name="2024" dataKey="2024" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={28}><LabelList content={<SafeLabel />} /></Bar></BarChart></ResponsiveContainer>
              </div>
              <div className="border-t pt-6 mt-4">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">R&D Unit Breakdown (2025 Detailed)</h4>
                <div className="grid grid-cols-1 gap-3">
                  {rdUnitData.map(unit => (
                    <div key={unit.name} className="bg-slate-50 p-3 rounded-xl flex items-center justify-between border border-slate-100">
                      <div className="flex items-center gap-3"><div className="w-2 h-8 rounded-full" style={{backgroundColor: unit.color}}></div><p className="text-xs font-bold text-slate-800">{unit.name}</p></div>
                      <div className="text-right flex flex-col"><span className="text-xs font-black text-slate-800">{unit.ofRD.toFixed(1)}% OF R&D</span><span className="text-[10px] font-bold text-slate-500">{unit.ofTotal.toFixed(1)}% OF TOTAL</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* SECTION 02: THE RECRUIT DNA */}
        <section className="mb-32">
          <SectionHeader num="02" title="The Recruit DNA" icon={GraduationCap} />
          <Card className="mb-16">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="flex-1 w-full">
                <h3 className="text-lg font-bold mb-8 flex items-center gap-2 uppercase text-slate-800"><GraduationCap size={20} className="text-emerald-700"/> Academic Origin</h3>
                <div style={{ height: 350, width: '100%' }}>
                  <ResponsiveContainer><BarChart data={eduData} margin={{ top: 80 }} barGap={25}><CartesianGrid strokeDasharray="3 3" vertical={false} /><XAxis dataKey="name" axisLine={false} tickLine={false} /><YAxis hide domain={[0, 100]} /><Legend verticalAlign="top" align="right" /><Bar name="2025" dataKey="2025" fill={COLORS.emerald} radius={[4, 4, 0, 0]} barSize={28}><LabelList content={<SafeLabel />} /></Bar><Bar name="2024" dataKey="2024" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={28}><LabelList content={<SafeLabel />} /></Bar></BarChart></ResponsiveContainer>
                </div>
                <div className="mt-8 p-5 bg-slate-50 rounded-2xl border border-slate-200 flex gap-4 items-start">
                  <HelpCircle size={20} className="text-navy-600 mt-1 shrink-0" />
                  <div><h4 className="text-xs font-black text-slate-800 uppercase mb-2">Note: Non-Degree Recruitment</h4><p className="text-[11px] text-slate-600 leading-relaxed">Refers to exceptional technical capabilities from Elite Military units (e.g., 8200) or extensive experience.</p></div>
                </div>
              </div>
              <div className="w-full md:w-96 flex flex-col gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2"><Star size={14} className="text-orange-500" /> Top 3 Institutions (2025)</h4>
                  <ul className="space-y-6">
                    {top3_2025.map((uni, i) => (
                      <li key={i} className="flex gap-4 items-center"><span className="text-navy-700 font-black text-lg">{i+1}.</span><div><p className="text-base font-bold text-slate-800 uppercase">{uni.name}</p><span className="text-navy-600 font-black text-sm">{uni.value.toFixed(1)}% of total hires</span></div></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-black">
            <Card>
              <h3 className="text-lg font-bold mb-6 uppercase text-slate-800"><Users size={20} className="text-blue-600 inline mr-2"/> Gender</h3>
              <div style={{ height: 200, width: '100%' }}>
                <ResponsiveContainer><PieChart><Pie data={genderData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value" stroke="none">{genderData.map((entry, index) => <Cell key={index} fill={entry.color} />)}</Pie><Tooltip /></PieChart></ResponsiveContainer>
              </div>
            </Card>
            <Card>
              <h3 className="text-lg font-bold mb-6 uppercase text-slate-800"><Star size={20} className="text-orange-600 inline mr-2"/> Age Groups</h3>
              <div style={{ height: 250, width: '100%' }}><ResponsiveContainer><BarChart data={ageData} margin={{ top: 35 }}><XAxis dataKey="name" axisLine={false} tickLine={false} /><Bar dataKey="value" fill={COLORS.orange} radius={[4, 4, 0, 0]} barSize={25}><LabelList content={<SafeLabel />} position="top" /></Bar></BarChart></ResponsiveContainer></div>
            </Card>
            <Card>
              <h3 className="text-lg font-bold mb-6 uppercase text-slate-800"><Clock size={20} className="text-emerald-600 inline mr-2"/> Seniority</h3>
              <div style={{ height: 250, width: '100%' }}><ResponsiveContainer><BarChart data={seniorityData} margin={{ top: 35 }}><XAxis dataKey="name" axisLine={false} tickLine={false} /><Bar dataKey="value" fill={COLORS.emerald} radius={[4, 4, 0, 0]} barSize={25}><LabelList content={<SafeLabel />} position="top" /></Bar></BarChart></ResponsiveContainer></div>
            </Card>
          </div>
        </section>

        {/* SECTION 03: SITE DNA COMPARISON */}
        <section className="mb-32">
          <SectionHeader num="03" title="Site DNA Comparison" icon={MapPin} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-black">
            <Card className="border-t-4 border-blue-900">
              <h4 className="text-2xl font-black mb-1 text-blue-900 uppercase">Kfar Saba</h4>
              <p className="text-slate-400 text-xs font-bold uppercase mb-6 tracking-widest">Operational Focus</p>
              <div className="space-y-4 font-medium text-sm">
                <div className="flex justify-between border-b pb-2 uppercase"><span>Hires (Allocation)</span><span>66.2%</span></div>
                <div className="flex justify-between border-b pb-2 uppercase"><span>Average Age</span><span>36.7</span></div>
                <div className="flex justify-between border-b pb-2 uppercase"><span>Mid-Level+ (%)</span><span>67.9%</span></div>
                <div className="flex justify-between border-b pb-2 uppercase"><span>Top-Tier (%)</span><span>57.7%</span></div>
              </div>
            </Card>
            <Card className="border-t-4 border-emerald-600">
              <h4 className="text-2xl font-black mb-1 text-emerald-700 uppercase">North Hub</h4>
              <p className="text-slate-400 text-xs font-bold uppercase mb-6 tracking-widest">Engineering Hub</p>
              <div className="space-y-4 font-medium text-sm">
                <div className="flex justify-between border-b pb-2 uppercase"><span>Hires (Allocation)</span><span>33.8%</span></div>
                <div className="flex justify-between border-b pb-2 uppercase"><span>Average Age</span><span>35.9</span></div>
                <div className="flex justify-between border-b pb-2 uppercase"><span>Mid-Level+ (%)</span><span>66.7%</span></div>
                <div className="flex justify-between border-b pb-2 uppercase"><span>Top-Tier (%)</span><span>48.1%</span></div>
              </div>
            </Card>
          </div>
        </section>

        <footer className="border-t border-slate-100 pt-8 pb-10 flex justify-between items-center text-slate-400 text-[10px] font-black uppercase tracking-widest">
          <span>Audited Executive Report 2025 • Talent Intelligence</span>
          <span>© Executive Analytics Suite</span>
        </footer>
      </div>
    </div>
  );
};

export default App;
