import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer,
  LabelList, Tooltip
} from 'recharts';
import {
  Users, Award, Zap, GraduationCap, LayoutDashboard,
  Clock, MapPin, ShieldCheck, Info, Magnet, Building2, Star, Printer, FileText, HelpCircle, 
  User, UserCheck, TrendingUp, Briefcase, Lightbulb, History, CheckCircle
} from 'lucide-react';

/**
 * RECRUITMENT DATA SUMMARY 2025 - AUDITED EXECUTIVE VERSION
 * - Refined Seniority Section: Minimalist horizontal bars with strategic insights.
 * - Phrasing: Focused on "Professional Seniority & Experience".
 * - Strategic Insights: Clear English takeaways for executive review.
 */

const COLORS = {
  navy: '#1e3a8a',
  emerald: '#0d9488',
  orange: '#f97316',
  purple: '#a855f7',
  blue: '#3b82f6',
  slate100: '#f1f5f9',
  slate200: '#e2e8f0',
  slate400: '#94a3b8',
  slate500: '#64748b',
  slate700: '#334155'
};

// --- AUDITED DATA SETS ---

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

const top3_2024 = [
  { name: "Technion", value: 16.0 },
  { name: "Tel-Aviv Uni", value: 14.7 },
  { name: "Hebrew Uni", value: 9.3 }
];

const generationalComparison = [
  { name: 'Gen Z', '2025': 27.5, '2024': 21.3 },
  { name: 'Millennials', '2025': 48.8, '2024': 50.7 },
  { name: 'Gen X', '2025': 23.7, '2024': 28.0 },
];

const generationalInsights = [
  { 
    gen: "Gen Z", 
    years: "1997-2012", 
    title: "Digital Natives", 
    impact: "A growing segment (up to 28%) ensuring long-term technical sustainability and bringing fresh perspective on emerging tech stacks.",
    color: COLORS.orange
  },
  { 
    gen: "Millennials", 
    years: "1981-1996", 
    title: "Engineering Backbone", 
    impact: "Remaining the largest cohort (~49%), these professionals balance deep technical expertise with modern management potential.",
    color: COLORS.navy
  },
  { 
    gen: "Gen X", 
    years: "1965-1980", 
    title: "Strategic Depth", 
    impact: "Providing essential leadership and complex architectural experience, critical for senior R&D roles and institutional knowledge.",
    color: COLORS.emerald
  }
];

const ageStats = {
  global2025: 36.4,
  global2024: 37.1,
  rd2025: 36.5,
  nonRd2025: 35.8
};

const genderStats = {
  male2025: 80,
  female2025: 20,
  male2024: 80,
  female2024: 20
};

// Audited Seniority Data 2025
const seniorityStats = [
  { label: 'High-Level Experts (5+ Years)', value: 50.0, color: COLORS.navy },
  { label: 'Mid-Level Professionals (3-5 Years)', value: 12.5, color: COLORS.emerald },
  { label: 'Established Engineers (1-3 Years)', value: 16.3, color: COLORS.blue },
  { label: 'Early-Career Talents (0-1 Year)', value: 21.3, color: COLORS.orange },
];

const seniorityInsights = [
  {
    title: "Senior Technical Stability",
    detail: "Half of our 2025 intake consists of experts with 5+ years of experience, providing immediate architectural impact and mentoring capacity."
  },
  {
    title: "Future Pipeline Investment",
    detail: "A healthy 21.3% entry-level hiring rate ensures a steady flow of 'fresh' academic knowledge and long-term succession planning."
  }
];

