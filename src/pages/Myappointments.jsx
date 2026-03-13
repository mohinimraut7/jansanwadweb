import React, { useState, useEffect } from "react";
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

export default function MyAppointments() {
  const navigate    = useNavigate();
  const citizen     = (() => { try { return JSON.parse(localStorage.getItem("citizenUser")||"null"); } catch { return null; } })();
  const [appts, setAppts]       = useState([]);
  const [loading, setLoading]   = useState(true);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter]     = useState("all");

  useEffect(() => {
    if (!citizen) { navigate("/login"); return; }
    fetchAppts();
  }, []);

  const fetchAppts = async () => {
    try {
      setLoading(true);
      const res = await citizenAxios.get("/api/citizen/my-appointments", {
        params: { mobileNumber: citizen.mobileNumber },
      });
      if (res.data.success) setAppts(res.data.appointments || []);
    } catch (e) { /* silent */ }
    finally { setLoading(false); }
  };

  const filtered = filter === "all" ? appts : appts.filter(a => a.status === filter);

  const statusCfg = (s) => STATUS_CFG[s?.toLowerCase()] || STATUS_CFG.pending;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
        .ma-root { min-height:calc(100vh - 64px); background:#f0fdf4; padding:36px 16px; font-family:'DM Sans',sans-serif; }
        .ma-inner { max-width:900px; margin:0 auto; }
        .ma-header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:28px; flex-wrap:wrap; gap:14px; }
        .ma-title { font-family:'Crimson Pro',serif; font-size:30px; font-weight:800; color:#1a4a2e; margin:0 0 4px; }
        .ma-sub { font-size:14px; color:#6b7280; margin:0; }
        .ma-book-btn { padding:12px 28px; border-radius:10px; border:none; background:#16a34a; color:#fff; font-weight:700; font-size:14px; cursor:pointer; box-shadow:0 4px 14px rgba(22,163,74,0.3); transition:all .2s; font-family:'DM Sans',sans-serif; }
        .ma-book-btn:hover { background:#15803d; transform:translateY(-1px); }

        /* Filter tabs */
        .filter-tabs { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:24px; }
        .ftab { padding:7px 18px; border-radius:20px; border:1.5px solid #d1d5db; background:#fff; font-size:13px; font-weight:600; cursor:pointer; transition:all .15s; font-family:'DM Sans',sans-serif; color:#374151; }
        .ftab:hover { border-color:#16a34a; color:#16a34a; }
        .ftab.active { background:#16a34a; border-color:#16a34a; color:#fff; }

        /* Appointment cards */
        .appt-list { display:flex; flex-direction:column; gap:14px; }
        .appt-card { background:#fff; border-radius:14px; padding:20px 24px; border:1px solid #e5e7eb; box-shadow:0 2px 8px rgba(0,0,0,0.05); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; cursor:pointer; transition:box-shadow .2s,transform .15s; }
        .appt-card:hover { box-shadow:0 6px 20px rgba(0,0,0,0.1); transform:translateY(-2px); }
        .appt-token { font-size:15px; font-weight:800; color:#1a4a2e; margin:0 0 4px; }
        .appt-meta { font-size:13px; color:#6b7280; margin:0; line-height:1.6; }
        .appt-right { display:flex; align-items:center; gap:10px; }
        .status-badge { padding:5px 14px; border-radius:20px; font-size:12px; font-weight:700; }
        .view-btn { padding:7px 18px; border-radius:8px; border:1.5px solid #16a34a; background:#fff; color:#16a34a; font-size:13px; font-weight:700; cursor:pointer; transition:all .15s; font-family:'DM Sans',sans-serif; }
        .view-btn:hover { background:#f0fdf4; }

        /* Empty */
        .empty-box { background:#fff; border-radius:16px; padding:60px 32px; text-align:center; border:1px solid #e5e7eb; }

        /* Modal */
        .modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.5); z-index:999; display:flex; align-items:center; justify-content:center; padding:16px; }
        .modal-card { background:#fff; border-radius:20px; width:100%; max-width:500px; max-height:90vh; overflow:auto; box-shadow:0 20px 60px rgba(0,0,0,0.3); }
        .modal-header { background:linear-gradient(135deg,#1a4a2e,#16a34a); padding:20px 24px; color:#fff; border-radius:20px 20px 0 0; display:flex; justify-content:space-between; align-items:center; }
        .modal-close { background:rgba(255,255,255,0.2); border:none; color:#fff; width:32px; height:32px; border-radius:50%; cursor:pointer; font-size:16px; font-weight:700; display:flex; align-items:center; justify-content:center; }
        .modal-close:hover { background:rgba(255,255,255,0.3); }
        .modal-body { padding:24px; }
        .modal-row { display:flex; justify-content:space-between; padding:9px 0; border-bottom:1px solid #f3f4f6; font-size:14px; }
        .modal-row:last-child { border-bottom:none; }
        .modal-key { color:#6b7280; font-weight:500; }
        .modal-val { color:#111827; font-weight:700; text-align:right; max-width:60%; word-break:break-word; }

        /* Loading */
        @keyframes spin { to{transform:rotate(360deg)} }
      `}</style>

      <div className="ma-root">
        <div className="ma-inner">
          {/* Header */}
          <div className="ma-header">
            <div>
              <h1 className="ma-title">My Appointments</h1>
              <p className="ma-sub">नमस्कार, {citizen?.fullName} 👋 — तुमच्या सर्व appointments येथे आहेत</p>
            </div>
            <button className="ma-book-btn" onClick={() => navigate("/book-appointment")}>+ New Appointment</button>
          </div>

          {/* Filter tabs */}
          <div className="filter-tabs">
            {[
              { key:"all",      label:`सर्व (${appts.length})` },
              { key:"pending",  label:`Pending (${appts.filter(a=>a.status==="pending").length})`  },
              { key:"approved", label:`Approved (${appts.filter(a=>a.status==="approved").length})` },
              { key:"rejected", label:`Rejected (${appts.filter(a=>a.status==="rejected").length})` },
              { key:"expired",  label:`Expired (${appts.filter(a=>a.status==="expired").length})`  },
            ].map(t => (
              <button key={t.key} className={`ftab${filter===t.key?" active":""}`} onClick={() => setFilter(t.key)}>{t.label}</button>
            ))}
          </div>

          {/* List */}
          {loading ? (
            <div style={{ textAlign:"center", padding:60 }}>
              <div style={{ width:36, height:36, border:"3px solid #e5e7eb", borderTopColor:"#16a34a", borderRadius:"50%", animation:"spin .8s linear infinite", margin:"0 auto 12px" }} />
              <p style={{ color:"#9ca3af" }}>Loading...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="empty-box">
              <div style={{ fontSize:48, marginBottom:12 }}>📅</div>
              <p style={{ color:"#374151", fontWeight:700, fontSize:16, margin:"0 0 8px" }}>
                {filter==="all" ? "कोणतेही appointments नाहीत" : `${filter} appointments नाहीत`}
              </p>
              {filter==="all" && (
                <button className="ma-book-btn" style={{ marginTop:16 }} onClick={() => navigate("/book-appointment")}>
                  पहिले Appointment Book करा
                </button>
              )}
            </div>
          ) : (
            <div className="appt-list">
              {filtered.map((a, i) => {
                const sc = statusCfg(a.status);
                return (
                  <div key={i} className="appt-card" onClick={() => setSelected(a)}>
                    <div>
                      <p className="appt-token">{a.tokenId || "—"}</p>
                      <p className="appt-meta">
                        📅 {formatShort(a.preferredDate)} &nbsp;·&nbsp; ⏰ {a.slotTime || "—"}<br />
                        📝 {a.purpose?.length > 60 ? a.purpose.slice(0,60)+"..." : a.purpose}
                      </p>
                    </div>
                    <div className="appt-right">
                      <span className="status-badge" style={{ background:sc.bg, color:sc.color, border:`1px solid ${sc.border}` }}>{sc.label}</span>
                      <button className="view-btn" onClick={e => { e.stopPropagation(); setSelected(a); }}>View</button>
                    </div>
                  </div>
                );
              })}
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
                <p style={{ margin:0, fontSize:11, opacity:.7, textTransform:"uppercase", letterSpacing:.5 }}>Appointment Details</p>
                <h3 style={{ margin:"4px 0 0", fontSize:18, fontWeight:800 }}>{selected.tokenId}</h3>
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
                <div style={{ textAlign:"center", marginTop:20, paddingTop:16, borderTop:"1px solid #f3f4f6" }}>
                  <p style={{ fontSize:12, color:"#6b7280", marginBottom:8 }}>QR Code — भेटीच्या दिवशी दाखवा</p>
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