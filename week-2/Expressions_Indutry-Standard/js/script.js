// Tim ONeal expressions industry standard october 9 2013;

/*convert inches to pixels input from scanner Inches X DPI = Pixels*/

// convert pixels to inches.;

var heightInches = prompt("What is the height of your image? in inches");

var widthInches = prompt("What is the width of your image? in inches");

const dpiSetting = 200; // in reality this would be a var bsed on scanners settings using 200 dpi so math is easy to check;

// calculations formula is Inches X DPI = Pixels.; 

var pixelsHeight = heightInches * dpiSetting;

var pixelWidth = widthInches * dpiSetting;

// print out for picture size in pixels;