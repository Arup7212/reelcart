(function () {
    const d = document, q = (s, e = d) => e.querySelector(s), qa = (s, e = d) => e.querySelectorAll(s), ce = t => d.createElement(t), BASE = '/apps/reelcart', H = [BASE + '/playlist', BASE + '/api/playlist'], A = BASE + '/analytics', J = 'application/json', S = p => `<svg viewBox="0 0 24 24"><path d="${p}"/></svg>`, LK = 'M12 21.3l-1.4-1.3C5.4 15.4 2 12.3 2 8.5 2 5.4 4.4 3 7.5 3c1.7 0 3.4.8 4.5 2.1 1.1-1.3 2.8-2.1 4.5-2.1 3 0 5.5 2.4 5.5 5.5 0 3.8-3.4 6.9-8.6 11.5L12 21.3z', SH = 'M18 16.1c-.8 0-1.4.3-2 .8l-7.1-4.2c.1-.2.1-.5.1-.7s0-.5-.1-.7l7.1-4.1c.5.5 1.2.8 2 .8 1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3c0 .2 0 .5.1.7L8 9.8c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3c.8 0 1.5-.3 2-.8l7.1 4.2c0 .2-.1.4-.1.6 0 1.6 1.3 2.9 2.9 2.9s2.9-1.3 2.9-2.9-1.3-2.9-2.9-2.9z', BD = 'M11.6 3.1A.8.8 0 0112 3.8v16.5a.8.8 0 01-1.3.6L5.5 16H2.8A1.8 1.8 0 011 14.3v-4.5C1 8.8 1.8 8 2.8 8h2.7l5.3-4.8a.8.8 0 01.8-.1zM10.5 5.4l-4.2 3.9a.8.8 0 01-.5.2h-3a.3.3 0 00-.3.3v4.5c0 .1.1.3.3.3h3a.8.8 0 01.5.2l4.2 3.9V5.4z', WV = 'M18.7 4.2a.8.8 0 011.1 0c4.3 4.3 4.3 11.3 0 15.6a.8.8 0 01-1.1-1.1 9.5 9.5 0 000-13.4.8.8 0 010-1.1zM16.2 7.8a.8.8 0 10-1.1 1.1 4.5 4.5 0 010 6.4.8.8 0 001.1 1.1 6 6 0 000-8.5z', XX = 'M16.3 8.2a.8.8 0 10-1.1 1.1L17.9 12l-2.7 2.7a.8.8 0 101.1 1.1L19 13.1l2.7 2.7a.8.8 0 101.1-1.1L20.1 12l2.7-2.7a.8.8 0 00-1.1-1.1L19 10.9l-2.7-2.7z', MU = BD + WV, MO = BD + XX, CX = 'M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12 19 6.4z', EX = 'M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z', ED = 'M3 17.2V21h3.7L17.8 9.9 14 6.2 3 17.2zM20.7 7c.4-.4.4-1 0-1.4l-2.3-2.3c-.4-.4-1-.4-1.4 0l-1.8 1.8 3.7 3.7 1.8-1.8z', SW = 'M7.4 15.4L6 14l6-6 6 6-1.4 1.4L12 10.8l-4.6 4.6zm0-6L6 8l6-6 6 6-1.4 1.4L12 4.8 7.4 9.4z', CV = 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z';
    let v = [], cur = 0, m, s = '', CS = '$';
    const obs = new IntersectionObserver(e => { e.forEach(t => { const n = t.target; if (n.closest('.rcg-slider-wrap')?.dataset.ap === 'true') { if (t.isIntersecting) { if (!n.src && n.dataset.src) { n.src = n.dataset.src; n.load() } n.play().catch(() => { n.muted = !0; n.play().catch(() => { }) }) } else { n.pause() } } }) }, { rootMargin: '200px', threshold: .1 });

    const renderPrice = (p, c, cs) => {
        if (c && parseFloat(c) > parseFloat(p)) {
            const d = Math.round(((c - p) / c) * 100);
            return `<div class="rcg-price-box"><span class="rcg-p-price">${cs}${p}</span><span class="rcg-p-compare">${cs}${c}</span><span class="rcg-p-discount">${d}% Off</span></div>`;
        }
        return `<span class="rcg-p-price">${cs}${p}</span>`;
    };

    async function I() { qa('.reelcart-playlist-container[data-reelcart-type="slider"]').forEach(e => { if (!e.dataset.init) { e.dataset.init = "true"; const t = e.dataset.reelcartPlaylistId; if (t && '0' !== t) LV(e, t) } }) } function tr(i, t, r) { if (!s || !i) return; fetch(A, { method: 'POST', body: JSON.stringify({ videoId: i, type: t, shop: s, revenue: r }), headers: { 'Content-Type': J } }).catch(() => { }) } async function F(e) { for (const r of H) try { const n = await fetch(`${r}/${e}`); if (n.ok) { const d1 = await n.json(); if (d1?.videos) return s = d1.shop || location.hostname, d1 } } catch (a) { } return null }
    /* ========================================================
       🚀 SMART CART ENGINE (Adaptive Theme Integration)
    ======================================================== */
    class SmartCartEngine {
        constructor() {
            this.root = window.Shopify?.routes?.root || "/";
            this.engine = this.detect();
        }

        detect() {
            const icon = d.querySelector('[href="/cart"], .header__icon--cart, .site-header__cart, #cart-icon-bubble, [data-testid="cart-drawer-trigger"], .cart-drawer-trigger, [aria-label*="Cart" i]');
            return {
                os2: !!d.querySelector("cart-drawer, cart-notification, cart-drawer-component"),
                cartIcon: icon,
                sections: this.discoverSections()
            };
        }

        discoverSections() {
            const sections = new Set(["cart-drawer", "cart-icon-bubble", "cart-notification"]);
            d.querySelectorAll('cart-drawer, cart-notification, cart-items').forEach(c => {
                if (typeof c.getSectionsToRender === 'function') {
                    try { c.getSectionsToRender().forEach(s => sections.add(s.id || s)); } catch (e) { }
                }
            });
            d.querySelectorAll('[id^="shopify-section-"]').forEach(el => {
                const id = el.id.replace('shopify-section-', '');
                if (/cart|header|bubble|items|notification/i.test(id)) sections.add(id);
            });
            return Array.from(sections).filter(s => typeof s === 'string');
        }

        async add(variantId, properties = {}) {
            try {
                const response = await fetch(this.root + "cart/add.js", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Accept": "application/json" },
                    body: JSON.stringify({
                        items: [{ id: variantId, quantity: 1, properties }],
                        sections: this.detect().sections.join(',')
                    })
                });
                const data = await response.json();
                if (!response.ok) throw new Error(data.description || "Add failed");

                // If OS2 components exist, try their native render first
                const drawer = d.querySelector('cart-drawer'), notification = d.querySelector('cart-notification');
                if (data.sections) {
                    if (drawer && typeof drawer.renderContents === 'function') drawer.renderContents(data);
                    else if (notification && typeof notification.renderContents === 'function') notification.renderContents(data);

                    Object.keys(data.sections).forEach(id => {
                        const html = data.sections[id];
                        if (!html) return;
                        d.querySelectorAll(`#shopify-section-${id}, #${id}`).forEach(el => {
                            const parsed = new DOMParser().parseFromString(html, 'text/html');
                            const newContent = parsed.getElementById(`shopify-section-${id}`) || parsed.getElementById(id) || parsed.body;
                            el.innerHTML = newContent.innerHTML;
                        });
                    });
                }

                const cart = await fetch(this.root + "cart.js", { cache: "no-store" }).then(r => r.json());
                this.updateBubbles(cart.item_count);
                this.dispatchEvents(cart, data.sections);
                this.openDrawer();
                return cart;
            } catch (error) {
                console.error("SmartCartEngine Error:", error);
                throw error;
            }
        }

        updateBubbles(count) {
            const sels = '.cart-count-bubble span, .cart-count, [data-cart-count], .js-cart-count, .header__cart-count, #cart-icon-bubble span';
            d.querySelectorAll(sels).forEach(el => {
                if (el.classList.contains('visually-hidden') || el.innerText.includes('item')) {
                    el.textContent = `${count} ${count === 1 ? 'item' : 'items'}`;
                } else {
                    el.textContent = count;
                }
                el.classList.remove('hidden');
                if (el.parentElement) el.parentElement.classList.remove('hidden');
            });
            // Dawn specific
            const bubble = d.querySelector('.cart-count-bubble');
            if (bubble) bubble.classList.remove('hidden');
        }

        dispatchEvents(cart, sections) {
            const detail = { cart, sections };
            const evts = ['cart:updated', 'cart:refresh', 'ajaxCart.afterAdd'];
            evts.forEach(name => {
                d.dispatchEvent(new CustomEvent(name, { bubbles: true, detail }));
                window.dispatchEvent(new CustomEvent(name, { bubbles: true, detail }));
            });
            if (window.jQuery) window.jQuery(d).trigger('cart.requestComplete', [cart]);
        }

        openDrawer() {
            const icon = this.detect().cartIcon;
            if (icon) {
                icon.click();
                setTimeout(() => {
                    const drawer = d.querySelector('cart-drawer, cart-drawer-component, .cart-drawer, #CartDrawer');
                    const notification = d.querySelector('cart-notification, .cart-notification, #cart-notification');

                    if (drawer && !drawer.classList.contains('active') && !drawer.hasAttribute('open')) {
                        if (typeof drawer.open === 'function') drawer.open();
                        else if (typeof drawer.show === 'function') drawer.show();
                        else {
                            drawer.classList.add('active', 'is-open');
                            drawer.setAttribute('open', '');
                        }
                    } else if (notification && !notification.classList.contains('active')) {
                        if (typeof notification.open === 'function') notification.open();
                        else notification.classList.add('active');
                    } else {
                        window.location.href = this.root + "cart";
                    }
                }, 150);
            } else {
                const drawer = d.querySelector('cart-drawer, cart-drawer-component, .cart-drawer, #CartDrawer');
                const notification = d.querySelector('cart-notification, .cart-notification, #cart-notification');

                if (drawer && typeof drawer.open === 'function') drawer.open();
                else if (drawer) drawer.classList.add('active', 'is-open');
                else if (notification) notification.classList.add('active');
                else window.location.href = this.root + "cart";
            }
        }
    }

    const cartEngine = new SmartCartEngine();

    const AC = async (variantId, videoRef, button) => {
        if (button.disabled) return;
        const oldText = button.innerText;
        button.innerText = "Adding...";
        button.disabled = true;

        try {
            const cleanId = String(variantId).split('/').pop();
            await cartEngine.add(cleanId, { _reel_id: videoRef });

            tr(videoRef, 'ATC');
            button.innerText = "Added";
            setTimeout(() => { button.innerText = oldText; button.disabled = false; }, 1500);
        } catch (e) {
            console.error(e);
            button.innerText = "Error";
            setTimeout(() => { button.innerText = oldText; button.disabled = false; }, 1500);
        }
    };
    async function LV(e, t) {
        const o = await F(t); if (!o) return; const r = 'true' === e.dataset.shuffle ? [...o.videos].sort(() => Math.random() - .5) : o.videos, ap = e.dataset.autoplay === 'true'; const cs = e.dataset.currencySymbol || '$'; let h = `<div class="rcg-slider-wrap" data-ap="${ap}"><button class="rc-slider-nav prev">${S(CV)}</button><div class="rcg-container">`; r.forEach((k, l) => { const p = k.products?.[0]; const hasVars = p && p.variants && p.variants.length > 1; const isAvail = p && (p.available !== false && p.available !== undefined); const btnTxt = hasVars ? 'VIEW' : (isAvail ? 'ADD TO CART' : 'OUT OF STOCK'); h += `<div class="rcg-card"><div class="rcg-video-box">${ap ? `<video data-src="${k.videoUrl}" poster="${k.thumbnail || ''}" class="rcg-vid" muted loop playsinline preload="none"></video>` : (k.thumbnail ? `<img src="${k.thumbnail}" class="rcg-vid" loading="lazy"/>` : `<video src="${k.videoUrl}" class="rcg-vid" muted playsinline></video>`)}<div class="rcg-overlay-actions"><div class="rcg-icon-btn rcg-like">${S(LK)}</div><div class="rcg-icon-btn rcg-share">${S(SH)}</div></div></div>${p ? `<div class="rcg-prod-box"><div class="rcg-prod-main"><img src="${p.image}" class="rcg-prod-img"/><div class="rcg-prod-details"><p class="rcg-prod-name">${p.title}</p><div class="rcg-prod-cost">${renderPrice(p.price || '0', p.compare_at_price, cs)}</div></div></div><button class="rcg-buy-btn ${!isAvail && !hasVars ? 'rcg-out-of-stock' : ''}">${btnTxt}</button></div>` : ''}</div>` }); h += `</div><button class="rc-slider-nav next" style="transform:rotate(180deg)">${S(CV)}</button></div>`; e.innerHTML = h; const x = q('.rcg-container', e); const SCR = v => x.scrollBy({ left: v, behavior: 'smooth' }); e.querySelector('.prev').onclick = () => SCR(-x.offsetWidth); e.querySelector('.next').onclick = () => SCR(x.offsetWidth); if (ap) qa('video', x).forEach(v1 => obs.observe(v1)); qa('.rcg-card', e).forEach((c, i) => { c.onclick = ev => { if (ev.target.closest('.rcg-icon-btn') || ev.target.closest('.rcg-buy-btn')) return; tr(r[i].id, 'CLICK'); OM(r, i, cs) }; if (ap) { c.onmouseenter = () => { const v = q('video', c); if (v) v.play().catch(() => { }) }; c.onmouseleave = null } }); qa('.rcg-like', e).forEach((b, i) => { b.onclick = ev => { ev.stopPropagation(); b.classList.toggle('rc-liked'); tr(r[i].id, 'LIKE') } }); qa('.rcg-share', e).forEach((b, i) => { b.onclick = ev => { ev.stopPropagation(); const vi = r[i], u = location.origin + (vi.products?.[0] ? `/products/${vi.products[0].handle}` : ''); tr(r[i].id, 'SHARE'); navigator.share ? navigator.share({ title: vi.title || 'Reel', url: u }).catch(() => { }) : prompt('L:', u) } }); qa('.rcg-buy-btn', e).forEach((b, i) => {
            b.onclick = ev => {
                ev.preventDefault();
                ev.stopPropagation();
                const p = r[i].products?.[0];
                if (!p) return;
                const isAvail = p.available !== false;
                if (!isAvail && !(p.variants && p.variants.length > 1)) return;
                if (p.variants && p.variants.length > 1) { OM(r, i, cs); return; }
                tr(r[i].id, 'ATC', parseFloat(p.price));
                AC(p.variantId, r[i].id, b);
            }
        });
    } function OM(vr, idx, cs = '$') { v = vr; cur = idx; CS = cs; if (!q('#rcg-modal')) { m = ce('div'); m.id = 'rcg-modal'; m.className = 'rcg-modal'; m.innerHTML = `<div class="rcg-modal-wrap"><button class="rcg-modal-nav prev">${S(CV)}</button><button class="rcg-modal-nav next" style="transform:rotate(180deg)">${S(CV)}</button><div class="rcg-modal-box"><button class="rcg-modal-x">${S(CX)}</button><div class="rcg-modal-vid"><div class="rcg-swipe-hint">${S(SW)}</div><video playsinline autoplay loop></video><div class="rcg-vid-controls"><div class="rcg-vid-icon ex">${S(EX)}</div><div class="rcg-vid-icon mu">${S(MU)}</div></div><div class="rcg-modal-actions-side"><button class="rcg-side-btn like">${S(LK)}<span class="rc-l-count">0</span></button><button class="rcg-side-btn share">${S(SH)}<span>Share</span></button></div></div><div class="rcg-modal-info"><div class="rcg-info-header"><img class="rcg-header-img"/><div class="rcg-header-text"><h2 class="rcg-main-title"></h2><div class="rcg-main-price"></div></div></div><div class="rcg-modal-scroll"><div class="rcg-variant-container"></div><div class="rcg-modal-imgs"></div><p class="rcg-desc-label">Description</p><div class="rcg-modal-desc"></div></div><div class="rcg-modal-footer"><a class="rcg-btn-more" target="_blank">More Info</a><button class="rcg-btn-atc">Add To Cart</button></div></div></div></div>`; d.body.appendChild(m); const vE = q('video', m); vE.onended = () => PM(cur + 1); q('.rcg-modal-x', m).onclick = CM; q('.prev', m).onclick = () => PM(cur - 1); q('.next', m).onclick = () => PM(cur + 1); q('.ex', m).onclick = () => d.fullscreenElement ? d.exitFullscreen() : m.requestFullscreen(); q('.mu', m).onclick = () => { vE.muted = !vE.muted; q('.mu', m).innerHTML = vE.muted ? S(MO) : S(MU) }; q('.like', m).onclick = () => { const l = q('.like', m); const c = q('.rc-l-count', m); const isLiked = l.classList.toggle('rc-liked-active'); let count = parseInt(c.innerText) || 0; c.innerText = isLiked ? count + 1 : Math.max(0, count - 1); tr(v[cur].id, 'LIKE') }; q('.share', m).onclick = () => { const vi = v[cur], u = location.origin + (vi.products?.[0] ? `/products/${vi.products[0].handle}` : ''); navigator.share ? navigator.share({ title: vi.title, url: u }).catch(() => { }) : prompt('L:', u) }; if (window.innerWidth <= 768) { const b = q('.rcg-modal-vid', m); let tY = 0, tX = 0; b.ontouchstart = e => { tY = e.touches[0].clientY; tX = e.touches[0].clientX; const sh = q('.rcg-swipe-hint', m); if (sh) sh.classList.remove('active') }; b.ontouchend = e => { const dY = e.changedTouches[0].clientY - tY, dX = e.changedTouches[0].clientX - tX; if (Math.abs(dY) > 50 && Math.abs(dY) > Math.abs(dX)) dY > 0 ? PM(cur - 1) : PM(cur + 1) } } } else m = q('#rcg-modal'); m.classList.add('rcg-open'); if (window.innerWidth <= 768) { const sh = q('.rcg-swipe-hint', m); if (sh) { sh.classList.remove('active'); setTimeout(() => sh.classList.add('active'), 500); setTimeout(() => sh.classList.remove('active'), 3500) } } d.body.style.overflow = 'hidden'; UM(cur) } function CM() { if (m) m.classList.remove('rcg-open'); const vE = q('video', m); if (vE) { vE.pause(); vE.src = '' } d.body.style.overflow = '' } function PM(i) { if (i < 0) return; if (i >= v.length) i = 0; cur = i; UM(cur) } async function UM(i) {
        const vi = v[i], ve = q('video', m), in1 = q('.rcg-modal-info', m), iM = innerWidth <= 768; if (!vi) return; ve.src = vi.videoUrl; ve.muted = iM ? !0 : !1; ve.play().catch(() => { ve.muted = !0; ve.play().catch(() => { }) }); q('.mu', m).innerHTML = ve.muted ? S(MO) : S(MU); tr(vi.id, 'VIEW'); q('.rc-l-count', m).innerText = vi.likes || 0; const l = q('.like', m); l.classList.remove('rc-liked-active'); const p = vi.products?.[0]; if (p) {
            const hi = q('.rcg-header-img', in1), mt = q('.rcg-main-title', in1), mp = q('.rcg-main-price', in1), vc = q('.rcg-variant-container', in1), bm = q('.rcg-btn-more', in1), btc = q('.rcg-btn-atc', in1); if (hi) { hi.src = p.image || ''; hi.style.display = p.image ? 'block' : 'none'; } if (mt) mt.innerText = p.title; if (mp) mp.innerHTML = renderPrice(p.price || '0', p.compare_at_price, CS); if (bm) bm.href = `/products/${p.handle}`; let selectedVar = p.variants && p.variants.length > 1 ? null : p.variantId; const renderVars = (parent) => { vc.innerHTML = ''; if (p.variants && p.variants.length > 1) { const lbl = ce('p'); lbl.className = 'rcg-variant-label'; lbl.innerText = 'Select Option:'; vc.appendChild(lbl); const grp = ce('div'); grp.className = 'rcg-opt-group'; vc.appendChild(grp); p.variants.forEach(vt => { const vo = ce('button'); vo.className = 'rcg-variant-opt'; vo.innerText = vt.title; vo.onclick = (e) => { e.stopPropagation(); e.preventDefault(); selectedVar = vt.id; qa('.rcg-variant-opt', vc).forEach(o => o.classList.remove('selected')); vo.classList.add('selected'); if (mp) mp.innerHTML = renderPrice(vt.price || '0', vt.compare_at_price, CS); if (btc) { btc.disabled = false; btc.innerText = "ADD TO CART"; } }; grp.appendChild(vo); }); } }; if (iM) { const vid = q('.rcg-modal-vid', m); let mp = q('.rcg-m-prod', vid); if (!mp) { mp = ce('div'); mp.className = 'rcg-m-prod'; vid.appendChild(mp) } mp.innerHTML = `<img class="rcg-m-img" src="${p.image}"/><div class="rcg-m-txt"><div class="rcg-m-title">${p.title}</div><div class="rcg-m-price">${renderPrice(p.price || '0', p.compare_at_price, CS)}</div></div><a class="rcg-modal-view" href="/products/${p.handle}" target="_blank">${S(ED)}</a>`; let mbtc = q('.rcg-m-atc', vid); if (!mbtc) { mbtc = ce('button'); mbtc.className = 'rcg-modal-atc rcg-m-atc'; vid.appendChild(mbtc) } const isAvailM = p.available !== false; const hasMultVarsM = p.variants && p.variants.length > 1; mbtc.innerText = hasMultVarsM ? "SELECT OPTION" : (isAvailM ? "ADD TO CART" : "OUT OF STOCK"); mbtc.disabled = !hasMultVarsM && !isAvailM; mbtc.onclick = e => { e.preventDefault(); if (selectedVar && isAvailM) AC(selectedVar, v[i].id, e.target); else if (hasMultVarsM) { d.body.style.overflow = ''; window.location.href = `/products/${p.handle}`; } }; } else {
                const isAvailD = p.available !== false; const hasMultVarsD = p.variants && p.variants.length > 1; btc.innerText = hasMultVarsD ? "Select Option" : (isAvailD ? "Add To Cart" : "Out of Stock"); btc.disabled = hasMultVarsD || !isAvailD; btc.onclick = e => {
                    e.preventDefault();
                    if (selectedVar && isAvailD) AC(selectedVar, v[i].id, e.target);
                }
            } if (!p.imgs) {
                fetch(`/products/${p.handle}.js`).then(f => f.ok ? f.json() : null).then(d => {
                    if (d) {
                        p.imgs = d.images; p.desc = d.description; if (d.variants && d.variants.length) {
                            p.price = (d.variants[0].price / 100).toFixed(2); p.compare_at_price = d.variants[0].compare_at_price ? (d.variants[0].compare_at_price / 100).toFixed(2) : null;
                            p.available = d.available;

                            // Live Update Button
                            const isAvailNow = d.available;
                            const hasVars = p.variants && p.variants.length > 1;

                            // Desktop Button
                            const btcNow = q('.rcg-btn-atc', in1);
                            if (btcNow && !hasVars) {
                                btcNow.innerText = isAvailNow ? "ADD TO CART" : "OUT OF STOCK";
                                btcNow.disabled = !isAvailNow;
                            }
                            // Mobile Button
                            const mbtcNow = q('.rcg-modal-atc', m);
                            if (mbtcNow && !hasVars) {
                                mbtcNow.innerText = isAvailNow ? "ADD TO CART" : "OUT OF STOCK";
                                mbtcNow.disabled = !isAvailNow;
                            } if (p.variants) { p.variants.forEach(vt => { const dv = d.variants.find(x => x.id === vt.id); if (dv) { vt.price = (dv.price / 100).toFixed(2); vt.compare_at_price = dv.compare_at_price ? (dv.compare_at_price / 100).toFixed(2) : null; } }); }
                        } if (mp) mp.innerHTML = renderPrice(p.price || '0', p.compare_at_price, CS);
                    } q('.rcg-modal-imgs', in1).innerHTML = (p.imgs || []).slice(0, 4).map(im => `<img src="${im}" class="rcg-modal-img"/>`).join(''); q('.rcg-modal-desc', in1).innerHTML = p.desc || 'N/A'; if (!iM) renderVars(in1);
                }).catch(() => { q('.rcg-modal-imgs', in1).innerHTML = ''; q('.rcg-modal-desc', in1).innerHTML = 'N/A'; if (!iM) renderVars(in1); })
            } else { q('.rcg-modal-imgs', in1).innerHTML = (p.imgs || []).slice(0, 4).map(im => `<img src="${im}" class="rcg-modal-img"/>`).join(''); q('.rcg-modal-desc', in1).innerHTML = p.desc || 'N/A'; if (!iM) renderVars(in1); }
        }
    } 'loading' === d.readyState ? d.addEventListener('DOMContentLoaded', I) : I(); d.addEventListener('shopify:section:load', I)
})();
