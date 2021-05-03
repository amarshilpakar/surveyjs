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
  modal.style.cssText = 'position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index:99999997;max-height:70%;width:70%;overflow:auto;';
  modal.appendChild(surveydiv);

  var backdrop = document.createElement('div');
  backdrop.style.cssText = 'position: fixed;z-index: 9999;inset: 0px;background: rgb(85, 85, 85);opacity: 0.8;';
  backdrop.addEventListener("click", function () {
    document.body.removeChild(backdrop);
    document.body.removeChild(modal);
  });

  loadAllCustomWidgets(Survey);
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
  loadJS('https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/custom_widgets_1.0.0.js');
}

initialize();



