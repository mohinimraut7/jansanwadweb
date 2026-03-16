// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import citizenAxios from "../services/citizenAxios";

// function formatDate(d) {
//   if (!d) return "—";
//   return new Date(d + "T00:00:00").toLocaleDateString("en-IN", { weekday:"long", day:"numeric", month:"long", year:"numeric" });
// }
// function formatShort(d) {
//   if (!d) return "—";
//   return new Date(d + "T00:00:00").toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" });
// }
// function formatCreated(d) {
//   if (!d) return "—";
//   return new Date(d).toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric", hour:"2-digit", minute:"2-digit" });
// }

// const STATUS_CFG = {
//   pending:  { bg:"#fef9c3", color:"#92400e", border:"#fde68a",  label:"⏳ Pending"  },
//   approved: { bg:"#dcfce7", color:"#166534", border:"#86efac",  label:"✅ Approved" },
//   rejected: { bg:"#fee2e2", color:"#991b1b", border:"#fca5a5",  label:"❌ Rejected" },
//   expired:  { bg:"#f3f4f6", color:"#6b7280", border:"#e5e7eb",  label:"🕰️ Expired"  },
// };

// export default function MyAppointments() {
//   const navigate    = useNavigate();
//   const citizen     = (() => { try { return JSON.parse(localStorage.getItem("citizenUser")||"null"); } catch { return null; } })();
//   const [appts, setAppts]       = useState([]);
//   const [loading, setLoading]   = useState(true);
//   const [selected, setSelected] = useState(null);
//   const [filter, setFilter]     = useState("all");

//   useEffect(() => {
//     if (!citizen) { navigate("/login"); return; }
//     fetchAppts();
//   }, []);

//   const fetchAppts = async () => {
//     try {
//       setLoading(true);
//       const res = await citizenAxios.get("/citizen/my-appointments", {
//         //  citizenId: citizen._id,        // ✅ primary
//         params: { 
//     citizenId: citizen._id,
//     mobileNumber: citizen.mobileNumber,
//   },
//         // params: { mobileNumber: citizen.mobileNumber },
//       });
//       if (res.data.success) setAppts(res.data.appointments || []);
//     } catch (e) { /* silent */ }
//     finally { setLoading(false); }
//   };
  

//   const filtered = filter === "all" ? appts : appts.filter(a => a.status === filter);

//   const statusCfg = (s) => STATUS_CFG[s?.toLowerCase()] || STATUS_CFG.pending;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
//         .ma-root { min-height:calc(100vh - 64px); background:#f0fdf4; padding:36px 16px; font-family:'DM Sans',sans-serif; }
//         .ma-inner { max-width:900px; margin:0 auto; }
//         .ma-header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:28px; flex-wrap:wrap; gap:14px; }
//         .ma-title { font-family:'Crimson Pro',serif; font-size:30px; font-weight:800; color:#1a4a2e; margin:0 0 4px; }
//         .ma-sub { font-size:14px; color:#6b7280; margin:0; }
//         .ma-book-btn { padding:12px 28px; border-radius:10px; border:none; background:#16a34a; color:#fff; font-weight:700; font-size:14px; cursor:pointer; box-shadow:0 4px 14px rgba(22,163,74,0.3); transition:all .2s; font-family:'DM Sans',sans-serif; }
//         .ma-book-btn:hover { background:#15803d; transform:translateY(-1px); }

//         /* Filter tabs */
//         .filter-tabs { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:24px; }
//         .ftab { padding:7px 18px; border-radius:20px; border:1.5px solid #d1d5db; background:#fff; font-size:13px; font-weight:600; cursor:pointer; transition:all .15s; font-family:'DM Sans',sans-serif; color:#374151; }
//         .ftab:hover { border-color:#16a34a; color:#16a34a; }
//         .ftab.active { background:#16a34a; border-color:#16a34a; color:#fff; }

