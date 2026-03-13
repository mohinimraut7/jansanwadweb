import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import citizenAxios from "../services/citizenAxios";

const STEPS = [
  { label:"Personal Info", icon:"👤" },
  { label:"Appointment",   icon:"📅" },
  { label:"Details",       icon:"ℹ️"  },
  { label:"Photo",         icon:"📷" },
  { label:"Review",        icon:"📋" },
];

function formatShortDate(d) {
  if (!d) return "—";
  return new Date(d + "T00:00:00").toLocaleDateString("en-IN", { weekday:"short", day:"numeric", month:"short", year:"numeric" });
}

export default function BookAppointment() {
  const navigate = useNavigate();
  const citizen  = (() => { try { return JSON.parse(localStorage.getItem("citizenUser")||"null"); } catch { return null; } })();

  const [step, setStep]           = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [availability, setAvail]  = useState([]);
  const [toast, setToast]         = useState(null);
  const [booked, setBooked]       = useState(null);

  const showToast = (msg, type="success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const [form, setForm] = useState({
    fullName:         citizen?.fullName     || "",
    mobileNumber:     citizen?.mobileNumber || "",
    email:            citizen?.email        || "",
    address:          "",
    pincode:          "",
    preferredDate:    "",
    slotTime:         "",
    slotStart:        "",
    slotEnd:          "",
    purpose:          "",
    numberOfVisitors: "1",
    visitedBefore:    false,
    ward:             "",
    visitorPhoto:     null,
    photoPreview:     null,
  });

  const ch = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }));

  useEffect(() => {
    citizenAxios.get("/api/availability/get")
      .then(r => { if (r.data) setAvail(Array.isArray(r.data) ? r.data : r.data.data || []); })
      .catch(() => {});
  }, []);

  // Camera
  const videoRef  = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const [showCam, setShowCam] = useState(false);
  const [camErr,  setCamErr]  = useState("");

  const startCam = async () => {
    setCamErr("");
    try {
      const s = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = s;
      setShowCam(true);
      setTimeout(() => { if (videoRef.current) { videoRef.current.srcObject = s; videoRef.current.play(); } }, 100);
    } catch { setCamErr("Camera access denied. Browser permission द्या."); }
  };
  const capturePic = () => {
    const v = videoRef.current, c = canvasRef.current;
    if (!v||!c) return;
    c.width = v.videoWidth; c.height = v.videoHeight;
    c.getContext("2d").drawImage(v, 0, 0);
    c.toBlob(blob => {
      const file    = new File([blob], `photo-${Date.now()}.jpg`, { type:"image/jpeg" });
      const preview = URL.createObjectURL(blob);
      setForm(p => ({ ...p, visitorPhoto:file, photoPreview:preview }));
      stopCam();
    }, "image/jpeg");
  };
  const stopCam = () => {
    if (streamRef.current) { streamRef.current.getTracks().forEach(t => t.stop()); streamRef.current = null; }
    setShowCam(false);
  };

  // Today's date for filtering past dates
  const today = new Date().toISOString().split("T")[0];
  const futureAvail = availability.filter(a => a.date >= today);

  const selectedRecord  = futureAvail.find(a => a.date === form.preferredDate);
  const availableSlots  = selectedRecord?.timeSlots || [];

  const nextDisabled = (() => {
    if (step===0) return !form.fullName || !form.mobileNumber || !form.address;
    if (step===1) return !form.preferredDate || !form.slotTime;
    if (step===2) return !form.purpose || !form.ward;
    if (step===3) return !form.visitorPhoto;
    return false;
  })();

  const handleSubmit = async () => {
    if (!citizen) { navigate("/login"); return; }
    try {
      setSubmitting(true);
      const fd = new FormData();
      fd.append("citizenId",        citizen._id          || "");
      fd.append("fullName",         form.fullName);
      fd.append("mobileNumber",     form.mobileNumber);
      fd.append("email",            form.email           || "");
      fd.append("address",          form.address);
      fd.append("pincode",          form.pincode         || "");
      fd.append("preferredDate",    form.preferredDate);
      fd.append("slotTime",         form.slotTime);
      fd.append("purpose",          form.purpose);
      fd.append("numberOfVisitors", form.numberOfVisitors);
      fd.append("visitedBefore",    String(form.visitedBefore));
      fd.append("ward",             form.ward);
      fd.append("submittedById",    citizen._id          || "");
      fd.append("submittedByName",  citizen.fullName     || "");
      if (form.visitorPhoto) fd.append("visitorPhoto", form.visitorPhoto);

      const res = await citizenAxios.post("/api/citizen/book-appointment", fd, {
        // headers: { "Content-Type": "multipart/form-data" },
        headers: { "Content-Type": undefined },
      });
      if (!res.data.success) { showToast(res.data.message || "Booking failed ❌","error"); return; }
      setBooked(res.data.data);
    } catch(e) {
      showToast(e?.response?.data?.message || "Server Error ❌","error");
    } finally { setSubmitting(false); }
  };

  // ── Success screen ──
  if (booked) {
    return (
      <>
        <style>{`
          .book-root { min-height:calc(100vh - 64px); background:#f0fdf4; display:flex; align-items:center; justify-content:center; padding:32px 16px; font-family:'DM Sans',sans-serif; }
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        `}</style>
        <div className="book-root">
          <div style={{ background:"#fff", borderRadius:20, padding:"48px 40px", maxWidth:480, width:"100%", textAlign:"center", boxShadow:"0 8px 40px rgba(0,0,0,0.1)" }}>
            <div style={{ width:80, height:80, borderRadius:"50%", background:"#dcfce7", display:"flex", alignItems:"center", justifyContent:"center", fontSize:40, margin:"0 auto 20px" }}>✅</div>
            <h2 style={{ fontSize:24, fontWeight:800, color:"#166534", marginBottom:8 }}>Appointment Booked!</h2>
            <p style={{ color:"#6b7280", marginBottom:24 }}>तुमची appointment successfully book झाली आहे</p>
            <div style={{ background:"#f0fdf4", border:"1px solid #bbf7d0", borderRadius:12, padding:"20px 24px", marginBottom:24, textAlign:"left" }}>
              {[
                ["Token ID",  booked.tokenId],
                ["Date",      formatShortDate(booked.preferredDate)],
                ["Slot",      booked.slotTime],
                ["Status",    "⏳ Pending — Admin approval बाकी आहे"],
              ].map(([k,v]) => (
                <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"7px 0", borderBottom:"1px solid #dcfce7", fontSize:14 }}>
                  <span style={{ color:"#6b7280" }}>{k}</span>
                  <span style={{ color:"#166534", fontWeight:700 }}>{v}</span>
                </div>
              ))}
            </div>
            {booked.qrCode && (
              <div style={{ marginBottom:20 }}>
                <p style={{ fontSize:12, color:"#6b7280", marginBottom:8 }}>QR Code — भेटीच्या दिवशी दाखवा</p>
                <img src={booked.qrCode} alt="QR" style={{ width:130, height:130 }} />
              </div>
            )}
            <button onClick={() => navigate("/my-appointments")} style={{ width:"100%", padding:"12px", borderRadius:8, border:"none", background:"#16a34a", color:"#fff", fontWeight:700, fontSize:15, cursor:"pointer" }}>
              📋 My Appointments बघा
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
        .book-root { min-height:calc(100vh - 64px); background:#f0fdf4; padding:32px 16px; font-family:'DM Sans',sans-serif; }
        .book-card { background:#fff; border-radius:20px; box-shadow:0 8px 40px rgba(0,0,0,0.1); overflow:hidden; max-width:780px; margin:0 auto; }
        .book-top { background:linear-gradient(135deg,#1a4a2e,#16a34a); padding:28px 32px; color:#fff; text-align:center; }
        .book-top h2 { font-family:'Crimson Pro',serif; font-size:22px; font-weight:800; margin:0 0 4px; }
        .book-top p { font-size:13px; color:#bbf7d0; margin:0; }

        /* Stepper */
        .stepper { display:flex; align-items:center; justify-content:center; padding:28px 20px 20px; flex-wrap:wrap; gap:4px; }
        .step-item { display:flex; flex-direction:column; align-items:center; gap:5px; min-width:72px; }
        .step-circle { width:42px; height:42px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:17px; font-weight:700; transition:all .3s; }
        .step-circle.done   { background:#16a34a; color:#fff; }
        .step-circle.active { background:#16a34a; color:#fff; box-shadow:0 0 0 4px #bbf7d0; }
        .step-circle.pending{ background:#f3f4f6; color:#9ca3af; }
        .step-label { font-size:11px; font-weight:600; text-align:center; line-height:1.3; }
        .step-label.done,.step-label.active { color:#16a34a; }
        .step-label.pending { color:#9ca3af; }
        .step-line { flex:1; height:3px; min-width:16px; max-width:52px; border-radius:2px; margin:0 2px 20px; transition:background .3s; }
        .step-line.done { background:#16a34a; }
        .step-line.pending { background:#e5e7eb; }

        /* Content */
        .book-body { padding:8px 32px 0; }
        .step-head { text-align:center; margin-bottom:28px; }
        .step-head h3 { font-family:'Crimson Pro',serif; font-size:22px; font-weight:800; color:#1a4a2e; margin:0 0 4px; }
        .step-head p  { font-size:13px; color:#6b7280; margin:0; }

        /* Fields */
        .field { margin-bottom:18px; }
        .field label { display:block; font-size:12px; font-weight:600; color:#374151; text-transform:uppercase; letter-spacing:.5px; margin-bottom:6px; }
        .field label span { color:#ef4444; }
        .f-input { width:100%; padding:11px 14px; font-size:14px; border:1.5px solid #d1d5db; border-radius:8px; outline:none; font-family:'DM Sans',sans-serif; box-sizing:border-box; transition:border-color .15s; background:#f9fafb; }
        .f-input:focus { border-color:#16a34a; background:#fff; }
        .f-grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:0 20px; }
        @media(max-width:540px){ .f-grid-2{ grid-template-columns:1fr; } }

        /* Date / Slot buttons */
        .date-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(150px,1fr)); gap:10px; }
        .date-btn { padding:12px 10px; border-radius:10px; cursor:pointer; font-weight:600; font-size:13px; border:2px solid #d1d5db; background:#fff; color:#374151; transition:all .15s; text-align:center; font-family:'DM Sans',sans-serif; }
        .date-btn:hover { border-color:#16a34a; }
        .date-btn.sel { border-color:#16a34a; background:#f0fdf4; color:#166534; }
        .date-btn .sub { font-size:11px; color:#9ca3af; font-weight:400; margin-top:2px; }
        .slot-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(130px,1fr)); gap:10px; }
        .slot-btn { padding:12px 10px; border-radius:10px; cursor:pointer; font-weight:600; font-size:13px; border:2px solid #d1d5db; background:#fff; color:#374151; transition:all .15s; font-family:'DM Sans',sans-serif; }
        .slot-btn:hover { border-color:#16a34a; }
        .slot-btn.sel { border-color:#16a34a; background:#f0fdf4; color:#166534; }

        /* Info box */
        .info-box { background:#eff6ff; border:1px solid #bfdbfe; border-radius:10px; padding:14px 18px; margin-bottom:16px; font-size:13px; color:#1e40af; }
        .selected-box { background:#f0fdf4; border:1px solid #bbf7d0; border-radius:10px; padding:14px 18px; margin-bottom:16px; font-weight:700; color:#166534; font-size:14px; }
        .empty-box { background:#fef9c3; border:1px solid #fde68a; border-radius:10px; padding:28px; text-align:center; }

        /* Review grid */
        .review-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        @media(max-width:540px){ .review-grid{ grid-template-columns:1fr; } }
        .review-card { background:#f8fafc; border:1px solid #dcfce7; border-radius:12px; padding:16px 18px; }
        .review-card-title { font-size:11px; font-weight:700; color:#1a4a2e; text-transform:uppercase; letter-spacing:.5px; margin-bottom:10px; }
        .review-row { display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px solid #e5e7eb; font-size:13px; }
        .review-row:last-child { border-bottom:none; }
        .review-key { color:#6b7280; }
        .review-val { color:#111827; font-weight:600; text-align:right; max-width:55%; word-break:break-word; }

        /* Nav */
        .book-nav { display:flex; justify-content:space-between; padding:20px 32px 28px; border-top:1px solid #f3f4f6; margin-top:12px; }
        .nav-prev { padding:10px 24px; border-radius:8px; border:1.5px solid #d1d5db; background:#fff; color:#374151; font-weight:600; font-size:14px; cursor:pointer; font-family:'DM Sans',sans-serif; }
        .nav-prev:hover { background:#f9fafb; }
        .nav-next { padding:10px 28px; border-radius:8px; border:none; background:#16a34a; color:#fff; font-weight:700; font-size:14px; cursor:pointer; font-family:'DM Sans',sans-serif; box-shadow:0 4px 12px rgba(22,163,74,0.3); }
        .nav-next:hover:not(:disabled) { background:#15803d; }
        .nav-next:disabled { background:#d1d5db; cursor:not-allowed; box-shadow:none; }

        /* Toast */
        .toast { position:fixed; top:80px; right:20px; z-index:9999; padding:12px 22px; border-radius:10px; font-weight:600; font-size:14px; color:#fff; box-shadow:0 4px 20px rgba(0,0,0,0.18); animation:fadeIn .3s; }
        @keyframes fadeIn { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:none} }
      `}</style>

      {toast && <div className="toast" style={{ background: toast.type==="success" ? "#16a34a" : "#dc2626" }}>{toast.msg}</div>}

      <div className="book-root">
        <div className="book-card">
          {/* Header */}
          <div className="book-top">
            <h2>Mayor भेटीसाठी Appointment Book करा</h2>
            <p>वसई-विरार शहर महानगरपालिका</p>
          </div>

          {/* Stepper */}
          <div className="stepper">
            {STEPS.map((s, i) => {
              const state = i < step ? "done" : i === step ? "active" : "pending";
              return (
                <React.Fragment key={i}>
                  <div className="step-item">
                    <div className={`step-circle ${state}`}>{state === "done" ? "✓" : s.icon}</div>
                    <span className={`step-label ${state}`}>{s.label}</span>
                  </div>
                  {i < STEPS.length-1 && <div className={`step-line ${i < step ? "done" : "pending"}`} />}
                </React.Fragment>
              );
            })}
          </div>

          {/* Body */}
          <div className="book-body">

            {/* ── Step 0: Personal Info ── */}
            {step===0 && (
              <div>
                <div className="step-head"><h3>Personal Information</h3><p>Please provide your basic details</p></div>
                <div className="f-grid-2">
                  <div className="field"><label>Full Name <span>*</span></label><input className="f-input" value={form.fullName} onChange={ch("fullName")} placeholder="आपले पूर्ण नाव" /></div>
                  <div className="field"><label>Mobile Number <span>*</span></label><input className="f-input" type="tel" value={form.mobileNumber} onChange={ch("mobileNumber")} maxLength={10} placeholder="10 digit mobile" /></div>
                  <div className="field"><label>Email Address</label><input className="f-input" type="email" value={form.email} onChange={ch("email")} placeholder="Email (optional)" /></div>
                  <div className="field"><label>Pincode</label><input className="f-input" value={form.pincode} onChange={ch("pincode")} maxLength={6} placeholder="Pincode" /></div>
                </div>
                <div className="field"><label>Address <span>*</span></label><textarea className="f-input" rows={3} value={form.address} onChange={ch("address")} placeholder="पूर्ण पत्ता" style={{ resize:"vertical" }} /></div>
              </div>
            )}

            {/* ── Step 1: Appointment ── */}
            {step===1 && (
              <div>
                <div className="step-head"><h3>Appointment Details</h3><p>Select your preferred appointment date</p></div>
                {futureAvail.length === 0 ? (
                  <div className="empty-box">
                    <div style={{ fontSize:36, marginBottom:8 }}>📅</div>
                    <p style={{ color:"#92400e", fontWeight:600, margin:"0 0 4px" }}>सध्या कोणत्याही dates available नाहीत</p>
                    <p style={{ color:"#a16207", fontSize:13, margin:0 }}>Admin कडून availability add होण्याची वाट पाहा</p>
                  </div>
                ) : (
                  <>
                    <div className="field">
                      <label>Available Dates <span>*</span></label>
                      <div className="date-grid">
                        {futureAvail.map((av, i) => (
                          <button key={i} type="button"
                            className={`date-btn${form.preferredDate===av.date?" sel":""}`}
                            onClick={() => setForm(p => ({ ...p, preferredDate:av.date, slotTime:"", slotStart:"", slotEnd:"" }))}>
                            📅 {formatShortDate(av.date)}
                            <div className="sub">{av.timeSlots?.length} slot{av.timeSlots?.length!==1?"s":""}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {form.preferredDate && (
                      <div className="field">
                        <label>Select Time Slot <span>*</span></label>
                        <div className="slot-grid">
                          {availableSlots.map((slot, i) => {
                            const str = `${slot.start} - ${slot.end}`;
                            return (
                              <button key={i} type="button"
                                className={`slot-btn${form.slotTime===str?" sel":""}`}
                                onClick={() => setForm(p => ({ ...p, slotTime:str, slotStart:slot.start, slotEnd:slot.end }))}>
                                ⏰ {str}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {form.preferredDate && form.slotTime && (
                      <div className="selected-box">✅ Selected: {formatShortDate(form.preferredDate)} — {form.slotTime}</div>
                    )}
                  </>
                )}
                <div className="info-box">
                  ℹ️ <strong>Date निवडण्यासाठी:</strong> वरील available dates मधून date निवडा → नंतर time slot निवडा
                </div>
              </div>
            )}

            {/* ── Step 2: Details ── */}
            {step===2 && (
              <div>
                <div className="step-head"><h3>Additional Information</h3><p>Provide additional details</p></div>
                <div className="field"><label>Reason for Visit <span>*</span></label><textarea className="f-input" rows={4} value={form.purpose} onChange={ch("purpose")} placeholder="Mayor ला भेटण्याचे कारण विस्ताराने लिहा" style={{ resize:"vertical" }} /></div>
                <div className="f-grid-2">
                  <div className="field"><label>Number of Visitors <span>*</span></label><input className="f-input" type="number" min="1" max="10" value={form.numberOfVisitors} onChange={ch("numberOfVisitors")} /></div>
                  <div className="field">
                    <label>Ward <span>*</span></label>
                    <select className="f-input" value={form.ward} onChange={ch("ward")} style={{ cursor:"pointer" }}>
                      <option value="">Select Ward</option>
                      {["Ward A","Ward B","Ward C","Ward D","Ward E","Ward F","Ward G","Ward H","Ward I","Ward J"].map(w => <option key={w}>{w}</option>)}
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label>Have you visited before? <span>*</span></label>
                  <div style={{ display:"flex", gap:24, marginTop:4 }}>
                    {["No","Yes"].map(v => (
                      <label key={v} style={{ display:"flex", alignItems:"center", gap:8, cursor:"pointer", fontSize:14, fontWeight:600, color:"#374151" }}>
                        <input type="radio" name="vb" value={v} checked={form.visitedBefore===(v==="Yes")} onChange={() => setForm(p=>({...p,visitedBefore:v==="Yes"}))} style={{ accentColor:"#16a34a", width:16, height:16 }} />
                        {v}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── Step 3: Photo ── */}
            {step===3 && (
              <div>
                <div className="step-head"><h3>Upload or Capture Photo</h3><p>Please upload or capture a clear photo for identification</p></div>
                <div style={{ display:"flex", gap:12, justifyContent:"center", marginBottom:20 }}>
                  <label style={{ padding:"10px 24px", borderRadius:8, background:"#16a34a", color:"#fff", fontWeight:700, fontSize:14, cursor:"pointer" }}>
                    📁 Upload Photo
                    <input type="file" accept="image/*" style={{ display:"none" }} onChange={e => { const f=e.target.files[0]; if(f) setForm(p=>({...p,visitorPhoto:f,photoPreview:URL.createObjectURL(f)})); }} />
                  </label>
                  <button type="button" onClick={startCam} style={{ padding:"10px 24px", borderRadius:8, border:"2px solid #16a34a", background:"#fff", color:"#16a34a", fontWeight:700, fontSize:14, cursor:"pointer" }}>
                    📷 Use Webcam
                  </button>
                </div>

                {showCam ? (
                  <div style={{ position:"relative", borderRadius:12, overflow:"hidden", border:"2px solid #16a34a", marginBottom:16 }}>
                    <button type="button" onClick={stopCam} style={{ position:"absolute", top:10, right:10, zIndex:10, width:32, height:32, borderRadius:"50%", background:"#ef4444", color:"#fff", border:"none", cursor:"pointer", fontWeight:700 }}>✕</button>
                    <video ref={videoRef} autoPlay playsInline style={{ width:"100%", maxHeight:340, objectFit:"cover", display:"block" }} />
                    <canvas ref={canvasRef} style={{ display:"none" }} />
                    <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:16, background:"linear-gradient(transparent,rgba(0,0,0,0.6))", display:"flex", justifyContent:"center" }}>
                      <button type="button" onClick={capturePic} style={{ padding:"10px 28px", borderRadius:8, border:"none", background:"#22c55e", color:"#fff", fontWeight:700, fontSize:14, cursor:"pointer" }}>📸 Capture Photo</button>
                    </div>
                  </div>
                ) : (
                  <div style={{ border:"2px dashed #bbf7d0", borderRadius:12, padding:24, textAlign:"center", background:"#f0fdf4", marginBottom:16 }}>
                    {form.photoPreview ? (
                      <>
                        <img src={form.photoPreview} alt="preview" style={{ width:110, height:110, borderRadius:"50%", objectFit:"cover", border:"3px solid #16a34a", marginBottom:10 }} />
                        <p style={{ color:"#16a34a", fontWeight:600, fontSize:14, margin:"0 0 4px" }}>✅ Photo selected</p>
                        <p style={{ color:"#6b7280", fontSize:12, margin:0 }}>Click "Upload Photo" to change</p>
                      </>
                    ) : (
                      <>
                        <div style={{ fontSize:40, marginBottom:8 }}>📷</div>
                        <p style={{ color:"#6b7280", fontSize:14, margin:0 }}>Upload किंवा camera वापरून photo द्या</p>
                      </>
                    )}
                  </div>
                )}
                {camErr && <p style={{ color:"#ef4444", fontSize:12, marginTop:4 }}>{camErr}</p>}
              </div>
            )}

            {/* ── Step 4: Review ── */}
            {step===4 && (
              <div>
                <div className="step-head"><h3>Review & Submit</h3><p>सर्व माहिती verify करा आणि submit करा</p></div>
                <div className="review-grid">
                  {[
                    { title:"Personal Info", rows:[["Name",form.fullName],["Mobile",form.mobileNumber],["Email",form.email||"—"],["Address",form.address],["Pincode",form.pincode||"—"]] },
                    { title:"Appointment",   rows:[["Date",formatShortDate(form.preferredDate)],["Slot",form.slotTime]] },
                    { title:"Details",       rows:[["Purpose",form.purpose],["Visitors",form.numberOfVisitors],["Visited Before",form.visitedBefore?"Yes":"No"],["Ward",form.ward]] },
                  ].map((sec,i) => (
                    <div key={i} className="review-card">
                      <div className="review-card-title">{sec.title}</div>
                      {sec.rows.map(([k,v]) => <div key={k} className="review-row"><span className="review-key">{k}</span><span className="review-val">{v}</span></div>)}
                    </div>
                  ))}
                  {form.photoPreview && (
                    <div className="review-card" style={{ textAlign:"center" }}>
                      <div className="review-card-title">Photo</div>
                      <img src={form.photoPreview} alt="v" style={{ width:80, height:80, borderRadius:"50%", objectFit:"cover", border:"3px solid #16a34a" }} />
                    </div>
                  )}
                </div>
                <div style={{ background:"#fef9c3", border:"1px solid #fde68a", borderRadius:10, padding:"12px 18px", margin:"16px 0", fontSize:13, color:"#92400e" }}>
                  ⚠️ Submit केल्यानंतर Admin approval नंतर appointment confirm होईल.
                </div>
              </div>
            )}
          </div>

          {/* Nav buttons */}
          <div className="book-nav">
            {step>0 ? (
              <button className="nav-prev" onClick={() => setStep(s=>s-1)}>← Previous</button>
            ) : <div />}
            {step < STEPS.length-1 ? (
              <button className="nav-next" disabled={nextDisabled} onClick={() => setStep(s=>s+1)}>Next →</button>
            ) : (
              <button className="nav-next" disabled={submitting} onClick={handleSubmit} style={{ background: submitting?"#d1d5db":"#16a34a" }}>
                {submitting ? "Submitting..." : "✔ Submit Appointment"}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}