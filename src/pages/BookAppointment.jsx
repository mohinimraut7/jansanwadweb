// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import citizenAxios from "../services/citizenAxios";

// const STEPS = [
//   { label:"Personal Info", icon:"👤" },
//   { label:"Appointment",   icon:"📅" },
//   { label:"Details",       icon:"ℹ️"  },
//   { label:"Photo",         icon:"📷" },
//   { label:"Review",        icon:"📋" },
// ];

// function formatShortDate(d) {
//   if (!d) return "—";
//   return new Date(d + "T00:00:00").toLocaleDateString("en-IN", { weekday:"short", day:"numeric", month:"short", year:"numeric" });
// }

// export default function BookAppointment() {
//   const navigate = useNavigate();
//   const citizen  = (() => { try { return JSON.parse(localStorage.getItem("citizenUser")||"null"); } catch { return null; } })();

//   const [step, setStep]           = useState(0);
//   const [submitting, setSubmitting] = useState(false);
//   const [availability, setAvail]  = useState([]);
//   const [toast, setToast]         = useState(null);
//   const [booked, setBooked]       = useState(null);

//   const showToast = (msg, type="success") => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 3500);
//   };

//   const [form, setForm] = useState({
//     fullName:         citizen?.fullName     || "",
//     mobileNumber:     citizen?.mobileNumber || "",
//     email:            citizen?.email        || "",
//     address:          "",
//     pincode:          "",
//     preferredDate:    "",
//     slotTime:         "",
//     slotStart:        "",
//     slotEnd:          "",
//     purpose:          "",
//     numberOfVisitors: "1",
//     visitedBefore:    false,
//     ward:             "",
//     visitorPhoto:     null,
//     photoPreview:     null,
//   });

//   const ch = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }));

//   useEffect(() => {
//     citizenAxios.get("/availability/get")
//       .then(r => { if (r.data) setAvail(Array.isArray(r.data) ? r.data : r.data.data || []); })
//       .catch(() => {});
//   }, []);

//   // Camera
//   const videoRef  = useRef(null);
//   const canvasRef = useRef(null);
//   const streamRef = useRef(null);
//   const [showCam, setShowCam] = useState(false);
//   const [camErr,  setCamErr]  = useState("");

//   const startCam = async () => {
//     setCamErr("");
//     try {
//       const s = await navigator.mediaDevices.getUserMedia({ video: true });
//       streamRef.current = s;
//       setShowCam(true);
//       setTimeout(() => { if (videoRef.current) { videoRef.current.srcObject = s; videoRef.current.play(); } }, 100);
//     } catch { setCamErr("Camera access denied. Browser permission द्या."); }
//   };
//   const capturePic = () => {
//     const v = videoRef.current, c = canvasRef.current;
//     if (!v||!c) return;
//     c.width = v.videoWidth; c.height = v.videoHeight;
//     c.getContext("2d").drawImage(v, 0, 0);
//     c.toBlob(blob => {
//       const file    = new File([blob], `photo-${Date.now()}.jpg`, { type:"image/jpeg" });
//       const preview = URL.createObjectURL(blob);
//       setForm(p => ({ ...p, visitorPhoto:file, photoPreview:preview }));
//       stopCam();
//     }, "image/jpeg");
//   };
//   const stopCam = () => {
//     if (streamRef.current) { streamRef.current.getTracks().forEach(t => t.stop()); streamRef.current = null; }
//     setShowCam(false);
//   };

//   // Today's date for filtering past dates
//   const today = new Date().toISOString().split("T")[0];
//   const futureAvail = availability.filter(a => a.date >= today);

//   const selectedRecord  = futureAvail.find(a => a.date === form.preferredDate);
//   const availableSlots  = selectedRecord?.timeSlots || [];

//   const nextDisabled = (() => {
//     if (step===0) return !form.fullName || !form.mobileNumber || !form.address;
//     if (step===1) return !form.preferredDate || !form.slotTime;
//     if (step===2) return !form.purpose || !form.ward;
//     if (step===3) return !form.visitorPhoto;
//     return false;
//   })();

//   const handleSubmit = async () => {
//     if (!citizen) { navigate("/login"); return; }
//     try {
//       setSubmitting(true);
//       const fd = new FormData();
//       fd.append("citizenId",        citizen._id          || "");
//       fd.append("fullName",         form.fullName);
//       fd.append("mobileNumber",     form.mobileNumber);
//       fd.append("email",            form.email           || "");
//       fd.append("address",          form.address);
//       fd.append("pincode",          form.pincode         || "");
//       fd.append("preferredDate",    form.preferredDate);
//       fd.append("slotTime",         form.slotTime);
//       fd.append("purpose",          form.purpose);
//       fd.append("numberOfVisitors", form.numberOfVisitors);
//       fd.append("visitedBefore",    String(form.visitedBefore));
//       fd.append("ward",             form.ward);
//       fd.append("submittedById",    citizen._id          || "");
//       fd.append("submittedByName",  citizen.fullName     || "");
//       if (form.visitorPhoto) fd.append("visitorPhoto", form.visitorPhoto);

//       const res = await citizenAxios.post("/citizen/book-appointment", fd, {
//         // headers: { "Content-Type": "multipart/form-data" },
//         headers: { "Content-Type": undefined },
//       });
//       if (!res.data.success) { showToast(res.data.message || "Booking failed ❌","error"); return; }
//       setBooked(res.data.data);
//     } catch(e) {
//       showToast(e?.response?.data?.message || "Server Error ❌","error");
//     } finally { setSubmitting(false); }
//   };

//   // ── Success screen ──
//   if (booked) {
//     return (
//       <>
//         <style>{`
//           .book-root { min-height:calc(100vh - 64px); background:#f0fdf4; display:flex; align-items:center; justify-content:center; padding:32px 16px; font-family:'DM Sans',sans-serif; }
//           @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
//         `}</style>
//         <div className="book-root">
//           <div style={{ background:"#fff", borderRadius:20, padding:"48px 40px", maxWidth:480, width:"100%", textAlign:"center", boxShadow:"0 8px 40px rgba(0,0,0,0.1)" }}>
//             <div style={{ width:80, height:80, borderRadius:"50%", background:"#dcfce7", display:"flex", alignItems:"center", justifyContent:"center", fontSize:40, margin:"0 auto 20px" }}>✅</div>
//             <h2 style={{ fontSize:24, fontWeight:800, color:"#166534", marginBottom:8 }}>Appointment Booked!</h2>
//             <p style={{ color:"#6b7280", marginBottom:24 }}>तुमची appointment successfully book झाली आहे</p>
//             <div style={{ background:"#f0fdf4", border:"1px solid #bbf7d0", borderRadius:12, padding:"20px 24px", marginBottom:24, textAlign:"left" }}>
//               {[
//                 ["Token ID",  booked.tokenId],
//                 ["Date",      formatShortDate(booked.preferredDate)],
//                 ["Slot",      booked.slotTime],
//                 ["Status",    "⏳ Pending — Admin approval बाकी आहे"],
//               ].map(([k,v]) => (
//                 <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"7px 0", borderBottom:"1px solid #dcfce7", fontSize:14 }}>
//                   <span style={{ color:"#6b7280" }}>{k}</span>
//                   <span style={{ color:"#166534", fontWeight:700 }}>{v}</span>
//                 </div>
//               ))}
//             </div>
//             {booked.qrCode && (
//               <div style={{ marginBottom:20 }}>
//                 <p style={{ fontSize:12, color:"#6b7280", marginBottom:8 }}>QR Code — भेटीच्या दिवशी दाखवा</p>
//                 <img src={booked.qrCode} alt="QR" style={{ width:130, height:130 }} />
//               </div>
//             )}
//             <button onClick={() => navigate("/my-appointments")} style={{ width:"100%", padding:"12px", borderRadius:8, border:"none", background:"#16a34a", color:"#fff", fontWeight:700, fontSize:15, cursor:"pointer" }}>
//               📋 My Appointments बघा
//             </button>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
//         .book-root { min-height:calc(100vh - 64px); background:#f0fdf4; padding:32px 16px; font-family:'DM Sans',sans-serif; }
//         .book-card { background:#fff; border-radius:20px; box-shadow:0 8px 40px rgba(0,0,0,0.1); overflow:hidden; max-width:780px; margin:0 auto; }
//         .book-top { background:linear-gradient(135deg,#1a4a2e,#16a34a); padding:28px 32px; color:#fff; text-align:center; }
//         .book-top h2 { font-family:'Crimson Pro',serif; font-size:22px; font-weight:800; margin:0 0 4px; }
//         .book-top p { font-size:13px; color:#bbf7d0; margin:0; }

//         /* Stepper */
//         .stepper { display:flex; align-items:center; justify-content:center; padding:28px 20px 20px; flex-wrap:wrap; gap:4px; }
//         .step-item { display:flex; flex-direction:column; align-items:center; gap:5px; min-width:72px; }
//         .step-circle { width:42px; height:42px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:17px; font-weight:700; transition:all .3s; }
//         .step-circle.done   { background:#16a34a; color:#fff; }
//         .step-circle.active { background:#16a34a; color:#fff; box-shadow:0 0 0 4px #bbf7d0; }
//         .step-circle.pending{ background:#f3f4f6; color:#9ca3af; }
//         .step-label { font-size:11px; font-weight:600; text-align:center; line-height:1.3; }
//         .step-label.done,.step-label.active { color:#16a34a; }
//         .step-label.pending { color:#9ca3af; }
//         .step-line { flex:1; height:3px; min-width:16px; max-width:52px; border-radius:2px; margin:0 2px 20px; transition:background .3s; }
//         .step-line.done { background:#16a34a; }
//         .step-line.pending { background:#e5e7eb; }

//         /* Content */
//         .book-body { padding:8px 32px 0; }
//         .step-head { text-align:center; margin-bottom:28px; }
//         .step-head h3 { font-family:'Crimson Pro',serif; font-size:22px; font-weight:800; color:#1a4a2e; margin:0 0 4px; }
//         .step-head p  { font-size:13px; color:#6b7280; margin:0; }

//         /* Fields */
//         .field { margin-bottom:18px; }
//         .field label { display:block; font-size:12px; font-weight:600; color:#374151; text-transform:uppercase; letter-spacing:.5px; margin-bottom:6px; }
//         .field label span { color:#ef4444; }
//         .f-input { width:100%; padding:11px 14px; font-size:14px; border:1.5px solid #d1d5db; border-radius:8px; outline:none; font-family:'DM Sans',sans-serif; box-sizing:border-box; transition:border-color .15s; background:#f9fafb; }
//         .f-input:focus { border-color:#16a34a; background:#fff; }
//         .f-grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:0 20px; }
//         @media(max-width:540px){ .f-grid-2{ grid-template-columns:1fr; } }

//         /* Date / Slot buttons */
//         .date-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(150px,1fr)); gap:10px; }
//         .date-btn { padding:12px 10px; border-radius:10px; cursor:pointer; font-weight:600; font-size:13px; border:2px solid #d1d5db; background:#fff; color:#374151; transition:all .15s; text-align:center; font-family:'DM Sans',sans-serif; }
//         .date-btn:hover { border-color:#16a34a; }
//         .date-btn.sel { border-color:#16a34a; background:#f0fdf4; color:#166534; }
//         .date-btn .sub { font-size:11px; color:#9ca3af; font-weight:400; margin-top:2px; }
//         .slot-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(130px,1fr)); gap:10px; }
//         .slot-btn { padding:12px 10px; border-radius:10px; cursor:pointer; font-weight:600; font-size:13px; border:2px solid #d1d5db; background:#fff; color:#374151; transition:all .15s; font-family:'DM Sans',sans-serif; }
//         .slot-btn:hover { border-color:#16a34a; }
//         .slot-btn.sel { border-color:#16a34a; background:#f0fdf4; color:#166534; }

//         /* Info box */
//         .info-box { background:#eff6ff; border:1px solid #bfdbfe; border-radius:10px; padding:14px 18px; margin-bottom:16px; font-size:13px; color:#1e40af; }
//         .selected-box { background:#f0fdf4; border:1px solid #bbf7d0; border-radius:10px; padding:14px 18px; margin-bottom:16px; font-weight:700; color:#166534; font-size:14px; }
//         .empty-box { background:#fef9c3; border:1px solid #fde68a; border-radius:10px; padding:28px; text-align:center; }

//         /* Review grid */
//         .review-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
//         @media(max-width:540px){ .review-grid{ grid-template-columns:1fr; } }
//         .review-card { background:#f8fafc; border:1px solid #dcfce7; border-radius:12px; padding:16px 18px; }
//         .review-card-title { font-size:11px; font-weight:700; color:#1a4a2e; text-transform:uppercase; letter-spacing:.5px; margin-bottom:10px; }
//         .review-row { display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px solid #e5e7eb; font-size:13px; }
//         .review-row:last-child { border-bottom:none; }
//         .review-key { color:#6b7280; }
//         .review-val { color:#111827; font-weight:600; text-align:right; max-width:55%; word-break:break-word; }

//         /* Nav */
//         .book-nav { display:flex; justify-content:space-between; padding:20px 32px 28px; border-top:1px solid #f3f4f6; margin-top:12px; }
//         .nav-prev { padding:10px 24px; border-radius:8px; border:1.5px solid #d1d5db; background:#fff; color:#374151; font-weight:600; font-size:14px; cursor:pointer; font-family:'DM Sans',sans-serif; }
//         .nav-prev:hover { background:#f9fafb; }
//         .nav-next { padding:10px 28px; border-radius:8px; border:none; background:#16a34a; color:#fff; font-weight:700; font-size:14px; cursor:pointer; font-family:'DM Sans',sans-serif; box-shadow:0 4px 12px rgba(22,163,74,0.3); }
//         .nav-next:hover:not(:disabled) { background:#15803d; }
//         .nav-next:disabled { background:#d1d5db; cursor:not-allowed; box-shadow:none; }

//         /* Toast */
//         .toast { position:fixed; top:80px; right:20px; z-index:9999; padding:12px 22px; border-radius:10px; font-weight:600; font-size:14px; color:#fff; box-shadow:0 4px 20px rgba(0,0,0,0.18); animation:fadeIn .3s; }
//         @keyframes fadeIn { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:none} }
//       `}</style>

//       {toast && <div className="toast" style={{ background: toast.type==="success" ? "#16a34a" : "#dc2626" }}>{toast.msg}</div>}

//       <div className="book-root">
//         <div className="book-card">
//           {/* Header */}
//           <div className="book-top">
//             <h2>Mayor भेटीसाठी Appointment Book करा</h2>
//             <p>वसई-विरार शहर महानगरपालिका</p>
//           </div>

