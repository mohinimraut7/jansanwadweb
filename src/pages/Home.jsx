
// import React,{useState } from "react";
// import { useNavigate } from "react-router-dom";
// import heroBg from "../assets/vvcmcbuildingbanner.png";
// // import heroBg from "../assets/vasaivirarmahangarpalika.jpg";
// import mayorPhoto from "../assets/ajivsir1.jpeg";
// // import "./home.css";

// export default function Home() {
//   const navigate = useNavigate();
//   const citizen = (() => {
//     try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
//   })();

//    const [faqOpen, setFaqOpen] = useState(null);

//   const faqs = [
//     { q: "Appointment बुक करण्यासाठी काय करावे लागेल?", a: "प्रथम Register करा, त्यानंतर उपलब्ध date आणि time slot निवडा, आवश्यक माहिती भरा आणि Submit करा. Admin approval नंतर तुम्हाला Confirmation Token मिळेल." },
//     { q: "Appointment confirm होण्यासाठी किती वेळ लागतो?", a: "Appointment submit केल्यानंतर Admin द्वारे review केले जाते. साधारणतः 1-2 कार्यालयीन दिवसांत confirmation दिली जाते. SMS आणि Portal वर status दिसेल." },
//     { q: "भेटीच्या दिवशी काय घेऊन यावे?", a: "भेटीच्या दिवशी तुमचा Confirmation Token आणि एक valid ओळखपत्र (Aadhar Card, Voter ID इ.) सोबत आणावे. Token शिवाय भेट होणार नाही." },
//     { q: "Appointment Cancel किंवा Reschedule करता येते का?", a: "होय, तुम्ही 'My Appointments' section मध्ये जाऊन Appointment cancel किंवा reschedule करू शकता. भेटीच्या 24 तास आधी बदल करणे आवश्यक आहे." },
//     { q: "एका दिवशी किती नागरिक भेट घेऊ शकतात?", a: "Mayor साहेबांच्या schedule नुसार प्रत्येक दिवशी मर्यादित slots उपलब्ध असतात. Slots संपल्यावर त्या दिवसाचे booking बंद होते, त्यामुळे लवकर बुक करा." },
//   ];


//   return (
//     <>
//       <style>{`
//        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

//         .home-root { min-height:calc(100vh - 64px); background:#f0fdf4; font-family:'DM Sans',sans-serif; }

//         /* ══ HERO ══ */
//         .hero {
//           position: relative;
//           min-height: calc(100vh - 64px);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           text-align: center;
//           padding: 80px 32px 72px;
//           overflow: hidden;
//         }
//         .hero::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image: url(${heroBg});
//           background-size: cover;
//           background-position: center top;
//           background-repeat: no-repeat;
//           z-index: 0;
//         }
//         .hero::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(180deg,rgba(0,0,0,0.08) 0%,rgba(0,0,0,0.18) 50%,rgba(0,0,0,0.35) 100%);
//           z-index: 1;
//         }
//         .hero > * { position: relative; z-index: 2; }

//         .hero-content {
//           max-width: 760px;
//           width: 100%;
//           text-align: center;
//         }

//         .hero-marathi-top {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(13px, 1.8vw, 17px);
//           font-weight: 600;
//           color: rgba(255,255,255,0.85);
//           margin-bottom: 12px;
//           display: block;
//           letter-spacing: 0.5px;
//           text-shadow: 0 1px 6px rgba(0,0,0,0.6);
//         }

//         /* जन संवाद — green, large, Tiro font like screenshot */
//         .hero-jansanwad {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(60px, 10vw, 110px);
//           font-weight: 800;
//           color: #008445;
//           line-height: 1.05;
//           margin-bottom: 20px;
//           text-shadow: 0 2px 8px rgba(0,0,0,0.3), 0 0 40px rgba(0,80,0,0.2);
//           letter-spacing: 1px;
//         }

//         /* Description — white bold like screenshot */
//         .hero-desc {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(16px, 2.4vw, 22px);
//           font-weight: 700;
//           color: #ffffff;
//           max-width: 640px;
//           margin: 0 auto 36px;
//           line-height: 1.75;
//           text-shadow: 0 1px 4px rgba(0,0,0,0.7);
//         }

//         .hero-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
//         .hero-btn-primary {
//           padding: 14px 36px; border-radius: 10px; border: 2px solid #fff;
//           background: rgba(255,255,255,0.15);
//           backdrop-filter: blur(8px);
//           color: #fff;
//           font-weight: 700; font-size: 15px; cursor: pointer;
//           transition: all .2s;
//         }
//         .hero-btn-primary:hover { background:rgba(255,255,255,0.3); transform:translateY(-2px); }
//         .hero-btn-outline {
//           padding: 14px 36px; border-radius: 10px;
//           border: 2px solid rgba(255,255,255,0.85);
//           background: rgba(255,255,255,0.1);
//           backdrop-filter: blur(4px);
//           color: #ffffff;
//           font-weight: 700; font-size: 15px; cursor: pointer; transition: all .2s;
//         }
//         .hero-btn-outline:hover { background:rgba(255,255,255,0.22); transform:translateY(-2px); }

//         @media(max-width:600px) {
//           .hero { padding:60px 20px 60px; }
//           .hero-btns { flex-direction:column; align-items:center; }
//           .hero-btn-primary, .hero-btn-outline { width:100%; max-width:280px; }
//         }


//          /* Mayor Section */
//          /* Mayor Section — Edubox style full width split */
//         .mayor-section {
//           width: 100%;
//           display: flex;
//           align-items: stretch;
//           min-height: 520px;
//         }

//         /* Left — cream side */
//         .mayor-left {
//           flex: 1;
//           background: #F5E6BF;
//           padding: 72px 56px;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           position: relative;
//           overflow: hidden;
//         }
//         .mayor-left::before {
//           content: '';
//           position: absolute;
//           top: -60px; left: -60px;
//           width: 200px; height: 200px;
//           border-radius: 50%;
//           border: 2px solid rgba(208,154,80,0.25);
//         }
//         .mayor-left::after {
//           content: '';
//           position: absolute;
//           bottom: -40px; right: 40px;
//           width: 120px; height: 120px;
//           border-radius: 50%;
//           border: 2px solid rgba(208,154,80,0.2);
//         }

//         .mayor-tag {
//           display: inline-flex; align-items: center; gap: 6px;
//           background: rgba(208,154,80,0.18);
//           color: #D09A50;
//           font-size: 12px; font-weight: 700;
//           padding: 5px 14px; border-radius: 999px;
//           margin-bottom: 14px; letter-spacing: 0.5px;
//           text-transform: uppercase;
//           width: fit-content;
//         }
//         .mayor-date {
//           font-size: 13px; color: #a16207; font-weight: 600;
//           margin-bottom: 10px;
//         }
//         .mayor-heading {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(28px, 3.8vw, 48px);
//           font-weight: 800; color: #1a1a1a;
//           line-height: 1.2; margin-bottom: 6px;
//         }
//         .mayor-heading span {
//           color: #028945;
//           position: relative;
//         }
//         .mayor-heading span::after {
//           content: '';
//           position: absolute; bottom: -2px; left: 0; right: 0;
//           height: 3px;
//           background: linear-gradient(90deg, #D09A50, #028945);
//           border-radius: 2px;
//         }
//         .mayor-org {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 15px; color: #51ABAC; font-weight: 600;
//           margin-bottom: 20px;
//         }
//         .mayor-divider {
//           width: 56px; height: 4px;
//           background: linear-gradient(90deg, #D09A50, #028945);
//           border-radius: 2px; margin-bottom: 22px;
//         }
//         .mayor-bio {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 15px; color: #4b5563;
//           line-height: 1.9; margin-bottom: 36px;
//           max-width: 520px;
//         }
//         .mayor-btns { display: flex; gap: 14px; flex-wrap: wrap; }
//         .mayor-btn-primary {
//           padding: 14px 32px; border-radius: 10px; border: none;
//           background: #028945; color: #fff;
//           font-weight: 700; font-size: 14px; cursor: pointer;
//           transition: all .2s;
//           box-shadow: 0 4px 16px rgba(2,137,69,0.3);
//         }
//         .mayor-btn-primary:hover { background: #016d38; transform: translateY(-2px); }

//         /* Right — teal/dark side */
//         .mayor-right {
//           width: 42%;
//           flex-shrink: 0;
//           background: #51ABAC;
//           position: relative;
//           overflow: hidden;
//           display: flex;
//           align-items: flex-end;
//           justify-content: center;
//         }
//         .mayor-right-decor1 {
//           position: absolute; top: 20px; right: 20px;
//           width: 90px; height: 90px;
//           border-radius: 50%;
//           background: rgba(255,255,255,0.08);
//         }
//         .mayor-right-decor2 {
//           position: absolute; bottom: 30px; right: 30px;
//           width: 60px; height: 60px;
//           border-radius: 50%;
//           border: 3px solid rgba(255,255,255,0.15);
//         }
//         .mayor-right-decor3 {
//           position: absolute; top: 40px; left: 30px;
//           width: 40px; height: 40px;
//           border-radius: 50%;
//           background: rgba(245,230,191,0.15);
//         }
//         /* wavy stripe bg like Edubox */
//         .mayor-right-stripe {
//           position: absolute;
//           top: 0; bottom: 0; right: 0;
//           width: 55%;
//           background: repeating-linear-gradient(
//             -45deg,
//             rgba(255,255,255,0.04) 0px,
//             rgba(255,255,255,0.04) 2px,
//             transparent 2px,
//             transparent 12px
//           );
//         }
//         .mayor-card {
//           position: relative; z-index: 2;
//           width: 85%;
//           max-width: 300px;
//           margin-bottom: 0;
//         }
//         .mayor-card img {
//           width: 100%; display: block;
//           object-fit: cover; object-position: top;
//           height: 460px;
//           border-radius: 20px 20px 0 0;
//           box-shadow: 0 -8px 40px rgba(0,0,0,0.2);
//         }
//         .mayor-card-badge {
//           padding: 16px 20px;
//           background: #fff;
//           border-radius: 0 0 16px 16px;
//           box-shadow: 0 8px 24px rgba(0,0,0,0.12);
//         }
//         .mayor-card-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 15px; font-weight: 800; color: #1a1a1a;
//         }
//         .mayor-card-title {
//           font-size: 11px; color: #51ABAC;
//           font-weight: 600; margin-top: 3px;
//           text-transform: uppercase; letter-spacing: 0.4px;
//         }

//         @media(max-width:900px){
//           .mayor-section { flex-direction: column; }
//           .mayor-left { padding: 48px 24px; }
//           .mayor-right { width: 100%; min-height: 400px; padding-top: 40px; }
//           .mayor-card { width: 70%; max-width: 260px; }
//           .mayor-card img { height: 360px; }
//         }
//         @media(max-width:600px){
//           .mayor-btns { flex-direction: column; }
//           .mayor-btn-primary { width: 100%; text-align: center; }
//           .mayor-card { width: 85%; }
//         }
//         /* Stats */
//         .stats { display:flex; justify-content:center; gap:0; background:#fff; border-bottom:1px solid #e5e7eb; flex-wrap:wrap; }
//         .stat-item { padding:24px 40px; text-align:center; border-right:1px solid #f3f4f6; flex:1; min-width:140px; }
//         .stat-item:last-child { border-right:none; }
//         .stat-num { font-family:'Crimson Pro',serif; font-size:32px; font-weight:800; color:#16a34a; line-height:1; }
//         .stat-lbl { font-size:12px; color:#9ca3af; font-weight:500; margin-top:4px; text-transform:uppercase; letter-spacing:.5px; }

//         /* How it works */
//         .section { padding:60px 32px; max-width:1100px; margin:0 auto; }
//         .section-title { font-family:'Crimson Pro',serif; font-size:32px; font-weight:800; color:#1a4a2e; text-align:center; margin-bottom:8px; }
//         .section-sub { text-align:center; color:#6b7280; font-size:15px; margin-bottom:48px; }
//         .steps-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:24px; }
//         .step-card { background:#fff; border-radius:16px; padding:28px 22px; text-align:center; border:1px solid #dcfce7; box-shadow:0 2px 12px rgba(0,0,0,0.05); transition:transform .2s,box-shadow .2s; position:relative; }
//         .step-card:hover { transform:translateY(-4px); box-shadow:0 8px 24px rgba(0,0,0,0.1); }
//         .step-num { position:absolute; top:-14px; left:50%; transform:translateX(-50%); width:28px; height:28px; border-radius:50%; background:#22c55e; color:#fff; font-size:13px; font-weight:800; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(34,197,94,0.4); }
//         .step-icon { font-size:36px; margin-bottom:14px; display:block; }
//         .step-title { font-weight:700; color:#1a4a2e; font-size:15px; margin-bottom:8px; }
//         .step-desc { font-size:13px; color:#6b7280; line-height:1.5; }


//         /* FAQ Section */
//         .faq-section {
//           width: 100%;
//           background: #51ABAC;
//           padding: 80px 24px;
//           position: relative;
//           overflow: hidden;
//         }
//         .faq-section::before {
//           content: '';
//           position: absolute;
//           top: -100px; left: 50%;
//           transform: translateX(-50%);
//           width: 600px; height: 400px;
//           background: radial-gradient(ellipse, rgba(255,255,255,0.1) 0%, transparent 70%);
//           pointer-events: none;
//         }
//         .faq-inner { max-width: 720px; margin: 0 auto; position: relative; z-index: 1; }
//         .faq-label {
//           text-align: center; font-size: 14px; font-weight: 700;
//           color: #fff; letter-spacing: 1px;
//           text-transform: uppercase; margin-bottom: 16px;
//           opacity: 0.85;
//         }
//         .faq-title {
//           font-family: 'Crimson Pro', serif;
//           font-size: clamp(28px, 4vw, 44px); font-weight: 800;
//           color: #ffffff; text-align: center;
//           line-height: 1.25; margin-bottom: 52px;
//         }
//         .faq-list { display: flex; flex-direction: column; gap: 14px; }
//         .faq-item {
//           background: rgba(255,255,255,0.12);
//           border: 1.5px solid rgba(255,255,255,0.25);
//           border-radius: 14px; overflow: hidden;
//           transition: border-color 0.25s, background 0.25s;
//         }
//         .faq-item.faq-active {
//           background: rgba(255,255,255,0.2);
//           border-color: rgba(255,255,255,0.5);
//         }
//         .faq-q {
//           width: 100%; display: flex; align-items: center;
//           justify-content: space-between;
//           padding: 20px 24px; background: none; border: none;
//           cursor: pointer; text-align: left; gap: 16px;
//         }
//         .faq-q-text {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 16px; font-weight: 600;
//           color: #ffffff; line-height: 1.5; flex: 1;
//         }
//         .faq-icon {
//           flex-shrink: 0; width: 32px; height: 32px;
//           border-radius: 50%;
//           border: 1.5px solid rgba(255,255,255,0.6);
//           display: flex; align-items: center; justify-content: center;
//           color: #fff; font-size: 20px; font-weight: 300;
//           transition: transform 0.3s, background 0.3s;
//         }
//         .faq-item.faq-active .faq-icon {
//           background: #fff; color: #51ABAC;
//           transform: rotate(45deg);
//         }
//         .faq-answer {
//           max-height: 0; overflow: hidden;
//           transition: max-height 0.4s ease, padding 0.3s ease;
//           padding: 0 24px;
//         }
//         .faq-item.faq-active .faq-answer {
//           max-height: 300px; padding: 0 24px 20px;
//         }
//         .faq-a-text {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 14px; color: rgba(255,255,255,0.88);
//           line-height: 1.85;
//           border-top: 1px solid rgba(255,255,255,0.2);
//           padding-top: 16px;
//         }



//         /* Notice */
//         .notice { background:linear-gradient(135deg,#fef9c3,#fef3c7); border:1px solid #fde68a; border-radius:14px; padding:24px 28px; margin:0 32px 40px; display:flex; gap:16px; align-items:flex-start; max-width:1036px; margin-left:auto; margin-right:auto; }
//         .notice-icon { font-size:28px; flex-shrink:0; }
//         .notice-title { font-weight:700; color:#92400e; font-size:15px; margin-bottom:6px; }
//         .notice-text { font-size:13px; color:#a16207; line-height:1.6; }

//         /* CTA */
//         .cta { background:linear-gradient(135deg,#1a4a2e,#166534); color:#fff; padding:60px 32px; text-align:center; }
//         .cta-title { font-family:'Crimson Pro',serif; font-size:32px; font-weight:800; margin-bottom:12px; }
//         .cta-sub { color:#bbf7d0; font-size:15px; margin-bottom:32px; }
//         .cta-btn { padding:14px 40px; border-radius:10px; border:none; background:#22c55e; color:#fff; font-weight:700; font-size:15px; cursor:pointer; box-shadow:0 6px 20px rgba(34,197,94,0.4); transition:all .2s; }
//         .cta-btn:hover { transform:translateY(-2px); }
//       `}</style>

//       <div className="home-root">

//         {/* Hero */}
//         {/* <div className="hero">
      
