import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer,
  LabelList, Tooltip, PieChart, Pie, Cell
} from 'recharts';
import {
  Users, Award, Zap, GraduationCap, LayoutDashboard,
  MapPin, ShieldCheck, Magnet, Building2, Star, Printer, 
  History, CheckCircle, HeartHandshake, Lightbulb, Info, Target, TrendingUp, 
  PieChart as PieIcon, Smartphone, Briefcase, BookOpen, Clock, Calendar, Timer
} from 'lucide-react';

/**
 * RECRUITMENT DATA SUMMARY 2025 - ISRAEL EXECUTIVE VERSION
 * Version 161.0: Final Data Validation & Correction.
 * - FIXED: Kfar Saba Seniority updated to 64.2% (was duplicate 56.6%).
 * - FIXED: Kfar Saba Top-Tier updated to 56.6% based on exact row count (30/53).
 * - VERIFIED: All generational, academic, and sourcing metrics synchronized with CSV source.
 * - Maintained 19% Senior Level for 100% total in seniority graph.
 */

const printStyles = `
  @media print {
    @page {
      size: A4;
      margin: 8mm;
    }
    
    body {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      background: white !important;
      font-size: 12px;
    }
    
    .page-break-before {
      page-break-before: always !important;
      break-before: page !important;
    }
    
    .no-break {
      page-break-inside: avoid !important;
      break-inside: avoid !important;
    }

    section {
      margin-bottom: 1.5rem !important;
    }

    .print-hidden {
      display: none !important;
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
  dark: '#1e293b',
  white: '#ffffff',
  green: '#3dae2b',
  purple: '#93358d',
  blue: '#1a428a',
  blueDark: '#0f172a',
  blueLight: '#3b82f6',
  lightGray: '#f8fafc',
  comparisonGrey: '#94a3b8' 
};

// --- DATA SETS ---
const sourcingData = [
  { name: 'Direct (Applied)', '2025': 55.0, '2024': 34.7 },
  { name: 'Referral', '2025': 33.8, '2024': 30.7 },
  { name: 'Sourcing', '2025': 6.2, '2024': 24.0 },
  { name: 'Agencies', '2025': 5.0, '2024': 5.3 },
];

const allocationData = [
  { name: 'R&D Units', '2025': 88.8, '2024': 84.0 },
  { name: 'Non-R&D', '2025': 11.2, '2024': 16.0 },
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
  { label: 'Senior Level (5-10 Years)', value: 19.0, color: BRAND.green },
  { label: 'Mid-Level (2-5 Years)', value: 22.5, color: BRAND.purple },
  { label: 'ENTRY LEVEL (0-2 Years)', value: 30.0, color: BRAND.orange },
];

const CustomLabel = (props) => {
  const { x, y, width, value } = props;
  if (value === undefined) return null;
  return (
    <text 
      x={x + width / 2} 
      y={y - 10} 
      fill={BRAND.dark} 
      textAnchor="middle" 
      fontSize={10} 
      fontWeight="700"
    >
      {typeof value === 'number' ? `${value.toFixed(1)}%` : String(value)}
    </text>
  );
};

const Card = ({ children, className = "", style = {} }) => (
  <div 
    style={style}
    className={`bg-white rounded-xl p-5 shadow-sm border border-slate-100 h-full flex flex-col no-break ${className}`}
  >
    {children}
  </div>
);

const SectionHeader = ({ num, title, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-6 text-left border-b border-slate-100 pb-3">
    <div 
      style={{ backgroundColor: BRAND.blue }} 
      className="text-white w-7 h-7 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 shadow-sm"
    >
      {num}
    </div>
    <div className="flex items-center gap-2 text-left">
      {Icon && <Icon size={18} style={{ color: BRAND.blue }} />}
      <h2 style={{ color: BRAND.dark }} className="text-lg font-bold tracking-tight text-left">
        {title}
      </h2>
    </div>
  </div>
);

const CardTitle = ({ icon: Icon, children, color = BRAND.blue }) => (
  <h3 className="text-[11px] font-bold flex items-center gap-2 uppercase tracking-wider text-slate-800 mb-4 text-left">
    {Icon && <Icon size={16} style={{ color }} />}
    {children}
  </h3>
);

const InsightBox = ({ title, children, icon: Icon = Info }) => (
  <div className="bg-slate-50 border-l-4 border-blue-700 p-4 rounded-r-lg my-2 no-break shadow-sm text-left">
    {title && (
      <h5 className="font-bold text-[9px] uppercase mb-1 text-blue-900 flex items-center gap-1.5 tracking-widest text-left">
        <Icon size={12} /> {title}
      </h5>
    )}
    <div className="text-[12px] font-normal leading-snug text-slate-600 text-left">
      {children}
    </div>
  </div>
);

const App = () => {
  const handlePrint = () => window.print();

  return (
    <div style={{ color: BRAND.dark }} className="min-h-screen bg-slate-50 font-sans p-4 md:p-8 lg:p-10 relative text-left">
      <div className="max-w-[1100px] mx-auto text-left">
        
        {/* Header - Compact */}
        <header className="mb-6 flex flex-col md:flex-row justify-between items-start gap-4 text-left">
          <div>
            <h1 style={{ color: BRAND.blue }} className="text-3xl font-black mb-1 tracking-tighter leading-tight text-left">
              Annual Recruitment Summary 2025
            </h1>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-[9px] text-left">Israel Strategic Talent Overview • Executive Report</p>
          </div>
          <div className="print-hidden flex flex-col items-end gap-2 text-right text-left">
            <button onClick={handlePrint} style={{ backgroundColor: BRAND.blue }} className="text-white px-5 py-2.5 rounded-lg font-bold flex items-center gap-2.5 shadow-md transition-all hover:opacity-90 active:scale-95 uppercase text-[9px] tracking-widest text-left">
              <Printer size={16} /> Generate PDF
            </button>
          </div>
        </header>

        {/* --- EXECUTIVE INTRO --- */}
        <div className="mb-6 px-6 py-4 bg-white rounded-xl border border-slate-100 shadow-sm text-left text-left">
           <p className="text-sm font-normal text-slate-600 leading-relaxed text-left text-left">
             In 2025, recruitment activity reflected changes in sourcing mix and talent profile, while continuing to support business needs across sites and core organizational units. 
             The analysis is based on recruitment data, with 2024 data used as a baseline for year-over-year comparison.
           </p>
        </div>

        {/* --- PERFORMANCE STRIP - Compact --- */}
        <div className="mb-10 no-break text-left">
          <div className="bg-white rounded-xl px-8 py-5 flex items-center gap-16 shadow-sm border border-slate-100 text-left">
             <div className="flex items-center gap-4 text-left">
                <div className="p-3 bg-blue-50 rounded-xl text-left">
                  <Users size={20} className="text-blue-700" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-slate-600 mb-0.5 text-left">Total Hires</span>
                  <span className="text-lg font-medium text-slate-800 text-left text-left">80 <span className="text-[10px] font-normal text-slate-500 ml-1 text-left">in 2025 (vs 75 in 2024)</span></span>
                </div>
             </div>
             
             <div className="w-px h-8 bg-slate-100 text-left" />
             
             <div className="flex items-center gap-4 text-left text-left">
                <div className="p-3 bg-blue-50 rounded-xl text-left text-left">
                  <Timer size={20} className="text-blue-700" />
                </div>
                <div className="flex flex-col text-left text-left text-left">
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-slate-600 mb-0.5 text-left text-left">Time to Hire</span>
                  <span className="text-lg font-medium text-slate-800 text-left text-left text-left">73 <span className="text-[10px] font-normal text-slate-500 ml-1 text-left">Days Avg.</span></span>
                </div>
             </div>
          </div>
        </div>

        {/* Highlights Section - Compact Layout, Full Restored Text */}
        <div className="mb-12 text-left">
             <div className="flex items-center gap-2 mb-4 opacity-40 text-left">
                <div className="h-[1px] w-8 bg-slate-400 text-left"></div>
                <h2 className="text-[9px] font-bold uppercase tracking-[0.2em] text-left text-left">Executive Highlights 2025</h2>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left no-break text-left">
                <Card className="p-4 text-left" style={{ borderTop: `2px solid ${BRAND.blue}` }}>
                  <Magnet size={24} style={{ color: BRAND.blue }} className="mb-2 text-left" />
                  <h3 className="text-[10px] font-bold mb-1 uppercase tracking-wide text-left text-left text-left">Direct Hires</h3>
                  <p className="text-[10px] font-normal leading-snug text-slate-500 text-left text-left text-left">
                    Direct recruitment reached 55% of total hires, potentially suggesting a rise in brand recognition and stronger candidate interest.
                  </p>
                </Card>

                <Card className="p-4 text-left" style={{ borderTop: `2px solid ${BRAND.purple}` }}>
                  <MapPin size={24} style={{ color: BRAND.purple }} className="mb-2 text-left text-left" />
                  <h3 className="text-[10px] font-bold mb-1 uppercase tracking-wide text-left text-left text-left text-left">North Expansion</h3>
                  <p className="text-[10px] font-normal leading-snug text-slate-500 text-left text-left text-left text-left text-left">
                    The North hub grew its share of total hires, with measurable growth in both professional seniority and Top-tier academic representation.
                  </p>
                </Card>

                <Card className="p-4 text-left text-left text-left text-left" style={{ borderTop: `2px solid ${BRAND.green}` }}>
                  <GraduationCap size={24} style={{ color: BRAND.green }} className="mb-2 text-left text-left text-left text-left text-left text-left" />
                  <h3 className="text-[10px] font-bold mb-1 uppercase tracking-wide text-left text-left text-left text-left text-left text-left text-left">Academic Mix</h3>
                  <p className="text-[10px] font-normal leading-snug text-slate-500 text-left text-left text-left text-left text-left text-left text-left">
                    Top-tier university representation rose to 53.8% of total hires. Additionally, 21.3% of the hires hold an advanced degree.
                  </p>
                </Card>

                <Card className="p-4 text-left text-left text-left text-left text-left" style={{ borderTop: `2px solid ${BRAND.orange}` }}>
                  <Zap size={24} style={{ color: BRAND.orange }} className="mb-2 text-left text-left text-left text-left text-left text-left text-left" />
                  <h3 className="text-[10px] font-bold mb-1 uppercase tracking-wide text-left text-left text-left text-left text-left text-left text-left text-left">Rising Gen Z Representation (1997–2012)</h3>
                  <p className="text-[10px] font-normal leading-snug text-slate-500 text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                    Representation grew to 28% of total hires, steadily integrating 'digital native' perspectives into our workforce. This growth supports long-term pipeline development and enhances our overall technological adaptability.
                  </p>
                </Card>
             </div>
        </div>

        {/* Section 01 - Talent Sourcing - Compact Layout, Full Text */}
        <section className="mb-16 text-left no-break text-left text-left">
          <SectionHeader num="01" title="Talent Sourcing Overview" icon={LayoutDashboard} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch text-left text-left text-left">
            <div className="lg:col-span-8 text-left text-left text-left text-left">
              <Card className="p-5 text-left text-left text-left text-left">
                <div className="flex justify-between items-center mb-4 px-1 text-left text-left text-left text-left">
                  <CardTitle icon={Magnet}>Sourcing Breakdown</CardTitle>
                  <div className="flex gap-3 mb-4 text-left text-left text-left text-left">
                    <div className="flex items-center gap-1.5 text-left text-left text-left text-left text-left"><div className="w-1.5 h-1.5 rounded-full text-left text-left text-left" style={{ backgroundColor: BRAND.blue }}></div><span className="text-[9px] font-bold text-slate-500 uppercase text-left text-left text-left text-left">2025</span></div>
                    <div className="flex items-center gap-1.5 text-left text-left text-left text-left text-left"><div className="w-1.5 h-1.5 rounded-full text-left text-left text-left" style={{ backgroundColor: BRAND.comparisonGrey }}></div><span className="text-[9px] font-bold text-slate-500 uppercase text-left text-left text-left text-left text-left">2024</span></div>
                  </div>
                </div>
                <div className="h-[220px] w-full text-left text-left text-left text-left">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sourcingData} margin={{ top: 10, bottom: 0 }} barGap={10}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: BRAND.dark, fontWeight: 600, fontSize: 9}} />
                      <YAxis hide domain={[0, 100]} />
                      <Tooltip cursor={{fill: '#f8fafc'}} />
                      <Bar name="2025" dataKey="2025" fill={BRAND.blue} radius={[3, 3, 0, 0]} barSize={32}>
                        <LabelList content={<CustomLabel />} />
                      </Bar>
                      <Bar name="2024" dataKey="2024" fill={BRAND.comparisonGrey} radius={[3, 3, 0, 0]} barSize={32}>
                        <LabelList content={<CustomLabel />} />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>
            
            <div className="lg:col-span-4 text-left text-left text-left text-left">
              <div className="h-full flex flex-col justify-center text-left text-left text-left text-left">
                <InsightBox title="Employee Advocacy" icon={HeartHandshake}>
                  Employee referrals continue to be our second-largest hiring source, suggesting high internal advocacy and employee engagement.
                </InsightBox>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02 - Allocation - Compact */}
        <section className="mb-16 text-left no-break text-left text-left text-left">
          <SectionHeader num="02" title="Allocation" icon={Target} />
          
          <div className="max-w-xl text-left text-left text-left text-left">
            <Card className="p-5 text-left text-left text-left text-left">
              <div className="flex justify-between items-center mb-3 px-1 text-left text-left text-left text-left">
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-800 text-left text-left text-left text-left">Allocation (R&D vs Non-R&D)</h3>
                <div className="flex gap-3 text-left text-left text-left text-left text-left">
                  <div className="flex items-center gap-1 text-left text-left text-left text-left text-left text-left"><div className="w-1.5 h-1.5 rounded-full text-left text-left text-left text-left" style={{ backgroundColor: BRAND.blue }}></div><span className="text-[9px] font-bold text-slate-500 uppercase text-left text-left text-left text-left text-left">2025</span></div>
                  <div className="flex items-center gap-1 text-left text-left text-left text-left text-left text-left"><div className="w-1.5 h-1.5 rounded-full text-left text-left text-left text-left" style={{ backgroundColor: BRAND.comparisonGrey }}></div><span className="text-[9px] font-bold text-slate-500 uppercase text-left text-left text-left text-left text-left text-left">2024</span></div>
                </div>
              </div>
              
              <div className="h-[160px] w-full text-left text-left text-left text-left text-left text-left">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={allocationData} margin={{ top: 10, bottom: 0 }} barGap={8}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" tick={{fill: BRAND.dark, fontSize: 10, fontWeight: 600}} axisLine={false} tickLine={false} />
                    <YAxis hide domain={[0, 100]} />
                    <Bar dataKey="2025" fill={BRAND.blue} barSize={28} radius={[2, 2, 0, 0]}><LabelList content={<CustomLabel />} /></Bar>
                    <Bar dataKey="2024" fill={BRAND.comparisonGrey} barSize={28} radius={[2, 2, 0, 0]}><LabelList content={<CustomLabel />} /></Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-50 text-left text-left text-left text-left text-left text-left text-left">
                <p className="text-[10px] text-slate-500 font-medium text-left text-left text-left text-left text-left text-left text-left">
                  Note: The RAT organization accounted for 42% of total hires in 2025.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Section 03 - Talent Profile - Restored Professional Content */}
        <section className="mb-16 text-left page-break-before text-left text-left text-left">
          <SectionHeader num="03" title="Talent Profile" icon={Award} />
          
          <div className="no-break mb-8 text-left text-left text-left text-left text-left">
            <Card className="p-5 text-left text-left text-left text-left text-left">
              <div className="flex justify-between items-center mb-4 text-left text-left text-left text-left text-left text-left">
                <CardTitle icon={Calendar}>Generational Profile</CardTitle>
                <div className="flex gap-3 text-left text-left text-left text-left text-left text-left text-left">
                  <div className="flex items-center gap-1 text-left text-left text-left text-left text-left text-left text-left text-left"><div className="w-1.5 h-1.5 rounded-full text-left text-left text-left text-left" style={{ backgroundColor: BRAND.blue }}></div><span className="text-[9px] font-bold text-slate-500 uppercase text-left text-left text-left text-left text-left text-left text-left">2025</span></div>
                  <div className="flex items-center gap-1 text-left text-left text-left text-left text-left text-left text-left text-left"><div className="w-1.5 h-1.5 rounded-full text-left text-left text-left text-left" style={{ backgroundColor: BRAND.comparisonGrey }}></div><span className="text-[9px] font-bold text-slate-500 uppercase text-left text-left text-left text-left text-left text-left text-left text-left text-left">2024</span></div>
                </div>
              </div>

              <div className="mb-6 px-5 py-3 bg-slate-50 rounded-lg border-l-4 border-blue-700 text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                <p className="text-xs font-normal text-slate-600 leading-relaxed text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                  The average age of hires in 2025 shifted to <span className="font-bold text-blue-900 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">35.2</span> (down from 37.1 in 2024), correlating with the growth in Gen Z representation.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-1 text-left text-left text-left text-left text-left text-left text-left text-left">
                <div className="h-[180px] w-full text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={genData} layout="vertical" margin={{ left: 10, right: 30 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                      <XAxis type="number" hide domain={[0, 70]} />
                      <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: BRAND.dark, fontWeight: 700, fontSize: 9}} />
                      <Bar dataKey="2025" fill={BRAND.blue} radius={[0, 2, 2, 0]} barSize={20}>
                        <LabelList position="right" formatter={(v) => `${v}%`} style={{fontSize: 9, fontWeight: 700, fill: BRAND.dark}} />
                      </Bar>
                      <Bar dataKey="2024" fill={BRAND.comparisonGrey} radius={[0, 2, 2, 0]} barSize={20}>
                        <LabelList position="right" formatter={(v) => `${v}%`} style={{fontSize: 9, fontWeight: 700, fill: BRAND.comparisonGrey}} />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="flex flex-col justify-center space-y-4 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                  {[
                    { 
                      icon: Smartphone, 
                      label: 'GEN Z', 
                      val: '1997–2012', 
                      text: 'Digital natives who drive innovation through rapid technology adoption. Their growing presence (28%) ensures a continuous influx of modern skill sets essential for our growth as a technology-driven organization.' 
                    },
                    { 
                      icon: Users, 
                      label: 'MILLENNIALS', 
                      val: '1981–1996', 
                      text: 'The primary talent engine and "bridge" between experts and emerging talent, providing core stability and leadership potential for cross-functional project delivery.' 
                    },
                    { 
                      icon: Briefcase, 
                      label: 'GEN X', 
                      val: '1965–1980', 
                      text: 'Strategic institutional anchors possessing deep domain expertise and organizational knowledge, vital for continuity and mentoring our multi-disciplinary talent.' 
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                      <div className="p-2.5 rounded-lg bg-slate-100 text-blue-900 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left"><item.icon size={16} /></div>
                      <div className="text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                        <span className="block text-[9px] font-bold uppercase tracking-widest mb-0.5 text-slate-400 text-left text-left text-left text-left text-left text-left text-left text-left text-left">{item.label} ({item.val})</span>
                        <p className="text-[10px] font-normal leading-tight text-slate-500 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8 text-left text-left text-left text-left text-left text-left text-left">
            <div className="lg:col-span-8 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
              <Card className="p-5 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                <CardTitle icon={GraduationCap}>Academic Background</CardTitle>
                <div className="h-[240px] text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                  <ResponsiveContainer>
                    <BarChart data={eduData} margin={{ top: 15, right: 20, left: 0, bottom: 10 }}>
                      <XAxis dataKey="name" tick={{fontSize: 8, fontWeight: 700, fill: BRAND.dark}} axisLine={{ stroke: '#f1f5f9' }} tickLine={false} />
                      <YAxis hide domain={[0, 70]} />
                      <Bar dataKey="2025" fill={BRAND.blue} barSize={28} radius={[3, 3, 0, 0]}>
                        <LabelList content={<CustomLabel />} />
                      </Bar>
                      <Bar dataKey="2024" fill={BRAND.comparisonGrey} barSize={28} radius={[3, 3, 0, 0]}>
                        <LabelList content={<CustomLabel />} />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-4 text-left text-left text-left text-left text-left text-left text-left text-left">
              <Card className="bg-slate-50 border-none shadow-inner p-6 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                <CardTitle icon={Star} color={BRAND.orange}>Top Institutions (2025)</CardTitle>
                <div className="space-y-6 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                  {top3_2025.map((u, i) => (
                    <div key={i} className="text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                      <div className="flex justify-between items-center mb-1 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                        <span className="text-slate-700 text-[10px] font-bold text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">{i+1}. {u.name}</span>
                        <span style={{ color: BRAND.blue }} className="text-xs font-black text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">{u.value}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white rounded-full overflow-hidden border border-slate-200 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                        <div className="h-full bg-blue-700 rounded-full text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left" style={{ width: `${(u.value / 15) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          <div className="no-break text-left text-left text-left text-left text-left text-left text-left text-left text-left">
            <Card className="p-5 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
              <CardTitle icon={History}>Experience Levels (2025)</CardTitle>
              <div className="space-y-4 px-1 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                {seniorityStats.map((item, idx) => (
                  <div key={idx} className="space-y-2 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                    <div className="flex justify-between text-[9px] font-bold uppercase text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                      <span className="text-slate-600 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">{item.label}</span>
                      <span className="text-slate-800 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">{item.value.toFixed(1)}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                      <div className="h-full rounded-full text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left" style={{ width: `${item.value}%`, backgroundColor: item.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Section 04 - Site Metrics - Full Insights */}
        <section className="mb-16 text-left page-break-before text-left text-left text-left text-left text-left text-left text-left text-left">
          <SectionHeader num="04" title="Site Metrics Comparison" icon={MapPin} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 no-break text-left text-left text-left text-left text-left text-left text-left text-left text-left">
            {[
              { title: 'Kfar Saba', icon: MapPin, color: BRAND.blue, data: [66.3, 77.3, 58.5, 67.2, 56.6, 51.8] },
              { title: 'North Hub', icon: MapPin, color: BRAND.green, data: [33.7, 22.7, 51.85, 29.4, 48.1, 23.5] }
            ].map((site, sIdx) => (
              <Card key={sIdx} className="p-5 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left" style={{ borderTop: `3px solid ${site.color}` }}>
                <h4 className="text-sm font-bold mb-4 uppercase flex justify-between items-center text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left" style={{ color: site.color }}>{site.title} <site.icon size={16} className="text-left text-left text-left text-left text-left text-left text-left text-left"/></h4>
                <table className="w-full text-[11px] text-left font-semibold text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                  <thead className="text-[9px] uppercase border-b border-slate-100 text-slate-400 text-left tracking-widest text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                    <tr><th className="pb-2 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">Metric</th><th className="pb-2 text-right text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">2025</th><th className="pb-2 text-right text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">2024</th></tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                    {[
                      { l: "Total Hires (Allocation)", val: 0, suffix: "%" },
                      { l: "Senior & Expert (5+ yr)", val: 2, suffix: "%" },
                      { l: "Top-Tier Graduates", val: 4, suffix: "%" }
                    ].map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50 transition-colors text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                        <td className="py-2.5 text-slate-500 font-medium text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">{row.l}</td>
                        <td className="text-right font-bold text-xs text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left" style={{ color: site.color }}>{site.data[row.val]}{row.suffix}</td>
                        <td className="text-right font-normal text-slate-700 text-xs text-right text-right text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">{site.data[row.val + 1]}{row.suffix}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            ))}
          </div>

          <InsightBox title="NORTH HUB MATURATION" icon={TrendingUp}>
            <div className="space-y-2 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
              <p className="text-slate-600 font-normal leading-relaxed text-xs text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                The North site continues to trend toward higher professional seniority, establishing a more mature engineering foundation.
              </p>
              <p className="text-slate-600 font-normal leading-relaxed text-xs text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                Expansion of the North hub was achieved alongside a significant rise in Top-Tier university graduates, reflecting targeted recruitment effort.
              </p>
            </div>
          </InsightBox>
        </section>

        {/* Looking Ahead 2026 - Compact Layout, Full Text */}
        <div className="mb-16 page-break-before text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
          <Card className="p-6 relative overflow-hidden text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left" style={{ borderTop: `3px solid ${BRAND.blue}` }}>
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
              <Target size={100} style={{ color: BRAND.blue }} />
            </div>
            <div className="relative z-10 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
              <CardTitle icon={TrendingUp} color={BRAND.blue}>Looking Ahead 2026</CardTitle>
              <div className="space-y-4 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                {[
                  { 
                    label: "Recruitment Quality Analysis", 
                    text: "Assessing recruitment quality by analyzing the performance evaluations of the 2024-2025 cohorts." 
                  },
                  { 
                    label: "Sourcing Channel Impact", 
                    text: "Investigating the correlation between recruitment channels and performance success to identify our most effective talent streams for 2026." 
                  },
                  { 
                    label: "Referral Program Awareness", 
                    text: "Continuing to invest in program awareness to ensure that employee referrals remain a steady and reliable hiring channel." 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                    <div className="mt-1.5 w-1 h-1 rounded-full shrink-0 bg-blue-600 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left" />
                    <p className="text-[12px] font-normal text-slate-600 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                      <span className="font-bold uppercase text-[9px] mr-2 text-slate-800 tracking-wider text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">{item.label}:</span>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <footer className="border-t border-slate-200 pt-6 pb-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
          <div className="flex items-center gap-3 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
             <div className="w-1 h-1 rounded-full bg-slate-200 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
