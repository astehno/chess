// chess_pt_core.js
// Single Source of Truth for Schema, Pre-Made Workflows, Dependencies, Validation, and Storage

// ============================================================================
// 1. WORKFLOW DATA SCHEMA
// ============================================================================
const CHESS_WORKFLOW_SCHEMA = [
  {
    id: "s1", name: "1. Structure Selection", colorVar: "var(--tier-1-color, #e3f2fd)",
    subs: [
      { id: "1.1", name: "Levee" },
      { id: "1.2", name: "Floodwall" },
      { id: "1.3", name: "Rubble Mound" },
      { id: "1.4", name: "NNBF" },
      { id: "1.5", name: "Hydrodynamic-Hazards Only" }
    ]
  },
  {
    id: "s2", name: "2. Hydrodynamic Forcing", colorVar: "var(--tier-2-color, #e0f2f1)",
    subs: [
      { id: "2.1", name: "CHS Data" },
      { id: "2.2.1", name: "Waves: CDIP", dashed: true },
      { id: "2.2.2", name: "Waves: WIS", dashed: true },
      { id: "2.2.3", name: "Waves: MOPS", dashed: true },
      { id: "2.2.4", name: "Waves: Locally Measured", dashed: true },
      { id: "2.3.1", name: "WL: NOAA", dashed: true },
      { id: "2.3.2", name: "WL: Locally Measured", dashed: true },
      { id: "2.4", name: "Manual Deterministic Entry" }
    ]
  },
  {
    id: "s3", name: "3. Probabilistic Sampling", colorVar: "var(--tier-3-color, #fff3e0)",
    subs: [
      { id: "3.1", name: "Deterministic" },
      { id: "3.2", name: "PROS - Frequency Based" },
      { id: "3.3", name: "PROS - Response Based" },
      { id: "3.4", name: "LCS" },
      { id: "3.5", name: "Random Tide Sampling" },
      { id: "3.6", name: "Include RSLC" }
    ]
  },
  {
    id: "s4", name: "4. Hydraulic Responses", colorVar: "var(--tier-4-color, #f3e5f5)",
    subs: [
      { id: "4.1.1", name: "Levee: Overtopping Rate" },
      { id: "4.1.2", name: "Levee: Overtopping Volume", dashed: true },
      { id: "4.1.3", name: "Levee: Runup" },
      { id: "4.1.4", name: "Levee: Cumulative Excess Vol", dashed: true, highlight: true },
      { id: "4.1.5", name: "Levee: Cumulative Excess Work", dashed: true, highlight: true },
      { id: "4.2.1", name: "Floodwall: Overtopping Rate" },
      { id: "4.2.2", name: "Floodwall: Overtopping Vol" },
      { id: "4.2.3", name: "Floodwall: Nappe Geometry" },
      { id: "4.2.4", name: "Floodwall: Pressures & Forces" },
      { id: "4.3.1", name: "Rubble Mound: Seaside Stability" },
      { id: "4.3.2", name: "Rubble Mound: Leeside Stability" },
      { id: "4.3.3", name: "Rubble Mound: Wave Transmission" },
      { id: "4.3.4", name: "Rubble Mound: Runup" },
      { id: "4.3.5", name: "Rubble Mound: Overtopping Rate" },
      { id: "4.3.6", name: "Rubble Mound: Overtopping Vol" },
      { id: "4.4.1", name: "NNBF: Wave Attenuation", dashed: true, highlight: true },
      { id: "4.5.1", name: "Waves: Wind-Generated", dashed: true },
      { id: "4.5.2", name: "Waves: Wave Transformation", dashed: true },
      { id: "4.5.3", name: "Waves: Setup", dashed: true }
    ]
  },
  {
    id: "s5", name: "5. Hazards & Uncertainty", colorVar: "var(--tier-5-color, #ede7f6)",
    subs: [
      { id: "5.1", name: "JPM Analysis" },
      { id: "5.2", name: "LCS Statistical Analysis" },
      { id: "5.3", name: "Pre-Preprocessing" },
      { id: "5.3.1", name: "Univariate: POT", dashed: true },
      { id: "5.3.2", name: "Univariate: MLM Fit", dashed: true },
      { id: "5.3.3", name: "Univariate: QQ Optimization", dashed: true },
      { id: "5.3.4", name: "Univariate: Bootstrap", dashed: true },
      { id: "5.3.5", name: "Univariate: PST", dashed: true },
      { id: "5.3.6", name: "Multivariate: Correlation", dashed: true },
      { id: "5.3.7", name: "Multivariate: Copula", dashed: true },
      { id: "5.4", name: "Storm Sampling Tool" },
      { id: "5.5", name: "CIRP Integration" }
    ]
  },
  {
    id: "s6", name: "6. Outputs", colorVar: "var(--tier-6-color, #e8f5e9)",
    subs: [
      { id: "6.1", name: "Figures" },
      { id: "6.2", name: "Tables" }
    ]
  }
];