//           {/* Stepper */}
//           <div className="stepper">
//             {STEPS.map((s, i) => {
//               const state = i < step ? "done" : i === step ? "active" : "pending";
//               return (
//                 <React.Fragment key={i}>
//                   <div className="step-item">
//                     <div className={`step-circle ${state}`}>{state === "done" ? "✓" : s.icon}</div>
//                     <span className={`step-label ${state}`}>{s.label}</span>
//                   </div>
//                   {i < STEPS.length-1 && <div className={`step-line ${i < step ? "done" : "pending"}`} />}
//                 </React.Fragment>
//               );
//             })}
//           </div>

//           {/* Body */}
//           <div className="book-body">

//             {/* ── Step 0: Personal Info ── */}
//             {step===0 && (
//               <div>
//                 <div className="step-head"><h3>Personal Information</h3><p>Please provide your basic details</p></div>
//                 <div className="f-grid-2">
//                   <div className="field"><label>Full Name <span>*</span></label><input className="f-input" value={form.fullName} onChange={ch("fullName")} placeholder="आपले पूर्ण नाव" /></div>
//                   <div className="field"><label>Mobile Number <span>*</span></label><input className="f-input" type="tel" value={form.mobileNumber} onChange={ch("mobileNumber")} maxLength={10} placeholder="10 digit mobile" /></div>
//                   <div className="field"><label>Email Address</label><input className="f-input" type="email" value={form.email} onChange={ch("email")} placeholder="Email (optional)" /></div>
//                   <div className="field"><label>Pincode</label><input className="f-input" value={form.pincode} onChange={ch("pincode")} maxLength={6} placeholder="Pincode" /></div>
//                 </div>
//                 <div className="field"><label>Address <span>*</span></label><textarea className="f-input" rows={3} value={form.address} onChange={ch("address")} placeholder="पूर्ण पत्ता" style={{ resize:"vertical" }} /></div>
//               </div>
//             )}

//             {/* ── Step 1: Appointment ── */}
//             {step===1 && (
//               <div>
//                 <div className="step-head"><h3>Appointment Details</h3><p>Select your preferred appointment date</p></div>
//                 {futureAvail.length === 0 ? (
//                   <div className="empty-box">
//                     <div style={{ fontSize:36, marginBottom:8 }}>📅</div>
//                     <p style={{ color:"#92400e", fontWeight:600, margin:"0 0 4px" }}>सध्या कोणत्याही dates available नाहीत</p>
//                     <p style={{ color:"#a16207", fontSize:13, margin:0 }}>Admin कडून availability add होण्याची वाट पाहा</p>
//                   </div>
//                 ) : (
//                   <>
//                     <div className="field">
//                       <label>Available Dates <span>*</span></label>
//                       <div className="date-grid">
//                         {futureAvail.map((av, i) => (
//                           <button key={i} type="button"
//                             className={`date-btn${form.preferredDate===av.date?" sel":""}`}
//                             onClick={() => setForm(p => ({ ...p, preferredDate:av.date, slotTime:"", slotStart:"", slotEnd:"" }))}>
//                             📅 {formatShortDate(av.date)}
//                             <div className="sub">{av.timeSlots?.length} slot{av.timeSlots?.length!==1?"s":""}</div>
//                           </button>
//                         ))}
//                       </div>
//                     </div>

//                     {form.preferredDate && (
//                       <div className="field">
//                         <label>Select Time Slot <span>*</span></label>
//                         <div className="slot-grid">
//                           {availableSlots.map((slot, i) => {
//                             const str = `${slot.start} - ${slot.end}`;
//                             return (
//                               <button key={i} type="button"
//                                 className={`slot-btn${form.slotTime===str?" sel":""}`}
//                                 onClick={() => setForm(p => ({ ...p, slotTime:str, slotStart:slot.start, slotEnd:slot.end }))}>
//                                 ⏰ {str}
//                               </button>
//                             );
//                           })}
//                         </div>
//                       </div>
//                     )}

//                     {form.preferredDate && form.slotTime && (
//                       <div className="selected-box">✅ Selected: {formatShortDate(form.preferredDate)} — {form.slotTime}</div>
//                     )}
//                   </>
//                 )}
//                 <div className="info-box">
//                   ℹ️ <strong>Date निवडण्यासाठी:</strong> वरील available dates मधून date निवडा → नंतर time slot निवडा
//                 </div>
//               </div>
//             )}

//             {/* ── Step 2: Details ── */}
//             {step===2 && (
//               <div>
//                 <div className="step-head"><h3>Additional Information</h3><p>Provide additional details</p></div>
//                 <div className="field"><label>Reason for Visit <span>*</span></label><textarea className="f-input" rows={4} value={form.purpose} onChange={ch("purpose")} placeholder="Mayor ला भेटण्याचे कारण विस्ताराने लिहा" style={{ resize:"vertical" }} /></div>
//                 <div className="f-grid-2">
//                   <div className="field"><label>Number of Visitors <span>*</span></label><input className="f-input" type="number" min="1" max="10" value={form.numberOfVisitors} onChange={ch("numberOfVisitors")} /></div>
//                   <div className="field">
//                     <label>Ward <span>*</span></label>
//                     <select className="f-input" value={form.ward} onChange={ch("ward")} style={{ cursor:"pointer" }}>
//                       <option value="">Select Ward</option>
//                       {["Ward A","Ward B","Ward C","Ward D","Ward E","Ward F","Ward G","Ward H","Ward I","Ward J","General"].map(w => <option key={w}>{w}</option>)}
//                     </select>
//                   </div>
//                 </div>
//                 <div className="field">
//                   <label>Have you visited before? <span>*</span></label>
//                   <div style={{ display:"flex", gap:24, marginTop:4 }}>
//                     {["No","Yes"].map(v => (
//                       <label key={v} style={{ display:"flex", alignItems:"center", gap:8, cursor:"pointer", fontSize:14, fontWeight:600, color:"#374151" }}>
//                         <input type="radio" name="vb" value={v} checked={form.visitedBefore===(v==="Yes")} onChange={() => setForm(p=>({...p,visitedBefore:v==="Yes"}))} style={{ accentColor:"#16a34a", width:16, height:16 }} />
//                         {v}
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* ── Step 3: Photo ── */}
//             {step===3 && (
//               <div>
//                 <div className="step-head"><h3>Upload or Capture Photo</h3><p>Please upload or capture a clear photo for identification</p></div>
//                 <div style={{ display:"flex", gap:12, justifyContent:"center", marginBottom:20 }}>
//                   <label style={{ padding:"10px 24px", borderRadius:8, background:"#16a34a", color:"#fff", fontWeight:700, fontSize:14, cursor:"pointer" }}>
//                     📁 Upload Photo
//                     <input type="file" accept="image/*" style={{ display:"none" }} onChange={e => { const f=e.target.files[0]; if(f) setForm(p=>({...p,visitorPhoto:f,photoPreview:URL.createObjectURL(f)})); }} />
//                   </label>
//                   <button type="button" onClick={startCam} style={{ padding:"10px 24px", borderRadius:8, border:"2px solid #16a34a", background:"#fff", color:"#16a34a", fontWeight:700, fontSize:14, cursor:"pointer" }}>
//                     📷 Use Webcam
//                   </button>
//                 </div>

//                 {showCam ? (
//                   <div style={{ position:"relative", borderRadius:12, overflow:"hidden", border:"2px solid #16a34a", marginBottom:16 }}>
//                     <button type="button" onClick={stopCam} style={{ position:"absolute", top:10, right:10, zIndex:10, width:32, height:32, borderRadius:"50%", background:"#ef4444", color:"#fff", border:"none", cursor:"pointer", fontWeight:700 }}>✕</button>
//                     <video ref={videoRef} autoPlay playsInline style={{ width:"100%", maxHeight:340, objectFit:"cover", display:"block" }} />
//                     <canvas ref={canvasRef} style={{ display:"none" }} />
//                     <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:16, background:"linear-gradient(transparent,rgba(0,0,0,0.6))", display:"flex", justifyContent:"center" }}>
//                       <button type="button" onClick={capturePic} style={{ padding:"10px 28px", borderRadius:8, border:"none", background:"#22c55e", color:"#fff", fontWeight:700, fontSize:14, cursor:"pointer" }}>📸 Capture Photo</button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div style={{ border:"2px dashed #bbf7d0", borderRadius:12, padding:24, textAlign:"center", background:"#f0fdf4", marginBottom:16 }}>
//                     {form.photoPreview ? (
//                       <>
//                         <img src={form.photoPreview} alt="preview" style={{ width:110, height:110, borderRadius:"50%", objectFit:"cover", border:"3px solid #16a34a", marginBottom:10 }} />
//                         <p style={{ color:"#16a34a", fontWeight:600, fontSize:14, margin:"0 0 4px" }}>✅ Photo selected</p>
//                         <p style={{ color:"#6b7280", fontSize:12, margin:0 }}>Click "Upload Photo" to change</p>
//                       </>
//                     ) : (
//                       <>
//                         <div style={{ fontSize:40, marginBottom:8 }}>📷</div>
//                         <p style={{ color:"#6b7280", fontSize:14, margin:0 }}>Upload किंवा camera वापरून photo द्या</p>
//                       </>
//                     )}
//                   </div>
//                 )}
//                 {camErr && <p style={{ color:"#ef4444", fontSize:12, marginTop:4 }}>{camErr}</p>}
//               </div>
//             )}

//             {/* ── Step 4: Review ── */}
//             {step===4 && (
//               <div>
//                 <div className="step-head"><h3>Review & Submit</h3><p>सर्व माहिती verify करा आणि submit करा</p></div>
//                 <div className="review-grid">
//                   {[
//                     { title:"Personal Info", rows:[["Name",form.fullName],["Mobile",form.mobileNumber],["Email",form.email||"—"],["Address",form.address],["Pincode",form.pincode||"—"]] },
//                     { title:"Appointment",   rows:[["Date",formatShortDate(form.preferredDate)],["Slot",form.slotTime]] },
//                     { title:"Details",       rows:[["Purpose",form.purpose],["Visitors",form.numberOfVisitors],["Visited Before",form.visitedBefore?"Yes":"No"],["Ward",form.ward]] },
//                   ].map((sec,i) => (
//                     <div key={i} className="review-card">
//                       <div className="review-card-title">{sec.title}</div>
//                       {sec.rows.map(([k,v]) => <div key={k} className="review-row"><span className="review-key">{k}</span><span className="review-val">{v}</span></div>)}
//                     </div>
//                   ))}
//                   {form.photoPreview && (
//                     <div className="review-card" style={{ textAlign:"center" }}>
//                       <div className="review-card-title">Photo</div>
//                       <img src={form.photoPreview} alt="v" style={{ width:80, height:80, borderRadius:"50%", objectFit:"cover", border:"3px solid #16a34a" }} />
//                     </div>
//                   )}
//                 </div>
//                 <div style={{ background:"#fef9c3", border:"1px solid #fde68a", borderRadius:10, padding:"12px 18px", margin:"16px 0", fontSize:13, color:"#92400e" }}>
//                   ⚠️ Submit केल्यानंतर Admin approval नंतर appointment confirm होईल.
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Nav buttons */}
//           <div className="book-nav">
//             {step>0 ? (
//               <button className="nav-prev" onClick={() => setStep(s=>s-1)}>← Previous</button>
//             ) : <div />}
//             {step < STEPS.length-1 ? (
//               <button className="nav-next" disabled={nextDisabled} onClick={() => setStep(s=>s+1)}>Next →</button>
//             ) : (
//               <button className="nav-next" disabled={submitting} onClick={handleSubmit} style={{ background: submitting?"#d1d5db":"#16a34a" }}>
//                 {submitting ? "Submitting..." : "✔ Submit Appointment"}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// ===========================================

// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import citizenAxios from "../services/citizenAxios";

// const STEPS = [
//   { label:"Personal Details", icon:"👤" },
//   { label:"Appointment",      icon:"📅" },
//   { label:"Details",          icon:"ℹ️"  },
//   { label:"Photo",            icon:"📷" },
//   { label:"Review & Submit",  icon:"📋" },
// ];

// function formatShortDate(d) {
//   if (!d) return "—";
//   return new Date(d + "T00:00:00").toLocaleDateString("en-IN", { weekday:"short", day:"numeric", month:"short", year:"numeric" });
// }

// export default function BookAppointment() {
//   const navigate = useNavigate();
//   const citizen  = (() => { try { return JSON.parse(localStorage.getItem("citizenUser")||"null"); } catch { return null; } })();

//   const [step, setStep]             = useState(0);
//   const [submitting, setSubmitting] = useState(false);
//   const [availability, setAvail]    = useState([]);
//   const [toast, setToast]           = useState(null);
//   const [booked, setBooked]         = useState(null);

//   const showToast = (msg, type="success") => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 3500);
//   };

//   const [form, setForm] = useState({
//     fullName:         citizen?.fullName     || "",
//     mobileNumber:     citizen?.mobileNumber || "",
//     email:            citizen?.email        || "",
//     address:          "",
//     pincode:          "",
//     preferredDate:    "",
//     slotTime:         "",
//     slotStart:        "",
//     slotEnd:          "",
//     purpose:          "",
//     numberOfVisitors: "1",
//     visitedBefore:    false,
//     ward:             "",
//     visitorPhoto:     null,
//     photoPreview:     null,
//   });

//   const ch = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }));

//   useEffect(() => {
//     citizenAxios.get("/availability/get")
//       .then(r => { if (r.data) setAvail(Array.isArray(r.data) ? r.data : r.data.data || []); })
//       .catch(() => {});
//   }, []);

//   // Camera
//   const videoRef  = useRef(null);
//   const canvasRef = useRef(null);
//   const streamRef = useRef(null);
//   const [showCam, setShowCam] = useState(false);
//   const [camErr,  setCamErr]  = useState("");

//   const startCam = async () => {
//     setCamErr("");
//     try {
//       const s = await navigator.mediaDevices.getUserMedia({ video: true });
//       streamRef.current = s;
//       setShowCam(true);
//       setTimeout(() => { if (videoRef.current) { videoRef.current.srcObject = s; videoRef.current.play(); } }, 100);
//     } catch { setCamErr("Camera access denied. Browser permission द्या."); }
//   };
//   const capturePic = () => {
//     const v = videoRef.current, c = canvasRef.current;
//     if (!v||!c) return;
//     c.width = v.videoWidth; c.height = v.videoHeight;
//     c.getContext("2d").drawImage(v, 0, 0);
//     c.toBlob(blob => {
//       const file    = new File([blob], `photo-${Date.now()}.jpg`, { type:"image/jpeg" });
//       const preview = URL.createObjectURL(blob);
//       setForm(p => ({ ...p, visitorPhoto:file, photoPreview:preview }));
//       stopCam();
//     }, "image/jpeg");
//   };
//   const stopCam = () => {
//     if (streamRef.current) { streamRef.current.getTracks().forEach(t => t.stop()); streamRef.current = null; }
//     setShowCam(false);
//   };

