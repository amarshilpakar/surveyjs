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

function loadAllCustomWidgets() {
    CesRating();
    NpsEuRating();
    KtvRating();
    NpsRating();
    NesRating();
    Ktv15Rating();
    StarRating();
    YesNoRating();
}