// Coastal Wiki Link Mapping
const CHESS_WIKI_MAP = {
  "1.1": "https://example.com/wiki/Levee",
  "1.2": "https://example.com/wiki/Floodwall",
  "1.3": "https://example.com/wiki/RubbleMound",
  "4.1.4": "https://example.com/wiki/LeveeCumulativeExcessVolume",
  "4.1.5": "https://example.com/wiki/LeveeCumulativeExcessWork",
  "4.4.1": "https://example.com/wiki/NNBF_WaveAttenuation",
  "5.1": "https://example.com/wiki/JPM"
};

// ============================================================================
// 2. PRE-MADE WORKFLOW TEMPLATES
// ============================================================================
const PREMADE_WORKFLOWS = {
  "standard_levee": {
    name: "Standard Levee Risk Assessment",
    items: ["1.1", "2.1", "3.2", "4.1.1", "4.1.4", "5.1", "6.1", "6.2"]
  },
  "floodwall_deterministic": {
    name: "Floodwall Deterministic Design",
    items: ["1.2", "2.4", "3.1", "4.2.1", "4.2.4", "6.1"]
  },
  "rubble_mound_wave": {
    name: "Rubble Mound Wave Transmission Study",
    items: ["1.3", "2.2.1", "2.3.1", "3.3", "4.3.3", "4.3.5", "5.2", "6.1"]
  },
  "hydro_hazards": {
    name: "Hydrodynamic Hazards Only",
    items: ["1.5", "2.1", "3.2", "5.1", "5.4", "6.1", "6.2"]
  }
};

// ============================================================================
// 3. DEPENDENCY & VALIDATION RULES
// ============================================================================
const CHESS_GRAYOUT_RULES = {
  "1.5": ["4.1.1", "4.1.2", "4.1.3", "4.1.4", "4.1.5", "4.2.1", "4.2.2", "4.2.3", "4.2.4", "4.3.1", "4.3.2", "4.3.3", "4.3.4", "4.3.5", "4.3.6", "4.4.1"],
  "1.1": ["4.2.1", "4.2.2", "4.2.3", "4.2.4", "4.3.1", "4.3.2", "4.3.3", "4.3.4", "4.3.5", "4.3.6"],
  "1.2": ["4.1.1", "4.1.2", "4.1.3", "4.1.4", "4.1.5", "4.3.1", "4.3.2", "4.3.3", "4.3.4", "4.3.5", "4.3.6"]
};

const CHESS_VALIDATION_RULES = [
  {
    id: "ERR_NO_STRUCTURE",
    type: "error",
    check: (selections) => !Array.from(selections).some(id => id.startsWith("1.")),
    message: "At least one Tier 1 Structure Selection must be placed on the canvas."
  },
  {
    id: "WARN_CONFLICT_SAMPLING",
    type: "warning",
    check: (selections) => selections.has("3.1") && selections.has("3.2"),
    message: "Combining Deterministic (3.1) and PROS Frequency-Based (3.2) sampling may yield redundant runs."
  },
  {
    id: "WARN_DISABLED_SELECTION",
    type: "warning",
    check: (selections, grayedOutSet) => Array.from(selections).some(id => grayedOutSet.has(id)),
    message: "Your active canvas contains items disabled by higher-tier selection rules."
  }
];

// ============================================================================
// 4. COMPUTATION & PERSISTENCE HELPERS
// ============================================================================
function buildItemLookupMap() {
  const map = new Map();
  CHESS_WORKFLOW_SCHEMA.forEach(tier => {
    tier.subs.forEach(sub => {
      map.set(sub.id, { ...sub, colorVar: tier.colorVar, tierName: tier.name });
    });
  });
  return map;
}

const CHESS_ITEM_MAP = buildItemLookupMap();

function calculateGrayedOutIds(selectedIds) {
  const grayed = new Set();
  selectedIds.forEach(id => {
    const targets = CHESS_GRAYOUT_RULES[id] || [];
    targets.forEach(targetId => grayed.add(targetId));
  });
  return grayed;
}

function evaluateWorkflowStatus(selectedIds) {
  const grayedOutSet = calculateGrayedOutIds(selectedIds);
  const results = [];
  CHESS_VALIDATION_RULES.forEach(rule => {
    if (rule.check(selectedIds, grayedOutSet)) {
      results.push({ id: rule.id, type: rule.type, message: rule.message });
    }
  });
  return results;
}

function saveWorkflowState(selectedIds) {
  localStorage.setItem("chess_active_selections", JSON.stringify(Array.from(selectedIds)));
}

function loadWorkflowState() {
  const rawData = localStorage.getItem("chess_active_selections");
  return rawData ? new Set(JSON.parse(rawData)) : new Set();
}
