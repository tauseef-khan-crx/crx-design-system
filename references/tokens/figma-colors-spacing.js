// ═══════════════════════════════════════════════════════════════
//  CENTRICITY RESEARCH — Design Token Installer v6
//
//  UPDATED: Correct brand colors (Blue #1E67B2, Teal #10BAB3,
//  Green #81BF41) verified from centricityresearch.com
//
//  RUN ORDER:
//    1. Run this script → creates all colors + spacing + radius
//    2. If text styles are needed, run SCRIPT B (figma-text-styles.js)
// ═══════════════════════════════════════════════════════════════

(async () => {

  // ─── hex → Figma RGB ────────────────────────────────────────
  const rgb = hex => ({
    r: parseInt(hex.slice(1,3),16)/255,
    g: parseInt(hex.slice(3,5),16)/255,
    b: parseInt(hex.slice(5,7),16)/255,
  });

  // ─── Get or create collection ────────────────────────────────
  async function collection(name) {
    const list = await figma.variables.getLocalVariableCollectionsAsync();
    return list.find(c => c.name === name)
        || figma.variables.createVariableCollection(name);
  }

  // ─── Bulk-create color variables (ONE async fetch, then loop) ─
  async function bulkColors(col, modeId, tokens) {
    const existing = await figma.variables.getLocalVariablesAsync('COLOR');
    for (const [name, hex] of tokens) {
      const found = existing.find(
        v => v.variableCollectionId === col.id && v.name === name
      );
      const v = found || figma.variables.createVariable(name, col, 'COLOR');
      v.setValueForMode(modeId, rgb(hex));
    }
  }

  // ─── Bulk-create float variables (ONE async fetch, then loop) ─
  async function bulkFloats(col, modeId, tokens) {
    const existing = await figma.variables.getLocalVariablesAsync('FLOAT');
    for (const [name, val] of tokens) {
      const found = existing.find(
        v => v.variableCollectionId === col.id && v.name === name
      );
      const v = found || figma.variables.createVariable(name, col, 'FLOAT');
      v.setValueForMode(modeId, val);
    }
  }


  // ════════════════════════════════════════════════════════════
  //  COLORS
  // ════════════════════════════════════════════════════════════
  const colorCol  = await collection('Centricity / Colors');
  await bulkColors(colorCol, colorCol.defaultModeId, [
    // Blue (Primary)
    ['blue/800',          '#0D2949'],
    ['blue/700',          '#133E6D'],
    ['blue/600',          '#185291'],
    ['blue/500',          '#1E67B2'],
    ['blue/400',          '#5F97CF'],
    ['blue/300',          '#87B1DB'],
    ['blue/200',          '#AFCBE7'],
    ['blue/100',          '#D7E5F3'],
    ['blue/50',           '#EBF2F9'],
    // Teal (Secondary)
    ['teal/900',          '#032624'],
    ['teal/800',          '#064B48'],
    ['teal/700',          '#0A706B'],
    ['teal/600',          '#0D958F'],
    ['teal/500',          '#10BAB3'],
    ['teal/400',          '#3FC7C1'],
    ['teal/300',          '#6FD5D1'],
    ['teal/200',          '#9FE3E0'],
    ['teal/100',          '#CFF1F0'],
    ['teal/50',           '#E7F8F7'],
    // Green (Tertiary)
    ['green/900',         '#1A260D'],
    ['green/800',         '#344D1A'],
    ['green/700',         '#4D7327'],
    ['green/600',         '#679934'],
    ['green/500',         '#81BF41'],
    ['green/400',         '#99D367'],
    ['green/300',         '#B2DE8D'],
    ['green/200',         '#CCE9B3'],
    ['green/100',         '#E5F4D9'],
    ['green/50',          '#F2FAEC'],
    // Neutral
    ['neutral/900',       '#111827'],
    ['neutral/800',       '#1F2937'],
    ['neutral/700',       '#374151'],
    ['neutral/600',       '#4B5563'],
    ['neutral/500',       '#6B7280'],
    ['neutral/400',       '#9CA3AF'],
    ['neutral/300',       '#D1D5DB'],
    ['neutral/200',       '#E5E7EB'],
    ['neutral/100',       '#F3F4F6'],
    ['neutral/50',        '#F9FAFB'],
    ['white',             '#FFFFFF'],
    // Semantic
    ['semantic/success',  '#10B981'],
    ['semantic/warning',  '#F59E0B'],
    ['semantic/error',    '#EF4444'],
    ['semantic/info',     '#3B82F6'],
  ]);
  console.log('✅ Colors done');

  // ════════════════════════════════════════════════════════════
  //  SPACING
  // ════════════════════════════════════════════════════════════
  const spacingCol = await collection('Centricity / Spacing');
  await bulkFloats(spacingCol, spacingCol.defaultModeId, [
    ['space/1',4],['space/2',8],['space/3',12],['space/4',16],
    ['space/5',20],['space/6',24],['space/8',32],['space/10',40],
    ['space/12',48],['space/16',64],['space/20',80],['space/24',96],
  ]);
  console.log('✅ Spacing done');

  // ════════════════════════════════════════════════════════════
  //  RADIUS
  // ════════════════════════════════════════════════════════════
  const radiusCol = await collection('Centricity / Radius');
  await bulkFloats(radiusCol, radiusCol.defaultModeId, [
    ['radius/xs',4],['radius/sm',6],['radius/md',10],
    ['radius/lg',16],['radius/xl',24],['radius/2xl',32],
    ['radius/pill',999],
  ]);
  console.log('✅ Radius done');

  figma.notify('✅ Colors · Spacing · Radius all done! Now run Script B for fonts.', { timeout: 5000 });
  figma.closePlugin();

})();