//         /* Appointment cards */
//         .appt-list { display:flex; flex-direction:column; gap:14px; }
//         .appt-card { background:#fff; border-radius:14px; padding:20px 24px; border:1px solid #e5e7eb; box-shadow:0 2px 8px rgba(0,0,0,0.05); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; cursor:pointer; transition:box-shadow .2s,transform .15s; }
//         .appt-card:hover { box-shadow:0 6px 20px rgba(0,0,0,0.1); transform:translateY(-2px); }
//         .appt-token { font-size:15px; font-weight:800; color:#1a4a2e; margin:0 0 4px; }
//         .appt-meta { font-size:13px; color:#6b7280; margin:0; line-height:1.6; }
//         .appt-right { display:flex; align-items:center; gap:10px; }
//         .status-badge { padding:5px 14px; border-radius:20px; font-size:12px; font-weight:700; }
//         .view-btn { padding:7px 18px; border-radius:8px; border:1.5px solid #16a34a; background:#fff; color:#16a34a; font-size:13px; font-weight:700; cursor:pointer; transition:all .15s; font-family:'DM Sans',sans-serif; }
//         .view-btn:hover { background:#f0fdf4; }

//         /* Empty */
//         .empty-box { background:#fff; border-radius:16px; padding:60px 32px; text-align:center; border:1px solid #e5e7eb; }

//         /* Modal */
//         .modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.5); z-index:999; display:flex; align-items:center; justify-content:center; padding:16px; }
//         .modal-card { background:#fff; border-radius:20px; width:100%; max-width:500px; max-height:90vh; overflow:auto; box-shadow:0 20px 60px rgba(0,0,0,0.3); }
//         .modal-header { background:linear-gradient(135deg,#1a4a2e,#16a34a); padding:20px 24px; color:#fff; border-radius:20px 20px 0 0; display:flex; justify-content:space-between; align-items:center; }
//         .modal-close { background:rgba(255,255,255,0.2); border:none; color:#fff; width:32px; height:32px; border-radius:50%; cursor:pointer; font-size:16px; font-weight:700; display:flex; align-items:center; justify-content:center; }
//         .modal-close:hover { background:rgba(255,255,255,0.3); }
//         .modal-body { padding:24px; }
//         .modal-row { display:flex; justify-content:space-between; padding:9px 0; border-bottom:1px solid #f3f4f6; font-size:14px; }
//         .modal-row:last-child { border-bottom:none; }
//         .modal-key { color:#6b7280; font-weight:500; }
//         .modal-val { color:#111827; font-weight:700; text-align:right; max-width:60%; word-break:break-word; }

//         /* Loading */
//         @keyframes spin { to{transform:rotate(360deg)} }
//       `}</style>

//       <div className="ma-root">
//         <div className="ma-inner">
//           {/* Header */}
//           <div className="ma-header">
//             <div>
//               <h1 className="ma-title">My Appointments</h1>
//               <p className="ma-sub">नमस्कार, {citizen?.fullName} 👋 — तुमच्या सर्व appointments येथे आहेत</p>
//             </div>
//             <button className="ma-book-btn" onClick={() => navigate("/book-appointment")}>+ New Appointment</button>
//           </div>

//           {/* Filter tabs */}
//           <div className="filter-tabs">
//             {[
//               { key:"all",      label:`सर्व (${appts.length})` },
//               { key:"pending",  label:`Pending (${appts.filter(a=>a.status==="pending").length})`  },
//               { key:"approved", label:`Approved (${appts.filter(a=>a.status==="approved").length})` },
//               { key:"rejected", label:`Rejected (${appts.filter(a=>a.status==="rejected").length})` },
//               { key:"expired",  label:`Expired (${appts.filter(a=>a.status==="expired").length})`  },
//             ].map(t => (
//               <button key={t.key} className={`ftab${filter===t.key?" active":""}`} onClick={() => setFilter(t.key)}>{t.label}</button>
//             ))}
//           </div>

