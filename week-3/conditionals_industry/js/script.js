// tim oneal conditional industry october 17, 2013;



/*A client has a banner on their website the they would like to use in a print and campaign. They would like it to take up a full page in an upcoming magazine, we know the pages in the magazine are 8.5 in. by 11 in. Can the the banner be printed with out additional editing.*/

var bannerWidth=prompt("What is the banner width in pixels?");      // input should be a number;

var bannerHeight=prompt("What is the banner height in pixels?");     // input should be a number.;



const printerDPI=600;       //printer prints at 600 dpi;

const magPageWidth=8.5;     // magazizine page width;

const magPageheight=11;     // magazizine page height;


//You should declare a variable before you attempt to use it.
var bannerWidthInches=bannerWidth/printerDPI;   // pixels/dpi=inches;


var bannerHeightInches=bannerHeight/printerDPI; // pixels/dpi=inches;

// can banner be printed as full page add without further editting?;

if (bannerWidthInches==magPageWidth&&bannerHeightInches==magPageheight) {
    // no further editting needed.;
    console.log("There is no further editting needed.");
}else{
    // further editting is required.;
    console.log("Further editting is required.");
}