//   const today        = new Date().toISOString().split("T")[0];
//   const futureAvail  = availability.filter(a => a.date >= today);
//   const selectedRecord  = futureAvail.find(a => a.date === form.preferredDate);
//   const availableSlots  = selectedRecord?.timeSlots || [];

//   const nextDisabled = (() => {
//     if (step===0) return !form.fullName || !form.mobileNumber || !form.address;
//     if (step===1) return !form.preferredDate || !form.slotTime;
//     if (step===2) return !form.purpose || !form.ward;
//     if (step===3) return !form.visitorPhoto;
//     return false;
//   })();

//   const handleSubmit = async () => {
//     if (!citizen) { navigate("/login"); return; }
//     try {
//       setSubmitting(true);
//       const fd = new FormData();
//       fd.append("citizenId",        citizen._id          || "");
//       fd.append("fullName",         form.fullName);
//       fd.append("mobileNumber",     form.mobileNumber);
//       fd.append("email",            form.email           || "");
//       fd.append("address",          form.address);
//       fd.append("pincode",          form.pincode         || "");
//       fd.append("preferredDate",    form.preferredDate);
//       fd.append("slotTime",         form.slotTime);
//       fd.append("purpose",          form.purpose);
//       fd.append("numberOfVisitors", form.numberOfVisitors);
//       fd.append("visitedBefore",    String(form.visitedBefore));
//       fd.append("ward",             form.ward);
//       fd.append("submittedById",    citizen._id          || "");
//       fd.append("submittedByName",  citizen.fullName     || "");
//       if (form.visitorPhoto) fd.append("visitorPhoto", form.visitorPhoto);

//       const res = await citizenAxios.post("/citizen/book-appointment", fd, {
//         headers: { "Content-Type": undefined },
//       });
//       if (!res.data.success) { showToast(res.data.message || "Booking failed ❌","error"); return; }
//       setBooked(res.data.data);
//     } catch(e) {
//       showToast(e?.response?.data?.message || "Server Error ❌","error");
//     } finally { setSubmitting(false); }
//   };

//   // ── Success screen ──
//   if (booked) {
//     return (
//       <>
//         <style>{`
//           @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
//           .book-root { min-height:calc(100vh - 64px); background:#f4f6f9; display:flex; align-items:center; justify-content:center; padding:32px 16px; font-family:'Plus Jakarta Sans',sans-serif; }
//         `}</style>
//         <div className="book-root">
//           <div style={{ background:"#fff", borderRadius:16, padding:"48px 40px", maxWidth:500, width:"100%", textAlign:"center", boxShadow:"0 4px 32px rgba(0,0,0,0.08)", border:"1px solid #e8ecf0" }}>
//             <div style={{ width:80, height:80, borderRadius:"50%", background:"#dcfce7", display:"flex", alignItems:"center", justifyContent:"center", fontSize:40, margin:"0 auto 20px" }}>✅</div>
//             <h2 style={{ fontSize:24, fontWeight:800, color:"#166534", marginBottom:8, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Appointment Booked!</h2>
//             <p style={{ color:"#6b7280", marginBottom:24, fontSize:14 }}>तुमची appointment successfully book झाली आहे</p>
//             <div style={{ background:"#f8fafb", border:"1px solid #e2e8f0", borderRadius:10, padding:"20px 24px", marginBottom:24, textAlign:"left" }}>
//               {[
//                 ["Token ID",  booked.tokenId],
//                 ["Date",      formatShortDate(booked.preferredDate)],
//                 ["Slot",      booked.slotTime],
//                 ["Status",    "⏳ Pending — Admin approval बाकी आहे"],
//               ].map(([k,v]) => (
//                 <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"8px 0", borderBottom:"1px solid #e8ecf0", fontSize:13 }}>
//                   <span style={{ color:"#6b7280" }}>{k}</span>
//                   <span style={{ color:"#166534", fontWeight:700 }}>{v}</span>
//                 </div>
//               ))}
//             </div>
//             {booked.qrCode && (
//               <div style={{ marginBottom:20 }}>
//                 <p style={{ fontSize:12, color:"#6b7280", marginBottom:8 }}>QR Code — भेटीच्या दिवशी दाखवा</p>
//                 <img src={booked.qrCode} alt="QR" style={{ width:130, height:130 }} />
//               </div>
//             )}
//             <button onClick={() => navigate("/my-appointments")} style={{ width:"100%", padding:"12px", borderRadius:8, border:"none", background:"#16a34a", color:"#fff", fontWeight:700, fontSize:15, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
//               📋 My Appointments बघा
//             </button>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
//         *{box-sizing:border-box;}

//         .book-root {
//           min-height: calc(100vh - 64px);
//           background: #f4f6f9;
//           padding: 32px 24px;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }

//         /* Outer wrapper — full width like screenshot */
//         .book-wrapper {
//           width: 100%;
//           background: #fff;
//           border-radius: 16px;
//           box-shadow: 0 4px 32px rgba(0,0,0,0.07);
//           border: 1px solid #e2e8f0;
//           overflow: hidden;
//         }

//         /* Title bar */
//         .book-titlebar {
//           padding: 28px 40px 0;
//           border-bottom: 1px solid #e8ecf0;
//         }
//         .book-titlebar h1 {
//           font-size: 22px;
//           font-weight: 800;
//           color: #0f172a;
//           margin: 0 0 20px;
//           letter-spacing: -0.3px;
//         }

//         /* Stepper tabs — horizontal like screenshot */
//         .stepper {
//           display: flex;
//           gap: 0;
//         }
//         .step-tab {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 14px 28px 14px 0;
//           font-size: 13px;
//           font-weight: 600;
//           color: #94a3b8;
//           border-bottom: 2px solid transparent;
//           cursor: default;
//           white-space: nowrap;
//           transition: all .2s;
//           margin-bottom: -1px;
//         }
//         .step-tab.done {
//           color: #16a34a;
//           border-bottom-color: transparent;
//         }
//         .step-tab.active {
//           color: #16a34a;
//           border-bottom-color: #16a34a;
//         }
//         .step-dot {
//           width: 20px; height: 20px;
//           border-radius: 50%;
//           display: flex; align-items: center; justify-content: center;
//           font-size: 11px; font-weight: 700;
//           flex-shrink: 0;
//         }
//         .step-dot.done   { background: #16a34a; color: #fff; }
//         .step-dot.active { background: #16a34a; color: #fff; }
//         .step-dot.pending{ background: #e2e8f0; color: #94a3b8; }

//         /* Body */
//         .book-body {
//           padding: 36px 40px 0;
//         }
//         .section-title {
//           font-size: 17px;
//           font-weight: 700;
//           color: #0f172a;
//           margin: 0 0 6px;
//         }
//         .section-sub {
//           font-size: 13px;
//           color: #94a3b8;
//           margin: 0 0 28px;
//         }

//         /* Fields */
//         .field { margin-bottom: 20px; }
//         .field label {
//           display: block;
//           font-size: 12px;
//           font-weight: 600;
//           color: #374151;
//           margin-bottom: 7px;
//           letter-spacing: .2px;
//         }
//         .field label .req { color: #ef4444; margin-left: 2px; }
//         .f-input {
//           width: 100%;
//           padding: 10px 14px;
//           font-size: 13px;
//           border: 1.5px solid #e2e8f0;
//           border-radius: 8px;
//           outline: none;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           box-sizing: border-box;
//           transition: border-color .15s, box-shadow .15s;
//           background: #fff;
//           color: #0f172a;
//         }
//         .f-input:focus { border-color: #16a34a; box-shadow: 0 0 0 3px rgba(22,163,74,0.08); }
//         .f-input::placeholder { color: #c1c9d2; }

//         .f-grid-2 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0 20px; }
//         .f-grid-2-col { display: grid; grid-template-columns: 1fr 1fr; gap: 0 20px; }
//         @media(max-width:640px){
//           .f-grid-2{ grid-template-columns:1fr; }
//           .f-grid-2-col{ grid-template-columns:1fr; }
//         }

//         /* Date / Slot buttons */
//         .date-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px,1fr)); gap: 10px; }
//         .date-btn {
//           padding: 13px 12px;
//           border-radius: 10px;
//           cursor: pointer;
//           font-weight: 600;
//           font-size: 13px;
//           border: 1.5px solid #e2e8f0;
//           background: #fff;
//           color: #374151;
//           transition: all .15s;
//           text-align: left;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }
//         .date-btn:hover { border-color: #16a34a; background: #f0fdf4; }
//         .date-btn.sel   { border-color: #16a34a; background: #f0fdf4; color: #166534; }
//         .date-btn .sub  { font-size: 11px; color: #9ca3af; font-weight: 400; margin-top: 3px; }

//         .slot-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px,1fr)); gap: 10px; }
//         .slot-btn {
//           padding: 11px 12px;
//           border-radius: 9px;
//           cursor: pointer;
//           font-weight: 600;
//           font-size: 13px;
//           border: 1.5px solid #e2e8f0;
//           background: #fff;
//           color: #374151;
//           transition: all .15s;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }
//         .slot-btn:hover { border-color: #16a34a; background: #f0fdf4; }
//         .slot-btn.sel   { border-color: #16a34a; background: #f0fdf4; color: #166534; }

//         /* Info / selected box */
//         .info-box { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 12px 16px; font-size: 13px; color: #1e40af; margin-bottom: 16px; }
//         .selected-box { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 12px 16px; font-weight: 700; color: #166534; font-size: 13px; margin-bottom: 16px; }
//         .empty-box { background: #fef9c3; border: 1px solid #fde68a; border-radius: 10px; padding: 28px; text-align: center; margin-bottom: 16px; }

//         /* Review */
//         .review-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
//         @media(max-width:640px){ .review-grid{ grid-template-columns:1fr; } }
//         .review-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px 18px; }
//         .review-card-title { font-size: 11px; font-weight: 700; color: #16a34a; text-transform: uppercase; letter-spacing: .6px; margin-bottom: 10px; }
//         .review-row { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; }
//         .review-row:last-child { border-bottom: none; }
//         .review-key { color: #6b7280; }
//         .review-val { color: #0f172a; font-weight: 600; text-align: right; max-width: 55%; word-break: break-word; }

//         /* Divider */
//         .form-note {
//           font-size: 12px;
//           color: #94a3b8;
//           margin: 12px 0 0;
//         }

//         /* Nav */
//         .book-nav {
//           display: flex;
//           justify-content: flex-end;
//           gap: 12px;
//           padding: 24px 40px 32px;
//           border-top: 1px solid #f1f5f9;
//           margin-top: 28px;
//         }
//         .nav-cancel {
//           padding: 10px 28px;
//           border-radius: 8px;
//           border: 1.5px solid #e2e8f0;
//           background: #f8fafc;
//           color: #64748b;
//           font-weight: 600;
//           font-size: 13px;
//           cursor: pointer;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           transition: all .15s;
//         }
//         .nav-cancel:hover { background: #f1f5f9; border-color: #cbd5e1; }
//         .nav-continue {
//           padding: 10px 32px;
//           border-radius: 8px;
//           border: none;
//           background: #16a34a;
//           color: #fff;
//           font-weight: 700;
//           font-size: 13px;
//           cursor: pointer;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           display: flex; align-items: center; gap: 6px;
//           transition: background .15s;
//         }
//         .nav-continue:hover:not(:disabled) { background: #15803d; }
//         .nav-continue:disabled { background: #d1d5db; cursor: not-allowed; }

//         /* Toast */
//         .toast { position:fixed; top:80px; right:20px; z-index:9999; padding:12px 22px; border-radius:10px; font-weight:600; font-size:14px; color:#fff; box-shadow:0 4px 20px rgba(0,0,0,0.18); animation:fadeInT .3s; font-family:'Plus Jakarta Sans',sans-serif; }
//         @keyframes fadeInT { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:none} }
//         @keyframes spin { to{transform:rotate(360deg)} }
//       `}</style>

//       {toast && <div className="toast" style={{ background: toast.type==="success" ? "#16a34a" : "#dc2626" }}>{toast.msg}</div>}

//       <div className="book-root">
//         <div className="book-wrapper">

//           {/* Title bar + Stepper */}
//           <div className="book-titlebar">
//             <h1>जनसंपर्क - Application Form</h1>
//             <div className="stepper">
//               {STEPS.map((s, i) => {
//                 const state = i < step ? "done" : i === step ? "active" : "pending";
//                 return (
//                   <div key={i} className={`step-tab ${state}`}>
//                     <div className={`step-dot ${state}`}>
//                       {state === "done" ? "✓" : i+1}
//                     </div>
//                     {s.label}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Form body */}
//           <div className="book-body">

//             {/* ── Step 0: Personal Details ── */}
//             {step===0 && (
//               <div>
//                 <p className="section-title">Personal Information</p>
//                 <p className="section-sub">Please provide your basic details to proceed</p>

//                 <div className="f-grid-2">
//                   <div className="field">
//                     <label>Full Name<span className="req">*</span></label>
//                     <input className="f-input" value={form.fullName} onChange={ch("fullName")} placeholder="आपले पूर्ण नाव" />
//                   </div>
//                   <div className="field">
//                     <label>Mobile Number<span className="req">*</span></label>
//                     <input className="f-input" type="tel" value={form.mobileNumber} onChange={ch("mobileNumber")} maxLength={10} placeholder="10 digit mobile" />
//                   </div>
//                   <div className="field">
//                     <label>Email Address</label>
//                     <input className="f-input" type="email" value={form.email} onChange={ch("email")} placeholder="Email (optional)" />
//                   </div>
//                 </div>

//                 <div className="f-grid-2-col">
//                   <div className="field">
//                     <label>Pincode</label>
//                     <input className="f-input" value={form.pincode} onChange={ch("pincode")} maxLength={6} placeholder="Pincode" />
//                   </div>
//                   <div className="field">
//                     <label>Address<span className="req">*</span></label>
//                     <input className="f-input" value={form.address} onChange={ch("address")} placeholder="पूर्ण पत्ता" />
//                   </div>
//                 </div>

//                 <p className="form-note">* In order to process your appointment, all fields marked with an asterisk (*) are required.</p>
//               </div>
//             )}

//             {/* ── Step 1: Appointment ── */}
//             {step===1 && (
//               <div>
//                 <p className="section-title">Appointment Scheduling</p>
//                 <p className="section-sub">Select your preferred date and time slot for the Mayor's visit</p>

