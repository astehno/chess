// preset_loader.js
// Maintain this file independently in your Git repository.

function getPresetData(presetId) {
  let data = [];
  
  switch (presetId) {
    case 'chs_levee':
      data = [
        { stochasticItems: [{ id: "1.1", name: "Levee", colorVar: "var(--tier-1-color)" }], hydraulicItems: [] },
        { stochasticItems: [{ id: "2.1", name: "2.1 CHS Data", colorVar: "var(--tier-2-color)" }], hydraulicItems: [] },
        { stochasticItems: [{ id: "5.1", name: "JPM Analysis", colorVar: "var(--tier-5-color)" }], hydraulicItems: [] },
        { stochasticItems: [{ id: "3.2", name: "PROS - Frequency Based", colorVar: "var(--tier-3-color)" }], hydraulicItems: [{ id: "4.1.1", name: "Levee: Overtopping Rate", colorVar: "var(--tier-4-color)" }] },
        { stochasticItems: [{ id: "6.1", name: "Figures", colorVar: "var(--tier-6-color)" }], hydraulicItems: [] }
      ];
      break;
      
    case 'non_chs_rubble':
      data = [
        { stochasticItems: [{ id: "1.3", name: "Rubble Mound", colorVar: "var(--tier-1-color)" }], hydraulicItems: [] },
        { stochasticItems: [{ id: "2.2.1", name: "CDIP", colorVar: "var(--tier-2-color)", dashed: true }], hydraulicItems: [] },
        { stochasticItems: [{ id: "5.3.1", name: "Univariate: POT", colorVar: "var(--tier-5-color)", dashed: true }], hydraulicItems: [] },
        { stochasticItems: [{ id: "3.3", name: "PROS - Response Based", colorVar: "var(--tier-3-color)" }], hydraulicItems: [{ id: "4.3.1", name: "Rubble Mound: Seaside Stability", colorVar: "var(--tier-4-color)" }] }
      ];
      break;
      
    case 'lcs_hazard':
      data = [
        { stochasticItems: [{ id: "1.5", name: "Hydrodynamic-Hazards Only", colorVar: "var(--tier-1-color)" }], hydraulicItems: [] },
        { stochasticItems: [{ id: "2.3.1", name: "NOAA", colorVar: "var(--tier-2-color)", dashed: true }], hydraulicItems: [] },
        { stochasticItems: [{ id: "3.4", name: "LCS", colorVar: "var(--tier-3-color)" }], hydraulicItems: [{ id: "4.5.3", name: "Waves: Setup", colorVar: "var(--tier-4-color)", dashed: true }] },
        { stochasticItems: [{ id: "5.2", name: "LCS Statistical Analysis", colorVar: "var(--tier-5-color)" }], hydraulicItems: [] }
      ];
      break;
    
    // EXPORTED PRESET CONFIGURATIONS (Paste generated cases here)
    // case 'my_exported_preset':
    //   data = [ ... pasted data ... ];
    //   break;

    default:
      console.warn("Preset ID not recognized.");
  }
  
  return data;
}
