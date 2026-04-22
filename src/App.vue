<script setup>
import SiteCard from './components/SiteCard.vue'

const sites = [
  { name: 'site1', path: 'site1.bhenning.com', url: 'https://site1.bhenning.com' },
  { name: 'site2', path: 'site2.bhenning.com', url: 'https://site2.bhenning.com' },
  { name: 'site3', path: 'site3.bhenning.com', url: 'https://site3.bhenning.com' },
  { name: 'site4', path: 'site4.bhenning.com', url: 'https://site4.bhenning.com' },
  { name: 'site5', path: 'site5.bhenning.com', url: 'https://site5.bhenning.com' },
  { name: 'site6', path: 'site6.bhenning.com', url: 'https://site6.bhenning.com' },
  { name: 'site7', path: 'site7.bhenning.com', url: 'https://site7.bhenning.com' },
  { name: 'site8', path: 'site8.bhenning.com', url: 'https://site8.bhenning.com' },
  { name: 'site9', path: 'site9.bhenning.com', url: 'https://site9.bhenning.com' },
]
</script>

<template>
  <header>
    <p class="header-eyebrow">bhenning.com / dashboard</p>
    <h1>site<em>9</em></h1>
    <p class="header-sub">tools &amp; utilities — select a destination</p>
    <div class="header-rule"></div>
  </header>

  <section>
    <div class="section-label"><h2>Sites</h2></div>
    <div class="grid">
      <SiteCard
        v-for="(site, i) in sites"
        :key="site.name"
        :site="site"
        :style="{ animationDelay: `${0.04 + i * 0.03}s` }"
      />
    </div>
  </section>

  <footer>bhenning.com &mdash; site9</footer>
</template>

<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:           #0b0b0d;
  --surface:      #111115;
  --surface-hi:   #18181e;
  --border:       #232330;
  --border-hi:    #3a3a52;
  --accent:       #e8a04a;
  --accent-glow:  rgba(232, 160, 74, 0.10);
  --accent-dim:   rgba(232, 160, 74, 0.45);
  --text:         #c8c4b8;
  --text-muted:   #5a5750;
  --text-bright:  #edeae0;
}

html {
  background: var(--bg);
  color: var(--text);
  font-family: 'Courier New', 'Lucida Console', 'Monaco', monospace;
  min-height: 100vh;
}

body {
  min-height: 100vh;
  padding: 3.5rem 2rem 5rem;
  max-width: 1120px;
  margin: 0 auto;
  position: relative;
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: radial-gradient(circle, rgba(232,160,74,0.06) 1px, transparent 1px);
  background-size: 36px 36px;
  pointer-events: none;
  z-index: 0;
}

body::after {
  content: '';
  position: fixed;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 55%, rgba(11,11,13,0.85) 100%);
  pointer-events: none;
  z-index: 0;
}

/* ── Header ───────────────────────────────────── */
header {
  position: relative;
  z-index: 1;
  margin-bottom: 3.5rem;
}

.header-eyebrow {
  font-size: 0.6rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.6rem;
}

h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: normal;
  color: var(--text-bright);
  letter-spacing: -0.02em;
  line-height: 1;
}

h1 em {
  font-style: normal;
  color: var(--accent);
}

.header-sub {
  margin-top: 0.8rem;
  font-size: 0.7rem;
  color: var(--text-muted);
  letter-spacing: 0.05em;
}

.header-rule {
  margin-top: 1.75rem;
  height: 1px;
  background: linear-gradient(to right, var(--border-hi), var(--border), transparent);
}

/* ── Sections ─────────────────────────────────── */
section {
  position: relative;
  z-index: 1;
  margin-bottom: 3rem;
}

.section-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.section-label h2 {
  font-size: 0.6rem;
  font-weight: normal;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--text-muted);
  white-space: nowrap;
}

.section-label::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
}

/* ── Card Grid ────────────────────────────────── */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
}

.card {
  position: relative;
  background: var(--surface);
  padding: 1.5rem 1.6rem 1.5rem;
  text-decoration: none;
  color: var(--text);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  overflow: hidden;
  transition: background 0.12s ease, color 0.12s ease;
  animation: fadeUp 0.5s ease both;
}

.card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--accent-glow);
  opacity: 0;
  transition: opacity 0.12s ease;
}

.card:hover { background: var(--surface-hi); }
.card:hover::after { opacity: 1; }
.card:hover .card-name { color: var(--accent); }
.card:hover .arrow { transform: translate(3px, -3px); color: var(--accent); }

.card-name {
  font-size: 1rem;
  color: var(--text-bright);
  transition: color 0.12s;
  position: relative;
  z-index: 1;
}

.card-path {
  font-size: 0.75rem;
  color: var(--text-muted);
  position: relative;
  z-index: 1;
}

.badge {
  display: inline-flex;
  align-items: center;
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.15em 0.45em;
  border: 1px solid var(--border-hi);
  border-radius: 2px;
  color: var(--text-muted);
  width: fit-content;
  position: relative;
  z-index: 1;
  transition: color 0.12s, border-color 0.12s;
}

.card:hover .badge { color: var(--accent-dim); border-color: var(--accent-dim); }

.arrow {
  position: absolute;
  top: 0.7rem;
  right: 0.75rem;
  font-size: 0.65rem;
  color: var(--border-hi);
  transition: transform 0.12s ease, color 0.12s ease;
  z-index: 1;
}

/* ── Footer ───────────────────────────────────── */
footer {
  position: relative;
  z-index: 1;
  margin-top: 1rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border);
  font-size: 0.58rem;
  color: var(--text-muted);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

/* ── Animation ────────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (max-width: 480px) {
  body { padding: 2rem 1.25rem 4rem; }
  .grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); }
}
</style>
