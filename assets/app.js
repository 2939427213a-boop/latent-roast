/* Latent Roast · shared renderer (no dependencies). Content lives in data/data.js */
(function () {
  'use strict';
  const D = window.LR_DATA;
  const app = document.getElementById('app');
  const page = document.body.dataset.page;
  if (!D) { app.innerHTML = '<p style="padding:40px 0">没有读到 data/data.js。请检查文件是否存在，再检查语法是否正确。</p>'; return; }

  /* ---------- helpers ---------- */
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const H = s => (s == null ? '' : s); // trusted inline HTML (gear / recipe fields)
  const inline = s => esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
    .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2">$1</a>');
  const md = src => String(src || '').trim().split(/\n\s*\n/).map(block => {
    const lines = block.split('\n');
    if (lines.every(l => /^\s*-\s+/.test(l))) return '<ul>' + lines.map(l => '<li>' + inline(l.replace(/^\s*-\s+/, '')) + '</li>').join('') + '</ul>';
    const head = lines[0], rest = lines.slice(1);
    if (rest.length && rest.every(l => /^\s*-\s+/.test(l))) return '<p>' + inline(head) + '</p><ul>' + rest.map(l => '<li>' + inline(l.replace(/^\s*-\s+/, '')) + '</li>').join('') + '</ul>';
    return '<p>' + lines.map(inline).join('<br>') + '</p>';
  }).join('');
  const d0 = new Date();
  const today = `${d0.getFullYear()}-${String(d0.getMonth() + 1).padStart(2, '0')}-${String(d0.getDate()).padStart(2, '0')}`;
  const bean = id => (D.beans || []).find(b => b.id === id) || { name: id };
  const days = (a, b) => (!a || !b) ? null : Math.round((new Date(b) - new Date(a)) / 864e5);
  const brews = (D.brews || []).map(b => { const bn = bean(b.bean); return { ...b, bn, rd: b.date ? days(bn.roastDate, b.date) : null }; });
  const sec = (id, title, sub, body) => `<section id="${id}" aria-labelledby="${id}-h"><div class="sec-title"><h2 id="${id}-h">${title}</h2>${sub ? `<small>${sub}</small>` : ''}</div>${body}</section>`;
  const alertIc = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l9.5 17H2.5L12 3z"/><path d="M12 10v4M12 17h.01"/></svg>';

  /* ---------- nav + footer ---------- */
  const pages = [
    ['index', 'index.html', 'Morning Gradient'],
    ['brew-today', 'brew-today.html', '冲煮日记'],
    ['brews', 'brews.html', '全部记录'],
    ['gear', 'gear.html', '装备'],
    ['research', 'research.html', '市场研究']
  ];
  document.getElementById('nav').innerHTML = `<div class="wrap">
    <a class="brand" href="index.html">${esc(D.meta.title)}</a>
    <ul>${pages.map(([k, href, label]) => `<li><a href="${href}" class="${k === 'gear' ? 'gear-link' : ''}${k === page ? ' active' : ''}"${k === page ? ' aria-current="page"' : ''}>${label}</a></li>`).join('')}</ul></div>`;
  document.getElementById('foot').innerHTML = `${esc(D.meta.title)} · ${esc(D.meta.subtitle || '')} · 最后更新 ${esc(D.meta.updated)} · <a href="about.html"${page === 'about' ? ' aria-current="page"' : ''}>关于（记录方法 · 更新日志）</a>`;

  if (page === 'research') document.getElementById('foot').insertAdjacentHTML('beforeend', ' <span>本页风格：Hermes Design · 致敬 <a href="https://nousresearch.com">Nous Research</a> 的 Hermes / LENS 设计系统。字体：JetBrains Mono（OFL）+ 系统中文字体。</span>');

  const pageHead = (title, sub) => `<header class="brandhead"><h1>${title}</h1>${sub ? `<p>${sub}</p>` : ''}</header>`;

  /* ---------- Morning Gradient (card direction A: one watercolor vignette + speech bubbles) ---------- */
  const mgDefs = `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">
    <filter id="mgRough"><feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="2" seed="7"/><feDisplacementMap in="SourceGraphic" scale="4"/></filter>
    <filter id="mgWash" x="-20%" y="-20%" width="140%" height="140%"><feTurbulence type="fractalNoise" baseFrequency=".018" numOctaves="3" seed="4"/><feDisplacementMap in="SourceGraphic" scale="26"/><feGaussianBlur stdDeviation="1.2"/></filter>
    <filter id="mgInk"><feTurbulence type="fractalNoise" baseFrequency=".05" numOctaves="2" seed="2"/><feDisplacementMap in="SourceGraphic" scale="3"/></filter></svg>`;
  const nb = s => inline(s).replace(/\n/g, '<br>');
  function placeholder(e) {
    return `<div class="ill-ph" role="img" aria-label="配图占位：${esc(e.branch)} · ${esc(e.level)}">
      <svg viewBox="0 0 240 135" aria-hidden="true"><rect width="240" height="135" fill="#E6ECDF"/>
      <g fill="none" stroke="#3E5C49" stroke-width="1.6" stroke-linecap="round" opacity=".75" filter="url(#mgInk)"><path d="M92 40h56l-17 27h-22z"/><path d="M103 77h34"/><path d="M120 67v10"/><path d="M108 88h24"/></g></svg>
      <span>配图待添加</span></div>`;
  }
  function illustration(e) {
    const bubbles = (e.bubbles || []).slice(0, 2).map(b => `<div class="mg-bub ${b.tail === 'right' ? 'tr' : 'tl'}" style="left:${+b.x || 0}%;top:${+b.y || 0}%">${nb(b.text)}
      <svg class="tail" viewBox="0 0 60 60" aria-hidden="true"><path d="M8 2 C 20 22, 30 38, 44 56 C 36 34, 32 18, 32 2" fill="#FBF8F0" stroke="#1F2A23" stroke-width="2.4" stroke-linejoin="round" filter="url(#mgInk)"/></svg></div>`).join('');
    if (!e.image) return `<figure class="mg-art">${placeholder(e)}</figure>`;
    const ph = placeholder(e);
    return `<figure class="mg-art" data-ph="${esc(ph)}"><div class="mg-pic"><img src="${esc(e.image)}" alt="${esc(e.image_alt || e.title + ' 配图')}" onerror="var f=this.closest('figure');f.innerHTML=f.dataset.ph"></div>${bubbles}</figure>`;
  }
  function lessonCard(e, isToday) {
    const tag = e.tag === '示例' ? '<span class="tagx">示例</span>' : (e.tag ? `<span class="tagt">${esc(e.tag)}</span>` : '');
    const title = esc(e.title).replace(/[？?]\s*$/, '<span class="q">?</span>');
    const grad = (e.gradient && e.gradient.steps || []).map(g => `<span class="dot" style="background:${esc(g.color)}"></span>${esc(g.label)}`).join('<span class="arr">→</span>');
    return `<article class="mgA">${mgDefs}
      <header class="mast"><span class="mg-brand">Morning Gradient <span class="dt">· ${esc(e.date)}${isToday ? '' : '（最新一课）'}</span></span>
        <span class="meta">${e.code ? `<i>${esc(e.code)}</i> · ` : ''}${esc(e.branch)} · ${esc(e.level)} · 第 ${esc(e.lesson_no)} 课 ${tag}</span></header>
      <svg class="rule" viewBox="0 0 1056 10" preserveAspectRatio="none" aria-hidden="true"><path d="M2 6 C 200 3, 420 8, 640 5 S 940 4, 1054 6" stroke="#2F4A3A" stroke-width="2" fill="none" filter="url(#mgInk)" vector-effect="non-scaling-stroke"/></svg>
      ${illustration(e)}
      <h3 id="lesson-h">${title}</h3>
      <svg class="under" viewBox="0 0 560 26" preserveAspectRatio="none" aria-hidden="true"><path d="M6 16 C 120 6, 260 22, 400 12 S 520 10, 552 14" stroke="#9CAF94" stroke-width="7" stroke-linecap="round" fill="none" filter="url(#mgInk)" opacity=".8"/></svg>
      <div class="mg-low">
        <div class="mg-txt">
          <p class="lede">${inline(e.summary)}</p>
          ${grad ? `<div class="order"><div class="olab">${esc(e.gradient.label || '')}</div><div class="row">${grad}</div></div>` : ''}
        </div>
        ${e.try_today ? `<aside class="note" aria-label="今天试试"><div class="lab">今 天 试 试</div>${e.try_big ? `<div class="big">${esc(e.try_big).replace(/→/, '<span>→</span>')}</div>` : ''}<p>${nb(e.try_today)}</p></aside>` : ''}
      </div>
      <button class="expand" type="button" aria-expanded="false" aria-controls="full">展开全文</button>
      <div id="full" class="full" hidden>
        <div class="md">${md(e.body)}</div>
        ${(e.takeaways || []).length ? `<h4>要点</h4><ul class="take">${e.takeaways.map(t => `<li>${inline(t)}</li>`).join('')}</ul>` : ''}
        ${(e.sources || []).length ? `<h4>来源</h4><ul class="srcs">${e.sources.map(s => `<li><a href="${esc(s.url)}">${esc(s.label || s.url)}</a>${s.reliability ? ` <span class="rel">· 可靠度：${esc(s.reliability)}</span>` : ''}</li>`).join('')}</ul>` : ''}
      </div>
    </article>`;
  }
  function renderIndex() {
    const C = D.curriculum || { levels: [], branches: [] };
    const all = [...(D.daily || [])].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : (b.lesson_no || 0) - (a.lesson_no || 0)));
    const cur = all.find(x => x.date === today) || all[0];
    let html = pageHead(esc(D.meta.title), esc(D.meta.subtitle));
    html += cur ? `<section id="today" aria-labelledby="lesson-h" class="first">${lessonCard(cur, cur.date === today)}</section>`
                : `<section class="first"><div class="card">还没有课程。请在 data/data.js 的 daily 里添加第一课。</div></section>`;

    // branch map
    const cell = (b, l) => all.filter(x => x.branch === b && x.level === l);
    const per = C.perCell || 2;
    let next = C.next;
    if (!next && cur) {
      const li = C.levels.indexOf(cur.level);
      next = cell(cur.branch, cur.level).length >= per && li < C.levels.length - 1 ? { branch: cur.branch, level: C.levels[li + 1] } : { branch: cur.branch, level: cur.level };
    }
    const doneCount = C.branches.reduce((n, b) => n + C.levels.filter(l => cell(b.name, l).length).length, 0);
    html += sec('map', '课程地图', `${C.branches.length} 分支 × ${C.levels.length} 级别 · 每格 ${per} 课 · 已开始 ${doneCount} / ${C.branches.length * C.levels.length} 格`, `
      <div class="card map-card"><div class="map-scroll"><table class="map"><colgroup><col class="c-b">${C.levels.map(()=>"<col>").join("")}</colgroup>
        <thead><tr><th scope="col">分支</th>${C.levels.map(l => `<th scope="col">${esc(l)}</th>`).join('')}</tr></thead>
        <tbody>${C.branches.map(b => `<tr><th scope="row"><b>${b.code ? `<span class="bc">${esc(b.code)}</span>` : ''}${esc(b.name)}</b><small>${esc(b.desc || '')}</small></th>${C.levels.map(l => {
          const n = cell(b.name, l).length, isNext = next && next.branch === b.name && next.level === l;
          const cls = n ? 'done' : (isNext ? 'next' : 'todo');
          const label = n ? `✓ ${n}/${per}` : (isNext ? '下一步' : '');
          return `<td class="${cls}${isNext && n ? ' next' : ''}"><span>${label}</span></td>`;
        }).join('')}</tr>`).join('')}</tbody></table></div>
        <div class="legend"><span><i class="lg done"></i>已学</span><span><i class="lg prog"></i>进行中</span><span><i class="lg next"></i>下一步</span><span><i class="lg todo"></i>未开始</span></div>
      </div>`);

    // archive
    const branches = [...new Set(all.map(x => x.branch))];
    html += sec('archive', '往期', `${all.length} 课`, `
      <div class="filters" role="group" aria-label="按分支筛选"><button type="button" class="f on" data-b="" aria-pressed="true">全部</button>${branches.map(b => `<button type="button" class="f" data-b="${esc(b)}" aria-pressed="false">${esc(b)}</button>`).join('')}</div>
      <ul class="archive">${all.map(x => `<li data-b="${esc(x.branch)}"><span class="d">${esc(x.date)}</span><span class="pill-s">${x.code ? esc(x.code) + ' · ' : ''}${esc(x.branch)} · ${esc(x.level)}</span><b>${esc(x.title)}</b>${x.tag === '示例' ? ' <span class="tagx sm">示例</span>' : ''}<p>${inline(x.summary)}</p></li>`).join('')}</ul>`);
    app.innerHTML = html;

    const btn = app.querySelector('.expand'), full = document.getElementById('full');
    const toggle = (open) => { full.hidden = !open; btn.setAttribute('aria-expanded', String(open)); btn.textContent = open ? '收起全文' : '展开全文'; };
    if (btn) { btn.addEventListener('click', () => toggle(full.hidden)); if (location.hash === '#full') toggle(true); }
    app.querySelectorAll('.f').forEach(f => f.addEventListener('click', () => {
      app.querySelectorAll('.f').forEach(x => { x.classList.toggle('on', x === f); x.setAttribute('aria-pressed', String(x === f)); });
      app.querySelectorAll('.archive li').forEach(li => { li.hidden = !!f.dataset.b && li.dataset.b !== f.dataset.b; });
    }));
  }

  /* ---------- brew today ---------- */
  function renderBrewToday() {
    const R = D.recipe, B = bean(R.bean), rest = days(B.roastDate, today), ratio = (R.water / R.dose).toFixed(1);
    const todays = brews.filter(b => b.date === today && b.status === 'done');
    const result = todays.length
      ? todays.map(b => `<div class="today-result has"><h4>今天已冲 · 第 ${b.n} 杯</h4><div><b>S3 ${esc(b.grind)}</b> · ${b.tempC} °C · ${b.dose}/${b.water} g · 总时间 <b>${esc(b.time)}</b>${b.rd != null ? ` · 养豆第 ${b.rd} 天` : ''}</div><div>${esc(b.taste)}${b.diagnosis ? ` → <span class="diag">${esc(b.diagnosis)}</span>` : ''}</div>${b.next ? `<div style="color:var(--muted)">下次改：${esc(b.next)}</div>` : ''}</div>`).join('')
      : `<div class="today-result"><h4>今天的结果</h4><div style="color:var(--muted)">还没有记录。冲完后，请把 S3 刻度、总时间和口感告诉我。我会把它们加到记录里。</div></div>`;
    app.innerHTML = pageHead('今天的冲煮日记', today) + `<section class="first">
    <article class="card recipe">
      <div class="recipe-head"><div><h3>${esc(B.name)} · ${esc(R.label)}</h3><div class="bean">${esc(B.roaster)} · ${esc(B.type)} · <span class="nw">烘焙日期 ${esc(B.roastDate)}</span>${rest != null ? ` · <span class="nw">今天是养豆第 ${rest} 天</span>` : ''}</div></div></div>
      <div class="recipe-body">
        <div class="params">
          <div class="param"><div class="k">粉重</div><div class="v">${R.dose}<small> g</small></div></div>
          <div class="param"><div class="k">水量</div><div class="v">${R.water}<small> g</small></div><div class="d">1 : ${ratio}</div></div>
          <div class="param"><div class="k">水温</div><div class="v">${R.tempC}<small> °C</small></div></div>
          <div class="param key"><div class="k">S3 刻度</div><div class="v">${esc(R.grind)}</div><div class="d">上一杯 ${esc(R.grindPrev)} → 调细</div></div>
          <div class="param"><div class="k">目标总时间</div><div class="v sm" style="font-size:22px">${esc(R.target)}</div></div>
        </div>
        <p class="why">${H(R.why)}</p>
        <div class="two">
          <div><h4>冲煮前准备</h4><ol class="prep">${R.prep.map(p => `<li>${H(p)}</li>`).join('')}</ol></div>
          <div><h4>注水时间表</h4>
            <table class="tl"><thead><tr><th scope="col">计时器读数<br><small>（开始时刻）</small></th><th scope="col">动作</th><th scope="col">秤上累计重量</th></tr></thead>
            <tbody>${R.timeline.map(r => `<tr class="${r.kind}"><td class="t">${r.t}</td><td>${H(r.action)}</td><td class="w">${r.total}</td></tr>`).join('')}</tbody></table>
            <div class="phase" role="img" aria-label="0:00 到约 1:50 是注水阶段，约 1:50 到 3:15 是滴滤阶段"><div class="p1">注水 0:00–≈1:50</div><div class="p2">滴滤 ≈1:50–3:15</div></div>
            <div class="axis" aria-hidden="true">${[0, 40, 70, 100, 195].map(x => `<span style="left:${(x / 195 * 100).toFixed(1)}%">${Math.floor(x / 60)}:${String(x % 60).padStart(2, '0')}</span>`).join('')}</div>
            <div class="note" role="note">${alertIc}<div>${H(R.pourNote)}</div></div>
          </div>
        </div>
        <h4>喝完后，这样调下一杯</h4>
        <div class="ifthen">${R.ifThen.map(x => `<div><div class="if">如果 ${H(x.if)}</div><div class="then">→ ${H(x.then)}</div></div>`).join('')}</div>
      </div>
    </article>${result}</section>`;
  }

  /* ---------- all brews ---------- */
  function renderBrews() {
    const rows = [...brews].reverse();
    app.innerHTML = pageHead('全部冲煮记录', `共 ${brews.filter(b => b.status === 'done').length} 杯 · 一次只改一个变量`) + `<section class="first"><div class="card">
      <div class="log-wrap"><table class="log">
        <thead><tr><th scope="col">#</th><th scope="col">日期</th><th scope="col">豆子 · 养豆天数</th><th scope="col">S3</th><th scope="col">水温</th><th scope="col">粉/水</th><th scope="col">总时间</th><th scope="col">口感 → 判断</th><th scope="col">下次改</th></tr></thead>
        <tbody>${rows.map(b => `<tr class="${b.status}"><td class="num">${b.n}</td><td>${b.date || '—'}<br><span class="status ${b.status}">${b.status === 'done' ? '已冲' : '计划'}</span></td><td>${esc(b.bn.name)}${b.rd != null ? `<br><small>第 ${b.rd} 天</small>` : ''}</td><td><b>${esc(b.grind)}</b></td><td>${b.tempC} °C</td><td>${b.dose}/${b.water}</td><td>${esc(b.time)}</td><td class="wrap">${esc(b.taste) || '—'}${b.diagnosis ? ` → <span class="diag">${esc(b.diagnosis)}</span>` : ''}</td><td>${esc(b.next) || '—'}</td></tr>`).join('')}</tbody>
      </table></div>
      <div class="logcards">${rows.map(b => `<div class="lc"><div class="top"><b>#${b.n} · S3 ${esc(b.grind)}</b><span class="status ${b.status}">${b.status === 'done' ? '已冲 ' + b.date : '计划'}</span></div><div class="kv">${esc(b.bn.name)}${b.rd != null ? ` · 第 ${b.rd} 天` : ''} · ${b.tempC} °C · ${b.dose}/${b.water} · ${esc(b.time)}</div>${b.taste ? `<div>${esc(b.taste)} → <span class="diag">${esc(b.diagnosis)}</span></div>` : ''}${b.next ? `<div class="kv">下次改：${esc(b.next)}</div>` : ''}</div>`).join('')}</div>
      <h4>待办</h4>
      <ul class="todos">${(D.todos || []).map(t => `<li class="${t.done ? 'done' : ''}"><span class="box" aria-hidden="true">${t.done ? '✓' : ''}</span><span>${t.done ? '<span class="sr">已完成：</span>' : ''}${H(t.text)}</span></li>`).join('')}</ul>
    </div></section>`;
  }

  /* ---------- gear ---------- */
  const keymap = `<svg class="keymap" viewBox="0 0 200 120" role="img" aria-label="秤面按键位置：左下时钟为 Timer，右上饼图为 Ratio，右下电源为 TARE" fill="none" stroke="#2F4A3A" stroke-width="1.5" stroke-linecap="round">
    <rect x="2" y="2" width="196" height="116" rx="10" fill="#F7F4EC"/><rect x="34" y="40" width="112" height="44" rx="6" stroke="#9CAF94" stroke-dasharray="3 3"/>
    <text x="90" y="66" text-anchor="middle" font-size="11" fill="#56615A" stroke="none">显示屏</text>
    <circle cx="178" cy="30" r="9"/><path d="M178 21a9 9 0 0 1 9 9h-9z" fill="#2F4A3A"/><circle cx="22" cy="96" r="9"/><path d="M22 90v6h4"/><circle cx="178" cy="96" r="9"/><path d="M178 89v7"/>
    <text x="164" y="34" text-anchor="end" font-size="10" fill="#2F4A3A" stroke="none" font-weight="700">Ratio</text><text x="36" y="100" font-size="10" fill="#2F4A3A" stroke="none" font-weight="700">Timer</text><text x="164" y="100" text-anchor="end" font-size="10" fill="#2F4A3A" stroke="none" font-weight="700">TARE</text></svg>`;
  function renderGear() {
    app.innerHTML = pageHead('我的装备', (D.gear || []).map(g => esc(g.name)).join(' · ')) + `<section class="first"><div class="gear">${D.gear.map(g => `
      <article class="card" id="gear-${g.id}">
        <div class="g-head"><h3>${esc(g.name)}</h3>${g.badge ? `<span class="badge">${esc(g.badge)}</span>` : ''}</div>
        <div class="g-sub">${H(g.sub)}</div>${g.keymap ? keymap : ''}
        <dl class="quick">${g.quick.map(([k, v]) => `<dt>${k}</dt><dd>${H(v)}</dd>`).join('')}</dl>
        <details><summary>更多细节</summary>${g.details.map(d => `<div class="d-item"><b class="h">${d.h}</b>${d.table ? `<table>${d.table.map(r => `<tr><td>${r[0]}</td><td><b>${r[1]}</b></td></tr>`).join('')}</table>` : `<div>${H(d.p)}</div>`}</div>`).join('')}</details>
      </article>`).join('')}</div></section>`;
    const m = location.hash.match(/^#gear-(.+)/); if (m) { const el = document.getElementById('gear-' + m[1]); if (el) el.querySelector('details').open = true; }
  }

  /* ---------- about ---------- */
  function renderAbout() {
    const M = D.method;
    app.innerHTML = pageHead('关于', '记录方法 · 更新日志') + `
    <section class="first" id="method" aria-labelledby="method-h"><div class="sec-title"><h2 id="method-h">怎么记录才有用</h2><small>研究结论 · 精简版</small></div>
      <div class="card"><p><b style="color:var(--forest)">${H(M.summary)}</b></p>
        <h4>每杯最少记这些（30 秒）</h4><div class="chips">${M.minimal.map(c => `<span class="chip">${c}</span>`).join('')}</div>
        <h4>每袋豆子</h4><div class="chips">${M.perBag.map(c => `<span class="chip">${c}</span>`).join('')}</div>
        <h4>长期最有价值的数据</h4><ul class="plain">${M.compound.map(x => `<li>${H(x)}</li>`).join('')}</ul>
        <details><summary>常见坑 · 工具 · 来源</summary>
          <h4>常见坑</h4><ul class="plain">${M.pitfalls.map(x => `<li>${H(x)}</li>`).join('')}</ul>
          <h4>工具</h4><ul class="plain">${M.tools.map(t => `<li><b>${t.name}</b>${t.rec ? '（推荐）' : ''}：${t.desc}${t.url ? ` <a href="${t.url}">链接</a>` : ''}</li>`).join('')}</ul>
          <h4>来源</h4><ul class="plain">${M.sources.map(([n, u]) => `<li><a href="${u}">${n}</a></li>`).join('')}<li>X 上的内容大多是 App 推广，方法论很少。</li></ul>
        </details></div></section>
    ${sec('changelog', '更新日志', '', `<div class="card"><ul class="cl">${D.changelog.map(c => `<li><span class="date">${c.date}</span><ul>${c.items.map(i => `<li>${H(i)}</li>`).join('')}</ul></li>`).join('')}</ul></div>`)}`;
  }


  /* ---------- research (Hermes Design skin; homage to Nous Research) ---------- */
  function renderResearch() {
    const R = D.research;
    if (!R) { app.innerHTML = '<p style="padding:40px 0">data.js 里没有 research 数据。</p>'; return; }
    const S = {}; (R.sources || []).forEach(x => { S[x.id] = x; });
    const refA = id => S[id] ? `<sup class="ref"><a href="${esc(S[id].url)}" title="${esc(S[id].label)}">${esc(id)}</a></sup>` : '';
    const rt = s => inline(s).replace(/\[((?:S|X)\d+)\]/g, (m, id) => refA(id) || m);
    const refs = ids => (ids || []).map(refA).join('');
    const arc = '<span class="arc-border" aria-hidden="true"></span>';
    const hsec = (id, n, en, zh, body) => `<section class="h-sec" id="${id}" aria-labelledby="${id}-h"><header><span class="num">${n} · ${en}</span><h2 id="${id}-h">${zh}</h2></header>${body}</section>`;
    const P = R.players || [];
    app.innerHTML = `
    <header class="h-hero">
      <div class="eyebrow">◆ ${esc(R.kicker)}</div>
      <h1>${esc(R.title)}<span class="blink" aria-hidden="true"></span></h1>
      <p class="lede">${rt(R.lede)}</p>
      <div class="h-meta">
        <span><span class="k">Date</span>${esc(R.date)} ET</span>
        <span><span class="k">Players</span>${P.length}</span>
        <span><span class="k">Sources</span>${(R.sources || []).length}</span>
        ${R.notion ? `<span><span class="k">Notion</span><a href="${esc(R.notion)}">Market Notes ↗</a></span>` : ''}
        <span class="theme-cell"><span class="k">Theme</span><button class="h-toggle" type="button" aria-label="切换主题" onclick="toggleLens()"><span class="h-knob"></span></button></span>
      </div>
      <p class="method">${rt(R.method)}</p>
    </header>
    ${hsec('findings', '01', 'Key findings', '关键发现', `<ol class="find">${R.findings.map(f => `<li><div>${rt(f)}</div></li>`).join('')}</ol>`)}
    ${hsec('players', '02', 'Players', '玩家：谁在做', `
      <div class="tbl"><table><thead><tr><th>产品</th><th>类型</th><th>价格（USD）</th><th>磨豆机</th><th>出杯量</th><th>豆仓 / 生态</th><th>联网</th><th>来源</th></tr></thead><tbody>
      ${P.map(p => `<tr><td>${esc(p.name)}</td><td>${esc(p.kind)}</td><td class="mono">${esc(p.price)}</td><td>${esc(p.grinder)}</td><td>${esc(p.cups)}</td><td>${esc(p.pods)}</td><td>${esc(p.connect)}</td><td>${refs(p.src)}</td></tr>`).join('')}
      </tbody></table></div>
      <h3>逐台看</h3>
      <div class="grid g3">${P.map((p, i) => `<article class="card${i === 0 ? ' on' : ''}">${arc}
        <div class="p-name">${esc(p.name)}</div><span class="p-kind">${esc(p.kind)}</span>
        <div class="p-price">${esc(p.price)}</div><div class="p-maker">${esc(p.maker)}</div>
        <dl class="spec"><dt>上市</dt><dd>${esc(p.launch)}</dd><dt>磨豆</dt><dd>${esc(p.grinder)}</dd><dt>联网</dt><dd>${esc(p.connect)}</dd></dl>
        <ul>${(p.notes || []).map(n => `<li>${rt(n)}</li>`).join('')}</ul>
        <div class="srcs">SRC ${refs(p.src)}</div></article>`).join('')}</div>
      <p style="margin-top:18px;font-size:14px">${rt(R.others)}</p>`)}
    ${hsec('groups', '03', 'User groups', '核心用户群', `<div class="grid g3">${R.groups.map(g => `<article class="card">${arc}
        <div class="p-name">${esc(g.who)}</div><p style="margin:8px 0 10px">${rt(g.want)}</p>
        <dl class="spec"><dt>产品</dt><dd>${esc(g.fit)}</dd></dl><p style="font-size:13.5px">${rt(g.why)}</p>
        <div class="srcs">SRC ${refs(g.src)}</div></article>`).join('')}</div>`)}
    ${hsec('competition', '04', 'Landscape', '竞争格局', `
      <h3 style="margin-top:0">价格档位</h3>
      <div class="grid g4">${R.tiers.map((t, i) => { const [a, b] = String(t.tier).split(' · '); return `<article class="card tier${i === 1 ? ' on' : ''}">${arc}
        <div class="lab">${esc(a)}</div><div class="t-price">${esc(b || '')}</div><p>${rt(t.items)}</p><div class="srcs">SRC ${refs(t.src)}</div></article>`; }).join('')}</div>
      <h3>五条分界线</h3><ol class="axes">${R.axes.map(a => `<li><div>${rt(a)}</div></li>`).join('')}</ol>
      <h3>中国 vs 美国</h3><ul class="plain">${R.chinaUS.map(c => `<li>${rt(c)}</li>`).join('')}</ul>`)}
    ${hsec('feedback', '05', 'Product feedback', '产品细节与用户反馈', `<div class="grid g2">${R.feedback.map(f => `<article class="card fb">${arc}
        <h4>${esc(f.product)}</h4>
        <div class="lab">+ 好评</div><ul>${f.pros.map(x => `<li>${rt(x)}</li>`).join('')}</ul>
        <div class="lab neg">− 差评 / 风险</div><ul>${f.cons.map(x => `<li>${rt(x)}</li>`).join('')}</ul></article>`).join('')}</div>`)}
    ${hsec('takeaways', '06', 'For 豪力', '给豪力的结论', `<ol class="take">${R.takeaways.map(t => `<li><div class="card">${arc}<p>${rt(t)}</p></div></li>`).join('')}</ol>`)}
    ${hsec('sources', '07', 'Sources', '来源与可靠度', `<p style="font-size:14px;margin-bottom:14px">可靠度分级：高 = 行业媒体或专业实测；中高 = 官方规格或上手评测；中 = 公关稿、单个用户或联盟站；低 = 个人社交帖子。</p>
      <div class="tbl"><table style="min-width:720px"><thead><tr><th>编号</th><th>来源</th><th>可靠度 · 理由</th></tr></thead><tbody>
      ${R.sources.map(x => { const [lv, ...why] = String(x.rel).split(' · '); return `<tr id="src-${esc(x.id)}"><td class="mono">${esc(x.id)}</td><td><a href="${esc(x.url)}">${esc(x.label)}</a></td><td><span class="rel">${esc(lv)}</span> · ${esc(why.join(' · '))}</td></tr>`; }).join('')}
      </tbody></table></div>`)}`;
  }

  ({ index: renderIndex, 'brew-today': renderBrewToday, brews: renderBrews, gear: renderGear, about: renderAbout, research: renderResearch }[page] || renderIndex)();
})();
