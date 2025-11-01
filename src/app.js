<script>
    // ===== i18n =====
    const TR = {
      ar: {
        title: "حاسبة مواعيد زيارة طبيب العيون",
        subtitle: "اختر الحالات، أدخل عمرك أو فئتك العمرية وتاريخ آخر زيارة، وسنحسب أقرب موعد.",
        ageGroupToggle: "استخدام الفئة العمرية بدلاً من تاريخ الميلاد",
        ageGroup: "الفئة العمرية",
        helpAgeGroup: "اختر فقط إذا لم ترغب بإدخال تاريخ الميلاد.",
        dob: "تاريخ الميلاد",
        helpDob: "يُستخدم لحساب الفئة العمرية.",
        lastVisit: "تاريخ آخر زيارة لطبيب العيون",
        helpLastVisit: "مثال: 2024-12-05. لا تقبل تاريخًا مستقبليًا.",
        errRequiredDate: "هذا الحقل إجباري. الرجاء إدخال تاريخ آخر زيارة.",
        errFutureDate: "لا يمكن أن يكون التاريخ في المستقبل.",
        errRequiredDob: "الرجاء إدخال تاريخ الميلاد أو اختر الفئة العمرية.",
        condHeader: "اختر الحالات/الظروف لديك",
        condHelper: "يمكنك اختيار أكثر من حالة؛ سنعرض أقرب موعد.",
        condSearchPh: "ابحث عن الحالة...",
        condClear: "مسح",
        actionsTitle: "أدوات النتيجة",
        extraHeader: "معلومات إضافية مطلوبة لبعض الحالات",
        hcqYears: "سنوات استخدام هيدروكسي كلوروكين/كلوروكين",
        helpHcq: "فحص سنوي بعد 5 سنوات من الاستخدام.",
        tamoxYears: "سنوات استخدام تاموكسيفين",
        tamoxHighDose: "جرعة مرتفعة",
        helpTamox: "فحص سنوي إذا المدة > 5 سنوات أو الجرعة مرتفعة.",
        tedActive: "نشِط حاليًا (مرض عين درقي)",
        helpTed: "نشِط: كل 3–6 أشهر. مستقر: سنوي.",
        t1Years: "سنوات منذ تشخيص سكري النوع الأول",
        helpT1: "يبدأ الفحص بعد 5 سنوات من التشخيص، ثم سنويًا.",
        btnCalc: "احسب الزيارة القادمة",
        btnReset: "إعادة ضبط",
        btnPrint: "طباعة/حفظ PDF",
        resultsTitle: "النتيجة",
        lastVisitShort: "تاريخ آخر زيارة",
        age: "العمر",
        ageGroupLabel: "الفئة العمرية",
        earliest: "أقرب موعد موصى به",
        noneAuto: "لا يوجد تاريخ محدد تلقائيًا — راجع التفاصيل.",
        basis: "الأساس",
        nextVisit: "الزيارة القادمة",
        window: "نافذة المتابعة",
        notes: "ملاحظات",
        disclaimer: "تنبيه: هذه أداة تثقيفية ولا تُغني عن التقييم الطبي.",
        footer: "تم عمل هذا الموقع من قبل سلطان الحسن، طبيب امتياز",
        adultsEnterDOB: "للبالغين بدون عوامل خطورة: الرجاء إدخال تاريخ الميلاد أو اختيار الفئة العمرية.",
        adultsUnder40: "بدون عوامل خطورة: الفحص الشامل عند عمر 40 سنة.",
        ruleExplain: "عند تعدد الحالات نستخدم أقرب موعد آمن حسب اختيارك.",
        earliestOnly: "عرض الأقرب فقط",
        copyShare: "نسخ/مشاركة",
        addCalendar: "إضافة إلى التقويم (.ics)",
        dueNow: "مستحق الآن",
        overdueBy: (d)=>`متأخر بـ ${d} يوم`,
        dueIn: (d)=>`متبقٍ ${d} يوم`,
        conds: {
          noRiskAdults: "بالغون بدون عوامل خطورة معروفة",
          healthyChildren: "أطفال أصحاء (فحوصات نظر روتينية أولية)",
          t1dm: "السكري النوع الأول (بالغون)",
          t2dm: "السكري النوع الثاني (بالغون)",
          dmPregnancy: "حمل مع سكري قائم (نوع 1 أو 2)",
          gdm: "سكري حملي",
          glauSuspect: "مشتبه ماء أزرق / ارتفاع ضغط العين",
          fhGlaucoma: "قرابة درجة أولى لمريض ماء أزرق (بدون اشتباه)",
          highMyopia: "قصر نظر شديد (≤ −6.0 D أو طول محوري > 26 مم)",
          hcq: "هيدروكسي كلوروكوين / كلوروكوين",
          tamox: "تاموكسيفين",
          ted: "مرض عين درقي (غريفز)"
        },
        explain: {
          ageRange: "40–54 سنة: كل 2–4 سنوات • 55–64: كل 1–3 سنوات • ≥65: كل 1–2 سنة",
          text: "لا حاجة لزيارة طبيب العيون إذا كانت فحوصات النظر الأولية طبيعية.",
          t1dm: "ابدأ بعد 5 سنوات من التشخيص، ثم سنويًا.",
          annual: "فحص سنوي.",
          pregnancyDM: "قبل الحمل والثلث الأول ثم كل ثلث؛ ما بعد الولادة حسب الطبيب.",
          gdm: "لا يلزم فحص اعتلال الشبكية أثناء الحمل؛ استأنف الجدول العمري بعد الولادة.",
          hcq: "فحص أساسي خلال سنة؛ سنوي بعد 5 سنوات من الاستخدام.",
          tamox: "أساسي في السنة الأولى؛ سنوي إذا >5 سنوات أو جرعات عالية؛ وإلا الجدول العمري.",
          thyroidEye: "كل 3–6 أشهر أثناء النشاط؛ سنوي بعد الاستقرار/اليوثيرويد."
        }
      },
      en: {
        title: "Ophthalmology Visit Scheduler",
        subtitle: "Select your conditions, enter DOB or age group and last visit date, and we’ll compute the next exam.",
        ageGroupToggle: "Use age group instead of date of birth",
        ageGroup: "Age group",
        helpAgeGroup: "Use this only if you prefer not to enter DOB.",
        dob: "Date of birth",
        helpDob: "Used to determine age group.",
        lastVisit: "Last ophthalmology visit date",
        helpLastVisit: "Example: 2024-12-05. Future dates are not allowed.",
        errRequiredDate: "This field is required. Please enter the last visit date.",
        errFutureDate: "Date cannot be in the future.",
        errRequiredDob: "Please enter date of birth or choose an age group.",
        condHeader: "Select your conditions",
        condHelper: "You can choose multiple; we’ll suggest the earliest due date.",
        condSearchPh: "Search condition...",
        condClear: "Clear",
        actionsTitle: "Result tools",
        extraHeader: "Additional info required for some conditions",
        hcqYears: "Years of hydroxychloroquine/chloroquine use",
        helpHcq: "Annual screening after 5 years of use.",
        tamoxYears: "Years of tamoxifen use",
        tamoxHighDose: "High dose",
        helpTamox: "Annual if >5 years or high dose.",
        tedActive: "Currently active (thyroid eye disease)",
        helpTed: "Active: every 3–6 months. Stable: annually.",
        t1Years: "Years since type 1 diabetes diagnosis",
        helpT1: "Begin 5 years after diagnosis, then annually.",
        btnCalc: "Calculate next visit",
        btnReset: "Reset",
        btnPrint: "Print / Save PDF",
        resultsTitle: "Result",
        lastVisitShort: "Last visit",
        age: "Age",
        ageGroupLabel: "Age group",
        earliest: "Earliest recommended",
        noneAuto: "No automatic date — see details below.",
        basis: "Basis",
        nextVisit: "Next visit",
        window: "Follow-up window",
        notes: "Notes",
        disclaimer: "Note: Educational tool; not a substitute for medical care.",
        footer: "This site was made by Sultan Alhassan, Medical Intern",
        adultsEnterDOB: "For adults without risk factors: enter DOB or choose an age group.",
        adultsUnder40: "Without risk factors: comprehensive eye exam at age 40.",
        ruleExplain: "If multiple conditions exist, the earliest safe interval is used.",
        earliestOnly: "Show only earliest",
        copyShare: "Copy / Share",
        addCalendar: "Add to Calendar (.ics)",
        dueNow: "Due now",
        overdueBy: (d)=>`Overdue by ${d} day${d===1?'':'s'}`,
        dueIn: (d)=>`Due in ${d} day${d===1?'':'s'}`,
        conds: {
          noRiskAdults: "Adults without known risk factors",
          healthyChildren: "Healthy children (primary vision screening)",
          t1dm: "Type 1 diabetes (adults)",
          t2dm: "Type 2 diabetes (adults)",
          dmPregnancy: "Pregnancy with pre‑existing diabetes (T1/T2)",
          gdm: "Gestational diabetes",
          glauSuspect: "Glaucoma suspect / ocular hypertension",
          fhGlaucoma: "First‑degree relative of a glaucoma patient (no personal suspicion)",
          highMyopia: "High myopia (≤ −6.0 D or axial length > 26 mm)",
          hcq: "Hydroxychloroquine / chloroquine",
          tamox: "Tamoxifen",
          ted: "Thyroid eye disease (Graves)"
        },
        explain: {
          ageRange: "40–54 yrs: every 2–4 yrs • 55–64: every 1–3 yrs • ≥65: every 1–2 yrs",
          text: "No routine ophthalmology visit is needed if primary vision screening is normal.",
          t1dm: "Begin 5 years after diagnosis, then annually.",
          annual: "Annual (every year).",
          pregnancyDM: "Before conception and first trimester; each trimester; postpartum per clinician.",
          gdm: "No retinopathy exam during pregnancy; resume age‑based routine after delivery.",
          hcq: "Baseline within first year; annually after 5 years of use.",
          tamox: "Baseline in year 1; annual if >5 years or high dose; otherwise age‑based routine.",
          thyroidEye: "Every 3–6 months while active; annually when stable/euthyroid."
        }
      }
    };

    // ===== Conditions metadata =====
    const CONDITIONS = [
      { id: 'noRiskAdults', type: 'ageRange' },
      { id: 'healthyChildren', type: 'text' },
      { id: 't1dm', type: 't1dm' },
      { id: 't2dm', type: 'annual' },
      { id: 'dmPregnancy', type: 'pregnancyDM' },
      { id: 'gdm', type: 'gdm' },
      { id: 'glauSuspect', type: 'annual' },
      { id: 'fhGlaucoma', type: 'annual' },
      { id: 'highMyopia', type: 'annual' },
      { id: 'hcq', type: 'hcq' },
      { id: 'tamox', type: 'tamox' },
      { id: 'ted', type: 'thyroidEye' },
    ];

    // ===== Utils =====
    function addYears(d, n){ const x=new Date(d); x.setFullYear(x.getFullYear()+n); return x; }
    function addMonths(d, n){ const x=new Date(d); x.setMonth(x.getMonth()+n); return x; }
    function fmt(date){ if(!(date instanceof Date) || isNaN(date)) return '—'; const d=String(date.getDate()).padStart(2,'0'); const m=String(date.getMonth()+1).padStart(2,'0'); const y=date.getFullYear(); return `${d}/${m}/${y}`; }
    function calcAgeYears(dob){ if(!dob) return null; const today=new Date(); let age=today.getFullYear()-dob.getFullYear(); const m=today.getMonth()-dob.getMonth(); if(m<0||(m===0&&today.getDate()<dob.getDate())) age--; return age; }
    function daysBetween(a,b){ const MS=24*60*60*1000; return Math.round((a.setHours(0,0,0,0)-b.setHours(0,0,0,0))/MS); }

    // ===== Theme =====
    const THEME_KEY = 'oph_theme';
    function setTheme(th){ const root=document.documentElement; if(th==='dark'){ root.classList.add('dark'); root.classList.remove('light'); } else { root.classList.remove('dark'); root.classList.add('light'); th='light'; } localStorage.setItem(THEME_KEY, th); }
    document.getElementById('theme-light').addEventListener('click', ()=> setTheme('light'));
    document.getElementById('theme-dark').addEventListener('click', ()=> setTheme('dark'));
    setTheme(localStorage.getItem(THEME_KEY) || 'light');

    // ===== Language =====
    let currentLang = 'ar';
    function t(path){ const obj = TR[currentLang]; const val = path.split('.').reduce((o,k)=> (o||{})[k], obj); return (typeof val==='function')? val : (val || ''); }
    function tp(path, ...args){ const fn = TR[currentLang]; let cur = fn; for(const k of path.split('.')) cur = (cur||{})[k]; return typeof cur==='function'? cur(...args) : cur; }

    // ===== Searchable multi-select for conditions =====
    const selectedIds = new Set();
    const chipsEl = document.getElementById('selectedChips');
    const searchEl = document.getElementById('condSearch');
    const dropdownEl = document.getElementById('condDropdown');
    const rootEl = document.getElementById('condMultiRoot');
    const clearBtn = document.getElementById('clearConds');

    function renderChips(){
      chipsEl.innerHTML = '';
      selectedIds.forEach(id => {
        const cond = CONDITIONS.find(c=>c.id===id);
        const chip = document.createElement('span');
        chip.className = 'chip';
        chip.innerHTML = `<span>${t(`conds.${id}`)}</span><button type="button" aria-label="remove" class="text-slate-500 hover:text-rose-600">×</button>`;
        chip.querySelector('button').onclick = () => { selectedIds.delete(id); renderChips(); renderDropdown(searchEl.value); toggleExtra(); };
        chipsEl.appendChild(chip);
      });
      clearBtn.classList.toggle('hidden', selectedIds.size===0);
    }

    function renderDropdown(filter=''){
      const f = filter.trim().toLowerCase();
      dropdownEl.innerHTML = '';
      CONDITIONS.filter(c => t(`conds.${c.id}`).toLowerCase().includes(f))
        .forEach(c => {
          const row = document.createElement('button');
          row.type = 'button';
          const checked = selectedIds.has(c.id);
          row.className = `w-full text-right px-3 py-2 border-b last:border-b-0 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 ${checked?'bg-indigo-50/60 dark:bg-indigo-900/30':''}`;
          row.innerHTML = `
            <div class="flex items-start gap-2">
              <input type="checkbox" ${checked?'checked':''} class="mt-1 pointer-events-none rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
              <div>
                <div class="font-medium">${t(`conds.${c.id}`)}</div>
                <div class="text-xs text-slate-500 dark:text-slate-400">${t(`explain.${c.type}`)}</div>
              </div>
            </div>`;
          row.onclick = () => { if(checked) selectedIds.delete(c.id); else selectedIds.add(c.id); renderChips(); renderDropdown(f); toggleExtra(); };
          dropdownEl.appendChild(row);
        });
    }

    function openDropdown(){ dropdownEl.classList.remove('hidden'); }
    function closeDropdown(){ dropdownEl.classList.add('hidden'); }

    document.getElementById('condControl').addEventListener('click', () => { openDropdown(); searchEl.focus(); });
    searchEl.addEventListener('input', (e)=> { renderDropdown(e.target.value); openDropdown(); });
    clearBtn.addEventListener('click', ()=> { selectedIds.clear(); renderChips(); renderDropdown(searchEl.value); toggleExtra(); });
    document.addEventListener('click', (e)=> { if(!rootEl.contains(e.target)) closeDropdown(); });

    function getSelectedConditions(){ return CONDITIONS.filter(c=> selectedIds.has(c.id)).map(c => ({...c, label: t(`conds.${c.id}`)})); }

    // ===== Age group toggle =====
    const ageGroupToggle = document.getElementById('ageGroupToggle');
    ageGroupToggle.addEventListener('change', () => {
      document.getElementById('dobWrap').classList.toggle('hidden', ageGroupToggle.checked);
      document.getElementById('ageGroupWrap').classList.toggle('hidden', !ageGroupToggle.checked);
    });

    // ===== Conditional fields visibility =====
    function sel(key){ return selectedIds.has(key); }
    const toggleExtra = () => {
      const any = sel('hcq') || sel('tamox') || sel('ted') || sel('t1dm');
      document.getElementById('conditionalFields').classList.toggle('hidden', !any);
      document.getElementById('extra-hcq').classList.toggle('hidden', !sel('hcq'));
      document.getElementById('extra-tamox').classList.toggle('hidden', !sel('tamox'));
      document.getElementById('extra-ted').classList.toggle('hidden', !sel('ted'));
      document.getElementById('extra-t1dm').classList.toggle('hidden', !sel('t1dm'));
    };

    // ===== Reset & Print =====
    function clearFieldError(inputId){ const input = document.getElementById(inputId); const err = document.getElementById(inputId+'Error'); if(input&&err){ err.textContent=''; err.classList.add('hidden'); input.classList.remove('invalid'); } }
    document.getElementById('resetBtn').addEventListener('click', () => {
      document.getElementById('schedulerForm').reset();
      selectedIds.clear(); renderChips(); renderDropdown('');
      document.getElementById('conditionalFields').classList.add('hidden');
      document.getElementById('resultsCard').classList.add('hidden');
      clearFieldError('lastVisit'); clearFieldError('dob');
    });
    document.getElementById('printBtn').addEventListener('click', () => window.print());

    // ===== Submit + validation =====
    function showFieldError(inputId, message){ const input = document.getElementById(inputId); const err = document.getElementById(inputId+'Error'); if(!(input&&err)) return; err.textContent = message; err.classList.remove('hidden'); input.classList.add('invalid'); input.scrollIntoView({ behavior:'smooth', block:'start' }); setTimeout(()=> input.focus({preventScroll:true}), 350); }

    document.getElementById('schedulerForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const today = new Date(); today.setHours(0,0,0,0);

      const lastVisitStr = document.getElementById('lastVisit').value;
      if(!lastVisitStr){ showFieldError('lastVisit', t('errRequiredDate')); return; } else { clearFieldError('lastVisit'); }
      const lastVisit = new Date(lastVisitStr);
      if (lastVisit > today){ showFieldError('lastVisit', t('errFutureDate')); return; } else { clearFieldError('lastVisit'); }

      let ageYears = null; let ageGroupLabel = '';
      if (ageGroupToggle.checked){
        const g = document.getElementById('ageGroup').value;
        if (g==='u40'){ ageYears = 30; ageGroupLabel = currentLang==='ar'?'< 40':'< 40'; }
        if (g==='40-54'){ ageYears = 45; ageGroupLabel = '40–54'; }
        if (g==='55-64'){ ageYears = 60; ageGroupLabel = '55–64'; }
        if (g==='>=65'){ ageYears = 70; ageGroupLabel = '≥65'; }
        clearFieldError('dob');
      } else {
        const dobStr = document.getElementById('dob').value;
        if(!dobStr){ showFieldError('dob', t('errRequiredDob')); return; } else { clearFieldError('dob'); }
        const dob = new Date(dobStr); ageYears = calcAgeYears(dob);
      }

      const selected = getSelectedConditions();
      if(selected.length === 0){ showOnlyGeneral(ageYears, ageGroupLabel, lastVisit); return; }

      const extras = { hcqYears: parseInt(document.getElementById('hcqYears')?.value || '0', 10), tamoxYears: parseInt(document.getElementById('tamoxYears')?.value || '0', 10), tamoxHighDose: !!document.getElementById('tamoxHighDose')?.checked, tedActive: !!document.getElementById('tedActive')?.checked, t1Years: parseInt(document.getElementById('t1Years')?.value || '0', 10) };

      const recommendations = []; const notes = [];

      selected.forEach(c => {
        switch(c.type){
          case 'annual': { const next = addYears(lastVisit, 1); recommendations.push({ id:c.id, label:c.label, nextDate: next, window: null, basis:t('explain.annual') }); break; }
          case 'ageRange': {
            if (ageYears < 40) { notes.push(t('adultsUnder40')); }
            else if (ageYears >= 40 && ageYears <= 54) { recommendations.push({ id:c.id, label:c.label, nextDate: addYears(lastVisit, 2), window: [addYears(lastVisit,2), addYears(lastVisit,4)], basis:t('explain.ageRange') + ' (40–54)' }); }
            else if (ageYears >= 55 && ageYears <= 64) { recommendations.push({ id:c.id, label:c.label, nextDate: addYears(lastVisit, 1), window: [addYears(lastVisit,1), addYears(lastVisit,3)], basis:t('explain.ageRange') + ' (55–64)' }); }
            else { recommendations.push({ id:c.id, label:c.label, nextDate: addYears(lastVisit, 1), window: [addYears(lastVisit,1), addYears(lastVisit,2)], basis:t('explain.ageRange') + ' (≥65)' }); }
            break; }
          case 'text': { notes.push(t('explain.text')); break; }
          case 't1dm': { if (isFinite(extras.t1Years) && extras.t1Years < 5){ notes.push(currentLang==='ar' ? 'سكري نوع أول: يبدأ فحص الشبكية بعد 5 سنوات من التشخيص (أو الآن إذا لم تُفحص سابقًا)، ثم سنويًا.' : 'Type 1 DM: start retinal screening 5 years after diagnosis (or now if never screened), then annually.'); } const next = addYears(lastVisit, 1); recommendations.push({ id:c.id, label:c.label, nextDate: next, window: null, basis: currentLang==='ar' ? 'سنوي بعد بدء المتابعة' : 'Annual once follow‑up starts' }); break; }
          case 'pregnancyDM': { notes.push(t('explain.pregnancyDM')); break; }
          case 'gdm': { notes.push(t('explain.gdm')); break; }
          case 'hcq': { if (extras.hcqYears >= 5){ const next = addYears(lastVisit, 1); recommendations.push({ id:c.id, label:c.label, nextDate: next, window: null, basis: currentLang==='ar'?'سنوي بعد 5 سنوات من الاستخدام':'Annual after 5 years of use' }); } else { notes.push(currentLang==='ar' ? 'استخدام HCQ/كوروكين أقل من 5 سنوات: اتبع الجدول العمري؛ قد يلزم أبكر إذا مرتفع الخطورة.' : 'HCQ/chloroquine <5 years: follow age‑based routine; earlier if high risk.'); } break; }
          case 'tamox': { if (extras.tamoxHighDose || extras.tamoxYears > 5){ const next = addYears(lastVisit, 1); recommendations.push({ id:c.id, label:c.label, nextDate: next, window: null, basis: currentLang==='ar'?'سنوي (>5 سنوات أو جرعات مرتفعة)':'Annual (>5 years or high dose)' }); } else { notes.push(currentLang==='ar' ? 'تاموكسيفين ≤ 5 سنوات وبدون جرعات مرتفعة: اتبع الجدول العمري.' : 'Tamoxifen ≤5 years and not high dose: follow age‑based routine.'); } break; }
          case 'thyroidEye': { if (extras.tedActive){ const early = addMonths(lastVisit, 3); const late  = addMonths(lastVisit, 6); recommendations.push({ id:c.id, label:c.label, nextDate: early, window:[early, late], basis: currentLang==='ar'?'كل 3–6 أشهر أثناء النشاط':'Every 3–6 months while active' }); } else { const next = addYears(lastVisit, 1); recommendations.push({ id:c.id, label:c.label, nextDate: next, window:null, basis: currentLang==='ar'?'سنوي بعد الاستقرار':'Annual when stable' }); } break; }
        }
      });

      const dated = recommendations.filter(r => r.nextDate instanceof Date && !isNaN(r.nextDate)).sort((a,b)=> a.nextDate - b.nextDate);
      const earliest = dated.length ? dated[0] : null;

      const resultsCard = document.getElementById('resultsCard'); const summary = document.getElementById('summary'); const details = document.getElementById('details'); const dueBanner = document.getElementById('dueBanner');
      resultsCard.classList.remove('hidden');

      let s = '';
      s += `<div class="text-sm text-slate-600 dark:text-slate-300">${t('lastVisitShort')}: <span class="font-medium">${fmt(lastVisit)}</span>`;
      if (ageYears!=null) s += ` • ${ageGroupToggle.checked ? t('ageGroupLabel') : t('age')}: <span class="font-medium">${ageGroupToggle.checked ? ageGroupLabel : ageYears}</span>`;
      s += `</div>`;

      if (earliest){
        s += `<div class="mt-2 text-lg">${t('earliest')}: <span class="font-semibold">${fmt(earliest.nextDate)}</span></div>`;
        const today0 = new Date(); today0.setHours(0,0,0,0); const diff = daysBetween(earliest.nextDate, today0);
        dueBanner.classList.remove('hidden');
        if (diff < 0){ dueBanner.className = 'mt-3 p-3 rounded-xl border text-sm bg-rose-50 dark:bg-rose-900/30 border-rose-200 dark:border-rose-700 text-rose-800 dark:text-rose-200'; dueBanner.textContent = tp('overdueBy', Math.abs(diff)); }
        else if (diff === 0){ dueBanner.className = 'mt-3 p-3 rounded-xl border text-sm bg-amber-50 dark:bg-amber-900/30 border-amber-200 dark:border-amber-700 text-amber-800 dark:text-amber-200'; dueBanner.textContent = t('dueNow'); }
        else { dueBanner.className = 'mt-3 p-3 rounded-xl border text-sm bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-700 text-emerald-800 dark:text-emerald-200'; dueBanner.textContent = tp('dueIn', diff); }
      } else { s += `<div class="mt-2 text-lg">${t('noneAuto')}</div>`; dueBanner.classList.add('hidden'); }
      summary.innerHTML = s;

      const earliestOnly = document.getElementById('earliestOnly').checked; const list = earliestOnly && earliest ? [earliest] : dated;
      details.innerHTML = '';
      list.forEach(r => {
        const row = document.createElement('div'); row.className = 'p-3 border rounded-xl bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600';
        const windowTxt = r.window ? `${t('window')}: ${fmt(r.window[0])} → ${fmt(r.window[1])}` : '';
        row.innerHTML = `<div class="font-medium">${r.label}</div>
          <div class="text-sm text-slate-700 dark:text-slate-300">${t('basis')}: ${r.basis}</div>
          <div class="text-sm">${t('nextVisit')}: <span class="font-semibold">${fmt(r.nextDate)}</span>${windowTxt?`<div class='text-xs text-slate-600 dark:text-slate-400 mt-1'>${windowTxt}</div>`:''}</div>`;
        details.appendChild(row);
      });

      resultsCard.scrollIntoView({ behavior: 'smooth', block: 'start' });

      document.getElementById('copyBtn').onclick = async () => {
        const conds = selected.map(s=>s.label).join(' • ');
        const msg = `${t('resultsTitle')}: ${earliest?fmt(earliest.nextDate):'-'}
${t('lastVisitShort')}: ${fmt(lastVisit)}
${t('age')}: ${ageYears!=null?(ageGroupToggle.checked?ageGroupLabel:ageYears):'-'}
${t('condHeader')}: ${conds}`;
        if (navigator.share){ try{ await navigator.share({ title: document.title, text: msg }); } catch(e){} }
        try { await navigator.clipboard.writeText(msg); alert(currentLang==='ar'?'تم النسخ.':'Copied.'); } catch(e){}
      };

      document.getElementById('icsBtn').onclick = () => {
        if(!earliest) return; const dt = earliest.nextDate; const y = dt.getFullYear(); const m = String(dt.getMonth()+1).padStart(2,'0'); const d = String(dt.getDate()).padStart(2,'0'); const ymd = `${y}${m}${d}`;
        const conds = selected.map(s=>s.label).join(', ');
        const title = currentLang==='ar' ? 'موعد فحص عيون موصى به' : 'Recommended ophthalmology visit';
        const desc = (currentLang==='ar' ? 'مبني على الحالات: ' : 'Based on conditions: ') + conds;
        const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//OphthoScheduler//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
UID:${Date.now()}@ophtho
DTSTAMP:${ymd}T080000Z
DTSTART;VALUE=DATE:${ymd}
SUMMARY:${title}
DESCRIPTION:${desc}
END:VEVENT
END:VCALENDAR`;
        const blob = new Blob([ics], {type:'text/calendar;charset=utf-8'}); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'ophthalmology-visit.ics'; a.click(); URL.revokeObjectURL(url);
      };
    });

    function showOnlyGeneral(ageYears, ageGroupLabel, lastVisit){
      const resultsCard = document.getElementById('resultsCard'); const summary = document.getElementById('summary'); const details = document.getElementById('details'); const dueBanner = document.getElementById('dueBanner');
      resultsCard.classList.remove('hidden');
      let s = `<div class=\"text-sm text-slate-600 dark:text-slate-300\">${t('lastVisitShort')}: <span class=\"font-medium\">${fmt(lastVisit)}</span>`;
      if (ageYears!=null) s += ` • ${t('age')}: <span class=\"font-medium\">${ageGroupLabel||ageYears}</span>`; s += `</div>`;
      let blocks = '';
      if (ageYears < 40){ s += `<div class="mt-2">${t('adultsUnder40')}</div>`; }
      else if (ageYears <= 54){ s += `<div class="mt-2 text-lg">${t('window')}: <span class="font-semibold">${fmt(addYears(lastVisit,2))}</span> → <span class="font-semibold">${fmt(addYears(lastVisit,4))}</span></div>`; blocks += block(t('conds.noRiskAdults') + ' (40–54)', t('explain.ageRange'), addYears(lastVisit,2), [addYears(lastVisit,2), addYears(lastVisit,4)]); }
      else if (ageYears <= 64){ s += `<div class="mt-2 text-lg">${t('window')}: <span class="font-semibold">${fmt(addYears(lastVisit,1))}</span> → <span class="font-semibold">${fmt(addYears(lastVisit,3))}</span></div>`; blocks += block(t('conds.noRiskAdults') + ' (55–64)', t('explain.ageRange'), addYears(lastVisit,1), [addYears(lastVisit,1), addYears(lastVisit,3)]); }
      else { s += `<div class="mt-2 text-lg">${t('window')}: <span class="font-semibold">${fmt(addYears(lastVisit,1))}</span> → <span class="font-semibold">${fmt(addYears(lastVisit,2))}</span></div>`; blocks += block(t('conds.noRiskAdults') + ' (≥65)', t('explain.ageRange'), addYears(lastVisit,1), [addYears(lastVisit,1), addYears(lastVisit,2)]); }
      summary.innerHTML = s; dueBanner.classList.add('hidden'); details.innerHTML = blocks; resultsCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function block(title, basis, nextDate, window){ const windowTxt = window ? `${t('window')}: ${fmt(window[0])} → ${fmt(window[1])}` : ''; return `<div class="p-3 border rounded-xl bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600">
        <div class="font-medium">${title}</div>
        <div class="text-sm text-slate-700 dark:text-slate-300">${t('basis')}: ${basis}</div>
        <div class="text-sm">${t('nextVisit')}: <span class="font-semibold">${fmt(nextDate)}</span>${window?`<div class='text-xs text-slate-600 dark:text-slate-400 mt-1'>${windowTxt}</div>`:''}</div>
      </div>`; }

    // Language toggle
    function setLang(lang){
      currentLang = lang; document.documentElement.lang = lang==='ar'?'ar':'en'; document.documentElement.dir = lang==='ar'?'rtl':'ltr';
      document.getElementById('title').textContent = t('title');
      document.getElementById('subtitle').textContent = t('subtitle');
      document.getElementById('lblAgeGroupToggle').textContent = t('ageGroupToggle');
      document.getElementById('lblDob').textContent = t('dob');
      document.getElementById('helpDob').textContent = t('helpDob');
      document.getElementById('lblLastVisit').textContent = t('lastVisit');
      document.getElementById('helpLastVisit').textContent = t('helpLastVisit');
      document.getElementById('condHeader').textContent = t('condHeader');
      document.getElementById('condHelper').textContent = t('condHelper');
      document.getElementById('extraHeader').textContent = t('extraHeader');
      document.getElementById('lblHcqYears').textContent = t('hcqYears');
      document.getElementById('helpHcq').textContent = t('helpHcq');
      document.getElementById('lblTamoxYears').textContent = t('tamoxYears');
      document.getElementById('lblTamoxHighDose').textContent = t('tamoxHighDose');
      document.getElementById('helpTamox').textContent = t('helpTamox');
      document.getElementById('lblTedActive').textContent = t('tedActive');
      document.getElementById('helpTed').textContent = t('helpTed');
      document.getElementById('lblT1Years').textContent = t('t1Years');
      document.getElementById('helpT1').textContent = t('helpT1');
      document.getElementById('btnCalc').textContent = t('btnCalc');
      document.getElementById('resetBtn').textContent = t('btnReset');
      document.getElementById('printBtn').textContent = t('btnPrint');
      document.getElementById('resultsTitle').textContent = t('resultsTitle');
      document.getElementById('ruleExplain').textContent = t('ruleExplain');
      document.getElementById('footerText').textContent = t('footer');
      document.getElementById('lblEarliestOnly').textContent = t('earliestOnly');
      document.getElementById('copyBtn').textContent = t('copyShare');
      document.getElementById('icsBtn').textContent = t('addCalendar');
      document.getElementById('actionsTitle').textContent = t('actionsTitle');
      document.getElementById('lblAgeGroup').textContent = t('ageGroup');
      document.getElementById('helpAgeGroup').textContent = t('helpAgeGroup');
      searchEl.placeholder = t('condSearchPh');
      clearBtn.textContent = t('condClear');
      renderDropdown(searchEl.value); renderChips(); toggleExtra();
    }

    document.getElementById('lang-ar').addEventListener('click', () => setLang('ar'));
    document.getElementById('lang-en').addEventListener('click', () => setLang('en'));
    document.getElementById('earliestOnly').addEventListener('change', () => { const form = document.getElementById('schedulerForm'); form.dispatchEvent(new Event('submit')); });

    // Initialize
    renderDropdown(''); renderChips(); setLang('ar');
  </script>
