const hyphenize = (spacedName) => spacedName.replace(/\s/g, "-");
const deHyphenize = (hyphenizedName) => hyphenizedName.replace(/-/g, " ");

export { hyphenize, deHyphenize };
