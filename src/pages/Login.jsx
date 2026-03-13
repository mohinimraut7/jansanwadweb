// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import citizenAxios from "../services/citizenAxios";

// // export default function Login() {
// //   const navigate = useNavigate();
// //   const [form, setForm]       = useState({ mobileNumber: "", password: "" });
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError]     = useState("");

// //   const ch = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }));

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setError("");
// //     if (!form.mobileNumber || !form.password) { setError("सर्व fields भरा ❌"); return; }
// //     try {
// //       setLoading(true);
// //       const res = await citizenAxios.post("/api/citizen/login", form);
// //       if (!res.data.success) { setError(res.data.message || "Login failed ❌"); return; }
// //       localStorage.setItem("citizenUser", JSON.stringify(res.data.citizen));
// //       navigate("/my-appointments");
// //     } catch (e) {
// //       setError(e?.response?.data?.message || "Server Error ❌");
// //     } finally { setLoading(false); }
// //   };

// //   return (
// //     <>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
// //         .auth-root { min-height:calc(100vh - 64px); background:#f0fdf4; display:flex; align-items:center; justify-content:center; padding:32px 16px; font-family:'DM Sans',sans-serif; }
// //         .auth-card { background:#fff; border-radius:20px; box-shadow:0 8px 40px rgba(0,0,0,0.1); overflow:hidden; width:100%; max-width:420px; }
// //         .auth-header { background:linear-gradient(135deg,#1a4a2e,#16a34a); padding:32px; color:#fff; }
// //         .auth-header h2 { font-family:'Crimson Pro',serif; font-size:26px; font-weight:800; margin:0 0 6px; }
// //         .auth-header p { font-size:13px; color:#bbf7d0; margin:0; }
// //         .auth-body { padding:32px; }
// //         .auth-field { margin-bottom:18px; }
// //         .auth-label { display:block; font-size:12px; font-weight:600; color:#374151; text-transform:uppercase; letter-spacing:.5px; margin-bottom:6px; }
// //         .auth-input { width:100%; padding:11px 14px; font-size:14px; border:1.5px solid #d1d5db; border-radius:8px; outline:none; font-family:'DM Sans',sans-serif; box-sizing:border-box; transition:border-color .15s,box-shadow .15s; background:#f9fafb; }
// //         .auth-input:focus { border-color:#16a34a; box-shadow:0 0 0 3px rgba(22,163,74,0.12); background:#fff; }
// //         .auth-error { background:#fef2f2; border:1px solid #fecaca; border-radius:8px; padding:10px 14px; font-size:13px; color:#dc2626; margin-bottom:16px; font-weight:500; }
// //         .auth-btn { width:100%; padding:12px; border-radius:8px; border:none; background:#16a34a; color:#fff; font-weight:700; font-size:15px; cursor:pointer; transition:all .2s; box-shadow:0 4px 14px rgba(22,163,74,0.3); font-family:'DM Sans',sans-serif; }
// //         .auth-btn:hover:not(:disabled) { background:#15803d; transform:translateY(-1px); }
// //         .auth-btn:disabled { background:#d1d5db; cursor:not-allowed; box-shadow:none; transform:none; }
// //         .auth-footer { text-align:center; margin-top:20px; font-size:13px; color:#6b7280; }
// //         .auth-link { color:#16a34a; font-weight:700; cursor:pointer; }
// //         .auth-link:hover { text-decoration:underline; }
// //         .auth-divider { display:flex; align-items:center; gap:12px; margin:20px 0; }
// //         .auth-divider-line { flex:1; height:1px; background:#e5e7eb; }
// //         .auth-divider-text { font-size:12px; color:#9ca3af; font-weight:500; }
// //       `}</style>

// //       <div className="auth-root">
// //         <div className="auth-card">
// //           <div className="auth-header">
// //             <h2>Welcome Back 👋</h2>
// //             <p>Mayor Appointment Portal मध्ये login करा</p>
// //           </div>
// //           <div className="auth-body">
// //             {error && <div className="auth-error">⚠️ {error}</div>}
// //             <form onSubmit={handleLogin}>
// //               <div className="auth-field">
// //                 <label className="auth-label">Mobile Number</label>
// //                 <input className="auth-input" type="tel" placeholder="10 digit mobile number"
// //                   value={form.mobileNumber} onChange={ch("mobileNumber")} maxLength={10} />
// //               </div>
// //               <div className="auth-field">
// //                 <label className="auth-label">Password</label>
// //                 <input className="auth-input" type="password" placeholder="Password टाका"
// //                   value={form.password} onChange={ch("password")} />
// //               </div>
// //               <button type="submit" className="auth-btn" disabled={loading || !form.mobileNumber || !form.password}>
// //                 {loading ? "Logging in..." : "🔐 Login"}
// //               </button>
// //             </form>
// //             <div className="auth-footer">
// //               Account नाही?{" "}
// //               <span className="auth-link" onClick={() => navigate("/register")}>Register करा</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // =================================

// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import citizenAxios from "../services/citizenAxios";

// // export default function Login() {
// //   const navigate = useNavigate();

// //   // "password" | "otp"
// //   const [mode, setMode]       = useState("password");
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError]     = useState("");
// //   const [success, setSuccess] = useState("");

// //   // Password login form
// //   const [form, setForm] = useState({ mobileNumber: "", password: "" });
// //   const ch = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }));

// //   // OTP login form (mobile-only)
// //   const [otpMobile, setOtpMobile] = useState("");

// //   // ── Password Login ──────────────────────────────────────────────────────
// //   const handlePasswordLogin = async (e) => {
// //     e.preventDefault();
// //     setError(""); setSuccess("");
// //     if (!form.mobileNumber || !form.password) { setError("सर्व fields भरा ❌"); return; }
// //     try {
// //       setLoading(true);
// //       const res = await citizenAxios.post("/api/citizen/login", form);
// //       if (!res.data.success) { setError(res.data.message || "Login failed ❌"); return; }
// //       localStorage.setItem("citizenUser",  JSON.stringify(res.data.citizen));
// //       localStorage.setItem("citizenToken", res.data.token || "");
// //       navigate("/my-appointments");
// //     } catch (e) {
// //       setError(e?.response?.data?.message || "Server Error ❌");
// //     } finally { setLoading(false); }
// //   };

// //   // ── OTP / Mobile Login ──────────────────────────────────────────────────
// //   const handleOtpLogin = async (e) => {
// //     e.preventDefault();
// //     setError(""); setSuccess("");
// //     if (!otpMobile || otpMobile.length !== 10) { setError("Valid 10 digit mobile number द्या ❌"); return; }
// //     try {
// //       setLoading(true);
// //       const res = await citizenAxios.post("/api/citizen/citizenLoginByMobile", { mobileNo: otpMobile });
// //       if (!res.data.success) { setError(res.data.message || "Login failed ❌"); return; }
// //       localStorage.setItem("citizenUser",  JSON.stringify(res.data.citizen));
// //       localStorage.setItem("citizenToken", res.data.token || "");
// //       setSuccess("Login successful! Redirecting... ✅");
// //       setTimeout(() => navigate("/my-appointments"), 1000);
// //     } catch (e) {
// //       setError(e?.response?.data?.message || "Server Error ❌");
// //     } finally { setLoading(false); }
// //   };

// //   return (
// //     <>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

// //         .auth-root { min-height:calc(100vh - 64px); background:#f0fdf4; display:flex; align-items:center; justify-content:center; padding:32px 16px; font-family:'DM Sans',sans-serif; }
// //         .auth-card { background:#fff; border-radius:20px; box-shadow:0 8px 40px rgba(0,0,0,0.1); overflow:hidden; width:100%; max-width:420px; }
// //         .auth-header { background:linear-gradient(135deg,#1a4a2e,#16a34a); padding:32px; color:#fff; }
// //         .auth-header h2 { font-family:'Crimson Pro',serif; font-size:26px; font-weight:800; margin:0 0 6px; }
// //         .auth-header p  { font-size:13px; color:#bbf7d0; margin:0; }
// //         .auth-body  { padding:32px; }

