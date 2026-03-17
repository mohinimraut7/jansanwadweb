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
// ==================================

// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import citizenAxios from "../services/citizenAxios";

// export default function Login() {
//   const navigate = useNavigate();

//   // ── Tab: "password" | "otp" ───────────────────────────────────────────────
//   const [mode, setMode] = useState("password");

//   // ── Password Login State ──────────────────────────────────────────────────
//   const [form, setForm]         = useState({ mobileNumber: "", password: "" });
//   const [loading, setLoading]   = useState(false);
//   const [error, setError]       = useState("");
//   const [showPass, setShowPass] = useState(false);

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

//   // ── Password Login → POST /login ──────────────────────────────────────────
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     if (!form.mobileNumber || !form.password) {
//       setError("सर्व fields भरा ❌");
//       return;
//     }
//     try {
//       setLoading(true);
//       // ✅ Existing webportal endpoint: /login
//       const res = await citizenAxios.post("/login", {
//         mobileNumber: form.mobileNumber.trim(),
//         password: form.password,
//       });
//       if (!res.data.success) {
//         setError(res.data.message || "Login failed ❌");
//         return;
//       }
//       localStorage.setItem("citizenUser",  JSON.stringify(res.data.citizen));
//       localStorage.setItem("citizenToken", res.data.token || "");
//       navigate("/my-appointments");
//     } catch (e) {
//       setError(e?.response?.data?.message || "Server Error ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const sendOtp = async () => {
//   const mobile = mobileNo.trim();
//   if (!/^[0-9]{10}$/.test(mobile)) {
//     setError("10 अंकी valid mobile number टाका!");
//     return;
//   }

//   setError("");
//   setOtpLoading(true);

//   const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
//   setGeneratedOtp(newOtp);
//   setTimeLeft(60);
//   setCanResend(false);
//   setOtp(["", "", "", "", "", ""]);

//   // ✅ SMS fire करा पण result wait करू नका
// const smsText = `Dear Citizen ${newOtp} is OTP for VVCMC Divyang Kalyan Management System login for citizen registration.VVCMC`;
//     const smsApiUrl = `https://1.rapidsms.co.in/api/push.json?apikey=67e12059b220a&route=&sender=VVMCDM&mobileno=${mobile}&text=${encodeURIComponent(smsText)}`;


//   // const smsText = `Dear Citizen ${newOtp} is OTP for Mayor Appointment Portal login.VVCMC`;
//   // const smsApiUrl = `https://1.rapidsms.co.in/api/push.json?apikey=67e12059b220a&route=&sender=VVMCDM&mobileno=${mobile}&text=${encodeURIComponent(smsText)}`;
  
//   fetch(smsApiUrl, { method: "GET", mode: "no-cors" }).catch(() => {});
//   // ↑ await नाही — SMS background मध्ये जातो, error ignore

//   // ✅ लगेच OTP step वर जा
//   setOtpStep("otp");
//   setOtpLoading(false);
//   setTimeout(() => otpRefs.current[0]?.focus(), 120);
// };

//   // ── Verify OTP → POST /citizenLoginByMobile ───────────────────────────────
//   const verifyOtp = async () => {
//     const entered = otp.join("");
//     if (entered.length < 6) { setError("6 अंकी OTP टाका!"); return; }
//     if (timeLeft <= 0)       { setError("OTP expire झाला! पुन्हा पाठवा."); return; }

//     if (entered !== generatedOtp) {
//       setError("❌ चुकीचा OTP! पुन्हा try करा.");
//       setOtp(["", "", "", "", "", ""]);
//       setTimeout(() => otpRefs.current[0]?.focus(), 50);
//       return;
//     }

//     try {
//       setOtpLoading(true);
//       setError("");
//       // ✅ Existing webportal endpoint: /citizenLoginByMobile
//       const res = await citizenAxios.post("/citizen/citizenLoginByMobile", {
//         mobileNo: mobileNo.trim(),
//       });
//       if (!res.data.success) {
//         setError(res.data.message || "Login failed ❌");
//         return;
//       }
//       localStorage.setItem("citizenUser",  JSON.stringify(res.data.citizen));
//       localStorage.setItem("citizenToken", res.data.token || "");
//       navigate("/my-appointments");
//     } catch (err) {
//       setError(err?.response?.data?.message || "Server Error ❌");
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
//     if (e.key === "Backspace" && !otp[index] && index > 0)
//       otpRefs.current[index - 1]?.focus();
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
//     setShowPass(false);
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

//         .auth-root {
//           min-height: calc(100vh - 64px);
//           background: #f0fdf4;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 32px 16px;
//           font-family: 'DM Sans', sans-serif;
//         }
//         .auth-card {
//           background: #fff;
//           border-radius: 20px;
//           box-shadow: 0 8px 40px rgba(0,0,0,0.1);
//           overflow: hidden;
//           width: 100%;
//           max-width: 420px;
//         }
//         .auth-header {
//           background: linear-gradient(135deg, #1a4a2e, #16a34a);
//           padding: 32px;
//           color: #fff;
//         }
//         .auth-header h2 {
//           font-family: 'Crimson Pro', serif;
//           font-size: 26px;
//           font-weight: 800;
//           margin: 0 0 6px;
//         }
//         .auth-header p { font-size: 13px; color: #bbf7d0; margin: 0; }

//         /* ── TABS ── */
//         .auth-tabs {
//           display: flex;
//           background: #f1f5f9;
//           border-radius: 10px;
//           padding: 3px;
//           margin-bottom: 20px;
//         }
//         .auth-tab {
//           flex: 1;
//           padding: 9px 0;
//           border: none;
//           border-radius: 8px;
//           font-size: 11.5px;
//           font-weight: 600;
//           font-family: 'DM Sans', sans-serif;
//           cursor: pointer;
//           transition: all .2s;
//           color: #64748b;
//           background: transparent;
//         }
//         .auth-tab.active {
//           background: #fff;
//           color: #16a34a;
//           box-shadow: 0 1px 6px rgba(0,0,0,0.10);
//         }

//         .auth-body { padding: 28px 32px 32px; }

//         .auth-field { margin-bottom: 16px; }
//         .auth-label {
//           display: block;
//           font-size: 10.5px;
//           font-weight: 600;
//           color: #374151;
//           text-transform: uppercase;
//           letter-spacing: .55px;
//           margin-bottom: 6px;
//         }
//         .auth-fwrap { position: relative; }
//         .auth-ficon {
//           position: absolute;
//           left: 11px;
//           top: 50%;
//           transform: translateY(-50%);
//           font-size: 13px;
//           color: #adb5bd;
//           pointer-events: none;
//         }
//         .auth-input {
//           width: 100%;
//           padding: 10.5px 14px 10.5px 36px;
//           font-size: 13px;
//           border: 1.5px solid #d1d5db;
//           border-radius: 9px;
//           outline: none;
//           font-family: 'DM Sans', sans-serif;
//           box-sizing: border-box;
//           transition: border-color .15s, box-shadow .15s;
//           background: #f9fafb;
//           color: #111827;
//         }
//         .auth-input:focus {
//           border-color: #16a34a;
//           box-shadow: 0 0 0 3px rgba(22,163,74,0.12);
//           background: #fff;
//         }
//         .auth-input::placeholder { color: #c8cdd5; font-size: 12px; }
//         .auth-pbtn {
//           position: absolute;
//           right: 11px;
//           top: 50%;
//           transform: translateY(-50%);
//           background: none;
//           border: none;
//           cursor: pointer;
//           font-size: 14px;
//           color: #adb5bd;
//           padding: 0;
//           display: flex;
//           align-items: center;
//         }
//         .auth-pbtn:hover { color: #6b7280; }

//         /* mobile prefix */
//         .auth-prefix {
//           position: absolute;
//           left: 11px;
//           top: 50%;
//           transform: translateY(-50%);
//           font-size: 11px;
//           font-weight: 700;
//           color: #374151;
//           pointer-events: none;
//         }
//         .auth-input.with-prefix { padding-left: 56px; }

//         .auth-error {
//           background: #fef2f2;
//           border: 1px solid #fecaca;
//           border-radius: 9px;
//           padding: 10px 14px;
//           font-size: 12.5px;
//           color: #dc2626;
//           margin-bottom: 16px;
//           font-weight: 500;
//         }

//         .auth-btn {
//           width: 100%;
//           padding: 11.5px;
//           border-radius: 9px;
//           border: none;
//           background: linear-gradient(135deg, #1a4a2e, #16a34a);
//           color: #fff;
//           font-weight: 700;
//           font-size: 13px;
//           cursor: pointer;
//           transition: all .2s;
//           box-shadow: 0 4px 14px rgba(22,163,74,0.3);
//           font-family: 'DM Sans', sans-serif;
//           letter-spacing: 0.4px;
//         }
//         .auth-btn:hover:not(:disabled) {
//           transform: translateY(-1px);
//           box-shadow: 0 6px 20px rgba(22,163,74,0.4);
//         }
//         .auth-btn:disabled { background: #d1d5db; cursor: not-allowed; box-shadow: none; transform: none; }
//         .auth-btn.orange {
//           background: linear-gradient(135deg, #f97316, #ea580c);
//           box-shadow: 0 4px 14px rgba(249,115,22,0.36);
//         }
//         .auth-btn.orange:hover:not(:disabled) {
//           box-shadow: 0 6px 20px rgba(249,115,22,0.46);
//         }

//         /* OTP boxes */
//         .otp-row { display: flex; gap: 7px; justify-content: center; margin-bottom: 14px; }
//         .otp-box {
//           width: 44px;
//           height: 50px;
//           border: 1.5px solid #d1d5db;
//           border-radius: 10px;
//           font-size: 22px;
//           font-weight: 800;
//           text-align: center;
//           color: #111827;
//           font-family: 'DM Sans', sans-serif;
//           outline: none;
//           background: #f9fafb;
//           transition: all .18s;
//         }
//         .otp-box:focus {
//           border-color: #16a34a;
//           background: #fff;
//           box-shadow: 0 0 0 3px rgba(22,163,74,0.12);
//         }
//         .otp-box:not(:placeholder-shown) { border-color: #16a34a; background: #f0fdf4; }

//         /* timer */
//         .otp-timer { text-align: center; font-size: 12px; color: #64748b; margin-bottom: 14px; }
//         .otp-timer strong { font-size: 13px; }
//         .resend-btn {
//           background: none; border: none;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 12px; font-weight: 700; cursor: pointer; transition: all .2s;
//         }
//         .resend-btn:disabled { color: #94a3b8; cursor: not-allowed; }
//         .resend-btn:not(:disabled) { color: #f97316; }
//         .resend-btn:not(:disabled):hover { text-decoration: underline; }

//         /* back link */
//         .otp-back {
//           background: none; border: none;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 12px; font-weight: 600; color: #64748b;
//           cursor: pointer; display: flex; align-items: center; gap: 3px;
//           margin-bottom: 14px; padding: 0; transition: color .2s;
//         }
//         .otp-back:hover { color: #16a34a; }

//         .auth-divider { display: flex; align-items: center; gap: 12px; margin: 18px 0; }
//         .auth-divider-line { flex: 1; height: 1px; background: #e5e7eb; }
//         .auth-divider-text { font-size: 11.5px; color: #9ca3af; font-weight: 500; }

//         .switch-link {
//           font-size: 13px; color: #16a34a; font-weight: 600;
//           cursor: pointer; text-align: center; display: block; transition: opacity .2s;
//         }
//         .switch-link:hover { opacity: 0.75; text-decoration: underline; }

//         .auth-footer { text-align: center; margin-top: 20px; font-size: 12.5px; color: #6b7280; }
//         .auth-link { color: #16a34a; font-weight: 700; cursor: pointer; }
//         .auth-link:hover { text-decoration: underline; }

//         .auth-cfooter {
//           margin-top: 16px; padding-top: 13px; border-top: 1px solid #f3f4f6;
//           display: flex; align-items: center; justify-content: center; gap: 5px;
//         }
//         .auth-cfdot { width: 5px; height: 5px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 5px #4ade80; }
//         .auth-cfooter span { font-size: 10px; color: #b5bcc8; letter-spacing: 0.2px; }

//         @keyframes fadeUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
//         .fade-up { animation: fadeUp .25s ease both; }
//       `}</style>

//       <div className="auth-root">
//         <div className="auth-card">

//           {/* ── Header ── */}
//           <div className="auth-header">
//             <h2>Welcome Back 👋</h2>
//             <p>Mayor Appointment Portal मध्ये login करा</p>
//           </div>

//           <div className="auth-body">

//             {/* ── TABS ── */}
//             <div className="auth-tabs">
//               <button
//                 className={`auth-tab ${mode === "password" ? "active" : ""}`}
//                 onClick={() => switchMode("password")}
//               >
//                 🔒 Password Login
//               </button>
//               <button
//                 className={`auth-tab ${mode === "otp" ? "active" : ""}`}
//                 onClick={() => switchMode("otp")}
//               >
//                 📱 OTP Login
//               </button>
//             </div>

//             {/* ── Error Box ── */}
//             {error && <div className="auth-error">⚠️ {error}</div>}

//             {/* ════════ PASSWORD TAB ════════ */}
//             {mode === "password" && (
//               <div className="fade-up">
//                 <form onSubmit={handleLogin}>

//                   {/* Mobile Number */}
//                   <div className="auth-field">
//                     <label className="auth-label">Mobile Number</label>
//                     <div className="auth-fwrap">
//                       <span className="auth-ficon">📱</span>
//                       <input
//                         className="auth-input"
//                         type="tel"
//                         placeholder="10 digit mobile number"
//                         value={form.mobileNumber}
//                         onChange={ch("mobileNumber")}
//                         maxLength={10}
//                         autoComplete="tel"
//                       />
//                     </div>
//                   </div>

//                   {/* Password */}
//                   <div className="auth-field">
//                     <label className="auth-label">Password</label>
//                     <div className="auth-fwrap">
//                       <span className="auth-ficon">🔒</span>
//                       <input
//                         className="auth-input"
//                         type={showPass ? "text" : "password"}
//                         placeholder="Password टाका"
//                         value={form.password}
//                         onChange={ch("password")}
//                         autoComplete="current-password"
//                       />
//                       <button
//                         type="button"
//                         className="auth-pbtn"
//                         onClick={() => setShowPass(!showPass)}
//                         tabIndex={-1}
//                       >
//                         {showPass ? "🙈" : "👁️"}
//                       </button>
//                     </div>
//                   </div>

//                   <button
//                     type="submit"
//                     className="auth-btn"
//                     disabled={loading || !form.mobileNumber || !form.password}
//                   >
//                     {loading ? "⏳ Logging in..." : "🔐 Login"}
//                   </button>

//                   <div className="auth-divider">
//                     <div className="auth-divider-line" />
//                     <span className="auth-divider-text">किंवा</span>
//                     <div className="auth-divider-line" />
//                   </div>

//                   <span className="switch-link" onClick={() => switchMode("otp")}>
//                     📱 OTP ने login करा
//                   </span>
//                 </form>
//               </div>
//             )}

//             {/* ════════ OTP TAB ════════ */}
//             {mode === "otp" && (
//               <div className="fade-up">

//                 {/* STEP 1 — Mobile Number Input */}
//                 {otpStep === "mobile" && (
//                   <>
//                     <div className="auth-field">
//                       <label className="auth-label">Mobile Number</label>
//                       <div className="auth-fwrap">
//                         <span className="auth-prefix">🇮🇳 +91</span>
//                         <input
//                           className="auth-input with-prefix"
//                           type="tel"
//                           maxLength={10}
//                           placeholder="10 अंकी नंबर"
//                           value={mobileNo}
//                           onChange={(e) =>
//                             setMobileNo(e.target.value.replace(/\D/g, "").slice(0, 10))
//                           }
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

//                     <span className="switch-link" onClick={() => switchMode("password")}>
//                       🔐 Password ने login करा
//                     </span>
//                   </>
//                 )}

//                 {/* STEP 2 — OTP Entry */}
//                 {otpStep === "otp" && (
//                   <>
//                     <button
//                       className="otp-back"
//                       onClick={() => {
//                         setOtpStep("mobile");
//                         setOtp(["", "", "", "", "", ""]);
//                         setError("");
//                       }}
//                     >
//                       ← मागे जा
//                     </button>

//                     <div style={{ fontSize: 13, color: "#64748b", marginBottom: 16 }}>
//                       <span style={{ color: "#f97316", fontWeight: 700 }}>
//                         +91 ******{mobileNo.slice(-3)}
//                       </span>{" "}
//                       वर OTP पाठवला
//                     </div>

//                     {/* 6-box OTP input */}
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
//                         <span style={{ color: "#dc2626", fontWeight: 600 }}>
//                           OTP expire झाला!
//                         </span>
//                       )}
//                       <div style={{ marginTop: 5 }}>
//                         OTP नाही मिळाला?{" "}
//                         <button
//                           className="resend-btn"
//                           onClick={sendOtp}
//                           disabled={!canResend}
//                         >
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

//             {/* ── Register Footer ── */}
//             <div className="auth-footer">
//               Account नाही?{" "}
//               <span className="auth-link" onClick={() => navigate("/register")}>
//                 Register करा
//               </span>
//             </div>

//             <div className="auth-cfooter">
//               <div className="auth-cfdot" />
//               <span>Secure Government Portal · All rights reserved</span>
//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// =================================================================

// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import citizenAxios from "../services/citizenAxios";
// import heroBg from "../assets/vvcmcbuildingbanner.png";
// import mayorImg from "../assets/ajivir5.jpeg";


// export default function Login() {
//   const navigate = useNavigate();

//   // ── Tab: "password" | "otp" ───────────────────────────────────────────────
//   const [mode, setMode] = useState("password");

//   // ── Password Login State ──────────────────────────────────────────────────
//   const [form, setForm]         = useState({ username: "", password: "" }); // ✅ username
//   const [loading, setLoading]   = useState(false);
//   const [error, setError]       = useState("");
//   const [showPass, setShowPass] = useState(false);

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

//   // ── Password Login → POST /login ──────────────────────────────────────────
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     if (!form.username || !form.password) { // ✅ username check
//       setError("सर्व fields भरा ❌");
//       return;
//     }
//     try {
//       setLoading(true);
//       const res = await citizenAxios.post("/citizen/login", {
//         username: form.username.trim(), // ✅ username पाठवतो
//         password: form.password,
//       });
//       if (!res.data.success) {
//         setError(res.data.message || "Login failed ❌");
//         return;
//       }
//       localStorage.setItem("citizenUser",  JSON.stringify(res.data.citizen));
//       localStorage.setItem("citizenToken", res.data.token || "");
//       navigate("/my-appointments");
//     } catch (e) {
//       setError(e?.response?.data?.message || "Server Error ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const sendOtp = async () => {
//   const mobile = mobileNo.trim();
//   if (!/^[0-9]{10}$/.test(mobile)) {
//     setError("10 अंकी valid mobile number टाका!");
//     return;
//   }

//   setError("");
//   setOtpLoading(true);

//   const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
//   setGeneratedOtp(newOtp);
//   setTimeLeft(60);
//   setCanResend(false);
//   setOtp(["", "", "", "", "", ""]);

//   // ✅ SMS fire करा पण result wait करू नका
// const smsText = `Dear Citizen ${newOtp} is OTP for VVCMC Divyang Kalyan Management System login for citizen registration.VVCMC`;
//     const smsApiUrl = `https://1.rapidsms.co.in/api/push.json?apikey=67e12059b220a&route=&sender=VVMCDM&mobileno=${mobile}&text=${encodeURIComponent(smsText)}`;


//   // const smsText = `Dear Citizen ${newOtp} is OTP for Mayor Appointment Portal login.VVCMC`;
//   // const smsApiUrl = `https://1.rapidsms.co.in/api/push.json?apikey=67e12059b220a&route=&sender=VVMCDM&mobileno=${mobile}&text=${encodeURIComponent(smsText)}`;
  
//   fetch(smsApiUrl, { method: "GET", mode: "no-cors" }).catch(() => {});
//   // ↑ await नाही — SMS background मध्ये जातो, error ignore

//   // ✅ लगेच OTP step वर जा
//   setOtpStep("otp");
//   setOtpLoading(false);
//   setTimeout(() => otpRefs.current[0]?.focus(), 120);
// };

//   // ── Verify OTP → POST /citizenLoginByMobile ───────────────────────────────
//   const verifyOtp = async () => {
//     const entered = otp.join("");
//     if (entered.length < 6) { setError("6 अंकी OTP टाका!"); return; }
//     if (timeLeft <= 0)       { setError("OTP expire झाला! पुन्हा पाठवा."); return; }

//     if (entered !== generatedOtp) {
//       setError("❌ चुकीचा OTP! पुन्हा try करा.");
//       setOtp(["", "", "", "", "", ""]);
//       setTimeout(() => otpRefs.current[0]?.focus(), 50);
//       return;
//     }

//     try {
//       setOtpLoading(true);
//       setError("");
//       // ✅ Existing webportal endpoint: /citizenLoginByMobile
//       const res = await citizenAxios.post("/citizen/citizenLoginByMobile", {
//         mobileNo: mobileNo.trim(),
//       });
//       if (!res.data.success) {
//         setError(res.data.message || "Login failed ❌");
//         return;
//       }
//       localStorage.setItem("citizenUser",  JSON.stringify(res.data.citizen));
//       localStorage.setItem("citizenToken", res.data.token || "");
//       navigate("/my-appointments");
//     } catch (err) {
//       setError(err?.response?.data?.message || "Server Error ❌");
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
//     if (e.key === "Backspace" && !otp[index] && index > 0)
//       otpRefs.current[index - 1]?.focus();
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
//     setShowPass(false);
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

//         .auth-root {
//           min-height: calc(100vh - 64px);
//           background: #f0fdf4;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 32px 16px;
//           font-family: 'DM Sans', sans-serif;
//         }
//         .auth-card {
//           background: #fff;
//           border-radius: 20px;
//           box-shadow: 0 8px 40px rgba(0,0,0,0.1);
//           overflow: hidden;
//           width: 100%;
//           max-width: 420px;
//         }
//         .auth-header {
//           background: linear-gradient(135deg, #1a4a2e, #16a34a);
//           padding: 32px;
//           color: #fff;
//         }
//         .auth-header h2 {
//           font-family: 'Crimson Pro', serif;
//           font-size: 26px;
//           font-weight: 800;
//           margin: 0 0 6px;
//         }
//         .auth-header p { font-size: 13px; color: #bbf7d0; margin: 0; }

//         /* ── TABS ── */
//         .auth-tabs {
//           display: flex;
//           background: #f1f5f9;
//           border-radius: 10px;
//           padding: 3px;
//           margin-bottom: 20px;
//         }
//         .auth-tab {
//           flex: 1;
//           padding: 9px 0;
//           border: none;
//           border-radius: 8px;
//           font-size: 11.5px;
//           font-weight: 600;
//           font-family: 'DM Sans', sans-serif;
//           cursor: pointer;
//           transition: all .2s;
//           color: #64748b;
//           background: transparent;
//         }
//         .auth-tab.active {
//           background: #fff;
//           color: #16a34a;
//           box-shadow: 0 1px 6px rgba(0,0,0,0.10);
//         }

//         .auth-body { padding: 28px 32px 32px; }

//         .auth-field { margin-bottom: 16px; }
//         .auth-label {
//           display: block;
//           font-size: 10.5px;
//           font-weight: 600;
//           color: #374151;
//           text-transform: uppercase;
//           letter-spacing: .55px;
//           margin-bottom: 6px;
//         }
//         .auth-fwrap { position: relative; }
//         .auth-ficon {
//           position: absolute;
//           left: 11px;
//           top: 50%;
//           transform: translateY(-50%);
//           font-size: 13px;
//           color: #adb5bd;
//           pointer-events: none;
//         }
//         .auth-input {
//           width: 100%;
//           padding: 10.5px 14px 10.5px 36px;
//           font-size: 13px;
//           border: 1.5px solid #d1d5db;
//           border-radius: 9px;
//           outline: none;
//           font-family: 'DM Sans', sans-serif;
//           box-sizing: border-box;
//           transition: border-color .15s, box-shadow .15s;
//           background: #f9fafb;
//           color: #111827;
//         }
//         .auth-input:focus {
//           border-color: #16a34a;
//           box-shadow: 0 0 0 3px rgba(22,163,74,0.12);
//           background: #fff;
//         }
//         .auth-input::placeholder { color: #c8cdd5; font-size: 12px; }
//         .auth-pbtn {
//           position: absolute;
//           right: 11px;
//           top: 50%;
//           transform: translateY(-50%);
//           background: none;
//           border: none;
//           cursor: pointer;
//           font-size: 14px;
//           color: #adb5bd;
//           padding: 0;
//           display: flex;
//           align-items: center;
//         }
//         .auth-pbtn:hover { color: #6b7280; }

//         /* mobile prefix */
//         .auth-prefix {
//           position: absolute;
//           left: 11px;
//           top: 50%;
//           transform: translateY(-50%);
//           font-size: 11px;
//           font-weight: 700;
//           color: #374151;
//           pointer-events: none;
//         }
//         .auth-input.with-prefix { padding-left: 56px; }

//         .auth-error {
//           background: #fef2f2;
//           border: 1px solid #fecaca;
//           border-radius: 9px;
//           padding: 10px 14px;
//           font-size: 12.5px;
//           color: #dc2626;
//           margin-bottom: 16px;
//           font-weight: 500;
//         }

//         .auth-btn {
//           width: 100%;
//           padding: 11.5px;
//           border-radius: 9px;
//           border: none;
//           background: linear-gradient(135deg, #1a4a2e, #16a34a);
//           color: #fff;
//           font-weight: 700;
//           font-size: 13px;
//           cursor: pointer;
//           transition: all .2s;
//           box-shadow: 0 4px 14px rgba(22,163,74,0.3);
//           font-family: 'DM Sans', sans-serif;
//           letter-spacing: 0.4px;
//         }
//         .auth-btn:hover:not(:disabled) {
//           transform: translateY(-1px);
//           box-shadow: 0 6px 20px rgba(22,163,74,0.4);
//         }
//         .auth-btn:disabled { background: #d1d5db; cursor: not-allowed; box-shadow: none; transform: none; }
//         .auth-btn.orange {
//           background: linear-gradient(135deg, #f97316, #ea580c);
//           box-shadow: 0 4px 14px rgba(249,115,22,0.36);
//         }
//         .auth-btn.orange:hover:not(:disabled) {
//           box-shadow: 0 6px 20px rgba(249,115,22,0.46);
//         }

//         /* OTP boxes */
//         .otp-row { display: flex; gap: 7px; justify-content: center; margin-bottom: 14px; }
//         .otp-box {
//           width: 44px;
//           height: 50px;
//           border: 1.5px solid #d1d5db;
//           border-radius: 10px;
//           font-size: 22px;
//           font-weight: 800;
//           text-align: center;
//           color: #111827;
//           font-family: 'DM Sans', sans-serif;
//           outline: none;
//           background: #f9fafb;
//           transition: all .18s;
//         }
//         .otp-box:focus {
//           border-color: #16a34a;
//           background: #fff;
//           box-shadow: 0 0 0 3px rgba(22,163,74,0.12);
//         }
//         .otp-box:not(:placeholder-shown) { border-color: #16a34a; background: #f0fdf4; }

//         /* timer */
//         .otp-timer { text-align: center; font-size: 12px; color: #64748b; margin-bottom: 14px; }
//         .otp-timer strong { font-size: 13px; }
//         .resend-btn {
//           background: none; border: none;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 12px; font-weight: 700; cursor: pointer; transition: all .2s;
//         }
//         .resend-btn:disabled { color: #94a3b8; cursor: not-allowed; }
//         .resend-btn:not(:disabled) { color: #f97316; }
//         .resend-btn:not(:disabled):hover { text-decoration: underline; }

//         /* back link */
//         .otp-back {
//           background: none; border: none;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 12px; font-weight: 600; color: #64748b;
//           cursor: pointer; display: flex; align-items: center; gap: 3px;
//           margin-bottom: 14px; padding: 0; transition: color .2s;
//         }
//         .otp-back:hover { color: #16a34a; }

//         .auth-divider { display: flex; align-items: center; gap: 12px; margin: 18px 0; }
//         .auth-divider-line { flex: 1; height: 1px; background: #e5e7eb; }
//         .auth-divider-text { font-size: 11.5px; color: #9ca3af; font-weight: 500; }

//         .switch-link {
//           font-size: 13px; color: #16a34a; font-weight: 600;
//           cursor: pointer; text-align: center; display: block; transition: opacity .2s;
//         }
//         .switch-link:hover { opacity: 0.75; text-decoration: underline; }

//         .auth-footer { text-align: center; margin-top: 20px; font-size: 12.5px; color: #6b7280; }
//         .auth-link { color: #16a34a; font-weight: 700; cursor: pointer; }
//         .auth-link:hover { text-decoration: underline; }

//         .auth-cfooter {
//           margin-top: 16px; padding-top: 13px; border-top: 1px solid #f3f4f6;
//           display: flex; align-items: center; justify-content: center; gap: 5px;
//         }
//         .auth-cfdot { width: 5px; height: 5px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 5px #4ade80; }
//         .auth-cfooter span { font-size: 10px; color: #b5bcc8; letter-spacing: 0.2px; }

//         @keyframes fadeUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
//         .fade-up { animation: fadeUp .25s ease both; }
//       `}</style>

//       <div className="auth-root">
//         <div className="auth-card">

//           {/* ── Header ── */}
//           <div className="auth-header">
//             <h2>Welcome Back 👋</h2>
//             <p>Mayor Appointment Portal मध्ये login करा</p>
//           </div>

//           <div className="auth-body">

//             {/* ── TABS ── */}
//             <div className="auth-tabs">
//               <button
//                 className={`auth-tab ${mode === "password" ? "active" : ""}`}
//                 onClick={() => switchMode("password")}
//               >
//                 🔒 Password Login
//               </button>
//               <button
//                 className={`auth-tab ${mode === "otp" ? "active" : ""}`}
//                 onClick={() => switchMode("otp")}
//               >
//                 📱 OTP Login
//               </button>
//             </div>

//             {/* ── Error Box ── */}
//             {error && <div className="auth-error">⚠️ {error}</div>}

//             {/* ════════ PASSWORD TAB ════════ */}
//             {mode === "password" && (
//               <div className="fade-up">
//                 <form onSubmit={handleLogin}>

//                   {/* ✅ Username field — mobile च्या जागी */}
//                   <div className="auth-field">
//                     <label className="auth-label">Username</label>
//                     <div className="auth-fwrap">
//                       <span className="auth-ficon">👤</span>
//                       <input
//                         className="auth-input"
//                         type="text"
//                         placeholder="Username टाका"
//                         value={form.username}
//                         onChange={ch("username")}
//                         autoComplete="username"
//                         autoFocus
//                       />
//                     </div>
//                   </div>

//                   {/* Password */}
//                   <div className="auth-field">
//                     <label className="auth-label">Password</label>
//                     <div className="auth-fwrap">
//                       <span className="auth-ficon">🔒</span>
//                       <input
//                         className="auth-input"
//                         type={showPass ? "text" : "password"}
//                         placeholder="Password टाका"
//                         value={form.password}
//                         onChange={ch("password")}
//                         autoComplete="current-password"
//                       />
//                       <button
//                         type="button"
//                         className="auth-pbtn"
//                         onClick={() => setShowPass(!showPass)}
//                         tabIndex={-1}
//                       >
//                         {showPass ? "🙈" : "👁️"}
//                       </button>
//                     </div>
//                   </div>

//                   <button
//                     type="submit"
//                     className="auth-btn"
//                     disabled={loading || !form.username || !form.password}
//                   >
//                     {loading ? "⏳ Logging in..." : "🔐 Login"}
//                   </button>

//                   <div className="auth-divider">
//                     <div className="auth-divider-line" />
//                     <span className="auth-divider-text">किंवा</span>
//                     <div className="auth-divider-line" />
//                   </div>

//                   <span className="switch-link" onClick={() => switchMode("otp")}>
//                     📱 OTP ने login करा
//                   </span>
//                 </form>
//               </div>
//             )}

//             {/* ════════ OTP TAB ════════ */}
//             {mode === "otp" && (
//               <div className="fade-up">

//                 {/* STEP 1 — Mobile Number Input */}
//                 {otpStep === "mobile" && (
//                   <>
//                     <div className="auth-field">
//                       <label className="auth-label">Mobile Number</label>
//                       <div className="auth-fwrap">
//                         <span className="auth-prefix">🇮🇳 +91</span>
//                         <input
//                           className="auth-input with-prefix"
//                           type="tel"
//                           maxLength={10}
//                           placeholder="10 अंकी नंबर"
//                           value={mobileNo}
//                           onChange={(e) =>
//                             setMobileNo(e.target.value.replace(/\D/g, "").slice(0, 10))
//                           }
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

//                     <span className="switch-link" onClick={() => switchMode("password")}>
//                       🔐 Password ने login करा
//                     </span>
//                   </>
//                 )}

//                 {/* STEP 2 — OTP Entry */}
//                 {otpStep === "otp" && (
//                   <>
//                     <button
//                       className="otp-back"
//                       onClick={() => {
//                         setOtpStep("mobile");
//                         setOtp(["", "", "", "", "", ""]);
//                         setError("");
//                       }}
//                     >
//                       ← मागे जा
//                     </button>

//                     <div style={{ fontSize: 13, color: "#64748b", marginBottom: 16 }}>
//                       <span style={{ color: "#f97316", fontWeight: 700 }}>
//                         +91 ******{mobileNo.slice(-3)}
//                       </span>{" "}
//                       वर OTP पाठवला
//                     </div>

//                     {/* 6-box OTP input */}
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
//                         <span style={{ color: "#dc2626", fontWeight: 600 }}>
//                           OTP expire झाला!
//                         </span>
//                       )}
//                       <div style={{ marginTop: 5 }}>
//                         OTP नाही मिळाला?{" "}
//                         <button
//                           className="resend-btn"
//                           onClick={sendOtp}
//                           disabled={!canResend}
//                         >
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

//             {/* ── Register Footer ── */}
//             <div className="auth-footer">
//               Account नाही?{" "}
//               <span className="auth-link" onClick={() => navigate("/register")}>
//                 Register करा
//               </span>
//             </div>

//             <div className="auth-cfooter">
//               <div className="auth-cfdot" />
//               <span>Secure Government Portal · All rights reserved</span>
//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// =========================================

// import React, { useState, useEffect, useRef } from "react";
// import heroBg from "../assets/vvcmcbuildingbanner.png";
// import mayorImg from "../assets/ajivir5.jpeg";


// export default function Login() {
//   const [mode, setMode] = useState("password");
//   const [form, setForm] = useState({ username: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPass, setShowPass] = useState(false);

//   const [otpStep, setOtpStep] = useState("mobile");
//   const [mobileNo, setMobileNo] = useState("");
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [generatedOtp, setGeneratedOtp] = useState("");
//   const [timeLeft, setTimeLeft] = useState(0);
//   const [canResend, setCanResend] = useState(false);
//   const [otpLoading, setOtpLoading] = useState(false);
//   const otpRefs = useRef([]);

//   const ch = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }));

//   useEffect(() => {
//     if (timeLeft <= 0) { setCanResend(true); return; }
//     const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
//     return () => clearTimeout(t);
//   }, [timeLeft]);

//   const formatTime = (s) =>
//     `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     if (!form.username || !form.password) {
//       setError("सर्व fields भरा ❌");
//       return;
//     }
//     setLoading(true);
//     setTimeout(() => {
//       setError("Demo mode - Login functionality not connected");
//       setLoading(false);
//     }, 1000);
//   };

//   const sendOtp = async () => {
//     const mobile = mobileNo.trim();
//     if (!/^[0-9]{10}$/.test(mobile)) {
//       setError("10 अंकी valid mobile number टाका!");
//       return;
//     }

//     setError("");
//     setOtpLoading(true);

//     const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
//     setGeneratedOtp(newOtp);
//     setTimeLeft(60);
//     setCanResend(false);
//     setOtp(["", "", "", "", "", ""]);

//     setOtpStep("otp");
//     setOtpLoading(false);
//     setTimeout(() => otpRefs.current[0]?.focus(), 120);
//   };

//   const verifyOtp = async () => {
//     const entered = otp.join("");
//     if (entered.length < 6) { setError("6 अंकी OTP टाका!"); return; }
//     if (timeLeft <= 0) { setError("OTP expire झाला! पुन्हा पाठवा."); return; }

//     if (entered !== generatedOtp) {
//       setError("❌ चुकीचा OTP! पुन्हा try करा.");
//       setOtp(["", "", "", "", "", ""]);
//       setTimeout(() => otpRefs.current[0]?.focus(), 50);
//       return;
//     }

//     setOtpLoading(true);
//     setTimeout(() => {
//       setError("Demo mode - Login functionality not connected");
//       setOtpLoading(false);
//     }, 1000);
//   };

//   const handleOtpChange = (index, value) => {
//     if (!/^[0-9]?$/.test(value)) return;
//     const next = [...otp]; next[index] = value; setOtp(next);
//     if (value && index < 5) otpRefs.current[index + 1]?.focus();
//   };

//   const handleOtpKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0)
//       otpRefs.current[index - 1]?.focus();
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
//     setShowPass(false);
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');

//         * { margin: 0; padding: 0; box-sizing: border-box; }

//         .login-container {
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background-image: url(${heroBg});
//           background-size: cover;
//           background-position: center;
//           background-repeat: no-repeat;
//           position: relative;
//           font-family: 'Inter', 'Noto Sans Devanagari', sans-serif;
//         }
//         .login-container::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: rgba(22, 101, 52, 0.75);
//         }

//         .login-card-wrapper {
//           position: relative;
//           z-index: 1;
//           display: flex;
//           max-width: 950px;
//           width: 95%;
//           background: #fff;
//           border-radius: 24px;
//           overflow: hidden;
//           box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
//         }

//         .login-left {
//           flex: 1;
//           padding: 40px 45px;
//           background: #fff;
//         }

//         .login-right {
//           flex: 1;
//           background: linear-gradient(135deg, #14b8a6, #0891b2);
//           padding: 50px;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           position: relative;
//           overflow: hidden;
//         }

//         .login-right::before {
//           content: '';
//           position: absolute;
//           top: -50px;
//           right: -50px;
//           width: 300px;
//           height: 300px;
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 50%;
//         }
//         .login-right::after {
//           content: '';
//           position: absolute;
//           bottom: -80px;
//           left: -80px;
//           width: 250px;
//           height: 250px;
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 50%;
//         }

//         .vvcmc-header {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           margin-bottom: 28px;
//         }
//         .vvcmc-logo {
//           width: 52px;
//           height: 52px;
//           background: linear-gradient(135deg, #f59e0b, #d97706);
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 24px;
//         }
//         .vvcmc-text h3 {
//           font-size: 15px;
//           color: #b45309;
//           font-weight: 700;
//           margin: 0;
//           line-height: 1.3;
//         }
//         .vvcmc-text p {
//           font-size: 13px;
//           color: #92400e;
//           font-family: 'Noto Sans Devanagari', sans-serif;
//           margin: 0;
//         }

//         .login-heading {
//           margin-bottom: 8px;
//         }
//         .login-heading h1 {
//           font-size: 32px;
//           font-weight: 800;
//           color: #111827;
//           margin: 0;
//         }
//         .login-subheading {
//           font-size: 14px;
//           color: #6b7280;
//           margin-bottom: 28px;
//           font-family: 'Noto Sans Devanagari', sans-serif;
//         }

//         .login-tabs {
//           display: flex;
//           background: #f3f4f6;
//           border-radius: 12px;
//           padding: 4px;
//           margin-bottom: 24px;
//         }
//         .login-tab {
//           flex: 1;
//           padding: 10px;
//           border: none;
//           border-radius: 10px;
//           font-size: 13px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.2s;
//           color: #6b7280;
//           background: transparent;
//           font-family: 'Inter', sans-serif;
//         }
//         .login-tab.active {
//           background: #fff;
//           color: #166534;
//           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//         }

//         .login-error {
//           background: #fef2f2;
//           border: 1px solid #fecaca;
//           border-radius: 10px;
//           padding: 12px;
//           font-size: 13px;
//           color: #dc2626;
//           margin-bottom: 20px;
//           font-weight: 500;
//         }

//         .login-field {
//           margin-bottom: 20px;
//         }
//         .login-label {
//           display: block;
//           font-size: 13px;
//           font-weight: 600;
//           color: #374151;
//           margin-bottom: 8px;
//         }
//         .login-input-wrapper {
//           position: relative;
//         }
//         .login-input-icon {
//           position: absolute;
//           left: 14px;
//           top: 50%;
//           transform: translateY(-50%);
//           color: #6b7280;
//           font-size: 18px;
//         }
//         .login-input {
//           width: 100%;
//           padding: 12px 14px 12px 45px;
//           font-size: 14px;
//           border: 1.5px solid #d1d5db;
//           border-radius: 10px;
//           outline: none;
//           font-family: 'Inter', sans-serif;
//           transition: all 0.2s;
//           background: #f9fafb;
//           color: #111827;
//         }
//         .login-input:focus {
//           border-color: #166534;
//           box-shadow: 0 0 0 3px rgba(22, 101, 52, 0.1);
//           background: #fff;
//         }
//         .login-input::placeholder {
//           color: #9ca3af;
//           font-family: 'Noto Sans Devanagari', sans-serif;
//         }

//         .login-pass-toggle {
//           position: absolute;
//           right: 14px;
//           top: 50%;
//           transform: translateY(-50%);
//           background: none;
//           border: none;
//           cursor: pointer;
//           font-size: 18px;
//           color: #6b7280;
//           padding: 0;
//         }
//         .login-pass-toggle:hover {
//           color: #374151;
//         }

//         .login-btn {
//           width: 100%;
//           padding: 13px;
//           border-radius: 10px;
//           border: none;
//           background: linear-gradient(135deg, #166534, #16a34a);
//           color: #fff;
//           font-weight: 700;
//           font-size: 14px;
//           cursor: pointer;
//           transition: all 0.2s;
//           box-shadow: 0 4px 14px rgba(22, 101, 52, 0.3);
//           font-family: 'Inter', sans-serif;
//         }
//         .login-btn:hover:not(:disabled) {
//           transform: translateY(-2px);
//           box-shadow: 0 6px 20px rgba(22, 101, 52, 0.4);
//         }
//         .login-btn:disabled {
//           background: #d1d5db;
//           cursor: not-allowed;
//           box-shadow: none;
//           transform: none;
//         }

//         .login-footer {
//           text-align: center;
//           margin-top: 24px;
//           font-size: 13px;
//           color: #6b7280;
//         }
//         .login-link {
//           color: #166534;
//           font-weight: 700;
//           cursor: pointer;
//           text-decoration: none;
//         }
//         .login-link:hover {
//           text-decoration: underline;
//         }

//         .mayor-section {
//           position: relative;
//           z-index: 1;
//           text-align: center;
//         }
//         .mayor-img-wrapper {
//           width: 180px;
//           height: 180px;
//           margin: 0 auto 20px;
//           position: relative;
//         }
//         .mayor-img-border {
//           width: 100%;
//           height: 100%;
//           border-radius: 50%;
//           background: linear-gradient(135deg, #f59e0b, #d97706);
//           padding: 6px;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
//         }
//         .mayor-img {
//           width: 100%;
//           height: 100%;
//           border-radius: 50%;
//           object-fit: cover;
//           border: 4px solid #fff;
//         }
//         .mayor-chair-badge {
//           position: absolute;
//           bottom: 5px;
//           right: 5px;
//           width: 45px;
//           height: 45px;
//           background: #fff;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 22px;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
//         }

//         .mayor-name {
//           font-size: 28px;
//           font-weight: 800;
//           color: #fff;
//           margin-bottom: 8px;
//           font-family: 'Noto Sans Devanagari', sans-serif;
//           text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
//         }
//         .mayor-title {
//           font-size: 14px;
//           color: rgba(255, 255, 255, 0.9);
//           margin-bottom: 24px;
//           font-family: 'Noto Sans Devanagari', sans-serif;
//         }

//         .mayor-progress {
//           width: 160px;
//           height: 8px;
//           background: rgba(255, 255, 255, 0.25);
//           border-radius: 10px;
//           overflow: hidden;
//           margin: 0 auto;
//         }
//         .mayor-progress-bar {
//           height: 100%;
//           width: 65%;
//           background: linear-gradient(90deg, #16a34a, #4ade80);
//           border-radius: 10px;
//         }

//         .mayor-decorations {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           top: 0;
//           left: 0;
//           pointer-events: none;
//         }
//         .mayor-icon {
//           position: absolute;
//           font-size: 50px;
//           opacity: 0.15;
//           color: #fff;
//         }
//         .mayor-icon-1 { top: 15%; left: 8%; }
//         .mayor-icon-2 { top: 25%; right: 12%; }
//         .mayor-icon-3 { bottom: 20%; left: 10%; }
//         .mayor-icon-4 { bottom: 15%; right: 8%; }

//         .otp-mobile-prefix {
//           position: absolute;
//           left: 14px;
//           top: 50%;
//           transform: translateY(-50%);
//           font-size: 13px;
//           font-weight: 700;
//           color: #374151;
//         }
//         .login-input.with-prefix {
//           padding-left: 75px;
//         }

//         .otp-boxes {
//           display: flex;
//           gap: 8px;
//           justify-content: center;
//           margin-bottom: 20px;
//         }
//         .otp-box {
//           width: 45px;
//           height: 52px;
//           border: 1.5px solid #d1d5db;
//           border-radius: 10px;
//           font-size: 22px;
//           font-weight: 800;
//           text-align: center;
//           color: #111827;
//           outline: none;
//           background: #f9fafb;
//           transition: all 0.2s;
//         }
//         .otp-box:focus {
//           border-color: #166534;
//           background: #fff;
//           box-shadow: 0 0 0 3px rgba(22, 101, 52, 0.1);
//         }

//         .otp-timer {
//           text-align: center;
//           font-size: 13px;
//           color: #6b7280;
//           margin-bottom: 16px;
//         }
//         .otp-timer strong {
//           font-size: 14px;
//         }

//         .otp-back-btn {
//           background: none;
//           border: none;
//           font-size: 13px;
//           font-weight: 600;
//           color: #6b7280;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           gap: 4px;
//           margin-bottom: 16px;
//           padding: 0;
//           font-family: 'Noto Sans Devanagari', sans-serif;
//         }
//         .otp-back-btn:hover {
//           color: #166534;
//         }

//         .resend-btn {
//           background: none;
//           border: none;
//           font-size: 13px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: all 0.2s;
//           font-family: 'Noto Sans Devanagari', sans-serif;
//         }
//         .resend-btn:disabled {
//           color: #94a3b8;
//           cursor: not-allowed;
//         }
//         .resend-btn:not(:disabled) {
//           color: #f97316;
//         }
//         .resend-btn:not(:disabled):hover {
//           text-decoration: underline;
//         }

//         @media (max-width: 768px) {
//           .login-card-wrapper {
//             flex-direction: column;
//           }
//           .login-right {
//             padding: 40px 30px;
//           }
//           .mayor-img-wrapper {
//             width: 140px;
//             height: 140px;
//           }
//         }
//       `}</style>

//       <div className="login-container">
//         <div className="login-card-wrapper">

//           <div className="login-left">
//             <div className="vvcmc-header">
//               <div className="vvcmc-logo">🏛️</div>
//               <div className="vvcmc-text">
//                 <h3>Vasai-Virar City Municipal Corporation</h3>
//                 <p>जन संवाद</p>
//               </div>
//             </div>

//             <div className="login-heading">
//               <h1>Welcome Back</h1>
//             </div>
//             <div className="login-subheading">
//               Mayor Appointment Portal वर login करा
//             </div>

//             <div className="login-tabs">
//               <button
//                 className={`login-tab ${mode === "password" ? "active" : ""}`}
//                 onClick={() => switchMode("password")}
//               >
//                 🔒 Password Login
//               </button>
//               <button
//                 className={`login-tab ${mode === "otp" ? "active" : ""}`}
//                 onClick={() => switchMode("otp")}
//               >
//                 📱 OTP Login
//               </button>
//             </div>

//             {error && <div className="login-error">⚠️ {error}</div>}

//             {mode === "password" && (
//               <div>
//                 <form onSubmit={handleLogin}>
//                   <div className="login-field">
//                     <label className="login-label">Username</label>
//                     <div className="login-input-wrapper">
//                       <span className="login-input-icon">👤</span>
//                       <input
//                         className="login-input"
//                         type="text"
//                         placeholder="Username टाका"
//                         value={form.username}
//                         onChange={ch("username")}
//                         autoComplete="username"
//                         autoFocus
//                       />
//                     </div>
//                   </div>

//                   <div className="login-field">
//                     <label className="login-label">Password</label>
//                     <div className="login-input-wrapper">
//                       <span className="login-input-icon">🔒</span>
//                       <input
//                         className="login-input"
//                         type={showPass ? "text" : "password"}
//                         placeholder="Password टाका"
//                         value={form.password}
//                         onChange={ch("password")}
//                         autoComplete="current-password"
//                       />
//                       <button
//                         type="button"
//                         className="login-pass-toggle"
//                         onClick={() => setShowPass(!showPass)}
//                         tabIndex={-1}
//                       >
//                         {showPass ? "👁️" : "👁️‍🗨️"}
//                       </button>
//                     </div>
//                   </div>

//                   <button
//                     type="submit"
//                     className="login-btn"
//                     disabled={loading || !form.username || !form.password}
//                   >
//                     {loading ? "⏳ Logging in..." : "Login"}
//                   </button>

//                   <div className="login-footer">
//                     Don't have an account?{" "}
//                     <span className="login-link">Create account</span>
//                   </div>
//                 </form>
//               </div>
//             )}

//             {mode === "otp" && (
//               <div>
//                 {otpStep === "mobile" && (
//                   <>
//                     <div className="login-field">
//                       <label className="login-label">Mobile Number</label>
//                       <div className="login-input-wrapper">
//                         <span className="otp-mobile-prefix">🇮🇳 +91</span>
//                         <input
//                           className="login-input with-prefix"
//                           type="tel"
//                           maxLength={10}
//                           placeholder="10 अंकी नंबर"
//                           value={mobileNo}
//                           onChange={(e) =>
//                             setMobileNo(e.target.value.replace(/\D/g, "").slice(0, 10))
//                           }
//                           onKeyDown={(e) => e.key === "Enter" && sendOtp()}
//                           autoFocus
//                         />
//                       </div>
//                     </div>

//                     <button
//                       className="login-btn"
//                       onClick={sendOtp}
//                       disabled={mobileNo.length !== 10 || otpLoading}
//                     >
//                       {otpLoading ? "⏳ पाठवत आहे..." : "OTP पाठवा →"}
//                     </button>

//                     <div className="login-footer">
//                       Don't have an account?{" "}
//                       <span className="login-link">Create account</span>
//                     </div>
//                   </>
//                 )}

//                 {otpStep === "otp" && (
//                   <>
//                     <button
//                       className="otp-back-btn"
//                       onClick={() => {
//                         setOtpStep("mobile");
//                         setOtp(["", "", "", "", "", ""]);
//                         setError("");
//                       }}
//                     >
//                       ← मागे जा
//                     </button>

//                     <div style={{ fontSize: 13, color: "#64748b", marginBottom: 16 }}>
//                       <span style={{ color: "#f97316", fontWeight: 700 }}>
//                         +91 ******{mobileNo.slice(-3)}
//                       </span>{" "}
//                       वर OTP पाठवला
//                     </div>

//                     <div className="otp-boxes" onPaste={handleOtpPaste}>
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
//                         <span style={{ color: "#dc2626", fontWeight: 600 }}>
//                           OTP expire झाला!
//                         </span>
//                       )}
//                       <div style={{ marginTop: 6 }}>
//                         OTP नाही मिळाला?{" "}
//                         <button
//                           className="resend-btn"
//                           onClick={sendOtp}
//                           disabled={!canResend}
//                         >
//                           पुन्हा पाठवा
//                         </button>
//                       </div>
//                     </div>

//                     <button
//                       className="login-btn"
//                       onClick={verifyOtp}
//                       disabled={otp.join("").length < 6 || otpLoading}
//                     >
//                       {otpLoading ? "⏳ Verifying..." : "✅ Verify & Login"}
//                     </button>
//                   </>
//                 )}
//               </div>
//             )}
//           </div>

//           <div className="login-right">
//             <div className="mayor-decorations">
//               <div className="mayor-icon mayor-icon-1">🏛️</div>
//               <div className="mayor-icon mayor-icon-2">🤝</div>
//               <div className="mayor-icon mayor-icon-3">🏢</div>
//               <div className="mayor-icon mayor-icon-4">🏙️</div>
//             </div>

//             <div className="mayor-section">
//               <div className="mayor-img-wrapper">
//                 <div className="mayor-img-border">
//                   <img src={mayorImg} alt="Mayor" className="mayor-img" />
//                 </div>
//                 <div className="mayor-chair-badge">🪑</div>
//               </div>

//               <h2 className="mayor-name">मा. श्री.अजीव पाटील</h2>
//               <p className="mayor-title">मा. महामांगर, वसई-विरार</p>

//               <div className="mayor-progress">
//                 <div className="mayor-progress-bar"></div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// =========================

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import citizenAxios from "../services/citizenAxios";
import heroBg from "../assets/vvcmcbuildingbanner.png";
import mayorImg from "../assets/ajivir5.jpeg";


export default function Login() {
  const navigate = useNavigate();

  // ── Tab: "password" | "otp" ───────────────────────────────────────────────
  const [mode, setMode] = useState("password");

  // ── Password Login State ──────────────────────────────────────────────────
  const [form, setForm]         = useState({ username: "", password: "" });
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
    if (!form.username || !form.password) {
      setError("सर्व fields भरा ❌");
      return;
    }
    try {
      setLoading(true);
      const res = await citizenAxios.post("/citizen/login", {
        username: form.username.trim(),
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

  // ── Send OTP ──────────────────────────────────────────────────────────────
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

    const smsText = `Dear Citizen ${newOtp} is OTP for VVCMC Divyang Kalyan Management System login for citizen registration.VVCMC`;
    const smsApiUrl = `https://1.rapidsms.co.in/api/push.json?apikey=67e12059b220a&route=&sender=VVMCDM&mobileno=${mobile}&text=${encodeURIComponent(smsText)}`;

    fetch(smsApiUrl, { method: "GET", mode: "no-cors" }).catch(() => {});

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
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url(${heroBg});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          font-family: 'Inter', 'Noto Sans Devanagari', sans-serif;
        }
        .login-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(22, 101, 52, 0.75);
        }

        .login-card-wrapper {
          position: relative;
          z-index: 1;
          display: flex;
          max-width: 950px;
          width: 95%;
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
        }

        .login-left {
          flex: 1;
          padding: 40px 45px;
          background: #fff;
        }

        .login-right {
          flex: 1;
          background: linear-gradient(135deg, #14b8a6, #0891b2);
          padding: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .login-right::before {
          content: '';
          position: absolute;
          top: -50px;
          right: -50px;
          width: 300px;
          height: 300px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
        }
        .login-right::after {
          content: '';
          position: absolute;
          bottom: -80px;
          left: -80px;
          width: 250px;
          height: 250px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
        }

        .vvcmc-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }
        .vvcmc-logo {
          width: 52px;
          height: 52px;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }
        .vvcmc-text h3 {
          font-size: 15px;
          color: #b45309;
          font-weight: 700;
          margin: 0;
          line-height: 1.3;
        }
        .vvcmc-text p {
          font-size: 13px;
          color: #92400e;
          font-family: 'Noto Sans Devanagari', sans-serif;
          margin: 0;
        }

        .login-heading {
          margin-bottom: 8px;
        }
        .login-heading h1 {
          font-size: 32px;
          font-weight: 800;
          color: #111827;
          margin: 0;
        }
        .login-subheading {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 28px;
          font-family: 'Noto Sans Devanagari', sans-serif;
        }

        .login-tabs {
          display: flex;
          background: #f3f4f6;
          border-radius: 12px;
          padding: 4px;
          margin-bottom: 24px;
        }
        .login-tab {
          flex: 1;
          padding: 10px;
          border: none;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          color: #6b7280;
          background: transparent;
          font-family: 'Inter', sans-serif;
        }
        .login-tab.active {
          background: #fff;
          color: #166534;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .login-error {
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 10px;
          padding: 12px;
          font-size: 13px;
          color: #dc2626;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .login-field {
          margin-bottom: 20px;
        }
        .login-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }
        .login-input-wrapper {
          position: relative;
        }
        .login-input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #6b7280;
          font-size: 18px;
        }
        .login-input {
          width: 100%;
          padding: 12px 14px 12px 45px;
          font-size: 14px;
          border: 1.5px solid #d1d5db;
          border-radius: 10px;
          outline: none;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
          background: #f9fafb;
          color: #111827;
        }
        .login-input:focus {
          border-color: #166534;
          box-shadow: 0 0 0 3px rgba(22, 101, 52, 0.1);
          background: #fff;
        }
        .login-input::placeholder {
          color: #9ca3af;
          font-family: 'Noto Sans Devanagari', sans-serif;
        }

        .login-pass-toggle {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          font-size: 18px;
          color: #6b7280;
          padding: 0;
        }
        .login-pass-toggle:hover {
          color: #374151;
        }

        .login-btn {
          width: 100%;
          padding: 13px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(135deg, #166534, #16a34a);
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 14px rgba(22, 101, 52, 0.3);
          font-family: 'Inter', sans-serif;
        }
        .login-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(22, 101, 52, 0.4);
        }
        .login-btn:disabled {
          background: #d1d5db;
          cursor: not-allowed;
          box-shadow: none;
          transform: none;
        }

        .login-footer {
          text-align: center;
          margin-top: 24px;
          font-size: 13px;
          color: #6b7280;
        }
        .login-link {
          color: #166534;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
        }
        .login-link:hover {
          text-decoration: underline;
        }

        .mayor-section {
          position: relative;
          z-index: 1;
          text-align: center;
        }
        .mayor-img-wrapper {
          width: 180px;
          height: 180px;
          margin: 0 auto 20px;
          position: relative;
        }
        .mayor-img-border {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          padding: 6px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .mayor-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #fff;
        }
        .mayor-chair-badge {
          position: absolute;
          bottom: 5px;
          right: 5px;
          width: 45px;
          height: 45px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .mayor-name {
          font-size: 28px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 8px;
          font-family: 'Noto Sans Devanagari', sans-serif;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        .mayor-title {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 24px;
          font-family: 'Noto Sans Devanagari', sans-serif;
        }

        .mayor-progress {
          width: 160px;
          height: 8px;
          background: rgba(255, 255, 255, 0.25);
          border-radius: 10px;
          overflow: hidden;
          margin: 0 auto;
        }
        .mayor-progress-bar {
          height: 100%;
          width: 65%;
          background: linear-gradient(90deg, #16a34a, #4ade80);
          border-radius: 10px;
        }

        .mayor-decorations {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
        }
        .mayor-icon {
          position: absolute;
          font-size: 50px;
          opacity: 0.15;
          color: #fff;
        }
        .mayor-icon-1 { top: 15%; left: 8%; }
        .mayor-icon-2 { top: 25%; right: 12%; }
        .mayor-icon-3 { bottom: 20%; left: 10%; }
        .mayor-icon-4 { bottom: 15%; right: 8%; }

        .otp-mobile-prefix {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 13px;
          font-weight: 700;
          color: #374151;
        }
        .login-input.with-prefix {
          padding-left: 75px;
        }

        .otp-boxes {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-bottom: 20px;
        }
        .otp-box {
          width: 45px;
          height: 52px;
          border: 1.5px solid #d1d5db;
          border-radius: 10px;
          font-size: 22px;
          font-weight: 800;
          text-align: center;
          color: #111827;
          outline: none;
          background: #f9fafb;
          transition: all 0.2s;
        }
        .otp-box:focus {
          border-color: #166534;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(22, 101, 52, 0.1);
        }

        .otp-timer {
          text-align: center;
          font-size: 13px;
          color: #6b7280;
          margin-bottom: 16px;
        }
        .otp-timer strong {
          font-size: 14px;
        }

        .otp-back-btn {
          background: none;
          border: none;
          font-size: 13px;
          font-weight: 600;
          color: #6b7280;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 16px;
          padding: 0;
          font-family: 'Noto Sans Devanagari', sans-serif;
        }
        .otp-back-btn:hover {
          color: #166534;
        }

        .resend-btn {
          background: none;
          border: none;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Noto Sans Devanagari', sans-serif;
        }
        .resend-btn:disabled {
          color: #94a3b8;
          cursor: not-allowed;
        }
        .resend-btn:not(:disabled) {
          color: #f97316;
        }
        .resend-btn:not(:disabled):hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .login-card-wrapper {
            flex-direction: column;
          }
          .login-right {
            padding: 40px 30px;
          }
          .mayor-img-wrapper {
            width: 140px;
            height: 140px;
          }
        }
      `}</style>

      <div className="login-container">
        <div className="login-card-wrapper">

          {/* ── Left Panel (Form) ── */}
          <div className="login-left">
            <div className="vvcmc-header">
              <div className="vvcmc-logo">🏛️</div>
              <div className="vvcmc-text">
                <h3>Vasai-Virar City Municipal Corporation</h3>
                <p>जन संवाद</p>
              </div>
            </div>

            <div className="login-heading">
              <h1>Welcome Back</h1>
            </div>
            <div className="login-subheading">
              Mayor Appointment Portal वर login करा
            </div>

            {/* ── TABS ── */}
            <div className="login-tabs">
              <button
                className={`login-tab ${mode === "password" ? "active" : ""}`}
                onClick={() => switchMode("password")}
              >
                🔒 Password Login
              </button>
              <button
                className={`login-tab ${mode === "otp" ? "active" : ""}`}
                onClick={() => switchMode("otp")}
              >
                📱 OTP Login
              </button>
            </div>

            {/* ── Error Box ── */}
            {error && <div className="login-error">⚠️ {error}</div>}

            {/* ════════ PASSWORD TAB ════════ */}
            {mode === "password" && (
              <div>
                <form onSubmit={handleLogin}>
                  <div className="login-field">
                    <label className="login-label">Username</label>
                    <div className="login-input-wrapper">
                      <span className="login-input-icon">👤</span>
                      <input
                        className="login-input"
                        type="text"
                        placeholder="Username टाका"
                        value={form.username}
                        onChange={ch("username")}
                        autoComplete="username"
                        autoFocus
                      />
                    </div>
                  </div>

                  <div className="login-field">
                    <label className="login-label">Password</label>
                    <div className="login-input-wrapper">
                      <span className="login-input-icon">🔒</span>
                      <input
                        className="login-input"
                        type={showPass ? "text" : "password"}
                        placeholder="Password टाका"
                        value={form.password}
                        onChange={ch("password")}
                        autoComplete="current-password"
                      />
                      <button
                        type="button"
                        className="login-pass-toggle"
                        onClick={() => setShowPass(!showPass)}
                        tabIndex={-1}
                      >
                        {showPass ? "👁️" : "👁️‍🗨️"}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="login-btn"
                    disabled={loading || !form.username || !form.password}
                  >
                    {loading ? "⏳ Logging in..." : "🔐 Login"}
                  </button>

                  <div className="login-footer">
                    Account नाही?{" "}
                    <span className="login-link" onClick={() => navigate("/register")}>
                      Register करा
                    </span>
                  </div>
                </form>
              </div>
            )}

            {/* ════════ OTP TAB ════════ */}
            {mode === "otp" && (
              <div>

                {/* STEP 1 — Mobile Number Input */}
                {otpStep === "mobile" && (
                  <>
                    <div className="login-field">
                      <label className="login-label">Mobile Number</label>
                      <div className="login-input-wrapper">
                        <span className="otp-mobile-prefix">🇮🇳 +91</span>
                        <input
                          className="login-input with-prefix"
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
                      className="login-btn"
                      onClick={sendOtp}
                      disabled={mobileNo.length !== 10 || otpLoading}
                    >
                      {otpLoading ? "⏳ पाठवत आहे..." : "OTP पाठवा →"}
                    </button>

                    <div className="login-footer">
                      Account नाही?{" "}
                      <span className="login-link" onClick={() => navigate("/register")}>
                        Register करा
                      </span>
                    </div>
                  </>
                )}

                {/* STEP 2 — OTP Entry */}
                {otpStep === "otp" && (
                  <>
                    <button
                      className="otp-back-btn"
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
                    <div className="otp-boxes" onPaste={handleOtpPaste}>
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
                      <div style={{ marginTop: 6 }}>
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
                      className="login-btn"
                      onClick={verifyOtp}
                      disabled={otp.join("").length < 6 || otpLoading}
                    >
                      {otpLoading ? "⏳ Verifying..." : "✅ Verify & Login"}
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* ── Right Panel (Mayor) ── */}
          <div className="login-right">
            <div className="mayor-decorations">
              <div className="mayor-icon mayor-icon-1">🏛️</div>
              <div className="mayor-icon mayor-icon-2">🤝</div>
              <div className="mayor-icon mayor-icon-3">🏢</div>
              <div className="mayor-icon mayor-icon-4">🏙️</div>
            </div>

            <div className="mayor-section">
              <div className="mayor-img-wrapper">
                <div className="mayor-img-border">
                  <img src={mayorImg} alt="Mayor" className="mayor-img" />
                </div>
                <div className="mayor-chair-badge">🪑</div>
              </div>

              <h2 className="mayor-name">मा. श्री.अजीव पाटील</h2>
              <p className="mayor-title">मा. महामांगर, वसई-विरार</p>

              <div className="mayor-progress">
                <div className="mayor-progress-bar"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}