//                 {futureAvail.length === 0 ? (
//                   <div className="empty-box">
//                     <div style={{ fontSize:36, marginBottom:8 }}>📅</div>
//                     <p style={{ color:"#92400e", fontWeight:600, margin:"0 0 4px" }}>सध्या कोणत्याही dates available नाहीत</p>
//                     <p style={{ color:"#a16207", fontSize:13, margin:0 }}>Admin कडून availability add होण्याची वाट पाहा</p>
//                   </div>
//                 ) : (
//                   <>
//                     <div className="field">
//                       <label>Available Dates<span className="req">*</span></label>
//                       <div className="date-grid">
//                         {futureAvail.map((av, i) => (
//                           <button key={i} type="button"
//                             className={`date-btn${form.preferredDate===av.date?" sel":""}`}
//                             onClick={() => setForm(p => ({ ...p, preferredDate:av.date, slotTime:"", slotStart:"", slotEnd:"" }))}>
//                             📅 {formatShortDate(av.date)}
//                             <div className="sub">{av.timeSlots?.length} slot{av.timeSlots?.length!==1?"s":""} available</div>
//                           </button>
//                         ))}
//                       </div>
//                     </div>

//                     {form.preferredDate && (
//                       <div className="field">
//                         <label>Select Time Slot<span className="req">*</span></label>
//                         <div className="slot-grid">
//                           {availableSlots.map((slot, i) => {
//                             const str = `${slot.start} - ${slot.end}`;
//                             return (
//                               <button key={i} type="button"
//                                 className={`slot-btn${form.slotTime===str?" sel":""}`}
//                                 onClick={() => setForm(p => ({ ...p, slotTime:str, slotStart:slot.start, slotEnd:slot.end }))}>
//                                 ⏰ {str}
//                               </button>
//                             );
//                           })}
//                         </div>
//                       </div>
//                     )}

//                     {form.preferredDate && form.slotTime && (
//                       <div className="selected-box">✅ Selected: {formatShortDate(form.preferredDate)} — {form.slotTime}</div>
//                     )}
//                   </>
//                 )}
//                 <div className="info-box">
//                   ℹ️ <strong>Date निवडण्यासाठी:</strong> वरील available dates मधून date निवडा → नंतर time slot निवडा
//                 </div>
//               </div>
//             )}

//             {/* ── Step 2: Details ── */}
//             {step===2 && (
//               <div>
//                 <p className="section-title">Visit Information</p>
//                 <p className="section-sub">Provide details about your visit to the Mayor</p>

//                 <div className="field">
//                   <label>Reason for Visit<span className="req">*</span></label>
//                   <textarea className="f-input" rows={4} value={form.purpose} onChange={ch("purpose")} placeholder="Mayor ला भेटण्याचे कारण विस्ताराने लिहा — आपली समस्या स्पष्टपणे मांडा" style={{ resize:"vertical" }} />
//                 </div>

//                 <div className="f-grid-2">
//                   <div className="field">
//                     <label>Number of Visitors<span className="req">*</span></label>
//                     <input className="f-input" type="number" min="1" max="10" value={form.numberOfVisitors} onChange={ch("numberOfVisitors")} />
//                   </div>
//                   <div className="field">
//                     <label>Ward<span className="req">*</span></label>
//                     <select className="f-input" value={form.ward} onChange={ch("ward")} style={{ cursor:"pointer" }}>
//                       <option value="">Select Ward</option>
//                       {["Ward A","Ward B","Ward C","Ward D","Ward E","Ward F","Ward G","Ward H","Ward I","Ward J","General"].map(w => <option key={w}>{w}</option>)}
//                     </select>
//                   </div>
//                   <div className="field">
//                     <label>Have you visited before?<span className="req">*</span></label>
//                     <div style={{ display:"flex", gap:24, marginTop:6 }}>
//                       {["No","Yes"].map(v => (
//                         <label key={v} style={{ display:"flex", alignItems:"center", gap:8, cursor:"pointer", fontSize:13, fontWeight:600, color:"#374151" }}>
//                           <input type="radio" name="vb" value={v} checked={form.visitedBefore===(v==="Yes")} onChange={() => setForm(p=>({...p,visitedBefore:v==="Yes"}))} style={{ accentColor:"#16a34a", width:15, height:15 }} />
//                           {v}
//                         </label>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* ── Step 3: Photo ── */}
//             {step===3 && (
//               <div>
//                 <p className="section-title">Visitor Photo</p>
//                 <p className="section-sub">Please upload or capture a clear photo for identification at the Mayor's office</p>

//                 <div style={{ display:"flex", gap:12, marginBottom:20 }}>
//                   <label style={{ padding:"10px 22px", borderRadius:8, background:"#16a34a", color:"#fff", fontWeight:700, fontSize:13, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
//                     📁 Upload Photo
//                     <input type="file" accept="image/*" style={{ display:"none" }} onChange={e => { const f=e.target.files[0]; if(f) setForm(p=>({...p,visitorPhoto:f,photoPreview:URL.createObjectURL(f)})); }} />
//                   </label>
//                   <button type="button" onClick={startCam} style={{ padding:"10px 22px", borderRadius:8, border:"1.5px solid #16a34a", background:"#fff", color:"#16a34a", fontWeight:700, fontSize:13, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
//                     📷 Use Webcam
//                   </button>
//                 </div>

//                 {showCam ? (
//                   <div style={{ position:"relative", borderRadius:12, overflow:"hidden", border:"1.5px solid #e2e8f0", marginBottom:16 }}>
//                     <button type="button" onClick={stopCam} style={{ position:"absolute", top:10, right:10, zIndex:10, width:30, height:30, borderRadius:"50%", background:"#ef4444", color:"#fff", border:"none", cursor:"pointer", fontWeight:700 }}>✕</button>
//                     <video ref={videoRef} autoPlay playsInline style={{ width:"100%", maxHeight:340, objectFit:"cover", display:"block" }} />
//                     <canvas ref={canvasRef} style={{ display:"none" }} />
//                     <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:16, background:"linear-gradient(transparent,rgba(0,0,0,0.55))", display:"flex", justifyContent:"center" }}>
//                       <button type="button" onClick={capturePic} style={{ padding:"10px 28px", borderRadius:8, border:"none", background:"#22c55e", color:"#fff", fontWeight:700, fontSize:13, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>📸 Capture Photo</button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div style={{ border:"2px dashed #e2e8f0", borderRadius:12, padding:32, textAlign:"center", background:"#f8fafc", marginBottom:16 }}>
//                     {form.photoPreview ? (
//                       <>
//                         <img src={form.photoPreview} alt="preview" style={{ width:100, height:100, borderRadius:"50%", objectFit:"cover", border:"3px solid #16a34a", marginBottom:12 }} />
//                         <p style={{ color:"#16a34a", fontWeight:600, fontSize:13, margin:"0 0 4px" }}>✅ Photo selected</p>
//                         <p style={{ color:"#9ca3af", fontSize:12, margin:0 }}>Click "Upload Photo" to change</p>
//                       </>
//                     ) : (
//                       <>
//                         <div style={{ fontSize:40, marginBottom:10, color:"#cbd5e1" }}>📷</div>
//                         <p style={{ color:"#9ca3af", fontSize:13, margin:0 }}>Upload किंवा camera वापरून photo द्या</p>
//                       </>
//                     )}
//                   </div>
//                 )}
//                 {camErr && <p style={{ color:"#ef4444", fontSize:12, marginTop:4 }}>{camErr}</p>}
//               </div>
//             )}

//             {/* ── Step 4: Review ── */}
//             {step===4 && (
//               <div>
//                 <p className="section-title">Review & Submit</p>
//                 <p className="section-sub">सर्व माहिती verify करा आणि submit करा</p>
//                 <div className="review-grid">
//                   {[
//                     { title:"Personal Info", rows:[["Name",form.fullName],["Mobile",form.mobileNumber],["Email",form.email||"—"],["Address",form.address],["Pincode",form.pincode||"—"]] },
//                     { title:"Appointment",   rows:[["Date",formatShortDate(form.preferredDate)],["Slot",form.slotTime]] },
//                     { title:"Visit Details", rows:[["Purpose",form.purpose],["Visitors",form.numberOfVisitors],["Visited Before",form.visitedBefore?"Yes":"No"],["Ward",form.ward]] },
//                   ].map((sec,i) => (
//                     <div key={i} className="review-card">
//                       <div className="review-card-title">{sec.title}</div>
//                       {sec.rows.map(([k,v]) => <div key={k} className="review-row"><span className="review-key">{k}</span><span className="review-val">{v}</span></div>)}
//                     </div>
//                   ))}
//                   {form.photoPreview && (
//                     <div className="review-card" style={{ textAlign:"center" }}>
//                       <div className="review-card-title">Visitor Photo</div>
//                       <img src={form.photoPreview} alt="v" style={{ width:80, height:80, borderRadius:"50%", objectFit:"cover", border:"3px solid #16a34a", marginTop:6 }} />
//                     </div>
//                   )}
//                 </div>
//                 <div style={{ background:"#fef9c3", border:"1px solid #fde68a", borderRadius:8, padding:"12px 16px", margin:"16px 0 0", fontSize:13, color:"#92400e" }}>
//                   ⚠️ Submit केल्यानंतर Admin approval नंतर appointment confirm होईल.
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Nav buttons */}
//           <div className="book-nav">
//             <button className="nav-cancel" onClick={() => step > 0 ? setStep(s=>s-1) : navigate(-1)}>
//               {step > 0 ? "← Back" : "CANCEL"}
//             </button>
//             {step < STEPS.length-1 ? (
//               <button className="nav-continue" disabled={nextDisabled} onClick={() => setStep(s=>s+1)}>
//                 CONTINUE →
//               </button>
//             ) : (
//               <button className="nav-continue" disabled={submitting} onClick={handleSubmit}>
//                 {submitting
//                   ? <><span style={{ width:14, height:14, border:"2px solid rgba(255,255,255,0.4)", borderTopColor:"#fff", borderRadius:"50%", animation:"spin .7s linear infinite", display:"inline-block" }} /> Submitting...</>
//                   : "✔ Submit Appointment"}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// =================================
// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import citizenAxios from "../services/citizenAxios";

// const STEPS = [
//   { label:"Personal Details", icon:"👤" },
//   { label:"Appointment",      icon:"📅" },
//   { label:"Details",          icon:"ℹ️"  },
//   { label:"Photo",            icon:"📷" },
//   { label:"Review & Submit",  icon:"📋" },
// ];

// function formatShortDate(d) {
//   if (!d) return "—";
//   return new Date(d + "T00:00:00").toLocaleDateString("en-IN", { weekday:"short", day:"numeric", month:"short", year:"numeric" });
// }

// export default function BookAppointment() {
//   const navigate = useNavigate();
//   const citizen  = (() => { try { return JSON.parse(localStorage.getItem("citizenUser")||"null"); } catch { return null; } })();

//   const [step, setStep]             = useState(0);
//   const [submitting, setSubmitting] = useState(false);
//   const [availability, setAvail]    = useState([]);
//   const [toast, setToast]           = useState(null);
//   const [booked, setBooked]         = useState(null);
//   const [animDir, setAnimDir]       = useState("forward"); // for step animation

//   const showToast = (msg, type="success") => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 3500);
//   };

//   const [form, setForm] = useState({
//     fullName:         citizen?.fullName     || "",
//     mobileNumber:     citizen?.mobileNumber || "",
//     email:            citizen?.email        || "",
//     address:          "",
//     pincode:          "",
//     preferredDate:    "",
//     slotTime:         "",
//     slotStart:        "",
//     slotEnd:          "",
//     purpose:          "",
//     numberOfVisitors: "1",
//     visitedBefore:    false,
//     ward:             "",
//     visitorPhoto:     null,
//     photoPreview:     null,
//   });

//   const ch = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }));

//   useEffect(() => {
//     citizenAxios.get("/availability/get")
//       .then(r => { if (r.data) setAvail(Array.isArray(r.data) ? r.data : r.data.data || []); })
//       .catch(() => {});
//   }, []);

//   // Camera
//   const videoRef  = useRef(null);
//   const canvasRef = useRef(null);
//   const streamRef = useRef(null);
//   const [showCam, setShowCam] = useState(false);
//   const [camErr,  setCamErr]  = useState("");

//   const startCam = async () => {
//     setCamErr("");
//     try {
//       const s = await navigator.mediaDevices.getUserMedia({ video: true });
//       streamRef.current = s;
//       setShowCam(true);
//       setTimeout(() => { if (videoRef.current) { videoRef.current.srcObject = s; videoRef.current.play(); } }, 100);
//     } catch { setCamErr("Camera access denied. Browser permission द्या."); }
//   };
//   const capturePic = () => {
//     const v = videoRef.current, c = canvasRef.current;
//     if (!v||!c) return;
//     c.width = v.videoWidth; c.height = v.videoHeight;
//     c.getContext("2d").drawImage(v, 0, 0);
//     c.toBlob(blob => {
//       const file    = new File([blob], `photo-${Date.now()}.jpg`, { type:"image/jpeg" });
//       const preview = URL.createObjectURL(blob);
//       setForm(p => ({ ...p, visitorPhoto:file, photoPreview:preview }));
//       stopCam();
//     }, "image/jpeg");
//   };
//   const stopCam = () => {
//     if (streamRef.current) { streamRef.current.getTracks().forEach(t => t.stop()); streamRef.current = null; }
//     setShowCam(false);
//   };

//   const today        = new Date().toISOString().split("T")[0];
//   const futureAvail  = availability.filter(a => a.date >= today);
//   const selectedRecord  = futureAvail.find(a => a.date === form.preferredDate);
//   const availableSlots  = selectedRecord?.timeSlots || [];

//   const nextDisabled = (() => {
//     if (step===0) return !form.fullName || !form.mobileNumber || !form.address;
//     if (step===1) return !form.preferredDate || !form.slotTime;
//     if (step===2) return !form.purpose || !form.ward;
//     if (step===3) return !form.visitorPhoto;
//     return false;
//   })();

//   const goNext = () => { setAnimDir("forward"); setStep(s=>s+1); };
//   const goBack = () => { setAnimDir("back"); setStep(s=>s-1); };

//   const handleSubmit = async () => {
//     if (!citizen) { navigate("/login"); return; }
//     try {
//       setSubmitting(true);
//       const fd = new FormData();
//       fd.append("citizenId",        citizen._id          || "");
//       fd.append("fullName",         form.fullName);
//       fd.append("mobileNumber",     form.mobileNumber);
//       fd.append("email",            form.email           || "");
//       fd.append("address",          form.address);
//       fd.append("pincode",          form.pincode         || "");
//       fd.append("preferredDate",    form.preferredDate);
//       fd.append("slotTime",         form.slotTime);
//       fd.append("purpose",          form.purpose);
//       fd.append("numberOfVisitors", form.numberOfVisitors);
//       fd.append("visitedBefore",    String(form.visitedBefore));
//       fd.append("ward",             form.ward);
//       fd.append("submittedById",    citizen._id          || "");
//       fd.append("submittedByName",  citizen.fullName     || "");
//       if (form.visitorPhoto) fd.append("visitorPhoto", form.visitorPhoto);