// //         /* Mode Toggle */
// //         .mode-toggle { display:flex; background:#f3f4f6; border-radius:10px; padding:4px; margin-bottom:24px; }
// //         .mode-btn { flex:1; padding:9px; border:none; border-radius:8px; font-size:13px; font-weight:600; cursor:pointer; transition:all .2s; background:transparent; color:#6b7280; font-family:'DM Sans',sans-serif; }
// //         .mode-btn.active { background:#fff; color:#16a34a; box-shadow:0 1px 6px rgba(0,0,0,0.12); }

// //         .auth-field  { margin-bottom:18px; }
// //         .auth-label  { display:block; font-size:12px; font-weight:600; color:#374151; text-transform:uppercase; letter-spacing:.5px; margin-bottom:6px; }
// //         .auth-input  { width:100%; padding:11px 14px; font-size:14px; border:1.5px solid #d1d5db; border-radius:8px; outline:none; font-family:'DM Sans',sans-serif; box-sizing:border-box; transition:border-color .15s,box-shadow .15s; background:#f9fafb; }
// //         .auth-input:focus { border-color:#16a34a; box-shadow:0 0 0 3px rgba(22,163,74,0.12); background:#fff; }

// //         .auth-error   { background:#fef2f2; border:1px solid #fecaca; border-radius:8px; padding:10px 14px; font-size:13px; color:#dc2626; margin-bottom:16px; font-weight:500; }
// //         .auth-success { background:#f0fdf4; border:1px solid #86efac; border-radius:8px; padding:10px 14px; font-size:13px; color:#16a34a; margin-bottom:16px; font-weight:500; }

// //         .auth-btn { width:100%; padding:12px; border-radius:8px; border:none; background:#16a34a; color:#fff; font-weight:700; font-size:15px; cursor:pointer; transition:all .2s; box-shadow:0 4px 14px rgba(22,163,74,0.3); font-family:'DM Sans',sans-serif; }
// //         .auth-btn:hover:not(:disabled) { background:#15803d; transform:translateY(-1px); }
// //         .auth-btn:disabled { background:#d1d5db; cursor:not-allowed; box-shadow:none; transform:none; }

// //         .auth-note   { background:#fffbeb; border:1px solid #fde68a; border-radius:8px; padding:10px 14px; font-size:12px; color:#92400e; margin-bottom:16px; line-height:1.5; }
// //         .auth-footer { text-align:center; margin-top:20px; font-size:13px; color:#6b7280; }
// //         .auth-link   { color:#16a34a; font-weight:700; cursor:pointer; }
// //         .auth-link:hover { text-decoration:underline; }
// //       `}</style>

// //       <div className="auth-root">
// //         <div className="auth-card">

// //           {/* Header */}
// //           <div className="auth-header">
// //             <h2>Welcome Back 👋</h2>
// //             <p>Mayor Appointment Portal मध्ये login करा</p>
// //           </div>

// //           <div className="auth-body">

// //             {/* Mode Toggle */}
// //             <div className="mode-toggle">
// //               <button className={`mode-btn ${mode === "password" ? "active" : ""}`}
// //                 onClick={() => { setMode("password"); setError(""); setSuccess(""); }}>
// //                 🔐 Password Login
// //               </button>
// //               <button className={`mode-btn ${mode === "otp" ? "active" : ""}`}
// //                 onClick={() => { setMode("otp"); setError(""); setSuccess(""); }}>
// //                 📱 Mobile Login
// //               </button>
// //             </div>

// //             {/* Error / Success */}
// //             {error   && <div className="auth-error">⚠️ {error}</div>}
// //             {success && <div className="auth-success">{success}</div>}

// //             {/* ── PASSWORD LOGIN ── */}
// //             {mode === "password" && (
// //               <form onSubmit={handlePasswordLogin}>
// //                 <div className="auth-field">
// //                   <label className="auth-label">Mobile Number</label>
// //                   <input className="auth-input" type="tel" placeholder="10 digit mobile number"
// //                     value={form.mobileNumber} onChange={ch("mobileNumber")} maxLength={10} />
// //                 </div>
// //                 <div className="auth-field">
// //                   <label className="auth-label">Password</label>
// //                   <input className="auth-input" type="password" placeholder="Password टाका"
// //                     value={form.password} onChange={ch("password")} />
// //                 </div>
// //                 <button type="submit" className="auth-btn"
// //                   disabled={loading || !form.mobileNumber || !form.password}>
// //                   {loading ? "Logging in..." : "🔐 Login"}
// //                 </button>
// //               </form>
// //             )}

// //             {/* ── MOBILE / OTP LOGIN ── */}
// //             {mode === "otp" && (
// //               <form onSubmit={handleOtpLogin}>
// //                 <div className="auth-note">
// //                   📌 फक्त mobile number टाका — account नसल्यास <strong>auto-register</strong> होईल.
// //                 </div>
// //                 <div className="auth-field">
// //                   <label className="auth-label">Mobile Number</label>
// //                   <input className="auth-input" type="tel" placeholder="10 digit mobile number"
// //                     value={otpMobile}
// //                     onChange={(e) => setOtpMobile(e.target.value.replace(/\D/g, ""))}
// //                     maxLength={10} />
// //                 </div>
// //                 <button type="submit" className="auth-btn"
// //                   disabled={loading || otpMobile.length !== 10}>
// //                   {loading ? "Verifying..." : "📱 Mobile ने Login करा"}
// //                 </button>
// //               </form>
// //             )}

// //             {/* Footer */}
// //             <div className="auth-footer">
// //               Account नाही?{" "}
// //               <span className="auth-link" onClick={() => navigate("/register")}>Register करा</span>
// //             </div>

// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }



// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import citizenAxios from "../services/citizenAxios";

// export default function Login() {
//   const navigate = useNavigate();

//   // ── Tab: "password" | "otp" ───────────────────────────────────────────────
//   const [mode, setMode]         = useState("password");

//   // ── Password Login State ──────────────────────────────────────────────────
//   const [form, setForm]         = useState({ mobileNumber: "", password: "" });
//   const [loading, setLoading]   = useState(false);
//   const [error, setError]       = useState("");

//   // ── OTP Login State ───────────────────────────────────────────────────────
//   const [otpStep, setOtpStep]           = useState("mobile"); // "mobile" | "otp"
//   const [mobileNo, setMobileNo]         = useState("");
//   const [otp, setOtp]                   = useState(["", "", "", "", "", ""]);
//   const [generatedOtp, setGeneratedOtp] = useState("");
//   const [timeLeft, setTimeLeft]         = useState(0);
//   const [canResend, setCanResend]       = useState(false);
//   const [otpLoading, setOtpLoading]     = useState(false);
//   const otpRefs = useRef([]);

//   const ch = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }));

//   // ── Countdown Timer ───────────────────────────────────────────────────────
//   useEffect(() => {
//     if (timeLeft <= 0) { setCanResend(true); return; }
//     const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
//     return () => clearTimeout(t);
//   }, [timeLeft]);

//   const formatTime = (s) =>
//     `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

//   // ── Password Login ────────────────────────────────────────────────────────
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     if (!form.mobileNumber || !form.password) { setError("सर्व fields भरा ❌"); return; }
//     try {
//       setLoading(true);
//       const res = await citizenAxios.post("/login", form);
//       if (!res.data.success) { setError(res.data.message || "Login failed ❌"); return; }
//       localStorage.setItem("citizenUser", JSON.stringify(res.data.citizen));
//       navigate("/my-appointments");
//     } catch (e) {
//       setError(e?.response?.data?.message || "Server Error ❌");
//     } finally { setLoading(false); }
//   };

