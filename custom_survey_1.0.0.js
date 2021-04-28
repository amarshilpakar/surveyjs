function init() {
  var surveyJSON = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            "type": "cesrating",
            "name": "Vraag3",
            "title": "CES: hoeveel moeite moest u doen voordat uw probleem werd opgelost?",
            "minRateDescription": "zeer weinig moeite",
            "maxRateDescription": "zeer veel moeite",
          },
          {
            "type": "nps-eurating",
            "name": "Vraag5",
            "title": "NPS-EU: hoe waarschijnlijk is het dat u ons bedrijf/product zou aanbevelen aan een vriend of kennis?",
            "minRateDescription": "helemaal niet waarschijnlijk",
            "maxRateDescription": "zeer waarschijnlijk",
            "theme": "label-Emoji"
           },
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
  backdrop.addEventListener("click", function () {
    document.body.removeChild(backdrop);
    document.body.removeChild(modal);
  });

  CesRating();
  NpsEuRating();

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
  fbStyles.innerHTML = `#floatedFeedback{background-color: #1fb0d3; font-family: sans-serif; font-size: 14px; font-weight: bold; position: fixed; right: 0;top: 40%;margin: 0;border-radius: 5px 5px 0px 0px;moz-transform: rotate(-90deg);ms-transform: rotate(-90deg);o-transform: rotate(-90deg);webkit-transform: rotate(-90deg);transform: rotate(-90deg);text-align: center;z-index: 15;transform-origin: bottom right;}#floatedFeedback a{text-decoration:none;text-transform:uppercase;color:#fff;padding:6px 12px;display:block}#floatedFeedback a:hover{padding:6px 12px 8px} .ktv-icons {cursor: pointer;height: 40px;width: 40px;} 
  .emo-div-bg, .ktvEmo-div-bg {
    cursor: pointer;
    background-color: #f3f3f3;
    border: 1px solid #ddd;
  }
  .emo-div-bg {
    padding: 10px;
  } 
  .ces-div-bg {
    padding: 5px 52.9px;
  }
  .ces-div-bg, .nps-div-bg {
    cursor: pointer;
    background-color: #f3f3f3;
    border: 1px solid #ddd;
}
  `
  document.getElementsByTagName('head')[0].appendChild(fbStyles)
  var css = {
    root: "sv_main sv_frame sv_default_css"
  };
  fbBtn.addEventListener("click", function () {
    console.log('button clicked');
    document.body.appendChild(backdrop);
    document.body.appendChild(modal);
    var survey = new Survey.Model(surveyJSON);
    //custom control......
    $("#surveyElement").Survey({
      model: survey
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

var afterLoadjquery = function () {
  //loadJS('https://unpkg.com/survey-knockout', afterLoadSurvey, document.head);
  loadJS('https://unpkg.com/survey-jquery', afterLoadSurvey);
  loadJS('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js');
}

var afterLoadSurvey = function () {
  //your code goes here
  init();
}


var loadJS = function (url, implementationCode) {
  //url is URL of external file
  //to be called from the file, location is the location to 
  //insert the <script> element

  var scriptTag = document.createElement('script');
  scriptTag.onload = implementationCode;
  scriptTag.src = url;
  document.head.appendChild(scriptTag);
};

var loadCSS = function (url) {
  var cssTag = document.createElement('link');
  cssTag.rel = 'stylesheet';
  cssTag.type = 'text/css';
  cssTag.href = url;
  document.head.appendChild(cssTag);
};

function CesRating() {
  var template1;
  var template2;
  var template3;
  var cesRating = {
    name: "cesrating",
    title: "CES score",
    iconName: "icon-rating",
    category: translate('label-Standard'),
    widgetIsLoaded: function () {
      return true;
    },
    defaultJSON: {
      type: "cesrating",
      entity: "cesrating",
      maxRateDescription: "zeer veel moeite",
      minRateDescription: "zeer weinig moeite"
    },
    isFit: function (question) {
      if (question.getType() === "cesrating") {
        if (!question.theme || question.theme == "") {
          question.theme = 'label-Standard';
        }
        // template = getData(question);
        // console.log("this is..template.", template)

      }
      return question.getType() === "cesrating";
    },
    isDefaultRender: false,
    htmlTemplate: `<div></div>`,

    activatedByChanged: function (activatedBy) {
      Survey.JsonObject.metaData.addClass(
        "cesrating", [
        { name: "rateStep", visible: false },
        { name: "rateValues", visible: false },
        { name: "rateMin", visible: true, readOnly: true },
        { name: "rateMax", visible: false },
      ],
        null,
        "rating"
      );
    },
    afterRender: function (question, el) {
      let paddingMin;
      let paddingMax;
      if (question.minRateDescription == "") {
        paddingMin = "0px";
      } else {
        paddingMin = "5px";
      }
      if (question.maxRateDescription == "") {
        paddingMax = "0px";
      } else {
        paddingMax = "5px";
      }
      if (question.getType() === "cesrating") {
        if (question.theme == 'label-Emoji') {
          template1 = `<div class="widgetRatingWidth">
                  <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                      <div style="display: flex; justify-content: flex-start; align-items: center; padding-right: ${paddingMin}">
                      <label style="font-weight: normal;">` + question.minRateDescription + `</label>
                      </div>
                      <div id="divChoice1" class="cesEmo-div-bg" style="border-top: 6px solid #499c1b; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice1" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-5.png" alt="` + translate('label-RatingVeryBad') + `" class="ktv-icons">
                      </div>
                      <div id="divChoice2" class="cesEmo-div-bg" style="border-top: 6px solid #adbd0c; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice2" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-4.png" alt="` + translate('label-RatingBad') + `" class="ktv-icons">
                      </div>
                      <div id="divChoice3" class="cesEmo-div-bg" style="border-top: 6px solid #ffd600; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice3" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-3.png" alt="` + translate('label-RatingNeutral') + `" class="ktv-icons">
                      </div>
                      <div id="divChoice4" class="cesEmo-div-bg" style="border-top: 6px solid #ed9800; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice4" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-2.png" alt="` + translate('label-RatingGood') + `" class="ktv-icons">            
                      </div>
                      <div id="divChoice5" class="cesEmo-div-bg" style="border-top: 6px solid #cb1d00; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice5" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingExcellent') + `" class="ktv-icons">
                      </div>
                      <div style="display: flex; justify-content: flex-start; align-items: center; padding-left: ${paddingMax}">
                      <label style="font-weight: normal;">` + question.maxRateDescription + `</label>
                      </div>
                  </div>
              </div>`;

          el.innerHTML = template1;
        } else if (question.theme == 'label-ColorGradient') {
          template2 = `<div>
                  <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                      <div style="display: flex; justify-content: flex-start; align-items: center; padding-right: ${paddingMin}">
                      <label style="font-weight: normal;">` + question.minRateDescription + `</label>
                      </div>
                      <div id="divChoice1" class="ces-div-bg" style="border-top: 6px solid #499c1b; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">1</label>
                      </div>
                      <div id="divChoice2" class="ces-div-bg" title="weinig moeite" style="border-top: 6px solid #adbd0c; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">2</label>
                      </div>
                      <div id="divChoice3" class="ces-div-bg" title="verwachte moeite" style="border-top: 6px solid #ffd600; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">3</label>
                      </div>
                      <div id="divChoice4" class="ces-div-bg" title="veel moeite" style="border-top: 6px solid #ed9800; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">4</label>           
                      </div>
                      <div id="divChoice5" class="ces-div-bg" style="border-top: 6px solid #cb1d00; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;" popper="{{ 'label-Delete' | translate }}">5</label>
                      </div>
                      <div style="display: flex; justify-content: flex-start; align-items: center; padding-left: ${paddingMax}">
                      <label style="font-weight: normal;">` + question.maxRateDescription + `</label>
                      </div>
                  </div>
              </div>`;
          el.innerHTML = template2;
        } else {
          template3 = `<div>
                  <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                      <div style="display: flex; justify-content: flex-start; align-items: center; padding-right: ${paddingMin}">
                      <label style="font-weight: normal;">` + question.minRateDescription + `</label>
                      </div>
                      <div id="divChoice1" class="ces-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">1</label>
                      </div>
                      <div id="divChoice2" class="ces-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">2</label>
                      </div>
                      <div id="divChoice3" class="ces-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">3</label>
                      </div>
                      <div id="divChoice4" class="ces-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">4</label>           
                      </div>
                      <div id="divChoice5" class="ces-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">5</label>
                      </div>
                      <div style="display: flex; justify-content: flex-start; align-items: center; padding-left: ${paddingMax}">
                      <label style="font-weight: normal;">` + question.maxRateDescription + `</label>
                      </div>
                  </div>
              </div>`;

          el.innerHTML = template3;
        }
      }
      question.registerFunctionOnPropertyValueChanged("theme", (newValue) => {
        if (question.getType() === "cesrating") {
          if (question.theme == 'label-Emoji') {
            template1 = `<div class="widgetRatingWidth">
                      <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                          <div style="display: flex; justify-content: flex-start; align-items: center; padding-right: ${paddingMin}">
                          <label style="font-weight: normal;">` + question.minRateDescription + `</label>
                          </div>
                          <div id="divChoice1" class="cesEmo-div-bg" style="border-top: 6px solid #499c1b; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice1" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-5.png" alt="` + translate('label-RatingVeryBad') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice2" class="cesEmo-div-bg" style="border-top: 6px solid #adbd0c; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice2" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-4.png" alt="` + translate('label-RatingBad') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice3" class="cesEmo-div-bg" style="border-top: 6px solid #ffd600; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice3" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-3.png" alt="` + translate('label-RatingNeutral') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice4" class="cesEmo-div-bg" style="border-top: 6px solid #ed9800; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice4" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-2.png" alt="` + translate('label-RatingGood') + `" class="ktv-icons">            
                          </div>
                          <div id="divChoice5" class="cesEmo-div-bg" style="border-top: 6px solid #cb1d00; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice5" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingExcellent') + `" class="ktv-icons">
                          </div>
                          <div style="display: flex; justify-content: flex-start; align-items: center; padding-left: ${paddingMax}">
                          <label style="font-weight: normal;">` + question.maxRateDescription + `</label>
                          </div>
                      </div>
                  </div>`;

            el.innerHTML = template1;
          } else if (question.theme == 'label-ColorGradient') {
            template2 = `<div>
                      <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                          <div style="display: flex; justify-content: flex-start; align-items: center; padding-right: ${paddingMin}">
                          <label style="font-weight: normal;">` + question.minRateDescription + `</label>
                          </div>
                          <div id="divChoice1" class="ces-div-bg" style="border-top: 6px solid #499c1b; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">1</label>
                          </div>
                          <div id="divChoice2" class="ces-div-bg" title="weinig moeite" style="border-top: 6px solid #adbd0c; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">2</label>
                          </div>
                          <div id="divChoice3" class="ces-div-bg" title="verwachte moeite" style="border-top: 6px solid #ffd600; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">3</label>
                          </div>
                          <div id="divChoice4" class="ces-div-bg" title="veel moeite" style="border-top: 6px solid #ed9800; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">4</label>           
                          </div>
                          <div id="divChoice5" class="ces-div-bg" style="border-top: 6px solid #cb1d00; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;" popper="{{ 'label-Delete' | translate }}">5</label>
                          </div>
                          <div style="display: flex; justify-content: flex-start; align-items: center; padding-left: ${paddingMax}">
                          <label style="font-weight: normal;">` + question.maxRateDescription + `</label>
                          </div>
                      </div>
                  </div>`;
            el.innerHTML = template2;
          } else {
            template3 = `<div>
                      <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                          <div style="display: flex; justify-content: flex-start; align-items: center; padding-right: ${paddingMin}">
                          <label style="font-weight: normal;">` + question.minRateDescription + `</label>
                          </div>
                          <div id="divChoice1" class="ces-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">1</label>
                          </div>
                          <div id="divChoice2" class="ces-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">2</label>
                          </div>
                          <div id="divChoice3" class="ces-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">3</label>
                          </div>
                          <div id="divChoice4" class="ces-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">4</label>           
                          </div>
                          <div id="divChoice5" class="ces-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">5</label>
                          </div>
                          <div style="display: flex; justify-content: flex-start; align-items: center; padding-left: ${paddingMax}">
                          <label style="font-weight: normal;">` + question.maxRateDescription + `</label>
                          </div>
                      </div>
                  </div>`;

            el.innerHTML = template3;
          }
        }
      });
      var onChoiceClicked = function (value) {
        for (var i = 1; i <= 5; i++) {
          if (i == value) {
            if (i == 1) {
              if (question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                el.querySelector("#divChoice" + i).style.borderTop = "6px solid #499c1b";
              }
              el.querySelector("#divChoice" + i).opacity = "1";
              el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
            } else if (i == 2) {
              if (question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                el.querySelector("#divChoice" + i).style.borderTop = "6px solid #adbd0c";
              }
              el.querySelector("#divChoice" + i).opacity = "1";
              el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
            } else if (i == 3) {
              if (question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                el.querySelector("#divChoice" + i).style.borderTop = "6px solid #ffd600";
              }
              el.querySelector("#divChoice" + i).opacity = "1";
              el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
            } else if (i == 4) {
              if (question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                el.querySelector("#divChoice" + i).style.borderTop = "6px solid #ed9800";
              }
              el.querySelector("#divChoice" + i).opacity = "1";
              el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
            } else if (i == 5) {
              if (question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                el.querySelector("#divChoice" + i).style.borderTop = "6px solid #cb1d00";
              }
              el.querySelector("#divChoice" + i).opacity = "1";
              el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
            }
          }
          else {
            el.querySelector("#divChoice" + i).style.background = sessionStorage.mainColor;
          }
        }

        question.value = value;
      };

      if (question.value && question.value != "") {
        onChoiceClicked(question.value);
      }
      el.querySelector("#divChoice1").addEventListener('click', function (event) {
        onChoiceClicked(1);
        event.stopPropagation();
        event.preventDefault();
      });
      el.querySelector("#divChoice2").addEventListener('click', function (event) {
        onChoiceClicked(2);
        event.stopPropagation();
        event.preventDefault();
      });
      el.querySelector("#divChoice3").addEventListener('click', function (event) {
        onChoiceClicked(3);
        event.stopPropagation();
        event.preventDefault();
      });
      el.querySelector("#divChoice4").addEventListener('click', function (event) {
        onChoiceClicked(4);
        event.stopPropagation();
        event.preventDefault();
      });
      el.querySelector("#divChoice5").addEventListener('click', function (event) {
        onChoiceClicked(5);
        event.stopPropagation();
        event.preventDefault();
      });
    },
    willUnmount: function (question, el) {
      //el.innerHTML = null;
      //el.off();
    }
  };

  //Register our widget in singleton custom widget collection
  let check = Survey.CustomWidgetCollection.Instance.widgetsValues.find(e => e.name == "cesrating")
  if (!check || check == "") {
    Survey.CustomWidgetCollection.Instance.addCustomWidget(cesRating, "customtype");

    Survey.Serializer.addProperty("cesrating", {
      name: "theme:dropdown",
      isRequired: true,
      category: "general",
      visibleIndex: 3,
      choices: [
        { value: 'label-Standard', text: translate('label-Standard') },
        { value: 'label-ColorGradient', text: translate('label-ColorGradient') },
        { value: 'label-Emoji', text: translate('label-Emoji') }
      ]
    });
  }
}
function NpsEuRating() {
  var template1;
  var template2;
  var template3;
  var npseurating = {
      name: "nps-eurating",
      title: "NPS-EU score",
      iconName: "icon-rating",
      category: translate('label-Standard'),
      widgetIsLoaded: function () {
          return true;
      },
      defaultJSON: {
          type : "nps-eurating",
          entity : "nps-eurating",
          maxRateDescription: "zeer waarschijnlijk",
          minRateDescription : "helemaal niet waarschijnlijk"
      },
      isFit: function (question) {
          if(question.getType() === "nps-eurating") {
              if(!question.theme || question.theme == "") {
                  question.theme = 'label-Standard';
              } 
              // template = getData(question);
              // console.log("this is..template.", template)

          }
          return question.getType() === "nps-eurating";
      },
      isDefaultRender: false,
      htmlTemplate: `<div></div>`,

      activatedByChanged: function (activatedBy) {
          Survey.JsonObject.metaData.addClass(
              "nps-eurating", [
                  {name: "rateStep", visible: false},
                  {name: "rateValues", visible: false},
                  {name: "rateMin", visible: false},
                  {name: "rateMax", visible: false},
              ],
              null,
              "rating"
          );
      },
      afterRender: function (question, el) {
          let paddingMin;
          let paddingMax;
          if(question.minRateDescription == "") {
              paddingMin = "0px";
          } else {
              paddingMin = "5px";
          }
          if(question.maxRateDescription == "") {
              paddingMax = "0px";
          } else {
              paddingMax = "5px";
          }
          if(question.getType() === "nps-eurating") {
              if(question.theme == 'label-Emoji') {
                  template1 =   `<div>
                  <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                      <div style="display: flex; justify-content: flex-start; align-items: center; padding-right: ${paddingMin}">
                      <label style="font-weight: normal;">` + question.minRateDescription + `</label>
                      </div>
                      <div id="divChoice0" class="emo-div-bg" style="border-top: 6px solid #c60c00 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice0" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingVeryBad') + `" class="ktv-icons">
                      </div>
                      <div id="divChoice1" class="emo-div-bg" style="border-top: 6px solid #da5300 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice1" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingVeryBad') + `" class="ktv-icons">
                      </div>
                      <div id="divChoice2" class="emo-div-bg" style="border-top: 6px solid #e67d00 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice2" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingVeryBad') + `" class="ktv-icons">
                      </div>
                      <div id="divChoice3" class="emo-div-bg" style="border-top: 6px solid #efa000 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice3" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingVeryBad') + `" class="ktv-icons">
                      </div>
                      <div id="divChoice4" class="emo-div-bg" style="border-top: 6px solid #f7bb00 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice4" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingVeryBad') + `" class="ktv-icons">            
                      </div>
                      <div id="divChoice5" class="emo-div-bg" style="border-top: 6px solid #ffd700 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice5" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingVeryBad') + `" class="ktv-icons">
                      </div>
                      <div id="divChoice6" class="emo-div-bg" style="border-top: 6px solid #dacc05 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice6" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingVeryBad') + `" class="ktv-icons">
                      </div>
                      <div id="divChoice7" class="emo-div-bg" style="border-top: 6px solid #bbc20a !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice7" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-4.png" alt="` + translate('label-RatingGood') + `" class="ktv-icons">
                      </div>
                      <div id="divChoice8" class="emo-div-bg" style="border-top: 6px solid #67a616 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice8" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-4.png" alt="` + translate('label-RatingGood') + `" class="ktv-icons">
                      </div>
                      <div id="divChoice9" class="emo-div-bg" style="border-top: 6px solid #449a1c !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice9" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-5.png" alt="` + translate('label-RatingExcellent') + `" class="ktv-icons">
                      </div>
                      <div id="divChoice10" class="emo-div-bg" style="border-top: 6px solid #32951f !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice10" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-5.png" alt="` + translate('label-RatingExcellent') + `" class="ktv-icons">
                      </div>
                      <div style="display: flex; justify-content: flex-start; align-items: center; padding-left: ${paddingMax}">
                      <label style="font-weight: normal;">` + question.maxRateDescription + `</label>
                      </div>
                  </div>
              </div>`;
              
              el.innerHTML= template1;
              } else if(question.theme == 'label-ColorGradient') {
                  template2 =  `<div  class="widgetRatingWidth">
                  <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                      <div style="display: flex; justify-content: flex-start; align-items: center; padding-right: ${paddingMin}">
                      <label style="font-weight: normal;">` + question.minRateDescription + `</label>
                      </div>
                      <div id="divChoice0" class="nps-div-bg" style="border-top: 6px solid #c60c00 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">0</label>
                      </div>
                      <div id="divChoice1" class="nps-div-bg" style="border-top: 6px solid #da5300 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">1</label>
                      </div>
                      <div id="divChoice2" class="nps-div-bg" style="border-top: 6px solid #e67d00 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">2</label>
                      </div>
                      <div id="divChoice3" class="nps-div-bg" style="border-top: 6px solid #efa000 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">3</label>
                      </div>
                      <div id="divChoice4" class="nps-div-bg" style="border-top: 6px solid #f7bb00 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">4</label>
                      </div>
                      <div id="divChoice5" class="nps-div-bg" style="border-top: 6px solid #ffd700 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">5</label>           
                      </div>
                      <div id="divChoice6" class="nps-div-bg" style="border-top: 6px solid #dacc05 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">6</label>
                      </div>
                      <div id="divChoice7" class="nps-div-bg" style="border-top: 6px solid #bbc20a !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">7</label>
                      </div>
                      <div id="divChoice8" class="nps-div-bg" style="border-top: 6px solid #67a616 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">8</label>
                      </div>
                      <div id="divChoice9" class="nps-div-bg" style="border-top: 6px solid #449a1c !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">9</label>
                      </div>
                      <div id="divChoice10" class="nps-div-bg" style="border-top: 6px solid #32951f !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">10</label>
                      </div>
                      <div style="display: flex; justify-content: flex-start; align-items: center; padding-left: ${paddingMax}">
                      <label style="font-weight: normal;">` + question.maxRateDescription + `</label>
                      </div>
                  </div>
              </div>`;
              el.innerHTML= template2;
              }else{
                  template3 = `<div>
                  <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                      <div style="display: flex; justify-content: flex-start; align-items: center; padding-right: ${paddingMin}">
                      <label style="font-weight: normal;">` + question.minRateDescription + `</label>
                      </div>
                      <div id="divChoice0" class="nps-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">0</label>
                      </div>
                      <div id="divChoice1" class="nps-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">1</label>
                      </div>
                      <div id="divChoice2" class="nps-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">2</label>
                      </div>
                      <div id="divChoice3" class="nps-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">3</label>
                      </div>
                      <div id="divChoice4" class="nps-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">4</label>
                      </div>
                      <div id="divChoice5" class="nps-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">5</label>           
                      </div>
                      <div id="divChoice6" class="nps-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">6</label>
                      </div>
                      <div id="divChoice7" class="nps-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">7</label>
                      </div>
                      <div id="divChoice8" class="nps-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">8</label>
                      </div>
                      <div id="divChoice9" class="nps-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">9</label>
                      </div>
                      <div id="divChoice10" class="nps-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">10</label>
                      </div>
                      <div style="display: flex; justify-content: flex-start; align-items: center; padding-left: ${paddingMax}">
                      <label style="font-weight: normal;">` + question.maxRateDescription + `</label>
                      </div>
                  </div>
              </div>`;
                  
              el.innerHTML= template3;
              }
          }
          question.registerFunctionOnPropertyValueChanged("theme", (newValue) =>  {
              if(question.getType() === "nps-eurating") {
                  if(question.theme == 'label-Emoji') {
                      template1 =   `<div>
                      <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                          <div style="display: flex; justify-content: flex-start; align-items: center; padding-right: ${paddingMin}">
                          <label style="font-weight: normal;">` + question.minRateDescription + `</label>
                          </div>
                          <div id="divChoice0" class="emo-div-bg" style="border-top: 6px solid #c60c00 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice0" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingVeryBad') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice1" class="emo-div-bg" style="border-top: 6px solid #da5300 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice1" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingVeryBad') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice2" class="emo-div-bg" style="border-top: 6px solid #e67d00 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice2" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingVeryBad') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice3" class="emo-div-bg" style="border-top: 6px solid #efa000 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice3" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingVeryBad') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice4" class="emo-div-bg" style="border-top: 6px solid #f7bb00 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice4" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingVeryBad') + `" class="ktv-icons">            
                          </div>
                          <div id="divChoice5" class="emo-div-bg" style="border-top: 6px solid #ffd700 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice5" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingVeryBad') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice6" class="emo-div-bg" style="border-top: 6px solid #dacc05 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice6" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingVeryBad') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice7" class="emo-div-bg" style="border-top: 6px solid #bbc20a !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice7" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-4.png" alt="` + translate('label-RatingGood') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice8" class="emo-div-bg" style="border-top: 6px solid #67a616 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice8" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-4.png" alt="` + translate('label-RatingGood') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice9" class="emo-div-bg" style="border-top: 6px solid #449a1c !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice9" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-5.png" alt="` + translate('label-RatingExcellent') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice10" class="emo-div-bg" style="border-top: 6px solid #32951f !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice10" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-5.png" alt="` + translate('label-RatingExcellent') + `" class="ktv-icons">
                          </div>
                          <div style="display: flex; justify-content: flex-start; align-items: center; padding-left: ${paddingMax}">
                          <label style="font-weight: normal;">` + question.maxRateDescription + `</label>
                          </div>
                      </div>
                  </div>`;
                  
                  el.innerHTML= template1;
                  } else if(question.theme == 'label-ColorGradient') {
                      template2 =  `<div  class="widgetRatingWidth">
                      <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                          <div style="display: flex; justify-content: flex-start; align-items: center; padding-right: ${paddingMin}">
                          <label style="font-weight: normal;">` + question.minRateDescription + `</label>
                          </div>
                          <div id="divChoice0" class="nps-div-bg" style="border-top: 6px solid #c60c00 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">0</label>
                          </div>
                          <div id="divChoice1" class="nps-div-bg" style="border-top: 6px solid #da5300 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">1</label>
                          </div>
                          <div id="divChoice2" class="nps-div-bg" style="border-top: 6px solid #e67d00 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">2</label>
                          </div>
                          <div id="divChoice3" class="nps-div-bg" style="border-top: 6px solid #efa000 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">3</label>
                          </div>
                          <div id="divChoice4" class="nps-div-bg" style="border-top: 6px solid #f7bb00 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">4</label>
                          </div>
                          <div id="divChoice5" class="nps-div-bg" style="border-top: 6px solid #ffd700 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">5</label>           
                          </div>
                          <div id="divChoice6" class="nps-div-bg" style="border-top: 6px solid #dacc05 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">6</label>
                          </div>
                          <div id="divChoice7" class="nps-div-bg" style="border-top: 6px solid #bbc20a !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">7</label>
                          </div>
                          <div id="divChoice8" class="nps-div-bg" style="border-top: 6px solid #67a616 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">8</label>
                          </div>
                          <div id="divChoice9" class="nps-div-bg" style="border-top: 6px solid #449a1c !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">9</label>
                          </div>
                          <div id="divChoice10" class="nps-div-bg" style="border-top: 6px solid #32951f !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">10</label>
                          </div>
                          <div style="display: flex; justify-content: flex-start; align-items: center; padding-left: ${paddingMax}">
                          <label style="font-weight: normal;">` + question.maxRateDescription + `</label>
                          </div>
                      </div>
                  </div>`;
                  el.innerHTML= template2;
                  }else{
                      template3 = `<div>
                      <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                          <div style="display: flex; justify-content: flex-start; align-items: center; padding-right: ${paddingMin}">
                          <label style="font-weight: normal;">` + question.minRateDescription + `</label>
                          </div>
                          <div id="divChoice0" class="nps-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">0</label>
                          </div>
                          <div id="divChoice1" class="nps-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">1</label>
                          </div>
                          <div id="divChoice2" class="nps-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">2</label>
                          </div>
                          <div id="divChoice3" class="nps-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">3</label>
                          </div>
                          <div id="divChoice4" class="nps-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">4</label>
                          </div>
                          <div id="divChoice5" class="nps-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">5</label>           
                          </div>
                          <div id="divChoice6" class="nps-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">6</label>
                          </div>
                          <div id="divChoice7" class="nps-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">7</label>
                          </div>
                          <div id="divChoice8" class="nps-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">8</label>
                          </div>
                          <div id="divChoice9" class="nps-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">9</label>
                          </div>
                          <div id="divChoice10" class="nps-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">10</label>
                          </div>
                          <div style="display: flex; justify-content: flex-start; align-items: center; padding-left: ${paddingMax}">
                          <label style="font-weight: normal;">` + question.maxRateDescription + `</label>
                          </div>
                      </div>
                  </div>`;
                      
                  el.innerHTML= template3;
                  }
              }
          });
          var onChoiceClicked = function (value) {
              for(var i=0; i<=10; i++) {
                  if(i==value) {
                      if(i == 0) {
                          if(question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #c60c00";
                          }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                      } else if(i == 1) {
                          if(question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #da5300";
                          }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                      } else if(i == 2) { 
                          if(question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #e67d00";
                           }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                      } else if(i == 3) {
                          if(question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #efa000";
                           }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                      } else if(i == 4) {
                          if(question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #f7bb00";
                           }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                      } else if(i == 5) {
                          if(question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #ffd700";
                           }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                      } else if(i == 6) {
                          if(question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #dacc05";
                           }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                      } else if(i == 7) {
                          if(question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #bbc20a";
                           }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                      } else if(i == 8) {
                          if(question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #67a616";
                           }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor; 
                      } else if(i == 9) {
                          if(question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #449a1c";
                           }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor; 
                      } else if(i == 10) {
                          if(question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #32951f";
                           }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor; 
                      } 
                  }
                  else {
                      el.querySelector("#divChoice" + i).style.background =  sessionStorage.mainColor;
                  }
              }

              question.value = value;
          };
          if(question.value && question.value != "") {
              onChoiceClicked(question.value);
          } else if( question.value == 0) {
              onChoiceClicked(question.value);
          }
          el.querySelector("#divChoice0").addEventListener('click', function(event){
              onChoiceClicked(0);
              event.stopPropagation();
              event.preventDefault();
          });
          el.querySelector("#divChoice1").addEventListener('click', function(event){
              onChoiceClicked(1);
              event.stopPropagation();
              event.preventDefault();
          });
          el.querySelector("#divChoice2").addEventListener('click', function(event){
              onChoiceClicked(2);
              event.stopPropagation();
              event.preventDefault();
          });
          el.querySelector("#divChoice3").addEventListener('click', function(event){
              onChoiceClicked(3);
              event.stopPropagation();
              event.preventDefault();
          });
          el.querySelector("#divChoice4").addEventListener('click', function(event){
              onChoiceClicked(4);
              event.stopPropagation();
              event.preventDefault();
          });
          el.querySelector("#divChoice5").addEventListener('click', function(event){
              onChoiceClicked(5);
              event.stopPropagation();
              event.preventDefault();
          });
          el.querySelector("#divChoice6").addEventListener('click', function(event){
              onChoiceClicked(6);
              event.stopPropagation();
              event.preventDefault();
          });
          el.querySelector("#divChoice7").addEventListener('click', function(event){
              onChoiceClicked(7);
              event.stopPropagation();
              event.preventDefault();
          });
          el.querySelector("#divChoice8").addEventListener('click', function(event){
              onChoiceClicked(8);
              event.stopPropagation();
              event.preventDefault();
          });
          el.querySelector("#divChoice9").addEventListener('click', function(event){
              onChoiceClicked(9);
              event.stopPropagation();
              event.preventDefault();
          });
          el.querySelector("#divChoice10").addEventListener('click', function(event){
              onChoiceClicked(10);
              event.stopPropagation();
              event.preventDefault();
          });
      },
      willUnmount: function (question, el) {
          //el.innerHTML = null;
          //el.off();
      }
  };
  
  //Register our widget in singleton custom widget collection
  let check = Survey.CustomWidgetCollection.Instance.widgetsValues.find( e => e.name == "nps-eurating")
  if( !check || check == "") {
      Survey.CustomWidgetCollection.Instance.addCustomWidget(npseurating, "customtype");

      Survey.Serializer.addProperty("nps-eurating", {
          name: "theme:dropdown",
          isRequired: true,
          category: "general",
          visibleIndex: 3,
          choices: [
              {value: 'label-Standard', text: translate('label-Standard')},
              {value: 'label-ColorGradient', text: translate('label-ColorGradient')},
              {value: 'label-Emoji', text: translate('label-Emoji')}
  ]
      });
  }
}

function translate(translationCode) {
  try {
      return JSON.parse(sessionStorage.translations)[translationCode];
  } catch (error) {
      return translationCode;
  }
}


function translate(translationCode) {
  try {
      return JSON.parse(sessionStorage.translations)[translationCode];
  } catch (error) {
      return translationCode;
  }
}

// document.addEventListener("DOMContentLoaded", function(event) {
//   loadCSS('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
//   loadCSS('https://unpkg.com/survey-jquery/survey.min.css');
//   // Your code to run since DOM is loaded and ready
//   // console.log("dom loaded");
//   //loadJS('https://cdnjs.cloudflare.com/ajax/libs/knockout/3.3.0/knockout-min.js', afterLoadjquery, document.body);  
//   loadJS('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', afterLoadjquery);  

// });

function loadTranslations() {
  sessionStorage.mainColor = "#f3f3f3";
  sessionStorage.color = "#063655";
  sessionStorage.colorSecondary = "#23b3cb";
  sessionStorage.hoverColor = "#22acc4";
  sessionStorage.translations = "{\"label-CreatedDate\":\"Aanmaakdatum\",\"label-Count\":\"Aantal\",\"label-NumberOfPasswordExpiryDays\":\"Aantal dagen voordat wachtwoord weer gebruikt kan worden\",\"label-NoOfEmailBounced\":\"Aantal e-mails - bounces\",\"label-NoOfEmailNotSent\":\"Aantal e-mails - niet verstuurd\",\"label-NoOfEmailDelivered\":\"Aantal e-mails - verstuurd\",\"label-TotalRespondent\":\"Aantal respondenten\",\"label-NoOfSurveyCompleted\":\"Aantal surveys ingevuld\",\"label-NoOfInvitationSent\":\"Aantal uitnodigingen aangemaakt\",\"label-CreateAccount\":\"Account aanmaken\",\"menuItem-AccountTypes\":\"Accounttype\",\"label-AccountType\":\"Accounttype\",\"label-BackgroundColor\":\"Achtergrond kleur\",\"label-LastName\":\"Achternaam\",\"error-Forbidden\":\"Actie is niet toegestaan\",\"label-IsActive\":\"Actief / Niet actief\",\"label-Address\":\"Adres\",\"menuItem-CustomerAddressTypes\":\"Adrestype\",\"label-Logout\":\"Afmelden\",\"menuItem-Logout\":\"Afmelden\",\"label-Finish\":\"Afronden\",\"label-Cancel\":\"Annuleren\",\"label-Anonymize\":\"Anonimiseren\",\"label-Reply\":\"Beantwoorden\",\"label-PasswordRestEmailSent\":\"Bedankt, je ontvangt binnen enkele minuten van ons een e-mail om een nieuw wachtwoord in te stellen.\",\"country-belgium\":\"België\",\"label-FileName\":\"Bestand uploaden\",\"label-ImportWizardStaticInstruction2\":\"Bestand uploaden\",\"label-Security\":\"Beveiliging\",\"error-EmailNotVerified\":\"Bevestig uw e-mail adres\",\"label-PleaseConfirm\":\"Bevestiging graag\",\"label-Body\":\"Body\",\"label-Branding\":\"Branding\",\"error-CheckEmail\":\"Check je inbox en klik de link in de 'Bevestig je e-mailadres bij KCM' mail.\",\"label-Code\":\"Code\",\"label-ContactInformation\":\"Contact informatie\",\"label-CreateAccountDetail2\":\"Contacten beheren\",\"label-Conversational\":\"Conversatie\",\"error-UnlinkCurrentCustomer\":\"Current customer can't be unlinked\",\"label-ThankYou\":\"Dank u\",\"menuItem-Dashboard\":\"Dashboard\",\"label-Date\":\"Datum\",\"label-SelectDateAndTime\":\"Datum en tijd\",\"label-InvitationDate\":\"Datum uitnodiging\",\"error-Unauthorized\":\"De combinatie van gebruikersnaam en wachtwoord is niet geldig.\",\"label-successfullyEmailSend\":\"De e-mail om je adres te bevestigen is verstuurd\",\"msg-InvalidMsg\":\"De ingevoerde gegevens zijn incorrect\",\"label-StarRatingMaxValidation\":\"De maximum waarde moet tussen de 3 en 10 liggen\",\"label-ThanksForRegistration\":\"De registratie is gelukt.\",\"module-demo\":\"Demo\",\"label-Details\":\"Details\",\"error-LinkAlreadyUsed\":\"Deze link is niet meer geldig\",\"msg-PageUnderConstruction\":\"Deze pagina is nog in aanbouw\",\"label-SurveyDistributionLogs\":\"Distributie logs\",\"msg-ItemUnavailable\":\"Dit item is niet beschikbaar\",\"theme-ThumbsUpDown\":\"Duimen\",\"country-germany\":\"Duitsland\",\"msg-DuplicateDynamicField\":\"Dynamisch veld is al geselecteerd\",\"label-DynamicFields\":\"Dynamische velden\",\"menuItem-RespondentDynamicFields\":\"Dynamische velden\",\"error-EmailRegistered\":\"E-mail adres is al geregistreerd\",\"menuItem-CustomerEmailTypes\":\"E-mail adrestype\",\"label-EmailSentDate\":\"E-mail datum verzonden\",\"menuItem-MessageTemplate\":\"E-mail sjablonen\",\"label-EndDate\":\"Einddatum\",\"label-EmailAddress\":\"Email adres\",\"theme-Emoji\":\"Emoji\",\"label-Emoji\":\"Emoji\",\"label-EmptyFieldValue\":\"Empty field value\",\"locales-EN\":\"English\",\"error-DuplicateCustomer\":\"Er bestaat al een klant met de opgegeven naam\",\"error-DependencyExists\":\"Er is data gekoppeld aan dit item waardoor het niet kan worden verwijderd\",\"error-InternalServerError\":\"Er is een probleem opgetreden. Neem contact op met de beheerder\",\"label-PleaseWait\":\"Even geduld aub\",\"label-ExternalReference\":\"Externe referentie\",\"label-BillingAddress\":\"Factuuradres\",\"label-BillingAddressSameAsBusiness\":\"Factuuradres hetzelfde als Vestigingsadres\",\"label-FilterRespondentList\":\"Filter respondent lijst\",\"label-FilterTemplateList\":\"Filter sjabloon lijst\",\"msg-Error\":\"Fout\",\"label-ErrorMessage\":\"Foutmelding\",\"country-france\":\"Frankrijk\",\"label-AdvanceSearch\":\"Geavanceerd zoeken\",\"label-Enable2FA\":\"Gebruik 2-Factor-Authenticatie (2FA)\",\"label-UserProfile\":\"Gebruiker profiel\",\"error-UsernameDuplicate\":\"Gebruikernaam is al aanwezig\",\"menuItem-User\":\"Gebruikers\",\"label-Username\":\"Gebruikersnaam\",\"menuItem-UserRoles\":\"Gebruikersrol\",\"error-ResourceNotFound\":\"Geen gegevens gevonden\",\"label-ItemUnavailable\":\"Geen items beschikbaar\",\"label-NoCustomerSelected\":\"Geen klant geselecteerd\",\"label-NoRolesSelected\":\"Geen rol geselecteerd\",\"error-Conflict\":\"Gegevens zijn al aanwezig\",\"label-Global\":\"Globaal\",\"label-RatingGood\":\"Goed\",\"label-RegistrationCompletedMessage\":\"Hartelijk dank voor uw aanmelding.\",\"label-HeaderBackgroundColor\":\"Header achtergrond kleur\",\"label-HeaderColor\":\"Header kleur\",\"title-male\":\"Heer\",\"msg-InvalidEmail\":\"Het e-mail adres is ongeldig\",\"error-ConfirmPasswordMismatched\":\"Het wachtwoord komt niet overeen\",\"error-PasswordStrengthLow\":\"Het wachtwoord moet letters en nummers bevatten\",\"error-PasswordStrengthMedium\":\"Het wachtwoord moet letters, nummers en tenminste 1 hoofdletter bevatten\",\"error-PasswordStrengthHigh\":\"Het wachtwoord moet letters, nummers, tenminste 1 hoofdletter en 1 speciaal teken bevatten\",\"error-PasswordLength\":\"Het wachtwoord moet minstens {0} karakters lang zijn\",\"label-High\":\"Hoog\",\"label-HouseNumber\":\"Huisnummer\",\"menuItem-Setting\":\"Huisstijl\",\"label-PrivacyStatement\":\"Ik ga akkoord met het\",\"label-ClickRespondentImportFinish\":\"Import afronden\",\"label-ImportBatch\":\"Import batch\",\"label-ImportBatchName\":\"Import batch naam\",\"label-ImportDateRange\":\"Import periode\",\"label-RespondentBatches\":\"Ingeladen batches\",\"label-LoginKCMSurveyPortal\":\"Inlog KCM Surveyportaal\",\"label-Login\":\"Inloggen\",\"label-Maintenance\":\"Instellingen\",\"label-InternalReference\":\"Interne referentie\",\"label-Yes\":\"Ja\",\"control-YesNoRating\":\"Ja/Nee\",\"label-WizardStaticInstruction1\":\"Kies hier welke onderzoeken u wilt distribueren\",\"label-Customer\":\"Klant\",\"label-CustomerInformation\":\"Klant informatie\",\"error-CustomerDuplicate\":\"Klant is al geregistreerd\",\"label-ClientRole\":\"Klant rol\",\"label-CustomerName\":\"Klantnaam\",\"label-ColorPalette\":\"Kleurenpalet\",\"label-ColorGradient\":\"Kleurverloop\",\"label-ClickFinish\":\"Klik 'Afronden' om uitnodigingen te versturen\",\"label-ColumnNames\":\"Kolom naam\",\"label-Copy\":\"Kopie\",\"label-SaveAs\":\"Kopie opslaan\",\"label-ImportWizardStaticInstruction3\":\"Koppel de kolommen van het bestand aan de kolommen in je onderzoek\",\"label-KvkNumber\":\"KVK nummer\",\"label-Low\":\"Laag\",\"label-Country\":\"Land\",\"label-LinkLevel\":\"Link niveau\",\"label-Logo\":\"Logo\",\"country-luxembourg\":\"Luxemburg\",\"msg-CreateCopy\":\"Maak kopie\",\"label-MaxPasswordAge\":\"Max. leeftijd wachtwoord\",\"label-Employee\":\"Medewerker\",\"label-Menu\":\"Menu\",\"label-CreateAccountDetail\":\"Met een account kunt u gebruik maken van de volgende diensten\",\"title-female\":\"Mevrouw\",\"label-Medium\":\"Midden\",\"menuItem-MyCompany\":\"Mijn organisatie\",\"label-MinPasswordLength\":\"Min. wachtwoord lengte\",\"label-MinPasswordStrength\":\"Min. wachtwoord sterkte\",\"label-Modules\":\"Modules\",\"label-Name\":\"Naam\",\"country-netherlands\":\"Nederland\",\"locales-NL\":\"Nederlands\",\"label-No\":\"Nee\",\"label-RatingNeutral\":\"Neutraal\",\"label-UnsupportedFileType\":\"Niet-ondersteund bestandstype\",\"label-New\":\"Nieuw\",\"label-Newdatabasecolumn\":\"Nieuwe database kolom\",\"label-Ok\":\"OK\",\"label-Description\":\"Omschrijving\",\"menuItem-Maintenance\":\"Onderhoud\",\"label-SupportedLocales\":\"Ondersteunde talen\",\"label-Subject\":\"Onderwerp\",\"msg-PhonePattern\":\"Ongeldig telefoonnummer\",\"error-BadRequest\":\"Ongeldige actie\",\"msg-FieldRequired\":\"Ongeldige invoer. \",\"msg-PostalCode\":\"Ongeldige postcode\",\"error-InvalidPassCode\":\"Onjuiste toegangscode\",\"surveytype-Online\":\"Online\",\"label-Remarks\":\"Opmerkingen\",\"label-Save\":\"Opslaan\",\"label-Period\":\"Periode\",\"label-City\":\"Plaats\",\"label-PostalCode\":\"Postcode\",\"label-PrimaryHoverColor\":\"Primaire 'muis over' kleur\",\"label-PrimaryColor\":\"Primaire kleur\",\"label-IsPrivateData\":\"Privacy gevoelig\",\"label-PrivacyLinkText\":\"Privacybeleid\",\"label-PrivacyStatementLink\":\"Privacybeleid\",\"error-RecordInUse\":\"Record is in gebruik en kon niet verwijderd worden\",\"msg-RecordSaved\":\"Record opgeslagen\",\"label-CompleteRegistration\":\"Registratie voltooien\",\"label-Register\":\"Registreren\",\"label-RegisterKCMSurveyPortal\":\"Registreren bij KCM\",\"module-reportingapi\":\"ReportingAPI\",\"label-Reset\":\"Reset\",\"module-respondent\":\"Respondent\",\"menuItem-Respondent\":\"Respondent\",\"menuItem-RespondentGroups\":\"Respondent groep\",\"label-RespondentGroups\":\"Respondent groepen\",\"menuItem-RespondentImports\":\"Respondent import\",\"error-RespondentGroupDependency\":\"Respondent Linked to Respondent Group\",\"error-RespondentSurveyDependency\":\"Respondent Linked to Survey\",\"label-RespondentType\":\"Respondent type\",\"label-Respondents\":\"Respondenten\",\"module-respondentexport\":\"RespondentExport\",\"module-respondentimport\":\"RespondentImport\",\"label-Result\":\"Resultaat\",\"label-Roles\":\"Rollen\",\"label-Run\":\"Run\",\"label-Summary\":\"Samenvatting\",\"label-Collapse\":\"Samenvoegen\",\"label-Scope\":\"Scope\",\"label-EmptyDynamicFieldValue\":\"Selecteer dynamisch veld en waarde\",\"label-WizardStaticInstruction3\":\"Selecteer respondenten\",\"label-ImportWizardStaticInstruction1\":\"Selecteer survey voor deze respondenten\",\"label-WizardStaticInstruction2\":\"Selecteer template\",\"label-Template\":\"Sjablonen\",\"label-RatingBad\":\"Slecht\",\"theme-Standard\":\"Standaard\",\"label-Standard\":\"Standaard\",\"respondenttype-Standard\":\"Standaard\",\"label-DefaultLanguage\":\"Standaard taal\",\"label-DefaultLocale\":\"Standaard taal\",\"label-DefaultView\":\"Standaard weergave\",\"module-standard\":\"Standard\",\"label-step\":\"Stap\",\"label-StartDate\":\"Startdatum\",\"label-Status\":\"Status\",\"label-ResetPassword\":\"Stel wachtwoord opnieuw in\",\"label-Star\":\"Ster\",\"control-StarRating\":\"Sterren\",\"label-StreetName\":\"Straatnaam\",\"label-Send\":\"Sturen\",\"label-StartNewLink\":\"Stuur nieuwe link\",\"menuItem-Survey\":\"Survey\",\"label-Survey\":\"Survey\",\"label-SurveyCreatorLanguage\":\"Survey creator taal\",\"menuItem-SurveyDistribution\":\"Survey distributie\",\"label-ResearchSubject\":\"Survey groep\",\"label-SurveyGroup\":\"Survey groep\",\"menuItem-SurveyGroups\":\"Survey groep\",\"label-ResearchSubjects\":\"Survey groepen\",\"label-SurveyName\":\"Survey naam\",\"label-SurveyType\":\"Survey type\",\"module-surveybuilder\":\"SurveyBuilder\",\"module-surveydistribution\":\"SurveyDistribution\",\"module-surveyreporting\":\"SurveyReporting\",\"label-CreateAccountDetail1\":\"Surveys aanmaken en versturen\",\"label-System\":\"Systeem\",\"label-IsSystemAdmin\":\"Systeem beheerder\",\"menuItem-SystemTranslations\":\"Systeem vertaling\",\"menuItem-SystemTranslation\":\"Systeem vertaling\",\"label-SystemTranslationCode\":\"Systeem vertalingscode\",\"label-Language\":\"Taal\",\"label-Locale\":\"Taal\",\"label-SelectLocale\":\"Taalinstelling\",\"label-Table\":\"Tabel\",\"label-Text\":\"Tekst\",\"label-TextColor\":\"Tekst kleur\",\"label-PhoneNumber\":\"Telefoonnummer\",\"menuItem-CustomerPhoneTypes\":\"Telefoontype\",\"label-TemplateName\":\"Template naam\",\"label-BackToLogin\":\"Terug naar login\",\"label-Title\":\"Titel\",\"label-Add\":\"Toevoegen\",\"label-AddAsDynamic\":\"Toevoegen als dynamisch\",\"label-HouseNumberAddition\":\"Toevoeging\",\"label-DateTo\":\"Tot\",\"label-Total\":\"Totaal\",\"label-MiddleName\":\"Tussenvoegsel\",\"label-Type\":\"Type\",\"error-SurveyAlreadyFilled\":\"U heeft dit survey al ingevuld\",\"label-Expand\":\"Uitklappen\",\"label-Exclusion\":\"Uitsluiting\",\"label-RatingExcellent\":\"Uitstekend\",\"label-Upload\":\"Uploaden\",\"module-usermaintenance\":\"UserMaintenance\",\"error-SessionExpired\":\"Uw sessie is verlopen, log opnieuw in.\",\"label-ResetPasswordSuccess\":\"Uw wachtwoord is aangepast, ga terug naar het inlog scherm.\",\"label-DateFrom\":\"Van\",\"label-Submit\":\"Versturen\",\"label-SendLater\":\"Verstuur later\",\"label-SendNow\":\"Verstuur nu\",\"label-SendInvitation\":\"Verstuur uitnodiging\",\"label-Delete\":\"Verwijderen\",\"label-RequiredValidation\":\"Voer a.u.b. alle verplichte waarden in\",\"label-Next\":\"Volgende\",\"label-FirstName\":\"Voornaam\",\"label-Back\":\"Vorige\",\"label-Previous\":\"Vorige\",\"label-PasswordRecoverInstruction\":\"Vul hier uw e-mailadres in om een nieuw wachtwoord te ontvangen\",\"error-IncorrectPassword\":\"Vul uw eigen wachtwoord in om de wijzigingen op te slaan\",\"label-SecurityPasswordPrompt\":\"Vul uw wachtwoord in om de wijzigingen op te slaan\",\"label-Value\":\"Waarde\",\"label-Password\":\"Wachtwoord\",\"label-ConfirmPassword\":\"Wachtwoord bevestigen\",\"label-ForgotPassword\":\"Wachtwoord vergeten\",\"label-WCAGCompliance\":\"WCAG\",\"label-DisplayName\":\"Weergave naam\",\"label-ViewType\":\"Weergave type\",\"msg-AnonymizeRespondent\":\"Weet u zeker dat u de geselecteerde item(s) wilt anonimiseren?\",\"msg-DeleteItems\":\"Weet u zeker dat u de geselecteerde item(s) wilt verwijderen?\",\"msg-Logout\":\"Weet u zeker dat u wilt afsluiten en uitloggen?\",\"label-ChangeCustomer\":\"Wijzig bedrijf\",\"label-ModifiedDate\":\"Wijzigingsdatum\",\"label-RatingVeryBad\":\"Zeer slecht\",\"label-Search\":\"Zoek\"}"
}

function initialize() {
  loadTranslations();
  loadCSS('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
  loadCSS('https://unpkg.com/survey-jquery/survey.min.css');
  // Your code to run since DOM is loaded and ready
  // console.log("dom loaded");
  //loadJS('https://cdnjs.cloudflare.com/ajax/libs/knockout/3.3.0/knockout-min.js', afterLoadjquery, document.body);  
  loadJS('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', afterLoadjquery);
}

initialize();