//       const res = await citizenAxios.post("/citizen/book-appointment", fd, {
//         headers: { "Content-Type": undefined },
//       });
//       if (!res.data.success) { showToast(res.data.message || "Booking failed ❌","error"); return; }
//       setBooked(res.data.data);
//     } catch(e) {
//       showToast(e?.response?.data?.message || "Server Error ❌","error");
//     } finally { setSubmitting(false); }
//   };

//   // ── Success screen ──
//   if (booked) {
//     return (
//       <>
//         <style>{`
//           @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
//           .book-root { min-height:calc(100vh - 64px); background:#f0f4f8; display:flex; align-items:center; justify-content:center; padding:32px 16px; font-family:'Plus Jakarta Sans',sans-serif; }
//           @keyframes successPop { 0%{transform:scale(0.7);opacity:0} 70%{transform:scale(1.08)} 100%{transform:scale(1);opacity:1} }
//           @keyframes fadeUpIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
//         `}</style>
//         <div className="book-root">
//           <div style={{ background:"#fff", borderRadius:20, padding:"48px 40px", maxWidth:520, width:"100%", textAlign:"center", boxShadow:"0 8px 40px rgba(76,171,193,0.18)", border:"1.5px solid #b2e4ee", animation:"fadeUpIn .5s ease" }}>
//             <div style={{ width:90, height:90, borderRadius:"50%", background:"linear-gradient(135deg,#4CABC1,#66A962)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:44, margin:"0 auto 20px", animation:"successPop .5s cubic-bezier(.34,1.56,.64,1) both", boxShadow:"0 8px 24px rgba(76,171,193,0.35)" }}>✅</div>
//             <h2 style={{ fontSize:26, fontWeight:800, color:"#18748", marginBottom:8, fontFamily:"'Plus Jakarta Sans',sans-serif", background:"linear-gradient(135deg,#4CABC1,#66A962)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Appointment Booked!</h2>
//             <p style={{ color:"#4a5568", marginBottom:24, fontSize:14, fontWeight:500 }}>तुमची appointment successfully book झाली आहे</p>
//             <div style={{ background:"linear-gradient(135deg,#f0faf9,#f5fef5)", border:"1.5px solid #b2e4ee", borderRadius:12, padding:"20px 24px", marginBottom:24, textAlign:"left" }}>
//               {[
//                 ["Token ID",  booked.tokenId],
//                 ["Date",      formatShortDate(booked.preferredDate)],
//                 ["Slot",      booked.slotTime],
//                 ["Status",    "⏳ Pending — Admin approval बाकी आहे"],
//               ].map(([k,v]) => (
//                 <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"9px 0", borderBottom:"1px solid #d4eff5", fontSize:13 }}>
//                   <span style={{ color:"#5a7a88", fontWeight:600 }}>{k}</span>
//                   <span style={{ color:"#18748", fontWeight:700 }}>{v}</span>
//                 </div>
//               ))}
//             </div>
//             {booked.qrCode && (
//               <div style={{ marginBottom:20 }}>
//                 <p style={{ fontSize:12, color:"#6b7280", marginBottom:8, fontWeight:600 }}>QR Code — भेटीच्या दिवशी दाखवा</p>
//                 <img src={booked.qrCode} alt="QR" style={{ width:130, height:130 }} />
//               </div>
//             )}
//             <button onClick={() => navigate("/my-appointments")} style={{ width:"100%", padding:"13px", borderRadius:10, border:"none", background:"linear-gradient(135deg,#4CABC1,#49ACC3)", color:"#fff", fontWeight:700, fontSize:15, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif", boxShadow:"0 4px 16px rgba(76,171,193,0.4)", transition:"transform .15s" }}
//               onMouseEnter={e=>e.target.style.transform="translateY(-1px)"}
//               onMouseLeave={e=>e.target.style.transform="none"}
//             >
//               📋 My Appointments बघा
//             </button>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
//         *, *::before, *::after { box-sizing:border-box; }

//         /* ── Theme variables ── */
//         :root {
//           --teal:    #4CABC1;
//           --teal2:   #49ACC3;
//           --teal-dk: #2d8fa6;
//           --gold:    #CE9A54;
//           --gold2:   #CA9D28;
//           --green:   #66A962;
//           --cream:   #F5E7C2;
//           --text-hd: #1a3a44;
//           --text-bd: #2d4a55;
//           --text-sm: #4a6674;
//           --border:  #c8e6ee;
//           --bg-soft: #f0f7fa;
//         }

//         .book-root {
//           min-height: calc(100vh - 64px);
//           background: #edf4f7;
//           padding: 32px 24px;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }

//         .book-wrapper {
//           width: 90%;
//           margin: 0 auto;
//           background: #fff;
//           border-radius: 18px;
//           box-shadow: 0 6px 40px rgba(76,171,193,0.13);
//           border: 1.5px solid var(--border);
//           overflow: hidden;
//         }

//         /* ── Title bar ── */
//         .book-titlebar {
//           padding: 26px 40px 0;
//           border-bottom: 2px solid #e8f4f8;
//           background: linear-gradient(180deg, #f7fcfe 0%, #fff 100%);
//         }
//         .book-titlebar h1 {
//           font-size: 22px;
//           font-weight: 800;
//           color: var(--text-hd);
//           margin: 0 0 20px;
//           letter-spacing: -0.3px;
//           position: relative;
//           display: inline-block;
//         }
//         .book-titlebar h1::after {
//           content: '';
//           position: absolute;
//           bottom: -4px;
//           left: 0;
//           width: 48px;
//           height: 3px;
//           background: linear-gradient(90deg, var(--teal), var(--gold));
//           border-radius: 2px;
//         }

//         /* ── Stepper ── */
//         .stepper { display: flex; gap: 0; }
//         .step-tab {
//           display: flex;
//           align-items: center;
//           gap: 9px;
//           padding: 14px 28px 14px 0;
//           font-size: 13px;
//           font-weight: 700;
//           color: #94a3b8;
//           border-bottom: 3px solid transparent;
//           cursor: default;
//           white-space: nowrap;
//           transition: all .25s;
//           margin-bottom: -2px;
//         }
//         .step-tab.done  { color: var(--green); }
//         .step-tab.active { color: var(--teal-dk); border-bottom-color: var(--teal); }
//         .step-dot {
//           width: 22px; height: 22px;
//           border-radius: 50%;
//           display: flex; align-items: center; justify-content: center;
//           font-size: 11px; font-weight: 800;
//           flex-shrink: 0;
//           transition: all .25s;
//         }
//         .step-dot.done   { background: var(--green); color: #fff; box-shadow: 0 2px 8px rgba(102,169,98,0.4); }
//         .step-dot.active { background: var(--teal); color: #fff; box-shadow: 0 2px 8px rgba(76,171,193,0.45); }
//         .step-dot.pending{ background: #e2e8f0; color: #94a3b8; }

//         /* ── Body ── */
//         .book-body {
//           padding: 36px 40px 0;
//         }
//         .section-title {
//           font-size: 18px;
//           font-weight: 800;
//           color: var(--text-hd);
//           margin: 0 0 5px;
//           letter-spacing: -0.2px;
//         }
//         .section-sub {
//           font-size: 13.5px;
//           color: var(--text-sm);
//           font-weight: 500;
//           margin: 0 0 26px;
//         }

//         /* ── Fields ── */
//         .field { margin-bottom: 20px; }

//         .field label {
//           display: block;
//           font-size: 13px;
//           font-weight: 700;
//           color: var(--text-hd);
//           margin-bottom: 7px;
//           letter-spacing: 0.1px;
//         }
//         .field label .req { color: #e05c3a; margin-left: 2px; }

//         .f-input {
//           width: 100%;
//           padding: 11px 14px;
//           font-size: 14px;
//           font-weight: 500;
//           border: 2px solid #d4e8ef;
//           border-radius: 9px;
//           outline: none;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           box-sizing: border-box;
//           transition: border-color .18s, box-shadow .18s;
//           background: #fafdfe;
//           color: var(--text-hd);
//         }
//         .f-input:focus {
//           border-color: var(--teal);
//           box-shadow: 0 0 0 3px rgba(76,171,193,0.12);
//           background: #fff;
//         }
//         .f-input::placeholder { color: #a0b8c2; font-weight: 400; }

//         .f-grid-2    { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0 20px; }
//         .f-grid-2-col{ display: grid; grid-template-columns: 1fr 1fr; gap: 0 20px; }
//         @media(max-width:640px){
//           .f-grid-2{ grid-template-columns:1fr; }
//           .f-grid-2-col{ grid-template-columns:1fr; }
//         }

//         /* ── Date / Slot buttons ── */
//         .date-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px,1fr)); gap: 10px; }
//         .date-btn {
//           padding: 13px 14px;
//           border-radius: 10px;
//           cursor: pointer;
//           font-weight: 700;
//           font-size: 13px;
//           border: 2px solid #d4e8ef;
//           background: #fafdfe;
//           color: var(--text-bd);
//           transition: all .18s;
//           text-align: left;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }
//         .date-btn:hover { border-color: var(--teal); background: #edf9fc; color: var(--teal-dk); transform: translateY(-1px); box-shadow: 0 3px 12px rgba(76,171,193,0.15); }
//         .date-btn.sel   { border-color: var(--teal); background: linear-gradient(135deg,#edf9fc,#f0faf5); color: var(--teal-dk); box-shadow: 0 3px 12px rgba(76,171,193,0.2); }
//         .date-btn .sub  { font-size: 11.5px; color: #7a9eaa; font-weight: 500; margin-top: 3px; }

//         .slot-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px,1fr)); gap: 10px; }
//         .slot-btn {
//           padding: 11px 14px;
//           border-radius: 9px;
//           cursor: pointer;
//           font-weight: 700;
//           font-size: 13px;
//           border: 2px solid #d4e8ef;
//           background: #fafdfe;
//           color: var(--text-bd);
//           transition: all .18s;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }
//         .slot-btn:hover { border-color: var(--teal); background: #edf9fc; color: var(--teal-dk); transform: translateY(-1px); }
//         .slot-btn.sel   { border-color: var(--teal); background: linear-gradient(135deg,#edf9fc,#f0faf5); color: var(--teal-dk); box-shadow: 0 3px 10px rgba(76,171,193,0.18); }

//         /* ── Info boxes ── */
//         .info-box {
//           background: linear-gradient(135deg,#edf9fc,#f0f7ff);
//           border: 1.5px solid #a8d8e8;
//           border-radius: 9px;
//           padding: 12px 16px;
//           font-size: 13.5px;
//           font-weight: 600;
//           color: #1a5f7a;
//           margin-bottom: 16px;
//         }
//         .selected-box {
//           background: linear-gradient(135deg,#f0fdf4,#edf9fc);
//           border: 1.5px solid #86efac;
//           border-radius: 9px;
//           padding: 12px 16px;
//           font-weight: 700;
//           color: #166534;
//           font-size: 13.5px;
//           margin-bottom: 16px;
//         }
//         .empty-box {
//           background: linear-gradient(135deg,#fffbeb,#fef3c7);
//           border: 1.5px solid #fcd34d;
//           border-radius: 12px;
//           padding: 28px;
//           text-align: center;
//           margin-bottom: 16px;
//         }

//         /* ── Review cards ── */
//         .review-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
//         @media(max-width:640px){ .review-grid{ grid-template-columns:1fr; } }
//         .review-card {
//           background: linear-gradient(135deg, #f7fcfe, #f5fef5);
//           border: 1.5px solid #c8e6ee;
//           border-radius: 12px;
//           padding: 16px 18px;
//         }
//         .review-card-title {
//           font-size: 11.5px;
//           font-weight: 800;
//           color: var(--teal-dk);
//           text-transform: uppercase;
//           letter-spacing: .8px;
//           margin-bottom: 10px;
//           display: flex;
//           align-items: center;
//           gap: 6px;
//         }
//         .review-card-title::before {
//           content: '';
//           display: inline-block;
//           width: 14px; height: 3px;
//           background: var(--teal);
//           border-radius: 2px;
//         }
//         .review-row { display: flex; justify-content: space-between; padding: 7px 0; border-bottom: 1px solid #d4eff5; font-size: 13.5px; }
//         .review-row:last-child { border-bottom: none; }
//         .review-key { color: #4a7a8a; font-weight: 600; }
//         .review-val { color: var(--text-hd); font-weight: 700; text-align: right; max-width: 55%; word-break: break-word; }

//         .form-note {
//           font-size: 12.5px;
//           color: #6a8e9a;
//           font-weight: 500;
//           margin: 12px 0 0;
//         }

//         /* ── Nav ── */
//         .book-nav {
//           display: flex;
//           justify-content: flex-end;
//           align-items: center;
//           gap: 12px;
//           padding: 24px 40px 32px;
//           border-top: 2px solid #e8f4f8;
//           margin-top: 28px;
//           background: linear-gradient(180deg,#fff 0%,#f7fcfe 100%);
//         }
//         .nav-cancel {
//           padding: 11px 30px;
//           border-radius: 9px;
//           border: 2px solid #c8dde6;
//           background: #f4f9fb;
//           color: var(--text-sm);
//           font-weight: 700;
//           font-size: 13.5px;
//           cursor: pointer;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           transition: all .18s;
//         }
//         .nav-cancel:hover { background: #e8f4f8; border-color: var(--teal); color: var(--teal-dk); }
//         .nav-continue {
//           padding: 11px 34px;
//           border-radius: 9px;
//           border: none;
//           background: linear-gradient(135deg, var(--teal), var(--teal2));
//           color: #fff;
//           font-weight: 800;
//           font-size: 13.5px;
//           cursor: pointer;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           display: flex; align-items: center; gap: 7px;
//           transition: all .2s;
//           box-shadow: 0 4px 16px rgba(76,171,193,0.35);
//           letter-spacing: 0.2px;
//         }
//         .nav-continue:hover:not(:disabled) {
//           background: linear-gradient(135deg, var(--teal-dk), var(--teal));
//           transform: translateY(-1px);
//           box-shadow: 0 6px 20px rgba(76,171,193,0.45);
//         }
//         .nav-continue:disabled { background: #c8dde6; cursor: not-allowed; box-shadow: none; color: #8aacba; }

//         /* ── Step progress bar ── */
//         .step-progress-bar {
//           height: 3px;
//           background: #e2eef2;
//           position: relative;
//           overflow: hidden;
//         }
//         .step-progress-fill {
//           height: 100%;
//           background: linear-gradient(90deg, var(--teal), var(--gold));
//           border-radius: 2px;
//           transition: width .4s cubic-bezier(.4,0,.2,1);
//         }