//   // ── Send OTP ──────────────────────────────────────────────────────────────
//   const sendOtp = async () => {
//     const mobile = mobileNo.trim();
//     if (!/^[0-9]{10}$/.test(mobile)) { setError("10 अंकी valid mobile number टाका!"); return; }
//     setError("");
//     setOtpLoading(true);
//     const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
//     setGeneratedOtp(newOtp);
//     setTimeLeft(60);
//     setCanResend(false);
//     setOtp(["", "", "", "", "", ""]);

//     try {
//       // Backend madhe SMS pathvto - CORS problem nahi
//       await citizenAxios.post("/api/citizen/citizenLoginByMobile", { mobile, otp: newOtp });
//       setError("");
//       setOtpStep("otp");
//       setTimeout(() => otpRefs.current[0]?.focus(), 120);
//     } catch (err) {
//       console.error("Send OTP Error:", err);
//       setError("OTP पाठवण्यात अयशस्वी ❌");
//     } finally {
//       setOtpLoading(false);
//     }
//   };

//   // ── OTP Box Handlers ──────────────────────────────────────────────────────
//   const handleOtpChange = (index, value) => {
//     if (!/^[0-9]?$/.test(value)) return;
//     const next = [...otp]; next[index] = value; setOtp(next);
//     if (value && index < 5) otpRefs.current[index + 1]?.focus();
//   };
//   const handleOtpKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) otpRefs.current[index - 1]?.focus();
//   };
//   const handleOtpPaste = (e) => {
//     e.preventDefault();
//     const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
//     const next = [...otp];
//     pasted.split("").forEach((ch, i) => { next[i] = ch; });
//     setOtp(next);
//     otpRefs.current[Math.min(pasted.length, 5)]?.focus();
//   };

//   // ── Verify OTP → Login ────────────────────────────────────────────────────
//   const verifyOtp = async () => {
//     const entered = otp.join("");
//     if (entered.length < 6) { setError("6 अंकी OTP टाका!"); return; }
//     if (timeLeft <= 0)       { setError("OTP expire झाला! पुन्हा पाठवा."); return; }
//     if (entered !== generatedOtp) {
//       setError("❌ चुकीचा OTP!");
//       setOtp(["", "", "", "", "", ""]);
//       otpRefs.current[0]?.focus();
//       return;
//     }
//     try {
//       setOtpLoading(true);
//       setError("");
//       const res = await citizenAxios.post("/citizenLoginByMobile", { mobileNo: mobileNo.trim() });
//       if (!res.data.success) { setError(res.data.message || "Login failed ❌"); return; }
//       localStorage.setItem("citizenUser",  JSON.stringify(res.data.citizen));
//       localStorage.setItem("citizenToken", res.data.token || "");
//       navigate("/my-appointments");
//     } catch (err) {
//       setError(err?.response?.data?.message || "Server Error ❌");
//     } finally {
//       setOtpLoading(false);
//     }
//   };

//   const switchMode = (m) => {
//     setMode(m);
//     setError("");
//     setOtpStep("mobile");
//     setOtp(["", "", "", "", "", ""]);
//     setMobileNo("");
//     setTimeLeft(0);
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
//         .auth-root { min-height:calc(100vh - 64px); background:#f0fdf4; display:flex; align-items:center; justify-content:center; padding:32px 16px; font-family:'DM Sans',sans-serif; }
//         .auth-card { background:#fff; border-radius:20px; box-shadow:0 8px 40px rgba(0,0,0,0.1); overflow:hidden; width:100%; max-width:420px; }
//         .auth-header { background:linear-gradient(135deg,#1a4a2e,#16a34a); padding:32px; color:#fff; }
//         .auth-header h2 { font-family:'Crimson Pro',serif; font-size:26px; font-weight:800; margin:0 0 6px; }
//         .auth-header p { font-size:13px; color:#bbf7d0; margin:0; }
//         .auth-body { padding:32px; }
//         .auth-field { margin-bottom:18px; }
//         .auth-label { display:block; font-size:12px; font-weight:600; color:#374151; text-transform:uppercase; letter-spacing:.5px; margin-bottom:6px; }
//         .auth-input { width:100%; padding:11px 14px; font-size:14px; border:1.5px solid #d1d5db; border-radius:8px; outline:none; font-family:'DM Sans',sans-serif; box-sizing:border-box; transition:border-color .15s,box-shadow .15s; background:#f9fafb; }
//         .auth-input:focus { border-color:#16a34a; box-shadow:0 0 0 3px rgba(22,163,74,0.12); background:#fff; }
//         .auth-error { background:#fef2f2; border:1px solid #fecaca; border-radius:8px; padding:10px 14px; font-size:13px; color:#dc2626; margin-bottom:16px; font-weight:500; }
//         .auth-btn { width:100%; padding:12px; border-radius:8px; border:none; background:#16a34a; color:#fff; font-weight:700; font-size:15px; cursor:pointer; transition:all .2s; box-shadow:0 4px 14px rgba(22,163,74,0.3); font-family:'DM Sans',sans-serif; }
//         .auth-btn:hover:not(:disabled) { background:#15803d; transform:translateY(-1px); }
//         .auth-btn:disabled { background:#d1d5db; cursor:not-allowed; box-shadow:none; transform:none; }
//         .auth-btn.orange { background:linear-gradient(135deg,#f97316,#ea580c); box-shadow:0 4px 14px rgba(249,115,22,0.36); }
//         .auth-btn.orange:hover:not(:disabled) { background:linear-gradient(135deg,#ea580c,#c2410c); }
//         .auth-footer { text-align:center; margin-top:20px; font-size:13px; color:#6b7280; }
//         .auth-link { color:#16a34a; font-weight:700; cursor:pointer; }
//         .auth-link:hover { text-decoration:underline; }
//         .auth-divider { display:flex; align-items:center; gap:12px; margin:20px 0; }
//         .auth-divider-line { flex:1; height:1px; background:#e5e7eb; }
//         .auth-divider-text { font-size:12px; color:#9ca3af; font-weight:500; }
//         .switch-link { font-size:13px; color:#16a34a; font-weight:600; cursor:pointer; text-align:center; }
//         .switch-link:hover { text-decoration:underline; }

//         /* OTP boxes */
//         .otp-row { display:flex; gap:8px; justify-content:center; margin-bottom:16px; }
//         .otp-box { width:44px; height:50px; border:1.5px solid #d1d5db; border-radius:10px; font-size:22px; font-weight:800; text-align:center; color:#111827; font-family:'DM Sans',sans-serif; outline:none; background:#f9fafb; transition:all .18s; }
//         .otp-box:focus { border-color:#16a34a; background:#fff; box-shadow:0 0 0 3px rgba(22,163,74,0.12); }
//         .otp-box:not(:placeholder-shown) { border-color:#16a34a; background:#f0fdf4; }

//         /* Timer */
//         .otp-timer { text-align:center; font-size:12px; color:#64748b; margin-bottom:12px; }
//         .otp-timer strong { font-size:13px; }
//         .resend-btn { background:none; border:none; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:700; cursor:pointer; transition:all .2s; }
//         .resend-btn:disabled { color:#94a3b8; cursor:not-allowed; }
//         .resend-btn:not(:disabled) { color:#f97316; }
//         .resend-btn:not(:disabled):hover { text-decoration:underline; }

//         /* Back button */
//         .otp-back { background:none; border:none; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:600; color:#64748b; cursor:pointer; display:flex; align-items:center; gap:3px; margin-bottom:14px; padding:0; transition:color .2s; }
//         .otp-back:hover { color:#16a34a; }

//         /* prefix */
//         .lp-fwrap { position:relative; }
//         .lp-prefix { position:absolute; left:12px; top:50%; transform:translateY(-50%); font-size:12px; font-weight:700; color:#374151; pointer-events:none; }
//         .auth-input.with-prefix { padding-left:54px; }

