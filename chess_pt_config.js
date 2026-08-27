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
      { id: "1.5", name: "Hydrodynamic-Hazards Only" },
      { id: "1.6", name: "Beaches" }
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
    { id: "4.1.1", name: "Levee: Overtopping Rate", colorVar: "var(--tier-4-color)" },
    { id: "4.1.2", name: "Levee: Overtopping Vol", colorVar: "var(--tier-4-color)"},
    { id: "4.1.3", name: "Levee: Runup", colorVar: "var(--tier-4-color)" },
    { id: "4.1.4", name: "Levee: Cumulative Excess Vol", colorVar: "var(--tier-4-color)", dashed: true },
    { id: "4.1.5", name: "Levee: Cumulative Excess Work", colorVar: "var(--tier-4-color)", dashed: true },
    { id: "4.2.1", name: "Floodwall: Overtopping Rate", colorVar: "var(--tier-4-color)" },
    { id: "4.2.2", name: "Floodwall: Overtopping Vol", colorVar: "var(--tier-4-color)" },
    { id: "4.2.3", name: "Floodwall: Nappe Geometry", colorVar: "var(--tier-4-color)" },
    { id: "4.2.4", name: "Floodwall: Pressures & Forces", colorVar: "var(--tier-4-color)" },
    { id: "4.3.1", name: "Rubble Mound: Seaside Stability", colorVar: "var(--tier-4-color)" },
    { id: "4.3.2", name: "Rubble Mound: Leeside Stability", colorVar: "var(--tier-4-color)" },
    { id: "4.3.3", name: "Rubble Mound: Wave Transmission", colorVar: "var(--tier-4-color)" },
    { id: "4.3.4", name: "Rubble Mound: Runup", colorVar: "var(--tier-4-color)" },
    { id: "4.3.5", name: "Rubble Mound: Overtopping Rate", colorVar: "var(--tier-4-color)" },
    { id: "4.3.6", name: "Rubble Mound: Overtopping Vol", colorVar: "var(--tier-4-color)" },
    { id: "4.3.7", name: "Rubble Mound: Toe Protection Design", colorVar: "var(--tier-4-color)", dashed: true },
    { id: "4.3.7", name: "Rubble Mound: Revetment Design", colorVar: "var(--tier-4-color)", dashed: true },
    { id: "4.4.1", name: "NNBF: Wave Attenuation", colorVar: "var(--tier-4-color)", dashed: true },
    { id: "4.4.2", name: "NNBF: Wave Transmission", colorVar: "var(--tier-4-color)", dashed: true },
    { id: "4.4.2", name: "NNBF: Veg Growth/Decay", colorVar: "var(--tier-4-color)", dashed: true },
    { id: "4.5.1", name: "Waves: Wind-Generated", colorVar: "var(--tier-4-color)", dashed: true },
    { id: "4.5.2", name: "Waves: Wave Transformation", colorVar: "var(--tier-4-color)", dashed: true },
    { id: "4.5.3", name: "Waves: Linear Wave Theory", colorVar: "var(--tier-4-color)", dashed: true },
    { id: "4.5.4", name: "Waves: Cnoidal Wave Theory", colorVar: "var(--tier-4-color)", dashed: true },
    { id: "4.5.5", name: "Waves: Fourier Series Wave Theory", colorVar: "var(--tier-4-color)", dashed: true },
    { id: "4.5.6", name: "Waves: Stochastic Peak Value Sampler", colorVar: "var(--tier-4-color)", dashed: true },
    { id: "4.6.1", name: "Beaches: Setup", colorVar: "var(--tier-4-color)", dashed: true },
    { id: "4.6.2", name: "Beaches: Irregular Wave Runup", colorVar: "var(--tier-4-color)", dashed: true },
    { id: "4.6.3", name: "Beaches: Longshore Sediment Transport", colorVar: "var(--tier-4-color)", dashed: true },
    { id: "4.6.4", name: "Beaches: Time-Dependent Beach and Dune Erosion", colorVar: "var(--tier-4-color)", dashed: true },
    { id: "4.6.5", name: "Beaches: Nourishment Overfill Ratio and Volume", colorVar: "var(--tier-4-color)", dashed: true },
    { id: "4.6.6", name: "Beaches: Composite Grain-Size Distribution", colorVar: "var(--tier-4-color)", dashed: true },
    { id: "4.6.7", name: "Beaches: Longshore Transport using CEDRS Stats", colorVar: "var(--tier-4-color)", dashed: true }
    ]
  },
  {
    id: "s5", name: "5. Hazards & Uncertainty", colorVar: "var(--tier-5-color)",
    subs: [
      { id: "5.1", name: "Univariate: JPM Analysis" },
      { id: "5.2", name: "LCS Statistical Analysis" },
      { id: "5.3", name: "Univariate: PST" },
      { id: "5.4", name: "Univariate: POT", dashed: true },
      { id: "5.5", name: "Univariate: MLM Fit", dashed: true },
      { id: "5.6", name: "Univariate: QQ Optimization", dashed: true },
      { id: "5.7", name: "Univariate: Bootstrap", dashed: true },
      { id: "5.8", name: "Multivariate: Correlation", dashed: true },
      { id: "5.9", name: "Multivariate: Copula", dashed: true },
      { id: "5.10", name: "Storm Sampling Tool", dashed: true},
      { id: "5.11", name: "CIRP Integration", dashed: true },
      { id: "5.12", name: "Water Level Detrending", dashed: true },
      { id: "5.13", name: "Non-Tidal Residual", dashed: true }
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
