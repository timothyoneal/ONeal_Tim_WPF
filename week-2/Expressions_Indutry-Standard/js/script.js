// Tim ONeal expressions industry standard october 9 2013;

/*convert inches to pixels input from scanner*/

// convert pixels to inches.;

var heightInches = prompt("What is the height of your image? in inches");

var widthInches = prompt("What is the width of your image? in inches");

const dpiSetting = 200; // in reality this would be a var based on scanners settings using 200 dpi so math is easy to check;

// calculations formula is Inches X DPI = Pixels.; 

var pixelsHeight = heightInches * dpiSetting;

var pixelWidth = widthInches * dpiSetting;

// print out for picture size in pixels;
 
alert("The height of your image is " + pixelsHeight + " pixels. The width of your image is " + pixelWidth + " pixels.")

console.log("The height of your image is " + pixelsHeight + " pixels. The width of your image is " + pixelWidth + " pixels.")
