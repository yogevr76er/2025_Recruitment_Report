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
  navy: '#1e3a8a',
  emerald: '#0d9488',
  orange: '#f97316',
  purple: '#a855f7',
  blue: '#3b82f6',
  slate100: '#f1f5f9',
  slate500: '#64748b',
  slate700: '#334155'
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

const CustomLabel = (props) => {
  const { x, y, width, value } = props;
  if (value === undefined) return null;
  return (
    <text x={x + width / 2} y={y - 10} fill={COLORS.slate700} textAnchor="middle" fontSize={8} fontWeight="900">
      {`${value.toFixed(1)}%`}
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
    <div className="bg-slate-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-left">
      {num}
    </div>
    <h2 className="text-2xl font-black text-slate-800 tracking-tight uppercase flex items-center gap-2 text-left">
      {Icon && <Icon size={24} />}
      {title}
    </h2>
  </div>
);

const App = () => {
  const handlePrint = () => { window.print(); };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-6 md:p-12 lg:p-16 text-left relative">
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          .print-hidden { display: none !important; }
          body { background: white !important; padding: 0 !important; }
          .bg-slate-50 { background: white !important; }
          .shadow-sm, .border { box-shadow: none !important; border: 1px solid #eee !important; }
          @page { margin: 1cm; }
        }
      `}} />

      <button onClick={handlePrint} className="print-hidden fixed bottom-8 right-8 bg-blue-900 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-blue-950 transition-all flex items-center gap-3 z-50 group">
        <Printer size={20} />
        <span className="font-bold">Save as PDF</span>
      </button>

      <div className="max-w-6xl mx-auto">
        <header className="mb-10 flex flex-col md:flex-row justify-between items-start gap-4 text-left">
          <div className="text-left">
            <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest mb-3 text-left">
              <ShieldCheck size={18} />
              <span>Audited Recruitment Analytics Summary 2025</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#1e3a8a] mb-2 tracking-tight leading-tight text-left">Executive Summary</h1>
            <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl leading-relaxed text-left">
              A comprehensive overview of our talent acquisition landscape, analyzing recruitment efficiency and the professional evolution of our workforce DNA.
            </p>
          </div>
          <button onClick={handlePrint} className="print-hidden bg-white border-2 border-blue-900 text-blue-900 px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors">
            <FileText size={18} /> Export Report
          </button>
        </header>

        <div className="mb-16">
          <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
            <div className="h-[1px] w-8 bg-slate-200"></div> Strategic Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-black">
            <Card className="border-t-4 border-[#1e3a8a] bg-slate-50/50">
              <Magnet size={36} className="text-[#1e3a8a] mb-6" />
              <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase">Brand Pull: 55%</h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">Direct applications reached 55%. This reflects a matured brand presence attracting talent independently.</p>
            </Card>
            <Card className="border-t-4 border-orange-500 bg-slate-50/50">
              <Zap size={36} className="text-orange-500 mb-6" />
              <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase">Gen Z Pivot: 28%</h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">Hires from our Gen Z cohort rose to 28%, securing a future-ready engineering pipeline.</p>
            </Card>
            <Card className="border-t-4 border-emerald-600 bg-slate-50/50">
              <Award size={36} className="text-emerald-600 mb-6" />
              <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase">Elite Entry: 54%</h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">Intake from Top-Tier universities reached 54%, maintaining our technical elite foundation.</p>
            </Card>
            <Card className="border-t-4 border-purple-500 bg-slate-50/50">
              <GraduationCap size={36} className="text-purple-500 mb-6" />
              <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase">Adv. Degrees: 25%</h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">1 in every 4 hires holds an MSc/PhD, providing a massive competitive advantage for innovation.</p>
            </Card>
          </div>
        </div>

        <section className="mb-32">
          <SectionHeader num="01" title="Recruitment Overview" icon={LayoutDashboard} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
            <Card className="flex items-center gap-5 py-6">
              <div className="bg-[#1e3a8a] p-3 rounded-xl text-white shadow-sm"><Users size={24} /></div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Total Hires 2025</span>
                <span className="text-4xl font-black text-[#1e3a8a]">80</span>
              </div>
            </Card>
            <Card className="flex items-center gap-5 py-6 opacity-60 grayscale border-dashed">
              <div className="bg-slate-200 p-3 rounded-xl text-slate-400"><Users size={24} /></div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest block mb-1 text-slate-500">Total Hires 2024</span>
                <span className="text-4xl font-black block text-slate-500">75</span>
              </div>
            </Card>
          </div>
        </section>

        <footer className="border-t border-slate-100 pt-8 pb-10 flex justify-between items-center text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
          <span>Audited Executive Report 2025 • Talent Intelligence</span>
          <span>© Executive Analytics Suite</span>
        </footer>
      </div>
    </div>
  );
};

export default App;
