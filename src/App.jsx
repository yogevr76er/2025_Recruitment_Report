import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer,
  LabelList, PieChart, Pie, Cell, Tooltip
} from 'recharts';
import {
  Users, Award, Zap, GraduationCap, LayoutDashboard,
  Clock, MapPin, ShieldCheck, Magnet, Building2, Star, Printer, FileText, HelpCircle
} from 'lucide-react';

// --- DATA & STYLES ---
const COLORS = {
  navy: '#1e3a8a', emerald: '#0d9488', orange: '#f97316',
  purple: '#a855f7', blue: '#3b82f6', slate100: '#f1f5f9',
  slate500: '#64748b', slate700: '#334155'
};

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

// --- DEFENSIVE COMPONENTS ---
const SafeLabel = (props) => {
  const { x, y, width, value } = props;
  if (value === null || value === undefined) return null;
  const num = typeof value === 'number' ? value : parseFloat(value);
  return (
    <text x={x + width / 2} y={y - 10} fill={COLORS.slate700} textAnchor="middle" fontSize={8} fontWeight="900">
      {isNaN(num) ? "" : `${num.toFixed(1)}%`}
    </text>
  );
};

const safeFormatter = (v) => {
  if (v === null || v === undefined) return "";
  const num = typeof v === 'number' ? v : parseFloat(v);
  return isNaN(num) ? "" : `${num.toFixed(1)}%`;
};

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-[1.5rem] p-8 shadow-sm border border-slate-100 ${className}`}>
    {children}
  </div>
);

const SectionHeader = ({ num, title, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-10 border-b border-slate-50 pb-4 text-left">
    <div className="bg-slate-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
      {num}
    </div>
    <h2 className="text-2xl font-black text-slate-800 tracking-tight uppercase flex items-center gap-2">
      {Icon && <Icon size={24} />}
      {title}
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
            <h1 className="text-5xl font-extrabold text-[#1e3a8a] mb-2 tracking-tight">Executive Summary</h1>
            <p className="text-lg text-slate-500 font-medium max-w-2xl leading-relaxed">
              Comprehensive overview of talent acquisition landscape and workforce DNA evolution.
            </p>
          </div>
          <button onClick={handlePrint} className="print-hidden bg-white border-2 border-blue-900 text-blue-900 px-5 py-2.5 rounded-xl font-bold flex items-center gap-2">
            <FileText size={18} /> Export Report
          </button>
        </header>

        {/* HIGHLIGHTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-black">
            <Card className="border-t-4 border-blue-900"><Magnet size={36} className="text-blue-900 mb-6"/><h3 className="text-lg font-bold">Brand Pull: 55%</h3></Card>
            <Card className="border-t-4 border-orange-500"><Zap size={36} className="text-orange-500 mb-6"/><h3 className="text-lg font-bold">Gen Z Pivot: 28%</h3></Card>
            <Card className="border-t-4 border-emerald-600"><Award size={36} className="text-emerald-600 mb-6"/><h3 className="text-lg font-bold">Elite Entry: 54%</h3></Card>
            <Card className="border-t-4 border-purple-500"><GraduationCap size={36} className="text-purple-500 mb-6"/><h3 className="text-lg font-bold">Adv. Degrees: 25%</h3></Card>
        </div>

        {/* SECTION 01 */}
        <section className="mb-32">
          <SectionHeader num="01" title="Recruitment Overview" icon={LayoutDashboard} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <Card className="flex items-center gap-5 py-6">
              <div className="bg-blue-900 p-3 rounded-xl text-white"><Users size={24} /></div>
              <div><span className="text-xs font-bold text-slate-400">Total Hires 2025</span><br/><span className="text-4xl font-black text-blue-900">80</span></div>
            </Card>
            <Card className="flex items-center gap-5 py-6 opacity-60 grayscale border-dashed">
              <div className="bg-slate-200 p-3 rounded-xl text-slate-400"><Users size={24} /></div>
              <div><span className="text-xs font-bold text-slate-400">Total Hires 2024</span><br/><span className="text-4xl font-black text-slate-500">75</span></div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <h3 className="text-lg font-bold mb-8 flex items-center gap-2 uppercase text-slate-800"><Magnet size={20} className="text-blue-600"/> Recruitment Sourcing</h3>
              <div style={{ height: 400, width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sourcingData} margin={{ top: 80 }} barGap={25}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis hide domain={[0, 100]} />
                    <Legend verticalAlign="top" align="right" />
                    <Bar name="2025" dataKey="2025" fill={COLORS.navy} radius={[4, 4, 0, 0]} barSize={28}><LabelList content={<SafeLabel />} /></Bar>
                    <Bar name="2024" dataKey="2024" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={28}><LabelList content={<SafeLabel />} /></Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
            <Card>
              <h3 className="text-lg font-bold mb-8 flex items-center gap-2 uppercase text-slate-800"><Building2 size={20} className="text-emerald-600"/> Talent Allocation</h3>
              <div style={{ height: 400, width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={destinationData} margin={{ top: 80 }} barGap={25}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis hide domain={[0, 100]} />
                    <Legend verticalAlign="top" align="right" />
                    <Bar name="2025" dataKey="2025" fill={COLORS.emerald} radius={[4, 4, 0, 0]} barSize={28}><LabelList content={<SafeLabel />} /></Bar>
                    <Bar name="2024" dataKey="2024" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={28}><LabelList content={<SafeLabel />} /></Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </section>

        {/* SECTION 02 */}
        <section className="mb-32">
          <SectionHeader num="02" title="The Recruit DNA" icon={GraduationCap} />
          <Card className="mb-8">
            <h3 className="text-lg font-bold mb-8 uppercase text-slate-800">Academic Origin</h3>
            <div style={{ height: 400, width: '100%' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={eduData} margin={{ top: 80 }} barGap={25}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis hide domain={[0, 100]} />
                  <Legend verticalAlign="top" align="right" />
                  <Bar name="2025" dataKey="2025" fill={COLORS.emerald} radius={[4, 4, 0, 0]} barSize={28}><LabelList content={<SafeLabel />} /></Bar>
                  <Bar name="2024" dataKey="2024" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={28}><LabelList content={<SafeLabel />} /></Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-black">
            <Card>
              <h3 className="text-lg font-bold mb-6 uppercase text-slate-800"><Users size={20} className="text-blue-600 inline mr-2"/> Gender</h3>
              <div style={{ height: 200, width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart><Pie data={genderData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value" stroke="none">{genderData.map((entry, index) => <Cell key={index} fill={entry.color} />)}</Pie><Tooltip /></PieChart>
                </ResponsiveContainer>
              </div>
            </Card>
            <Card>
              <h3 className="text-lg font-bold mb-6 uppercase text-slate-800"><Star size={20} className="text-orange-600 inline mr-2"/> Age Groups</h3>
              <div style={{ height: 250, width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ageData} margin={{ top: 35 }}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <Bar dataKey="value" fill={COLORS.orange} radius={[4, 4, 0, 0]} barSize={25}><LabelList dataKey="value" position="top" formatter={safeFormatter} style={{fontSize: 10, fontWeight: 900}} /></Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
            <Card>
              <h3 className="text-lg font-bold mb-6 uppercase text-slate-800"><Clock size={20} className="text-emerald-600 inline mr-2"/> Seniority</h3>
              <div style={{ height: 250, width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={seniorityData} margin={{ top: 35 }}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <Bar dataKey="value" fill={COLORS.emerald} radius={[4, 4, 0, 0]} barSize={25}><LabelList dataKey="value" position="top" formatter={safeFormatter} style={{fontSize: 10, fontWeight: 900}} /></Bar>
                  </BarChart>
                </ResponsiveContainer>
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
