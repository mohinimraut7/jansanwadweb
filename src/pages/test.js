  {/* ══ MAYOR SECTION — redesigned to match screenshot ══ */}
        <div className="mayor-section">

          {/* LEFT: text */}
          <div className="mayor-left">
            <LottiePlayer
              src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
              style={{ position:"absolute", bottom:24, right:60, width:90, height:90, opacity:0.15, pointerEvents:"none" }}
            />
            <div className="mayor-tag">✦ Our Leadership</div>
            <div className="mayor-date">३ फेब्रुवारी २०२६ पासून कार्यरत</div>
            <h2 className="mayor-heading">
              मा. महापौर
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

          {/* RIGHT: bubbles + phone */}
          <div className="mayor-right">
            {/* Floating bubbles */}
            <div className="mayor-bubble b1">💬</div>
            <div className="mayor-bubble b2">📈</div>
            <div className="mayor-bubble b3">👥</div>

            {/* Glow halo */}
            <div className="mayor-phone-glow" />

            {/* Phone mockup */}
            <div className="mayor-phone-wrap">
              <div className="mayor-phone">
                <div className="mayor-phone-inner">
                  <img
                    src={mayorPhoto}
                    alt="मा. महापौर श्री. अजीव पाटील"
                    className="mayor-phone-img"
                  />
                  <div className="mayor-phone-badge">
                    <div className="mayor-phone-badge-name">मा. महापौर श्री. अजीव पाटील</div>
                    <div className="mayor-phone-badge-title">वसई-विरार शहर महानगरपालिका</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



  /* ══════════════════════════════════════════════════════
           MAYOR SECTION — dark teal, left text, right phone+bubbles
           Matches screenshot design
        ══════════════════════════════════════════════════════ */
        .mayor-section {
          width: 100%;
          position: relative;
          background: linear-gradient(135deg, #1b6e6e 0%, #134f4f 55%, #0d3b3b 100%);
          overflow: hidden;
          display: flex;
          align-items: center;
          min-height: 540px;
          padding: 72px 6%;
        }
        /* diagonal stripe texture */
        .mayor-section::before {
          content: ''; position: absolute; inset: 0;
          background: repeating-linear-gradient(
            -45deg,
            rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px,
            transparent 1px, transparent 30px
          );
          pointer-events: none; z-index: 0;
        }
        /* radial glow top-right */
        .mayor-section::after {
          content: ''; position: absolute;
          top: -120px; right: -80px;
          width: 480px; height: 480px; border-radius: 50%;
          background: radial-gradient(circle, rgba(81,171,172,0.2) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }

        /* LEFT content */
        .mayor-left {
          position: relative; z-index: 2;
          flex: 1; padding-right: 40px;
          display: flex; flex-direction: column; justify-content: center;
          /* remove old gold bg */
          background: transparent !important;
        }
        .mayor-left::before { display: none; }
        .mayor-left::after  { display: none; }

        .mayor-tag {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(208,154,80,0.18); color: #D09A50;
          font-size: 11px; font-weight: 700; padding: 5px 14px;
          border-radius: 999px; margin-bottom: 18px; letter-spacing: 0.6px;
          text-transform: uppercase; width: fit-content;
          border: 1px solid rgba(208,154,80,0.35);
        }
        .mayor-date {
          font-size: 13px; color: rgba(255,255,255,0.55);
          font-weight: 500; margin-bottom: 10px;
          font-family: 'DM Sans', sans-serif;
        }
        /* Big white heading — white line1, golden line2 */
        .mayor-heading {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: clamp(30px, 4.5vw, 54px); font-weight: 800;
          color: #ffffff; line-height: 1.18; margin-bottom: 8px;
          text-shadow: 0 2px 24px rgba(0,0,0,0.25);
        }
        .mayor-heading span {
          color: #D09A50;
          display: block;
          /* remove old underline pseudoelement */
          position: static;
        }
        .mayor-heading span::after { display: none; }

        .mayor-org {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 14px; color: rgba(81,171,172,0.85);
          font-weight: 600; margin-bottom: 18px;
        }
        .mayor-divider {
          width: 52px; height: 4px;
          background: linear-gradient(90deg, #D09A50, #51ABAC);
          border-radius: 2px; margin-bottom: 22px;
        }
        .mayor-bio {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 14px; color: rgba(255,255,255,0.72);
          line-height: 1.9; margin-bottom: 36px; max-width: 480px;
        }
        .mayor-btns { display: flex; gap: 14px; flex-wrap: wrap; }
        .mayor-btn-primary {
          padding: 14px 32px; border-radius: 10px; border: none;
          background: #028945; color: #fff; font-weight: 700; font-size: 14px;
          font-family: 'DM Sans', sans-serif; cursor: pointer; transition: all .2s;
          box-shadow: 0 4px 20px rgba(2,137,69,0.42);
        }
        .mayor-btn-primary:hover { background: #016d38; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(2,137,69,0.5); }

        /* RIGHT: floating bubbles + phone */
        .mayor-right {
          position: relative; z-index: 2;
          width: 46%; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          min-height: 420px;
          /* remove old teal bg */
          background: transparent !important;
        }
        /* remove old decor elements — hidden via display:none on old class */
        .mayor-right-decor1,
        .mayor-right-decor2,
        .mayor-right-decor3,
        .mayor-right-stripe { display: none; }

        /* Floating icon bubbles */
        .mayor-bubble {
          position: absolute;
          background: rgba(255,255,255,0.13);
          backdrop-filter: blur(8px);
          border: 1.5px solid rgba(255,255,255,0.22);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px;
          box-shadow: 0 8px 28px rgba(0,0,0,0.22);
          animation: mayorBob 3.5s ease-in-out infinite;
          z-index: 4;
        }
        .mayor-bubble.b1 { width:58px; height:58px; top:8%;  left:4%;  animation-delay:0s;   }
        .mayor-bubble.b2 { width:52px; height:52px; top:44%; left:0%;  animation-delay:0.9s; }
        .mayor-bubble.b3 { width:58px; height:58px; top:76%; left:5%;  animation-delay:1.6s; }
        @keyframes mayorBob { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-12px); } }

        /* Glow halo behind phone */
        .mayor-phone-glow {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 300px; height: 300px; border-radius: 50%;
          background: radial-gradient(circle, rgba(81,171,172,0.2) 0%, transparent 68%);
          pointer-events: none; z-index: 1;
        }

        /* Phone mockup — matches screenshot sleek phone holding style */
        .mayor-phone-wrap { position: relative; z-index: 3; margin-left: 50px; }
        .mayor-phone {
          width: 196px;
          background: #071e1e;
          border-radius: 34px;
          padding: 10px;
          box-shadow:
            0 0 0 2px rgba(81,171,172,0.55),
            0 0 0 4px rgba(81,171,172,0.15),
            0 28px 72px rgba(0,0,0,0.55),
            0 6px 20px rgba(0,0,0,0.35);
          position: relative;
        }
        /* notch */
        .mayor-phone::before {
          content: '';
          position: absolute; top: 14px; left: 50%; transform: translateX(-50%);
          width: 44px; height: 5px; background: #071e1e;
          border-radius: 3px; z-index: 5;
        }
        .mayor-phone-inner { border-radius: 26px; overflow: hidden; background: #fff; }
        .mayor-phone-img {
          width: 100%; height: 240px;
          object-fit: cover; object-position: top center;
          display: block;
        }
        .mayor-phone-badge { padding: 12px 14px 14px; background: #fff; }
        .mayor-phone-badge-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 12px; font-weight: 800; color: #1a1a1a; line-height: 1.4;
        }
        .mayor-phone-badge-title {
          font-size: 9.5px; color: #51ABAC; font-weight: 700;
          margin-top: 3px; text-transform: uppercase; letter-spacing: 0.4px;
        }

        /* Old mayor-card — hide since we replaced */
        .mayor-card { display: none; }

        /* ══ PROJECTS ══ */
        .projects-section { padding: 72px 32px; background: #fff; border-top: 1px solid rgba(81,171,172,0.1); border-bottom: 1px solid rgba(81,171,172,0.1); }
        .projects-inner { max-width: 1060px; margin: 0 auto; }
        .section-header { text-align: center; margin-bottom: 56px; }
        .section-tag { display: inline-block; background: rgba(76,171,191,0.12); color: var(--blue); font-size: 12px; font-weight: 700; padding: 5px 16px; border-radius: 999px; margin-bottom: 14px; letter-spacing: 0.6px; text-transform: uppercase; }
        .section-title { font-family: 'Crimson Pro', serif; font-size: clamp(28px,4vw,40px); font-weight: 800; color: #1a4a2e; margin-bottom: 8px; }
        .section-sub { color: #6b7280; font-size: 15px; }
        .proj-card { display: flex; border-radius: 24px; overflow: hidden; box-shadow: 0 12px 48px rgba(0,0,0,0.1); min-height: 300px; transition: box-shadow .3s; background:#fff; }
        .proj-left { flex: 1; padding: 44px 48px; background: transparent; display: flex; flex-direction: column; justify-content: center; border: 1px solid rgba(81,171,172,0.12); border-right: none; border-radius: 24px 0 0 24px; background-size: cover; background-position: top; background-repeat: no-repeat; }
        .proj-tag { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; padding: 4px 14px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 16px; width: fit-content; }
        .proj-title { font-family: 'Tiro Devanagari Marathi', serif; font-size: clamp(17px,2.4vw,24px); font-weight: 800; color: #1a1a1a; margin-bottom: 14px; line-height: 1.35; }
        .proj-desc { font-family: 'Tiro Devanagari Marathi', serif; font-size: 13.5px; color: #6b7280; line-height: 1.8; margin-bottom: 22px; max-width: 480px; }
        .proj-progress-row { display:flex; justify-content:space-between; margin-bottom:6px; }
        .proj-progress-lbl { font-size:12px; font-weight:600; color:#4b5563; }
        .proj-progress-pct { font-size:13px; font-weight:800; }
        .proj-bar { height:10px; background:#f1f5f9; border-radius:999px; overflow:hidden; margin-bottom:20px; }
        .proj-bar-fill { height:100%; border-radius:999px; transition: width 0.6s ease; }
        .proj-meta { display:flex; align-items:center; gap:16px; flex-wrap:wrap; }
        .proj-meta-item { font-size:12.5px; color:#6b7280; display:flex; align-items:center; gap:5px; }
        .proj-meta-item strong { color:#1a1a1a; }
        .proj-chip { font-size:11px; font-weight:700; padding:4px 12px; border-radius:999px; text-transform:uppercase; }
        .chip-ongoing  { background:rgba(2,137,69,0.1); color:#028945; }
        .chip-planning { background:rgba(208,154,80,0.15); color:#b8860b; }
        .proj-right { width: 220px; flex-shrink: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px; padding: 32px 20px; border-radius: 0 24px 24px 0; transition: background 0.5s; }
        .proj-icon { font-size: 64px; line-height: 1; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15)); }
        .proj-stat-num { font-family:'Crimson Pro',serif; font-size:38px; font-weight:800; color:#fff; text-align:center; line-height:1; }
        .proj-stat-lbl { font-size:11px; color:rgba(255,255,255,0.82); font-weight:700; text-transform:uppercase; letter-spacing:0.5px; text-align:center; }
        .proj-nav { display:flex; align-items:center; justify-content:center; gap:14px; margin-top:28px; }
        .proj-btn { width:42px; height:42px; border-radius:50%; border:1.5px solid rgba(81,171,172,0.4); background:#fff; color:#51ABAC; font-size:20px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .2s; box-shadow:0 2px 8px rgba(0,0,0,0.06); }
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

        /* ══ NOTICE ══ */
        .notice { background: linear-gradient(135deg,#fef9c3,#fef3c7); border: 1px solid #fde68a; border-radius: 16px; padding: 24px 28px; margin: 40px auto; display: flex; gap: 16px; align-items: flex-start; max-width: 1036px; }
        .notice-icon { font-size: 28px; flex-shrink: 0; }
        .notice-title { font-weight: 700; color: #92400e; font-size: 15px; margin-bottom: 6px; }
        .notice-text { font-size: 13px; color: #a16207; line-height: 1.6; }

        /* ══ CTA ══ */
        .cta { background: linear-gradient(135deg, var(--green) 0%, #014d28 100%); color: #fff; padding: 72px 32px; text-align: center; position: relative; overflow: hidden; }
        .cta::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 50% 0%, rgba(76,171,191,0.25) 0%, transparent 65%); pointer-events: none; }
        .cta-inner { position: relative; z-index: 1; }
        .cta-title { font-family: 'Crimson Pro', serif; font-size: clamp(28px,4vw,40px); font-weight: 800; margin-bottom: 12px; }
        .cta-sub { color: rgba(255,255,255,0.8); font-size: 16px; margin-bottom: 36px; }
        .cta-btn { padding: 15px 48px; border-radius: 14px; border: none; background: #fff; color: var(--green); font-weight: 800; font-size: 16px; cursor: pointer; box-shadow: 0 8px 28px rgba(0,0,0,0.18); transition: all .2s; }
        .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 36px rgba(0,0,0,0.25); }

        /* ══ RESPONSIVE ══ */
        @media (max-width: 1024px) {
          .hiw-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .hiw-connector { display: none; }
          .mayor-phone { width: 172px; }
          .mayor-phone-img { height: 210px; }
        }
        @media (max-width: 768px) {
          .hero { min-height: calc(100svh - 64px); padding: 60px 20px 56px; }
          .hero-float.f1,.hero-float.f2 { left:3%; }
          .hero-float.f3,.hero-float.f4 { right:3%; }
          .hero-float.f1,.hero-float.f3 { width:40px; height:40px; font-size:15px; }
          .hero-float.f2,.hero-float.f4 { width:36px; height:36px; font-size:13px; }
          .hiw-section { padding: 52px 16px 60px; }
          .hiw-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .hiw-card { padding: 28px 16px 22px; }
          .hiw-icon-wrap { width: 60px; height: 60px; }

          .mayor-section { flex-direction: column; padding: 48px 24px 56px; }
          .mayor-left { padding-right: 0; margin-bottom: 44px; max-width: 100%; }
          .mayor-right { width: 100%; justify-content: flex-start; min-height: unset; }
          .mayor-phone-wrap { margin-left: 64px; }

          .proj-card { flex-direction: column; }
          .proj-left { border-radius: 24px 24px 0 0; border-right: 1px solid rgba(81,171,172,0.12); border-bottom: none; padding: 28px 24px; }
          .proj-right { width: 100%; border-radius: 0 0 24px 24px; flex-direction: row; justify-content: center; gap: 24px; padding: 20px 24px; }
          .notice { margin: 24px 16px; }
          .faq-section { padding: 60px 16px; }
        }
        @media (max-width: 480px) {
          .hero { padding: 48px 16px 48px; }
          .hero-btns { flex-direction: column; align-items: center; }
          .hero-btn-primary,.hero-btn-outline { width: 100%; max-width: 300px; text-align: center; }
          .hiw-section { padding: 44px 14px 52px; }
          .hiw-grid { grid-template-columns: 1fr; gap: 14px; }
          .hiw-connector { display: none; }
          .hiw-title { font-size: 26px; }
          .mayor-section { padding: 40px 20px 48px; }
          .mayor-heading { font-size: clamp(26px, 7.5vw, 40px); }
          .mayor-right { justify-content: center; }
          .mayor-phone-wrap { margin-left: 50px; }
          .mayor-phone { width: 154px; }
          .mayor-phone-img { height: 185px; }
          .mayor-bubble.b1 { width:46px; height:46px; font-size:18px; }
          .mayor-bubble.b2,.mayor-bubble.b3 { width:42px; height:42px; font-size:16px; }
          .mayor-btns { flex-direction: column; }
          .mayor-btn-primary { width: 100%; text-align: center; }
          .proj-right { flex-direction: column; gap: 12px; }
          .proj-stat-num { font-size: 28px; }
          .faq-q-text { font-size: 14px; }
        }
        @media (max-width: 360px) {
          .hero-jansanwad { font-size: 40px; }
          .hero-float { display: none; }
          .mayor-bubble { display: none; }
          .mayor-phone-wrap { margin-left: 20px; }
        }