//         @keyframes fadeUp { from{opacity:0;transform:translateY(8px);} to{opacity:1;transform:translateY(0);} }
//         .fade-up { animation:fadeUp .25s ease both; }
//       `}</style>

//       <div className="auth-root">
//         <div className="auth-card">
//           <div className="auth-header">
//             <h2>Welcome Back 👋</h2>
//             <p>Mayor Appointment Portal मध्ये login करा</p>
//           </div>
//           <div className="auth-body">

//             {error && <div className="auth-error">⚠️ {error}</div>}

//             {/* ── PASSWORD LOGIN ── */}
//             {mode === "password" && (
//               <div className="fade-up">
//                 <form onSubmit={handleLogin}>
//                   <div className="auth-field">
//                     <label className="auth-label">Mobile Number</label>
//                     <input className="auth-input" type="tel" placeholder="10 digit mobile number"
//                       value={form.mobileNumber} onChange={ch("mobileNumber")} maxLength={10} />
//                   </div>
//                   <div className="auth-field">
//                     <label className="auth-label">Password</label>
//                     <input className="auth-input" type="password" placeholder="Password टाका"
//                       value={form.password} onChange={ch("password")} />
//                   </div>
//                   <button type="submit" className="auth-btn"
//                     disabled={loading || !form.mobileNumber || !form.password}>
//                     {loading ? "Logging in..." : "🔐 Login"}
//                   </button>

//                   <div className="auth-divider">
//                     <div className="auth-divider-line" />
//                     <span className="auth-divider-text">किंवा</span>
//                     <div className="auth-divider-line" />
//                   </div>

//                   <div className="switch-link" onClick={() => switchMode("otp")}>
//                     📱 OTP ने login करा
//                   </div>
//                 </form>
//               </div>
//             )}

//             {/* ── OTP LOGIN ── */}
//             {mode === "otp" && (
//               <div className="fade-up">

//                 {/* STEP 1: Mobile Number */}
//                 {otpStep === "mobile" && (
//                   <>
//                     <div className="auth-field">
//                       <label className="auth-label">Mobile Number</label>
//                       <div className="lp-fwrap">
//                         <span className="lp-prefix">🇮🇳 +91</span>
//                         <input
//                           className="auth-input with-prefix"
//                           type="tel"
//                           maxLength={10}
//                           placeholder="10 अंकी नंबर"
//                           value={mobileNo}
//                           onChange={(e) => setMobileNo(e.target.value.replace(/\D/g, "").slice(0, 10))}
//                           onKeyDown={(e) => e.key === "Enter" && sendOtp()}
//                           autoFocus
//                         />
//                       </div>
//                     </div>
//                     <button
//                       className="auth-btn orange"
//                       onClick={sendOtp}
//                       disabled={mobileNo.length !== 10 || otpLoading}
//                     >
//                       {otpLoading ? "⏳ पाठवत आहे..." : "OTP पाठवा →"}
//                     </button>

//                     <div className="auth-divider">
//                       <div className="auth-divider-line" />
//                       <span className="auth-divider-text">किंवा</span>
//                       <div className="auth-divider-line" />
//                     </div>
//                     <div className="switch-link" onClick={() => switchMode("password")}>
//                       🔐 Password ने login करा
//                     </div>
//                   </>
//                 )}

//                 {/* STEP 2: Enter OTP */}
//                 {otpStep === "otp" && (
//                   <>
//                     <button className="otp-back" onClick={() => { setOtpStep("mobile"); setOtp(["","","","","",""]); setError(""); }}>
//                       ← मागे जा
//                     </button>

//                     <div style={{ fontSize:13, color:"#64748b", marginBottom:16 }}>
//                       <span style={{ color:"#f97316", fontWeight:700 }}>+91 ******{mobileNo.slice(-3)}</span> वर OTP पाठवला
//                     </div>

//                     <div className="otp-row" onPaste={handleOtpPaste}>
//                       {otp.map((digit, i) => (
//                         <input
//                           key={i}
//                           ref={(el) => (otpRefs.current[i] = el)}
//                           className="otp-box"
//                           type="tel"
//                           maxLength={1}
//                           value={digit}
//                           placeholder="·"
//                           onChange={(e) => handleOtpChange(i, e.target.value)}
//                           onKeyDown={(e) => handleOtpKeyDown(i, e)}
//                         />
//                       ))}
//                     </div>

//                     {/* Timer & Resend */}
//                     <div className="otp-timer">
//                       {timeLeft > 0 ? (
//                         <>
//                           OTP expire होईल:{" "}
//                           <strong style={{ color: timeLeft <= 15 ? "#dc2626" : "#f97316" }}>
//                             {formatTime(timeLeft)}
//                           </strong>
//                         </>
//                       ) : (
//                         <span style={{ color:"#dc2626", fontWeight:600 }}>OTP expire झाला!</span>
//                       )}
//                       <div style={{ marginTop:5 }}>
//                         OTP नाही मिळाला?{" "}
//                         <button className="resend-btn" onClick={sendOtp} disabled={!canResend}>
//                           पुन्हा पाठवा
//                         </button>
//                       </div>
//                     </div>

//                     <button
//                       className="auth-btn"
//                       onClick={verifyOtp}
//                       disabled={otp.join("").length < 6 || otpLoading}
//                     >
//                       {otpLoading ? "⏳ Verifying..." : "✅ Verify & Login"}
//                     </button>
//                   </>
//                 )}
//               </div>
//             )}

//             <div className="auth-footer">
//               Account नाही?{" "}
//               <span className="auth-link" onClick={() => navigate("/register")}>Register करा</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import citizenAxios from "../services/citizenAxios";

// export default function Login() {
//   const navigate = useNavigate();

//   // ── Tab: "password" | "otp" ───────────────────────────────────────────────
//   const [mode, setMode]             = useState("password");

//   // ── Password Login State ──────────────────────────────────────────────────
//   const [form, setForm]             = useState({ mobileNumber: "", password: "" });
//   const [loading, setLoading]       = useState(false);
//   const [error, setError]           = useState("");

//   // ── OTP Login State ───────────────────────────────────────────────────────
//   const [otpStep, setOtpStep]           = useState("mobile"); // "mobile" | "otp"
//   const [mobileNo, setMobileNo]         = useState("");
//   const [otp, setOtp]                   = useState(["", "", "", "", "", ""]);
//   const [generatedOtp, setGeneratedOtp] = useState("");
//   const [timeLeft, setTimeLeft]         = useState(0);
//   const [canResend, setCanResend]       = useState(false);
//   const [otpLoading, setOtpLoading]     = useState(false);
//   const otpRefs = useRef([]);

//   const ch = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }));

//   // ── Countdown Timer ───────────────────────────────────────────────────────
//   useEffect(() => {
//     if (timeLeft <= 0) { setCanResend(true); return; }
//     const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
//     return () => clearTimeout(t);
//   }, [timeLeft]);

//   const formatTime = (s) =>
//     `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

//   // ── Password Login ────────────────────────────────────────────────────────
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     if (!form.mobileNumber || !form.password) { setError("सर्व fields भरा ❌"); return; }
//     try {
//       setLoading(true);
//       const res = await citizenAxios.post("/login", form);
//       if (!res.data.success) { setError(res.data.message || "Login failed ❌"); return; }
//       localStorage.setItem("citizenUser", JSON.stringify(res.data.citizen));
//       navigate("/my-appointments");
//     } catch (e) {
//       setError(e?.response?.data?.message || "Server Error ❌");
//     } finally { setLoading(false); }
//   };

//   // ── Send OTP ──────────────────────────────────────────────────────────────────
// const sendOtp = async () => {
//   const mobile = mobileNo.trim();
//   if (!/^[0-9]{10}$/.test(mobile)) { setError("10 अंकी valid mobile number टाका!"); return; }
  
//   setError("");
//   setOtpLoading(true);

//   const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
  