//           <h1 className="hero-jansanwad">जन संवाद</h1>
//           <p className="hero-desc">
//             नागरिकांना त्यांच्या समस्या व सूचना मा. महापौर श्री. अजीव पाटील यांच्यापर्यंत थेट पोहोचवण्यासाठी तयार केलेले संवाद व्यासपीठ
//           </p>
          
//         </div> */}

//            {/* Hero */}
//        {/* Hero */}
//         {/* <div className="hero">
//           <div className="hero-content">
//             <div className="hero-marathi-top">वसई विरार शहर महानगरपालिका</div>
           
//             <h1 className="hero-jansanwad">जन संवाद</h1>
//             <p className="hero-desc">
//               नागरिकांना त्यांच्या समस्या व सूचना मा. महापौर श्री. अजिव पाटील यांच्यापर्यंत थेट पोहोचवण्यासाठी तयार केलेले संवाद व्यासपीठ
//             </p>
//             <div className="hero-btns">
//               {citizen ? (
//                 <>
//                   <button className="hero-btn-primary" onClick={() => navigate("/book-appointment")}>
//                     📅 Book Appointment
//                   </button>
//                   <button className="hero-btn-outline" onClick={() => navigate("/my-appointments")}>
//                     📋 My Appointments
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <button className="hero-btn-primary" onClick={() => navigate("/register")}>
//                     🚀 Get Started — Register
//                   </button>
//                   <button className="hero-btn-outline" onClick={() => navigate("/login")}>
//                     Login करा
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div> */}

//          {/* Hero */}
//         <div className="hero">
//           <div className="hero-content">
//             <div className="hero-marathi-top">वसई विरार शहर महानगरपालिका</div>
//             <h1 className="hero-jansanwad">जन संवाद</h1>
//             <p className="hero-desc">
//               नागरिकांना त्यांच्या समस्या व सूचना मा. महापौर श्री. अजिव पाटील यांच्यापर्यंत थेट पोहोचवण्यासाठी तयार केलेले संवाद व्यासपीठ
//             </p>
//             <div className="hero-btns">
//               {citizen ? (
//                 <>
//                   <button className="hero-btn-primary" onClick={() => navigate("/book-appointment")}>
//                     📅 Book Appointment
//                   </button>
//                   <button className="hero-btn-outline" onClick={() => navigate("/my-appointments")}>
//                     📋 My Appointments
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <button className="hero-btn-primary" onClick={() => navigate("/register")}>
//                     🚀 Get Started — Register
//                   </button>
//                   <button className="hero-btn-outline" onClick={() => navigate("/login")}>
//                     Login करा
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>

//           {/* ── Mayor Intro Section ── */}
//         <div className="mayor-section">

       
//           {/* <div className="mayor-left">
//             <div className="mayor-tag">✦ Our Leadership</div>
//             <div className="mayor-date">३ फेब्रुवारी २०२६ पासून कार्यरत</div>
//             <h2 className="mayor-heading">
//               मा. महापौर<br />
//               <span>श्री. अजीव पाटील</span>
//             </h2>
//             <div className="mayor-org">वसई-विरार शहर महानगरपालिका</div>
//             <div className="mayor-divider" />
//             <p className="mayor-bio">
//               ३ फेब्रुवारी २०२६ रोजी महापौरपदाची सूत्रे स्वीकारल्यापासून मा. महापौर श्री. अजीव पाटील यांनी नागरिकांशी थेट संवाद साधण्यासाठी हे जन संवाद व्यासपीठ उभारले आहे. नागरिकांच्या समस्या, सूचना आणि तक्रारी थेट महापौरांपर्यंत पोहोचाव्यात यासाठी हे पारदर्शक, सोपे आणि जलद ऑनलाइन माध्यम तयार केले आहे.
//             </p>
//             <div className="mayor-stats-row">
//               {[
//                 { num:"24/7", lbl:"Online Portal" },
//                 { num:"100%", lbl:"Transparent" },
//                 { num:"2026", lbl:"Since" },
//               ].map((s,i) => (
//                 <div key={i}>
//                   <div className="m-stat-num">{s.num}</div>
//                   <div className="m-stat-lbl">{s.lbl}</div>
//                 </div>
//               ))}
//             </div>
//             <div className="mayor-btns">
//               <button className="mayor-btn-primary" onClick={() => navigate(citizen ? "/book-appointment" : "/register")}>
//                 📅 Appointment बुक करा
//               </button>
//               <button className="mayor-btn-sec" onClick={() => navigate("/login")}>
//                 Login करा
//               </button>
//             </div>
//           </div> */}


//         {/* ── Mayor Intro Section ── */}
//         <div className="mayor-section">

//           {/* Left — cream */}
//           <div className="mayor-left">
//             <div className="mayor-tag">✦ Our Leadership</div>
//             <div className="mayor-date">३ फेब्रुवारी २०२६ पासून कार्यरत</div>
//             <h2 className="mayor-heading">
//               मा. महापौर<br />
//               <span>श्री. अजीव पाटील</span>
//             </h2>
//             <div className="mayor-org">वसई-विरार शहर महानगरपालिका</div>
//             <div className="mayor-divider" />
//             <p className="mayor-bio">
//               ३ फेब्रुवारी २०२६ रोजी महापौरपदाची सूत्रे स्वीकारल्यापासून मा. महापौर श्री. अजीव पाटील यांनी नागरिकांशी थेट संवाद साधण्यासाठी हे जन संवाद व्यासपीठ उभारले आहे. नागरिकांच्या समस्या, सूचना आणि तक्रारी थेट महापौरांपर्यंत पोहोचाव्यात यासाठी हे पारदर्शक, सोपे आणि जलद ऑनलाइन माध्यम तयार केले आहे.
//             </p>
//             <div className="mayor-btns">
//               <button className="mayor-btn-primary" onClick={() => navigate(citizen ? "/book-appointment" : "/register")}>
//                 📅 Appointment बुक करा
//               </button>
//             </div>
//           </div>

//           {/* Right — teal with photo */}
//           <div className="mayor-right">
//             <div className="mayor-right-decor1" />
//             <div className="mayor-right-decor2" />
//             <div className="mayor-right-decor3" />
//             <div className="mayor-right-stripe" />
//             <div className="mayor-card">
//               <img src={mayorPhoto} alt="मा. महापौर श्री. अजीव पाटील" />
//               <div className="mayor-card-badge">
//                 <div className="mayor-card-name">मा. महापौर श्री. अजीव पाटील</div>
//                 <div className="mayor-card-title">वसई-विरार शहर महानगरपालिका</div>
//               </div>
//             </div>
//           </div>

//         </div>

        
        

//         </div>

//          {/* ── FAQ Section ── */}
//         <div className="faq-section">
//           <div className="faq-inner">
//             <div className="faq-label">FAQ</div>
//             <h2 className="faq-title">
//              वारंवार विचारले जाणारे प्रश्न
//             </h2>
//             <div className="faq-list">
//               {faqs.map((f, i) => (
//                 <div key={i} className={`faq-item${faqOpen === i ? " faq-active" : ""}`}>
//                   <button className="faq-q" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
//                     <span className="faq-q-text">{f.q}</span>
//                     <span className="faq-icon">+</span>
//                   </button>
//                   <div className="faq-answer">
//                     <p className="faq-a-text">{f.a}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>


//         {/* Stats */}
//         {/* <div className="stats">
//           {[
//             { num:"8",    lbl:"Talukas" },
//             { num:"24/7", lbl:"Online Booking" },
//             { num:"2009", lbl:"Established" },
//             { num:"100%", lbl:"Transparent" },
//           ].map((s,i) => (
//             <div key={i} className="stat-item">
//               <div className="stat-num">{s.num}</div>
//               <div className="stat-lbl">{s.lbl}</div>
//             </div>
//           ))}
//         </div> */}

//         {/* How it works */}
//         <div className="section">
//           <h2 className="section-title">कसे काम करते?</h2>
//           <p className="section-sub">फक्त 4 सोप्या steps मध्ये Mayor ची भेट बुक करा</p>
//           <div className="steps-grid">
//             {[
//               { icon:"📝", title:"Register करा",   desc:"Mobile number वापरून account तयार करा — फक्त 1 मिनिट" },
//               { icon:"📅", title:"Date निवडा",     desc:"Mayor च्या available dates आणि time slots मधून निवडा" },
//               { icon:"📋", title:"Details भरा",    desc:"भेटीचे कारण, visitors संख्या आणि photo द्या" },
//               { icon:"🎫", title:"Token मिळवा",    desc:"Confirmation token आणि QR code मिळेल — भेटीच्या दिवशी दाखवा" },
//             ].map((s,i) => (
//               <div key={i} className="step-card">
//                 <div className="step-num">{i+1}</div>
//                 <span className="step-icon">{s.icon}</span>
//                 <div className="step-title">{s.title}</div>
//                 <div className="step-desc">{s.desc}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Notice */}
//         <div className="notice">
//           <span className="notice-icon">⚠️</span>
//           <div>
//             <div className="notice-title">महत्त्वाची सूचना</div>
//             <div className="notice-text">
//               भेटीच्या दिवशी वेळेवर या. Token confirm झाल्याशिवाय भेट होणार नाही.
//               Appointment confirm होण्यासाठी admin approval आवश्यक आहे.
//               कोणत्याही अडचणीसाठी VVCMC कार्यालयाशी संपर्क करा.
//             </div>
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="cta">
//           <div className="cta-title">आजच Appointment बुक करा</div>
//           <div className="cta-sub">Mayor साहेबांची वेळ मर्यादित आहे — लवकर बुक करा</div>
//           <button className="cta-btn" onClick={() => navigate(citizen ? "/book-appointment" : "/register")}>
//             {citizen ? "📅 Book Now" : "🚀 Register & Book"}
//           </button>
//         </div>

//       </div>
//     </>
//   );
// }

// =======================================================================

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import heroBg from "../assets/vvcmcbuildingbanner.png";
import mayorPhoto from "../assets/ajivsir1.jpeg";
// import meeting from "../assets/meeting.jpeg";
import meeting from "../assets/meeting2.jpeg";
import narangibridgepahani from "../assets/narangibridgeahani.jpeg";
// conditional import — file नसेल तर null
// let narangibridgepahani = null;
// try { narangibridgepahani = require("../assets/narangibridgeahani.jpeg"); } catch {}


/* ── Lottie loader ─────────────────────────────────────── */
function LottiePlayer({ src, style, loop = true }) {
  const ref = useRef(null);
  useEffect(() => {
    let anim;
    const init = () => {
      if (window.lottie && ref.current) {
        ref.current.innerHTML = "";
        anim = window.lottie.loadAnimation({
          container: ref.current,
          renderer: "svg",
          loop,
          autoplay: true,
          path: src,
        });
      }
    };
    if (!window.lottie) {
      const s = document.createElement("script");
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js";
      s.onload = init;
      document.head.appendChild(s);
    } else {
      init();
    }
    return () => anim && anim.destroy();
  }, [src]);
  return <div ref={ref} style={style} />;
}