//           {/* List */}
//           {loading ? (
//             <div style={{ textAlign:"center", padding:60 }}>
//               <div style={{ width:36, height:36, border:"3px solid #e5e7eb", borderTopColor:"#16a34a", borderRadius:"50%", animation:"spin .8s linear infinite", margin:"0 auto 12px" }} />
//               <p style={{ color:"#9ca3af" }}>Loading...</p>
//             </div>
//           ) : filtered.length === 0 ? (
//             <div className="empty-box">
//               <div style={{ fontSize:48, marginBottom:12 }}>📅</div>
//               <p style={{ color:"#374151", fontWeight:700, fontSize:16, margin:"0 0 8px" }}>
//                 {filter==="all" ? "कोणतेही appointments नाहीत" : `${filter} appointments नाहीत`}
//               </p>
//               {filter==="all" && (
//                 <button className="ma-book-btn" style={{ marginTop:16 }} onClick={() => navigate("/book-appointment")}>
//                   पहिले Appointment Book करा
//                 </button>
//               )}
//             </div>
//           ) : (
//             <div className="appt-list">
//               {filtered.map((a, i) => {
//                 const sc = statusCfg(a.status);
//                 return (
//                   <div key={i} className="appt-card" onClick={() => setSelected(a)}>
//                     <div>
//                       <p className="appt-token">{a.tokenId || "—"}</p>
//                       <p className="appt-meta">
//                         📅 {formatShort(a.preferredDate)} &nbsp;·&nbsp; ⏰ {a.slotTime || "—"}<br />
//                         📝 {a.purpose?.length > 60 ? a.purpose.slice(0,60)+"..." : a.purpose}
//                       </p>
//                     </div>
//                     <div className="appt-right">
//                       <span className="status-badge" style={{ background:sc.bg, color:sc.color, border:`1px solid ${sc.border}` }}>{sc.label}</span>
//                       <button className="view-btn" onClick={e => { e.stopPropagation(); setSelected(a); }}>View</button>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Detail Modal */}
//       {selected && (
//         <div className="modal-overlay" onClick={() => setSelected(null)}>
//           <div className="modal-card" onClick={e => e.stopPropagation()}>
//             <div className="modal-header">
//               <div>
//                 <p style={{ margin:0, fontSize:11, opacity:.7, textTransform:"uppercase", letterSpacing:.5 }}>Appointment Details</p>
//                 <h3 style={{ margin:"4px 0 0", fontSize:18, fontWeight:800 }}>{selected.tokenId}</h3>
//               </div>
//               <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
//             </div>
//             <div className="modal-body">
//               {/* Visitor photo */}
//               {selected.visitorPhoto && (
//                 <div style={{ textAlign:"center", marginBottom:20 }}>
//                   <img
//                     src={selected.visitorPhoto.startsWith("http") ? selected.visitorPhoto : `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/${selected.visitorPhoto}`}
//                     alt="visitor"
//                     style={{ width:90, height:90, borderRadius:"50%", objectFit:"cover", border:"3px solid #16a34a" }}
//                   />
//                 </div>
//               )}

//               {/* Status badge */}
//               {(() => { const sc = statusCfg(selected.status); return (
//                 <div style={{ textAlign:"center", marginBottom:16 }}>
//                   <span style={{ padding:"6px 20px", borderRadius:20, fontSize:13, fontWeight:700, background:sc.bg, color:sc.color, border:`1px solid ${sc.border}` }}>{sc.label}</span>
//                 </div>
//               );})()}

//               {[
//                 ["Name",            selected.fullName],
//                 ["Mobile",          selected.mobileNumber],
//                 ["Email",           selected.email || "—"],
//                 ["Address",         selected.address || "—"],
//                 ["Date",            formatDate(selected.preferredDate)],
//                 ["Slot",            selected.slotTime],
//                 ["Purpose",         selected.purpose],
//                 ["Visitors",        selected.numberOfVisitors],
//                 ["Visited Before",  selected.visitedBefore ? "Yes" : "No"],
//                 ["Ward",            selected.ward || "—"],
//                 ["Booked On",       formatCreated(selected.createdAt)],
//               ].map(([k,v]) => v ? (
//                 <div key={k} className="modal-row">
//                   <span className="modal-key">{k}</span>
//                   <span className="modal-val">{v}</span>
//                 </div>
//               ) : null)}

//               {selected.adminNote && (
//                 <div style={{ background:"#fef9c3", border:"1px solid #fde68a", borderRadius:8, padding:"10px 14px", marginTop:12, fontSize:13, color:"#92400e" }}>
//                   <strong>Admin Note:</strong> {selected.adminNote}
//                 </div>
//               )}

//               {/* QR Code */}
//               {selected.qrCode && (
//                 <div style={{ textAlign:"center", marginTop:20, paddingTop:16, borderTop:"1px solid #f3f4f6" }}>
//                   <p style={{ fontSize:12, color:"#6b7280", marginBottom:8 }}>QR Code — भेटीच्या दिवशी दाखवा</p>
//                   <img src={selected.qrCode} alt="QR" style={{ width:130, height:130 }} />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// =============================================================

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import citizenAxios from "../services/citizenAxios";

