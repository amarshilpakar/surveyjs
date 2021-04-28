function init() {
  var surveyJSON = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "matrix",
            name: "Quality",
            title:
              "Please indicate if you agree or disagree with the following statements",
            columns: [
              {
                value: 1,
                text: "Strongly Disagree"
              },
              {
                value: 2,
                text: "Disagree"
              },
              {
                value: 3,
                text: "Neutral"
              },
              {
                value: 4,
                text: "Agree"
              },
              {
                value: 5,
                text: "Strongly Agree"
              }
            ],
            rows: [
              {
                value: "affordable",
                text: "Product is affordable"
              },
              {
                value: "does what it claims",
                text: "Product does what it claims"
              },
              {
                value: "better then others",
                text: "Product is better than other products on the market"
              },
              {
                value: "easy to use",
                text: "Product is easy to use"
              }
            ]
          },
          {
            type: "rating",
            name: "satisfaction",
            title: "How satisfied are you with the Product?",
            minRateDescription: "Not Satisfied",
            maxRateDescription: "Completely satisfied"
          },
          {
            type: "rating",
            name: "recommend friends",
            visible: false,
            visibleIf: "{satisfaction} > 3",
            title:
              "How likely are you to recommend the Product to a friend or co-worker?",
            minRateDescription: "Will not recommend",
            maxRateDescription: "I will recommend"
          },
          {
            type: "comment",
            name: "suggestions",
            title: "What would make you more satisfied with the Product?"
          }
        ]
      },
      {
        name: "page2",
        elements: [
          {
            type: "radiogroup",
            name: "price to competitors",
            title: "Compared to our competitors, do you feel the Product is",
            choices: [
              "Less expensive",
              "Priced about the same",
              "More expensive",
              "Not sure"
            ]
          },
          {
            type: "radiogroup",
            name: "price",
            title: "Do you feel our current price is merited by our product?",
            choices: [
              {
                value: "correct",
                text: "Yes, the price is about right"
              },
              {
                value: "low",
                text: "No, the price is too low for your product"
              },
              {
                value: "high",
                text: "No, the price is too high for your product"
              }
            ]
          },
          {
            type: "multipletext",
            name: "pricelimit",
            title: "What is the... ",
            items: [
              {
                name: "mostamount",
                title: "Most amount you would every pay for a product like ours"
              },
              {
                name: "leastamount",
                title: "The least amount you would feel comfortable paying"
              }
            ]
          }
        ]
      },
      {
        name: "page3",
        elements: [
          {
            type: "text",
            name: "email",
            title:
              "Thank you for taking our survey. Your survey is almost complete, please enter your email address in the box below if you wish to participate in our drawing, then press the 'Submit' button."
          }
        ]
      }
    ]
  }
  //create the container
var surveydiv = document.createElement('div');
surveydiv.id = "surveyElement"
//document.body.appendChild(surveydiv);

var modal = document.createElement('div');
modal.style.cssText = 'position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index:99999997';
modal.appendChild(surveydiv);

var backdrop = document.createElement('div');
backdrop.style.cssText = 'position: fixed;z-index: 9999;inset: 0px;background: rgb(85, 85, 85);opacity: 0.8;';
backdrop.addEventListener("click", function() {
  document.body.removeChild(backdrop);
  document.body.removeChild(modal);
});



//copied from https://codepen.io/cjmosure/pen/WQQRjo
//css could be easily tweaked
fbBtn = document.createElement('div');
  fbBtn.id = 'floatedFeedback';
  fbBtn.innerHTML = '<a href="javascript:showSurvey()" target="_self">Feedback</a>';
  if (document.body !== null) {
      document.body.appendChild(fbBtn);
  } else console.log("document.body not ready");
  // CSS
  var fbStyles = document.createElement('style')
  fbStyles.innerHTML = '#floatedFeedback{background-color: #1fb0d3; font-family: sans-serif; font-size: 14px; font-weight: bold; position: fixed; right: 0;top: 40%;margin: 0;border-radius: 5px 5px 0px 0px;moz-transform: rotate(-90deg);ms-transform: rotate(-90deg);o-transform: rotate(-90deg);webkit-transform: rotate(-90deg);transform: rotate(-90deg);text-align: center;z-index: 15;transform-origin: bottom right;}#floatedFeedback a{text-decoration:none;text-transform:uppercase;color:#fff;padding:6px 12px;display:block}#floatedFeedback a:hover{padding:6px 12px 8px}'
  document.getElementsByTagName('head')[0].appendChild(fbStyles)
    var css = {
    root: "sv_main sv_frame sv_default_css"
  };
  fbBtn.addEventListener("click", function() {
    console.log('button clicked');
    document.body.appendChild(backdrop);
    document.body.appendChild(modal);
    var survey = new Survey.Model(surveyJSON);
    $("#surveyElement").Survey({
      model:survey
    });
  });
 
  // var surveyWindow = new Survey.SurveyWindow(surveyJSON);
  // surveyWindow.css = css;
  // surveyWindow.show();
//   var survey = new Survey.Model(surveyJSON);
//   $("#surveyElement").Survey({
//     model:survey
// });
// survey.css = css;
//   window.survey = survey;
//   survey.render("surveyElement");

}

var afterLoadjquery = function() {
  //loadJS('https://unpkg.com/survey-knockout', afterLoadSurvey, document.head);
  loadJS('https://unpkg.com/survey-jquery', afterLoadSurvey);
  loadJS('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js');
}

var afterLoadSurvey = function(){
  //your code goes here
  init();
}


var loadJS = function(url, implementationCode){
  //url is URL of external file
  //to be called from the file, location is the location to 
  //insert the <script> element

  var scriptTag = document.createElement('script');
  scriptTag.onload = implementationCode;
  scriptTag.src = url;
  document.head.appendChild(scriptTag);
};

var loadCSS = function(url){
  var cssTag = document.createElement('link');
  cssTag.rel  = 'stylesheet';
  cssTag.type = 'text/css';
  cssTag.href = url;
  document.head.appendChild(cssTag);
};



 
// document.addEventListener("DOMContentLoaded", function(event) {
//   loadCSS('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
//   loadCSS('https://unpkg.com/survey-jquery/survey.min.css');
//   // Your code to run since DOM is loaded and ready
//   // console.log("dom loaded");
//   //loadJS('https://cdnjs.cloudflare.com/ajax/libs/knockout/3.3.0/knockout-min.js', afterLoadjquery, document.body);  
//   loadJS('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', afterLoadjquery);  
  
// });

function initialize () {
  loadCSS('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
  loadCSS('https://unpkg.com/survey-jquery/survey.min.css');
  // Your code to run since DOM is loaded and ready
  // console.log("dom loaded");
  //loadJS('https://cdnjs.cloudflare.com/ajax/libs/knockout/3.3.0/knockout-min.js', afterLoadjquery, document.body);  
  loadJS('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', afterLoadjquery); 
}

initialize ();



