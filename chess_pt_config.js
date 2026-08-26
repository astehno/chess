// chess_pt_config.js
// Shared Configuration and Workflow Data Model

// This definition is used by both the builder (main page) 
// and the summary page to ensure consistency.

const workflowData = [
  {
    id: "s1", name: "1. Structure Selection", colorVar: "var(--tier-1-color)",
    subs: [
      { id: "1.1", name: "Levee" },
      { id: "1.2", name: "Floodwall" },
      { id: "1.3", name: "Rubble Mound" },
      { id: "1.4", name: "NNBF" },
      { id: "1.5", name: "Hydrodynamic-Hazards Only" }
    ]
  },
  {
    id: "s2", name: "2. Hydrodynamic Forcing", colorVar: "var(--tier-2-color)",
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
    id: "s3", name: "3. Probabilistic Sampling", colorVar: "var(--tier-3-color)",
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
    id: "s4", name: "4. Hydraulic Responses", colorVar: "var(--tier-4-color)",
    subs: [
      // Included here for the summary page. 
      // The builder script dynamically replaces this list when structures are selected.
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
    id: "s5", name: "5. Hazards & Uncertainty", colorVar: "var(--tier-5-color)",
    subs: [
      { id: "5.1", name: "JPM Analysis" },
      { id: "5.2", name: "LCS Statistical Analysis" },
      {
        id: "5.3", name: "Pre-Preprocessing",
        subs: [
          { id: "5.3.1", name: "Univariate: POT", dashed: true },
          { id: "5.3.2", name: "Univariate: MLM Fit", dashed: true },
          { id: "5.3.3", name: "Univariate: QQ Optimization", dashed: true },
          { id: "5.3.4", name: "Univariate: Bootstrap", dashed: true },
          { id: "5.3.5", name: "Univariate: PST", dashed: true },
          { id: "5.3.6", name: "Multivariate: Correlation", dashed: true },
          { id: "5.3.7", name: "Multivariate: Copula", dashed: true }
        ]
      },
      { id: "5.4", name: "Storm Sampling Tool" },
      { id: "5.5", name: "CIRP Integration" }
    ]
  },
  {
    id: "s6", name: "6. Outputs", colorVar: "var(--tier-6-color)",
    subs: [
      { id: "6.1", name: "Figures" },
      { id: "6.2", name: "Tables" }
    ]
  }
];

// Definition of which IDs have Wiki links and their URLs (used by Summary Page)
const coastalWikiLinks = {
  // Assume Wiki entries for main structural types
  "1.1": "https://example.com/wiki/Levee",
  "1.2": "https://example.com/wiki/Floodwall",
  "1.3": "https://example.com/wiki/RubbleMound",
  
  // High contrast highlighted cells
  "4.1.4": "https://example.com/wiki/LeveeCumulativeExcessVolume",
  "4.1.5": "https://example.com/wiki/LeveeCumulativeExcessWork",
  "4.4.1": "https://example.com/wiki/NNBF_WaveAttenuation",
  
  // Hazards
  "5.1": "https://example.com/wiki/JPM"
};

const wikiBaseUrl = "https://example.com/wiki/";
