import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function CitizenNavbar() {
  const navigate  = useNavigate();
  const location  = useLocation();
  const [menu, setMenu] = useState(false);

  const citizen = (() => {
    try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
  })();

  const logout = () => {
    localStorage.removeItem("citizenUser");
    navigate("/login");
    setMenu(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&display=swap');
        .cn-nav { background:#1a4a2e; color:#fff; padding:0 32px; display:flex; align-items:center; justify-content:space-between; height:64px; box-shadow:0 2px 16px rgba(0,0,0,0.22); position:sticky; top:0; z-index:100; }
        .cn-brand { display:flex; align-items:center; gap:12px; cursor:pointer; }
        .cn-logo { width:40px; height:40px; border-radius:50%; background:#22c55e; display:flex; align-items:center; justify-content:center; font-size:20px; flex-shrink:0; }
        .cn-brand-text { display:flex; flex-direction:column; }
        .cn-brand-name { font-family:'Tiro Devanagari Marathi',serif; font-size:14px; font-weight:700; line-height:1.25; color:#fff; }
        .cn-brand-sub { font-size:10px; color:#86efac; letter-spacing:.6px; text-transform:uppercase; }
        .cn-links { display:flex; align-items:center; gap:6px; }
        .cn-link { padding:7px 16px; border-radius:6px; font-size:13px; font-weight:600; cursor:pointer; transition:all .18s; border:none; background:transparent; color:rgba(255,255,255,0.75); }
        .cn-link:hover { background:rgba(255,255,255,0.1); color:#fff; }
        .cn-link.active { background:rgba(34,197,94,0.2); color:#4ade80; }
        .cn-btn-outline { padding:7px 18px; border-radius:6px; border:1.5px solid #86efac; background:transparent; color:#86efac; font-size:13px; font-weight:700; cursor:pointer; transition:all .18s; }
        .cn-btn-outline:hover { background:#86efac; color:#1a4a2e; }
        .cn-btn-solid { padding:7px 18px; border-radius:6px; border:none; background:#22c55e; color:#fff; font-size:13px; font-weight:700; cursor:pointer; transition:all .18s; box-shadow:0 2px 8px rgba(34,197,94,0.3); }
        .cn-btn-solid:hover { background:#16a34a; }
        .cn-btn-danger { padding:7px 18px; border-radius:6px; border:none; background:#dc2626; color:#fff; font-size:13px; font-weight:700; cursor:pointer; transition:all .18s; }
        .cn-citizen-name { font-size:13px; color:#86efac; font-weight:600; }
        .cn-ham { display:none; background:none; border:none; color:#fff; font-size:22px; cursor:pointer; padding:4px; }
        .cn-mobile-menu { display:none; position:fixed; top:64px; left:0; right:0; background:#1a3d28; z-index:99; padding:12px 20px; box-shadow:0 8px 24px rgba(0,0,0,0.3); flex-direction:column; gap:6px; }
        .cn-mobile-menu.open { display:flex; }
        .cn-mobile-link { padding:10px 14px; border-radius:8px; font-size:14px; font-weight:600; cursor:pointer; color:rgba(255,255,255,0.8); background:none; border:none; text-align:left; transition:background .15s; }
        .cn-mobile-link:hover { background:rgba(255,255,255,0.08); color:#fff; }
        .cn-mobile-link.active { background:rgba(34,197,94,0.15); color:#4ade80; }
        @media(max-width:700px){
          .cn-links { display:none; }
          .cn-ham { display:block; }
        }
      `}</style>

      <nav className="cn-nav">
        <div className="cn-brand" onClick={() => navigate("/")}>
          <div className="cn-logo">🏛️</div>
          <div className="cn-brand-text">
            <span className="cn-brand-name">वसई-विरार शहर महानगरपालिका</span>
            <span className="cn-brand-sub">Citizen Appointment Portal</span>
          </div>
        </div>

        <div className="cn-links">
          <button className={`cn-link${isActive("/") ? " active" : ""}`} onClick={() => navigate("/")}>Home</button>
          {citizen && (
            <button className={`cn-link${isActive("/my-appointments") ? " active" : ""}`} onClick={() => navigate("/my-appointments")}>My Appointments</button>
          )}
          {citizen ? (
            <>
              <span className="cn-citizen-name">👋 {citizen.fullName?.split(" ")[0]}</span>
              <button className="cn-btn-solid" onClick={() => navigate("/book-appointment")}>+ Book</button>
              <button className="cn-btn-danger" onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <button className="cn-btn-outline" onClick={() => navigate("/login")}>Login</button>
              <button className="cn-btn-solid"   onClick={() => navigate("/register")}>Register</button>
            </>
          )}
        </div>

        <button className="cn-ham" onClick={() => setMenu(m => !m)}>☰</button>
      </nav>

      {/* Mobile menu */}
      <div className={`cn-mobile-menu${menu ? " open" : ""}`}>
        <button className={`cn-mobile-link${isActive("/") ? " active" : ""}`} onClick={() => { navigate("/"); setMenu(false); }}>🏠 Home</button>
        {citizen && (
          <button className={`cn-mobile-link${isActive("/my-appointments") ? " active" : ""}`} onClick={() => { navigate("/my-appointments"); setMenu(false); }}>📅 My Appointments</button>
        )}
        {citizen ? (
          <>
            <button className="cn-mobile-link" style={{ color:"#4ade80" }} onClick={() => { navigate("/book-appointment"); setMenu(false); }}>+ Book Appointment</button>
            <button className="cn-mobile-link" style={{ color:"#f87171" }} onClick={logout}>🚪 Logout</button>
          </>
        ) : (
          <>
            <button className="cn-mobile-link" onClick={() => { navigate("/login");    setMenu(false); }}>🔐 Login</button>
            <button className="cn-mobile-link" onClick={() => { navigate("/register"); setMenu(false); }}>📝 Register</button>
          </>
        )}
      </div>
    </>
  );
}