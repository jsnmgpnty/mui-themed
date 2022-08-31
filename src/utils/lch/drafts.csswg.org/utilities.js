// https://drafts.csswg.org/css-color-4/utilties.js

const {
  gam_sRGB,
  XYZ_to_lin_sRGB,
  D50_to_D65,
  Lab_to_XYZ,
  LCH_to_Lab,
  Lab_to_LCH,
  XYZ_to_Lab,
  D65_to_D50,
  lin_sRGB_to_XYZ,
  lin_sRGB,
} = require('./conversions');

function LCH_to_sRGB(LCH) {
  // convert an array of CIE LCH values
  // to CIE Lab, and then to XYZ,
  // adapt from D50 to D65,
  // then convert XYZ to linear-light sRGB
  // and finally to gamma corrected sRGB
  // for in-gamut colors, components are in the 0.0 to 1.0 range
  // out of gamut colors may have negative components
  // or components greater than 1.0
  // so check for that :)

  return gam_sRGB(XYZ_to_lin_sRGB(D50_to_D65(Lab_to_XYZ(LCH_to_Lab(LCH)))));
}

function sRGB_to_LCH(RGB) {
  // convert an array of gamma-corrected sRGB values
  // in the 0.0 to 1.0 range
  // to linear-light sRGB, then to CIE XYZ,
  // then adapt from D65 to D50,
  // then convert XYZ to CIE Lab
  // and finally, convert to CIE LCH

  return Lab_to_LCH(XYZ_to_Lab(D65_to_D50(lin_sRGB_to_XYZ(lin_sRGB(RGB)))));
}

module.exports = {
  LCH_to_sRGB,
  sRGB_to_LCH,
};
