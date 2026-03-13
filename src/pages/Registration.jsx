import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import citizenAxios from "../services/citizenAxios";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm]       = useState({ fullName:"",userName:"", mobileNumber:"", email:"", password:"", confirmPassword:"" });
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");
  const [success, setSuccess] = useState(false);

  const ch = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }));

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.fullName || !form.mobileNumber || !form.password) { setError("सर्व required fields भरा ❌"); return; }
    if (!/^\d{10}$/.test(form.mobileNumber)) { setError("Mobile number 10 digits असावा ❌"); return; }
    if (form.password.length < 6) { setError("Password किमान 6 characters असावा ❌"); return; }
    if (form.password !== form.confirmPassword) { setError("Passwords जुळत नाहीत ❌"); return; }
    try {
      setLoading(true);
      const res = await citizenAxios.post("/citizen/register", {
        fullName: form.fullName,userName: form.userName,mobileNumber: form.mobileNumber,
        email: form.email, password: form.password,
      });
      if (!res.data.success) { setError(res.data.message || "Registration failed ❌"); return; }
      setSuccess(true);
      setTimeout(() => navigate("/login"), 2000);
    } catch (e) {
      setError(e?.response?.data?.message || "Server Error ❌");
    } finally { setLoading(false); }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .auth-root { min-height:calc(100vh - 64px); background:#f0fdf4; display:flex; align-items:center; justify-content:center; padding:32px 16px; font-family:'DM Sans',sans-serif; }
        .auth-card { background:#fff; border-radius:20px; box-shadow:0 8px 40px rgba(0,0,0,0.1); overflow:hidden; width:100%; max-width:460px; }
        .auth-header { background:linear-gradient(135deg,#1a4a2e,#16a34a); padding:32px; color:#fff; }
        .auth-header h2 { font-family:'Crimson Pro',serif; font-size:26px; font-weight:800; margin:0 0 6px; }
        .auth-header p { font-size:13px; color:#bbf7d0; margin:0; }
        .auth-body { padding:32px; }
        .auth-grid { display:grid; grid-template-columns:1fr 1fr; gap:0 20px; }
        .auth-field { margin-bottom:16px; }
        .auth-field.full { grid-column:1/-1; }
        .auth-label { display:block; font-size:12px; font-weight:600; color:#374151; text-transform:uppercase; letter-spacing:.5px; margin-bottom:6px; }
        .auth-req { color:#ef4444; margin-left:2px; }
        .auth-input { width:100%; padding:11px 14px; font-size:14px; border:1.5px solid #d1d5db; border-radius:8px; outline:none; font-family:'DM Sans',sans-serif; box-sizing:border-box; transition:border-color .15s,box-shadow .15s; background:#f9fafb; }
        .auth-input:focus { border-color:#16a34a; box-shadow:0 0 0 3px rgba(22,163,74,0.12); background:#fff; }
        .auth-error { background:#fef2f2; border:1px solid #fecaca; border-radius:8px; padding:10px 14px; font-size:13px; color:#dc2626; margin-bottom:16px; font-weight:500; }
        .auth-success { background:#f0fdf4; border:1px solid #86efac; border-radius:8px; padding:16px; font-size:14px; color:#166534; font-weight:600; text-align:center; }
        .auth-btn { width:100%; padding:12px; border-radius:8px; border:none; background:#16a34a; color:#fff; font-weight:700; font-size:15px; cursor:pointer; transition:all .2s; box-shadow:0 4px 14px rgba(22,163,74,0.3); font-family:'DM Sans',sans-serif; margin-top:4px; }
        .auth-btn:hover:not(:disabled) { background:#15803d; transform:translateY(-1px); }
        .auth-btn:disabled { background:#d1d5db; cursor:not-allowed; box-shadow:none; transform:none; }
        .auth-footer { text-align:center; margin-top:18px; font-size:13px; color:#6b7280; }
        .auth-link { color:#16a34a; font-weight:700; cursor:pointer; }
        .auth-link:hover { text-decoration:underline; }
        .auth-hint { font-size:11px; color:#9ca3af; margin-top:4px; }
      `}</style>

      <div className="auth-root">
        <div className="auth-card">
          <div className="auth-header">
            <h2>Account तयार करा 🙌</h2>
            <p>Mayor Appointment बुक करण्यासाठी register करा</p>
          </div>
          <div className="auth-body">
            {success ? (
              <div className="auth-success">
                ✅ Registration successful!<br />
                <span style={{ fontSize:13, fontWeight:400, color:"#166534" }}>Login page वर redirect होत आहे...</span>
              </div>
            ) : (
              <>
                {error && <div className="auth-error">⚠️ {error}</div>}
                <form onSubmit={handleRegister}>
                  <div className="auth-grid">
                    <div className="auth-field">
                      <label className="auth-label">Full Name <span className="auth-req">*</span></label>
                      <input className="auth-input" type="text" placeholder="आपले पूर्ण नाव"
                        value={form.fullName} onChange={ch("fullName")} />
                    </div>
                      <div className="auth-field">
                      <label className="auth-label">User Name</label>
                      <input className="auth-input" type="userName" placeholder="User Name"
                        value={form.userName} onChange={ch("userName")} />
                    </div>
                    <div className="auth-field">
                      <label className="auth-label">Mobile Number <span className="auth-req">*</span></label>
                      <input className="auth-input" type="tel" placeholder="10 digit mobile"
                        value={form.mobileNumber} onChange={ch("mobileNumber")} maxLength={10} />
                    </div>
                    <div className="auth-field">
                      <label className="auth-label">Email</label>
                      <input className="auth-input" type="email" placeholder="Email (optional)"
                        value={form.email} onChange={ch("email")} />
                    </div>
                    <div className="auth-field">
                      <label className="auth-label">Password <span className="auth-req">*</span></label>
                      <input className="auth-input" type="password" placeholder="Min. 6 characters"
                        value={form.password} onChange={ch("password")} />
                      <div className="auth-hint">किमान 6 characters</div>
                    </div>
                    <div className="auth-field">
                      <label className="auth-label">Confirm Password <span className="auth-req">*</span></label>
                      <input className="auth-input" type="password" placeholder="Password परत टाका"
                        value={form.confirmPassword} onChange={ch("confirmPassword")} />
                    </div>
                  </div>
                  <button type="submit" className="auth-btn"
                    disabled={loading || !form.fullName || !form.mobileNumber || !form.password || !form.confirmPassword}>
                    {loading ? "Registering..." : "✅ Register करा"}
                  </button>
                </form>
                <div className="auth-footer">
                  आधीच account आहे?{" "}
                  <span className="auth-link" onClick={() => navigate("/login")}>Login करा</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}