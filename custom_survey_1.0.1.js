function init() {
  var surveyJSON = {
      "pages": [
       {
        "name": "Pagina1",
        "elements": [
         {
          "type": "starrating",
          "name": "vraag8",
          "title": "Hoe tevreden bent u met het portaal?",
          "hasComment": true,
          "commentText": "Opmerkingen",
          "rateMax": 10
         },
         {
          "type": "yesnorating",
          "name": "vraag9",
          "title": "Bent u tevreden met het portaal?",
          "theme": "theme-ThumbsUpDown"
         },
         {
          "type": "ktvrating",
          "name": "Vraag1",
          "title": "KTV: in welke mate bent u tevreden over onze dienstverlening/producten/service?",
          "minRateDescription": "vkdjfdklsafasf",
          "maxRateDescription": "asfdsafs",
          "theme": "label-ColorGradient"
         },
         {
          "type": "npsrating",
          "name": "Vraag2",
          "title": "NPS: hoe waarschijnlijk is het dat u ons bedrijf/product zou aanbevelen aan een vriend of kennis?",
          "minRateDescription": "helemaal niet waarschijnlijk",
          "maxRateDescription": "zeer waarschijnlijk",
          "theme": "label-ColorGradient"
         },
         {
          "type": "cesrating",
          "name": "Vraag3",
          "title": "CES: hoeveel moeite moest u doen voordat uw probleem werd opgelost?",
          "minRateDescription": "zeer weinig moeite",
          "maxRateDescription": "zeer veel moeite",
          "theme": "label-Standard"
         },
         {
          "type": "nesrating",
          "name": "Vraag4",
          "title": "NES: hoeveel moeite moest u doen voordat uw probleem werd opgelost?",
          "minRateDescription": "zeer weinig moeite",
          "maxRateDescription": "zeer veel moeite",
          "theme": "label-Standard"
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
          "type": "ktv15rating",
          "name": "vraag6",
          "minRateDescription": "absoluut niet tevreden",
          "maxRateDescription": "zeer tevreden",
          "theme": "label-Emoji"
         },
         {
          "type": "ktv15rating",
          "name": "vraag7",
          "title": "ktv5",
          "minRateDescription": "absoluut niet tevreden",
          "maxRateDescription": "zeer tevreden",
          "theme": "label-Standard"
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
  modal.style.cssText = 'position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index:99999997;height:70%;width:70%;overflow:scroll';
  modal.appendChild(surveydiv);

  var backdrop = document.createElement('div');
  backdrop.style.cssText = 'position: fixed;z-index: 9999;inset: 0px;background: rgb(85, 85, 85);opacity: 0.8;';
  backdrop.addEventListener("click", function () {
    document.body.removeChild(backdrop);
    document.body.removeChild(modal);
  });

  CesRating();
  NpsEuRating();
  KtvRating();
  NpsRating();
  NesRating();
  Ktv15Rating();
  StarRating();
  YesNoRating();

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
  .emo-div-bg {
    cursor:pointer; 
    background-color: #f3f3f3;
    padding: 10px 10px;
    border: 1px solid #dddddd;
}
.ktvEmo-div-bg {
  cursor:pointer; 
  background-color: #f3f3f3;
  padding: 10px 12.7px;
  border: 1px solid #dddddd;
}
.cesEmo-div-bg {
  cursor:pointer; 
  background-color: #f3f3f3;
  padding: 10px 45.7px;
  border: 1px solid #dddddd;
}
.ktv-div-bg {
  cursor:pointer; 
  background-color: #f3f3f3;
  padding: 5px 19.7px;
  border: 1px solid #dddddd;
}
.nps-div-bg {
  cursor:pointer; 
  background-color: #f3f3f3;
  padding: 5px 16.7px;
  border: 1px solid #dddddd;
}
.ces-div-bg {
  cursor:pointer; 
  background-color: #f3f3f3;
  padding: 5px 52.9px;
  border: 1px solid #dddddd;
}
.star-div-bg {
  cursor:pointer; 
  background-color: #f3f3f3;
  padding: 6px 12px;
}
.nps-header {
  background: linear-gradient(to right, #c60b00 0%, #e98900 25%, #ffd800 50%, #a1b90e 75%, #2e931f 100%); 
  background-image:linear-gradient(to right, rgb(198, 11, 0) 0%, rgb(233, 137, 0) 25%, rgb(255, 216, 0) 50%, rgb(161, 185, 14) 75%, rgb(46, 147, 31) 100%);
  left: 0px; 
  top: 53px; 
  right: -1px; 
  height : 5px; 
  width : 664.2px;
}
.ces-header {
  background: linear-gradient(to right, #2e931f 0%, #a1b90e 25%, #ffd800 50%, #e98900 75%, #c60b00 100%); 
  left: 0px; 
  top: 53px; 
  right: -1px; 
  height : 5px; 
  width : 664.2px;
}
.ktv-header {
  background: linear-gradient(to right, #c60b00 0%, #e98900 25%, #ffd800 50%, #a1b90e 75%, #2e931f 100%); 
  left: 0px; 
  top: 53px; 
  right: -1px; 
  height : 5px; 
  width : 664.2px;
}
.ktv-icons {
    cursor: pointer;
    height: 40px;
    width: 40px;
}

.gauge {
    width: 100%;
    max-width: 300px;
    font-family: "Roboto", sans-serif;
    font-size: 32px;
    color: #004033;
    margin-bottom: 50px;
    margin-left: 80px;
  }
  .nps_gauge__body {
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    position: relative;
    border-top-left-radius: 100% 200%;
    border-top-right-radius: 100% 200%;
    overflow: hidden;
    background-image: linear-gradient(90deg, #de1900 10%, rgb(250, 231, 7) 50%, rgb(49, 171, 11) 100%);
  
  }
  .ces_gauge__body {
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    position: relative;
    border-top-left-radius: 100% 200%;
    border-top-right-radius: 100% 200%;
    overflow: hidden;
    background-image: linear-gradient(90deg, rgb(36, 168, 9) 10%, rgb(250, 231, 7) 50%, #de1900 100%);
  
  } 
  .ktv_gauge__body {
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    position: relative;
    border-top-left-radius: 100% 200%;
    border-top-right-radius: 100% 200%;
    overflow: hidden;
    background-image: linear-gradient(90deg, #de1900 10%, rgb(250, 231, 7) 50%, rgb(49, 171, 11) 100%);
  
  }
  
  .gauge__fill {
    position: absolute;
    top: 100%;
    left: 0;
    width: inherit;
    height: 100%;
    transform-origin: center top;
    transform: rotate(0.25turn);
    transition: transform 0.2s ease-out;
  }
  .sc-min { 
    float:left;
    margin-left: 5px;
   }
  .sc-max { 
    float:right;   
    margin-right: 5px;
  }
  .gauge__cover {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    position: absolute;
    left: 10%;    
    height: 130%;
    background-color:#f7f7f7;
    border-radius: 150px 150px 0 0;
    width: 80%;
    top: 20%;
    /* Text */
    padding-bottom: 25%;
    box-sizing: border-box;
    font-size: 16px;
  }
  
  .gauge__niddle {
   
    width: 300px;
    height: 300px;
    background: transparent;
    position: absolute;
    transform: rotate(0.25turn);
    transition: transform 0.2s ease-out;
    z-index: 9;
  }
  .gauge__niddle__body {
    width: 20px;
    height: 20px;
    background: #000000;
    border-radius: 50%;
    position: absolute;
    bottom: -2px;
    z-index: 9;
  }

  .gauge_niddle_pointer {
    width: 0;
    height: 0;
    position: absolute;
    top: 89.8px;
    bottom: 0;
    left: 80px;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-bottom: 121px solid #000000;
    transform: rotate(-90deg);
  }
  
  .gauge__text {
    background:#f7f7f7;
    position: absolute;
    bottom: -43px;
  }

  .gauge__center__value {
    position: absolute;
    font-size: 16px;
    z-index: 9;
    bottom: 104px;
  }
  .row {
    display : flex;
    align-items : center;
    margin-bottom: 15px;
  }
  .row_star_rating {
    display : flex;
    align-items : center;
    justify-content: space-around;
  }
  .box {
  height: 20px;
  width: 20px;
  border: 1px solid #f7f7f7;
  margin-right : 5px;
  }
  
  .red {
  background-color: red;
  }
  
  .green {
  background-color: green;
  }
  
  .yellow {
  background-color: yellow;
  }

  .div_description {
    padding-top: 10px;
    padding-left: 80px;
    width: 380px;
    font-size: 14px;
  }
  .span_div {
    display: flex;
    justify-content: space-between;
  }

  .div_text_wrapper {
    position: relative;
    display: flex;
    height: 7px;
    justify-content: center;
  }
 
.chart-skills {
  margin: 0 auto;
  padding: 0;
  list-style-type: none;
}

.positiveButton{
  padding-left: 16px;
  width: 50px;
  height: 25px;
  font-weight: bold;
  border: 2px solid;
  cursor: pointer;
  padding-top: 0px;
  padding-bottom: 2px;
}

.negativeButton{
  padding-left: 5px;
  width: 50px;
  height: 25px;
  font-weight: bold;
  border: 2px solid;
  cursor: pointer;
  padding-top: 0px;
  padding-bottom: 2px;
}


.chart-skills {
  position: absolute;
  width: 100px;
  height: 55px;
  overflow: hidden;
  top: 100px;
  left: 100px;

}

.chart-skills li {
  position: absolute;
  top: 100%;
  left: 0;
  width: inherit;
  height: 50px;
  border-bottom-left-radius: 175px;
  border-bottom-right-radius: 175px;
  transform-origin: 50% 0;
}

li.low {
  z-index: 4;
  background-color: #FA0E1C;
  transform: rotate(180deg);
  top: 54px;
}
li.normal {
  z-index: 3;
  background-color: #FEE62A;
  transform: rotate( 33deg );
  top: 54px;

}
li.high {
  z-index: 2;
  background-color: green;
  transform: rotate(180deg);
}
li.lowces {
  z-index: 4;
  background-color: green;
  transform: rotate(180deg);
  top: 54px;
}
li.highces {
  z-index: 2;
  background-color: #FA0E1C;
  transform: rotate(180deg);
}
.starrating > input {display: none;}

.starrating > label:before { 
  
  margin: 2px !important;
  font-size: 3em !important;
  font-family: "Font Awesome 5 Free";
  display: inline-block !important;;
  cursor: pointer !important;
  font-weight: 400;
  
}
.starrating > input:checked ~ label:before
{ 
  font-family: "Font Awesome 5 Free";
  display: inline-block !important;
  cursor: pointer !important;
  font-weight: 900;
  color: lightyellow !important;
  -webkit-text-stroke-width: 3px !important;
  -webkit-text-stroke-color: #ecd031 !important; }

.starrating > input:hover ~ label:before
{ 
  font-family: "Font Awesome 5 Free";
  display: inline-block !important;;
  cursor: pointer !important;
  font-weight: 900;
  color: lightyellow !important;
  -webkit-text-stroke-width: 3px !important;
  -webkit-text-stroke-color: #ecd031 !important;
  }

.starrating > input[disabled] ~ label:before
{ 
  font-family: "Font Awesome 5 Free";
  display: inline-block !important;
  cursor: pointer !important;;
  font-weight: 400;
  color: transparent !important;
  -webkit-text-stroke-width: 3px !important;
  -webkit-text-stroke-color: #063655 !important ;
}

.starrating > input[checked = "checked"] ~ label:before
{  
  font-family: "Font Awesome 5 Free";
  display: inline-block !important;
  cursor: pointer !important;;
  font-weight: 400;
  color: lightyellow !important;;
  -webkit-text-stroke-width: 3px !important;
  -webkit-text-stroke-color: #ecd031 !important; }

  .m-fadeOut {
    visibility: hidden;
    opacity: 0 !important;
    transition: visibility 0s linear 5s, opacity 5s;
  }
  .m-fadeIn {
    visibility: visible !important;
    opacity: 1 !important;
    transition: visibility 0s linear 0s, opacity 1s;
  }
  
  .rectangleButton{
      border: 2px solid;
      width: 50px;
      height: 25px;
      background: white;
      cursor: pointer;
      color: #063655
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
function KtvRating() {
  var template1;
  var template2;
  var template3;
  var ktvRating = {
      name: "ktvrating",
      title: "KTV score",
      iconName: "icon-rating",
      category: translate('label-Standard'),
      widgetIsLoaded: function () {
          return true;
      },
      defaultJSON: {
          type: "ktvrating",
          entity: "ktvrating",
          maxRateDescription: "zeer tevreden",
          minRateDescription: "absoluut niet tevreden"
      },
      isFit: function (question) {
          if (question.getType() === "ktvrating") {
              if (!question.theme || question.theme == "") {
                  question.theme = 'label-Standard';
              }

          }
          return question.getType() === "ktvrating";
      },
      isDefaultRender: false,
      htmlTemplate: `<div></div>`,

      activatedByChanged: function (activatedBy) {
          Survey.JsonObject.metaData.addClass(
              "ktvrating", [
              { name: "rateStep", visible: false },
              { name: "rateValues", visible: false },
              { name: "rateMin", visible: false },
              { name: "rateMax", visible: false },
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
          if (question.getType() === "ktvrating") {
              if (question.theme == 'label-Emoji') {
                  template1 = `<div class="widgetRatingWidth">
                  <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                      <div style="display: flex; justify-content: flex-start; align-items: center; padding-right: ${paddingMin}">
                      <label style="font-weight: normal;">` + question.minRateDescription + `</label>
                      </div>
                      <div id="divChoice1" class="ktvEmo-div-bg" style="border-top: 6px solid #c60c00 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice1" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingVeryBad') + `" class="ktv-icons">
                      </div>
                      <div id="divChoice2" class="ktvEmo-div-bg" style="border-top: 6px solid #da5300 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice2" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingBad') + `" class="ktv-icons">
                      </div>
                      <div id="divChoice3" class="ktvEmo-div-bg" style="border-top: 6px solid #e67d00 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice3" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingNeutral') + `" class="ktv-icons">
                      </div>
                      <div id="divChoice4" class="ktvEmo-div-bg" style="border-top: 6px solid #efa000 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice4" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingGood') + `" class="ktv-icons">            
                      </div>
                      <div id="divChoice5" class="ktvEmo-div-bg" style="border-top: 6px solid #f7bb00 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice5" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingExcellent') + `" class="ktv-icons">
                      </div>
                      <div id="divChoice6" class="ktvEmo-div-bg" style="border-top: 6px solid #ffd700 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice6" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingExcellent') + `" class="ktv-icons">
                      </div>
                      <div id="divChoice7" class="ktvEmo-div-bg" style="border-top: 6px solid #dacc05 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice7" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-4.png" alt="` + translate('label-RatingExcellent') + `" class="ktv-icons">
                      </div>
                      <div id="divChoice8" class="ktvEmo-div-bg" style="border-top: 6px solid #bbc20a !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice8" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-4.png" alt="` + translate('label-RatingExcellent') + `" class="ktv-icons">
                      </div>
                      <div id="divChoice9" class="ktvEmo-div-bg" style="border-top: 6px solid #67a616 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice9" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-5.png" alt="` + translate('label-RatingExcellent') + `" class="ktv-icons">
                      </div>
                      <div id="divChoice10" class="ktvEmo-div-bg" style="border-top: 6px solid #449a1c !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice10" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-5.png" alt="` + translate('label-RatingExcellent') + `" class="ktv-icons">
                      </div>
                      <div style="display: flex; justify-content: flex-start; align-items: center; padding-left: ${paddingMax}">
                      <label style="font-weight: normal;">` + question.maxRateDescription + `</label>
                      </div>
                  </div>
              </div>`;

                  el.innerHTML = template1;
              } else if (question.theme == 'label-ColorGradient') {
                  template2 = `<div class="widgetRatingWidth">
                  <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                      <div style="display: flex; justify-content: flex-start; align-items: center; padding-right: ${paddingMin}">
                      <label style="font-weight: normal;">` + question.minRateDescription + `</label>
                      </div>
                      <div id="divChoice1" class="ktv-div-bg" style="border-top: 6px solid #c60c00; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">1</label>
                      </div>
                      <div id="divChoice2" class="ktv-div-bg" style="border-top: 6px solid #da5300 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">2</label>
                      </div>
                      <div id="divChoice3" class="ktv-div-bg" style="border-top: 6px solid #e67d00 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">3</label>
                      </div>
                      <div id="divChoice4" class="ktv-div-bg" style="border-top: 6px solid #efa000 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">4</label>           
                      </div>
                      <div id="divChoice5" class="ktv-div-bg" style="border-top: 6px solid #f7bb00 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">5</label>
                      </div>
                      <div id="divChoice6" class="ktv-div-bg" style="border-top: 6px solid #ffd700 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">6</label>
                      </div>
                      <div id="divChoice7" class="ktv-div-bg" style="border-top: 6px solid #dacc05 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">7</label>
                      </div>
                      <div id="divChoice8" class="ktv-div-bg" style="border-top: 6px solid #bbc20a !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">8</label>
                      </div>
                      <div id="divChoice9" class="ktv-div-bg" style="border-top: 6px solid #67a616 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">9</label>
                      </div>
                      <div id="divChoice10" class="ktv-div-bg" style="border-top: 6px solid #449a1c !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">10</label>
                      </div>
                      <div style="display: flex; justify-content: flex-start; align-items: center; padding-left: ${paddingMax}">
                      <label style="font-weight: normal;">` + question.maxRateDescription + `</label>
                      </div>
                  </div>
              </div>`;
                  el.innerHTML = template2;
              } else {
                  template3 = `<div class="widgetRatingWidth">
                  <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                      <div style="display: flex; justify-content: flex-start; align-items: center; padding-right: ${paddingMin}">
                      <label style="font-weight: normal;">` + question.minRateDescription + `</label>
                      </div>
                      <div id="divChoice1" class="ktv-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">1</label>
                      </div>
                      <div id="divChoice2" class="ktv-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">2</label>
                      </div>
                      <div id="divChoice3" class="ktv-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">3</label>
                      </div>
                      <div id="divChoice4" class="ktv-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">4</label>           
                      </div>
                      <div id="divChoice5" class="ktv-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">5</label>
                      </div>
                      <div id="divChoice6" class="ktv-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">6</label>
                      </div>
                      <div id="divChoice7" class="ktv-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">7</label>
                      </div>
                      <div id="divChoice8" class="ktv-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">8</label>
                      </div>
                      <div id="divChoice9" class="ktv-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">9</label>
                      </div>
                      <div id="divChoice10" class="ktv-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">10</label>
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
              if (question.getType() === "ktvrating") {
                  if (question.theme == 'label-Emoji') {
                      template1 = `<div class="widgetRatingWidth">
                      <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                          <div style="display: flex; justify-content: flex-start; align-items: center; padding-right: ${paddingMin}">
                          <label style="font-weight: normal;">` + question.minRateDescription + `</label>
                          </div>
                          <div id="divChoice1" class="ktvEmo-div-bg" style="border-top: 6px solid #c60c00 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice1" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingVeryBad') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice2" class="ktvEmo-div-bg" style="border-top: 6px solid #da5300 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice2" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingBad') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice3" class="ktvEmo-div-bg" style="border-top: 6px solid #e67d00 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice3" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingNeutral') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice4" class="ktvEmo-div-bg" style="border-top: 6px solid #efa000 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice4" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingGood') + `" class="ktv-icons">            
                          </div>
                          <div id="divChoice5" class="ktvEmo-div-bg" style="border-top: 6px solid #f7bb00 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice5" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingExcellent') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice6" class="ktvEmo-div-bg" style="border-top: 6px solid #ffd700 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice6" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingExcellent') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice7" class="ktvEmo-div-bg" style="border-top: 6px solid #dacc05 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice7" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-4.png" alt="` + translate('label-RatingExcellent') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice8" class="ktvEmo-div-bg" style="border-top: 6px solid #bbc20a !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice8" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-4.png" alt="` + translate('label-RatingExcellent') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice9" class="ktvEmo-div-bg" style="border-top: 6px solid #67a616 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice9" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-5.png" alt="` + translate('label-RatingExcellent') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice10" class="ktvEmo-div-bg" style="border-top: 6px solid #449a1c !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice10" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-5.png" alt="` + translate('label-RatingExcellent') + `" class="ktv-icons">
                          </div>
                          <div style="display: flex; justify-content: flex-start; align-items: center; padding-left: ${paddingMax}">
                          <label style="font-weight: normal;">` + question.maxRateDescription + `</label>
                          </div>
                      </div>
                  </div>`;
  
                      el.innerHTML = template1;
                  } else if (question.theme == 'label-ColorGradient') {
                      template2 = `<div class="widgetRatingWidth">
                      <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                          <div style="display: flex; justify-content: flex-start; align-items: center; padding-right: ${paddingMin}">
                          <label style="font-weight: normal;">` + question.minRateDescription + `</label>
                          </div>
                          <div id="divChoice1" class="ktv-div-bg" style="border-top: 6px solid #c60c00; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">1</label>
                          </div>
                          <div id="divChoice2" class="ktv-div-bg" style="border-top: 6px solid #da5300 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">2</label>
                          </div>
                          <div id="divChoice3" class="ktv-div-bg" style="border-top: 6px solid #e67d00 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">3</label>
                          </div>
                          <div id="divChoice4" class="ktv-div-bg" style="border-top: 6px solid #efa000 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">4</label>           
                          </div>
                          <div id="divChoice5" class="ktv-div-bg" style="border-top: 6px solid #f7bb00 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">5</label>
                          </div>
                          <div id="divChoice6" class="ktv-div-bg" style="border-top: 6px solid #ffd700 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">6</label>
                          </div>
                          <div id="divChoice7" class="ktv-div-bg" style="border-top: 6px solid #dacc05 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">7</label>
                          </div>
                          <div id="divChoice8" class="ktv-div-bg" style="border-top: 6px solid #bbc20a !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">8</label>
                          </div>
                          <div id="divChoice9" class="ktv-div-bg" style="border-top: 6px solid #67a616 !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">9</label>
                          </div>
                          <div id="divChoice10" class="ktv-div-bg" style="border-top: 6px solid #449a1c !important; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">10</label>
                          </div>
                          <div style="display: flex; justify-content: flex-start; align-items: center; padding-left: ${paddingMax}">
                          <label style="font-weight: normal;">` + question.maxRateDescription + `</label>
                          </div>
                      </div>
                  </div>`;
                      el.innerHTML = template2;
                  } else {
                      template3 = `<div class="widgetRatingWidth">
                      <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                          <div style="display: flex; justify-content: flex-start; align-items: center; padding-right: ${paddingMin}">
                          <label style="font-weight: normal;">` + question.minRateDescription + `</label>
                          </div>
                          <div id="divChoice1" class="ktv-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">1</label>
                          </div>
                          <div id="divChoice2" class="ktv-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">2</label>
                          </div>
                          <div id="divChoice3" class="ktv-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">3</label>
                          </div>
                          <div id="divChoice4" class="ktv-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">4</label>           
                          </div>
                          <div id="divChoice5" class="ktv-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">5</label>
                          </div>
                          <div id="divChoice6" class="ktv-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">6</label>
                          </div>
                          <div id="divChoice7" class="ktv-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">7</label>
                          </div>
                          <div id="divChoice8" class="ktv-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">8</label>
                          </div>
                          <div id="divChoice9" class="ktv-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">9</label>
                          </div>
                          <div id="divChoice10" class="ktv-div-bg" style="background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">10</label>
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
              for (var i = 1; i <= 10; i++) {
                  if (i == value) {
                      if (i == 1) {
                          if (question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #c60c00";
                          }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                      } else if (i == 2) {
                          if (question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #da5300";
                          }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                      } else if (i == 3) {
                          if (question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #e67d00";
                          }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                      } else if (i == 4) {
                          if (question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #efa000";
                          }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                      } else if (i == 5) {
                          if (question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #f7bb00";
                          }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                      } else if (i == 6) {
                          if (question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #ffd700";
                          }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                      } else if (i == 7) {
                          if (question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #dacc05";
                          }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                      } else if (i == 8) {
                          if (question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #bbc20a";
                          }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                      } else if (i == 9) {
                          if (question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #67a616";
                          }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                      } else if (i == 10) {
                          if (question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #449a1c";
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
          if(question.value && question.value != "") {
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
          el.querySelector("#divChoice6").addEventListener('click', function (event) {
              onChoiceClicked(6);
              event.stopPropagation();
              event.preventDefault();
          });
          el.querySelector("#divChoice7").addEventListener('click', function (event) {
              onChoiceClicked(7);
              event.stopPropagation();
              event.preventDefault();
          });
          el.querySelector("#divChoice8").addEventListener('click', function (event) {
              onChoiceClicked(8);
              event.stopPropagation();
              event.preventDefault();
          });
          el.querySelector("#divChoice9").addEventListener('click', function (event) {
              onChoiceClicked(9);
              event.stopPropagation();
              event.preventDefault();
          });
          el.querySelector("#divChoice10").addEventListener('click', function (event) {
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
  let check = Survey.CustomWidgetCollection.Instance.widgetsValues.find(e => e.name == "ktvrating")
  if (!check || check == "") {
      Survey.CustomWidgetCollection.Instance.addCustomWidget(ktvRating, "customtype");

      Survey.Serializer.addProperty("ktvrating", {
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
function NpsRating() {
    
  var template1;
  var template2;
  var template3;
  var npsrating = {
      name: "npsrating",
      title: "NPS score",
      iconName: "icon-rating",
      category: translate('label-Standard'),
      widgetIsLoaded: function () {
          return true;
      },
      defaultJSON: {
          type : "npsrating",
          // choices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          entity : "npsrating",
          // rateValues: [
          //     {
          //         "value": 0,
          //         "text": 0
          //     },
          //     {
          //         "value": 1,
          //         "text": 1
          //     },
          //     {
          //         "value": 2,
          //         "text": 2
          //     },
          //     {
          //         "value": 3,
          //         "text": 3
          //     },
          //     {
          //         "value": 4,
          //         "text": 4
          //     },
          //     {
          //         "value": 5,
          //         "text": 5
          //     },
          //     {
          //         "value": 6,
          //         "text": 6
          //     },
          //     {
          //         "value": 7,
          //         "text": 7
          //     },
          //     {
          //         "value": 8,
          //         "text": 8
          //     },
          //     {
          //         "value": 9,
          //         "text": 9
          //     },
          //     {
          //         "value": 10,
          //         "text": 10
          //     }
          // ],
          maxRateDescription: "zeer waarschijnlijk",
          minRateDescription : "helemaal niet waarschijnlijk"
      },
      isFit: function (question) {
          if(question.getType() === "npsrating") {
              if(!question.theme || question.theme == "") {
                  question.theme =  'label-Standard';
              } 
              // template = getData(question);
              // console.log("this is..template.", template)

          }
          return question.getType() === "npsrating";
      },
      isDefaultRender: false,
      htmlTemplate: `<div></div>`,

      activatedByChanged: function (activatedBy) {
          Survey.JsonObject.metaData.addClass(
              "npsrating", [
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
          if(question.getType() === "npsrating") {
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
              if(question.getType() === "npsrating") {
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
  let check = Survey.CustomWidgetCollection.Instance.widgetsValues.find( e => e.name == "npsrating")
  if( !check || check == "") {
      Survey.CustomWidgetCollection.Instance.addCustomWidget(npsrating, "customtype");

      Survey.Serializer.addProperty("npsrating", {
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
function NesRating() {
  var template1;
  var template2;
  var template3;
  var nesrating = {
      name: "nesrating",
      title: "NES score",
      iconName: "icon-rating",
      category: translate('label-Standard'),
      widgetIsLoaded: function () {
          return true;
      },
      defaultJSON: {
          type : "nesrating",
          entity : "nesrating",
          maxRateDescription: "zeer veel moeite",
          minRateDescription : "zeer weinig moeite"
      },
      isFit: function (question) {
          if(question.getType() === "nesrating") {
              if(!question.theme || question.theme == "") {
                  question.theme = 'label-Standard';
              } 
              // template = getData(question);
              // console.log("this is..template.", template)

          }
          return question.getType() === "nesrating";
      },
      isDefaultRender: false,
      htmlTemplate: `<div></div>`,

      activatedByChanged: function (activatedBy) {
          Survey.JsonObject.metaData.addClass(
              "nesrating", [
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
          if(question.getType() === "nesrating") {
              if(question.theme == 'label-Emoji') {
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
              
              el.innerHTML= template1;
              } else if(question.theme == 'label-ColorGradient') {
                  template2 =  `<div>
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
              el.innerHTML= template2;
              }else{
                  template3 =   `<div>
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
                  
              el.innerHTML= template3;
              }
          }
          question.registerFunctionOnPropertyValueChanged("theme", (newValue) =>  {
              if(question.getType() === "nesrating") {
                  if(question.theme == 'label-Emoji') {
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
                  
                  el.innerHTML= template1;
                  } else if(question.theme == 'label-ColorGradient') {
                      template2 =  `<div>
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
                  el.innerHTML= template2;
                  }else{
                      template3 =   `<div>
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
                      
                  el.innerHTML= template3;
                  }
              }
          });
          var onChoiceClicked = function (value) {
              for(var i=1; i<=5; i++) {
                  if(i==value) {
                      if(i == 1) {
                          if(question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #499c1b";
                           }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                      } else if(i == 2) {
                          if(question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #adbd0c";
                           }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                      } else if(i == 3) {
                          if(question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #ffd600";
                           }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                      } else if(i == 4) {
                          if(question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #ed9800";
                           }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                      } else if(i == 5) {
                          if(question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #cb1d00";
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
         
          if (question.value && question.value != "") {
              onChoiceClicked(question.value);
          }
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
      },
      willUnmount: function (question, el) {
          //el.innerHTML = null;
          //el.off();
      }
  };

  //Register our widget in singleton custom widget collection
  let check = Survey.CustomWidgetCollection.Instance.widgetsValues.find( e => e.name == "nesrating")
  if( !check || check == "") {
      Survey.CustomWidgetCollection.Instance.addCustomWidget(nesrating, "customtype");

      Survey.Serializer.addProperty("nesrating", {
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
function Ktv15Rating() {
  var template1;
  var template2;
  var template3;
  var Ktv15rating = {
      name: "ktv15rating",
      title: "KTV(1-5) score",
      iconName: "icon-rating",
      category: translate('label-Standard'),
      widgetIsLoaded: function () {
          return true;
      },
      defaultJSON: {
          type: "ktv15rating",
          entity: "ktv15rating",
          maxRateDescription: "zeer tevreden",
          minRateDescription: "absoluut niet tevreden"
      },
      isFit: function (question) {
          if (question.getType() === "ktv15rating") {
              if (!question.theme || question.theme == "") {
                  question.theme = 'label-Standard';
              }

          }
          return question.getType() === "ktv15rating";
      },
      isDefaultRender: false,
      htmlTemplate: `<div></div>`,

      activatedByChanged: function (activatedBy) {
          Survey.JsonObject.metaData.addClass(
              "ktv15rating", [
              { name: "rateStep", visible: false },
              { name: "rateValues", visible: false },
              { name: "rateMin", visible: false },
              { name: "rateMax", visible: false },
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
          if (question.getType() === "ktv15rating") {
              if (question.theme == 'label-Emoji') {
                  template1 = `<div class="widgetRatingWidth">
                  <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                      <div style="display: flex; justify-content: flex-start; align-items: center; padding-right: ${paddingMin}">
                      <label style="font-weight: normal;">` + question.minRateDescription + `</label>
                      </div>
                      <div id="divChoice1" class="cesEmo-div-bg" style="border-top: 6px solid #cb1d00; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice1" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingVeryBad') + `" class="ktv-icons">
                      </div>
                      <div id="divChoice2" class="cesEmo-div-bg" style="border-top: 6px solid #ed9800; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice2" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-2.png" alt="` + translate('label-RatingBad') + `" class="ktv-icons">
                      </div>
                      <div id="divChoice3" class="cesEmo-div-bg" style="border-top: 6px solid #ffd600; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice3" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-3.png" alt="` + translate('label-RatingNeutral') + `" class="ktv-icons">
                      </div>
                      <div id="divChoice4" class="cesEmo-div-bg" style="border-top: 6px solid #adbd0c; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice4" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-4.png" alt="` + translate('label-RatingGood') + `" class="ktv-icons">            
                      </div>
                      <div id="divChoice5" class="cesEmo-div-bg" style="border-top: 6px solid #499c1b; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <img id="iconChoice5" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-5.png" alt="` + translate('label-RatingExcellent') + `" class="ktv-icons">
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
                      <div id="divChoice1" class="ces-div-bg" style="border-top: 6px solid #cb1d00; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">1</label>
                      </div>
                      <div id="divChoice2" class="ces-div-bg" style="border-top: 6px solid #ed9800; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">2</label>
                      </div>
                      <div id="divChoice3" class="ces-div-bg" style="border-top: 6px solid #ffd600; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">3</label>
                      </div>
                      <div id="divChoice4" class="ces-div-bg" style="border-top: 6px solid #adbd0c; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">4</label>           
                      </div>
                      <div id="divChoice5" class="ces-div-bg" style="border-top: 6px solid #499c1b; background-color: ` + sessionStorage.mainColor + ` !important;">
                      <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">5</label>
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
              if (question.getType() === "ktv15rating") {
                  if (question.theme == 'label-Emoji') {
                      template1 = `<div class="widgetRatingWidth">
                      <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                          <div *ngIf="` +question.minRateDescription + ` !=''"  style="display: flex; justify-content: flex-start; align-items: center; padding-right: ${paddingMin}">
                          <label style="font-weight: normal;">` + question.minRateDescription + `</label>
                          </div>
                          <div id="divChoice1" class="cesEmo-div-bg" style="border-top: 6px solid #cb1d00; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice1" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingVeryBad') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice2" class="cesEmo-div-bg" style="border-top: 6px solid #ed9800; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice2" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-2.png" alt="` + translate('label-RatingBad') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice3" class="cesEmo-div-bg" style="border-top: 6px solid #ffd600; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice3" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-3.png" alt="` + translate('label-RatingNeutral') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice4" class="cesEmo-div-bg" style="border-top: 6px solid #adbd0c; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice4" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-4.png" alt="` + translate('label-RatingGood') + `" class="ktv-icons">            
                          </div>
                          <div id="divChoice5" class="cesEmo-div-bg" style="border-top: 6px solid #499c1b; background-color: ` + sessionStorage.mainColor + ` !important;">
                              <img id="iconChoice5" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-5.png" alt="` + translate('label-RatingExcellent') + `" class="ktv-icons">
                          </div>
                          <div *ngIf="` +question.maxRateDescription + ` !=''" style="display: flex; justify-content: flex-start; align-items: center; padding-left: ${paddingMax}">
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
                          <div id="divChoice1" class="ces-div-bg" style="border-top: 6px solid #cb1d00; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">1</label>
                          </div>
                          <div id="divChoice2" class="ces-div-bg" style="border-top: 6px solid #ed9800; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">2</label>
                          </div>
                          <div id="divChoice3" class="ces-div-bg" style="border-top: 6px solid #ffd600; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer; ">3</label>
                          </div>
                          <div id="divChoice4" class="ces-div-bg" style="border-top: 6px solid #adbd0c; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">4</label>           
                          </div>
                          <div id="divChoice5" class="ces-div-bg" style="border-top: 6px solid #499c1b; background-color: ` + sessionStorage.mainColor + ` !important;">
                          <label style="display: flex; width: 25px;justify-content: center; cursor:pointer;">5</label>
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
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #cb1d00";
                          }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                      } else if (i == 2) {
                          if (question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #ed9800";
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
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #adbd0c";
                          }
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                      } else if (i == 5) {
                          if (question.theme == 'label-Emoji' || question.theme == 'label-ColorGradient') {
                              el.querySelector("#divChoice" + i).style.borderTop = "6px solid #499c1b";
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
          if(question.value && question.value != "") {
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
  let check = Survey.CustomWidgetCollection.Instance.widgetsValues.find(e => e.name == "ktv15rating")
  if (!check || check == "") {
      Survey.CustomWidgetCollection.Instance.addCustomWidget(Ktv15rating, "customtype");

      Survey.Serializer.addProperty("ktv15rating", {
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
function StarRating() {
  var template1;
  var template2;
  var template3;
  var starrating = {
      name: "starrating",
      title: translate('control-StarRating'),
      iconName: "icon-rating",
      category: translate('label-Standard'),
      widgetIsLoaded: function () {
          return true;
      },
      defaultJSON: {
          type: "starrating",
          entity: "starrating",
          // rateValues: [
          //     "1",
          //     "2",
          //     "3"
          //    ],
          rateMin: "1",
          rateMax: "10",
      },
      isFit: function (question) {
          // if (question.getType() === "starrating") {
          //     if (!question.theme || question.theme == "") {
          //         question.theme = translate('label-Standard');
          //     }

          // }
          return question.getType() === "starrating";
      },
      isDefaultRender: false,
      htmlTemplate: `<div id="starRatingDiv"></div>`,

      activatedByChanged: function (activatedBy) {
          Survey.JsonObject.metaData.addClass(
              "starrating", [
              { name: "rateStep", visible: false },
              { name: "rateValues", visible: false },
              { name: "rateMin", visible: false },
              // { name: "rateMax", visible: false },
          ],
              null,
              "rating"
          );
      },
      afterRender: function (question, el) {
          if (question.getType() === "starrating") {
              var mainDiv = document.createElement('div');
              mainDiv.id = "starMainDiv" + question.id
              var starWrapper = document.createElement('div');
              

              var toAdd = document.createDocumentFragment();
              for (var i = question.rateMax; i >= 1; i--) {
                  var newInput = document.createElement('input');
                  newInput.id = 'star' + i + question.id;
                  newInput.type = 'radio';
                  newInput.name = 'rating' + question.id;
                  newInput.value = i;
                  newInput.onclick = function () { onselectChoice(this, question, el) };
                  if (question.value && question.value != "" && question.value == i) {
                      newInput.checked = true;
                  }
                  // newInput.innerHTML = "<label for='star'"+ i+" title=" + i + " star></label>";
                  var newLabel = document.createElement('label');
                  newLabel.htmlFor = 'star' + i + question.id;
                  newLabel.title = i + ' star';
                  newLabel.classList.add("far");
                  newLabel.classList.add("fa-star");
                  // newLabel.fontWeight = 700;

                  toAdd.appendChild(newInput);
                  toAdd.appendChild(newLabel);
              }
              // document.getElementById('starRatingDiv').appendChild(toAdd);
              starWrapper.id = "starWrapper" + question.id;
              starWrapper.style.display = "flex";
              starWrapper.style.justifyContent = "flex-end";
              starWrapper.style.flexWrap = "wrap-reverse";
              starWrapper.style.display = "flex";
              starWrapper.style.flexDirection = "row-reverse";
              // mainDiv.style.float = "left";
              starWrapper.classList.add("starrating");
              starWrapper.appendChild(toAdd);
              mainDiv.appendChild(starWrapper);
              el.appendChild(mainDiv)

          }
          question.registerFunctionOnPropertyValueChanged("rateMax", (newValue) => {
              if (question.getType() === "starrating") {
                  if (question.rateMax < 3) {
                      question.rateMax = 3;
                      template1 = `<div style="max-width: 600px;">
                          <div><ion-text style="color: #ed5565 !important">` + translate('label-StarRatingMaxValidation') + `</ion-text></div>
                      </div>`;
                      el.innerHTML = template1;
                  } else if (question.rateMax > 10) {
                      question.rateMax = 10;
                      template1 = `<div style="max-width: 600px;">
                          <div><ion-text style="color: #ed5565 !important">` + translate('label-StarRatingMaxValidation') + `</ion-text></div>
                      </div>`;
                      el.innerHTML = template1;
                  } else {
                      el.innerHTML = "";
                      var mainDiv = document.createElement('div');
                      mainDiv.id = "starMainDiv" + question.id;
                      var starWrapper = document.createElement('div');
                      var toAdd = document.createDocumentFragment();
                      for (var i = question.rateMax; i >= 1; i--) {
                          var newInput = document.createElement('input');
                          newInput.id = 'star' + i;
                          newInput.type = 'radio';
                          newInput.name = 'rating';
                          newInput.value = i;
                          toAdd.appendChild(newInput);
                          var newLabel = document.createElement('label');
                          newLabel.title = i + ' ' + translate('label-Star') + '';
                          newLabel.htmlFor = 'star' + i;
                          
                          newLabel.classList.add("far");
                          newLabel.classList.add("fa-star");
                          toAdd.appendChild(newLabel);
                      }
                      
                      starWrapper.id = "starWrapper" + question.id;
                      starWrapper.style.display = "flex";
                      starWrapper.style.justifyContent = "flex-end";
                      starWrapper.style.flexWrap = "wrap-reverse";
                      starWrapper.style.display = "flex";
                      starWrapper.style.flexDirection = "row-reverse";
                      // mainDiv.style.float = "left";
                      starWrapper.classList.add("starrating");
                      starWrapper.appendChild(toAdd);
                      mainDiv.appendChild(starWrapper);
                      el.appendChild(mainDiv)
                  }
              }
          });
          question.registerFunctionOnPropertyValueChanged("hasComment", (newValue) => {
              console.log(newValue)
              question.commentText = translate('label-Remarks')
          });
          // var onChoiceClicked = function (value) {
          //     question.value = value;

          // };
          // if(question.value && question.value != "") {
          // //    document.getElementById("star" + question.value + question.id).checked= true;
          // }

      },
      willUnmount: function (question, el) {
          el.innerHTML = null;
          el.off();
      }
  };

  // setTimeout(() => {
  //     Survey.Serializer.addProperty("starrating", {
  //         name: "showTextarea:switch",
  //         isRequired: true,
  //         category: "general",
  //         visibleIndex: 3,
  //       });           
  // }, 1000);

  //Register our widget in singleton custom widget collection
  let check = Survey.CustomWidgetCollection.Instance.widgetsValues.find(e => e.name == "starrating")
  if (!check || check == "") {
      Survey.CustomWidgetCollection.Instance.addCustomWidget(starrating, "customtype");
  }
}
function YesNoRating() {
  var template1;
  var template2;
  var template3;
  var template4;
  var template5;
  var template6;
  var template7;

  var YesNoRating = {
      name: 'yesnorating',
      title: translate('control-YesNoRating'),
      iconName: "icon-rating",
      category: translate('theme-Standard'),
      widgetIsLoaded: function () {
          return true;
      },
      isFit: function (question) {
          if (question.getType() === 'yesnorating') {
              if (!question.theme || question.theme == "") {
                  question.theme = 'theme-Standard';
              }

          }
          return question.getType() === 'yesnorating';
      },
      isDefaultRender: false,
      htmlTemplate: `<div></div>`,

      activatedByChanged: function (activatedBy) {
          Survey.JsonObject.metaData.addClass(
              'yesnorating', [
                  { name: "rateStep", visible: false },
                  { name: "rateValues", visible: false },
                  { name: "rateMin", visible: false },
                  { name: "rateMax", visible: false },
              ],
              null,
              "boolean"
          );
      },
      afterRender: function (question, el) {
          let paddingMin;
          let paddingMax;
          if (question.getType() === 'yesnorating') {
              if (question.theme == 'theme-Emoji') {
                  template1 = `<div class="widgetRatingWidth">
                  <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                     <div id="divChoice1" class="cesEmo-div-bg" >
                           <img id="iconChoice1" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-5.png" alt="` + translate('label-RatingVeryGood') + `" class="ktv-icons">
                      </div>
                    <div id="divChoice2" class="cesEmo-div-bg">
                           <img id="iconChoice2" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingBad') + `" class="ktv-icons">
                    </div>
                  </div>
              </div>`;

                  el.innerHTML = template1;
              } else if (question.theme == 'theme-ThumbsUpDown') {
                  template2 = `<div>
                  <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                       <div id="divChoice1" style="cursor:pointer;color: white;-webkit-Text-Stroke-Width: 3px;-webkit-Text-Stroke-Color: rgb(6, 54, 85);">
                           <i style="font-size:50px;margin-right:14px" class="fas fa-thumbs-up"></i>
                       </div>
                  <div id="divChoice2" style="cursor:pointer;color: white;-webkit-Text-Stroke-Width: 3px;-webkit-Text-Stroke-Color: rgb(6, 54, 85);">
                           <i style="font-size:50px" class="fas fa-thumbs-down fa-flip-horizontal"></i>
                       </div>
                    </div>
              </div>`;
                  el.innerHTML = template2;
              } else if (question.theme == 'theme-RadioButton') {
                  template3 = `<div>
                  <div style="width: 100%;">
                       <div id="divChoice1" style="cursor:pointer;font-weight: bold;">
                          <img id="iconChoice1" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/radiobuttonforfalse.svg" style="margin-bottom:-7px;cursor:pointer;"  alt="` + translate('label-RatingVeryGood') + `">
                          Yes, thanks a lot
                       </div><br>
                  <div id="divChoice2" style="font-weight: bold;margin-top: -9px;">
                           <img id="iconChoice2" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/radiobuttonforfalse.svg" style="margin-bottom:-7px;cursor:pointer;" alt="` + translate('label-RatingVeryBad') + `">
                           Not really
                       </div>
                    </div>
              </div>`;
                  el.innerHTML = template3;
              } else if (question.theme == 'theme-RoundCheck') {
                  template4 = `<div>
                  <div  style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                       <div id="divChoice1" style="width:37px">
                          <img id="iconChoice1" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/circleright.svg" style="margin-bottom:-7px;cursor:pointer;"  alt="` + translate('label-RatingVeryGood') + `">
                       </div>
                  <div id="divChoice2" style="width:37px;margin-left:10px" >
                           <img id="iconChoice2" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/circlewrong.svg" style="margin-bottom:-7px;cursor:pointer;" alt="` + translate('label-RatingVeryBad') + `">
                       </div>
                    </div>
              </div>`;
                  el.innerHTML = template4;
              }else if (question.theme == 'theme-RectangleCheck') {
                  template5 = `<div>
                  <div  style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                       <div id="divChoice1" class="rectangleButton">
                          <img id="iconChoice1" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/right.svg" style="margin-left:13px;cursor:pointer;width:16px;margin-bottom:-4px"  alt="` + translate('label-RatingVeryGood') + `">
                       </div>
                  <div id="divChoice2" class="rectangleButton" style="margin-left:10px" >
                           <img id="iconChoice2" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/wrong.svg" style="margin-left:15px;cursor:pointer;width:13px;margin-bottom:-2px" alt="` + translate('label-RatingVeryBad') + `">
                       </div>
                    </div>
              </div>`;
                  el.innerHTML = template5;
              }
              else {
                  template6 = `<div>
                  <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                      <div id="divChoice1"  class = "positiveButton" style="cursor:pointer;margin-right:14px">
                      ` + Survey.surveyLocalization.getString("booleanCheckedLabel") + `
                       </div>
                       <div id="divChoice2" class = "negativeButton"  style="cursor:pointer;">
                       ` + Survey.surveyLocalization.getString("booleanUncheckedLabel") + `
                        </div>
                  </div>
                   </div>`;

                  el.innerHTML = template6;
              }
          }
          question.registerFunctionOnPropertyValueChanged("theme", (newValue) => {
              if (question.getType() === 'yesnorating') {
                  if (question.theme == 'theme-Emoji') {
                      template1 = `<div class="widgetRatingWidth">
                      <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                          <div id="divChoice1" class="cesEmo-div-bg">
                              <img id="iconChoice1" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-5.png" alt="` + translate('label-RatingVeryGood') + `" class="ktv-icons">
                          </div>
                          <div id="divChoice2" class="cesEmo-div-bg">
                              <img id="iconChoice2"  src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rating-a-1.png" alt="` + translate('label-RatingBad') + `" class="ktv-icons">
                          </div>

                      </div>
                  </div>`;

                      el.innerHTML = template1;
                  } else if (question.theme == 'theme-ThumbsUpDown') {
                      template2 = `<div>
                      <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                          <div id="divChoice1" style="cursor:pointer;color: white;-webkit-Text-Stroke-Width: 3px;-webkit-Text-Stroke-Color: rgb(6, 54, 85);">
                          <i style="font-size:50px;margin-right:14px" class="fas fa-thumbs-up"></i>
                          </div>
                          <div id="divChoice2" style="cursor:pointer;color: white;-webkit-Text-Stroke-Width: 3px;-webkit-Text-Stroke-Color: rgb(6, 54, 85);">
                         <i style="font-size:50px" class="fas fa-thumbs-down fa-flip-horizontal"></i>
                          </div>
                      </div>
                  </div>`;
                      el.innerHTML = template2;
                  } else if (question.theme == 'theme-RadioButton') {
                      template3 = `<div>
                      <div style="width: 100%;">
                           <div id="divChoice1" style="font-weight: bold;">
                              <img id="iconChoice1" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/radiobuttonforfalse.svg" style="margin-bottom:-7px;cursor:pointer;"  alt="` + translate('label-RatingVeryGood') + `">
                              Yes, thanks a lot
                           </div><br>
                      <div id="divChoice2" style="font-weight: bold;margin-top: -9px;">
                               <img id="iconChoice2" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/radiobuttonforfalse.svg" style="margin-bottom:-7px;cursor:pointer;"  alt="` + translate('label-RatingVeryBad') + `">
                                Not really
                           </div>
                        </div>
                  </div>`;
                      el.innerHTML = template3;
                  } else if (question.theme == 'theme-RoundCheck') {
                      template4 = `<div>
                      <div  style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                           <div id="divChoice1" style="width:37px">
                              <img id="iconChoice1" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/circleright.svg" style="margin-bottom:-7px;cursor:pointer;"  alt="` + translate('label-RatingVeryGood') + `">
                           </div>
                      <div id="divChoice2" style="width:37px;margin-left:10px" >
                               <img id="iconChoice2" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/circlewrong.svg" style="margin-bottom:-7px;cursor:pointer;" alt="` + translate('label-RatingVeryBad') + `">
                           </div>
                        </div>
                  </div>`;
                      el.innerHTML = template4;
                  }else if (question.theme == 'theme-RectangleCheck') {
                      template5 = `<div>
                      <div  style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                           <div id="divChoice1" class="rectangleButton">
                              <img id="iconChoice1" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/right.svg" style="margin-left:13px;cursor:pointer;width:16px;margin-bottom:-4px"  alt="` + translate('label-RatingVeryGood') + `">
                           </div>
                      <div id="divChoice2" class="rectangleButton" style="margin-left:10px" >
                               <img id="iconChoice2" src="https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/wrong.svg" style="margin-left:15px;cursor:pointer;width:13px;margin-bottom:-2px" alt="` + translate('label-RatingVeryBad') + `">
                           </div>
                        </div>
                  </div>`;
                      el.innerHTML = template5;
                  } else {
                      template6 = `<div>
                      <div style="display:flex; justify-content: flex-start; flex-wrap: wrap; width: 100%;">
                      <div id="divChoice1" class = "positiveButton" style="margin-right:15px;">
                      ` + Survey.surveyLocalization.getString("booleanCheckedLabel") + `
                      </div>
                      <div id="divChoice2" class = "negativeButton">
                      ` + Survey.surveyLocalization.getString("booleanUncheckedLabel") + `
                      </div>

                  </div>

                  </div>`;

                      el.innerHTML = template6;
                  }
              }
          });

          var onChoiceClicked = function (value) {
              for (var i = 1; i <= 2; i++) {
                  if (value) {
                      if (question.theme == 'theme-Emoji') {
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                          el.querySelector("#divChoice" + 2).style.background = '';
                      }
                      if (question.theme == 'theme-Standard') {
                          el.querySelector("#divChoice" + i).style.background = "green";
                          el.querySelector("#divChoice" + 2).style.background = "";
                      }

                      if (question.theme == 'theme-RadioButton') {
                          el.querySelector("#iconChoice" + i).src = "https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/radiobuttonfortrue.svg";
                          el.querySelector("#iconChoice" + 2).src = "https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/radiobuttonforfalse.svg";
                      }

                      if (question.theme == 'theme-RectangleCheck') {
                          el.querySelector("#iconChoice" + i).src = "https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/rightselected.svg";
                          el.querySelector("#iconChoice" + 2).src = "https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/wrong.svg";
                          el.querySelector("#divChoice" + i).style.color = "green";
                          el.querySelector("#divChoice" + i).style.background = "lightgreen";
                          el.querySelector("#divChoice" + 2).style.color = "#063655";
                          el.querySelector("#divChoice" + 2).style.background = "white";
                      }


                      if (question.theme == 'theme-ThumbsUpDown') {
                          el.querySelector("#divChoice" + i).style.color = "lightgreen";
                          el.querySelector("#divChoice" + i).style.webkitTextStrokeWidth = "3px";
                          el.querySelector("#divChoice" + i).style.webkitTextStrokeColor = "green";
                          el.querySelector("#divChoice" + 2).style.color = "white";
                          el.querySelector("#divChoice" + 2).style.webkitTextStrokeWidth = "3px"
                          el.querySelector("#divChoice" + 2).style.webkitTextStrokeColor = "rgb(6, 54, 85)";
                      }

                      if (question.theme == 'theme-RoundCheck') {
                          el.querySelector("#iconChoice" + i).src = "https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/circlerightselected.svg";
                          el.querySelector("#iconChoice" + 2).src = "https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/circlewrong.svg";
                      }

                  } else if (!value) {
                      if (question.theme == 'theme-Emoji') {
                          el.querySelector("#divChoice" + i).opacity = "1";
                          el.querySelector("#divChoice" + i).style.background = sessionStorage.hoverColor;
                          el.querySelector("#divChoice" + 1).style.background = '';
                      }
                      if (question.theme == 'theme-Standard') {
                          el.querySelector("#divChoice" + i).style.background = "red";
                          el.querySelector("#divChoice" + 1).style.background = "";
                      }

                      if (question.theme == 'theme-RadioButton') {
                          el.querySelector("#iconChoice" + i).src = "https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/radiobuttonfortrue.svg";
                          el.querySelector("#iconChoice" + 1).src = "https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/radiobuttonforfalse.svg";
                      }

                      if (question.theme == 'theme-RectangleCheck') {
                          el.querySelector("#iconChoice" + i).src = "https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/wrongselected.svg";
                          el.querySelector("#iconChoice" + 1).src = "https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/right.svg";
                          el.querySelector("#divChoice" + i).style.color = "red";
                          el.querySelector("#divChoice" + i).style.background = "lightsalmon";
                          el.querySelector("#divChoice" + 1).style.color = "#063655";
                          el.querySelector("#divChoice" + 1).style.background = "white";
                      }

                      if (question.theme == 'theme-ThumbsUpDown') {
                          el.querySelector("#divChoice" + i).style.color = "lightsalmon";
                          el.querySelector("#divChoice" + i).style.webkitTextStrokeWidth = "3px"
                          el.querySelector("#divChoice" + i).style.webkitTextStrokeColor = "red"
                          el.querySelector("#divChoice" + 1).style.color = "white";
                          el.querySelector("#divChoice" + 1).style.webkitTextStrokeWidth = "3px"
                          el.querySelector("#divChoice" + 1).style.webkitTextStrokeColor = "rgb(6, 54, 85)";
                      }

                      if (question.theme == 'theme-RoundCheck') {
                          el.querySelector("#iconChoice" + i).src = "https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/circlewrongselected.svg";
                          el.querySelector("#iconChoice" + 1).src = "https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/widgets/circleright.svg";
                      }

                  }
              }

              question.value = value;
          };
          if (question.value == true || question.value == false) {
              onChoiceClicked(question.value);
          }
          el.querySelector("#divChoice1").addEventListener('click', function (event) {
              onChoiceClicked(true);
              event.stopPropagation();
              event.preventDefault();
          });
          el.querySelector("#divChoice2").addEventListener('click', function (event) {
              onChoiceClicked(false);
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
  let check = Survey.CustomWidgetCollection.Instance.widgetsValues.find(e => e.name == 'yesnorating')
  if (!check || check == "") {
      Survey.CustomWidgetCollection.Instance.addCustomWidget(YesNoRating, "customtype");

      Survey.Serializer.addProperty('yesnorating', {
          name: "theme:dropdown",
          isRequired: true,
          category: "general",
          visibleIndex: 3,
          choices: [
              { value: 'theme-Standard', text: translate('theme-Standard') },
              { value: 'theme-ThumbsUpDown', text: translate('theme-ThumbsUpDown') },
              { value: 'theme-Emoji', text: translate('theme-Emoji') },
              { value: 'theme-RadioButton', text: translate('theme-RadioButton') },
              { value: 'theme-RoundCheck', text: translate('theme-RoundCheck') },
              { value: 'theme-RectangleCheck', text: translate('theme-RectangleCheck') }
          ]
      });
  }
}

function onselectChoice(item, question, el) {
  question.value = JSON.parse(item.value);

  // if (item.value < 3) {
  //     question.value = JSON.parse(item.value);
  //     if(document.getElementById("validator" + question.id)) {
  //         document.getElementById("validator" + question.id).style.display="block";
  //     } else {
  //         var validatorDiv = document.createElement('div');
  //         validatorDiv.id="validator" + question.id;
  //         validatorDiv.innerHTML = '<ion-text style="color: #ed5565">Cannot rate less then 3</ion-text>'
  //         document.getElementById("starMainDiv" + question.id).appendChild(validatorDiv)
  //     }
     
      
  // } else {
  //     question.value = JSON.parse(item.value);
  //     document.getElementById("validator" + question.id).style.display="none";
  // }
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
  loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
  loadCSS('https://unpkg.com/survey-jquery/survey.min.css');
  // Your code to run since DOM is loaded and ready
  // console.log("dom loaded");
  //loadJS('https://cdnjs.cloudflare.com/ajax/libs/knockout/3.3.0/knockout-min.js', afterLoadjquery, document.body);  
  loadJS('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', afterLoadjquery);
}

initialize();



