import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer,
  LabelList, Tooltip
} from 'recharts';
import {
  Users, Award, Zap, GraduationCap, LayoutDashboard,
  MapPin, ShieldCheck, Magnet, Building2, Star, Printer, 
  User, UserCheck, TrendingUp, History, CheckCircle, HeartHandshake, Lightbulb
} from 'lucide-react';

// --- CONSTANTS ---
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

// --- DATA SETS (Same as original) ---
const sourcingData = [
  { name: 'Applied', '2025': 55.0, '2024': 34.7 },
  { name: 'Referral', '2025': 33.8, '2024': 30.7 },
  { name: 'Sourcing', '2025': 6.3, '2024': 24.0 },
  { name: 'Agencies', '2025': 5.0, '2024': 5.3 },
];

const destinationData = [
  { name: 'R&D', '2025': 88.8, '2024': 84.0 },
  { name: 'Core Ops', '2025': 11.2, '2024': 16.0 },
];

const rdUnitData = [
  { name: 'RAT', ofRD: 47.9, ofTotal: 42.5, color: COLORS.navy },
  { name: 'RANOps', ofRD: 29.6, ofTotal: 26.3, color: COLORS.emerald },
  { name: 'Radio R&D', ofRD: 22.5, ofTotal: 20.0, color: COLORS.orange }
];

const eduData = [
  { name: 'TOP-TIER UNI', '2025': 53.8, '2024': 45.3 },
  { name: 'COLLEGES', '2025': 45.0, '2024': 34.7 },
  { name: 'NON-DEGREE', '2025': 1.3, '2024': 13.3 }
];

const top3_2025 = [
  { name: "Technion", value: 18.8 },
  { name: "Tel-Aviv Uni", value: 16.3 },
  { name: "Ben-Gurion Uni", value: 11.3 }
];

const genderStats = { male2025: 80, female2025: 20 };
const ageStats = { global2025: 36.4, global2024: 37.1 };

const seniorityStats = [
  { label: 'Leadership & Strategic (10-20Y)', value: 20.0, color: COLORS.navy },
  { label: 'Senior Professionals (5-10Y)', value: 30.0, color: COLORS.emerald },
  { label: 'Experienced (2-5Y)', value: 28.7, color: COLORS.blue },
  { label: 'Junior (0-2Y)', value: 21.3, color: COLORS.orange },
];

// --- STYLED COMPONENTS ---

