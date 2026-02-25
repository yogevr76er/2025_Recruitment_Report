import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer,
  LabelList
} from 'recharts';
import {
  Users, Award, Zap, GraduationCap, LayoutDashboard,
  MapPin, Magnet, Star, 
  History, HeartHandshake, Info, Target, TrendingUp, 
  Smartphone, Briefcase, Timer, User
} from 'lucide-react';

/**
 * RECRUITMENT DATA SUMMARY 2025 - ISRAEL EXECUTIVE VERSION
 * Version 164.6: Final Polish for PDF Export.
 * - Cleaned data integrity for Academic Background.
 * - Removed interactive Tooltips for static PDF output.
 * - Refined Experience card typography (Title focus + range subtext).
 */

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
  { name: 'Direct Applications', '2025': 55.0, '2024': 34.7 },
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
  { name: 'TOP-TIER UNIVERSITIES*', '2025': 53.8, '2024': 45.3 },
  { name: 'COLLEGES', '2025': 45.0, '2024': 34.7 },
  { name: 'GLOBAL UNI', '2025': 0.0, '2024': 6.7 },
  { name: 'Exp-based (non-degree)', '2025': 1.2, '2024': 13.3 }
];

const top3_2025 = [
  { name: "Tel Aviv University", value: 13.8 },
  { name: "Technion", value: 12.5 },
  { name: "Ben-Gurion University", value: 11.3 }
];

const seniorityStats = [
  { title: 'EXPERT LEVEL', range: '11+ Years', value: 28.5, color: BRAND.blue },
  { title: 'SENIOR LEVEL', range: '6–10 Years', value: 19.0, color: BRAND.green },
  { title: 'MID-LEVEL', range: '3–5 Years', value: 22.5, color: BRAND.purple },
  { title: 'ENTRY LEVEL', range: '0–2 Years', value: 30.0, color: BRAND.orange },
];

const CustomLabel = (props) => {
  const { x, y, width, value } = props;
  if (value === undefined) return null;
  const displayValue = value === 0 ? "—" : `${value.toFixed(1)}%`;
  return (
    <text 
      x={x + width / 2} 
      y={y - 10} 
      fill={BRAND.dark} 
      textAnchor="middle" 
      fontSize={10} 
      fontWeight="700"
    >
      {displayValue}
    </text>
  );
};