// --- UI COMPONENTS ---

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
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-6 md:p-12 lg:p-16 text-left relative">
      
      {/* PRINT STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          .print-hidden { display: none !important; }
          body { background: white !important; padding: 0 !important; }
          .bg-slate-50 { background: white !important; }
          .shadow-sm, .border { box-shadow: none !important; border: 1px solid #eee !important; }
          @page { margin: 1cm; }
        }
      `}} />

      {/* FLOATING ACTION */}
      <button 
        onClick={handlePrint}
        className="print-hidden fixed bottom-8 right-8 bg-navy-700 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-navy-900 transition-all flex items-center gap-3 z-50 group"
      >
        <Printer size={20} />
        <span className="font-bold">Save as PDF</span>
      </button>

      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <header className="mb-10 flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="text-left">
            <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest mb-3 text-left">
              <ShieldCheck size={18} />
              <span>Audited Recruitment Analytics Summary 2025</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#1e3a8a] mb-2 tracking-tight leading-tight">
              Executive Summary
            </h1>
            <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
              A comprehensive overview of our talent acquisition landscape, analyzing recruitment efficiency and the professional evolution of our workforce.
            </p>
          </div>
          
          <button 
            onClick={handlePrint}
            className="print-hidden bg-white border-2 border-navy-700 text-navy-700 px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-navy-50 transition-colors"
          >
            <FileText size={18} />
            Export Report
          </button>
        </header>

        {/* STRATEGIC HIGHLIGHTS */}
        <div className="mb-16">
          <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-3 text-left">
            <div className="h-[1px] w-8 bg-slate-200"></div>
            Strategic Highlights
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-black">
            <Card className="border-t-4 border-navy-700 bg-slate-50/50">
              <Magnet size={36} className="text-[#1e3a8a] mb-6" />
              <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase">Brand Pull: 55%</h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Direct applications reached 55%. This reflects a matured brand presence attracting talent independently.
              </p>
            </Card>

            <Card className="border-t-4 border-orange-500 bg-slate-50/50">
              <Zap size={36} className="text-orange-500 mb-6" />
              <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase text-left text-left">Gen Z Pivot: 28%</h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Hires from our Gen Z cohort rose to 28%, securing a future-ready engineering pipeline for the coming decade.
              </p>
            </Card>

            <Card className="border-t-4 border-emerald-600 bg-slate-50/50">
              <Award size={36} className="text-emerald-600 mb-6" />
              <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase text-left">Elite Entry: 54%</h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Intake from Top-Tier universities reached 54%, maintaining our technical elite foundation through selection.
              </p>
            </Card>

            <Card className="border-t-4 border-purple-500 bg-slate-50/50">
              <GraduationCap size={36} className="text-purple-500 mb-6" />
              <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase text-left">Adv. Degrees: 25%</h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                1 in every 4 hires holds an MSc/PhD, providing a massive competitive advantage for IP and innovation.
              </p>
            </Card>
          </div>
        </div>

        {/* SECTION 01: RECRUITMENT OVERVIEW */}
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
            <Card className="flex items-center gap-5 py-6 opacity-60 grayscale border-dashed text-left">
              <div className="bg-slate-200 p-3 rounded-xl text-slate-400"><Users size={24} /></div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest block mb-1 text-slate-500 text-left">Total Hires 2024</span>
                <span className="text-4xl font-black block text-slate-500 text-left">75</span>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 text-left text-left">
            <Card>
              <h3 className="text-lg font-bold mb-8 flex items-center gap-2 text-slate-800 uppercase text-left text-left"><Magnet size={20} className="text-navy-600"/> Recruitment Sourcing</h3>
              <div className="h-[400px] w-full text-left">
                <ResponsiveContainer>
                  <BarChart data={sourcingData} margin={{ top: 80 }} barGap={25}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#475569', fontWeight: 700, fontSize: 10}} />
                    <YAxis hide domain={[0, 100]} />
                    <Legend verticalAlign="top" align="right" height={36}/>
                    <Bar name="2025" dataKey="2025" fill={COLORS.navy} radius={[4, 4, 0, 0]} barSize={28}>
                      <LabelList content={<CustomLabel />} />
                    </Bar>
                    <Bar name="2024" dataKey="2024" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={28}>
                      <LabelList content={<CustomLabel />} />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-bold mb-8 flex items-center gap-2 text-slate-800 uppercase text-left text-left"><Building2 size={20} className="text-emerald-600"/> Talent Allocation</h3>
              <div className="h-[400px] w-full text-left">
                <ResponsiveContainer>
                  <BarChart data={destinationData} margin={{ top: 80 }} barGap={25}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#475569', fontWeight: 700, fontSize: 10}} />
                    <YAxis hide domain={[0, 100]} />
                    <Legend verticalAlign="top" align="right" height={36}/>
                    <Bar name="2025" dataKey="2025" fill={COLORS.emerald} radius={[4, 4, 0, 0]} barSize={28}>
                      <LabelList content={<CustomLabel />} />
                    </Bar>
                    <Bar name="2024" dataKey="2024" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={28}>
                      <LabelList content={<CustomLabel />} />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="border-t border-slate-100 pt-6 mt-4">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 text-left">R&D Unit Breakdown (2025 Detailed)</h4>
                <div className="grid grid-cols-1 gap-3">
                  {rdUnitData.map(unit => (
                    <div key={unit.name} className="bg-slate-50 p-3 rounded-xl flex items-center justify-between border border-slate-100 text-left">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-8 rounded-full" style={{backgroundColor: unit.color}}></div>
                        <div>
                          <p className="text-xs font-bold text-slate-800 uppercase text-left text-left">{unit.name}</p>
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Detailed Allocation</p>
                        </div>
                      </div>
                      <div className="text-right text-left">
                        <div className="flex flex-col">
                          <span className="text-xs font-black text-slate-800 uppercase">{unit.ofRD.toFixed(1)}% <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tight text-right text-right">OF R&D HIRES</span></span>
                          <span className="text-[10px] font-bold text-slate-500 uppercase">{unit.ofTotal.toFixed(1)}% <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tight text-right text-right">OF TOTAL HIRES</span></span>
                        </div>
                      </div>
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
          
          <div className="mb-10 p-6 bg-blue-50/50 border border-blue-100 rounded-3xl flex items-center gap-5">
              <div className="bg-blue-600 text-white p-2.5 rounded-xl shadow-sm">
                  <Star size={20} />
              </div>
              <div className="text-left">
                <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Core Intellectual Capital Pillars</h4>
                <p className="text-sm font-semibold text-slate-700 leading-tight">
                    Technion (19%) and TAU (16%) remain the dominant talent sources, providing <span className="text-blue-700 font-black">over 35%</span> of the total academic background.
                </p>
              </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <Card className="lg:col-span-12">
              <div className="flex flex-col md:flex-row justify-between items-start gap-8 text-left">
                <div className="flex-1 w-full">
                  <h3 className="text-lg font-bold mb-8 flex items-center gap-2 text-slate-800 uppercase text-left"><GraduationCap size={20} className="text-emerald-700"/> Academic Origin</h3>
                  <div className="h-[350px] w-full text-left">
                    <ResponsiveContainer>
                      <BarChart data={eduData} margin={{ top: 80 }} barGap={25}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#475569', fontWeight: 700, fontSize: 10}} />
                        <YAxis hide domain={[0, 100]} />
                        <Legend verticalAlign="top" align="right" height={36}/>
                        <Bar name="2025" dataKey="2025" fill={COLORS.emerald} radius={[4, 4, 0, 0]} barSize={28}>
                          <LabelList content={<CustomLabel />} />
                        </Bar>
                        <Bar name="2024" dataKey="2024" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={28}>
                          <LabelList content={<CustomLabel />} />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-slate-50">
                    <p className="text-[11px] text-slate-500 font-bold leading-relaxed flex items-start gap-2 text-left">
                        <span className="text-navy-600 text-lg mt-[-4px]">*</span>
                        <span>The <strong>"NON-DEGREE / EXPERIENCE"</strong> category (referring to <strong>2025 data</strong>) includes hires with exceptional technical capabilities based on significant professional experience, specialized industrial certifications, or background in elite military technology units (e.g., 8200) as an alternative to formal academic degrees.</span>
                    </p>
                  </div>
                </div>
                
                <div className="w-full md:w-96 flex flex-col gap-6 text-left">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-left">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2 text-left text-left">
                      <Star size={14} className="text-orange-500" /> Top 3 Institutions (2025)
                    </h4>
                    <ul className="space-y-6">
                      {top3_2025.map((uni, i) => (
                        <li key={i} className="flex gap-4 items-center text-left">
                          <span className="text-navy-700 font-black text-xl">{i+1}.</span>
                          <div>
                            <p className="text-base font-black text-slate-800 uppercase text-left leading-none mb-1">
                              {uni.name}
                            </p>
                            <span className="text-navy-600 font-black text-xs uppercase tracking-wider text-left">
                              {uni.value.toFixed(1)}% OF ANNUAL HIRES
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-100/50 p-6 rounded-2xl border border-slate-100 opacity-80 grayscale-[0.5] text-left">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                      <Clock size={14} className="text-slate-400" /> Previous Top 3 (2024)
                    </h4>
                    <ul className="space-y-4">
                      {top3_2024.map((uni, i) => (
                        <li key={i} className="flex gap-3 items-center text-left">
                          <span className="text-slate-400 font-black text-sm">{i+1}.</span>
                          <div>
                            <p className="text-sm font-bold text-slate-600 uppercase text-left leading-none mb-1">
                              {uni.name}
                            </p>
                            <span className="text-slate-500 font-black text-[10px] text-left text-left">
                                {uni.value.toFixed(1)}%
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* GENDER INSIGHTS */}
            <Card>
              <h3 className="text-lg font-bold mb-8 text-slate-800 flex items-center gap-2 uppercase text-left"><Users size={20} className="text-navy-600"/> Gender Insights</h3>
              <div className="space-y-10 py-2 text-left">
                  <div className="flex flex-col gap-4 text-left">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Year 2025 Breakdown</span>
                      <div className="flex items-center gap-8">
                          <div className="flex items-center gap-2">
                              <div className="bg-navy-700 text-white p-2 rounded-lg shadow-sm"><User size={20} /></div>
                              <div className="flex flex-col">
                                  <span className="text-xs font-bold text-slate-500 uppercase text-left text-left">Males</span>
                                  <span className="text-2xl font-black text-navy-700 text-left">{genderStats.male2025}%</span>
                              </div>
                          </div>
                          <div className="flex items-center gap-2">
                              <div className="bg-orange-500 text-white p-2 rounded-lg shadow-sm"><UserCheck size={20} /></div>
                              <div className="flex flex-col">
                                  <span className="text-xs font-bold text-slate-500 uppercase text-left">Females</span>
                                  <span className="text-2xl font-black text-orange-500 text-left">{genderStats.female2025}%</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <div className="pt-8 border-t border-slate-50 grayscale opacity-60">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 block text-left">Comparison to 2024</span>
                      <div className="flex items-center gap-8 text-left">
                          <div className="flex items-center gap-2">
                              <User size={18} className="text-slate-600" />
                              <span className="text-sm font-black text-slate-600 text-left">{genderStats.male2024}%</span>
                          </div>
                          <div className="flex items-center gap-2">
                              <UserCheck size={18} className="text-slate-600" />
                              <span className="text-sm font-black text-slate-600 text-left">{genderStats.female2024}%</span>
                          </div>
                      </div>
                  </div>
              </div>
            </Card>

            {/* AGE INSIGHTS (AVERAGES) */}
            <Card>
              <h3 className="text-lg font-bold mb-8 text-slate-800 flex items-center gap-2 uppercase text-left"><TrendingUp size={20} className="text-orange-600"/> Age Insights</h3>
              <div className="space-y-8 text-left">
                  <div className="flex items-center justify-between gap-4">
                      <div className="flex flex-col">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Avg Age 2025</span>
                          <span className="text-4xl font-black text-[#1e3a8a] text-left">{ageStats.global2025}</span>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-2xl text-right opacity-60 grayscale border border-dashed border-slate-200 text-left">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Avg Age 2024</span>
                          <span className="text-xl font-bold text-slate-500 text-left">{ageStats.global2024}</span>
                      </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 text-left">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 block text-left">2025 Organization Breakdown</span>
                      <div className="space-y-4">
                          <div className="bg-emerald-50/50 p-3 rounded-xl flex items-center justify-between border border-emerald-100/30 text-left">
                              <div className="flex items-center gap-3">
                                  <div className="bg-emerald-600 text-white p-1.5 rounded-lg"><Building2 size={14} /></div>
                                  <span className="text-xs font-bold text-slate-700 uppercase">R&D Org Avg</span>
                              </div>
                              <span className="text-base font-black text-emerald-700 text-left">{ageStats.rd2025}</span>
                          </div>
                          <div className="bg-slate-50 p-3 rounded-xl flex items-center justify-between border border-slate-100 text-left">
                              <div className="flex items-center gap-3">
                                  <div className="bg-slate-600 text-white p-1.5 rounded-lg"><Briefcase size={14} /></div>
                                  <span className="text-xs font-bold text-slate-700 uppercase">Non-R&D Org Avg</span>
                              </div>
                              <span className="text-base font-black text-slate-700 text-left">{ageStats.nonRd2025}</span>
                          </div>
                      </div>
                  </div>
              </div>
            </Card>
          </div>

          {/* GENERATIONAL BREAKDOWN SECTION */}
          <div className="mb-16 text-left">
            <Card>
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-bold mb-8 flex items-center gap-2 text-slate-800 uppercase text-left"><History size={20} className="text-navy-600"/> Generational Distribution</h3>
                  <div className="h-[350px] w-full text-left">
                    <ResponsiveContainer>
                      <BarChart data={generationalComparison} margin={{ top: 60 }} barGap={25}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#475569', fontWeight: 700, fontSize: 10}} />
                        <YAxis hide domain={[0, 60]} />
                        <Legend verticalAlign="top" align="right" height={36}/>
                        <Bar name="2025" dataKey="2025" fill={COLORS.navy} radius={[4, 4, 0, 0]} barSize={28}>
                          <LabelList content={<CustomLabel />} />
                        </Bar>
                        <Bar name="2024" dataKey="2024" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={28}>
                          <LabelList content={<CustomLabel />} />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-4">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 text-left">Strategic Workforce Significance</h4>
                  {generationalInsights.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white transition-colors text-left text-left text-left">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-6 rounded-full" style={{backgroundColor: item.color}}></div>
                          <span className="text-sm font-black text-slate-800 uppercase">{item.gen}</span>
                          <span className="text-[10px] font-bold text-slate-400 px-2 py-0.5 bg-white rounded-md border border-slate-200">({item.years})</span>
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{item.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-medium leading-relaxed italic">{item.impact}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* MINIMALIST SENIORITY SECTION */}
          <div className="grid grid-cols-1 gap-8 text-left text-left">
            <Card>
              <div className="flex flex-col lg:flex-row gap-12 text-left">
                {/* Horizontal Progress Bars */}
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-bold mb-8 flex items-center gap-2 text-slate-800 uppercase text-left"><Clock size={20} className="text-emerald-600"/> Professional Seniority (2025)</h3>
                  <div className="space-y-8 py-4">
                    {seniorityStats.map((item, idx) => (
                      <div key={idx} className="space-y-2 text-left">
                        <div className="flex justify-between items-end text-left">
                          <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">{item.label}</span>
                          <span className="text-sm font-black text-slate-900">{item.value.toFixed(1)}%</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-1000 ease-out" 
                            style={{ 
                              width: `${item.value}%`, 
                              backgroundColor: item.color,
                              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)' 
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Seniority Insights */}
                <div className="w-full lg:w-1/2 bg-slate-50 p-6 rounded-[2rem] border border-slate-100 text-left">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2 text-left">
                    <Lightbulb size={16} className="text-emerald-600" /> Strategic Experience Insights
                  </h4>
                  <div className="space-y-6">
                    {seniorityInsights.map((insight, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="mt-1"><CheckCircle size={14} className="text-emerald-500" /></div>
                        <div>
                          <p className="text-sm font-black text-slate-800 uppercase mb-1">{insight.title}</p>
                          <p className="text-[11px] text-slate-600 font-medium leading-relaxed italic">{insight.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-4 bg-white rounded-xl border border-emerald-100/50">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                      * Selective professional hiring ensures a high seniority-to-junior ratio of ~2.3:1
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* SECTION 03: SITE DNA COMPARISON */}
        <section className="mb-32 text-left">
          <SectionHeader num="03" title="Site DNA Comparison" icon={MapPin} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-black text-left">
            <Card className="border-t-4 border-[#1e3a8a] text-left">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-[#1e3a8a]/10 p-3 rounded-2xl text-[#1e3a8a]"><Users size={24}/></div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-left text-left">Main Hub</span>
              </div>
              <h4 className="text-2xl font-black mb-1 text-[#1e3a8a] text-left">KFAR SABA</h4>
              <p className="text-slate-400 text-xs font-bold uppercase mb-6 tracking-widest text-left">OPERATIONAL & MANAGEMENT FOCUS</p>
              <div className="space-y-4 font-medium text-sm text-left">
                <div className="flex justify-between border-b border-slate-50 pb-2 uppercase text-left"><span>Hires (Allocation)</span><span>66.2%</span></div>
                <div className="flex justify-between border-b border-slate-50 pb-2 uppercase text-left"><span>Average Age</span><span>36.7</span></div>
                <div className="flex justify-between border-b border-slate-50 pb-2 uppercase text-left"><span>Mid-Level and Above (%)</span><span>67.9%</span></div>
                <div className="flex justify-between border-b border-slate-50 pb-2 uppercase text-left text-left text-left text-left text-left"><span>Top-Tier Graduates (%)</span><span>57.7%</span></div>
              </div>
            </Card>

            <Card className="border-t-4 border-emerald-600 text-left">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-700 text-left text-left text-left"><Users size={24}/></div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-left text-left text-left">Growth Hub</span>
              </div>
              <h4 className="text-2xl font-black mb-1 text-emerald-700 text-left text-left text-left text-left">NORTH HUB (KINNERET)</h4>
              <p className="text-slate-400 text-xs font-bold uppercase mb-6 tracking-widest text-left">ACADEMIC & ENGINEERING HUB</p>
              <div className="space-y-4 font-medium text-sm text-left">
                <div className="flex justify-between border-b border-slate-50 pb-2 uppercase text-left"><span>Hires (Allocation)</span><span>33.8%</span></div>
                <div className="flex justify-between border-b border-slate-50 pb-2 uppercase text-left"><span>Average Age</span><span>35.9</span></div>
                <div className="flex justify-between border-b border-slate-50 pb-2 uppercase text-left text-left text-left text-left text-left text-left text-left text-left"><span>Mid-Level and Above (%)</span><span>66.7%</span></div>
                <div className="flex justify-between border-b border-slate-50 pb-2 uppercase text-left text-left text-left text-left text-left text-left text-left text-left text-left text-left"><span>Top-Tier Graduates (%)</span><span>48.1%</span></div>
              </div>
            </Card>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-100 pt-8 pb-10 flex justify-between items-center text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] text-left text-left">
          <span>Audited Executive Report 2025 • Talent Intelligence</span>
          <span>© Executive Analytics Suite</span>
        </footer>
      </div>
    </div>
  );
};

export default App;


