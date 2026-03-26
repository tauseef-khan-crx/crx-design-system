// ═══════════════════════════════════════════════════════════════
//  CENTRICITY RESEARCH — Text Styles Installer (Script B)
//  Run this AFTER Script A (colors/spacing/radius) has finished.
//  Replace code.js with this content, then run the plugin again.
//
//  UPDATED: Correct brand fonts (Montserrat + Noto Sans)
//  verified from centricityresearch.com
// ═══════════════════════════════════════════════════════════════

(async () => {

  figma.notify('Loading fonts…', { timeout: 8000 });

  // Load all fonts in ONE parallel batch — not sequentially
  const fontResults = await Promise.allSettled([
    figma.loadFontAsync({ family: 'Montserrat', style: 'Bold'     }),
    figma.loadFontAsync({ family: 'Montserrat', style: 'Medium'   }),
    figma.loadFontAsync({ family: 'Montserrat', style: 'Regular'  }),
    figma.loadFontAsync({ family: 'Noto Sans',  style: 'Bold'     }),
    figma.loadFontAsync({ family: 'Noto Sans',  style: 'SemiBold' }),
    figma.loadFontAsync({ family: 'Noto Sans',  style: 'Medium'   }),
    figma.loadFontAsync({ family: 'Noto Sans',  style: 'Regular'  }),
  ]);

  // Track which loaded OK
  const fontKeys = [
    'Montserrat:Bold', 'Montserrat:Medium', 'Montserrat:Regular',
    'Noto Sans:Bold', 'Noto Sans:SemiBold', 'Noto Sans:Medium', 'Noto Sans:Regular',
  ];
  const loaded = new Set();
  fontResults.forEach((r, i) => {
    if (r.status === 'fulfilled') loaded.add(fontKeys[i]);
    else console.warn(`⚠ Font unavailable: ${fontKeys[i]}`);
  });

  const TF = 'Montserrat';
  const TB = 'Bold';
  const TM = 'Medium';

  console.log(`Title font: ${TF}`);
  figma.notify(`Creating text styles with ${TF}…`, { timeout: 5000 });

  // [name, family, style, size, lineHeightPct, letterSpacingPct, textCase]
  const styles = [
    [`Title/Display`,  TF,          TB,        60, 110, -4, 'ORIGINAL'],
    [`Title/H1`,       TF,          TB,        48, 112, -3, 'ORIGINAL'],
    [`Title/H2`,       TF,          TB,        36, 115, -2, 'ORIGINAL'],
    [`Title/H3`,       TF,          TM,        28, 130, -1, 'ORIGINAL'],
    [`Title/H4`,       TF,          TM,        22, 135,  0, 'ORIGINAL'],
    [`Title/H5`,       TF,          TM,        17, 140,  0, 'ORIGINAL'],
    [`Title/Overline`, TF,          TB,        10, 150, 14, 'UPPER'   ],
    [`Body/Large`,    'Noto Sans', 'Regular', 17, 165,  0, 'ORIGINAL'],
    [`Body/Default`,  'Noto Sans', 'Regular', 15, 160,  0, 'ORIGINAL'],
    [`Body/Small`,    'Noto Sans', 'Regular', 13, 155,  0, 'ORIGINAL'],
    [`Body/Caption`,  'Noto Sans', 'Medium',  11, 150,  4, 'ORIGINAL'],
    [`Body/Label`,    'Noto Sans', 'SemiBold',12, 140,  5, 'UPPER'   ],
    [`Body/Link`,     'Noto Sans', 'Medium',  15, 160,  0, 'ORIGINAL'],
  ];

  let created = 0;
  let skipped = 0;

  // Get existing styles ONCE
  const existingStyles = figma.getLocalTextStyles();

  for (const [name, family, style, size, lh, ls, tc] of styles) {
    const key = `${family}:${style}`;
    if (!loaded.has(key)) {
      console.warn(`⚠ Skipped "${name}" — ${key} not loaded`);
      skipped++;
      continue;
    }
    try {
      const s = existingStyles.find(x => x.name === name)
                || figma.createTextStyle();
      s.name          = name;
      s.fontName      = { family, style };
      s.fontSize      = size;
      s.lineHeight    = { unit: 'PERCENT', value: lh };
      s.letterSpacing = { unit: 'PERCENT', value: ls };
      s.textCase      = tc;
      s.description   = `${family} ${style} · ${size}px · ${lh}% lh`;
      created++;
      console.log(`✓ ${name} (${family} ${style} ${size}px)`);
    } catch (e) {
      console.warn(`⚠ Error on "${name}": ${e.message}`);
      skipped++;
    }
  }

  const msg = `✅ ${created} text styles created${skipped > 0 ? ` · ${skipped} skipped` : ''}`;
  console.log(msg);
  figma.notify(msg, { timeout: 5000 });
  figma.closePlugin();

})();
