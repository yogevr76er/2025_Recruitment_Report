הקוד משלב react 


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

/**
 * RECRUITMENT DATA SUMMARY 2025 - ISRAEL EXECUTIVE VERSION
 * Final Verified & Robust Print Implementation
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
  slate400: '#94a3b8',
  slate500: '#64748b',
  slate700: '#334155'
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

const generationalComparison = [
  { name: 'Gen Z', '2025': 28.0, '2024': 21.3 },
  { name: 'Millennials', '2025': 48.8, '2024': 50.7 },
  { name: 'Gen X', '2025': 23.7, '2024': 28.0 },
];

const ageStats = {
  global2025: 36.4,
  global2024: 37.1
};

const genderStats = {
  male2025: 80,
  female2025: 20
};

const seniorityStats = [
  { label: 'Leadership & Strategic Experts (10-20 Years)', value: 20.0, color: COLORS.navy },
  { label: 'Established Senior Professionals (5-10 Years)', value: 30.0, color: COLORS.emerald },
  { label: 'Experienced Professionals (2-5 Years)', value: 28.7, color: COLORS.blue },
  { label: 'Junior & Entry-Level (0-2 Years)', value: 21.3, color: COLORS.orange },
];

// --- UI SUB-COMPONENTS ---

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
  const handlePrint = () => {
    window.print();
  };

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

      <div className="max-w-[1400px] mx-auto">
        
        {/* HEADER */}
        <header className="mb-10 flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="text-left">
            <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest mb-1 text-left">
              <ShieldCheck size={16} />
              <span>Executive Recruitment Summary</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mb-2 tracking-tight leading-tight text-left">
              Annual Recruitment Analytics 2025
            </h1>
          </div>
          
          <div className="print-hidden flex flex-col items-end gap-2 text-right">
            <button 
              onClick={handlePrint}
              className="bg-blue-900 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-blue-950 transition-all shadow-xl active:scale-95"
            >
              <Printer size={20} />
              Save as PDF
            </button>
            <span className="text-[10px] text-slate-400 font-bold uppercase italic">If button fails, use Ctrl + P</span>
          </div>
        </header>

        {/* STRATEGIC INSIGHTS 2025 */}
        <div className="mb-16">
          <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-3 text-left">
            <div className="h-[1px] w-8 bg-slate-200"></div>
            Strategic Highlights
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 text-left">
            <Card className="border-t-4 border-blue-900 bg-slate-50/50">
              <Magnet size={36} className="text-[#1e3a8a] mb-6" />
              <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase leading-tight">Brand Maturity: 55%</h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Elevated brand awareness now drives 55% direct hiring attraction. Maturity enables organic talent pull, decreasing dependency on external agency channels.
              </p>
            </Card>

            <Card className="border-t-4 border-navy-600 bg-slate-50/50">
              <HeartHandshake size={36} className="text-navy-600 mb-6" />
              <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase leading-tight text-left">Internal Advocacy: 34%</h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed text-left">
                Employee referrals remain a primary driver. This internal advocacy complements our brand pull, proving our workforce acts as a lead ambassador network.
              </p>
            </Card>

            <Card className="border-t-4 border-orange-500 bg-slate-50/50">
              <Zap size={36} className="text-orange-500 mb-6" />
              <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase leading-tight text-left">Gen Z Rise: 28%</h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed text-left">
                Notable growth in Gen Z hires (28%) injects innate technological fluency into the organization, securing future-ready adaptability.
              </p>
            </Card>

            <Card className="border-t-4 border-emerald-600 bg-slate-50/50">
              <GraduationCap size={36} className="text-emerald-600 mb-6" />
              <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase leading-tight text-left">Academic Focus: 54%</h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed text-left">
                The rise in Tier-1 university graduates is the direct result of our prioritized focus on high-potential junior talent from leading institutions.
              </p>
            </Card>

            <Card className="border-t-4 border-purple-500 bg-slate-50/50">
              <Award size={36} className="text-purple-500 mb-6" />
              <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase leading-tight text-left">Adv. Degrees: 25%</h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed text-left text-left text-left">
                Maintaining a strong technical foundation, 1 in every 4 hires now holds an MSc or PhD degree, strengthening our specialized expertise.
              </p>
            </Card>
          </div>
        </div>

        {/* SECTION 01: SOURCING & ALLOCATION */}
        <section className="mb-24 text-left">
          <SectionHeader num="01" title="Sourcing Strategy & Unit Allocation" icon={LayoutDashboard} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
            <Card className="flex-row items-center gap-5 py-6">
              <div className="bg-[#1e3a8a] p-3 rounded-xl text-white shadow-sm"><Users size={24} /></div>
              <div className="text-left text-left">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Total Organization Hires 2025</span>
                <span className="text-4xl font-black text-[#1e3a8a]">80</span>
              </div>
            </Card>
            <Card className="flex-row items-center gap-5 py-6 opacity-60 grayscale border-dashed text-left">
              <div className="bg-slate-200 p-3 rounded-xl text-slate-400"><Users size={24} /></div>
              <div className="text-left text-left">
                <span className="text-[10px] font-bold uppercase tracking-widest block mb-1 text-slate-500">Previous Year Total (2024)</span>
                <span className="text-4xl font-black block text-slate-500">75</span>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 text-left">
            <Card>
              <h3 className="text-lg font-bold mb-8 flex items-center gap-2 text-slate-800 uppercase text-left"><Magnet size={20} className="text-blue-900"/> Sourcing Channel Analysis</h3>
              <div className="h-[400px] w-full text-left">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sourcingData} margin={{ top: 40, bottom: 20 }} barGap={15}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontWeight: 600, fontSize: 11}} />
                    <YAxis hide domain={[0, 100]} />
                    <Tooltip cursor={{fill: '#f8fafc'}} />
                    <Legend verticalAlign="top" align="right" wrapperStyle={{paddingBottom: '20px'}} />
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
              <h3 className="text-lg font-bold mb-8 flex items-center gap-2 text-slate-800 uppercase text-left"><Building2 size={20} className="text-emerald-600"/> Organization Allocation</h3>
              <div className="h-[400px] w-full text-left">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={destinationData} margin={{ top: 40, bottom: 20 }} barGap={15}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontWeight: 600, fontSize: 11}} />
                    <YAxis hide domain={[0, 100]} />
                    <Tooltip cursor={{fill: '#f8fafc'}} />
                    <Legend verticalAlign="top" align="right" wrapperStyle={{paddingBottom: '20px'}} />
                    <Bar name="2025" dataKey="2025" fill={COLORS.emerald} radius={[6, 6, 0, 0]} barSize={32}>
                      <LabelList content={<CustomLabel />} />
                    </Bar>
                    <Bar name="2024" dataKey="2024" fill="#cbd5e1" radius={[6, 6, 0, 0]} barSize={32}>
                      <LabelList content={<CustomLabel />} />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="border-t border-slate-100 pt-6 mt-4 text-left">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">R&D Unit Distribution (2025)</h4>
                <div className="grid grid-cols-1 gap-3">
                  {rdUnitData.map(unit => (
                    <div key={unit.name} className="bg-slate-50 p-3 rounded-xl flex items-center justify-between border border-slate-100 text-left">
                      <div className="flex items-center gap-3 text-left">
                        <div className="w-2 h-8 rounded-full" style={{backgroundColor: unit.color}}></div>
                        <div className="text-left">
                          <p className="text-xs font-bold text-slate-800 uppercase">{unit.name}</p>
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Detailed Split</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex flex-col text-right">
                          <span className="text-xs font-black text-slate-800 uppercase">{unit.ofRD.toFixed(1)}% <span className="text-[8px] font-bold text-slate-400">OF R&D</span></span>
                          <span className="text-[10px] font-bold text-slate-500 uppercase">{unit.ofTotal.toFixed(1)}% <span className="text-[8px] font-bold text-slate-400">OF TOTAL</span></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* SECTION 02: WORKFORCE COMPOSITION */}
        <section className="mb-24 text-left text-left">
          <SectionHeader num="02" title="Workforce Composition & Expertise" icon={GraduationCap} />
          
          <Card className="mb-12 items-start text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start w-full">
              
              <div className="space-y-8 text-left">
                <div className="flex items-center gap-3 text-left text-left">
                  <div className="bg-blue-900 text-white p-2 rounded-xl text-left"><Users size={20} /></div>
                  <h3 className="text-lg font-bold text-slate-800 uppercase tracking-tight text-left">Gender Balance (2025)</h3>
                </div>

                <div className="space-y-6 pt-2 text-left">
                  <div className="flex justify-between items-end mb-2 text-left">
                    <div className="flex items-center gap-2 text-left">
                      <User size={18} className="text-blue-900" />
                      <span className="text-sm font-bold text-slate-700 uppercase">Males</span>
                    </div>
                    <span className="text-3xl font-black text-blue-900 text-right">{genderStats.male2025}%</span>
                  </div>

                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex text-left">
                    <div className="h-full bg-blue-900 transition-all duration-1000" style={{ width: `${genderStats.male2025}%` }}></div>
                    <div className="h-full bg-orange-500 transition-all duration-1000" style={{ width: `${genderStats.female2025}%` }}></div>
                  </div>

                  <div className="flex justify-between items-center mt-2 text-left">
                    <div className="flex items-center gap-2 text-left">
                      <UserCheck size={18} className="text-orange-500" />
                      <span className="text-sm font-bold text-slate-700 uppercase text-left">Females</span>
                    </div>
                    <span className="text-3xl font-black text-orange-500 text-right">{genderStats.female2025}%</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-400 italic pt-4 border-t border-slate-50 text-left">
                  <CheckCircle size={14} className="text-emerald-500" />
                  <span className="text-xs font-semibold text-left">Stability Note: Gender ratio remains consistent with previous performance.</span>
                </div>
              </div>

              <div className="space-y-8 text-left">
                <div className="flex items-center gap-3 text-left">
                  <div className="bg-orange-600 text-white p-2 rounded-xl text-left"><TrendingUp size={20} /></div>
                  <h3 className="text-lg font-bold text-slate-800 uppercase tracking-tight text-left">Workforce Maturity</h3>
                </div>

                <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 relative overflow-hidden text-left">
                  <div className="relative z-10 text-left">
                    <span className="text-[11px] font-black text-slate-400 uppercase block mb-2 tracking-widest text-left">Organization Average Age</span>
                    <div className="flex items-baseline gap-3 text-left text-left text-left">
                      <span className="text-6xl font-black text-blue-900 leading-none text-left">{ageStats.global2025}</span>
                      <span className="text-sm font-bold text-slate-400 text-left">YEARS</span>
                    </div>
                  </div>
                  
                  <div className="mt-10 flex items-center justify-between border-t border-slate-200/50 pt-6 text-left">
                    <div className="text-left text-left">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Previous Year (2024 Baseline)</span>
                      <span className="text-xl font-bold text-slate-400 italic text-left">{ageStats.global2024}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Card>

          {/* Academic Background */}
          <Card className="mb-12 text-left">
            <div className="flex flex-col lg:flex-row gap-12 text-left">
              <div className="flex-1 w-full text-left">
                <h3 className="text-lg font-bold mb-8 flex items-center gap-2 text-slate-800 uppercase text-left"><GraduationCap size={20} className="text-emerald-700"/> Academic Origin Analysis</h3>
                <div className="h-[350px] w-full text-left text-left">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={eduData} margin={{ top: 40, bottom: 20 }} barGap={15}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontWeight: 600, fontSize: 10}} />
                      <YAxis hide domain={[0, 100]} />
                      <Tooltip cursor={{fill: '#f8fafc'}} />
                      <Legend verticalAlign="top" align="right" wrapperStyle={{paddingBottom: '20px'}} />
                      <Bar name="2025" dataKey="2025" fill={COLORS.emerald} radius={[6, 6, 0, 0]} barSize={28}>
                        <LabelList content={<CustomLabel />} />
                      </Bar>
                      <Bar name="2024" dataKey="2024" fill="#cbd5e1" radius={[6, 6, 0, 0]} barSize={28}>
                        <LabelList content={<CustomLabel />} />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-100 text-left text-left text-left">
                  <p className="text-[11px] text-slate-500 font-bold leading-relaxed flex items-start gap-2 text-left">
                      <span className="text-blue-900 text-lg mt-[-4px]">*</span>
                      <span className="text-left">The <strong>"NON-DEGREE / EXP"</strong> category represents hires without formal academic degrees who bring significant practical experience, or hold specialized industry certificates.</span>
                  </p>
                </div>
              </div>
              
              <div className="w-full lg:w-96 flex flex-col gap-6 text-left">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-left">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Star size={14} className="text-orange-500" /> Top Institutions (2025)
                  </h4>
                  <ul className="space-y-6 text-left">
                    {top3_2025.map((uni, i) => (
                      <li key={i} className="flex gap-4 items-center text-left text-left">
                        <span className="text-blue-900 font-black text-xl w-6 text-left">{i+1}.</span>
                        <div className="text-left">
                          <p className="text-base font-black text-slate-800 uppercase leading-none mb-1 text-left">{uni.name}</p>
                          <span className="text-blue-900 font-black text-xs uppercase tracking-wider text-left block">
                            {uni.value.toFixed(1)}% OF ANNUAL INTAKE
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Seniority Profile */}
          <Card className="mb-16 text-left">
            <div className="flex flex-col lg:flex-row gap-12 text-left">
              <div className="flex-1 w-full text-left">
                <h3 className="text-lg font-bold mb-8 flex items-center gap-2 text-slate-800 uppercase text-left"><History size={20} className="text-blue-900"/> Professional Seniority (2025)</h3>
                <div className="space-y-8 py-4 text-left">
                  {seniorityStats.map((item, idx) => (
                    <div key={idx} className="space-y-2 text-left text-left">
                      <div className="flex justify-between items-end text-left text-left">
                        <span className="text-xs font-bold text-slate-700 uppercase tracking-wide text-left">{item.label}</span>
                        <span className="text-sm font-black text-slate-900 text-right">{item.value.toFixed(1)}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden text-left">
                        <div 
                          className="h-full rounded-full transition-all duration-1000 ease-out" 
                          style={{ width: `${item.value}%`, backgroundColor: item.color, boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-1/2 bg-slate-50 p-8 rounded-[2rem] border border-slate-100 text-left flex flex-col justify-center text-left">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Lightbulb size={16} className="text-emerald-600" /> Strategic Experience Analysis
                </h4>
                <div className="space-y-8 text-left text-left">
                  <div className="flex gap-4 text-left">
                    <div className="mt-1 shrink-0"><CheckCircle size={14} className="text-emerald-500" /></div>
                    <div className="text-left text-left">
                      <p className="text-sm font-black text-slate-800 uppercase mb-1">Seniority Density: 2.3 to 1</p>
                      <p className="text-[11px] text-slate-600 font-medium leading-relaxed italic text-left">
                        For every Junior hired, we recruited 2.3 Senior professionals (5+ years exp.), ensuring a strong mentorship structure and technical stability.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-left">
                    <div className="mt-1 shrink-0"><CheckCircle size={14} className="text-emerald-500" /></div>
                    <div className="text-left text-left">
                      <p className="text-sm font-black text-slate-800 uppercase mb-1">Talent Succession</p>
                      <p className="text-[11px] text-slate-600 font-medium leading-relaxed italic text-left text-left">
                        The 21.3% early-career entry rate supports long-term knowledge transfer and sustainable organic growth across the organization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* SECTION 03: HUB PERFORMANCE COMPARISON */}
        <section className="mb-24 text-left text-left">
          <SectionHeader num="03" title="Hub Performance Comparison" icon={MapPin} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch text-left">
            {/* Kfar Saba */}
            <Card className="border-t-4 border-[#1e3a8a] text-left">
              <div className="flex justify-between items-start mb-6 text-left">
                <h4 className="text-2xl font-black text-[#1e3a8a]">KFAR SABA</h4>
                <div className="bg-[#1e3a8a]/10 p-2 rounded-lg text-[#1e3a8a] text-left"><Building2 size={20}/></div>
              </div>
              <div className="overflow-x-auto text-left">
                <table className="w-full text-sm text-left font-medium">
                  <thead>
                    <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-left">
                      <th className="pb-3 text-left">Key Metric</th>
                      <th className="pb-3 text-right">2025 Perf.</th>
                      <th className="pb-3 text-right opacity-50">2024 Base</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 font-medium text-left">
                    <tr>
                      <td className="py-4 text-slate-600 uppercase text-xs">Hires (Allocation)</td>
                      <td className="py-4 text-right font-black text-blue-900">66.3%</td>
                      <td className="py-4 text-right opacity-50 font-bold text-right">68.0%</td>
                    </tr>
                    <tr>
                      <td className="py-4 text-slate-600 uppercase text-xs">Average Age</td>
                      <td className="py-4 text-right font-black text-blue-900 text-right">36.7</td>
                      <td className="py-4 text-right opacity-50 font-bold text-right">37.2</td>
                    </tr>
                    <tr>
                      <td className="py-4 text-slate-600 uppercase text-xs text-left">Mid-Level+ (%)</td>
                      <td className="py-4 text-right font-black text-blue-900 text-right">67.9%</td>
                      <td className="py-4 text-right opacity-50 font-bold text-right">65.0%</td>
                    </tr>
                    <tr>
                      <td className="py-4 text-slate-600 uppercase text-xs text-left">Top-Tier Grad (%)</td>
                      <td className="py-4 text-right font-black text-blue-900 text-right">56.6%</td>
                      <td className="py-4 text-right opacity-50 font-bold text-right">52.0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* North Hub */}
            <Card className="border-t-4 border-emerald-600 text-left text-left">
              <div className="flex justify-between items-start mb-6 text-left">
                <h4 className="text-2xl font-black text-emerald-700 uppercase text-left">North Hub</h4>
                <div className="bg-emerald-50 p-2 rounded-lg text-emerald-700 text-left"><MapPin size={20}/></div>
              </div>
              <div className="overflow-x-auto text-left">
                <table className="w-full text-sm text-left font-medium">
                  <thead>
                    <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-left">
                      <th className="pb-3 text-left">Key Metric</th>
                      <th className="pb-3 text-right">2025 Perf.</th>
                      <th className="pb-3 text-right opacity-50 text-right">2024 Base</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 font-medium text-left">
                    <tr>
                      <td className="py-4 text-slate-600 uppercase text-xs text-left">Hires (Allocation)</td>
                      <td className="py-4 text-right font-black text-emerald-700 text-right">33.7%</td>
                      <td className="py-4 text-right opacity-50 font-bold text-right">32.0%</td>
                    </tr>
                    <tr>
                      <td className="py-4 text-slate-600 uppercase text-xs text-left">Average Age</td>
                      <td className="py-4 text-right font-black text-emerald-700 text-right">35.9</td>
                      <td className="py-4 text-right opacity-50 font-bold text-right">36.5</td>
                    </tr>
                    <tr>
                      <td className="py-4 text-slate-600 uppercase text-xs text-left">Mid-Level+ (%)</td>
                      <td className="py-4 text-right font-black text-emerald-700 text-right">66.7%</td>
                      <td className="py-4 text-right opacity-50 font-bold text-right">64.0%</td>
                    </tr>
                    <tr>
                      <td className="py-4 text-slate-600 uppercase text-xs text-left">Top-Tier Grad (%)</td>
                      <td className="py-4 text-right font-black text-emerald-700 text-right">48.1%</td>
                      <td className="py-4 text-right opacity-50 font-bold text-right">44.0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-100 pt-8 pb-10 flex justify-between items-center text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] text-left">
          <span>Executive Summary 2025 • Recruitment Intelligence Unit</span>
          <span>© Talent Analytics Suite</span>
        </footer>
      </div>
    </div>
  );
};

export default App;