//         /* ── Step body animation ── */
//         @keyframes slideInForward {
//           from { opacity:0; transform:translateX(28px); }
//           to   { opacity:1; transform:none; }
//         }
//         @keyframes slideInBack {
//           from { opacity:0; transform:translateX(-28px); }
//           to   { opacity:1; transform:none; }
//         }
//         .step-body-forward { animation: slideInForward .3s cubic-bezier(.4,0,.2,1) both; }
//         .step-body-back    { animation: slideInBack    .3s cubic-bezier(.4,0,.2,1) both; }

//         /* ── Toast ── */
//         .toast {
//           position:fixed; top:80px; right:20px; z-index:9999;
//           padding:12px 24px; border-radius:10px; font-weight:700; font-size:14px;
//           color:#fff; box-shadow:0 6px 24px rgba(0,0,0,0.18);
//           animation:toastIn .3s; font-family:'Plus Jakarta Sans',sans-serif;
//         }
//         @keyframes toastIn  { from{opacity:0;transform:translateY(-10px) scale(.95)} to{opacity:1;transform:none} }
//         @keyframes spin      { to{transform:rotate(360deg)} }

//         /* ── Photo upload button ── */
//         .photo-btn-primary {
//           padding: 11px 24px;
//           border-radius: 9px;
//           background: linear-gradient(135deg, var(--teal), var(--teal2));
//           color: #fff;
//           font-weight: 700;
//           font-size: 13.5px;
//           cursor: pointer;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           border: none;
//           box-shadow: 0 3px 12px rgba(76,171,193,0.3);
//           transition: all .18s;
//         }
//         .photo-btn-primary:hover { transform:translateY(-1px); box-shadow:0 5px 16px rgba(76,171,193,0.4); }
//         .photo-btn-secondary {
//           padding: 11px 24px;
//           border-radius: 9px;
//           border: 2px solid var(--teal);
//           background: #fff;
//           color: var(--teal-dk);
//           font-weight: 700;
//           font-size: 13.5px;
//           cursor: pointer;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           transition: all .18s;
//         }
//         .photo-btn-secondary:hover { background:#edf9fc; }

//         /* ── Radio custom ── */
//         .radio-group { display:flex; gap:24px; margin-top:8px; }
//         .radio-label {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           cursor: pointer;
//           font-size: 14px;
//           font-weight: 700;
//           color: var(--text-bd);
//           padding: 8px 18px;
//           border-radius: 8px;
//           border: 2px solid #d4e8ef;
//           transition: all .15s;
//         }
//         .radio-label.selected { border-color: var(--teal); background: #edf9fc; color: var(--teal-dk); }
//         .radio-label input { accentColor: var(--teal); width:15px; height:15px; }
//       `}</style>

//       {toast && <div className="toast" style={{ background: toast.type==="success" ? "var(--teal)" : "#dc2626" }}>{toast.msg}</div>}

//       <div className="book-root">
//         <div className="book-wrapper">

//           {/* ── Title bar + Stepper ── */}
//           <div className="book-titlebar">
//             <h1>जनसंपर्क – Application Form</h1>
//             <div className="stepper">
//               {STEPS.map((s, i) => {
//                 const state = i < step ? "done" : i === step ? "active" : "pending";
//                 return (
//                   <div key={i} className={`step-tab ${state}`}>
//                     <div className={`step-dot ${state}`}>{state === "done" ? "✓" : i+1}</div>
//                     {s.label}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* progress bar */}
//           <div className="step-progress-bar">
//             <div className="step-progress-fill" style={{ width:`${((step+1)/STEPS.length)*100}%` }} />
//           </div>

//           {/* ── Form body ── */}
//           <div className="book-body">
//             <div className={animDir === "forward" ? "step-body-forward" : "step-body-back"} key={step}>

//               {/* Step 0: Personal Details */}
//               {step===0 && (
//                 <div>
//                   <p className="section-title">Personal Information</p>
//                   <p className="section-sub">Please provide your basic details to proceed</p>
//                   <div className="f-grid-2">
//                     <div className="field">
//                       <label>Full Name <span className="req">*</span></label>
//                       <input className="f-input" value={form.fullName} onChange={ch("fullName")} placeholder="आपले पूर्ण नाव" />
//                     </div>
//                     <div className="field">
//                       <label>Mobile Number <span className="req">*</span></label>
//                       <input className="f-input" type="tel" value={form.mobileNumber} onChange={ch("mobileNumber")} maxLength={10} placeholder="10 digit mobile" />
//                     </div>
//                     <div className="field">
//                       <label>Email Address</label>
//                       <input className="f-input" type="email" value={form.email} onChange={ch("email")} placeholder="Email (optional)" />
//                     </div>
//                   </div>
//                   <div className="f-grid-2-col">
//                     <div className="field">
//                       <label>Pincode</label>
//                       <input className="f-input" value={form.pincode} onChange={ch("pincode")} maxLength={6} placeholder="Pincode" />
//                     </div>
//                     <div className="field">
//                       <label>Address <span className="req">*</span></label>
//                       <input className="f-input" value={form.address} onChange={ch("address")} placeholder="पूर्ण पत्ता" />
//                     </div>
//                   </div>
//                   <p className="form-note">* In order to process your appointment, all fields marked with an asterisk (*) are required.</p>
//                 </div>
//               )}

//               {/* Step 1: Appointment */}
//               {step===1 && (
//                 <div>
//                   <p className="section-title">Appointment Scheduling</p>
//                   <p className="section-sub">Select your preferred date and time slot for the Mayor's visit</p>
//                   {futureAvail.length === 0 ? (
//                     <div className="empty-box">
//                       <div style={{ fontSize:36, marginBottom:8 }}>📅</div>
//                       <p style={{ color:"#92400e", fontWeight:700, margin:"0 0 4px", fontSize:15 }}>सध्या कोणत्याही dates available नाहीत</p>
//                       <p style={{ color:"#a16207", fontSize:13.5, margin:0, fontWeight:500 }}>Admin कडून availability add होण्याची वाट पाहा</p>
//                     </div>
//                   ) : (
//                     <>
//                       <div className="field">
//                         <label>Available Dates <span className="req">*</span></label>
//                         <div className="date-grid">
//                           {futureAvail.map((av, i) => (
//                             <button key={i} type="button"
//                               className={`date-btn${form.preferredDate===av.date?" sel":""}`}
//                               onClick={() => setForm(p => ({ ...p, preferredDate:av.date, slotTime:"", slotStart:"", slotEnd:"" }))}>
//                               📅 {formatShortDate(av.date)}
//                               <div className="sub">{av.timeSlots?.length} slot{av.timeSlots?.length!==1?"s":""} available</div>
//                             </button>
//                           ))}
//                         </div>
//                       </div>
//                       {form.preferredDate && (
//                         <div className="field">
//                           <label>Select Time Slot <span className="req">*</span></label>
//                           <div className="slot-grid">
//                             {availableSlots.map((slot, i) => {
//                               const str = `${slot.start} - ${slot.end}`;
//                               return (
//                                 <button key={i} type="button"
//                                   className={`slot-btn${form.slotTime===str?" sel":""}`}
//                                   onClick={() => setForm(p => ({ ...p, slotTime:str, slotStart:slot.start, slotEnd:slot.end }))}>
//                                   ⏰ {str}
//                                 </button>
//                               );
//                             })}
//                           </div>
//                         </div>
//                       )}
//                       {form.preferredDate && form.slotTime && (
//                         <div className="selected-box">✅ Selected: {formatShortDate(form.preferredDate)} — {form.slotTime}</div>
//                       )}
//                     </>
//                   )}
//                   <div className="info-box">ℹ️ <strong>Date निवडण्यासाठी:</strong> वरील available dates मधून date निवडा → नंतर time slot निवडा</div>
//                 </div>
//               )}

//               {/* Step 2: Details */}
//               {step===2 && (
//                 <div>
//                   <p className="section-title">Visit Information</p>
//                   <p className="section-sub">Provide details about your visit to the Mayor</p>
//                   <div className="field">
//                     <label>Reason for Visit <span className="req">*</span></label>
//                     <textarea className="f-input" rows={4} value={form.purpose} onChange={ch("purpose")} placeholder="Mayor ला भेटण्याचे कारण विस्ताराने लिहा — आपली समस्या स्पष्टपणे मांडा" style={{ resize:"vertical" }} />
//                   </div>
//                   <div className="f-grid-2">
//                     <div className="field">
//                       <label>Number of Visitors <span className="req">*</span></label>
//                       <input className="f-input" type="number" min="1" max="10" value={form.numberOfVisitors} onChange={ch("numberOfVisitors")} />
//                     </div>
//                     <div className="field">
//                       <label>Ward <span className="req">*</span></label>
//                       <select className="f-input" value={form.ward} onChange={ch("ward")} style={{ cursor:"pointer" }}>
//                         <option value="">Select Ward</option>
//                         {["Ward A","Ward B","Ward C","Ward D","Ward E","Ward F","Ward G","Ward H","Ward I","Ward J","General"].map(w => <option key={w}>{w}</option>)}
//                       </select>
//                     </div>
//                     <div className="field">
//                       <label>Have you visited before? <span className="req">*</span></label>
//                       <div className="radio-group">
//                         {["No","Yes"].map(v => (
//                           <label key={v} className={`radio-label${form.visitedBefore===(v==="Yes")?" selected":""}`}>
//                             <input type="radio" name="vb" value={v}
//                               checked={form.visitedBefore===(v==="Yes")}
//                               onChange={() => setForm(p=>({...p,visitedBefore:v==="Yes"}))}
//                               style={{ accentColor:"var(--teal)", width:15, height:15 }} />
//                             {v}
//                           </label>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Step 3: Photo */}
//               {step===3 && (
//                 <div>
//                   <p className="section-title">Visitor Photo</p>
//                   <p className="section-sub">Please upload or capture a clear photo for identification at the Mayor's office</p>
//                   <div style={{ display:"flex", gap:12, marginBottom:20 }}>
//                     <label className="photo-btn-primary">
//                       📁 Upload Photo
//                       <input type="file" accept="image/*" style={{ display:"none" }} onChange={e => { const f=e.target.files[0]; if(f) setForm(p=>({...p,visitorPhoto:f,photoPreview:URL.createObjectURL(f)})); }} />
//                     </label>
//                     <button type="button" onClick={startCam} className="photo-btn-secondary">📷 Use Webcam</button>
//                   </div>
//                   {showCam ? (
//                     <div style={{ position:"relative", borderRadius:12, overflow:"hidden", border:"2px solid var(--border)", marginBottom:16 }}>
//                       <button type="button" onClick={stopCam} style={{ position:"absolute", top:10, right:10, zIndex:10, width:30, height:30, borderRadius:"50%", background:"#ef4444", color:"#fff", border:"none", cursor:"pointer", fontWeight:800 }}>✕</button>
//                       <video ref={videoRef} autoPlay playsInline style={{ width:"100%", maxHeight:340, objectFit:"cover", display:"block" }} />
//                       <canvas ref={canvasRef} style={{ display:"none" }} />
//                       <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:16, background:"linear-gradient(transparent,rgba(0,0,0,0.55))", display:"flex", justifyContent:"center" }}>
//                         <button type="button" onClick={capturePic} style={{ padding:"11px 30px", borderRadius:9, border:"none", background:"linear-gradient(135deg,var(--teal),var(--green))", color:"#fff", fontWeight:800, fontSize:14, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif", boxShadow:"0 4px 16px rgba(76,171,193,0.4)" }}>📸 Capture Photo</button>
//                       </div>
//                     </div>
//                   ) : (
//                     <div style={{ border:"2.5px dashed #b2d8e4", borderRadius:14, padding:36, textAlign:"center", background:"linear-gradient(135deg,#f7fcfe,#f5fef5)", marginBottom:16, transition:"all .2s" }}>
//                       {form.photoPreview ? (
//                         <>
//                           <img src={form.photoPreview} alt="preview" style={{ width:110, height:110, borderRadius:"50%", objectFit:"cover", border:"3px solid var(--teal)", marginBottom:14, boxShadow:"0 4px 20px rgba(76,171,193,0.3)" }} />
//                           <p style={{ color:"var(--green)", fontWeight:700, fontSize:14, margin:"0 0 4px" }}>✅ Photo selected</p>
//                           <p style={{ color:"#6a9aaa", fontSize:12.5, margin:0, fontWeight:500 }}>Click "Upload Photo" to change</p>
//                         </>
//                       ) : (
//                         <>
//                           <div style={{ fontSize:44, marginBottom:12, color:"#b2d8e4" }}>📷</div>
//                           <p style={{ color:"#6a9aaa", fontSize:14, margin:0, fontWeight:600 }}>Upload किंवा camera वापरून photo द्या</p>
//                         </>
//                       )}
//                     </div>
//                   )}
//                   {camErr && <p style={{ color:"#ef4444", fontSize:13, marginTop:4, fontWeight:600 }}>{camErr}</p>}
//                 </div>
//               )}

//               {/* Step 4: Review */}
//               {step===4 && (
//                 <div>
//                   <p className="section-title">Review & Submit</p>
//                   <p className="section-sub">सर्व माहिती verify करा आणि submit करा</p>
//                   <div className="review-grid">
//                     {[
//                       { title:"Personal Info", rows:[["Name",form.fullName],["Mobile",form.mobileNumber],["Email",form.email||"—"],["Address",form.address],["Pincode",form.pincode||"—"]] },
//                       { title:"Appointment",   rows:[["Date",formatShortDate(form.preferredDate)],["Slot",form.slotTime]] },
//                       { title:"Visit Details", rows:[["Purpose",form.purpose],["Visitors",form.numberOfVisitors],["Visited Before",form.visitedBefore?"Yes":"No"],["Ward",form.ward]] },
//                     ].map((sec,i) => (
//                       <div key={i} className="review-card" style={{ animationDelay:`${i*80}ms` }}>
//                         <div className="review-card-title">{sec.title}</div>
//                         {sec.rows.map(([k,v]) => <div key={k} className="review-row"><span className="review-key">{k}</span><span className="review-val">{v}</span></div>)}
//                       </div>
//                     ))}
//                     {form.photoPreview && (
//                       <div className="review-card" style={{ textAlign:"center" }}>
//                         <div className="review-card-title">Visitor Photo</div>
//                         <img src={form.photoPreview} alt="v" style={{ width:88, height:88, borderRadius:"50%", objectFit:"cover", border:"3px solid var(--teal)", marginTop:8, boxShadow:"0 4px 16px rgba(76,171,193,0.25)" }} />
//                       </div>
//                     )}
//                   </div>
//                   <div style={{ background:"linear-gradient(135deg,#fffbeb,#fef3c7)", border:"1.5px solid #fcd34d", borderRadius:10, padding:"13px 18px", margin:"16px 0 0", fontSize:13.5, color:"#92400e", fontWeight:600 }}>
//                     ⚠️ Submit केल्यानंतर Admin approval नंतर appointment confirm होईल.
//                   </div>
//                 </div>
//               )}

