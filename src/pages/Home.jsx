import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const citizen  = (() => {
    try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
  })();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        .home-root { min-height:calc(100vh - 64px); background:#f0fdf4; font-family:'DM Sans',sans-serif; }

        /* Hero */
        .hero { background:linear-gradient(135deg,#1a4a2e 0%,#166534 50%,#14532d 100%); color:#fff; padding:80px 32px 72px; text-align:center; position:relative; overflow:hidden; }
        .hero::before { content:''; position:absolute; inset:0; background:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
        .hero-badge { display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,0.1); backdrop-filter:blur(8px); border:1px solid rgba(255,255,255,0.2); border-radius:100px; padding:6px 18px; margin-bottom:24px; font-size:12px; color:#86efac; font-weight:600; letter-spacing:.5px; }
        .hero-dot { width:7px; height:7px; border-radius:50%; background:#4ade80; box-shadow:0 0 8px #4ade80; animation:pulse 2s infinite; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.5)} }
        .hero-title { font-family:'Crimson Pro',serif; font-size:clamp(32px,5vw,52px); font-weight:800; line-height:1.15; margin-bottom:16px; }
        .hero-title span { color:#4ade80; }
        .hero-marathi { font-family:'Tiro Devanagari Marathi',serif; font-size:clamp(18px,3vw,26px); color:#bbf7d0; margin-bottom:20px; display:block; }
        .hero-sub { font-size:16px; color:rgba(255,255,255,0.7); max-width:540px; margin:0 auto 36px; line-height:1.6; }
        .hero-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
        .hero-btn-primary { padding:14px 36px; border-radius:10px; border:none; background:#22c55e; color:#fff; font-weight:700; font-size:15px; cursor:pointer; box-shadow:0 6px 20px rgba(34,197,94,0.4); transition:all .2s; }
        .hero-btn-primary:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(34,197,94,0.5); }
        .hero-btn-outline { padding:14px 36px; border-radius:10px; border:2px solid rgba(255,255,255,0.4); background:transparent; color:#fff; font-weight:700; font-size:15px; cursor:pointer; transition:all .2s; }
        .hero-btn-outline:hover { border-color:#fff; background:rgba(255,255,255,0.08); }

        /* Stats */
        .stats { display:flex; justify-content:center; gap:0; background:#fff; border-bottom:1px solid #e5e7eb; flex-wrap:wrap; }
        .stat-item { padding:24px 40px; text-align:center; border-right:1px solid #f3f4f6; flex:1; min-width:140px; }
        .stat-item:last-child { border-right:none; }
        .stat-num { font-family:'Crimson Pro',serif; font-size:32px; font-weight:800; color:#16a34a; line-height:1; }
        .stat-lbl { font-size:12px; color:#9ca3af; font-weight:500; margin-top:4px; text-transform:uppercase; letter-spacing:.5px; }

        /* How it works */
        .section { padding:60px 32px; max-width:1100px; margin:0 auto; }
        .section-title { font-family:'Crimson Pro',serif; font-size:32px; font-weight:800; color:#1a4a2e; text-align:center; margin-bottom:8px; }
        .section-sub { text-align:center; color:#6b7280; font-size:15px; margin-bottom:48px; }
        .steps-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:24px; }
        .step-card { background:#fff; border-radius:16px; padding:28px 22px; text-align:center; border:1px solid #dcfce7; box-shadow:0 2px 12px rgba(0,0,0,0.05); transition:transform .2s,box-shadow .2s; position:relative; }
        .step-card:hover { transform:translateY(-4px); box-shadow:0 8px 24px rgba(0,0,0,0.1); }
        .step-num { position:absolute; top:-14px; left:50%; transform:translateX(-50%); width:28px; height:28px; border-radius:50%; background:#22c55e; color:#fff; font-size:13px; font-weight:800; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(34,197,94,0.4); }
        .step-icon { font-size:36px; margin-bottom:14px; display:block; }
        .step-title { font-weight:700; color:#1a4a2e; font-size:15px; margin-bottom:8px; }
        .step-desc { font-size:13px; color:#6b7280; line-height:1.5; }

        /* Notice */
        .notice { background:linear-gradient(135deg,#fef9c3,#fef3c7); border:1px solid #fde68a; border-radius:14px; padding:24px 28px; margin:0 32px 40px; display:flex; gap:16px; align-items:flex-start; max-width:1036px; margin-left:auto; margin-right:auto; }
        .notice-icon { font-size:28px; flex-shrink:0; }
        .notice-title { font-weight:700; color:#92400e; font-size:15px; margin-bottom:6px; }
        .notice-text { font-size:13px; color:#a16207; line-height:1.6; }

        /* CTA */
        .cta { background:linear-gradient(135deg,#1a4a2e,#166534); color:#fff; padding:60px 32px; text-align:center; }
        .cta-title { font-family:'Crimson Pro',serif; font-size:32px; font-weight:800; margin-bottom:12px; }
        .cta-sub { color:#bbf7d0; font-size:15px; margin-bottom:32px; }
        .cta-btn { padding:14px 40px; border-radius:10px; border:none; background:#22c55e; color:#fff; font-weight:700; font-size:15px; cursor:pointer; box-shadow:0 6px 20px rgba(34,197,94,0.4); transition:all .2s; }
        .cta-btn:hover { transform:translateY(-2px); }
      `}</style>

      <div className="home-root">
        {/* Hero */}
        <div className="hero">
          <div className="hero-badge"><div className="hero-dot" />Online Appointment Portal — VVCMC</div>
          <h1 className="hero-title">
            Mayor भेटीसाठी<br /><span>Online Appointment</span> बुक करा
          </h1>
          <span className="hero-marathi">वसई-विरार शहर महानगरपालिका</span>
          <p className="hero-sub">
            आता घरबसल्या Mayor साहेबांची भेट बुक करा — सोपे, जलद आणि पारदर्शक
          </p>
          <div className="hero-btns">
            {citizen ? (
              <>
                <button className="hero-btn-primary" onClick={() => navigate("/book-appointment")}>
                  📅 Book Appointment
                </button>
                <button className="hero-btn-outline" onClick={() => navigate("/my-appointments")}>
                  📋 My Appointments
                </button>
              </>
            ) : (
              <>
                <button className="hero-btn-primary" onClick={() => navigate("/register")}>
                  🚀 Get Started — Register
                </button>
                <button className="hero-btn-outline" onClick={() => navigate("/login")}>
                  Login करा
                </button>
              </>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="stats">
          {[
            { num:"8",    lbl:"Talukas" },
            { num:"24/7", lbl:"Online Booking" },
            { num:"2009", lbl:"Established" },
            { num:"100%", lbl:"Transparent" },
          ].map((s,i) => (
            <div key={i} className="stat-item">
              <div className="stat-num">{s.num}</div>
              <div className="stat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="section">
          <h2 className="section-title">कसे काम करते?</h2>
          <p className="section-sub">फक्त 4 सोप्या steps मध्ये Mayor ची भेट बुक करा</p>
          <div className="steps-grid">
            {[
              { icon:"📝", title:"Register करा",         desc:"Mobile number वापरून account तयार करा — फक्त 1 मिनिट" },
              { icon:"📅", title:"Date निवडा",           desc:"Mayor च्या available dates आणि time slots मधून निवडा" },
              { icon:"📋", title:"Details भरा",          desc:"भेटीचे कारण, visitors संख्या आणि photo द्या" },
              { icon:"🎫", title:"Token मिळवा",          desc:"Confirmation token आणि QR code मिळेल — भेटीच्या दिवशी दाखवा" },
            ].map((s,i) => (
              <div key={i} className="step-card">
                <div className="step-num">{i+1}</div>
                <span className="step-icon">{s.icon}</span>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Notice */}
        <div className="notice">
          <span className="notice-icon">⚠️</span>
          <div>
            <div className="notice-title">महत्त्वाची सूचना</div>
            <div className="notice-text">
              भेटीच्या दिवशी वेळेवर या. Token confirm झाल्याशिवाय भेट होणार नाही.
              Appointment confirm होण्यासाठी admin approval आवश्यक आहे.
              कोणत्याही अडचणीसाठी VVCMC कार्यालयाशी संपर्क करा.
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta">
          <div className="cta-title">आजच Appointment बुक करा</div>
          <div className="cta-sub">Mayor साहेबांची वेळ मर्यादित आहे — लवकर बुक करा</div>
          <button className="cta-btn" onClick={() => navigate(citizen ? "/book-appointment" : "/register")}>
            {citizen ? "📅 Book Now" : "🚀 Register & Book"}
          </button>
        </div>
      </div>
    </>
  );
}