function formatDate(d) {
  if (!d) return "—";
  return new Date(d + "T00:00:00").toLocaleDateString("en-IN", { weekday:"long", day:"numeric", month:"long", year:"numeric" });
}
function formatShort(d) {
  if (!d) return "—";
  return new Date(d + "T00:00:00").toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" });
}
function formatCreated(d) {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric", hour:"2-digit", minute:"2-digit" });
}

const STATUS_CFG = {
  pending:  { bg:"#fef9c3", color:"#92400e", border:"#fde68a",  label:"⏳ Pending"  },
  approved: { bg:"#dcfce7", color:"#166534", border:"#86efac",  label:"✅ Approved" },
  rejected: { bg:"#fee2e2", color:"#991b1b", border:"#fca5a5",  label:"❌ Rejected" },
  expired:  { bg:"#f3f4f6", color:"#6b7280", border:"#e5e7eb",  label:"🕰️ Expired"  },
};

function ActionMenu({ appt, onView }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  return (
    <div ref={ref} style={{ position:"relative" }}>
      <button
        onClick={(e) => { e.stopPropagation(); setOpen(o => !o); }}
        style={{ background:"none", border:"none", cursor:"pointer", padding:"4px 8px", borderRadius:6, color:"#9ca3af", fontSize:18, lineHeight:1, display:"flex", alignItems:"center" }}
        title="Actions"
      >⋮</button>
      {open && (
        <div style={{ position:"absolute", right:0, top:"110%", background:"#fff", border:"1px solid #e5e7eb", borderRadius:10, boxShadow:"0 8px 24px rgba(0,0,0,0.12)", zIndex:100, minWidth:140, overflow:"hidden" }}>
          <button
            onClick={(e) => { e.stopPropagation(); onView(appt); setOpen(false); }}
            style={{ display:"block", width:"100%", padding:"10px 16px", background:"none", border:"none", textAlign:"left", cursor:"pointer", fontSize:13, color:"#374151", fontFamily:"'DM Sans',sans-serif", fontWeight:500 }}
            onMouseEnter={e => e.target.style.background="#f9fafb"}
            onMouseLeave={e => e.target.style.background="none"}
          >👁 View Details</button>
        </div>
      )}
    </div>
  );
}