//             </div>{/* end animated wrapper */}
//           </div>

//           {/* ── Nav ── */}
//           <div className="book-nav">
//             <button className="nav-cancel" onClick={() => step > 0 ? goBack() : navigate(-1)}>
//               {step > 0 ? "← Back" : "CANCEL"}
//             </button>
//             {step < STEPS.length-1 ? (
//               <button className="nav-continue" disabled={nextDisabled} onClick={goNext}>
//                 CONTINUE →
//               </button>
//             ) : (
//               <button className="nav-continue" disabled={submitting} onClick={handleSubmit}>
//                 {submitting
//                   ? <><span style={{ width:14, height:14, border:"2px solid rgba(255,255,255,0.4)", borderTopColor:"#fff", borderRadius:"50%", animation:"spin .7s linear infinite", display:"inline-block" }} /> Submitting...</>
//                   : "✔ Submit Appointment"}
//               </button>
//             )}
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }


// ===================================
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import citizenAxios from "../services/citizenAxios";

const STEPS = [
  { label:"Personal Details", icon:"👤" },
  { label:"Appointment",      icon:"📅" },
  { label:"Details",          icon:"ℹ️"  },
  { label:"Photo",            icon:"📷" },
  { label:"Review & Submit",  icon:"📋" },
];

function formatShortDate(d) {
  if (!d) return "—";
  return new Date(d + "T00:00:00").toLocaleDateString("en-IN", { weekday:"short", day:"numeric", month:"short", year:"numeric" });
}