//   // ← हे आधी set करा, state update होण्याआधी local variable वापरा
//   setGeneratedOtp(newOtp);
//   setTimeLeft(60);
//   setCanResend(false);
//   setOtp(["", "", "", "", "", ""]);

//   const smsText = `Dear Citizen ${newOtp} is OTP for Mayor Appointment Portal login.VVCMC`;
//   const smsApiUrl = `https://1.rapidsms.co.in/api/push.json?apikey=67e12059b220a&route=&sender=VVMCDM&mobileno=${mobile}&text=${encodeURIComponent(smsText)}`;

//   // SMS try करा पण fail झाला तरी चालेल
//   try {
//     await fetch(smsApiUrl, { method: "GET", mode: "no-cors" });
//   } catch (err) {
//     console.error("SMS Error (ignored):", err);
//   }

//   // SMS result काहीही असो — OTP step वर जा
//   setError("");
//   setOtpStep("otp");
//   setOtpLoading(false);
//   setTimeout(() => otpRefs.current[0]?.focus(), 120);
// };

// // ── Verify OTP ────────────────────────────────────────────────────────────────
// const verifyOtp = async () => {
//   const entered = otp.join("");
//   if (entered.length < 6) { setError("6 अंकी OTP टाका!"); return; }
//   if (timeLeft <= 0)       { setError("OTP expire झाला! पुन्हा पाठवा."); return; }
  
//   if (entered !== generatedOtp) {
//     setError("❌ चुकीचा OTP! पुन्हा try करा.");
//     setOtp(["", "", "", "", "", ""]);
//     setTimeout(() => otpRefs.current[0]?.focus(), 50);
//     return;
//   }

//   try {
//     setOtpLoading(true);
//     setError("");
//     const res = await citizenAxios.post("/citizenLoginByMobile", { mobileNo: mobileNo.trim() });
//     if (!res.data.success) { setError(res.data.message || "Login failed ❌"); return; }
//     localStorage.setItem("citizenUser",  JSON.stringify(res.data.citizen));
//     localStorage.setItem("citizenToken", res.data.token || "");
//     navigate("/my-appointments");
//   } catch (err) {
//     setError(err?.response?.data?.message || "Server Error ❌");
//   } finally {
//     setOtpLoading(false);
//   }
// };

//   // ── OTP Box Handlers ──────────────────────────────────────────────────────
//   const handleOtpChange = (index, value) => {
//     if (!/^[0-9]?$/.test(value)) return;
//     const next = [...otp]; next[index] = value; setOtp(next);
//     if (value && index < 5) otpRefs.current[index + 1]?.focus();
//   };
//   const handleOtpKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) otpRefs.current[index - 1]?.focus();
//   };
//   const handleOtpPaste = (e) => {
//     e.preventDefault();
//     const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
//     const next = [...otp];
//     pasted.split("").forEach((ch, i) => { next[i] = ch; });
//     setOtp(next);
//     otpRefs.current[Math.min(pasted.length, 5)]?.focus();
//   };

 
//   const switchMode = (m) => {
//     setMode(m);
//     setError("");
//     setOtpStep("mobile");
//     setOtp(["", "", "", "", "", ""]);
//     setMobileNo("");
//     setTimeLeft(0);
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
//         .auth-root { min-height:calc(100vh - 64px); background:#f0fdf4; display:flex; align-items:center; justify-content:center; padding:32px 16px; font-family:'DM Sans',sans-serif; }
//         .auth-card { background:#fff; border-radius:20px; box-shadow:0 8px 40px rgba(0,0,0,0.1); overflow:hidden; width:100%; max-width:420px; }
//         .auth-header { background:linear-gradient(135deg,#1a4a2e,#16a34a); padding:32px; color:#fff; }
//         .auth-header h2 { font-family:'Crimson Pro',serif; font-size:26px; font-weight:800; margin:0 0 6px; }
//         .auth-header p { font-size:13px; color:#bbf7d0; margin:0; }
//         .auth-body { padding:32px; }
//         .auth-field { margin-bottom:18px; }
//         .auth-label { display:block; font-size:12px; font-weight:600; color:#374151; text-transform:uppercase; letter-spacing:.5px; margin-bottom:6px; }
//         .auth-input { width:100%; padding:11px 14px; font-size:14px; border:1.5px solid #d1d5db; border-radius:8px; outline:none; font-family:'DM Sans',sans-serif; box-sizing:border-box; transition:border-color .15s,box-shadow .15s; background:#f9fafb; }
//         .auth-input:focus { border-color:#16a34a; box-shadow:0 0 0 3px rgba(22,163,74,0.12); background:#fff; }
//         .auth-error { background:#fef2f2; border:1px solid #fecaca; border-radius:8px; padding:10px 14px; font-size:13px; color:#dc2626; margin-bottom:16px; font-weight:500; }
//         .auth-btn { width:100%; padding:12px; border-radius:8px; border:none; background:#16a34a; color:#fff; font-weight:700; font-size:15px; cursor:pointer; transition:all .2s; box-shadow:0 4px 14px rgba(22,163,74,0.3); font-family:'DM Sans',sans-serif; }
//         .auth-btn:hover:not(:disabled) { background:#15803d; transform:translateY(-1px); }
//         .auth-btn:disabled { background:#d1d5db; cursor:not-allowed; box-shadow:none; transform:none; }
//         .auth-btn.orange { background:linear-gradient(135deg,#f97316,#ea580c); box-shadow:0 4px 14px rgba(249,115,22,0.36); }
//         .auth-btn.orange:hover:not(:disabled) { background:linear-gradient(135deg,#ea580c,#c2410c); }
//         .auth-footer { text-align:center; margin-top:20px; font-size:13px; color:#6b7280; }
//         .auth-link { color:#16a34a; font-weight:700; cursor:pointer; }
//         .auth-link:hover { text-decoration:underline; }
//         .auth-divider { display:flex; align-items:center; gap:12px; margin:20px 0; }
//         .auth-divider-line { flex:1; height:1px; background:#e5e7eb; }
//         .auth-divider-text { font-size:12px; color:#9ca3af; font-weight:500; }
//         .switch-link { font-size:13px; color:#16a34a; font-weight:600; cursor:pointer; text-align:center; }
//         .switch-link:hover { text-decoration:underline; }
//         .otp-row { display:flex; gap:8px; justify-content:center; margin-bottom:16px; }
//         .otp-box { width:44px; height:50px; border:1.5px solid #d1d5db; border-radius:10px; font-size:22px; font-weight:800; text-align:center; color:#111827; font-family:'DM Sans',sans-serif; outline:none; background:#f9fafb; transition:all .18s; }
//         .otp-box:focus { border-color:#16a34a; background:#fff; box-shadow:0 0 0 3px rgba(22,163,74,0.12); }
//         .otp-box:not(:placeholder-shown) { border-color:#16a34a; background:#f0fdf4; }
//         .otp-timer { text-align:center; font-size:12px; color:#64748b; margin-bottom:12px; }
//         .otp-timer strong { font-size:13px; }
//         .resend-btn { background:none; border:none; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:700; cursor:pointer; transition:all .2s; }
//         .resend-btn:disabled { color:#94a3b8; cursor:not-allowed; }
//         .resend-btn:not(:disabled) { color:#f97316; }
//         .resend-btn:not(:disabled):hover { text-decoration:underline; }
//         .otp-back { background:none; border:none; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:600; color:#64748b; cursor:pointer; display:flex; align-items:center; gap:3px; margin-bottom:14px; padding:0; transition:color .2s; }
//         .otp-back:hover { color:#16a34a; }
//         .lp-fwrap { position:relative; }
//         .lp-prefix { position:absolute; left:12px; top:50%; transform:translateY(-50%); font-size:12px; font-weight:700; color:#374151; pointer-events:none; }
//         .auth-input.with-prefix { padding-left:54px; }
//         @keyframes fadeUp { from{opacity:0;transform:translateY(8px);} to{opacity:1;transform:translateY(0);} }
//         .fade-up { animation:fadeUp .25s ease both; }
//       `}</style>

