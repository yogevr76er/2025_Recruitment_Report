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

// --- כל הנתונים והצבעים המקוריים נשמרו בדיוק כפי שהיו ---
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

const top3_2025 = [
  { name: "Technion", value: 18.8 },
  { name: "Tel-Aviv Uni", value: 16.3 },
  { name: "Ben-Gurion Uni", value: 11.3 }
];

const seniorityStats = [
  { label: 'Leadership & Strategic Experts (10-20 Years)', value: 20.0, color: COLORS.navy },
  { label: 'Established Senior Professionals (5-10 Years)', value: 30.0, color: COLORS.emerald },
  { label: 'Experienced Professionals (2-5 Years)', value: 28.7, color: COLORS.blue },
  { label: 'Junior & Entry-Level (0-2 Years)', value: 21.3, color: COLORS.orange },
];

const genderStats = { male2025: 80, female2025: 20 };
const ageStats = { global2025: 36.4, global2024: 37.1 };

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
          /* הסתרת כפתורים */
          .print-hidden { display: none !important; }
          
          /* ביטול רקעים אפורים של הדפדפן - כפיית הצבעים שלך */
          body { background: white !important; padding: 0 !important; margin: 0 !important; }
          .bg-slate-50 { background: white !important; }
          
          /* הגדרת גודל דף קשיח ומניעת עיוות */
          @page { 
            size: A4 portrait; 
            margin: 10mm; 
          }

          /* ה"קסם": נועל את הרוחב ל-1400px ומכווץ הכל ב-Zoom כדי שיכנס ל-A4 בלי תזוזות */
          .max-w-original { 
            width: 1400px !important; 
            max-width: 1400px !important; 
            zoom: 0.55; /* התאמה לרוחב A4 */
            margin: 0 auto !important;
          }

          /* מניעת שבירת כרטיסים באמצע */
          section, .card-to-break { 
            page-break-inside: avoid; 
            break-inside: avoid; 
            margin-bottom: 20px;
          }

          /* כפיית צבעים בהדפסה */
          * { 
            -webkit-print-color-adjust: exact !important; 
            print-color-adjust: exact !important; 
          }
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
          
          <div className="print-hidden flex flex-col items-end gap-2 text-right">
            <button onClick={handlePrint} className="bg-blue-900 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-blue-950 transition-all shadow-xl">
              <Printer size={20} /> Save as PDF
            </button>
          </div>
        </header>

        {/* STRATEGIC HIGHLIGHTS */}
        <div className="mb-16">
          <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
            <div className="h-[1px] w-8 bg-slate-200"></div>
            Strategic Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="border-t-4 border-blue-900 bg-slate-50/50">
              <Magnet size={36} className="text-[#1e3a8a] mb-6" />
              <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase">Brand Maturity: 55%</h3>
              <p className="text-xs text-slate-700 leading-relaxed">Elevated brand awareness now drives 55% direct hiring attraction.</p>
            </Card>
            <Card className="border-t-4 border-blue-900 bg-slate-50/50">
              <HeartHandshake size={36} className="text-blue-900 mb-6" />
              <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase">Internal Advocacy: 34%</h3>
              <p className="text-xs text-slate-700 leading-relaxed">Employee referrals remain a primary driver of talent.</p>
            </Card>
            <Card className="border-t-4 border-orange-500 bg-slate-50/50">
              <Zap size={36} className="text-orange-500 mb-6" />
              <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase">Gen Z Rise: 28%</h3>
              <p className="text-xs text-slate-700 leading-relaxed">Notable growth in Gen Z hires injecting tech fluency.</p>
            </Card>
            <Card className="border-t-4 border-emerald-600 bg-slate-50/50">
              <GraduationCap size={36} className="text-emerald-600 mb-6" />
              <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase">Academic Focus: 54%</h3>
              <p className="text-xs text-slate-700 leading-relaxed">Prioritized focus on high-potential junior talent.</p>
            </Card>
            <Card className="border-t-4 border-purple-500 bg-slate-50/50">
              <Award size={36} className="text-purple-500 mb-6" />
              <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase">Adv. Degrees: 25%</h3>
              <p className="text-xs text-slate-700 leading-relaxed">1 in 4 hires now holds an MSc or PhD degree.</p>
            </Card>
          </div>
        </div>

        {/* SECTION 01: SOURCING & ALLOCATION */}
        <section className="mb-24">
          <SectionHeader num="01" title="Sourcing Strategy & Unit Allocation" icon={LayoutDashboard} />
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            <Card className="flex-row items-center gap-5 py-6">
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

          <div className="grid grid-cols-2 gap-8 mb-8">
            <Card>
              <h3 className="text-lg font-bold mb-8 uppercase flex items-center gap-2"><Magnet size={20} className="text-blue-900"/> Sourcing Analysis</h3>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sourcingData} margin={{ top: 40, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" tick={{fontWeight: 600}} />
                    <YAxis hide domain={[0, 100]} />
                    <Legend verticalAlign="top" align="right" />
                    <Bar name="2025" dataKey="2025" fill={COLORS.navy} radius={[6, 6, 0, 0]} barSize={32}>
                      <LabelList content={<CustomLabel />} />
                    </Bar>
                    <Bar name="2024" dataKey="2024" fill="#cbd5e1" radius={[6, 6, 0, 0]} barSize={32}>
                      <LabelList content={<CustomLabel />} />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-bold mb-8 uppercase flex items-center gap-2"><Building2 size={20} className="text-emerald-600"/> Organization Allocation</h3>
              <div className="h-[250px] w-full mb-8">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={destinationData} margin={{ top: 40, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" tick={{fontWeight: 600}} />
                    <Bar name="2025" dataKey="2025" fill={COLORS.emerald} radius={[6, 6, 0, 0]} barSize={32}>
                      <LabelList content={<CustomLabel />} />
                    </Bar>
                    <Bar name="2024" dataKey="2024" fill="#cbd5e1" radius={[6, 6, 0, 0]} barSize={32}>
                      <LabelList content={<CustomLabel />} />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="border-t pt-6">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">R&D Unit Distribution</h4>
                <div className="space-y-3">
                  {rdUnitData.map(unit => (
                    <div key={unit.name} className="bg-slate-50 p-3 rounded-xl flex items-center justify-between border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-8 rounded-full" style={{backgroundColor: unit.color}}></div>
                        <p className="text-xs font-bold text-slate-800 uppercase">{unit.name}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-black text-slate-800">{unit.ofRD.toFixed(1)}% <span className="text-[8px] text-slate-400">OF R&D</span></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* SECTION 03: HUB PERFORMANCE - (החזרתי את החלק שנעלם) */}
        <section className="mb-24">
          <SectionHeader num="03" title="Hub Performance Comparison" icon={MapPin} />
          <div className="grid grid-cols-2 gap-8">
            <Card className="border-t-4 border-[#1e3a8a]">
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-2xl font-black text-[#1e3a8a]">KFAR SABA</h4>
                <Building2 size={20} className="text-[#1e3a8a] opacity-20"/>
              </div>
              <table className="w-full text-sm">
                <thead className="text-[10px] font-black text-slate-400 uppercase border-b">
                  <tr><th className="pb-3 text-left">Metric</th><th className="pb-3 text-right">2025</th><th className="pb-3 text-right opacity-50">2024</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  <tr><td className="py-4 text-xs uppercase">Hires %</td><td className="py-4 text-right font-black text-blue-900">66.3%</td><td className="py-4 text-right opacity-50 font-bold">68.0%</td></tr>
                  <tr><td className="py-4 text-xs uppercase">Avg Age</td><td className="py-4 text-right font-black text-blue-900">36.7</td><td className="py-4 text-right opacity-50 font-bold">37.2</td></tr>
                  <tr><td className="py-4 text-xs uppercase">Mid-Level+</td><td className="py-4 text-right font-black text-blue-900">67.9%</td><td className="py-4 text-right opacity-50 font-bold">65.0%</td></tr>
                </tbody>
              </table>
            </Card>

            <Card className="border-t-4 border-emerald-600">
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-2xl font-black text-emerald-700">NORTH HUB</h4>
                <MapPin size={20} className="text-emerald-700 opacity-20"/>
              </div>
              <table className="w-full text-sm">
                <thead className="text-[10px] font-black text-slate-400 uppercase border-b">
                  <tr><th className="pb-3 text-left">Metric</th><th className="pb-3 text-right">2025</th><th className="pb-3 text-right opacity-50">2024</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  <tr><td className="py-4 text-xs uppercase">Hires %</td><td className="py-4 text-right font-black text-emerald-700">33.7%</td><td className="py-4 text-right opacity-50 font-bold">32.0%</td></tr>
                  <tr><td className="py-4 text-xs uppercase">Avg Age</td><td className="py-4 text-right font-black text-emerald-700">35.9</td><td className="py-4 text-right opacity-50 font-bold">36.5</td></tr>
                  <tr><td className="py-4 text-xs uppercase">Mid-Level+</td><td className="py-4 text-right font-black text-emerald-700">66.7%</td><td className="py-4 text-right opacity-50 font-bold">64.0%</td></tr>
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
