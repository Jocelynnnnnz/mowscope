const policySlug = new URLSearchParams(location.search).get("policy") || POLICIES[0].slug;
const policy = POLICIES.find((item) => item.slug === policySlug) || POLICIES[0];
document.title = `${policy.title}｜MOWSCOPE`;
const list = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
document.querySelector("#policy-detail").innerHTML = `
  <section class="detail-hero policy-hero">
    <div class="policy-kicker"><span>${policy.region}</span><b>${policy.status}</b></div>
    <h1>${policy.title}</h1>
    <p>${policy.summary}</p>
    <a class="source-link" href="${policy.sourceUrl}" target="_blank" rel="noopener">查看法规 / 政府原文 ↗</a>
  </section>
  <section class="policy-facts">
    <div><small>关键日期</small><strong>${policy.date}</strong></div>
    <div><small>适用市场</small><strong>${policy.region}</strong></div>
    <div><small>官方来源</small><strong>${policy.source}</strong></div>
  </section>
  <section class="detail-grid policy-detail-grid">
    <article class="detail-card"><small>01 / POLICY</small><h2>政策要点</h2>${list(policy.points)}</article>
    <article class="detail-card"><small>02 / IMPACT</small><h2>对割草机器人企业的影响</h2>${list(policy.impact)}</article>
    <article class="detail-card action-card"><small>03 / ACTION</small><h2>建议行动</h2>${list(policy.actions)}</article>
    <article class="detail-card disclaimer-card"><small>研究说明</small><h2>使用边界</h2><p>本页为基于公开法规原文的行业研究摘要，不构成法律、认证或市场准入意见。企业应结合具体型号、销售市场、连接方式与供应链获取专业判断。</p><a href="${policy.sourceUrl}" target="_blank" rel="noopener">核对官方原文 ↗</a></article>
  </section>`;