//       <div className="auth-root">
//         <div className="auth-card">
//           <div className="auth-header">
//             <h2>Welcome Back 👋</h2>
//             <p>Mayor Appointment Portal मध्ये login करा</p>
//           </div>
//           <div className="auth-body">

//             {error && <div className="auth-error">⚠️ {error}</div>}

//             {/* ── PASSWORD LOGIN ── */}
//             {mode === "password" && (
//               <div className="fade-up">
//                 <form onSubmit={handleLogin}>
//                   <div className="auth-field">
//                     <label className="auth-label">Mobile Number</label>
//                     <input className="auth-input" type="tel" placeholder="10 digit mobile number"
//                       value={form.mobileNumber} onChange={ch("mobileNumber")} maxLength={10} />
//                   </div>
//                   <div className="auth-field">
//                     <label className="auth-label">Password</label>
//                     <input className="auth-input" type="password" placeholder="Password टाका"
//                       value={form.password} onChange={ch("password")} />
//                   </div>
//                   <button type="submit" className="auth-btn"
//                     disabled={loading || !form.mobileNumber || !form.password}>
//                     {loading ? "Logging in..." : "🔐 Login"}
//                   </button>
//                   <div className="auth-divider">
//                     <div className="auth-divider-line" />
//                     <span className="auth-divider-text">किंवा</span>
//                     <div className="auth-divider-line" />
//                   </div>
//                   <div className="switch-link" onClick={() => switchMode("otp")}>
//                     📱 OTP ने login करा
//                   </div>
//                 </form>
//               </div>
//             )}

//             {/* ── OTP LOGIN ── */}
//             {mode === "otp" && (
//               <div className="fade-up">

//                 {/* STEP 1: Mobile Number */}
//                 {otpStep === "mobile" && (
//                   <>
//                     <div className="auth-field">
//                       <label className="auth-label">Mobile Number</label>
//                       <div className="lp-fwrap">
//                         <span className="lp-prefix">🇮🇳 +91</span>
//                         <input
//                           className="auth-input with-prefix"
//                           type="tel"
//                           maxLength={10}
//                           placeholder="10 अंकी नंबर"
//                           value={mobileNo}
//                           onChange={(e) => setMobileNo(e.target.value.replace(/\D/g, "").slice(0, 10))}
//                           onKeyDown={(e) => e.key === "Enter" && sendOtp()}
//                           autoFocus
//                         />
//                       </div>
//                     </div>
//                     <button
//                       className="auth-btn orange"
//                       onClick={sendOtp}
//                       disabled={mobileNo.length !== 10 || otpLoading}
//                     >
//                       {otpLoading ? "⏳ पाठवत आहे..." : "OTP पाठवा →"}
//                     </button>
//                     <div className="auth-divider">
//                       <div className="auth-divider-line" />
//                       <span className="auth-divider-text">किंवा</span>
//                       <div className="auth-divider-line" />
//                     </div>
//                     <div className="switch-link" onClick={() => switchMode("password")}>
//                       🔐 Password ने login करा
//                     </div>
//                   </>
//                 )}

//                 {/* STEP 2: Enter OTP */}
//                 {otpStep === "otp" && (
//                   <>
//                     <button className="otp-back"
//                       onClick={() => { setOtpStep("mobile"); setOtp(["","","","","",""]); setError(""); }}>
//                       ← मागे जा
//                     </button>
//                     <div style={{ fontSize:13, color:"#64748b", marginBottom:16 }}>
//                       <span style={{ color:"#f97316", fontWeight:700 }}>+91 ******{mobileNo.slice(-3)}</span> वर OTP पाठवला
//                     </div>
//                     <div className="otp-row" onPaste={handleOtpPaste}>
//                       {otp.map((digit, i) => (
//                         <input
//                           key={i}
//                           ref={(el) => (otpRefs.current[i] = el)}
//                           className="otp-box"
//                           type="tel"
//                           maxLength={1}
//                           value={digit}
//                           placeholder="·"
//                           onChange={(e) => handleOtpChange(i, e.target.value)}
//                           onKeyDown={(e) => handleOtpKeyDown(i, e)}
//                         />
//                       ))}
//                     </div>
//                     <div className="otp-timer">
//                       {timeLeft > 0 ? (
//                         <>
//                           OTP expire होईल:{" "}
//                           <strong style={{ color: timeLeft <= 15 ? "#dc2626" : "#f97316" }}>
//                             {formatTime(timeLeft)}
//                           </strong>
//                         </>
//                       ) : (
//                         <span style={{ color:"#dc2626", fontWeight:600 }}>OTP expire झाला!</span>
//                       )}
//                       <div style={{ marginTop:5 }}>
//                         OTP नाही मिळाला?{" "}
//                         <button className="resend-btn" onClick={sendOtp} disabled={!canResend}>
//                           पुन्हा पाठवा
//                         </button>
//                       </div>
//                     </div>
//                     <button
//                       className="auth-btn"
//                       onClick={verifyOtp}
//                       disabled={otp.join("").length < 6 || otpLoading}
//                     >
//                       {otpLoading ? "⏳ Verifying..." : "✅ Verify & Login"}
//                     </button>
//                   </>
//                 )}
//               </div>
//             )}

//             <div className="auth-footer">
//               Account नाही?{" "}
//               <span className="auth-link" onClick={() => navigate("/register")}>Register करा</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import citizenAxios from "../services/citizenAxios";