export default function Home() {
  const navigate = useNavigate();
  const citizen = (() => {
    try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
  })();
  const [faqOpen, setFaqOpen] = useState(null);
  
  const [projIdx, setProjIdx]   = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const projects = [
    {
      icon: ":🌉", tag: "पायाभूत सुविधा",
      title: "नारंगी उड्डाणपूल प्रकल्प पाहणी",
      desc: "नारंगी येथील उड्डाणपुलाच्या कामाची मा. महापौर श्री. अजीव पाटील यांनी प्रत्यक्ष पाहणी केली. या पाहणीदरम्यान संबंधित अधिकारी, रेल्वे अधिकारी, कंत्राटदार व उपकंत्राटदार यांच्याशी चर्चा करून कामाची प्रगती व अडचणी जाणून घेतल्या. तसेच कामाला अधिक गती देण्याच्या सूचना दिल्या. हा उड्डाणपूल चालू महिन्याच्या अखेरीपर्यंत वाहतुकीसाठी खुला करण्याचा प्रयत्न सुरू आहे.",
      progress: 68, status: "ongoing", statusLabel: "सुरू आहे",
      budget: "₹ 42 कोटी", deadline: "डिसेंबर 2025",
      stat: "", statLbl: "मार्च २०२६ अखेर वाहतुकीसाठी खुले",
      accent: "#51ABAC", bg: "#e8f7f7",
      bgimg:narangibridgepahani
    },
    {
      icon: "🏛️",
      title: "समिती गठनाबाबत चर्चा",
      desc: "स्थायी समितीच्या महत्त्वाच्या विषयांवर तसेच प्रभाग समित्यांच्या गठनाबाबत  चर्चा सुरू आहे.",
      progress: 45, status: "ongoing", statusLabel: "सुरू आहे",
      budget: "₹ 85 कोटी", deadline: "मार्च 2026",
      stat: "", statLbl: "",
      accent: "#028945", bg: "#e8f5ef",
      bgimg:meeting
    },

    {
      icon: "💧", tag: "पाणीपुरवठा",
      title: "24×7 पाणीपुरवठा योजना — वसई विभाग",
      desc: "वसई विभागातील नागरिकांना 24 तास शुद्ध पाणी उपलब्ध करण्यासाठी नवीन जलवाहिन्या टाकणे, जुन्या पाइपलाइनचे नूतनीकरण आणि नवीन पाण्याच्या टाक्या बांधणे.",
      progress: 45, status: "ongoing", statusLabel: "सुरू आहे",
      budget: "₹ 85 कोटी", deadline: "मार्च 2026",
      stat: "1.2 लाख", statLbl: "लाभार्थी कुटुंबे",
      accent: "#028945", bg: "#e8f5ef",
    },
    {
      icon: "🏫", tag: "शिक्षण",
      title: "VVCMC शाळा डिजिटलायझेशन उपक्रम",
      desc: "महानगरपालिकेच्या सर्व शाळांमध्ये स्मार्ट बोर्ड, संगणक लॅब आणि इंटरनेट सुविधा उपलब्ध करणे. विद्यार्थ्यांना डिजिटल शिक्षण देण्यासाठी हा उपक्रम राबवला जात आहे.",
      progress: 30, status: "planning", statusLabel: "नियोजन",
      budget: "₹ 18 कोटी", deadline: "जून 2026",
      stat: "94", statLbl: "शाळा डिजिटल",
      accent: "#D09A50", bg: "#fdf3e0",
    },
    {
      icon: "🌳", tag: "पर्यावरण",
      title: "हरित वसई-विरार — वृक्षारोपण मोहीम",
      desc: "महानगरपालिका क्षेत्रात 5 लाख झाडे लावण्याचा संकल्प. उद्याने विकसित करणे, रस्त्यांच्या दुतर्फा झाडे लावणे आणि पर्यावरण संतुलन राखणे हे या प्रकल्पाचे उद्दिष्ट.",
      progress: 55, status: "ongoing", statusLabel: "सुरू आहे",
      budget: "₹ 8 कोटी", deadline: "ऑगस्ट 2025",
      stat: "5 लाख", statLbl: "झाडे लावणार",
      accent: "#028945", bg: "#e8f5ef",
    },
  ];

  /* Auto-advance carousel */
  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(() => {
      setProjIdx(i => (i + 1) % projects.length);
    }, 4000);
    return () => clearInterval(t);
  }, [autoPlay, projects.length]);


  const faqs = [
    {q:"शहराचा विचार केला तर फेरीवाला धोरण अजूनही राबवण्यात आलेले नाही. त्यामुळे वाहतूक कोंडीचा मोठा सामना करावा लागत आहे आणि लोकांना त्रास होत आहे. यामधून आपण कसा मार्ग काढणार आहोत?",a:"वाहतूक कोंडी कमी करण्यासाठी आणि स्टेशन परिसरातील समस्या सोडवण्यासाठी न्यायालयाच्या मार्गदर्शक तत्त्वांनुसार लवकरात लवकर कारवाई करण्यात येईल. संपूर्ण स्टेशन परिसर टप्प्याटप्प्याने मोकळा करून नागरिकांना होणारा त्रास कमी करण्यावर भर दिला जाईल."},
    { q: "Appointment बुक करण्यासाठी काय करावे लागेल?", a: "प्रथम Register करा, त्यानंतर उपलब्ध date आणि time slot निवडा, आवश्यक माहिती भरा आणि Submit करा. Admin approval नंतर तुम्हाला Confirmation Token मिळेल." },
    { q: "Appointment confirm होण्यासाठी किती वेळ लागतो?", a: "Appointment submit केल्यानंतर Admin द्वारे review केले जाते. साधारणतः 1-2 कार्यालयीन दिवसांत confirmation दिली जाते. SMS आणि Portal वर status दिसेल." },
    { q: "भेटीच्या दिवशी काय घेऊन यावे?", a: "भेटीच्या दिवशी तुमचा Confirmation Token आणि एक valid ओळखपत्र (Aadhar Card, Voter ID इ.) सोबत आणावे. Token शिवाय भेट होणार नाही." },
    { q: "Appointment Cancel किंवा Reschedule करता येते का?", a: "होय, तुम्ही 'My Appointments' section मध्ये जाऊन Appointment cancel किंवा reschedule करू शकता. भेटीच्या 24 तास आधी बदल करणे आवश्यक आहे." },
    { q: "एका दिवशी किती नागरिक भेट घेऊ शकतात?", a: "Mayor साहेबांच्या schedule नुसार प्रत्येक दिवशी मर्यादित slots उपलब्ध असतात. Slots संपल्यावर त्या दिवसाचे booking बंद होते, त्यामुळे लवकर बुक करा." },
  ];

  const steps = [
    { lottie: "https://assets3.lottiefiles.com/packages/lf20_jbb3xnwi.json", title: "Register करा",  desc: "Mobile number वापरून account तयार करा — फक्त 1 मिनिट" },
    { lottie: "https://assets4.lottiefiles.com/packages/lf20_tljjahng.json", title: "Date निवडा",    desc: "Mayor च्या available dates आणि time slots मधून निवडा" },
    { lottie: "https://assets9.lottiefiles.com/packages/lf20_xyadoh9h.json", title: "Details भरा",   desc: "भेटीचे कारण, visitors संख्या आणि photo द्या" },
    { lottie: "https://assets10.lottiefiles.com/packages/lf20_attdh2fv.json",title: "Token मिळवा",   desc: "Confirmation token आणि QR code मिळेल — भेटीच्या दिवशी दाखवा" },
  ];

    const p = projects[projIdx];

  return (
    <>
      <style>{`
        

          @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');

        .hero {
          position: relative;
          min-height: calc(100vh - 64px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 80px 32px 72px;
          overflow: hidden;
        }

        /* Building background image */
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url(${heroBg});
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          z-index: 0;
        }

        /* #51ABAC teal overlay with opacity */
        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(81, 171, 172, 0.5);
          z-index: 1;
        }

        /* All direct children above overlay */
        .hero > * {
          position: relative;
          z-index: 2;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 999px;
          padding: 6px 16px;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 28px;
          letter-spacing: 0.3px;
        }

        .hero-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 8px #fff;
          animation: pulse 2s infinite;
          flex-shrink: 0;
        }

        @keyframes pulse {
          0%   { opacity:1; transform:scale(1); }
          50%  { opacity:.5; transform:scale(1.5); }
          100% { opacity:1; transform:scale(1); }
        }

        /* जन संवाद — big white bold */
        .hero-jansanwad {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: clamp(48px, 9vw, 88px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 20px;
          text-shadow: 0 4px 24px rgba(0,0,0,0.25);
          letter-spacing: -1px;
        }

        /* Description — white bold */
        .hero-desc {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: clamp(16px, 2.4vw, 22px);
          font-weight: 700;
          color: #ffffff;
          max-width: 680px;
          margin: 0 auto 36px;
          line-height: 1.65;
          text-shadow: 0 2px 12px rgba(0,0,0,0.2);
        }

        .hero-btns {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-btn-primary {
          padding: 14px 36px;
          border-radius: 10px;
          border: none;
          background: #ffffff;
          color: #028945;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: all .2s;
          box-shadow: 0 4px 20px rgba(0,0,0,0.18);
        }
        .hero-btn-primary:hover { background: #f0fdf4; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,0.22); }

        .hero-btn-outline {
          padding: 14px 36px;
          border-radius: 10px;
          border: 2px solid rgba(255,255,255,0.8);
          background: transparent;
          color: #ffffff;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: all .2s;
        }
        .hero-btn-outline:hover { background: rgba(255,255,255,0.15); transform: translateY(-2px); }

        @media(max-width:600px) {
          .hero { padding: 60px 20px 60px; }
          .hero-btns { flex-direction: column; align-items: center; }
          .hero-btn-primary, .hero-btn-outline { width: 100%; max-width: 280px; }
        }

        /* ══ MAYOR SECTION ═════════════════════════════════════ */
        .mayor-section {
          width: 100%; display: flex; align-items: stretch; min-height: 540px;
        }
        .mayor-left {
          flex: 1; background: var(--gold);
          padding: 72px 56px;
          display: flex; flex-direction: column; justify-content: center;
          position: relative; overflow: hidden;
        }
        .mayor-left::before {
          content: ''; position: absolute; top: -60px; left: -60px;
          width: 220px; height: 220px; border-radius: 50%;
          border: 2px solid rgba(208,154,80,0.3);
        }
        .mayor-left::after {
          content: ''; position: absolute; bottom: -40px; right: 40px;
          width: 130px; height: 130px; border-radius: 50%;
          border: 2px solid rgba(208,154,80,0.22);
        }
        /* Lottie decoration in mayor left */
        .mayor-lottie-deco {
          position: absolute; bottom: 24px; right: 60px;
          width: 90px; height: 90px; opacity: 0.35; pointer-events: none;
        }

        .mayor-tag {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(208,154,80,0.2); color: #b8860b;
          font-size: 12px; font-weight: 700; padding: 5px 14px;
          border-radius: 999px; margin-bottom: 14px; letter-spacing: 0.5px;
          text-transform: uppercase; width: fit-content;
        }
        .mayor-date { font-size: 13px; color: #a16207; font-weight: 600; margin-bottom: 10px; }
        .mayor-heading {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: clamp(28px, 3.8vw, 48px); font-weight: 800;
          color: #1a1a1a; line-height: 1.2; margin-bottom: 6px;
        }
        .mayor-heading span { color: var(--green); position: relative; }
        .mayor-heading span::after {
          content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
          height: 3px; background: linear-gradient(90deg,#D09A50,var(--green)); border-radius: 2px;
        }
        .mayor-org {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 15px; color: var(--teal); font-weight: 600; margin-bottom: 20px;
        }
        .mayor-divider {
          width: 56px; height: 4px;
          background: linear-gradient(90deg,#D09A50,var(--green));
          border-radius: 2px; margin-bottom: 22px;
        }
        .mayor-bio {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 15px; color: #4b5563; line-height: 1.9;
          margin-bottom: 36px; max-width: 520px;
        }
        .mayor-btns { display: flex; gap: 14px; flex-wrap: wrap; }
        .mayor-btn-primary {
          padding: 14px 32px; border-radius: 12px; border: none;
          background: var(--green); color: #fff; font-weight: 700; font-size: 14px;
          cursor: pointer; transition: all .2s; box-shadow: 0 4px 16px rgba(2,137,69,0.3);
        }
        .mayor-btn-primary:hover { background: #016d38; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(2,137,69,0.4); }

        .mayor-right {
          width: 42%; flex-shrink: 0; background: var(--teal);
          position: relative; overflow: hidden;
          display: flex; align-items: flex-end; justify-content: center;
        }
        .mayor-right-decor1 { position: absolute; top: 20px; right: 20px; width: 90px; height: 90px; border-radius: 50%; background: rgba(255,255,255,0.08); }
        .mayor-right-decor2 { position: absolute; bottom: 30px; right: 30px; width: 60px; height: 60px; border-radius: 50%; border: 3px solid rgba(255,255,255,0.15); }
        .mayor-right-decor3 { position: absolute; top: 40px; left: 30px; width: 40px; height: 40px; border-radius: 50%; background: rgba(245,230,191,0.15); }
        .mayor-right-stripe {
          position: absolute; top: 0; bottom: 0; right: 0; width: 55%;
          background: repeating-linear-gradient(-45deg,rgba(255,255,255,0.04) 0px,rgba(255,255,255,0.04) 2px,transparent 2px,transparent 12px);
        }
        .mayor-card { position: relative; z-index: 2; width: 85%; max-width: 300px; margin-bottom: 0; }
        .mayor-card img {
          width: 100%; display: block; object-fit: cover; object-position: top;
          height: 460px; border-radius: 20px 20px 0 0;
          box-shadow: 0 -8px 40px rgba(0,0,0,0.2);
        }
        .mayor-card-badge { padding: 16px 20px; background: #fff; border-radius: 0 0 16px 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.12); }
        .mayor-card-name { font-family: 'Tiro Devanagari Marathi', serif; font-size: 15px; font-weight: 800; color: #1a1a1a; }
        .mayor-card-title { font-size: 11px; color: var(--teal); font-weight: 600; margin-top: 3px; text-transform: uppercase; letter-spacing: 0.4px; }

        /* ══ HOW IT WORKS ══════════════════════════════════════ */
        .section {
          padding: 80px 32px; max-width: 1100px; margin: 0 auto;
        }
        .section-header { text-align: center; margin-bottom: 56px; }
        .section-tag {
          display: inline-block; background: rgba(76,171,191,0.12);
          color: var(--blue); font-size: 12px; font-weight: 700;
          padding: 5px 16px; border-radius: 999px; margin-bottom: 14px;
          letter-spacing: 0.6px; text-transform: uppercase;
        }
        .section-title { font-family: 'Crimson Pro', serif; font-size: clamp(28px,4vw,40px); font-weight: 800; color: #1a4a2e; margin-bottom: 8px; }
        .section-sub { color: #6b7280; font-size: 15px; }
        .steps-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); gap: 28px; }
        .step-card {
          background: #fff; border-radius: 20px; padding: 32px 24px;
          text-align: center;
          border: 1px solid rgba(76,171,191,0.15);
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: transform .25s, box-shadow .25s;
          position: relative; overflow: hidden;
        }
        .step-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, var(--teal), var(--green));
        }
        .step-card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(76,171,191,0.2); }
        .step-num {
          position: absolute; top: 16px; right: 16px;
          width: 26px; height: 26px; border-radius: 50%;
          background: linear-gradient(135deg, var(--teal), var(--green));
          color: #fff; font-size: 12px; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
        }
        .step-lottie { width: 88px; height: 88px; margin: 0 auto 16px; }
        .step-title { font-weight: 700; color: #1a4a2e; font-size: 15px; margin-bottom: 8px; }
        .step-desc { font-size: 13px; color: #6b7280; line-height: 1.6; }

        /* ══ FAQ ═══════════════════════════════════════════════ */
        .faq-section {
          width: 100%; background: var(--teal);
          padding: 80px 24px; position: relative; overflow: hidden;
        }
        .faq-section::before {
          content: ''; position: absolute; top: -80px; left: 50%;
          transform: translateX(-50%); width: 700px; height: 500px;
          background: radial-gradient(ellipse,rgba(255,255,255,0.12) 0%,transparent 70%);
          pointer-events: none;
        }
        /* Lottie side decorations */
        .faq-lottie-l {
          position: absolute; left: 30px; top: 50%;
          transform: translateY(-50%);
          width: 120px; height: 120px; opacity: 0.2; pointer-events: none;
        }
        .faq-lottie-r {
          position: absolute; right: 30px; top: 50%;
          transform: translateY(-50%);
          width: 120px; height: 120px; opacity: 0.2; pointer-events: none;
        }
        .faq-inner { max-width: 720px; margin: 0 auto; position: relative; z-index: 1; }
        .faq-label { text-align: center; font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.75); letter-spacing: 1.2px; text-transform: uppercase; margin-bottom: 14px; }
        .faq-title { font-family: 'Crimson Pro', serif; font-size: clamp(26px,4vw,42px); font-weight: 800; color: #fff; text-align: center; line-height: 1.25; margin-bottom: 48px; }
        .faq-list { display: flex; flex-direction: column; gap: 12px; }
        .faq-item {
          background: rgba(255,255,255,0.1); border: 1.5px solid rgba(255,255,255,0.22);
          border-radius: 16px; overflow: hidden; transition: all 0.25s;
        }
        .faq-item.faq-active { background: rgba(255,255,255,0.18); border-color: rgba(255,255,255,0.5); }
        .faq-q { width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 20px 24px; background: none; border: none; cursor: pointer; text-align: left; gap: 16px; }
        .faq-q-text { font-family: 'Tiro Devanagari Marathi', serif; font-size: 16px; font-weight: 600; color: #fff; line-height: 1.5; flex: 1; }
        .faq-icon { flex-shrink: 0; width: 32px; height: 32px; border-radius: 50%; border: 1.5px solid rgba(255,255,255,0.55); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; font-weight: 300; transition: transform 0.3s, background 0.3s; }
        .faq-item.faq-active .faq-icon { background: #fff; color: var(--teal); transform: rotate(45deg); }
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.3s; padding: 0 24px; }
        .faq-item.faq-active .faq-answer { max-height: 300px; padding: 0 24px 20px; }
        .faq-a-text { font-family: 'Tiro Devanagari Marathi', serif; font-size: 14px; color: rgba(255,255,255,0.88); line-height: 1.85; border-top: 1px solid rgba(255,255,255,0.18); padding-top: 16px; }

       
        /* ══ PROJECTS CAROUSEL ══ */
        .projects-section {
          padding: 72px 32px;
          background: #fff;
          border-top: 1px solid rgba(81,171,172,0.1);
          border-bottom: 1px solid rgba(81,171,172,0.1);
        }
        .projects-inner { max-width: 1060px; margin: 0 auto; }

        /* big card — left text + right colored panel */
        .proj-card {
          display: flex;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 12px 48px rgba(0,0,0,0.1);
          min-height: 300px;
          transition: box-shadow .3s;
          background:#fff;
        }
        .proj-left {
          flex: 1;
          padding: 44px 48px;
           background: transparent;  /* semicolon add केला */
          display: flex;
          flex-direction: column;
          justify-content: center;
          border: 1px solid rgba(81,171,172,0.12);
          border-right: none;
          border-radius: 24px 0 0 24px;
          background-size: cover;          /* 👈 ADD */
         background-position: top;        /* 👈 ADD (MOST IMPORTANT) */
         background-repeat: no-repeat;    /* 👈 ADD */

        }
        .proj-tag {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 11px; font-weight: 700;
          padding: 4px 14px; border-radius: 999px;
          text-transform: uppercase; letter-spacing: 0.6px;
          margin-bottom: 16px; width: fit-content;
        }
        .proj-title {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: clamp(17px,2.4vw,24px);
          font-weight: 800; color: #1a1a1a;
          margin-bottom: 14px; line-height: 1.35;
        }
        .proj-desc {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 13.5px; color: #6b7280;
          line-height: 1.8; margin-bottom: 22px;
          max-width: 480px;
        }
        .proj-progress-row { display:flex; justify-content:space-between; margin-bottom:6px; }
        .proj-progress-lbl { font-size:12px; font-weight:600; color:#4b5563; }
        .proj-progress-pct { font-size:13px; font-weight:800; }
        .proj-bar { height:10px; background:#f1f5f9; border-radius:999px; overflow:hidden; margin-bottom:20px; }
        .proj-bar-fill { height:100%; border-radius:999px; transition: width 0.6s ease; }
        .proj-meta { display:flex; align-items:center; gap:16px; flex-wrap:wrap; }
        .proj-meta-item { font-size:12.5px; color:#6b7280; display:flex; align-items:center; gap:5px; }
        .proj-meta-item strong { color:#1a1a1a; }
        .proj-chip { font-size:11px; font-weight:700; padding:4px 12px; border-radius:999px; text-transform:uppercase; }
        .chip-ongoing  { background:rgba(2,137,69,0.1);   color:#028945; }
        .chip-planning { background:rgba(208,154,80,0.15); color:#b8860b; }

        .proj-right {
          width: 220px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 18px;
          padding: 32px 20px;
          border-radius: 0 24px 24px 0;
          transition: background 0.5s;
           background-size: cover;          /* 👈 ADD */
         background-position: top;        /* 👈 ADD (MOST IMPORTANT) */
         background-repeat: no-repeat;    /* 👈 ADD */
        }
        .proj-icon { font-size: 64px; line-height: 1; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15)); }
        .proj-stat-num { font-family:'Crimson Pro',serif; font-size:38px; font-weight:800; color:#fff; text-align:center; line-height:1; }
        .proj-stat-lbl { font-size:11px; color:rgba(255,255,255,0.82); font-weight:700; text-transform:uppercase; letter-spacing:0.5px; text-align:center; }

        /* nav */
        .proj-nav { display:flex; align-items:center; justify-content:center; gap:14px; margin-top:28px; }
        .proj-btn {
          width:42px; height:42px; border-radius:50%;
          border:1.5px solid rgba(81,171,172,0.4);
          background:#fff; color:#51ABAC;
          font-size:20px; cursor:pointer;
          display:flex; align-items:center; justify-content:center;
          transition:all .2s; box-shadow:0 2px 8px rgba(0,0,0,0.06);
        }
        .proj-btn:hover { background:#51ABAC; color:#fff; border-color:#51ABAC; transform:scale(1.08); }
        .proj-dots { display:flex; gap:7px; align-items:center; }
        .proj-dot { width:9px; height:9px; border-radius:50%; background:rgba(81,171,172,0.3); border:none; cursor:pointer; padding:0; transition:all .25s; }
        .proj-dot.active { background:#51ABAC; width:26px; border-radius:5px; }
        .proj-counter { font-size:12px; font-weight:600; color:#9ca3af; }

        /* ══ FAQ ══ */
        .faq-section { width:100%; background:var(--teal); padding:80px 24px; position:relative; overflow:hidden; }
        .faq-section::before { content:''; position:absolute; top:-80px; left:50%; transform:translateX(-50%); width:700px; height:500px; background:radial-gradient(ellipse,rgba(255,255,255,0.12) 0%,transparent 70%); pointer-events:none; }
        .faq-inner { max-width:720px; margin:0 auto; position:relative; z-index:1; }
        .faq-label { text-align:center; font-size:13px; font-weight:700; color:rgba(255,255,255,0.75); letter-spacing:1.2px; text-transform:uppercase; margin-bottom:14px; }
        .faq-title { font-family:'Crimson Pro',serif; font-size:clamp(26px,4vw,42px); font-weight:800; color:#fff; text-align:center; line-height:1.25; margin-bottom:48px; }
        .faq-list { display:flex; flex-direction:column; gap:12px; }
        .faq-item { background:rgba(255,255,255,0.1); border:1.5px solid rgba(255,255,255,0.22); border-radius:16px; overflow:hidden; transition:all 0.25s; }
        .faq-item.faq-active { background:rgba(255,255,255,0.18); border-color:rgba(255,255,255,0.5); }
        .faq-q { width:100%; display:flex; align-items:center; justify-content:space-between; padding:20px 24px; background:none; border:none; cursor:pointer; text-align:left; gap:16px; }
        .faq-q-text { font-family:'Tiro Devanagari Marathi',serif; font-size:16px; font-weight:600; color:#fff; line-height:1.5; flex:1; }
        .faq-icon { flex-shrink:0; width:32px; height:32px; border-radius:50%; border:1.5px solid rgba(255,255,255,0.55); display:flex; align-items:center; justify-content:center; color:#fff; font-size:20px; font-weight:300; transition:transform 0.3s,background 0.3s; }
        .faq-item.faq-active .faq-icon { background:#fff; color:var(--teal); transform:rotate(45deg); }
        .faq-answer { max-height:0; overflow:hidden; transition:max-height 0.4s ease,padding 0.3s; padding:0 24px; }
        .faq-item.faq-active .faq-answer { max-height:300px; padding:0 24px 20px; }
        .faq-a-text { font-family:'Tiro Devanagari Marathi',serif; font-size:14px; color:rgba(255,255,255,0.88); line-height:1.85; border-top:1px solid rgba(255,255,255,0.18); padding-top:16px; }

       
       
        /* ══ NOTICE ════════════════════════════════════════════ */
        .notice {
          background: linear-gradient(135deg,#fef9c3,#fef3c7);
          border: 1px solid #fde68a; border-radius: 16px;
          padding: 24px 28px; margin: 40px auto;
          display: flex; gap: 16px; align-items: flex-start; max-width: 1036px;
        }
        .notice-icon { font-size: 28px; flex-shrink: 0; }
        .notice-title { font-weight: 700; color: #92400e; font-size: 15px; margin-bottom: 6px; }
        .notice-text { font-size: 13px; color: #a16207; line-height: 1.6; }

        /* ══ CTA ═══════════════════════════════════════════════ */
        .cta {
          background: linear-gradient(135deg, var(--green) 0%, #014d28 100%);
          color: #fff; padding: 72px 32px; text-align: center;
          position: relative; overflow: hidden;
        }
        .cta::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(76,171,191,0.25) 0%, transparent 65%);
          pointer-events: none;
        }
        .cta-lottie-l { position: absolute; left: 60px; top: 50%; transform: translateY(-50%); width: 150px; height: 150px; opacity: 0.12; pointer-events: none; }
        .cta-lottie-r { position: absolute; right: 60px; top: 50%; transform: translateY(-50%); width: 150px; height: 150px; opacity: 0.12; pointer-events: none; }
        .cta-inner { position: relative; z-index: 1; }
        .cta-title { font-family: 'Crimson Pro', serif; font-size: clamp(28px,4vw,40px); font-weight: 800; margin-bottom: 12px; }
        .cta-sub { color: rgba(255,255,255,0.8); font-size: 16px; margin-bottom: 36px; }
        .cta-btn {
          padding: 15px 48px; border-radius: 14px; border: none;
          background: #fff; color: var(--green);
          font-weight: 800; font-size: 16px; cursor: pointer;
          box-shadow: 0 8px 28px rgba(0,0,0,0.18); transition: all .2s;
        }
        .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 36px rgba(0,0,0,0.25); }

        /* ══ RESPONSIVE ════════════════════════════════════════ */
        @media(max-width:900px){
          .mayor-section { flex-direction: column; }
          .mayor-left { padding: 48px 24px; }
          .mayor-right { width: 100%; min-height: 400px; padding-top: 40px; }
          .mayor-card { width: 70%; max-width: 260px; }
          .mayor-card img { height: 360px; }
          .faq-lottie-l, .faq-lottie-r, .cta-lottie-l, .cta-lottie-r { display: none; }
        }
        @media(max-width:600px){
          .hero { padding: 60px 20px 60px; }
          .hero-btns { flex-direction: column; align-items: center; }
          .hero-btn-primary, .hero-btn-outline { width: 100%; max-width: 280px; }
          .hero-lottie-left, .hero-lottie-right { display: none; }
          .mayor-btns { flex-direction: column; }
          .mayor-btn-primary { width: 100%; text-align: center; }
          .mayor-card { width: 85%; }
          .section { padding: 56px 20px; }
          .notice { margin: 32px 16px; }
        }
      `}</style>

      <div className="home-root">

        {/* ── Hero ──────────────────────────────────────── */}
        {/* <div className="hero">
          <div className="hero-marathi-top">वसई विरार शहर महानगरपालिका</div>

          
          <LottiePlayer
            src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
            style={{ position:"absolute", left:40, bottom:60, width:140, height:140, opacity:0.5, pointerEvents:"none", zIndex:2 }}
          />
          <LottiePlayer
            src="https://assets9.lottiefiles.com/packages/lf20_touohxv0.json"
            style={{ position:"absolute", right:40, top:80, width:120, height:120, opacity:0.45, pointerEvents:"none", zIndex:2 }}
          />

          <div className="hero-content">
            <h1 className="hero-jansanwad">जन संवाद</h1>
            <p className="hero-desc">
              नागरिकांना त्यांच्या समस्या व सूचना मा. महापौर श्री. अजिव पाटील यांच्यापर्यंत थेट पोहोचवण्यासाठी तयार केलेले संवाद व्यासपीठ
            </p>
            <div className="hero-btns">
              {citizen ? (
                <>
                  <button className="hero-btn-primary" onClick={() => navigate("/book-appointment")}>📅 Book Appointment</button>
                  <button className="hero-btn-outline" onClick={() => navigate("/my-appointments")}>📋 My Appointments</button>
                </>
              ) : (
                <>
                  <button className="hero-btn-primary" onClick={() => navigate("/register")}>🚀 Get Started — Register</button>
                  <button className="hero-btn-outline" onClick={() => navigate("/login")}>Login करा</button>
                </>
              )}
            </div>
          </div>
        </div> */}





            <div className="hero">
        {/* <div className="hero-badge">
          <div className="hero-dot" />
          Online Appointment Portal — VVCMC
        </div> */}

        {/* जन संवाद — big white bold */}
        <h1 className="hero-jansanwad">जन संवाद</h1>

        {/* Description replacing old marathi sub text */}
        <p className="hero-desc">
          नागरिकांना त्यांच्या समस्या व सूचना मा. महापौर श्री. अजिव पाटील यांच्यापर्यंत थेट पोहोचवण्यासाठी तयार केलेले संवाद व्यासपीठ
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

        {/* ── Mayor Section ─────────────────────────────── */}
        <div className="mayor-section">
          <div className="mayor-left">
            <LottiePlayer
              src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
              style={{ position:"absolute", bottom:24, right:60, width:90, height:90, opacity:0.3, pointerEvents:"none" }}
            />
            <div className="mayor-tag">✦ Our Leadership</div>
            <div className="mayor-date">३ फेब्रुवारी २०२६ पासून कार्यरत</div>
            <h2 className="mayor-heading">
              मा. महापौर<br />
              <span>श्री. अजीव पाटील</span>
            </h2>
            <div className="mayor-org">वसई-विरार शहर महानगरपालिका</div>
            <div className="mayor-divider" />
            <p className="mayor-bio">
              ३ फेब्रुवारी २०२६ रोजी महापौरपदाची सूत्रे स्वीकारल्यापासून मा. महापौर श्री. अजीव पाटील यांनी नागरिकांशी थेट संवाद साधण्यासाठी हे जन संवाद व्यासपीठ उभारले आहे. नागरिकांच्या समस्या, सूचना आणि तक्रारी थेट महापौरांपर्यंत पोहोचाव्यात यासाठी हे पारदर्शक, सोपे आणि जलद ऑनलाइन माध्यम तयार केले आहे.
            </p>
            <div className="mayor-btns">
              <button className="mayor-btn-primary" onClick={() => navigate(citizen ? "/book-appointment" : "/register")}>
                📅 Appointment बुक करा
              </button>
            </div>
          </div>
          <div className="mayor-right">
            <div className="mayor-right-decor1" />
            <div className="mayor-right-decor2" />
            <div className="mayor-right-decor3" />
            <div className="mayor-right-stripe" />
            <div className="mayor-card">
              <img src={mayorPhoto} alt="मा. महापौर श्री. अजीव पाटील" />
              <div className="mayor-card-badge">
                <div className="mayor-card-name">मा. महापौर श्री. अजीव पाटील</div>
                <div className="mayor-card-title">वसई-विरार शहर महानगरपालिका</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── How it Works ──────────────────────────────── */}
        <div className="section">
          <div className="section-header">
            <div className="section-tag">✦ Process</div>
            <h2 className="section-title">कसे काम करते?</h2>
            <p className="section-sub">फक्त 4 सोप्या steps मध्ये Mayor ची भेट बुक करा</p>
          </div>
          <div className="steps-grid">
            {steps.map((s,i) => (
              <div key={i} className="step-card">
                <div className="step-num">{i+1}</div>
                <LottiePlayer src={s.lottie} style={{ width:88, height:88, margin:"0 auto 16px" }} />
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>


 {/* ══ PROJECTS CAROUSEL ══ */}
        <div className="projects-section">
          <div className="projects-inner">
            <div className="section-header">
              <div className="section-tag">✦ सध्या सुरू</div>
              <h2 className="section-title">चालू प्रकल्प</h2>
              <p className="section-sub">वसई-विरार महानगरपालिकेचे सध्या प्रगतीत असलेले महत्त्वाचे प्रकल्प</p>
            </div>

            {/* Big Card */}
            {/* <div
              className="proj-card"
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
            > */}
            <div
  className="proj-card"
  onMouseEnter={() => setAutoPlay(false)}
  onMouseLeave={() => setAutoPlay(true)}
  style={p.bgimg ? {
    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.92) 55%, ${p.accent}99 100%), url(${p.bgimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  } : {}}
> 
              {/* Left */}
              <div className="proj-left" 
  style={{
    background: 'transparent',
    border: p.bgimg ? 'none' : '1px solid rgba(81,171,172,0.12)',  // ← bgimg असेल तर border काढा
    borderRight: 'none'
  }}>
                <div className="proj-tag" style={{ background:`${p.accent}18`, color:p.accent }}>
                  {p.icon} {p.tag}
                </div>
                <div className="proj-title">{p.title}</div>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-progress-row">
                  <span className="proj-progress-lbl">प्रगती</span>
                  <span className="proj-progress-pct" style={{ color:p.accent }}>{p.progress}%</span>
                </div>
                <div className="proj-bar">
                  <div className="proj-bar-fill" style={{ width:`${p.progress}%`, background:`linear-gradient(90deg,${p.accent}88,${p.accent})` }} />
                </div>
                <div className="proj-meta">
                  <div className="proj-meta-item">💰 <strong>{p.budget}</strong></div>
                  <div className="proj-meta-item">📅 <strong>{p.deadline}</strong></div>
                  <span className={`proj-chip ${p.status==="ongoing"?"chip-ongoing":"chip-planning"}`}>{p.statusLabel}</span>
                </div>
              </div>

              {/* Right colored panel */}
              <div className="proj-right" style={{ background:`linear-gradient(160deg,${p.accent},${p.accent}bb)` }}>
                <div className="proj-icon">{p.icon}</div>
                <div>
                  <div className="proj-stat-num">{p.stat}</div>
                  <div className="proj-stat-lbl">{p.statLbl}</div>
                </div>
              </div>
            </div>

            {/* Nav */}
            <div className="proj-nav">
              <button className="proj-btn" onClick={() => { setAutoPlay(false); setProjIdx(i => (i-1+projects.length)%projects.length); }}>‹</button>
              <div className="proj-dots">
                {projects.map((_,i) => (
                  <button key={i} className={`proj-dot${projIdx===i?" active":""}`} onClick={() => { setAutoPlay(false); setProjIdx(i); }} />
                ))}
              </div>
              <span className="proj-counter">{projIdx+1} / {projects.length}</span>
              <button className="proj-btn" onClick={() => { setAutoPlay(false); setProjIdx(i => (i+1)%projects.length); }}>›</button>
            </div>
          </div>
        </div>
         
      
        {/* ── FAQ ───────────────────────────────────────── */}
        <div className="faq-section">
          <LottiePlayer
            src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
            style={{ position:"absolute", left:30, top:"50%", transform:"translateY(-50%)", width:120, height:120, opacity:0.18, pointerEvents:"none" }}
          />
          <LottiePlayer
            src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
            style={{ position:"absolute", right:30, top:"50%", transform:"translateY(-50%)", width:120, height:120, opacity:0.18, pointerEvents:"none" }}
          />
          <div className="faq-inner">
            <div className="faq-label">FAQ</div>
            <h2 className="faq-title">वारंवार विचारले जाणारे प्रश्न</h2>
            <div className="faq-list">
              {faqs.map((f, i) => (
                <div key={i} className={`faq-item${faqOpen === i ? " faq-active" : ""}`}>
                  <button className="faq-q" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                    <span className="faq-q-text">{f.q}</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-answer">
                    <p className="faq-a-text">{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Notice ────────────────────────────────────── */}
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

        {/* ── CTA ───────────────────────────────────────── */}
        <div className="cta">
          <LottiePlayer
            src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
            style={{ position:"absolute", left:60, top:"50%", transform:"translateY(-50%)", width:150, height:150, opacity:0.1, pointerEvents:"none" }}
          />
          <LottiePlayer
            src="https://assets9.lottiefiles.com/packages/lf20_touohxv0.json"
            style={{ position:"absolute", right:60, top:"50%", transform:"translateY(-50%)", width:150, height:150, opacity:0.1, pointerEvents:"none" }}
          />
          {/* <div className="cta-inner">
            <div className="cta-title">आजच Appointment बुक करा</div>
            <div className="cta-sub">Mayor साहेबांची वेळ मर्यादित आहे — लवकर बुक करा</div>
            <button className="cta-btn" onClick={() => navigate(citizen ? "/book-appointment" : "/register")}>
              {citizen ? "📅 Book Now" : "🚀 Register & Book"}
            </button>
          </div> */}
        </div>

      </div>
    </>
  );
}

// ===================================================


// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import heroBg from "../assets/vvcmcbuildingbanner.png";
// import mayorPhoto from "../assets/ajivsir1.jpeg";

// /* ── Lottie loader ─────────────────────────────────────── */
// function LottiePlayer({ src, style, loop = true }) {
//   const ref = useRef(null);
//   useEffect(() => {
//     let anim;
//     const init = () => {
//       if (window.lottie && ref.current) {
//         ref.current.innerHTML = "";
//         anim = window.lottie.loadAnimation({
//           container: ref.current,
//           renderer: "svg",
//           loop,
//           autoplay: true,
//           path: src,
//         });
//       }
//     };
//     if (!window.lottie) {
//       const s = document.createElement("script");
//       s.src = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js";
//       s.onload = init;
//       document.head.appendChild(s);
//     } else {
//       init();
//     }
//     return () => anim && anim.destroy();
//   }, [src, loop]);
//   return <div ref={ref} style={style} />;
// }

// export default function Home() {
//   const navigate = useNavigate();
//   const citizen = (() => {
//     try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
//   })();
//   const [faqOpen, setFaqOpen] = useState(null);
//   const [projIdx, setProjIdx] = useState(0);

//   const projects = [
//     { icon:"🛣️", tag:"पायाभूत सुविधा", title:"विरार-नालासोपारा रस्ते रुंदीकरण प्रकल्प", desc:"विरार पश्चिम ते नालासोपारा पूर्व दरम्यान मुख्य रस्त्यांचे रुंदीकरण व डांबरीकरण. वाहतूक कोंडी कमी करणे आणि नागरिकांना सुलभ प्रवास उपलब्ध करणे हे उद्दिष्ट.", progress:68, status:"ongoing", statusLabel:"सुरू आहे", budget:"₹ 42 कोटी", deadline:"डिसेंबर 2025", stat:"12 km", statLbl:"रस्ता रुंदीकरण", color:"#51ABAC" },
//     { icon:"💧", tag:"पाणीपुरवठा", title:"24×7 पाणीपुरवठा योजना — वसई विभाग", desc:"वसई विभागातील नागरिकांना 24 तास शुद्ध पाणी उपलब्ध करण्यासाठी नवीन जलवाहिन्या टाकणे, जुन्या पाइपलाइनचे नूतनीकरण आणि नवीन पाण्याच्या टाक्या बांधणे.", progress:45, status:"ongoing", statusLabel:"सुरू आहे", budget:"₹ 85 कोटी", deadline:"मार्च 2026", stat:"1.2 लाख", statLbl:"लाभार्थी कुटुंबे", color:"#4CABBF" },
//     { icon:"🏫", tag:"शिक्षण", title:"VVCMC शाळा डिजिटलायझेशन उपक्रम", desc:"महानगरपालिकेच्या सर्व शाळांमध्ये स्मार्ट बोर्ड, संगणक लॅब आणि इंटरनेट सुविधा उपलब्ध करणे. विद्यार्थ्यांना डिजिटल शिक्षण देण्यासाठी हा उपक्रम राबवला जात आहे.", progress:30, status:"planning", statusLabel:"नियोजन", budget:"₹ 18 कोटी", deadline:"जून 2026", stat:"94", statLbl:"शाळा डिजिटल", color:"#028945" },
//     { icon:"🌳", tag:"पर्यावरण", title:"हरित वसई-विरार — वृक्षारोपण मोहीम", desc:"महानगरपालिका क्षेत्रात 5 लाख झाडे लावण्याचा संकल्प. उद्याने विकसित करणे, रस्त्यांच्या दुतर्फा झाडे लावणे आणि पर्यावरण संतुलन राखणे हे या प्रकल्पाचे उद्दिष्ट.", progress:55, status:"ongoing", statusLabel:"सुरू आहे", budget:"₹ 8 कोटी", deadline:"ऑगस्ट 2025", stat:"5 लाख", statLbl:"झाडे लावणार", color:"#028945" },
//   ];

//   const faqs = [
//     { q: "Appointment बुक करण्यासाठी काय करावे लागेल?", a: "प्रथम Register करा, त्यानंतर उपलब्ध date आणि time slot निवडा, आवश्यक माहिती भरा आणि Submit करा. Admin approval नंतर तुम्हाला Confirmation Token मिळेल." },
//     { q: "Appointment confirm होण्यासाठी किती वेळ लागतो?", a: "Appointment submit केल्यानंतर Admin द्वारे review केले जाते. साधारणतः 1-2 कार्यालयीन दिवसांत confirmation दिली जाते. SMS आणि Portal वर status दिसेल." },
//     { q: "भेटीच्या दिवशी काय घेऊन यावे?", a: "भेटीच्या दिवशी तुमचा Confirmation Token आणि एक valid ओळखपत्र (Aadhar Card, Voter ID इ.) सोबत आणावे. Token शिवाय भेट होणार नाही." },
//     { q: "Appointment Cancel किंवा Reschedule करता येते का?", a: "होय, तुम्ही 'My Appointments' section मध्ये जाऊन Appointment cancel किंवा reschedule करू शकता. भेटीच्या 24 तास आधी बदल करणे आवश्यक आहे." },
//     { q: "एका दिवशी किती नागरिक भेट घेऊ शकतात?", a: "Mayor साहेबांच्या schedule नुसार प्रत्येक दिवशी मर्यादित slots उपलब्ध असतात. Slots संपल्यावर त्या दिवसाचे booking बंद होते, त्यामुळे लवकर बुक करा." },
//   ];

//   const steps = [
//     { lottie: "https://assets3.lottiefiles.com/packages/lf20_jbb3xnwi.json", title: "Register करा",  desc: "Mobile number वापरून account तयार करा — फक्त 1 मिनिट" },
//     { lottie: "https://assets4.lottiefiles.com/packages/lf20_tljjahng.json", title: "Date निवडा",    desc: "Mayor च्या available dates आणि time slots मधून निवडा" },
//     { lottie: "https://assets9.lottiefiles.com/packages/lf20_xyadoh9h.json", title: "Details भरा",   desc: "भेटीचे कारण, visitors संख्या आणि photo द्या" },
//     { lottie: "https://assets10.lottiefiles.com/packages/lf20_attdh2fv.json", title: "Token मिळवा",  desc: "Confirmation token आणि QR code मिळेल — भेटीच्या दिवशी दाखवा" },
//   ];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

//         :root {
//           --gold:   #F5E6BF;
//           --green:  #028945;
//           --teal:   #51ABAC;
//           --blue:   #4CABBF;
//           --dark:   #1a1a1a;
//         }

//         * { box-sizing: border-box; margin: 0; padding: 0; }
//         .home-root { min-height: calc(100vh - 64px); background: #f8fffe; font-family: 'DM Sans', sans-serif; }

//         /* ══ HERO ══ */
//         .hero {
//           position: relative;
//           min-height: calc(100vh - 64px);
//           display: flex; flex-direction: column;
//           align-items: center; justify-content: center;
//           text-align: center;
//           padding: 80px 32px 72px;
//           overflow: hidden;
//         }
//         .hero::before {
//           content: '';
//           position: absolute; inset: 0;
//           background-image: url(${heroBg});
//           background-size: cover; background-position: center top;
//           z-index: 0;
//           animation: slowZoom 20s ease-in-out infinite alternate;
//         }
//         @keyframes slowZoom {
//           from { transform: scale(1); }
//           to   { transform: scale(1.05); }
//         }
//         .hero::after {
//           content: '';
//           position: absolute; inset: 0;
//           background:
//             radial-gradient(ellipse at 30% 20%, rgba(245,230,191,0.15) 0%, transparent 50%),
//             radial-gradient(ellipse at 70% 80%, rgba(81,171,172,0.12) 0%, transparent 50%),
//             linear-gradient(180deg, rgba(2,137,69,0.25) 0%, rgba(76,171,191,0.3) 50%, rgba(2,137,69,0.45) 100%);
//           z-index: 1;
//         }
//         .hero > * { position: relative; z-index: 2; }

//         .hero-marathi-top {
//           position: absolute; top: 20px; left: 50%;
//           transform: translateX(-50%);
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(13px, 1.8vw, 18px);
//           font-weight: 700; color: #B0969E;
//           white-space: nowrap; letter-spacing: 1px;
//           text-shadow: 0 2px 8px rgba(0,0,0,0.6), 0 0 30px rgba(176,150,158,0.5);
//           z-index: 3;
//           animation: glow 3s ease-in-out infinite alternate;
//         }
//         @keyframes glow {
//           from { text-shadow: 0 2px 8px rgba(0,0,0,0.6), 0 0 30px rgba(176,150,158,0.5); }
//           to   { text-shadow: 0 2px 12px rgba(0,0,0,0.7), 0 0 50px rgba(176,150,158,0.8), 0 0 70px rgba(245,230,191,0.4); }
//         }

//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50%       { transform: translateY(-20px); }
//         }

//         .hero-content { max-width: 780px; width: 100%; text-align: center; animation: fadeUp 0.9s ease both; }
//         @keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }

//         .hero-jansanwad {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(60px, 10vw, 112px);
//           font-weight: 800;
//           background: linear-gradient(135deg, #028945 0%, #51ABAC 50%, #028945 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           background-size: 200% auto;
//           line-height: 1.05; margin-bottom: 20px;
//           letter-spacing: 2px;
//           animation: fadeUp 0.9s ease 0.1s both, shimmer 4s ease-in-out infinite;
//           filter: drop-shadow(0 4px 12px rgba(2,137,69,0.4)) drop-shadow(0 0 40px rgba(81,171,172,0.3));
//         }
//         @keyframes shimmer {
//           0%   { background-position: 0% center; }
//           50%  { background-position: 100% center; }
//           100% { background-position: 0% center; }
//         }

//         .hero-desc {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(15px, 2.2vw, 21px); font-weight: 700;
//           color: #F5E6BF;
//           max-width: 640px; margin: 0 auto 36px;
//           line-height: 1.75;
//           text-shadow: 0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(2,137,69,0.4);
//           animation: fadeUp 0.9s ease 0.2s both, textPulse 3s ease-in-out infinite;
//         }
//         @keyframes textPulse {
//           0%,100% { text-shadow: 0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(2,137,69,0.4); }
//           50%     { text-shadow: 0 2px 12px rgba(0,0,0,0.9), 0 0 30px rgba(81,171,172,0.5), 0 0 40px rgba(245,230,191,0.3); }
//         }

//         .hero-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; animation: fadeUp 0.9s ease 0.35s both; }
//         .hero-btn-primary {
//           padding: 14px 36px; border-radius: 12px;
//           border: 2px solid rgba(255,255,255,0.9);
//           background: rgba(255,255,255,0.15); backdrop-filter: blur(10px);
//           color: #fff; font-weight: 700; font-size: 15px; cursor: pointer;
//           transition: all .2s; box-shadow: 0 4px 20px rgba(0,0,0,0.15);
//         }
//         .hero-btn-primary:hover { background: rgba(255,255,255,0.28); transform: translateY(-2px); }
//         .hero-btn-outline {
//           padding: 14px 36px; border-radius: 12px;
//           border: 2px solid rgba(255,255,255,0.6);
//           background: rgba(255,255,255,0.08); backdrop-filter: blur(6px);
//           color: #fff; font-weight: 700; font-size: 15px; cursor: pointer; transition: all .2s;
//         }
//         .hero-btn-outline:hover { background: rgba(255,255,255,0.2); transform: translateY(-2px); }

//         /* ══ MAYOR ══ */
//         .mayor-section { width: 100%; display: flex; align-items: stretch; min-height: 540px; }
//         .mayor-left {
//           flex: 1; background: var(--gold); padding: 72px 56px;
//           display: flex; flex-direction: column; justify-content: center;
//           position: relative; overflow: hidden;
//         }
//         .mayor-left::before {
//           content: ''; position: absolute; top: -60px; left: -60px;
//           width: 220px; height: 220px; border-radius: 50%;
//           border: 2px solid rgba(208,154,80,0.3);
//         }
//         .mayor-left::after {
//           content: ''; position: absolute; bottom: -40px; right: 40px;
//           width: 130px; height: 130px; border-radius: 50%;
//           border: 2px solid rgba(208,154,80,0.22);
//         }
//         .mayor-tag {
//           display: inline-flex; align-items: center; gap: 6px;
//           background: rgba(208,154,80,0.2); color: #b8860b;
//           font-size: 12px; font-weight: 700; padding: 5px 14px;
//           border-radius: 999px; margin-bottom: 14px; letter-spacing: 0.5px;
//           text-transform: uppercase; width: fit-content;
//         }
//         .mayor-date { font-size: 13px; color: #a16207; font-weight: 600; margin-bottom: 10px; }
//         .mayor-heading {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(28px, 3.8vw, 48px); font-weight: 800;
//           color: #1a1a1a; line-height: 1.2; margin-bottom: 6px;
//         }
//         .mayor-heading span { color: var(--green); position: relative; }
//         .mayor-heading span::after {
//           content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
//           height: 3px; background: linear-gradient(90deg,#D09A50,var(--green)); border-radius: 2px;
//         }
//         .mayor-org { font-family: 'Tiro Devanagari Marathi', serif; font-size: 15px; color: var(--teal); font-weight: 600; margin-bottom: 20px; }
//         .mayor-divider { width: 56px; height: 4px; background: linear-gradient(90deg,#D09A50,var(--green)); border-radius: 2px; margin-bottom: 22px; }
//         .mayor-bio { font-family: 'Tiro Devanagari Marathi', serif; font-size: 15px; color: #4b5563; line-height: 1.9; margin-bottom: 36px; max-width: 520px; }
//         .mayor-btns { display: flex; gap: 14px; flex-wrap: wrap; }
//         .mayor-btn-primary {
//           padding: 14px 32px; border-radius: 12px; border: none;
//           background: var(--green); color: #fff; font-weight: 700; font-size: 14px;
//           cursor: pointer; transition: all .2s; box-shadow: 0 4px 16px rgba(2,137,69,0.3);
//         }
//         .mayor-btn-primary:hover { background: #016d38; transform: translateY(-2px); }

//         .mayor-right {
//           width: 42%; flex-shrink: 0; background: var(--teal);
//           position: relative; overflow: hidden;
//           display: flex; align-items: flex-end; justify-content: center;
//         }
//         .mayor-right-decor1 { position: absolute; top: 20px; right: 20px; width: 90px; height: 90px; border-radius: 50%; background: rgba(255,255,255,0.08); }
//         .mayor-right-decor2 { position: absolute; bottom: 30px; right: 30px; width: 60px; height: 60px; border-radius: 50%; border: 3px solid rgba(255,255,255,0.15); }
//         .mayor-right-decor3 { position: absolute; top: 40px; left: 30px; width: 40px; height: 40px; border-radius: 50%; background: rgba(245,230,191,0.15); }
//         .mayor-right-stripe {
//           position: absolute; top: 0; bottom: 0; right: 0; width: 55%;
//           background: repeating-linear-gradient(-45deg,rgba(255,255,255,0.04) 0px,rgba(255,255,255,0.04) 2px,transparent 2px,transparent 12px);
//         }
//         .mayor-card { position: relative; z-index: 2; width: 85%; max-width: 300px; margin-bottom: 0; }
//         .mayor-card img { width: 100%; display: block; object-fit: cover; object-position: top; height: 460px; border-radius: 20px 20px 0 0; box-shadow: 0 -8px 40px rgba(0,0,0,0.2); }
//         .mayor-card-badge { padding: 16px 20px; background: #fff; border-radius: 0 0 16px 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.12); }
//         .mayor-card-name { font-family: 'Tiro Devanagari Marathi', serif; font-size: 15px; font-weight: 800; color: #1a1a1a; }
//         .mayor-card-title { font-size: 11px; color: var(--teal); font-weight: 600; margin-top: 3px; text-transform: uppercase; letter-spacing: 0.4px; }

//         /* ══ HOW IT WORKS ══ */
//         .section { padding: 80px 32px; max-width: 1100px; margin: 0 auto; }
//         .section-header { text-align: center; margin-bottom: 56px; }
//         .section-tag { display: inline-block; background: rgba(76,171,191,0.12); color: var(--blue); font-size: 12px; font-weight: 700; padding: 5px 16px; border-radius: 999px; margin-bottom: 14px; letter-spacing: 0.6px; text-transform: uppercase; }
//         .section-title { font-family: 'Crimson Pro', serif; font-size: clamp(28px,4vw,40px); font-weight: 800; color: #1a4a2e; margin-bottom: 8px; }
//         .section-sub { color: #6b7280; font-size: 15px; }
//         .steps-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); gap: 28px; }
//         .step-card {
//           background: #fff; border-radius: 20px; padding: 32px 24px; text-align: center;
//           border: 1px solid rgba(76,171,191,0.15); box-shadow: 0 4px 20px rgba(0,0,0,0.05);
//           transition: transform .25s, box-shadow .25s; position: relative; overflow: hidden;
//         }
//         .step-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, var(--teal), var(--green)); }
//         .step-card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(76,171,191,0.2); }
//         .step-num { position: absolute; top: 16px; right: 16px; width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(135deg, var(--teal), var(--green)); color: #fff; font-size: 12px; font-weight: 800; display: flex; align-items: center; justify-content: center; }
//         .step-title { font-weight: 700; color: #1a4a2e; font-size: 15px; margin-bottom: 8px; }
//         .step-desc { font-size: 13px; color: #6b7280; line-height: 1.6; }

//         /* ══ PROJECTS CAROUSEL ══ */
//         .projects-section { padding: 72px 32px; background: #f0fdf8; }
//         .projects-inner { max-width: 1100px; margin: 0 auto; }
//         .carousel-wrap { margin-top: 48px; }
//         .carousel-track-outer { border-radius: 24px; overflow: hidden; box-shadow: 0 8px 40px rgba(0,0,0,0.08); }

//         .project-card {
//           display: flex; background: #fff; min-height: 280px;
//           border: 1px solid rgba(81,171,172,0.15);
//         }
//         .project-card-left {
//           flex: 1; padding: 40px 44px;
//           display: flex; flex-direction: column; justify-content: center;
//         }
//         .project-card-right {
//           width: 240px; flex-shrink: 0;
//           display: flex; flex-direction: column;
//           align-items: center; justify-content: center;
//           padding: 32px 24px; gap: 20px;
//         }
//         .project-icon-big { font-size: 56px; }
//         .project-stat { text-align: center; }
//         .project-stat-num { font-family: 'Crimson Pro', serif; font-size: 40px; font-weight: 800; color: #fff; line-height: 1; }
//         .project-stat-lbl { font-size: 11px; color: rgba(255,255,255,0.78); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 4px; }

//         .project-tag { display: inline-flex; align-items: center; gap: 6px; background: rgba(2,137,69,0.1); color: var(--green); font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 999px; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px; width: fit-content; }
//         .project-title { font-family: 'Tiro Devanagari Marathi', serif; font-size: clamp(18px,2.5vw,26px); font-weight: 800; color: #1a1a1a; margin-bottom: 12px; line-height: 1.3; }
//         .project-desc { font-family: 'Tiro Devanagari Marathi', serif; font-size: 14px; color: #4b5563; line-height: 1.85; margin-bottom: 24px; max-width: 540px; }

//         .project-progress-label { display: flex; justify-content: space-between; margin-bottom: 6px; }
//         .project-progress-text { font-size: 12px; font-weight: 600; color: #6b7280; }
//         .project-progress-pct { font-size: 14px; font-weight: 800; color: var(--green); }
//         .project-progress-bar { height: 10px; background: #e5f7ef; border-radius: 999px; overflow: hidden; margin-bottom: 20px; }
//         .project-progress-fill { height: 100%; border-radius: 999px; background: linear-gradient(90deg, var(--teal), var(--green)); transition: width 0.6s ease; }

//         .project-meta { display: flex; gap: 20px; flex-wrap: wrap; align-items: center; }
//         .project-meta-item { display: flex; align-items: center; gap: 6px; font-size: 13px; color: #6b7280; }
//         .project-meta-icon { font-size: 14px; }
//         .project-status-chip { font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.4px; }
//         .status-ongoing  { background: rgba(2,137,69,0.1);   color: #028945; }
//         .status-planning { background: rgba(76,171,191,0.12); color: #4CABBF; }
//         .status-review   { background: rgba(245,158,11,0.12); color: #d97706; }

//         /* Carousel nav */
//         .carousel-nav { display: flex; align-items: center; justify-content: center; gap: 16px; margin-top: 24px; }
//         .carousel-btn { width: 42px; height: 42px; border-radius: 50%; border: 1.5px solid rgba(81,171,172,0.4); background: #fff; color: var(--teal); font-size: 20px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all .2s; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
//         .carousel-btn:hover { background: var(--teal); color: #fff; border-color: var(--teal); transform: scale(1.08); }
//         .carousel-dots { display: flex; gap: 6px; }
//         .carousel-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(81,171,172,0.3); border: none; cursor: pointer; transition: all .25s; padding: 0; }
//         .carousel-dot.active { background: var(--teal); width: 24px; border-radius: 4px; }

//         @media(max-width:700px){
//           .project-card { flex-direction: column; }
//           .project-card-right { width: 100%; flex-direction: row; justify-content: space-around; padding: 20px; min-height: unset; }
//           .project-card-left { padding: 24px 20px; }
//         }

//         @media(max-width:900px){ .project-card { min-width: calc(50% - 12px); } }
//         @media(max-width:600px){ .project-card { min-width: 100%; } }

//         /* ══ FAQ ══ */
//         .faq-section { width: 100%; background: var(--teal); padding: 80px 24px; position: relative; overflow: hidden; }
//         .faq-section::before { content: ''; position: absolute; top: -80px; left: 50%; transform: translateX(-50%); width: 700px; height: 500px; background: radial-gradient(ellipse,rgba(255,255,255,0.12) 0%,transparent 70%); pointer-events: none; }
//         .faq-inner { max-width: 720px; margin: 0 auto; position: relative; z-index: 1; }
//         .faq-label { text-align: center; font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.75); letter-spacing: 1.2px; text-transform: uppercase; margin-bottom: 14px; }
//         .faq-title { font-family: 'Crimson Pro', serif; font-size: clamp(26px,4vw,42px); font-weight: 800; color: #fff; text-align: center; line-height: 1.25; margin-bottom: 48px; }
//         .faq-list { display: flex; flex-direction: column; gap: 12px; }
//         .faq-item { background: rgba(255,255,255,0.1); border: 1.5px solid rgba(255,255,255,0.22); border-radius: 16px; overflow: hidden; transition: all 0.25s; }
//         .faq-item.faq-active { background: rgba(255,255,255,0.18); border-color: rgba(255,255,255,0.5); }
//         .faq-q { width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 20px 24px; background: none; border: none; cursor: pointer; text-align: left; gap: 16px; }
//         .faq-q-text { font-family: 'Tiro Devanagari Marathi', serif; font-size: 16px; font-weight: 600; color: #fff; line-height: 1.5; flex: 1; }
//         .faq-icon { flex-shrink: 0; width: 32px; height: 32px; border-radius: 50%; border: 1.5px solid rgba(255,255,255,0.55); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; font-weight: 300; transition: transform 0.3s, background 0.3s; }
//         .faq-item.faq-active .faq-icon { background: #fff; color: var(--teal); transform: rotate(45deg); }
//         .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.3s; padding: 0 24px; }
//         .faq-item.faq-active .faq-answer { max-height: 300px; padding: 0 24px 20px; }
//         .faq-a-text { font-family: 'Tiro Devanagari Marathi', serif; font-size: 14px; color: rgba(255,255,255,0.88); line-height: 1.85; border-top: 1px solid rgba(255,255,255,0.18); padding-top: 16px; }

//         /* ══ NOTICE ══ */
//         .notice { background: linear-gradient(135deg,#fef9c3,#fef3c7); border: 1px solid #fde68a; border-radius: 16px; padding: 24px 28px; margin: 40px auto; display: flex; gap: 16px; align-items: flex-start; max-width: 1036px; }
//         .notice-icon { font-size: 28px; flex-shrink: 0; }
//         .notice-title { font-weight: 700; color: #92400e; font-size: 15px; margin-bottom: 6px; }
//         .notice-text { font-size: 13px; color: #a16207; line-height: 1.6; }

//         /* ══ CTA ══ */
//         .cta { background: linear-gradient(135deg, var(--green) 0%, #014d28 100%); color: #fff; padding: 72px 32px; text-align: center; position: relative; overflow: hidden; }
//         .cta::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 50% 0%, rgba(76,171,191,0.25) 0%, transparent 65%); pointer-events: none; }
//         .cta-inner { position: relative; z-index: 1; }
//         .cta-title { font-family: 'Crimson Pro', serif; font-size: clamp(28px,4vw,40px); font-weight: 800; margin-bottom: 12px; }
//         .cta-sub { color: rgba(255,255,255,0.8); font-size: 16px; margin-bottom: 36px; }
//         .cta-btn { padding: 15px 48px; border-radius: 14px; border: none; background: #fff; color: var(--green); font-weight: 800; font-size: 16px; cursor: pointer; box-shadow: 0 8px 28px rgba(0,0,0,0.18); transition: all .2s; }
//         .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 36px rgba(0,0,0,0.25); }

//         /* ══ RESPONSIVE ══ */
//         @media(max-width:900px){
//           .mayor-section { flex-direction: column; }
//           .mayor-left { padding: 48px 24px; }
//           .mayor-right { width: 100%; min-height: 400px; padding-top: 40px; }
//           .mayor-card { width: 70%; max-width: 260px; }
//           .mayor-card img { height: 360px; }
//         }
//         @media(max-width:600px){
//           .hero { padding: 60px 20px 60px; }
//           .hero-btns { flex-direction: column; align-items: center; }
//           .hero-btn-primary, .hero-btn-outline { width: 100%; max-width: 280px; }
//           .mayor-btns { flex-direction: column; }
//           .mayor-btn-primary { width: 100%; text-align: center; }
//           .mayor-card { width: 85%; }
//           .section { padding: 56px 20px; }
//           .notice { margin: 32px 16px; }
//         }
//       `}</style>

//       <div className="home-root">

//         {/* Hero */}
//         <div className="hero">
//           <div className="hero-marathi-top">वसई विरार शहर महानगरपालिका</div>
//           <LottiePlayer
//             src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
//             style={{ position:"absolute", left:40, bottom:60, width:140, height:140, opacity:0.5, pointerEvents:"none", zIndex:2, animation:"float 6s ease-in-out infinite" }}
//           />
//           <LottiePlayer
//             src="https://assets9.lottiefiles.com/packages/lf20_touohxv0.json"
//             style={{ position:"absolute", right:40, top:80, width:120, height:120, opacity:0.45, pointerEvents:"none", zIndex:2, animation:"float 7s ease-in-out infinite reverse" }}
//           />
//           <div className="hero-content">
//             <h1 className="hero-jansanwad">जन संवाद</h1>
//             <p className="hero-desc">
//               नागरिकांना त्यांच्या समस्या व सूचना मा. महापौर श्री. अजिव पाटील यांच्यापर्यंत थेट पोहोचवण्यासाठी तयार केलेले संवाद व्यासपीठ
//             </p>
//             <div className="hero-btns">
//               {citizen ? (
//                 <>
//                   <button className="hero-btn-primary" onClick={() => navigate("/book-appointment")}>📅 Book Appointment</button>
//                   <button className="hero-btn-outline" onClick={() => navigate("/my-appointments")}>📋 My Appointments</button>
//                 </>
//               ) : (
//                 <>
//                   <button className="hero-btn-primary" onClick={() => navigate("/register")}>🚀 Get Started — Register</button>
//                   <button className="hero-btn-outline" onClick={() => navigate("/login")}>Login करा</button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Mayor Section */}
//         <div className="mayor-section">
//           <div className="mayor-left">
//             <LottiePlayer
//               src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
//               style={{ position:"absolute", bottom:24, right:60, width:90, height:90, opacity:0.3, pointerEvents:"none" }}
//             />
//             <div className="mayor-tag">✦ Our Leadership</div>
//             <div className="mayor-date">३ फेब्रुवारी २०२६ पासून कार्यरत</div>
//             <h2 className="mayor-heading">
//               मा. महापौर<br />
//               <span>श्री. अजीव पाटील</span>
//             </h2>
//             <div className="mayor-org">वसई-विरार शहर महानगरपालिका</div>
//             <div className="mayor-divider" />
//             <p className="mayor-bio">
//               ३ फेब्रुवारी २०२६ रोजी महापौरपदाची सूत्रे स्वीकारल्यापासून मा. महापौर श्री. अजीव पाटील यांनी नागरिकांशी थेट संवाद साधण्यासाठी हे जन संवाद व्यासपीठ उभारले आहे. नागरिकांच्या समस्या, सूचना आणि तक्रारी थेट महापौरांपर्यंत पोहोचाव्यात यासाठी हे पारदर्शक, सोपे आणि जलद ऑनलाइन माध्यम तयार केले आहे.
//             </p>
//             <div className="mayor-btns">
//               <button className="mayor-btn-primary" onClick={() => navigate(citizen ? "/book-appointment" : "/register")}>
//                 📅 Appointment बुक करा
//               </button>
//             </div>
//           </div>
//           <div className="mayor-right">
//             <div className="mayor-right-decor1" />
//             <div className="mayor-right-decor2" />
//             <div className="mayor-right-decor3" />
//             <div className="mayor-right-stripe" />
//             <div className="mayor-card">
//               <img src={mayorPhoto} alt="मा. महापौर श्री. अजीव पाटील" />
//               <div className="mayor-card-badge">
//                 <div className="mayor-card-name">मा. महापौर श्री. अजीव पाटील</div>
//                 <div className="mayor-card-title">वसई-विरार शहर महानगरपालिका</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* How it Works */}
//         <div className="section">
//           <div className="section-header">
//             <div className="section-tag">✦ Process</div>
//             <h2 className="section-title">कसे काम करते?</h2>
//             <p className="section-sub">फक्त 4 सोप्या steps मध्ये Mayor ची भेट बुक करा</p>
//           </div>
//           <div className="steps-grid">
//             {steps.map((s, i) => (
//               <div key={i} className="step-card">
//                 <div className="step-num">{i + 1}</div>
//                 <LottiePlayer src={s.lottie} style={{ width:88, height:88, margin:"0 auto 16px" }} />
//                 <div className="step-title">{s.title}</div>
//                 <div className="step-desc">{s.desc}</div>
//               </div>
//             ))}
//           </div>
//         </div>


//         {/* ── Projects Carousel ──────────────────────────── */}
//         {(()=>{
//           const p = projects[projIdx];
//           const prev = () => setProjIdx(i => (i - 1 + projects.length) % projects.length);
//           const next = () => setProjIdx(i => (i + 1) % projects.length);
//           return (
//             <div className="projects-section">
//               <div className="projects-inner">
//                 <div className="section-header">
//                   <div className="section-tag">✦ सध्या सुरू</div>
//                   <h2 className="section-title">चालू प्रकल्प</h2>
//                   <p className="section-sub">वसई-विरार महानगरपालिकेचे सध्या प्रगतीत असलेले महत्त्वाचे प्रकल्प</p>
//                 </div>

//                 <div className="carousel-wrap">
//                   <div className="carousel-track-outer">
//                     <div className="project-card">

//                       {/* Left content */}
//                       <div className="project-card-left">
//                         <div className="project-tag">{p.tag}</div>
//                         <div className="project-title">{p.title}</div>
//                         <p className="project-desc">{p.desc}</p>

//                         <div className="project-progress-label">
//                           <span className="project-progress-text">प्रगती</span>
//                           <span className="project-progress-pct">{p.progress}%</span>
//                         </div>
//                         <div className="project-progress-bar">
//                           <div className="project-progress-fill" style={{ width: `${p.progress}%` }} />
//                         </div>

//                         <div className="project-meta">
//                           <div className="project-meta-item">
//                             <span className="project-meta-icon">💰</span>
//                             <span>अंदाजपत्रक: <strong>{p.budget}</strong></span>
//                           </div>
//                           <div className="project-meta-item">
//                             <span className="project-meta-icon">📅</span>
//                             <span>पूर्णता: <strong>{p.deadline}</strong></span>
//                           </div>
//                           <span className={`project-status-chip status-${p.status}`}>{p.statusLabel}</span>
//                         </div>
//                       </div>

//                       {/* Right stat panel */}
//                       <div className="project-card-right" style={{ background: `linear-gradient(160deg, ${p.color}dd, ${p.color}99)` }}>
//                         <div className="project-icon-big">{p.icon}</div>
//                         <div className="project-stat">
//                           <div className="project-stat-num">{p.stat}</div>
//                           <div className="project-stat-lbl">{p.statLbl}</div>
//                         </div>
//                       </div>

//                     </div>
//                   </div>

//                   {/* Nav */}
//                   <div className="carousel-nav">
//                     <button className="carousel-btn" onClick={prev}>‹</button>
//                     <div className="carousel-dots">
//                       {projects.map((_, i) => (
//                         <button key={i} className={`carousel-dot${projIdx === i ? " active" : ""}`} onClick={() => setProjIdx(i)} />
//                       ))}
//                     </div>
//                     <button className="carousel-btn" onClick={next}>›</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })()}

//         {/* FAQ */}
//         <div className="faq-section">
//           <LottiePlayer
//             src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
//             style={{ position:"absolute", left:30, top:"50%", transform:"translateY(-50%)", width:120, height:120, opacity:0.18, pointerEvents:"none" }}
//           />
//           <LottiePlayer
//             src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
//             style={{ position:"absolute", right:30, top:"50%", transform:"translateY(-50%)", width:120, height:120, opacity:0.18, pointerEvents:"none" }}
//           />
//           <div className="faq-inner">
//             <div className="faq-label">FAQ</div>
//             <h2 className="faq-title">वारंवार विचारले जाणारे प्रश्न</h2>
//             <div className="faq-list">
//               {faqs.map((f, i) => (
//                 <div key={i} className={`faq-item${faqOpen === i ? " faq-active" : ""}`}>
//                   <button className="faq-q" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
//                     <span className="faq-q-text">{f.q}</span>
//                     <span className="faq-icon">+</span>
//                   </button>
//                   <div className="faq-answer">
//                     <p className="faq-a-text">{f.a}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Notice */}
//         <div className="notice">
//           <span className="notice-icon">⚠️</span>
//           <div>
//             <div className="notice-title">महत्त्वाची सूचना</div>
//             <div className="notice-text">
//               भेटीच्या दिवशी वेळेवर या. Token confirm झाल्याशिवाय भेट होणार नाही.
//               Appointment confirm होण्यासाठी admin approval आवश्यक आहे.
//               कोणत्याही अडचणीसाठी VVCMC कार्यालयाशी संपर्क करा.
//             </div>
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="cta">
//           <LottiePlayer
//             src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
//             style={{ position:"absolute", left:60, top:"50%", transform:"translateY(-50%)", width:150, height:150, opacity:0.1, pointerEvents:"none" }}
//           />
//           <LottiePlayer
//             src="https://assets9.lottiefiles.com/packages/lf20_touohxv0.json"
//             style={{ position:"absolute", right:60, top:"50%", transform:"translateY(-50%)", width:150, height:150, opacity:0.1, pointerEvents:"none" }}
//           />
//           <div className="cta-inner">
//             <div className="cta-title">आजच Appointment बुक करा</div>
//             <div className="cta-sub">Mayor साहेबांची वेळ मर्यादित आहे — लवकर बुक करा</div>
//             <button className="cta-btn" onClick={() => navigate(citizen ? "/book-appointment" : "/register")}>
//               {citizen ? "📅 Book Now" : "🚀 Register & Book"}
//             </button>
//           </div>
//         </div>

//       </div>
//     </>
//   );
// }

// ===========================

// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import heroBg from "../assets/vvcmcbuildingbanner.png";
// import mayorPhoto from "../assets/ajivsir1.jpeg";

// /* ── Lottie loader ─────────────────────────────────────── */
// function LottiePlayer({ src, style, loop = true }) {
//   const ref = useRef(null);
//   useEffect(() => {
//     let anim;
//     const init = () => {
//       if (window.lottie && ref.current) {
//         ref.current.innerHTML = "";
//         anim = window.lottie.loadAnimation({
//           container: ref.current,
//           renderer: "svg",
//           loop,
//           autoplay: true,
//           path: src,
//         });
//       }
//     };
//     if (!window.lottie) {
//       const s = document.createElement("script");
//       s.src = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js";
//       s.onload = init;
//       document.head.appendChild(s);
//     } else {
//       init();
//     }
//     return () => anim && anim.destroy();
//   }, [src]);
//   return <div ref={ref} style={style} />;
// }

// export default function Home() {
//   const navigate = useNavigate();
//   const citizen = (() => {
//     try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
//   })();

//   const [faqOpen, setFaqOpen]   = useState(null);
//   const [projIdx, setProjIdx]   = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);

//   const projects = [
//     {
//       icon: "🛣️", tag: "पायाभूत सुविधा",
//       title: "विरार-नालासोपारा रस्ते रुंदीकरण प्रकल्प",
//       desc: "विरार पश्चिम ते नालासोपारा पूर्व दरम्यान मुख्य रस्त्यांचे रुंदीकरण व डांबरीकरण. वाहतूक कोंडी कमी करणे आणि नागरिकांना सुलभ प्रवास उपलब्ध करणे हे उद्दिष्ट.",
//       progress: 68, status: "ongoing", statusLabel: "सुरू आहे",
//       budget: "₹ 42 कोटी", deadline: "डिसेंबर 2025",
//       stat: "12 km", statLbl: "रस्ता रुंदीकरण",
//       accent: "#51ABAC", bg: "#e8f7f7",
//     },
//     {
//       icon: "💧", tag: "पाणीपुरवठा",
//       title: "24×7 पाणीपुरवठा योजना — वसई विभाग",
//       desc: "वसई विभागातील नागरिकांना 24 तास शुद्ध पाणी उपलब्ध करण्यासाठी नवीन जलवाहिन्या टाकणे, जुन्या पाइपलाइनचे नूतनीकरण आणि नवीन पाण्याच्या टाक्या बांधणे.",
//       progress: 45, status: "ongoing", statusLabel: "सुरू आहे",
//       budget: "₹ 85 कोटी", deadline: "मार्च 2026",
//       stat: "1.2 लाख", statLbl: "लाभार्थी कुटुंबे",
//       accent: "#028945", bg: "#e8f5ef",
//     },
//     {
//       icon: "🏫", tag: "शिक्षण",
//       title: "VVCMC शाळा डिजिटलायझेशन उपक्रम",
//       desc: "महानगरपालिकेच्या सर्व शाळांमध्ये स्मार्ट बोर्ड, संगणक लॅब आणि इंटरनेट सुविधा उपलब्ध करणे. विद्यार्थ्यांना डिजिटल शिक्षण देण्यासाठी हा उपक्रम राबवला जात आहे.",
//       progress: 30, status: "planning", statusLabel: "नियोजन",
//       budget: "₹ 18 कोटी", deadline: "जून 2026",
//       stat: "94", statLbl: "शाळा डिजिटल",
//       accent: "#D09A50", bg: "#fdf3e0",
//     },
//     {
//       icon: "🌳", tag: "पर्यावरण",
//       title: "हरित वसई-विरार — वृक्षारोपण मोहीम",
//       desc: "महानगरपालिका क्षेत्रात 5 लाख झाडे लावण्याचा संकल्प. उद्याने विकसित करणे, रस्त्यांच्या दुतर्फा झाडे लावणे आणि पर्यावरण संतुलन राखणे हे या प्रकल्पाचे उद्दिष्ट.",
//       progress: 55, status: "ongoing", statusLabel: "सुरू आहे",
//       budget: "₹ 8 कोटी", deadline: "ऑगस्ट 2025",
//       stat: "5 लाख", statLbl: "झाडे लावणार",
//       accent: "#028945", bg: "#e8f5ef",
//     },
//   ];

//   /* Auto-advance carousel */
//   useEffect(() => {
//     if (!autoPlay) return;
//     const t = setInterval(() => {
//       setProjIdx(i => (i + 1) % projects.length);
//     }, 4000);
//     return () => clearInterval(t);
//   }, [autoPlay, projects.length]);

//   const faqs = [
//     { q: "Appointment बुक करण्यासाठी काय करावे लागेल?", a: "प्रथम Register करा, त्यानंतर उपलब्ध date आणि time slot निवडा, आवश्यक माहिती भरा आणि Submit करा. Admin approval नंतर तुम्हाला Confirmation Token मिळेल." },
//     { q: "Appointment confirm होण्यासाठी किती वेळ लागतो?", a: "Appointment submit केल्यानंतर Admin द्वारे review केले जाते. साधारणतः 1-2 कार्यालयीन दिवसांत confirmation दिली जाते. SMS आणि Portal वर status दिसेल." },
//     { q: "भेटीच्या दिवशी काय घेऊन यावे?", a: "भेटीच्या दिवशी तुमचा Confirmation Token आणि एक valid ओळखपत्र (Aadhar Card, Voter ID इ.) सोबत आणावे. Token शिवाय भेट होणार नाही." },
//     { q: "Appointment Cancel किंवा Reschedule करता येते का?", a: "होय, तुम्ही 'My Appointments' section मध्ये जाऊन Appointment cancel किंवा reschedule करू शकता. भेटीच्या 24 तास आधी बदल करणे आवश्यक आहे." },
//     { q: "एका दिवशी किती नागरिक भेट घेऊ शकतात?", a: "Mayor साहेबांच्या schedule नुसार प्रत्येक दिवशी मर्यादित slots उपलब्ध असतात. Slots संपल्यावर त्या दिवसाचे booking बंद होते, त्यामुळे लवकर बुक करा." },
//   ];

//   const steps = [
//     { lottie: "https://assets3.lottiefiles.com/packages/lf20_jbb3xnwi.json", title: "Register करा",  desc: "Mobile number वापरून account तयार करा — फक्त 1 मिनिट" },
//     { lottie: "https://assets4.lottiefiles.com/packages/lf20_tljjahng.json", title: "Date निवडा",    desc: "Mayor च्या available dates आणि time slots मधून निवडा" },
//     { lottie: "https://assets9.lottiefiles.com/packages/lf20_xyadoh9h.json", title: "Details भरा",   desc: "भेटीचे कारण, visitors संख्या आणि photo द्या" },
//     { lottie: "https://assets10.lottiefiles.com/packages/lf20_attdh2fv.json",title: "Token मिळवा",   desc: "Confirmation token आणि QR code मिळेल — भेटीच्या दिवशी दाखवा" },
//   ];

//   const p = projects[projIdx];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Crimson+Pro:wght@400;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');

//         :root {
//           --gold:  #F5E6BF;
//           --amber: #D09A50;
//           --green: #028945;
//           --teal:  #51ABAC;
//           --blue:  #4CABBF;
//         }
//         * { box-sizing: border-box; margin: 0; padding: 0; }
//         .home-root { min-height: calc(100vh - 64px); background: #f8fffe; font-family: 'DM Sans', sans-serif; }

//         /* ══ HERO ══ */
//         .hero {
//           position: relative; min-height: calc(100vh - 64px);
//           display: flex; flex-direction: column;
//           align-items: center; justify-content: center;
//           text-align: center; padding: 80px 32px 72px; overflow: hidden;
//         }
//         .hero::before {
//           content: ''; position: absolute; inset: 0;
//           background-image: url(${heroBg});
//           background-size: cover; background-position: center top;
//           background-repeat: no-repeat; z-index: 0;
//         }
//         .hero::after {
//           content: ''; position: absolute; inset: 0;
//           background: rgba(81,171,172,0.5); z-index: 1;
//         }
//         .hero > * { position: relative; z-index: 2; }
//         .hero-jansanwad {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(48px,9vw,88px); font-weight: 800;
//           color: #ffffff; line-height: 1.1; margin-bottom: 20px;
//           text-shadow: 0 4px 24px rgba(0,0,0,0.25); letter-spacing: -1px;
//         }
//         .hero-desc {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(16px,2.4vw,22px); font-weight: 700;
//           color: #ffffff; max-width: 680px; margin: 0 auto 36px;
//           line-height: 1.65; text-shadow: 0 2px 12px rgba(0,0,0,0.2);
//         }
//         .hero-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
//         .hero-btn-primary {
//           padding: 14px 36px; border-radius: 10px; border: none;
//           background: #ffffff; color: #028945;
//           font-weight: 700; font-size: 15px; cursor: pointer;
//           transition: all .2s; box-shadow: 0 4px 20px rgba(0,0,0,0.18);
//         }
//         .hero-btn-primary:hover { background:#f0fdf4; transform:translateY(-2px); }
//         .hero-btn-outline {
//           padding: 14px 36px; border-radius: 10px;
//           border: 2px solid rgba(255,255,255,0.8);
//           background: transparent; color: #ffffff;
//           font-weight: 700; font-size: 15px; cursor: pointer; transition: all .2s;
//         }
//         .hero-btn-outline:hover { background:rgba(255,255,255,0.15); transform:translateY(-2px); }

//         /* ══ MAYOR ══ */
//         .mayor-section { width: 100%; display: flex; align-items: stretch; min-height: 540px; }
//         .mayor-left {
//           flex: 1; background: var(--gold); padding: 72px 56px;
//           display: flex; flex-direction: column; justify-content: center;
//           position: relative; overflow: hidden;
//         }
//         .mayor-left::before { content:''; position:absolute; top:-60px; left:-60px; width:220px; height:220px; border-radius:50%; border:2px solid rgba(208,154,80,0.3); }
//         .mayor-left::after  { content:''; position:absolute; bottom:-40px; right:40px; width:130px; height:130px; border-radius:50%; border:2px solid rgba(208,154,80,0.22); }
//         .mayor-tag { display:inline-flex; align-items:center; gap:6px; background:rgba(208,154,80,0.2); color:#b8860b; font-size:12px; font-weight:700; padding:5px 14px; border-radius:999px; margin-bottom:14px; letter-spacing:0.5px; text-transform:uppercase; width:fit-content; }
//         .mayor-date { font-size:13px; color:#a16207; font-weight:600; margin-bottom:10px; }
//         .mayor-heading { font-family:'Tiro Devanagari Marathi',serif; font-size:clamp(28px,3.8vw,48px); font-weight:800; color:#1a1a1a; line-height:1.2; margin-bottom:6px; }
//         .mayor-heading span { color:var(--green); position:relative; }
//         .mayor-heading span::after { content:''; position:absolute; bottom:-2px; left:0; right:0; height:3px; background:linear-gradient(90deg,#D09A50,var(--green)); border-radius:2px; }
//         .mayor-org { font-family:'Tiro Devanagari Marathi',serif; font-size:15px; color:var(--teal); font-weight:600; margin-bottom:20px; }
//         .mayor-divider { width:56px; height:4px; background:linear-gradient(90deg,#D09A50,var(--green)); border-radius:2px; margin-bottom:22px; }
//         .mayor-bio { font-family:'Tiro Devanagari Marathi',serif; font-size:15px; color:#4b5563; line-height:1.9; margin-bottom:36px; max-width:520px; }
//         .mayor-btns { display:flex; gap:14px; flex-wrap:wrap; }
//         .mayor-btn-primary { padding:14px 32px; border-radius:12px; border:none; background:var(--green); color:#fff; font-weight:700; font-size:14px; cursor:pointer; transition:all .2s; box-shadow:0 4px 16px rgba(2,137,69,0.3); }
//         .mayor-btn-primary:hover { background:#016d38; transform:translateY(-2px); }
//         .mayor-right { width:42%; flex-shrink:0; background:var(--teal); position:relative; overflow:hidden; display:flex; align-items:flex-end; justify-content:center; }
//         .mayor-right-decor1 { position:absolute; top:20px; right:20px; width:90px; height:90px; border-radius:50%; background:rgba(255,255,255,0.08); }
//         .mayor-right-decor2 { position:absolute; bottom:30px; right:30px; width:60px; height:60px; border-radius:50%; border:3px solid rgba(255,255,255,0.15); }
//         .mayor-right-decor3 { position:absolute; top:40px; left:30px; width:40px; height:40px; border-radius:50%; background:rgba(245,230,191,0.15); }
//         .mayor-right-stripe { position:absolute; top:0; bottom:0; right:0; width:55%; background:repeating-linear-gradient(-45deg,rgba(255,255,255,0.04) 0px,rgba(255,255,255,0.04) 2px,transparent 2px,transparent 12px); }
//         .mayor-card { position:relative; z-index:2; width:85%; max-width:300px; margin-bottom:0; }
//         .mayor-card img { width:100%; display:block; object-fit:cover; object-position:top; height:460px; border-radius:20px 20px 0 0; box-shadow:0 -8px 40px rgba(0,0,0,0.2); }
//         .mayor-card-badge { padding:16px 20px; background:#fff; border-radius:0 0 16px 16px; box-shadow:0 8px 24px rgba(0,0,0,0.12); }
//         .mayor-card-name { font-family:'Tiro Devanagari Marathi',serif; font-size:15px; font-weight:800; color:#1a1a1a; }
//         .mayor-card-title { font-size:11px; color:var(--teal); font-weight:600; margin-top:3px; text-transform:uppercase; letter-spacing:0.4px; }

//         /* ══ HOW IT WORKS ══ */
//         .section { padding:80px 32px; max-width:1100px; margin:0 auto; }
//         .section-header { text-align:center; margin-bottom:56px; }
//         .section-tag { display:inline-block; background:rgba(76,171,191,0.12); color:var(--blue); font-size:12px; font-weight:700; padding:5px 16px; border-radius:999px; margin-bottom:14px; letter-spacing:0.6px; text-transform:uppercase; }
//         .section-title { font-family:'Crimson Pro',serif; font-size:clamp(28px,4vw,40px); font-weight:800; color:#1a4a2e; margin-bottom:8px; }
//         .section-sub { color:#6b7280; font-size:15px; }
//         .steps-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:28px; }
//         .step-card { background:#fff; border-radius:20px; padding:32px 24px; text-align:center; border:1px solid rgba(76,171,191,0.15); box-shadow:0 4px 20px rgba(0,0,0,0.05); transition:transform .25s,box-shadow .25s; position:relative; overflow:hidden; }
//         .step-card::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg,var(--teal),var(--green)); }
//         .step-card:hover { transform:translateY(-8px); box-shadow:0 16px 40px rgba(76,171,191,0.2); }
//         .step-num { position:absolute; top:16px; right:16px; width:26px; height:26px; border-radius:50%; background:linear-gradient(135deg,var(--teal),var(--green)); color:#fff; font-size:12px; font-weight:800; display:flex; align-items:center; justify-content:center; }
//         .step-title { font-weight:700; color:#1a4a2e; font-size:15px; margin-bottom:8px; }
//         .step-desc { font-size:13px; color:#6b7280; line-height:1.6; }

//         /* ══ PROJECTS CAROUSEL ══ */
//         .projects-section {
//           padding: 72px 32px;
//           background: #fff;
//           border-top: 1px solid rgba(81,171,172,0.1);
//           border-bottom: 1px solid rgba(81,171,172,0.1);
//         }
//         .projects-inner { max-width: 1060px; margin: 0 auto; }

//         /* big card — left text + right colored panel */
//         .proj-card {
//           display: flex;
//           border-radius: 24px;
//           overflow: hidden;
//           box-shadow: 0 12px 48px rgba(0,0,0,0.1);
//           min-height: 300px;
//           transition: box-shadow .3s;
//         }
//         .proj-left {
//           flex: 1;
//           padding: 44px 48px;
//           background: #fff;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           border: 1px solid rgba(81,171,172,0.12);
//           border-right: none;
//           border-radius: 24px 0 0 24px;
//         }
//         .proj-tag {
//           display: inline-flex; align-items: center; gap: 6px;
//           font-size: 11px; font-weight: 700;
//           padding: 4px 14px; border-radius: 999px;
//           text-transform: uppercase; letter-spacing: 0.6px;
//           margin-bottom: 16px; width: fit-content;
//         }
//         .proj-title {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: clamp(17px,2.4vw,24px);
//           font-weight: 800; color: #1a1a1a;
//           margin-bottom: 14px; line-height: 1.35;
//         }
//         .proj-desc {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 13.5px; color: #6b7280;
//           line-height: 1.8; margin-bottom: 22px;
//           max-width: 480px;
//         }
//         .proj-progress-row { display:flex; justify-content:space-between; margin-bottom:6px; }
//         .proj-progress-lbl { font-size:12px; font-weight:600; color:#4b5563; }
//         .proj-progress-pct { font-size:13px; font-weight:800; }
//         .proj-bar { height:10px; background:#f1f5f9; border-radius:999px; overflow:hidden; margin-bottom:20px; }
//         .proj-bar-fill { height:100%; border-radius:999px; transition: width 0.6s ease; }
//         .proj-meta { display:flex; align-items:center; gap:16px; flex-wrap:wrap; }
//         .proj-meta-item { font-size:12.5px; color:#6b7280; display:flex; align-items:center; gap:5px; }
//         .proj-meta-item strong { color:#1a1a1a; }
//         .proj-chip { font-size:11px; font-weight:700; padding:4px 12px; border-radius:999px; text-transform:uppercase; }
//         .chip-ongoing  { background:rgba(2,137,69,0.1);   color:#028945; }
//         .chip-planning { background:rgba(208,154,80,0.15); color:#b8860b; }

//         .proj-right {
//           width: 220px;
//           flex-shrink: 0;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           gap: 18px;
//           padding: 32px 20px;
//           border-radius: 0 24px 24px 0;
//           transition: background 0.5s;
//         }
//         .proj-icon { font-size: 64px; line-height: 1; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15)); }
//         .proj-stat-num { font-family:'Crimson Pro',serif; font-size:38px; font-weight:800; color:#fff; text-align:center; line-height:1; }
//         .proj-stat-lbl { font-size:11px; color:rgba(255,255,255,0.82); font-weight:700; text-transform:uppercase; letter-spacing:0.5px; text-align:center; }

//         /* nav */
//         .proj-nav { display:flex; align-items:center; justify-content:center; gap:14px; margin-top:28px; }
//         .proj-btn {
//           width:42px; height:42px; border-radius:50%;
//           border:1.5px solid rgba(81,171,172,0.4);
//           background:#fff; color:#51ABAC;
//           font-size:20px; cursor:pointer;
//           display:flex; align-items:center; justify-content:center;
//           transition:all .2s; box-shadow:0 2px 8px rgba(0,0,0,0.06);
//         }
//         .proj-btn:hover { background:#51ABAC; color:#fff; border-color:#51ABAC; transform:scale(1.08); }
//         .proj-dots { display:flex; gap:7px; align-items:center; }
//         .proj-dot { width:9px; height:9px; border-radius:50%; background:rgba(81,171,172,0.3); border:none; cursor:pointer; padding:0; transition:all .25s; }
//         .proj-dot.active { background:#51ABAC; width:26px; border-radius:5px; }
//         .proj-counter { font-size:12px; font-weight:600; color:#9ca3af; }

//         /* ══ FAQ ══ */
//         .faq-section { width:100%; background:var(--teal); padding:80px 24px; position:relative; overflow:hidden; }
//         .faq-section::before { content:''; position:absolute; top:-80px; left:50%; transform:translateX(-50%); width:700px; height:500px; background:radial-gradient(ellipse,rgba(255,255,255,0.12) 0%,transparent 70%); pointer-events:none; }
//         .faq-inner { max-width:720px; margin:0 auto; position:relative; z-index:1; }
//         .faq-label { text-align:center; font-size:13px; font-weight:700; color:rgba(255,255,255,0.75); letter-spacing:1.2px; text-transform:uppercase; margin-bottom:14px; }
//         .faq-title { font-family:'Crimson Pro',serif; font-size:clamp(26px,4vw,42px); font-weight:800; color:#fff; text-align:center; line-height:1.25; margin-bottom:48px; }
//         .faq-list { display:flex; flex-direction:column; gap:12px; }
//         .faq-item { background:rgba(255,255,255,0.1); border:1.5px solid rgba(255,255,255,0.22); border-radius:16px; overflow:hidden; transition:all 0.25s; }
//         .faq-item.faq-active { background:rgba(255,255,255,0.18); border-color:rgba(255,255,255,0.5); }
//         .faq-q { width:100%; display:flex; align-items:center; justify-content:space-between; padding:20px 24px; background:none; border:none; cursor:pointer; text-align:left; gap:16px; }
//         .faq-q-text { font-family:'Tiro Devanagari Marathi',serif; font-size:16px; font-weight:600; color:#fff; line-height:1.5; flex:1; }
//         .faq-icon { flex-shrink:0; width:32px; height:32px; border-radius:50%; border:1.5px solid rgba(255,255,255,0.55); display:flex; align-items:center; justify-content:center; color:#fff; font-size:20px; font-weight:300; transition:transform 0.3s,background 0.3s; }
//         .faq-item.faq-active .faq-icon { background:#fff; color:var(--teal); transform:rotate(45deg); }
//         .faq-answer { max-height:0; overflow:hidden; transition:max-height 0.4s ease,padding 0.3s; padding:0 24px; }
//         .faq-item.faq-active .faq-answer { max-height:300px; padding:0 24px 20px; }
//         .faq-a-text { font-family:'Tiro Devanagari Marathi',serif; font-size:14px; color:rgba(255,255,255,0.88); line-height:1.85; border-top:1px solid rgba(255,255,255,0.18); padding-top:16px; }

//         /* ══ NOTICE ══ */
//         .notice { background:linear-gradient(135deg,#fef9c3,#fef3c7); border:1px solid #fde68a; border-radius:16px; padding:24px 28px; margin:40px auto; display:flex; gap:16px; align-items:flex-start; max-width:1036px; }
//         .notice-icon { font-size:28px; flex-shrink:0; }
//         .notice-title { font-weight:700; color:#92400e; font-size:15px; margin-bottom:6px; }
//         .notice-text { font-size:13px; color:#a16207; line-height:1.6; }

//         /* ══ CTA ══ */
//         .cta { background:linear-gradient(135deg,var(--green) 0%,#014d28 100%); color:#fff; padding:72px 32px; text-align:center; position:relative; overflow:hidden; }
//         .cta::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse at 50% 0%,rgba(76,171,191,0.25) 0%,transparent 65%); pointer-events:none; }
//         .cta-inner { position:relative; z-index:1; }
//         .cta-title { font-family:'Crimson Pro',serif; font-size:clamp(28px,4vw,40px); font-weight:800; margin-bottom:12px; }
//         .cta-sub { color:rgba(255,255,255,0.8); font-size:16px; margin-bottom:36px; }
//         .cta-btn { padding:15px 48px; border-radius:14px; border:none; background:#fff; color:var(--green); font-weight:800; font-size:16px; cursor:pointer; box-shadow:0 8px 28px rgba(0,0,0,0.18); transition:all .2s; }
//         .cta-btn:hover { transform:translateY(-3px); box-shadow:0 14px 36px rgba(0,0,0,0.25); }

//         /* ══ RESPONSIVE ══ */
//         @media(max-width:900px){
//           .mayor-section { flex-direction:column; }
//           .mayor-left { padding:48px 24px; }
//           .mayor-right { width:100%; min-height:400px; padding-top:40px; }
//           .mayor-card { width:70%; max-width:260px; }
//           .mayor-card img { height:360px; }
//           .proj-card { flex-direction:column; }
//           .proj-left { border-radius:24px 24px 0 0; border-right:1px solid rgba(81,171,172,0.12); border-bottom:none; padding:28px 28px; }
//           .proj-right { width:100%; border-radius:0 0 24px 24px; flex-direction:row; justify-content:space-around; padding:24px 28px; min-height:120px; }
//         }
//         @media(max-width:600px){
//           .hero { padding:60px 20px 60px; }
//           .hero-btns { flex-direction:column; align-items:center; }
//           .hero-btn-primary,.hero-btn-outline { width:100%; max-width:280px; }
//           .mayor-btns { flex-direction:column; }
//           .mayor-btn-primary { width:100%; text-align:center; }
//           .mayor-card { width:85%; }
//           .section { padding:56px 20px; }
//           .notice { margin:32px 16px; }
//           .projects-section { padding:56px 20px; }
//         }
//       `}</style>

//       <div className="home-root">

//         {/* ── Hero ── */}
//         <div className="hero">
//           <h1 className="hero-jansanwad">जन संवाद</h1>
//           <p className="hero-desc">
//             नागरिकांना त्यांच्या समस्या व सूचना मा. महापौर श्री. अजिव पाटील यांच्यापर्यंत थेट पोहोचवण्यासाठी तयार केलेले संवाद व्यासपीठ
//           </p>
//           <div className="hero-btns">
//             {citizen ? (
//               <>
//                 <button className="hero-btn-primary" onClick={() => navigate("/book-appointment")}>📅 Book Appointment</button>
//                 <button className="hero-btn-outline" onClick={() => navigate("/my-appointments")}>📋 My Appointments</button>
//               </>
//             ) : (
//               <>
//                 <button className="hero-btn-primary" onClick={() => navigate("/register")}>🚀 Get Started — Register</button>
//                 <button className="hero-btn-outline" onClick={() => navigate("/login")}>Login करा</button>
//               </>
//             )}
//           </div>
//         </div>

//         {/* ── Mayor Section ── */}
//         <div className="mayor-section">
//           <div className="mayor-left">
//             <LottiePlayer src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json" style={{ position:"absolute", bottom:24, right:60, width:90, height:90, opacity:0.3, pointerEvents:"none" }} />
//             <div className="mayor-tag">✦ Our Leadership</div>
//             <div className="mayor-date">३ फेब्रुवारी २०२६ पासून कार्यरत</div>
//             <h2 className="mayor-heading">मा. महापौर<br /><span>श्री. अजीव पाटील</span></h2>
//             <div className="mayor-org">वसई-विरार शहर महानगरपालिका</div>
//             <div className="mayor-divider" />
//             <p className="mayor-bio">
//               ३ फेब्रुवारी २०२६ रोजी महापौरपदाची सूत्रे स्वीकारल्यापासून मा. महापौर श्री. अजीव पाटील यांनी नागरिकांशी थेट संवाद साधण्यासाठी हे जन संवाद व्यासपीठ उभारले आहे. नागरिकांच्या समस्या, सूचना आणि तक्रारी थेट महापौरांपर्यंत पोहोचाव्यात यासाठी हे पारदर्शक, सोपे आणि जलद ऑनलाइन माध्यम तयार केले आहे.
//             </p>
//             <div className="mayor-btns">
//               <button className="mayor-btn-primary" onClick={() => navigate(citizen ? "/book-appointment" : "/register")}>📅 Appointment बुक करा</button>
//             </div>
//           </div>
//           <div className="mayor-right">
//             <div className="mayor-right-decor1" /><div className="mayor-right-decor2" /><div className="mayor-right-decor3" /><div className="mayor-right-stripe" />
//             <div className="mayor-card">
//               <img src={mayorPhoto} alt="मा. महापौर श्री. अजीव पाटील" />
//               <div className="mayor-card-badge">
//                 <div className="mayor-card-name">मा. महापौर श्री. अजीव पाटील</div>
//                 <div className="mayor-card-title">वसई-विरार शहर महानगरपालिका</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ── How it Works ── */}
//         <div className="section">
//           <div className="section-header">
//             <div className="section-tag">✦ Process</div>
//             <h2 className="section-title">कसे काम करते?</h2>
//             <p className="section-sub">फक्त 4 सोप्या steps मध्ये Mayor ची भेट बुक करा</p>
//           </div>
//           <div className="steps-grid">
//             {steps.map((s,i) => (
//               <div key={i} className="step-card">
//                 <div className="step-num">{i+1}</div>
//                 <LottiePlayer src={s.lottie} style={{ width:88, height:88, margin:"0 auto 16px" }} />
//                 <div className="step-title">{s.title}</div>
//                 <div className="step-desc">{s.desc}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ══ PROJECTS CAROUSEL ══ */}
//         <div className="projects-section">
//           <div className="projects-inner">
//             <div className="section-header">
//               <div className="section-tag">✦ सध्या सुरू</div>
//               <h2 className="section-title">चालू प्रकल्प</h2>
//               <p className="section-sub">वसई-विरार महानगरपालिकेचे सध्या प्रगतीत असलेले महत्त्वाचे प्रकल्प</p>
//             </div>

//             {/* Big Card */}
//             <div
//               className="proj-card"
//               onMouseEnter={() => setAutoPlay(false)}
//               onMouseLeave={() => setAutoPlay(true)}
//             >
//               {/* Left */}
//               <div className="proj-left">
//                 <div className="proj-tag" style={{ background:`${p.accent}18`, color:p.accent }}>
//                   {p.icon} {p.tag}
//                 </div>
//                 <div className="proj-title">{p.title}</div>
//                 <p className="proj-desc">{p.desc}</p>
//                 <div className="proj-progress-row">
//                   <span className="proj-progress-lbl">प्रगती</span>
//                   <span className="proj-progress-pct" style={{ color:p.accent }}>{p.progress}%</span>
//                 </div>
//                 <div className="proj-bar">
//                   <div className="proj-bar-fill" style={{ width:`${p.progress}%`, background:`linear-gradient(90deg,${p.accent}88,${p.accent})` }} />
//                 </div>
//                 <div className="proj-meta">
//                   <div className="proj-meta-item">💰 <strong>{p.budget}</strong></div>
//                   <div className="proj-meta-item">📅 <strong>{p.deadline}</strong></div>
//                   <span className={`proj-chip ${p.status==="ongoing"?"chip-ongoing":"chip-planning"}`}>{p.statusLabel}</span>
//                 </div>
//               </div>

//               {/* Right colored panel */}
//               <div className="proj-right" style={{ background:`linear-gradient(160deg,${p.accent},${p.accent}bb)` }}>
//                 <div className="proj-icon">{p.icon}</div>
//                 <div>
//                   <div className="proj-stat-num">{p.stat}</div>
//                   <div className="proj-stat-lbl">{p.statLbl}</div>
//                 </div>
//               </div>
//             </div>

//             {/* Nav */}
//             <div className="proj-nav">
//               <button className="proj-btn" onClick={() => { setAutoPlay(false); setProjIdx(i => (i-1+projects.length)%projects.length); }}>‹</button>
//               <div className="proj-dots">
//                 {projects.map((_,i) => (
//                   <button key={i} className={`proj-dot${projIdx===i?" active":""}`} onClick={() => { setAutoPlay(false); setProjIdx(i); }} />
//                 ))}
//               </div>
//               <span className="proj-counter">{projIdx+1} / {projects.length}</span>
//               <button className="proj-btn" onClick={() => { setAutoPlay(false); setProjIdx(i => (i+1)%projects.length); }}>›</button>
//             </div>
//           </div>
//         </div>

        

//         {/* ── FAQ ── */}
//         <div className="faq-section">
//           <LottiePlayer src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json" style={{ position:"absolute", left:30, top:"50%", transform:"translateY(-50%)", width:120, height:120, opacity:0.18, pointerEvents:"none" }} />
//           <LottiePlayer src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json" style={{ position:"absolute", right:30, top:"50%", transform:"translateY(-50%)", width:120, height:120, opacity:0.18, pointerEvents:"none" }} />
//           <div className="faq-inner">
//             <div className="faq-label">FAQ</div>
//             <h2 className="faq-title">वारंवार विचारले जाणारे प्रश्न</h2>
//             <div className="faq-list">
//               {faqs.map((f,i) => (
//                 <div key={i} className={`faq-item${faqOpen===i?" faq-active":""}`}>
//                   <button className="faq-q" onClick={() => setFaqOpen(faqOpen===i?null:i)}>
//                     <span className="faq-q-text">{f.q}</span>
//                     <span className="faq-icon">+</span>
//                   </button>
//                   <div className="faq-answer"><p className="faq-a-text">{f.a}</p></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ── Notice ── */}
//         <div className="notice">
//           <span className="notice-icon">⚠️</span>
//           <div>
//             <div className="notice-title">महत्त्वाची सूचना</div>
//             <div className="notice-text">
//               भेटीच्या दिवशी वेळेवर या. Token confirm झाल्याशिवाय भेट होणार नाही.
//               Appointment confirm होण्यासाठी admin approval आवश्यक आहे.
//               कोणत्याही अडचणीसाठी VVCMC कार्यालयाशी संपर्क करा.
//             </div>
//           </div>
//         </div>

//         {/* ── CTA ── */}
//         <div className="cta">
//           <LottiePlayer src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json" style={{ position:"absolute", left:60, top:"50%", transform:"translateY(-50%)", width:150, height:150, opacity:0.1, pointerEvents:"none" }} />
//           <LottiePlayer src="https://assets9.lottiefiles.com/packages/lf20_touohxv0.json" style={{ position:"absolute", right:60, top:"50%", transform:"translateY(-50%)", width:150, height:150, opacity:0.1, pointerEvents:"none" }} />
//           <div className="cta-inner">
//             <div className="cta-title">आजच Appointment बुक करा</div>
//             <div className="cta-sub">Mayor साहेबांची वेळ मर्यादित आहे — लवकर बुक करा</div>
//             <button className="cta-btn" onClick={() => navigate(citizen ? "/book-appointment" : "/register")}>
//               {citizen ? "📅 Book Now" : "🚀 Register & Book"}
//             </button>
//           </div>
//         </div>

//       </div>
//     </>
//   );
// }