export default function MyAppointments() {
  const navigate    = useNavigate();
  const citizen     = (() => { try { return JSON.parse(localStorage.getItem("citizenUser")||"null"); } catch { return null; } })();
  const [appts, setAppts]         = useState([]);
  const [loading, setLoading]     = useState(true);
  const [selected, setSelected]   = useState(null);
  const [filter, setFilter]       = useState("all");
  const [checked, setChecked]     = useState([]);
  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    if (!citizen) { navigate("/login"); return; }
    fetchAppts();
  }, []);

  const fetchAppts = async () => {
    try {
      setLoading(true);
      const res = await citizenAxios.get("/citizen/my-appointments", {
        params: { 
          citizenId: citizen._id,
          mobileNumber: citizen.mobileNumber,
        },
      });
      if (res.data.success) setAppts(res.data.appointments || []);
    } catch (e) { /* silent */ }
    finally { setLoading(false); }
  };

  const filtered = filter === "all" ? appts : appts.filter(a => a.status === filter);

  const statusCfg = (s) => STATUS_CFG[s?.toLowerCase()] || STATUS_CFG.pending;

  const toggleAll = () => {
    if (allChecked) { setChecked([]); setAllChecked(false); }
    else { setChecked(filtered.map((_, i) => i)); setAllChecked(true); }
  };
  const toggleOne = (i) => {
    setChecked(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing:border-box; }
        .ma-root { min-height:calc(100vh - 64px); background:#f8fafc; padding:32px 32px; font-family:'DM Sans',sans-serif; }
        .ma-inner { width:100%; }

        /* Header */
        .ma-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:12px; }
        .ma-title { font-family:'Syne',sans-serif; font-size:26px; font-weight:800; color:#0f172a; margin:0; letter-spacing:-0.5px; }
        .ma-sub { font-size:13px; color:#94a3b8; margin:4px 0 0; font-weight:400; }
        .ma-actions { display:flex; gap:10px; align-items:center; }
        .ma-icon-btn { width:38px; height:38px; border-radius:10px; border:1.5px solid #e2e8f0; background:#fff; cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:16px; transition:all .15s; }
        .ma-icon-btn:hover { border-color:#16a34a; background:#f0fdf4; }
        .ma-book-btn { padding:10px 22px; border-radius:10px; border:none; background:#16a34a; color:#fff; font-weight:700; font-size:13px; cursor:pointer; display:flex; align-items:center; gap:6px; font-family:'DM Sans',sans-serif; transition:all .2s; }
        .ma-book-btn:hover { background:#15803d; }

        /* Filter row */
        .filter-row { display:flex; align-items:center; gap:8px; margin-bottom:16px; flex-wrap:wrap; }
        .filter-label { font-size:12px; font-weight:700; color:#64748b; text-transform:uppercase; letter-spacing:.5px; margin-right:4px; }
        .ftab { padding:6px 16px; border-radius:20px; border:1.5px solid #e2e8f0; background:#fff; font-size:12px; font-weight:600; cursor:pointer; transition:all .15s; font-family:'DM Sans',sans-serif; color:#64748b; }
        .ftab:hover { border-color:#16a34a; color:#16a34a; }
        .ftab.active { background:#16a34a; border-color:#16a34a; color:#fff; }
        .clean-btn { margin-left:auto; font-size:12px; color:#16a34a; background:none; border:none; cursor:pointer; font-weight:600; font-family:'DM Sans',sans-serif; }
        .clean-btn:hover { text-decoration:underline; }

        /* Table wrapper */
        .table-wrap { background:#fff; border-radius:16px; border:1px solid #e2e8f0; overflow:hidden; box-shadow:0 1px 4px rgba(0,0,0,0.04); }

        /* Table header */
        .tbl-head { display:grid; grid-template-columns:48px 220px 1fr 150px 180px 130px 56px; align-items:center; padding:0 24px; background:#f8fafc; border-bottom:1.5px solid #e2e8f0; min-height:44px; }
        .tbl-head-cell { font-size:11px; font-weight:700; color:#94a3b8; text-transform:uppercase; letter-spacing:.5px; display:flex; align-items:center; gap:4px; }
        .sort-icon { font-size:10px; color:#cbd5e1; }

        /* Table row */
        .tbl-row { display:grid; grid-template-columns:48px 220px 1fr 150px 180px 130px 56px; align-items:center; padding:0 24px; min-height:60px; border-bottom:1px solid #f1f5f9; cursor:pointer; transition:background .12s; }
        .tbl-row:last-child { border-bottom:none; }
        .tbl-row:hover { background:#f8fafc; }
        .tbl-row.row-checked { background:#f0fdf4; }

        /* Cell styles */
        .cell-token { font-size:13px; font-weight:700; color:#0f172a; font-family:'Syne',sans-serif; }
        .cell-purpose { font-size:13px; color:#475569; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; padding-right:12px; }
        .cell-date { font-size:13px; color:#475569; }
        .cell-slot { font-size:12px; color:#64748b; background:#f1f5f9; padding:3px 10px; border-radius:20px; display:inline-block; font-weight:500; }
        .status-badge { padding:4px 12px; border-radius:20px; font-size:11px; font-weight:700; display:inline-block; white-space:nowrap; }

        /* Checkbox */
        .cb { width:16px; height:16px; border-radius:4px; border:1.5px solid #cbd5e1; cursor:pointer; accent-color:#16a34a; }

        /* Empty */
        .empty-box { padding:64px 32px; text-align:center; }

        /* Modal */
        .modal-overlay { position:fixed; inset:0; background:rgba(15,23,42,0.6); z-index:999; display:flex; align-items:center; justify-content:center; padding:16px; backdrop-filter:blur(3px); }
        .modal-card { background:#fff; border-radius:20px; width:100%; max-width:500px; max-height:90vh; overflow:auto; box-shadow:0 24px 64px rgba(0,0,0,0.25); }
        .modal-header { background:linear-gradient(135deg,#0f172a 0%,#1e3a5f 50%,#16a34a 100%); padding:22px 24px; color:#fff; border-radius:20px 20px 0 0; display:flex; justify-content:space-between; align-items:center; }
        .modal-close { background:rgba(255,255,255,0.15); border:none; color:#fff; width:32px; height:32px; border-radius:50%; cursor:pointer; font-size:16px; font-weight:700; display:flex; align-items:center; justify-content:center; transition:background .15s; }
        .modal-close:hover { background:rgba(255,255,255,0.25); }
        .modal-body { padding:24px; }
        .modal-row { display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #f1f5f9; font-size:13px; }
        .modal-row:last-child { border-bottom:none; }
        .modal-key { color:#94a3b8; font-weight:500; }
        .modal-val { color:#0f172a; font-weight:600; text-align:right; max-width:60%; word-break:break-word; }

        @keyframes spin { to{transform:rotate(360deg)} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        .tbl-row { animation:fadeIn .2s ease both; }
      `}</style>

      <div className="ma-root">
        <div className="ma-inner">

          {/* Header */}
          <div className="ma-header">
            <div>
              <h1 className="ma-title">My Appointments</h1>
              <p className="ma-sub">नमस्कार, {citizen?.fullName} 👋 — तुमच्या सर्व appointments येथे आहेत</p>
            </div>
            <div className="ma-actions">
              <button className="ma-icon-btn" title="Search" onClick={() => {}}>🔍</button>
              <button className="ma-icon-btn" title="Refresh" onClick={fetchAppts}>↻</button>
              <button className="ma-book-btn" onClick={() => navigate("/book-appointment")}>
                <span style={{ fontSize:16 }}>+</span> New Appointment
              </button>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="filter-row">
            <span className="filter-label">Status</span>
            {[
              { key:"all",      label:`All` },
              { key:"pending",  label:`Pending`  },
              { key:"approved", label:`Approved` },
              { key:"rejected", label:`Rejected` },
              { key:"expired",  label:`Expired`  },
            ].map(t => (
              <button key={t.key} className={`ftab${filter===t.key?" active":""}`} onClick={() => { setFilter(t.key); setChecked([]); setAllChecked(false); }}>
                {t.label} ({t.key==="all" ? appts.length : appts.filter(a=>a.status===t.key).length})
              </button>
            ))}
            {filter !== "all" && (
              <button className="clean-btn" onClick={() => { setFilter("all"); setChecked([]); setAllChecked(false); }}>CLEAN</button>
            )}
          </div>

          {/* Table */}
          <div className="table-wrap">
            {/* Table header */}
            <div className="tbl-head">
              <div><input type="checkbox" className="cb" checked={allChecked} onChange={toggleAll} /></div>
              <div className="tbl-head-cell"># Token ID <span className="sort-icon">⇅</span></div>
              <div className="tbl-head-cell">Purpose</div>
              <div className="tbl-head-cell">Date <span className="sort-icon">⇅</span></div>
              <div className="tbl-head-cell">Slot</div>
              <div className="tbl-head-cell">Status <span className="sort-icon">⇅</span></div>
              <div></div>
            </div>

            {/* Body */}
            {loading ? (
              <div style={{ textAlign:"center", padding:"56px 0" }}>
                <div style={{ width:32, height:32, border:"3px solid #e2e8f0", borderTopColor:"#16a34a", borderRadius:"50%", animation:"spin .8s linear infinite", margin:"0 auto 12px" }} />
                <p style={{ color:"#94a3b8", fontSize:13 }}>Loading appointments...</p>
              </div>
            ) : filtered.length === 0 ? (
              <div className="empty-box">
                <div style={{ fontSize:44, marginBottom:12 }}>📅</div>
                <p style={{ color:"#374151", fontWeight:700, fontSize:15, margin:"0 0 6px" }}>
                  {filter==="all" ? "कोणतेही appointments नाहीत" : `No ${filter} appointments`}
                </p>
                <p style={{ color:"#94a3b8", fontSize:13, margin:"0 0 20px" }}>
                  {filter==="all" ? "Book your first appointment to get started." : "Try switching to a different filter."}
                </p>
                {filter==="all" && (
                  <button className="ma-book-btn" style={{ margin:"0 auto", display:"inline-flex" }} onClick={() => navigate("/book-appointment")}>
                    + Book Appointment
                  </button>
                )}
              </div>
            ) : (
              filtered.map((a, i) => {
                const sc = statusCfg(a.status);
                const isChecked = checked.includes(i);
                return (
                  <div
                    key={i}
                    className={`tbl-row${isChecked ? " row-checked" : ""}`}
                    style={{ animationDelay:`${i*40}ms` }}
                    onClick={() => setSelected(a)}
                  >
                    {/* Checkbox */}
                    <div onClick={e => e.stopPropagation()}>
                      <input type="checkbox" className="cb" checked={isChecked} onChange={() => toggleOne(i)} />
                    </div>

                    {/* Token */}
                    <div className="cell-token">{a.tokenId || "—"}</div>

                    {/* Purpose */}
                    <div className="cell-purpose" title={a.purpose}>
                      {a.purpose?.length > 55 ? a.purpose.slice(0,55)+"…" : a.purpose || "—"}
                    </div>

                    {/* Date */}
                    <div className="cell-date">{formatShort(a.preferredDate)}</div>

                    {/* Slot */}
                    <div>
                      <span className="cell-slot">{a.slotTime || "—"}</span>
                    </div>

                    {/* Status */}
                    <div>
                      <span
                        className="status-badge"
                        style={{ background:sc.bg, color:sc.color, border:`1px solid ${sc.border}` }}
                      >{sc.label}</span>
                    </div>

                    {/* Actions */}
                    <div onClick={e => e.stopPropagation()}>
                      <ActionMenu appt={a} onView={setSelected} />
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Row count */}
          {!loading && filtered.length > 0 && (
            <div style={{ marginTop:12, fontSize:12, color:"#94a3b8", paddingLeft:4 }}>
              Showing {filtered.length} appointment{filtered.length !== 1 ? "s" : ""}
              {checked.length > 0 && <span style={{ color:"#16a34a", fontWeight:600 }}> · {checked.length} selected</span>}
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <p style={{ margin:0, fontSize:10, opacity:.6, textTransform:"uppercase", letterSpacing:1 }}>Appointment Details</p>
                <h3 style={{ margin:"4px 0 0", fontSize:18, fontWeight:800, fontFamily:"'Syne',sans-serif" }}>{selected.tokenId}</h3>
              </div>
              <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            </div>
            <div className="modal-body">
              {/* Visitor photo */}
              {selected.visitorPhoto && (
                <div style={{ textAlign:"center", marginBottom:20 }}>
                  <img
                    src={selected.visitorPhoto.startsWith("http") ? selected.visitorPhoto : `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/${selected.visitorPhoto}`}
                    alt="visitor"
                    style={{ width:90, height:90, borderRadius:"50%", objectFit:"cover", border:"3px solid #16a34a" }}
                  />
                </div>
              )}

              {/* Status badge */}
              {(() => { const sc = statusCfg(selected.status); return (
                <div style={{ textAlign:"center", marginBottom:16 }}>
                  <span style={{ padding:"6px 20px", borderRadius:20, fontSize:13, fontWeight:700, background:sc.bg, color:sc.color, border:`1px solid ${sc.border}` }}>{sc.label}</span>
                </div>
              );})()}

              {[
                ["Name",            selected.fullName],
                ["Mobile",          selected.mobileNumber],
                ["Email",           selected.email || "—"],
                ["Address",         selected.address || "—"],
                ["Date",            formatDate(selected.preferredDate)],
                ["Slot",            selected.slotTime],
                ["Purpose",         selected.purpose],
                ["Visitors",        selected.numberOfVisitors],
                ["Visited Before",  selected.visitedBefore ? "Yes" : "No"],
                ["Ward",            selected.ward || "—"],
                ["Booked On",       formatCreated(selected.createdAt)],
              ].map(([k,v]) => v ? (
                <div key={k} className="modal-row">
                  <span className="modal-key">{k}</span>
                  <span className="modal-val">{v}</span>
                </div>
              ) : null)}

              {selected.adminNote && (
                <div style={{ background:"#fef9c3", border:"1px solid #fde68a", borderRadius:8, padding:"10px 14px", marginTop:12, fontSize:13, color:"#92400e" }}>
                  <strong>Admin Note:</strong> {selected.adminNote}
                </div>
              )}

              {/* QR Code */}
              {selected.qrCode && (
                <div style={{ textAlign:"center", marginTop:20, paddingTop:16, borderTop:"1px solid #f1f5f9" }}>
                  <p style={{ fontSize:12, color:"#94a3b8", marginBottom:8 }}>QR Code — भेटीच्या दिवशी दाखवा</p>
                  <img src={selected.qrCode} alt="QR" style={{ width:130, height:130 }} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}