export default function Login() {
  const navigate = useNavigate();

  // ── Tab: "password" | "otp" ───────────────────────────────────────────────
  const [mode, setMode] = useState("password");

  // ── Password Login State ──────────────────────────────────────────────────
  const [form, setForm]         = useState({ mobileNumber: "", password: "" });
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");
  const [showPass, setShowPass] = useState(false);

  // ── OTP Login State ───────────────────────────────────────────────────────
  const [otpStep, setOtpStep]           = useState("mobile"); // "mobile" | "otp"
  const [mobileNo, setMobileNo]         = useState("");
  const [otp, setOtp]                   = useState(["", "", "", "", "", ""]);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [timeLeft, setTimeLeft]         = useState(0);
  const [canResend, setCanResend]       = useState(false);
  const [otpLoading, setOtpLoading]     = useState(false);
  const otpRefs = useRef([]);

  const ch = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }));

  // ── Countdown Timer ───────────────────────────────────────────────────────
  useEffect(() => {
    if (timeLeft <= 0) { setCanResend(true); return; }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft]);

  const formatTime = (s) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  // ── Password Login → POST /login ──────────────────────────────────────────
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.mobileNumber || !form.password) {
      setError("सर्व fields भरा ❌");
      return;
    }
    try {
      setLoading(true);
      // ✅ Existing webportal endpoint: /login
      const res = await citizenAxios.post("/login", {
        mobileNumber: form.mobileNumber.trim(),
        password: form.password,
      });
      if (!res.data.success) {
        setError(res.data.message || "Login failed ❌");
        return;
      }
      localStorage.setItem("citizenUser",  JSON.stringify(res.data.citizen));
      localStorage.setItem("citizenToken", res.data.token || "");
      navigate("/my-appointments");
    } catch (e) {
      setError(e?.response?.data?.message || "Server Error ❌");
    } finally {
      setLoading(false);
    }
  };

  const sendOtp = async () => {
  const mobile = mobileNo.trim();
  if (!/^[0-9]{10}$/.test(mobile)) {
    setError("10 अंकी valid mobile number टाका!");
    return;
  }

  setError("");
  setOtpLoading(true);

  const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
  setGeneratedOtp(newOtp);
  setTimeLeft(60);
  setCanResend(false);
  setOtp(["", "", "", "", "", ""]);

  // ✅ SMS fire करा पण result wait करू नका
const smsText = `Dear Citizen ${newOtp} is OTP for VVCMC Divyang Kalyan Management System login for citizen registration.VVCMC`;
    const smsApiUrl = `https://1.rapidsms.co.in/api/push.json?apikey=67e12059b220a&route=&sender=VVMCDM&mobileno=${mobile}&text=${encodeURIComponent(smsText)}`;


  // const smsText = `Dear Citizen ${newOtp} is OTP for Mayor Appointment Portal login.VVCMC`;
  // const smsApiUrl = `https://1.rapidsms.co.in/api/push.json?apikey=67e12059b220a&route=&sender=VVMCDM&mobileno=${mobile}&text=${encodeURIComponent(smsText)}`;
  
  fetch(smsApiUrl, { method: "GET", mode: "no-cors" }).catch(() => {});
  // ↑ await नाही — SMS background मध्ये जातो, error ignore

  // ✅ लगेच OTP step वर जा
  setOtpStep("otp");
  setOtpLoading(false);
  setTimeout(() => otpRefs.current[0]?.focus(), 120);
};

  // ── Verify OTP → POST /citizenLoginByMobile ───────────────────────────────
  const verifyOtp = async () => {
    const entered = otp.join("");
    if (entered.length < 6) { setError("6 अंकी OTP टाका!"); return; }
    if (timeLeft <= 0)       { setError("OTP expire झाला! पुन्हा पाठवा."); return; }

    if (entered !== generatedOtp) {
      setError("❌ चुकीचा OTP! पुन्हा try करा.");
      setOtp(["", "", "", "", "", ""]);
      setTimeout(() => otpRefs.current[0]?.focus(), 50);
      return;
    }

    try {
      setOtpLoading(true);
      setError("");
      // ✅ Existing webportal endpoint: /citizenLoginByMobile
      const res = await citizenAxios.post("/citizen/citizenLoginByMobile", {
        mobileNo: mobileNo.trim(),
      });
      if (!res.data.success) {
        setError(res.data.message || "Login failed ❌");
        return;
      }
      localStorage.setItem("citizenUser",  JSON.stringify(res.data.citizen));
      localStorage.setItem("citizenToken", res.data.token || "");
      navigate("/my-appointments");
    } catch (err) {
      setError(err?.response?.data?.message || "Server Error ❌");
    } finally {
      setOtpLoading(false);
    }
  };

  // ── OTP Box Handlers ──────────────────────────────────────────────────────
  const handleOtpChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const next = [...otp]; next[index] = value; setOtp(next);
    if (value && index < 5) otpRefs.current[index + 1]?.focus();
  };
  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0)
      otpRefs.current[index - 1]?.focus();
  };
  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const next = [...otp];
    pasted.split("").forEach((ch, i) => { next[i] = ch; });
    setOtp(next);
    otpRefs.current[Math.min(pasted.length, 5)]?.focus();
  };

  const switchMode = (m) => {
    setMode(m);
    setError("");
    setOtpStep("mobile");
    setOtp(["", "", "", "", "", ""]);
    setMobileNo("");
    setTimeLeft(0);
    setShowPass(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .auth-root {
          min-height: calc(100vh - 64px);
          background: #f0fdf4;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 16px;
          font-family: 'DM Sans', sans-serif;
        }
        .auth-card {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.1);
          overflow: hidden;
          width: 100%;
          max-width: 420px;
        }
        .auth-header {
          background: linear-gradient(135deg, #1a4a2e, #16a34a);
          padding: 32px;
          color: #fff;
        }
        .auth-header h2 {
          font-family: 'Crimson Pro', serif;
          font-size: 26px;
          font-weight: 800;
          margin: 0 0 6px;
        }
        .auth-header p { font-size: 13px; color: #bbf7d0; margin: 0; }

        /* ── TABS ── */
        .auth-tabs {
          display: flex;
          background: #f1f5f9;
          border-radius: 10px;
          padding: 3px;
          margin-bottom: 20px;
        }
        .auth-tab {
          flex: 1;
          padding: 9px 0;
          border: none;
          border-radius: 8px;
          font-size: 11.5px;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: all .2s;
          color: #64748b;
          background: transparent;
        }
        .auth-tab.active {
          background: #fff;
          color: #16a34a;
          box-shadow: 0 1px 6px rgba(0,0,0,0.10);
        }

        .auth-body { padding: 28px 32px 32px; }

        .auth-field { margin-bottom: 16px; }
        .auth-label {
          display: block;
          font-size: 10.5px;
          font-weight: 600;
          color: #374151;
          text-transform: uppercase;
          letter-spacing: .55px;
          margin-bottom: 6px;
        }
        .auth-fwrap { position: relative; }
        .auth-ficon {
          position: absolute;
          left: 11px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 13px;
          color: #adb5bd;
          pointer-events: none;
        }
        .auth-input {
          width: 100%;
          padding: 10.5px 14px 10.5px 36px;
          font-size: 13px;
          border: 1.5px solid #d1d5db;
          border-radius: 9px;
          outline: none;
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
          transition: border-color .15s, box-shadow .15s;
          background: #f9fafb;
          color: #111827;
        }
        .auth-input:focus {
          border-color: #16a34a;
          box-shadow: 0 0 0 3px rgba(22,163,74,0.12);
          background: #fff;
        }
        .auth-input::placeholder { color: #c8cdd5; font-size: 12px; }
        .auth-pbtn {
          position: absolute;
          right: 11px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          font-size: 14px;
          color: #adb5bd;
          padding: 0;
          display: flex;
          align-items: center;
        }
        .auth-pbtn:hover { color: #6b7280; }

        /* mobile prefix */
        .auth-prefix {
          position: absolute;
          left: 11px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 11px;
          font-weight: 700;
          color: #374151;
          pointer-events: none;
        }
        .auth-input.with-prefix { padding-left: 56px; }

        .auth-error {
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 9px;
          padding: 10px 14px;
          font-size: 12.5px;
          color: #dc2626;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .auth-btn {
          width: 100%;
          padding: 11.5px;
          border-radius: 9px;
          border: none;
          background: linear-gradient(135deg, #1a4a2e, #16a34a);
          color: #fff;
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          transition: all .2s;
          box-shadow: 0 4px 14px rgba(22,163,74,0.3);
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.4px;
        }
        .auth-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(22,163,74,0.4);
        }
        .auth-btn:disabled { background: #d1d5db; cursor: not-allowed; box-shadow: none; transform: none; }
        .auth-btn.orange {
          background: linear-gradient(135deg, #f97316, #ea580c);
          box-shadow: 0 4px 14px rgba(249,115,22,0.36);
        }
        .auth-btn.orange:hover:not(:disabled) {
          box-shadow: 0 6px 20px rgba(249,115,22,0.46);
        }

        /* OTP boxes */
        .otp-row { display: flex; gap: 7px; justify-content: center; margin-bottom: 14px; }
        .otp-box {
          width: 44px;
          height: 50px;
          border: 1.5px solid #d1d5db;
          border-radius: 10px;
          font-size: 22px;
          font-weight: 800;
          text-align: center;
          color: #111827;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          background: #f9fafb;
          transition: all .18s;
        }
        .otp-box:focus {
          border-color: #16a34a;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(22,163,74,0.12);
        }
        .otp-box:not(:placeholder-shown) { border-color: #16a34a; background: #f0fdf4; }

        /* timer */
        .otp-timer { text-align: center; font-size: 12px; color: #64748b; margin-bottom: 14px; }
        .otp-timer strong { font-size: 13px; }
        .resend-btn {
          background: none; border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 700; cursor: pointer; transition: all .2s;
        }
        .resend-btn:disabled { color: #94a3b8; cursor: not-allowed; }
        .resend-btn:not(:disabled) { color: #f97316; }
        .resend-btn:not(:disabled):hover { text-decoration: underline; }

        /* back link */
        .otp-back {
          background: none; border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 600; color: #64748b;
          cursor: pointer; display: flex; align-items: center; gap: 3px;
          margin-bottom: 14px; padding: 0; transition: color .2s;
        }
        .otp-back:hover { color: #16a34a; }

        .auth-divider { display: flex; align-items: center; gap: 12px; margin: 18px 0; }
        .auth-divider-line { flex: 1; height: 1px; background: #e5e7eb; }
        .auth-divider-text { font-size: 11.5px; color: #9ca3af; font-weight: 500; }

        .switch-link {
          font-size: 13px; color: #16a34a; font-weight: 600;
          cursor: pointer; text-align: center; display: block; transition: opacity .2s;
        }
        .switch-link:hover { opacity: 0.75; text-decoration: underline; }

        .auth-footer { text-align: center; margin-top: 20px; font-size: 12.5px; color: #6b7280; }
        .auth-link { color: #16a34a; font-weight: 700; cursor: pointer; }
        .auth-link:hover { text-decoration: underline; }

        .auth-cfooter {
          margin-top: 16px; padding-top: 13px; border-top: 1px solid #f3f4f6;
          display: flex; align-items: center; justify-content: center; gap: 5px;
        }
        .auth-cfdot { width: 5px; height: 5px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 5px #4ade80; }
        .auth-cfooter span { font-size: 10px; color: #b5bcc8; letter-spacing: 0.2px; }

        @keyframes fadeUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp .25s ease both; }
      `}</style>

      <div className="auth-root">
        <div className="auth-card">

          {/* ── Header ── */}
          <div className="auth-header">
            <h2>Welcome Back 👋</h2>
            <p>Mayor Appointment Portal मध्ये login करा</p>
          </div>

          <div className="auth-body">

            {/* ── TABS ── */}
            <div className="auth-tabs">
              <button
                className={`auth-tab ${mode === "password" ? "active" : ""}`}
                onClick={() => switchMode("password")}
              >
                🔒 Password Login
              </button>
              <button
                className={`auth-tab ${mode === "otp" ? "active" : ""}`}
                onClick={() => switchMode("otp")}
              >
                📱 OTP Login
              </button>
            </div>

            {/* ── Error Box ── */}
            {error && <div className="auth-error">⚠️ {error}</div>}

            {/* ════════ PASSWORD TAB ════════ */}
            {mode === "password" && (
              <div className="fade-up">
                <form onSubmit={handleLogin}>

                  {/* Mobile Number */}
                  <div className="auth-field">
                    <label className="auth-label">Mobile Number</label>
                    <div className="auth-fwrap">
                      <span className="auth-ficon">📱</span>
                      <input
                        className="auth-input"
                        type="tel"
                        placeholder="10 digit mobile number"
                        value={form.mobileNumber}
                        onChange={ch("mobileNumber")}
                        maxLength={10}
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="auth-field">
                    <label className="auth-label">Password</label>
                    <div className="auth-fwrap">
                      <span className="auth-ficon">🔒</span>
                      <input
                        className="auth-input"
                        type={showPass ? "text" : "password"}
                        placeholder="Password टाका"
                        value={form.password}
                        onChange={ch("password")}
                        autoComplete="current-password"
                      />
                      <button
                        type="button"
                        className="auth-pbtn"
                        onClick={() => setShowPass(!showPass)}
                        tabIndex={-1}
                      >
                        {showPass ? "🙈" : "👁️"}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="auth-btn"
                    disabled={loading || !form.mobileNumber || !form.password}
                  >
                    {loading ? "⏳ Logging in..." : "🔐 Login"}
                  </button>

                  <div className="auth-divider">
                    <div className="auth-divider-line" />
                    <span className="auth-divider-text">किंवा</span>
                    <div className="auth-divider-line" />
                  </div>

                  <span className="switch-link" onClick={() => switchMode("otp")}>
                    📱 OTP ने login करा
                  </span>
                </form>
              </div>
            )}

            {/* ════════ OTP TAB ════════ */}
            {mode === "otp" && (
              <div className="fade-up">

                {/* STEP 1 — Mobile Number Input */}
                {otpStep === "mobile" && (
                  <>
                    <div className="auth-field">
                      <label className="auth-label">Mobile Number</label>
                      <div className="auth-fwrap">
                        <span className="auth-prefix">🇮🇳 +91</span>
                        <input
                          className="auth-input with-prefix"
                          type="tel"
                          maxLength={10}
                          placeholder="10 अंकी नंबर"
                          value={mobileNo}
                          onChange={(e) =>
                            setMobileNo(e.target.value.replace(/\D/g, "").slice(0, 10))
                          }
                          onKeyDown={(e) => e.key === "Enter" && sendOtp()}
                          autoFocus
                        />
                      </div>
                    </div>

                    <button
                      className="auth-btn orange"
                      onClick={sendOtp}
                      disabled={mobileNo.length !== 10 || otpLoading}
                    >
                      {otpLoading ? "⏳ पाठवत आहे..." : "OTP पाठवा →"}
                    </button>

                    <div className="auth-divider">
                      <div className="auth-divider-line" />
                      <span className="auth-divider-text">किंवा</span>
                      <div className="auth-divider-line" />
                    </div>

                    <span className="switch-link" onClick={() => switchMode("password")}>
                      🔐 Password ने login करा
                    </span>
                  </>
                )}

                {/* STEP 2 — OTP Entry */}
                {otpStep === "otp" && (
                  <>
                    <button
                      className="otp-back"
                      onClick={() => {
                        setOtpStep("mobile");
                        setOtp(["", "", "", "", "", ""]);
                        setError("");
                      }}
                    >
                      ← मागे जा
                    </button>

                    <div style={{ fontSize: 13, color: "#64748b", marginBottom: 16 }}>
                      <span style={{ color: "#f97316", fontWeight: 700 }}>
                        +91 ******{mobileNo.slice(-3)}
                      </span>{" "}
                      वर OTP पाठवला
                    </div>

                    {/* 6-box OTP input */}
                    <div className="otp-row" onPaste={handleOtpPaste}>
                      {otp.map((digit, i) => (
                        <input
                          key={i}
                          ref={(el) => (otpRefs.current[i] = el)}
                          className="otp-box"
                          type="tel"
                          maxLength={1}
                          value={digit}
                          placeholder="·"
                          onChange={(e) => handleOtpChange(i, e.target.value)}
                          onKeyDown={(e) => handleOtpKeyDown(i, e)}
                        />
                      ))}
                    </div>

                    {/* Timer & Resend */}
                    <div className="otp-timer">
                      {timeLeft > 0 ? (
                        <>
                          OTP expire होईल:{" "}
                          <strong style={{ color: timeLeft <= 15 ? "#dc2626" : "#f97316" }}>
                            {formatTime(timeLeft)}
                          </strong>
                        </>
                      ) : (
                        <span style={{ color: "#dc2626", fontWeight: 600 }}>
                          OTP expire झाला!
                        </span>
                      )}
                      <div style={{ marginTop: 5 }}>
                        OTP नाही मिळाला?{" "}
                        <button
                          className="resend-btn"
                          onClick={sendOtp}
                          disabled={!canResend}
                        >
                          पुन्हा पाठवा
                        </button>
                      </div>
                    </div>

                    <button
                      className="auth-btn"
                      onClick={verifyOtp}
                      disabled={otp.join("").length < 6 || otpLoading}
                    >
                      {otpLoading ? "⏳ Verifying..." : "✅ Verify & Login"}
                    </button>
                  </>
                )}
              </div>
            )}

            {/* ── Register Footer ── */}
            <div className="auth-footer">
              Account नाही?{" "}
              <span className="auth-link" onClick={() => navigate("/register")}>
                Register करा
              </span>
            </div>

            <div className="auth-cfooter">
              <div className="auth-cfdot" />
              <span>Secure Government Portal · All rights reserved</span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}