const Card = ({ children, className = "", style = {} }) => (
  <div 
    style={style}
    className={`bg-white rounded-xl p-5 shadow-sm border border-slate-100 h-full flex flex-col break-inside-avoid ${className}`}
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
  <div className="bg-slate-50 border-l-4 border-blue-700 p-4 rounded-r-lg my-2 break-inside-avoid text-left">
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
  return (
    <div style={{ color: BRAND.dark }} className="min-h-screen bg-slate-50 font-sans p-4 md:p-8 lg:p-10 text-left text-left">
      <div className="max-w-[1100px] mx-auto text-left text-left">
        
        {/* Header */}
        <header className="mb-6 flex flex-col md:flex-row justify-between items-start gap-4 text-left text-left">
          <div className="text-left text-left">
            <h1 style={{ color: BRAND.blue }} className="text-3xl font-black mb-1 tracking-tighter leading-tight text-left text-left text-left">
              Annual Recruitment Summary 2025 - Israel
            </h1>
            <p className="text-slate-800 font-black uppercase tracking-[0.2em] text-sm text-left text-left text-left text-left">EXECUTIVE SUMMARY</p>
          </div>
        </header>

        {/* --- EXECUTIVE INTRO --- */}
        <div className="mb-6 px-6 py-4 bg-white rounded-xl border border-slate-100 shadow-sm text-left text-left text-left text-left">
           <p className="text-sm font-normal text-slate-600 leading-relaxed text-left text-left text-left text-left text-left">
             In 2025, recruitment activity reflected changes in sourcing mix and talent profile, while continuing to support business needs across sites and core organizational units. 
             The analysis is based on recruitment data, with 2024 data used as a baseline for year-over-year comparison.
             <span className="block mt-2 text-[11px] text-slate-400 italic text-left text-left text-left text-left text-left text-left text-left">
               <span className="font-bold not-italic">Scope:</span> Israel hires, 2025; benchmark: 2024.
             </span>
           </p>
        </div>

        {/* --- PERFORMANCE STRIP --- */}
        <div className="mb-10 break-inside-avoid text-left text-left text-left text-left">
          <div className="bg-white rounded-xl px-8 py-5 flex items-center gap-16 shadow-sm border border-slate-100 text-left text-left text-left text-left text-left">
             {/* Total Hires Card */}
             <div className="flex items-center gap-4 text-left text-left text-left text-left text-left">
                <div className="p-3 bg-blue-50 rounded-xl text-left text-left text-left text-left text-left text-left">
                  <Users size={20} className="text-blue-700" />
                </div>
                <div className="flex flex-col text-left text-left text-left text-left text-left text-left">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mb-0.5 text-left text-left text-left text-left text-left text-left text-left">TOTAL HIRES (2025)</span>
                  <div className="flex flex-col text-left text-left text-left text-left text-left text-left">
                    <span className="text-lg font-black text-slate-800 text-left leading-tight text-left text-left text-left text-left text-left text-left">80</span>
                    <span className="text-[10px] font-semibold text-slate-400 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">(vs 75 in 2024)</span>
                  </div>
                </div>
             </div>
             
             <div className="w-px h-8 bg-slate-100 text-left text-left text-left text-left text-left text-left text-left" />
             
             {/* Time to Hire Card */}
             <div className="flex items-center gap-4 text-left text-left text-left text-left text-left text-left text-left">
                <div className="p-3 bg-blue-50 rounded-xl text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                  <Timer size={20} className="text-blue-700" />
                </div>
                <div className="flex flex-col text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mb-0.5 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">TIME TO HIRE (2025)</span>
                  <div className="flex flex-col text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                    <span className="text-lg font-black text-slate-800 text-left leading-tight text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">~73 <span className="text-[10px] font-bold ml-0.5 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">Days</span></span>
                    <span className="text-[9px] font-medium text-slate-400 text-left mt-0.5 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">From job posting to signed contract.</span>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mb-12 text-left text-left text-left text-left text-left text-left">
             <div className="flex items-center gap-2 mb-4 opacity-40 text-left text-left text-left text-left text-left text-left text-left text-left">
                <div className="h-[1px] w-8 bg-slate-400 text-left text-left text-left text-left text-left text-left text-left text-left text-left"></div>
                <h2 className="text-[9px] font-bold uppercase tracking-[0.2em] text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">Executive Highlights 2025</h2>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 break-inside-avoid text-left text-left text-left text-left text-left text-left text-left text-left">
                <Card className="p-4 text-left text-left text-left text-left text-left text-left" style={{ borderTop: `2px solid ${BRAND.blue}` }}>
                  <Magnet size={24} style={{ color: BRAND.blue }} className="mb-2 text-left text-left text-left text-left text-left" />
                  <h3 className="text-[10px] font-bold mb-1 uppercase tracking-wide text-left text-slate-800 text-left text-left text-left text-left text-left">Direct Applications</h3>
                  <p className="text-[10px] font-normal leading-snug text-slate-500 text-left text-left text-left text-left text-left text-left text-left text-left">
                    Direct applications increased, broadening the candidate pool and reducing reliance on proactive sourcing.
                  </p>
                </Card>

                <Card className="p-4 text-left text-left text-left text-left text-left text-left text-left" style={{ borderTop: `2px solid ${BRAND.purple}` }}>
                  <MapPin size={24} style={{ color: BRAND.purple }} className="mb-2 text-left text-left text-left text-left text-left text-left" />
                  <h3 className="text-[10px] font-bold mb-1 uppercase tracking-wide text-left text-slate-800 text-left text-left text-left text-left text-left text-left">North Expansion</h3>
                  <p className="text-[10px] font-normal leading-snug text-slate-500 text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                    North Hub expanded its footprint, reflecting a maturing intake mix with higher seniority and a higher share of top-tier university graduates.
                  </p>
                </Card>

                <Card className="p-4 text-left text-left text-left text-left text-left text-left text-left text-left" style={{ borderTop: `2px solid ${BRAND.green}` }}>
                  <GraduationCap size={24} style={{ color: BRAND.green }} className="mb-2 text-left text-left text-left text-left text-left text-left text-left" />
                  <h3 className="text-[10px] font-bold mb-1 uppercase tracking-wide text-left text-slate-800 text-left text-left text-left text-left text-left text-left text-left">Academic Mix</h3>
                  <p className="text-[10px] font-normal leading-snug text-slate-500 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                    Top-tier university representation was 53.8% of hires, with 21.3% holding an advanced degree.
                  </p>
                </Card>

                <Card className="p-4 text-left text-left text-left text-left text-left text-left text-left text-left text-left" style={{ borderTop: `2px solid ${BRAND.orange}` }}>
                  <div className="flex flex-col mb-2 text-left text-left text-left text-left text-left text-left text-left text-left">
                    <div className="flex items-center gap-2 text-left text-left text-left text-left text-left text-left text-left">
                      <Zap size={24} style={{ color: BRAND.orange }} className="text-left text-left text-left text-left text-left text-left" />
                      <h3 className="text-[10px] font-bold uppercase tracking-wide text-left text-slate-800 text-left text-left text-left text-left text-left text-left text-left">Rising Gen Z Representation</h3>
                    </div>
                    <span className="text-[8px] font-bold text-slate-400 mt-1 uppercase tracking-wider text-left text-left text-left text-left text-left text-left text-left">1997–2012</span>
                  </div>
                  <p className="text-[10px] font-normal leading-snug text-slate-500 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                    Gen Z rose to 28% of hires, signaling a younger intake mix and more digital-native talent entering the organization.
                  </p>
                </Card>
             </div>
        </div>

        {/* Section 01 - Talent Sourcing */}
        <section className="mb-16 break-inside-avoid text-left text-left text-left text-left text-left">
          <SectionHeader num="01" title="Talent Sourcing Overview" icon={LayoutDashboard} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch text-left text-left text-left text-left text-left text-left">
            <div className="lg:col-span-8 text-left text-left text-left text-left text-left text-left">
              <Card className="p-5 text-left text-left text-left text-left text-left text-left">
                <div className="flex justify-between items-center mb-1 text-left text-left text-left text-left text-left text-left text-left">
                  <div className="text-left text-left text-left text-left text-left text-left text-left">
                    <CardTitle icon={Magnet}>Sourcing Breakdown</CardTitle>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.1em] ml-7 text-left block text-left text-left text-left text-left text-left text-left">Share of hires (%)</span>
                  </div>
                  <div className="flex gap-3 text-left text-left text-left text-left text-left text-left">
                    <div className="flex items-center gap-1.5 text-left text-left text-left text-left text-left text-left text-left"><div className="w-1.5 h-1.5 rounded-full text-left text-left text-left text-left text-left text-left text-left" style={{ backgroundColor: BRAND.blue }}></div><span className="text-[9px] font-bold text-slate-500 uppercase text-left text-left text-left text-left text-left text-left text-left">2025</span></div>
                    <div className="flex items-center gap-1.5 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left"><div className="w-1.5 h-1.5 rounded-full text-left text-left text-left text-left text-left text-left text-left text-left text-left" style={{ backgroundColor: BRAND.comparisonGrey }}></div><span className="text-[9px] font-bold text-slate-500 uppercase text-left text-left text-left text-left text-left text-left text-left text-left text-left">2024</span></div>
                  </div>
                </div>
                
                <p className="text-[10px] text-slate-500 font-medium italic mt-2 mb-4 ml-7 leading-snug text-left text-left text-left text-left text-left text-left text-left">
                  A larger share of hires came from applications and referrals, enabling more targeted sourcing for niche roles.
                </p>

                <div className="h-[240px] w-full text-left mt-2 text-left text-left text-left text-left text-left text-left text-left">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sourcingData} margin={{ top: 20, bottom: 0 }} barGap={10}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: BRAND.dark, fontWeight: 600, fontSize: 9}} />
                      <YAxis hide domain={[0, 100]} />
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
            
            <div className="lg:col-span-4 text-left text-left text-left text-left text-left text-left text-left text-left text-left">
              <div className="h-full flex flex-col justify-center text-left text-left text-left text-left text-left text-left text-left text-left">
                <InsightBox title="Employee Advocacy" icon={HeartHandshake}>
                  Employee referrals remained a core hiring channel, reflecting sustained employee advocacy and engagement.
                </InsightBox>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02 - Allocation */}
        <section className="mb-16 break-inside-avoid text-left text-left text-left text-left text-left">
          <SectionHeader num="02" title="Allocation" icon={Target} />
          <div className="max-w-xl text-left text-left text-left text-left text-left text-left">
            <Card className="p-5 text-left text-left text-left text-left text-left text-left text-left">
              <div className="flex justify-between items-center mb-3 px-1 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                <div className="text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                  <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-800 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">Allocation (R&D vs Non-R&D)</h3>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.1em] ml-0 text-left block text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">Share of hires (%)</span>
                </div>
                <div className="flex gap-3 text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                  <div className="flex items-center gap-1 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left"><div className="w-1.5 h-1.5 rounded-full text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left" style={{ backgroundColor: BRAND.blue }}></div><span className="text-[9px] font-bold text-slate-500 uppercase text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">2025</span></div>
                  <div className="flex items-center gap-1 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left"><div className="w-1.5 h-1.5 rounded-full text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left" style={{ backgroundColor: BRAND.comparisonGrey }}></div><span className="text-[9px] font-bold text-slate-500 uppercase text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">2024</span></div>
                </div>
              </div>
              <div className="h-[160px] w-full text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={allocationData} margin={{ top: 20, bottom: 0 }} barGap={8}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" tick={{fill: BRAND.dark, fontSize: 10, fontWeight: 600}} axisLine={false} tickLine={false} />
                    <YAxis hide domain={[0, 100]} />
                    <Bar dataKey="2025" fill={BRAND.blue} barSize={28} radius={[2, 2, 0, 0]}><LabelList content={<CustomLabel />} /></Bar>
                    <Bar dataKey="2024" fill={BRAND.comparisonGrey} barSize={28} radius={[2, 2, 0, 0]}><LabelList content={<CustomLabel />} /></Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-50 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                <p className="text-[10px] text-slate-500 font-medium text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                  Note: The RAT organization accounted for 42.0% of total hires in 2025.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Section 03 - Talent Profile */}
        <section className="mb-16 page-break-before text-left text-left text-left text-left text-left text-left text-left">
          <SectionHeader num="03" title="Talent Profile" icon={Award} />
          
          {/* Demographics Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 break-inside-avoid text-left text-left text-left text-left text-left text-left text-left text-left text-left">
            <Card className="p-4 flex flex-row items-center border-l-4 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left" style={{ borderColor: BRAND.blue }}>
              <div className="flex items-center gap-4 w-full text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                <div className="p-2.5 bg-blue-50 rounded-lg text-blue-700 shrink-0 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left"><User size={20} /></div>
                <div className="flex flex-col text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-0.5 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">Average Age</span>
                  <div className="flex items-baseline gap-2 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                    <span className="text-lg font-black text-slate-800 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">35.2</span>
                    <span className="text-[10px] text-slate-500 font-medium italic text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                      (Vs. 37.1 in 2024 · <span className="text-blue-700 font-bold text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">−1.9 years</span>)
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4 border-l-4 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left" style={{ borderColor: BRAND.orange }}>
              <div className="flex items-center gap-4 w-full text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                <div className="p-2.5 bg-orange-50 rounded-lg text-orange-700 shrink-0 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left"><Users size={20} /></div>
                <div className="flex-1 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                  <div className="mb-1.5 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-800 block text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">GENDER DISTRIBUTION</span>
                    <span className="text-[8px] font-bold text-slate-400 uppercase italic text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">(similar to 2024)</span>
                  </div>
                  <div className="flex items-center gap-6 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                    <span className="text-xs font-bold text-slate-800 shrink-0 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">80.0% Men / 20.0% Women</span>
                    <div className="flex-1 flex flex-col gap-1 pr-2 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                      <div className="h-2 w-full bg-slate-100 rounded-full flex overflow-hidden text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                         <div className="h-full bg-blue-700 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left" style={{ width: '80.0%' }}></div>
                         <div className="h-full bg-orange-500 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left" style={{ width: '20.0%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="break-inside-avoid mb-8 text-left text-left text-left text-left">
            <Card className="p-5 text-left text-left text-left text-left text-left">
              <div className="flex justify-between items-center mb-1 text-left text-left text-left text-left text-left text-left">
                <div className="text-left text-left text-left text-left text-left text-left text-left">
                  <CardTitle icon={History}>Generational Profile</CardTitle>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.1em] ml-7 text-left block text-left text-left text-left text-left text-left text-left text-left text-left">Share of hires (%)</span>
                </div>
                <div className="flex gap-3 text-left text-left text-left text-left text-left text-left">
                  <div className="flex items-center gap-1 text-left text-left text-left text-left text-left text-left text-left text-left"><div className="w-1.5 h-1.5 rounded-full text-left text-left text-left text-left text-left text-left text-left text-left text-left" style={{ backgroundColor: BRAND.blue }}></div><span className="text-[9px] font-bold text-slate-500 uppercase text-left text-left text-left text-left text-left text-left text-left text-left">2025</span></div>
                  <div className="flex items-center gap-1 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left"><div className="w-1.5 h-1.5 rounded-full text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left" style={{ backgroundColor: BRAND.comparisonGrey }}></div><span className="text-[9px] font-bold text-slate-500 uppercase text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">2024</span></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-1 mt-6 text-left text-left text-left text-left">
                <div className="h-[200px] w-full text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={genData} layout="vertical" margin={{ left: 10, right: 40 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                      <XAxis type="number" hide domain={[0, 70]} />
                      <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: BRAND.dark, fontWeight: 700, fontSize: 9}} />
                      <Bar dataKey="2025" fill={BRAND.blue} radius={[0, 2, 2, 0]} barSize={22}>
                        <LabelList position="right" formatter={(v) => `${v.toFixed(1)}%`} style={{fontSize: 9, fontWeight: 700, fill: BRAND.dark}} />
                      </Bar>
                      <Bar dataKey="2024" fill={BRAND.comparisonGrey} radius={[0, 2, 2, 0]} barSize={22}>
                        <LabelList position="right" formatter={(v) => `${v.toFixed(1)}%`} style={{fontSize: 9, fontWeight: 700, fill: BRAND.comparisonGrey}} />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="flex flex-col justify-center text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                  <div className="mb-4 text-[11px] font-semibold text-slate-600 border-l-2 border-slate-200 pl-3 italic text-left text-left text-left text-left text-left text-left text-left text-left">
                    2025 shows a slightly more balanced generational mix, with Gen X declining while Millennials remain the largest hiring cohort.
                  </div>
                  <div className="space-y-4 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                    {[
                      { 
                        icon: Smartphone, 
                        label: 'GEN Z', 
                        val: '1997–2012', 
                        text: 'Digital-native, early-career intake strengthening the junior pipeline.' 
                      },
                      { 
                        icon: Users, 
                        label: 'MILLENNIALS', 
                        val: '1981–1996', 
                        text: 'Core delivery engine and emerging leadership bench across teams.' 
                      },
                      { 
                        icon: Briefcase, 
                        label: 'GEN X', 
                        val: '1965–1980', 
                        text: 'Senior domain depth supporting continuity, mentoring, and critical know-how.' 
                      }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-start text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                        <div className="p-2.5 rounded-lg bg-slate-100 text-blue-900 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left"><item.icon size={16} /></div>
                        <div className="text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                          <span className="block text-[9px] font-bold uppercase tracking-widest mb-0.5 text-slate-400 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">{item.label} ({item.val})</span>
                          <p className="text-[10px] font-normal leading-tight text-slate-500 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8 text-left text-left text-left text-left">
            <div className="lg:col-span-8 text-left text-left text-left text-left text-left text-left text-left text-left">
              <Card className="p-5 text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                <div className="text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                   <CardTitle icon={GraduationCap}>Academic Background</CardTitle>
                   <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.1em] ml-7 text-left block text-left text-left text-left text-left text-left text-left text-left text-left text-left">Share of hires (%)</span>
                </div>
                <div className="h-[240px] text-left mt-2 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                  <ResponsiveContainer>
                    <BarChart data={eduData} margin={{ top: 20, right: 20, left: 0, bottom: 10 }}>
                      <XAxis dataKey="name" tick={{fontSize: 7.5, fontWeight: 700, fill: BRAND.dark}} axisLine={{ stroke: '#f1f5f9' }} tickLine={false} />
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
                <div className="mt-4 pt-3 border-t border-slate-50 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                   <p className="text-[9px] text-slate-400 italic text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                    *Top-tier includes: Tel Aviv University, Technion, Ben-Gurion University, The Hebrew University of Jerusalem, Bar-Ilan University, and the University of Haifa.
                  </p>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-4 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
              <Card className="bg-slate-50 border-none shadow-inner p-6 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                <CardTitle icon={Star} color={BRAND.orange} className="text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">Top Institutions (2025)</CardTitle>
                <div className="space-y-6 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                  {top3_2025.map((u, i) => (
                    <div key={i} className="text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                      <div className="flex justify-between items-center mb-1 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                        <span className="text-slate-700 text-[10px] font-bold text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">{i+1}. {u.name}</span>
                        <span style={{ color: BRAND.blue }} className="text-xs font-black text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">{u.value.toFixed(1)}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white rounded-full overflow-hidden border border-slate-200 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                        <div className="h-full bg-blue-700 rounded-full text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left" style={{ width: `${(u.value / 15) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          <div className="break-inside-avoid text-left text-left text-left text-left text-left text-left">
            <Card className="p-5 text-left text-left text-left text-left text-left text-left text-left text-left text-left">
              <div className="text-left mb-1 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                <CardTitle icon={TrendingUp}>Experience Levels (2025)</CardTitle>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.1em] ml-7 text-left block text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">Share of hires (%)</span>
              </div>
              <div className="space-y-4 px-1 text-left mt-4 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                {seniorityStats.map((item, idx) => (
                  <div key={idx} className="space-y-2 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                    <div className="flex justify-between text-[9px] font-bold uppercase text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                      <div className="flex items-baseline">
                         <span className="text-slate-800 font-black">{item.title}</span>
                         <span className="text-slate-400 font-medium ml-1.5">({item.range})</span>
                      </div>
                      <span className="text-slate-800 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">{item.value.toFixed(1)}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                      <div className="h-full rounded-full text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left" style={{ width: `${item.value}%`, backgroundColor: item.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Section 04 - Site Metrics Comparison */}
        <section className="mb-16 page-break-before text-left text-left text-left text-left text-left text-left text-left text-left text-left">
          <SectionHeader num="04" title="Site Metrics Comparison" icon={MapPin} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 break-inside-avoid text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
            {[
              { title: 'Kfar Saba', icon: MapPin, color: BRAND.blue, data: [66.3, 77.3, 58.5, 67.2, 56.6, 51.8] },
              { title: 'North Hub', icon: MapPin, color: BRAND.green, data: [33.7, 22.7, 51.9, 29.4, 48.1, 23.5] }
            ].map((site, sIdx) => (
              <Card key={sIdx} className="p-5 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left" style={{ borderTop: `3px solid ${site.color}` }}>
                <h4 className="text-sm font-bold mb-4 uppercase flex justify-between items-center text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left" style={{ color: site.color }}>
                  {site.title} <site.icon size={16} className="text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left"/>
                </h4>
                <table className="w-full text-[11px] font-semibold text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                  <thead className="text-[9px] uppercase border-b border-slate-100 text-slate-400 tracking-widest text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                    <tr><th className="pb-2 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">Metric</th><th className="pb-2 text-right text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">2025</th><th className="pb-2 text-right text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">2024</th></tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                    {[
                      { l: "Hire Allocation", val: 0, suffix: "%" },
                      { l: "Senior & Expert (6+ Yrs)", val: 2, suffix: "%" },
                      { l: "Top-tier University Graduates", val: 4, suffix: "%" }
                    ].map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50 transition-colors text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                        <td className="py-2.5 text-slate-500 font-medium text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">{row.l}</td>
                        <td className="text-right font-bold text-xs text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left" style={{ color: site.color }}>{site.data[row.val].toFixed(1)}{row.suffix}</td>
                        <td className="text-right font-normal text-slate-700 text-xs text-right text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">{site.data[row.val + 1].toFixed(1)}{row.suffix}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            ))}
          </div>

          <InsightBox title="NORTH HUB MATURATION" icon={TrendingUp}>
            <p className="text-slate-600 font-normal leading-relaxed text-xs text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
              The North site continues to trend toward higher professional seniority, supporting a more senior engineering base.
            </p>
          </InsightBox>
        </section>

        {/* Next Focus Areas (2026) */}
        <div className="mb-16 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
          <Card className="p-6 relative overflow-hidden text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left" style={{ borderTop: `3px solid ${BRAND.blue}` }}>
            <div className="relative z-10 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
              <CardTitle icon={Target} color={BRAND.blue}>Next Focus Areas (2026)</CardTitle>
              <div className="space-y-4 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                {[
                  { label: "QUALITY ANALYSIS", text: "Assessing recruitment quality through performance outcomes of recent cohorts." },
                  { label: "CHANNEL IMPACT", text: "Analyzing the relationship between sourcing channels and early success indicators (e.g., performance/retention)." },
                  { label: "REFERRAL PROGRAM", text: "Continuing to strengthen referral program awareness to sustain internal advocacy." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                    <div className="mt-1.5 w-1 h-1 rounded-full shrink-0 bg-blue-600 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left" />
                    <p className="text-[12px] font-normal text-slate-600 text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">
                      <span className="font-bold uppercase text-[9px] mr-2 text-slate-800 tracking-wider text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left">{item.label}:</span>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

  
      </div>
    </div>
  );
};

export default App;