export default function BookAppointment() {
  const navigate = useNavigate();
  const citizen  = (() => { try { return JSON.parse(localStorage.getItem("citizenUser")||"null"); } catch { return null; } })();

  const [step, setStep]             = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [availability, setAvail]    = useState([]);
  const [toast, setToast]           = useState(null);
  const [booked, setBooked]         = useState(null);
  const [animDir, setAnimDir]       = useState("forward"); // for step animation

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
    citizenAxios.get("/availability/get")
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

  const today        = new Date().toISOString().split("T")[0];
  const futureAvail  = availability.filter(a => a.date >= today);
  const selectedRecord  = futureAvail.find(a => a.date === form.preferredDate);
  const availableSlots  = selectedRecord?.timeSlots || [];

  const nextDisabled = (() => {
    if (step===0) return !form.fullName || !form.mobileNumber || !form.address;
    if (step===1) return !form.preferredDate || !form.slotTime;
    if (step===2) return !form.purpose || !form.ward;
    if (step===3) return !form.visitorPhoto;
    return false;
  })();

  const goNext = () => { setAnimDir("forward"); setStep(s=>s+1); };
  const goBack = () => { setAnimDir("back"); setStep(s=>s-1); };

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

      const res = await citizenAxios.post("/citizen/book-appointment", fd, {
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
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          .book-root { min-height:calc(100vh - 64px); background:#f0f4f8; display:flex; align-items:center; justify-content:center; padding:32px 16px; font-family:'Plus Jakarta Sans',sans-serif; }
          @keyframes successPop { 0%{transform:scale(0.7);opacity:0} 70%{transform:scale(1.08)} 100%{transform:scale(1);opacity:1} }
          @keyframes fadeUpIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
        `}</style>
        <div className="book-root">
          <div style={{ background:"#fff", borderRadius:20, padding:"48px 40px", maxWidth:520, width:"100%", textAlign:"center", boxShadow:"0 8px 40px rgba(76,171,193,0.18)", border:"1.5px solid #b2e4ee", animation:"fadeUpIn .5s ease" }}>
            <div style={{ width:90, height:90, borderRadius:"50%", background:"linear-gradient(135deg,#4CABC1,#66A962)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:44, margin:"0 auto 20px", animation:"successPop .5s cubic-bezier(.34,1.56,.64,1) both", boxShadow:"0 8px 24px rgba(76,171,193,0.35)" }}>✅</div>
            <h2 style={{ fontSize:26, fontWeight:800, color:"#18748", marginBottom:8, fontFamily:"'Plus Jakarta Sans',sans-serif", background:"linear-gradient(135deg,#4CABC1,#66A962)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Appointment Booked!</h2>
            <p style={{ color:"#4a5568", marginBottom:24, fontSize:14, fontWeight:500 }}>तुमची appointment successfully book झाली आहे</p>
            <div style={{ background:"linear-gradient(135deg,#f0faf9,#f5fef5)", border:"1.5px solid #b2e4ee", borderRadius:12, padding:"20px 24px", marginBottom:24, textAlign:"left" }}>
              {[
                ["Token ID",  booked.tokenId],
                ["Date",      formatShortDate(booked.preferredDate)],
                ["Slot",      booked.slotTime],
                ["Status",    "⏳ Pending — Admin approval बाकी आहे"],
              ].map(([k,v]) => (
                <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"9px 0", borderBottom:"1px solid #d4eff5", fontSize:13 }}>
                  <span style={{ color:"#5a7a88", fontWeight:600 }}>{k}</span>
                  <span style={{ color:"#18748", fontWeight:700 }}>{v}</span>
                </div>
              ))}
            </div>
            {booked.qrCode && (
              <div style={{ marginBottom:20 }}>
                <p style={{ fontSize:12, color:"#6b7280", marginBottom:8, fontWeight:600 }}>QR Code — भेटीच्या दिवशी दाखवा</p>
                <img src={booked.qrCode} alt="QR" style={{ width:130, height:130 }} />
              </div>
            )}
            <button onClick={() => navigate("/my-appointments")} style={{ width:"100%", padding:"13px", borderRadius:10, border:"none", background:"linear-gradient(135deg,#4CABC1,#49ACC3)", color:"#fff", fontWeight:700, fontSize:15, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif", boxShadow:"0 4px 16px rgba(76,171,193,0.4)", transition:"transform .15s" }}
              onMouseEnter={e=>e.target.style.transform="translateY(-1px)"}
              onMouseLeave={e=>e.target.style.transform="none"}
            >
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
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing:border-box; }

        /* ── Theme variables — screenshot matched ── */
        :root {
          --teal:    #3a9aaf;
          --teal2:   #2e8a9e;
          --teal-dk: #1d6e80;
          --gold:    #C9963A;
          --gold2:   #b8851f;
          --gold-lt: #e8c47a;
          --green:   #5a9656;
          --cream:   #F5E7C2;
          --cream2:  #fdf6e3;
          --text-hd: #2c4a2e;
          --text-bd: #3a3a2a;
          --text-sm: #5a5a3a;
          --border:  #d4b870;
          --bg-form: #fdf8ee;
        }

        .book-root {
          min-height: calc(100vh - 64px);
          background: #f0ece0;
          padding: 32px 24px;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
        }

        .book-wrapper {
          width: 90%;
          margin: 0 auto;
          background: var(--cream2);
          border-radius: 14px;
          box-shadow: 0 6px 40px rgba(0,0,0,0.15);
          border: 1.5px solid #c8b870;
          overflow: hidden;
        }

        /* ── Title bar — teal like screenshot ── */
        .book-titlebar {
          padding: 26px 40px 0;
          border-bottom: 2px solid #c8b870;
          background: linear-gradient(135deg, #3a9aaf 0%, #2a7a8e 100%);
        }
        .book-titlebar h1 {
          font-size: 22px;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 20px;
          letter-spacing: 0px;
          position: relative;
          display: inline-block;
          text-shadow: 0 1px 4px rgba(0,0,0,0.2);
        }
        .book-titlebar h1::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 48px;
          height: 3px;
          background: var(--gold);
          border-radius: 2px;
        }

        /* ── Stepper — gold/cream pills like screenshot ── */
        .stepper { display: flex; gap: 6px; padding-bottom: 0; }
        .step-tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,0.65);
          border-bottom: 3px solid transparent;
          cursor: default;
          white-space: nowrap;
          transition: all .25s;
          margin-bottom: -2px;
          border-radius: 8px 8px 0 0;
          background: rgba(255,255,255,0.1);
        }
        .step-tab.done  {
          background: rgba(255,255,255,0.15);
          color: #c8e8d0;
        }
        .step-tab.active {
          background: var(--cream);
          color: var(--teal-dk);
          border-bottom-color: var(--gold);
        }
        .step-dot {
          width: 22px; height: 22px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 800;
          flex-shrink: 0;
          transition: all .25s;
        }
        .step-dot.done   { background: var(--green); color: #fff; }
        .step-dot.active { background: var(--gold); color: #fff; box-shadow: 0 2px 8px rgba(201,150,58,0.5); }
        .step-dot.pending{ background: rgba(255,255,255,0.25); color: rgba(255,255,255,0.7); }

        /* ── Body ── */
        .book-body {
          padding: 32px 40px 0;
          background: var(--cream2);
        }
        .section-title {
          font-size: 17px;
          font-weight: 800;
          color: var(--text-hd);
          margin: 0 0 5px;
        }
        .section-sub {
          font-size: 13px;
          color: var(--text-sm);
          font-weight: 500;
          margin: 0 0 24px;
        }

        /* ── Fields ── */
        .field { margin-bottom: 20px; }

        .field label {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: var(--text-hd);
          margin-bottom: 7px;
        }
        .field label .req { color: #c0392b; margin-left: 2px; }

        .f-input {
          width: 100%;
          padding: 11px 14px;
          font-size: 14px;
          font-weight: 500;
          border: 1.5px solid var(--border);
          border-radius: 8px;
          outline: none;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
          box-sizing: border-box;
          transition: border-color .18s, box-shadow .18s;
          background: #fffef8;
          color: var(--text-bd);
        }
        .f-input:focus {
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(58,154,175,0.14);
          background: #fff;
        }
        .f-input::placeholder { color: #b0a070; font-weight: 400; }

        .f-grid-2    { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0 20px; }
        .f-grid-2-col{ display: grid; grid-template-columns: 1fr 1fr; gap: 0 20px; }
        @media(max-width:640px){
          .f-grid-2{ grid-template-columns:1fr; }
          .f-grid-2-col{ grid-template-columns:1fr; }
        }

        /* ── Date / Slot buttons — gold bordered like screenshot ── */
        .date-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px,1fr)); gap: 10px; }
        .date-btn {
          padding: 11px 14px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 700;
          font-size: 13px;
          border: 1.5px solid var(--border);
          background: #fffef8;
          color: var(--text-bd);
          transition: all .18s;
          text-align: left;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
        }
        .date-btn:hover { border-color: var(--teal); background: #edf9f0; color: var(--teal-dk); transform: translateY(-1px); box-shadow: 0 3px 10px rgba(58,154,175,0.15); }
        .date-btn.sel   { border-color: var(--teal); background: #dff2f6; color: var(--teal-dk); box-shadow: 0 3px 10px rgba(58,154,175,0.2); font-weight: 800; }
        .date-btn .sub  { font-size: 11.5px; color: #8a7a50; font-weight: 500; margin-top: 3px; }

        .slot-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px,1fr)); gap: 10px; }
        .slot-btn {
          padding: 10px 12px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 700;
          font-size: 12.5px;
          border: 1.5px solid var(--border);
          background: #fffef8;
          color: var(--text-bd);
          transition: all .18s;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
        }
        .slot-btn:hover { border-color: var(--teal); background: #edf9f0; color: var(--teal-dk); transform: translateY(-1px); }
        .slot-btn.sel   { border-color: var(--teal); background: #dff2f6; color: var(--teal-dk); box-shadow: 0 2px 8px rgba(58,154,175,0.2); font-weight: 800; }

        /* ── Info boxes ── */
        .info-box {
          background: #edf6f9;
          border: 1.5px solid #8acada;
          border-radius: 8px;
          padding: 11px 16px;
          font-size: 13px;
          font-weight: 600;
          color: #1a5f7a;
          margin-bottom: 16px;
        }
        .selected-box {
          background: #eaf7ee;
          border: 1.5px solid #7ec89a;
          border-radius: 8px;
          padding: 11px 16px;
          font-weight: 700;
          color: #1a5e2a;
          font-size: 13px;
          margin-bottom: 16px;
        }
        .empty-box {
          background: linear-gradient(135deg,#fffbeb,#fef3c7);
          border: 1.5px solid #e8c070;
          border-radius: 10px;
          padding: 28px;
          text-align: center;
          margin-bottom: 16px;
        }

        /* ── Review cards ── */
        .review-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media(max-width:640px){ .review-grid{ grid-template-columns:1fr; } }
        .review-card {
          background: #fffef5;
          border: 1.5px solid #d4c070;
          border-radius: 10px;
          padding: 16px 18px;
        }
        .review-card-title {
          font-size: 11.5px;
          font-weight: 800;
          color: var(--teal-dk);
          text-transform: uppercase;
          letter-spacing: .8px;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .review-card-title::before {
          content: '';
          display: inline-block;
          width: 14px; height: 3px;
          background: var(--gold);
          border-radius: 2px;
        }
        .review-row { display: flex; justify-content: space-between; padding: 7px 0; border-bottom: 1px solid #e8dfa0; font-size: 13.5px; }
        .review-row:last-child { border-bottom: none; }
        .review-key { color: #6a5a30; font-weight: 600; }
        .review-val { color: var(--text-hd); font-weight: 700; text-align: right; max-width: 55%; word-break: break-word; }

        .form-note {
          font-size: 12.5px;
          color: #7a6a3a;
          font-weight: 500;
          margin: 12px 0 0;
        }

        /* ── Nav ── */
        .book-nav {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 12px;
          padding: 24px 40px 32px;
          border-top: 1.5px solid #d4c070;
          margin-top: 28px;
          background: #fdf8ee;
        }
        .nav-cancel {
          padding: 11px 30px;
          border-radius: 8px;
          border: 1.5px solid #c0a850;
          background: #fffef0;
          color: var(--text-sm);
          font-weight: 700;
          font-size: 13.5px;
          cursor: pointer;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
          transition: all .18s;
        }
        .nav-cancel:hover { background: #f5edd0; border-color: var(--gold); color: var(--gold2); }
        .nav-continue {
          padding: 11px 34px;
          border-radius: 8px;
          border: none;
          background: linear-gradient(135deg, #3a9aaf, #2e8a9e);
          color: #fff;
          font-weight: 800;
          font-size: 13.5px;
          cursor: pointer;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
          display: flex; align-items: center; gap: 7px;
          transition: all .2s;
          box-shadow: 0 4px 14px rgba(58,154,175,0.4);
          letter-spacing: 0.2px;
        }
        .nav-continue:hover:not(:disabled) {
          background: linear-gradient(135deg, #2e8a9e, #1d6e80);
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(58,154,175,0.45);
        }
        .nav-continue:disabled { background: #c8c0a0; cursor: not-allowed; box-shadow: none; color: #888070; }

        /* ── Step progress bar — gold ── */
        .step-progress-bar {
          height: 4px;
          background: #e8dfa0;
        }
        .step-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--teal), var(--gold));
          transition: width .4s cubic-bezier(.4,0,.2,1);
        }

        /* ── Step body animation ── */
        @keyframes slideInForward {
          from { opacity:0; transform:translateX(28px); }
          to   { opacity:1; transform:none; }
        }
        @keyframes slideInBack {
          from { opacity:0; transform:translateX(-28px); }
          to   { opacity:1; transform:none; }
        }
        .step-body-forward { animation: slideInForward .3s cubic-bezier(.4,0,.2,1) both; }
        .step-body-back    { animation: slideInBack    .3s cubic-bezier(.4,0,.2,1) both; }

        /* ── Toast ── */
        .toast {
          position:fixed; top:80px; right:20px; z-index:9999;
          padding:12px 24px; border-radius:10px; font-weight:700; font-size:14px;
          color:#fff; box-shadow:0 6px 24px rgba(0,0,0,0.18);
          animation:toastIn .3s; font-family:'Plus Jakarta Sans',sans-serif;
        }
        @keyframes toastIn  { from{opacity:0;transform:translateY(-10px) scale(.95)} to{opacity:1;transform:none} }
        @keyframes spin      { to{transform:rotate(360deg)} }

        /* ── Photo buttons ── */
        .photo-btn-primary {
          padding: 11px 24px;
          border-radius: 8px;
          background: linear-gradient(135deg, #3a9aaf, #2e8a9e);
          color: #fff;
          font-weight: 700;
          font-size: 13.5px;
          cursor: pointer;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
          border: none;
          box-shadow: 0 3px 10px rgba(58,154,175,0.3);
          transition: all .18s;
        }
        .photo-btn-primary:hover { transform:translateY(-1px); box-shadow:0 5px 14px rgba(58,154,175,0.4); }
        .photo-btn-secondary {
          padding: 11px 24px;
          border-radius: 8px;
          border: 1.5px solid var(--teal);
          background: #fffef8;
          color: var(--teal-dk);
          font-weight: 700;
          font-size: 13.5px;
          cursor: pointer;
          font-family: 'Noto Sans', 'Mukta', 'Plus Jakarta Sans', sans-serif;
          transition: all .18s;
        }
        .photo-btn-secondary:hover { background:#dff2f6; }

        /* ── Radio custom ── */
        .radio-group { display:flex; gap:16px; margin-top:8px; }
        .radio-label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 700;
          color: var(--text-bd);
          padding: 8px 20px;
          border-radius: 8px;
          border: 1.5px solid var(--border);
          background: #fffef8;
          transition: all .15s;
        }
        .radio-label.selected { border-color: var(--teal); background: #dff2f6; color: var(--teal-dk); }
        .radio-label input { accentColor: var(--teal); width:15px; height:15px; }
      `}</style>

      {toast && <div className="toast" style={{ background: toast.type==="success" ? "var(--teal)" : "#dc2626" }}>{toast.msg}</div>}

      <div className="book-root">
        <div className="book-wrapper">

          {/* ── Title bar + Stepper ── */}
          <div className="book-titlebar">
            <h1>जनसंपर्क – Application Form</h1>
            <div className="stepper">
              {STEPS.map((s, i) => {
                const state = i < step ? "done" : i === step ? "active" : "pending";
                return (
                  <div key={i} className={`step-tab ${state}`}>
                    <div className={`step-dot ${state}`}>{state === "done" ? "✓" : i+1}</div>
                    {s.label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* progress bar */}
          <div className="step-progress-bar">
            <div className="step-progress-fill" style={{ width:`${((step+1)/STEPS.length)*100}%` }} />
          </div>

          {/* ── Form body ── */}
          <div className="book-body">
            <div className={animDir === "forward" ? "step-body-forward" : "step-body-back"} key={step}>

              {/* Step 0: Personal Details */}
              {step===0 && (
                <div>
                  <p className="section-title">Personal Information</p>
                  <p className="section-sub">Please provide your basic details to proceed</p>
                  <div className="f-grid-2">
                    <div className="field">
                      <label>Full Name <span className="req">*</span></label>
                      <input className="f-input" value={form.fullName} onChange={ch("fullName")} placeholder="आपले पूर्ण नाव" />
                    </div>
                    <div className="field">
                      <label>Mobile Number <span className="req">*</span></label>
                      <input className="f-input" type="tel" value={form.mobileNumber} onChange={ch("mobileNumber")} maxLength={10} placeholder="10 digit mobile" />
                    </div>
                    <div className="field">
                      <label>Email Address</label>
                      <input className="f-input" type="email" value={form.email} onChange={ch("email")} placeholder="Email (optional)" />
                    </div>
                  </div>
                  <div className="f-grid-2-col">
                    <div className="field">
                      <label>Pincode</label>
                      <input className="f-input" value={form.pincode} onChange={ch("pincode")} maxLength={6} placeholder="Pincode" />
                    </div>
                    <div className="field">
                      <label>Address <span className="req">*</span></label>
                      <input className="f-input" value={form.address} onChange={ch("address")} placeholder="पूर्ण पत्ता" />
                    </div>
                  </div>
                  <p className="form-note">* In order to process your appointment, all fields marked with an asterisk (*) are required.</p>
                </div>
              )}

              {/* Step 1: Appointment */}
              {step===1 && (
                <div>
                  <p className="section-title">Appointment Scheduling</p>
                  <p className="section-sub">Select your preferred date and time slot for the Mayor's visit</p>
                  {futureAvail.length === 0 ? (
                    <div className="empty-box">
                      <div style={{ fontSize:36, marginBottom:8 }}>📅</div>
                      <p style={{ color:"#92400e", fontWeight:700, margin:"0 0 4px", fontSize:15 }}>सध्या कोणत्याही dates available नाहीत</p>
                      <p style={{ color:"#a16207", fontSize:13.5, margin:0, fontWeight:500 }}>Admin कडून availability add होण्याची वाट पाहा</p>
                    </div>
                  ) : (
                    <>
                      <div className="field">
                        <label>Available Dates <span className="req">*</span></label>
                        <div className="date-grid">
                          {futureAvail.map((av, i) => (
                            <button key={i} type="button"
                              className={`date-btn${form.preferredDate===av.date?" sel":""}`}
                              onClick={() => setForm(p => ({ ...p, preferredDate:av.date, slotTime:"", slotStart:"", slotEnd:"" }))}>
                              📅 {formatShortDate(av.date)}
                              <div className="sub">{av.timeSlots?.length} slot{av.timeSlots?.length!==1?"s":""} available</div>
                            </button>
                          ))}
                        </div>
                      </div>
                      {form.preferredDate && (
                        <div className="field">
                          <label>Select Time Slot <span className="req">*</span></label>
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
                  <div className="info-box">ℹ️ <strong>Date निवडण्यासाठी:</strong> वरील available dates मधून date निवडा → नंतर time slot निवडा</div>
                </div>
              )}

              {/* Step 2: Details */}
              {step===2 && (
                <div>
                  <p className="section-title">Visit Information</p>
                  <p className="section-sub">Provide details about your visit to the Mayor</p>
                  <div className="field">
                    <label>Reason for Visit <span className="req">*</span></label>
                    <textarea className="f-input" rows={4} value={form.purpose} onChange={ch("purpose")} placeholder="Mayor ला भेटण्याचे कारण विस्ताराने लिहा — आपली समस्या स्पष्टपणे मांडा" style={{ resize:"vertical" }} />
                  </div>
                  <div className="f-grid-2">
                    <div className="field">
                      <label>Number of Visitors <span className="req">*</span></label>
                      <input className="f-input" type="number" min="1" max="10" value={form.numberOfVisitors} onChange={ch("numberOfVisitors")} />
                    </div>
                    <div className="field">
                      <label>Ward <span className="req">*</span></label>
                      <select className="f-input" value={form.ward} onChange={ch("ward")} style={{ cursor:"pointer" }}>
                        <option value="">Select Ward</option>
                        {["Ward A","Ward B","Ward C","Ward D","Ward E","Ward F","Ward G","Ward H","Ward I","Ward J","General"].map(w => <option key={w}>{w}</option>)}
                      </select>
                    </div>
                    <div className="field">
                      <label>Have you visited before? <span className="req">*</span></label>
                      <div className="radio-group">
                        {["No","Yes"].map(v => (
                          <label key={v} className={`radio-label${form.visitedBefore===(v==="Yes")?" selected":""}`}>
                            <input type="radio" name="vb" value={v}
                              checked={form.visitedBefore===(v==="Yes")}
                              onChange={() => setForm(p=>({...p,visitedBefore:v==="Yes"}))}
                              style={{ accentColor:"var(--teal)", width:15, height:15 }} />
                            {v}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Photo */}
              {step===3 && (
                <div>
                  <p className="section-title">Visitor Photo</p>
                  <p className="section-sub">Please upload or capture a clear photo for identification at the Mayor's office</p>
                  <div style={{ display:"flex", gap:12, marginBottom:20 }}>
                    <label className="photo-btn-primary">
                      📁 Upload Photo
                      <input type="file" accept="image/*" style={{ display:"none" }} onChange={e => { const f=e.target.files[0]; if(f) setForm(p=>({...p,visitorPhoto:f,photoPreview:URL.createObjectURL(f)})); }} />
                    </label>
                    <button type="button" onClick={startCam} className="photo-btn-secondary">📷 Use Webcam</button>
                  </div>
                  {showCam ? (
                    <div style={{ position:"relative", borderRadius:12, overflow:"hidden", border:"2px solid var(--border)", marginBottom:16 }}>
                      <button type="button" onClick={stopCam} style={{ position:"absolute", top:10, right:10, zIndex:10, width:30, height:30, borderRadius:"50%", background:"#ef4444", color:"#fff", border:"none", cursor:"pointer", fontWeight:800 }}>✕</button>
                      <video ref={videoRef} autoPlay playsInline style={{ width:"100%", maxHeight:340, objectFit:"cover", display:"block" }} />
                      <canvas ref={canvasRef} style={{ display:"none" }} />
                      <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:16, background:"linear-gradient(transparent,rgba(0,0,0,0.55))", display:"flex", justifyContent:"center" }}>
                        <button type="button" onClick={capturePic} style={{ padding:"11px 30px", borderRadius:9, border:"none", background:"linear-gradient(135deg,var(--teal),var(--green))", color:"#fff", fontWeight:800, fontSize:14, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif", boxShadow:"0 4px 16px rgba(76,171,193,0.4)" }}>📸 Capture Photo</button>
                      </div>
                    </div>
                  ) : (
                    <div style={{ border:"2.5px dashed #b2d8e4", borderRadius:14, padding:36, textAlign:"center", background:"linear-gradient(135deg,#f7fcfe,#f5fef5)", marginBottom:16, transition:"all .2s" }}>
                      {form.photoPreview ? (
                        <>
                          <img src={form.photoPreview} alt="preview" style={{ width:110, height:110, borderRadius:"50%", objectFit:"cover", border:"3px solid var(--teal)", marginBottom:14, boxShadow:"0 4px 20px rgba(76,171,193,0.3)" }} />
                          <p style={{ color:"var(--green)", fontWeight:700, fontSize:14, margin:"0 0 4px" }}>✅ Photo selected</p>
                          <p style={{ color:"#6a9aaa", fontSize:12.5, margin:0, fontWeight:500 }}>Click "Upload Photo" to change</p>
                        </>
                      ) : (
                        <>
                          <div style={{ fontSize:44, marginBottom:12, color:"#b2d8e4" }}>📷</div>
                          <p style={{ color:"#6a9aaa", fontSize:14, margin:0, fontWeight:600 }}>Upload किंवा camera वापरून photo द्या</p>
                        </>
                      )}
                    </div>
                  )}
                  {camErr && <p style={{ color:"#ef4444", fontSize:13, marginTop:4, fontWeight:600 }}>{camErr}</p>}
                </div>
              )}

              {/* Step 4: Review */}
              {step===4 && (
                <div>
                  <p className="section-title">Review & Submit</p>
                  <p className="section-sub">सर्व माहिती verify करा आणि submit करा</p>
                  <div className="review-grid">
                    {[
                      { title:"Personal Info", rows:[["Name",form.fullName],["Mobile",form.mobileNumber],["Email",form.email||"—"],["Address",form.address],["Pincode",form.pincode||"—"]] },
                      { title:"Appointment",   rows:[["Date",formatShortDate(form.preferredDate)],["Slot",form.slotTime]] },
                      { title:"Visit Details", rows:[["Purpose",form.purpose],["Visitors",form.numberOfVisitors],["Visited Before",form.visitedBefore?"Yes":"No"],["Ward",form.ward]] },
                    ].map((sec,i) => (
                      <div key={i} className="review-card" style={{ animationDelay:`${i*80}ms` }}>
                        <div className="review-card-title">{sec.title}</div>
                        {sec.rows.map(([k,v]) => <div key={k} className="review-row"><span className="review-key">{k}</span><span className="review-val">{v}</span></div>)}
                      </div>
                    ))}
                    {form.photoPreview && (
                      <div className="review-card" style={{ textAlign:"center" }}>
                        <div className="review-card-title">Visitor Photo</div>
                        <img src={form.photoPreview} alt="v" style={{ width:88, height:88, borderRadius:"50%", objectFit:"cover", border:"3px solid var(--teal)", marginTop:8, boxShadow:"0 4px 16px rgba(76,171,193,0.25)" }} />
                      </div>
                    )}
                  </div>
                  <div style={{ background:"linear-gradient(135deg,#fffbeb,#fef3c7)", border:"1.5px solid #fcd34d", borderRadius:10, padding:"13px 18px", margin:"16px 0 0", fontSize:13.5, color:"#92400e", fontWeight:600 }}>
                    ⚠️ Submit केल्यानंतर Admin approval नंतर appointment confirm होईल.
                  </div>
                </div>
              )}

            </div>{/* end animated wrapper */}
          </div>

          {/* ── Nav ── */}
          <div className="book-nav">
            <button className="nav-cancel" onClick={() => step > 0 ? goBack() : navigate(-1)}>
              {step > 0 ? "← Back" : "CANCEL"}
            </button>
            {step < STEPS.length-1 ? (
              <button className="nav-continue" disabled={nextDisabled} onClick={goNext}>
                CONTINUE →
              </button>
            ) : (
              <button className="nav-continue" disabled={submitting} onClick={handleSubmit}>
                {submitting
                  ? <><span style={{ width:14, height:14, border:"2px solid rgba(255,255,255,0.4)", borderTopColor:"#fff", borderRadius:"50%", animation:"spin .7s linear infinite", display:"inline-block" }} /> Submitting...</>
                  : "✔ Submit Appointment"}
              </button>
            )}
          </div>

        </div>
      </div>
    </>
  );
}