const CustomLabel = (props) => {
  const { x, y, width, value } = props;
  if (value === undefined) return null;
  return (
    <text x={x + width / 2} y={y - 12} fill="#000" textAnchor="middle" fontSize={12} fontWeight="bold">
      {`${value.toFixed(1)}%`}
    </text>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-200 h-full flex flex-col ${className}`}>
    {children}
  </div>
);

const SectionHeader = ({ num, title, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-8 border-b-2 border-slate-100 pb-4">
    <div className="bg-slate-900 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg shrink-0">
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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8">
      
      {/* PRINT OPTIMIZATION STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page { size: A4; margin: 15mm; }
          body { background: white !important; font-size: 12pt; }
          .print-hidden { display: none !important; }
          .max-w-print { width: 100% !important; max-width: 800px !important; margin: 0 auto !important; }
          .page-break { page-break-before: always; margin-top: 2rem; }
          .card-grid { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 1rem !important; }
          .recharts-responsive-container { min-width: 350px !important; min-height: 300px !important; }
          .shadow-sm { box-shadow: none !important; border: 1px solid #ddd !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}} />

      <div className="max-w-[1200px] mx-auto max-w-print">
        
        {/* HEADER */}
        <header className="mb-12 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 text-blue-800 font-bold text-sm uppercase tracking-widest mb-2">
              <ShieldCheck size={18} />
              <span>Executive Recruitment Summary 2025</span>
            </div>
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter">
              Annual Analytics Report
            </h1>
          </div>
          <button onClick={handlePrint} className="print-hidden bg-blue-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-800 transition-all">
            <Printer size={20} /> Export to PDF
          </button>
        </header>

        {/* STRATEGIC INSIGHTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {[
            { label: "Brand Maturity", val: "55%", icon: Magnet, color: "border-blue-700" },
            { label: "Internal Advocacy", val: "34%", icon: HeartHandshake, color: "border-navy-900" },
            { label: "Gen Z Rise", val: "28%", icon: Zap, color: "border-orange-500" },
            { label: "Academic Focus", val: "54%", icon: GraduationCap, color: "border-emerald-600" },
            { label: "Adv. Degrees", val: "25%", icon: Award, color: "border-purple-500" }
          ].map((item, i) => (
            <Card key={i} className={`border-t-4 ${item.color} p-4`}>
              <item.icon size={24} className="mb-4 text-slate-700" />
              <h3 className="text-sm font-bold text-slate-500 uppercase">{item.label}</h3>
              <p className="text-2xl font-black text-slate-900">{item.val}</p>
            </Card>
          ))}
        </div>

        {/* SECTION 01 */}
        <section className="mb-16">
          <SectionHeader num="01" title="Sourcing & Allocation" icon={LayoutDashboard} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <h3 className="font-bold mb-6 uppercase text-slate-700 flex items-center gap-2"><Magnet size={18}/> Channels Comparison</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sourcingData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tick={{fontSize: 11, fontWeight: 'bold'}} axisLine={false} />
                    <YAxis hide domain={[0, 70]} />
                    <Tooltip />
                    <Bar dataKey="2025" fill={COLORS.navy} radius={[4, 4, 0, 0]} barSize={30}>
                       <LabelList content={<CustomLabel />} />
                    </Bar>
                    <Bar dataKey="2024" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={30}>
                       <LabelList content={<CustomLabel />} />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card>
              <h3 className="font-bold mb-6 uppercase text-slate-700 flex items-center gap-2"><Building2 size={18}/> R&D Unit Split</h3>
              <div className="space-y-4">
                {rdUnitData.map(unit => (
                  <div key={unit.name} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full" style={{backgroundColor: unit.color}}></div>
                      <span className="font-bold text-slate-800">{unit.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="block font-black text-lg">{unit.ofRD.toFixed(1)}%</span>
                      <span className="text-[10px] text-slate-500 font-bold uppercase">of R&D Total</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* SECTION 02 - FORCED PAGE BREAK FOR PDF */}
        <section className="page-break mb-16">
          <SectionHeader num="02" title="Workforce Composition" icon={GraduationCap} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="justify-center">
               <h3 className="font-bold mb-8 uppercase text-slate-700">Gender & Maturity</h3>
               <div className="flex items-end justify-between mb-2">
                  <span className="font-bold text-blue-900">Males {genderStats.male2025}%</span>
                  <span className="font-bold text-orange-600">Females {genderStats.female2025}%</span>
               </div>
               <div className="h-4 w-full bg-slate-100 rounded-full flex overflow-hidden mb-8">
                  <div style={{width: '80%'}} className="bg-blue-900 h-full"></div>
                  <div style={{width: '20%'}} className="bg-orange-500 h-full"></div>
               </div>
               <div className="bg-slate-900 text-white p-6 rounded-2xl flex justify-between items-center">
                  <span className="font-bold uppercase text-sm">Avg. Hire Age</span>
                  <span className="text-4xl font-black">{ageStats.global2025}</span>
               </div>
            </Card>

            <Card>
              <h3 className="font-bold mb-6 uppercase text-slate-700">Seniority Profile</h3>
              <div className="space-y-6">
                {seniorityStats.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs font-bold mb-1 uppercase">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full">
                      <div className="h-full rounded-full" style={{width: `${item.value}%`, backgroundColor: item.color}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <footer className="mt-20 border-t-2 border-slate-200 pt-8 flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
           <span>Recruitment Report 2025 // Confidential</span>
           <span>Generated by Talent Analytics Suite</span>
        </footer>

      </div>
    </div>
  );
};

export default App;
