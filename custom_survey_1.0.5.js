var surveyJSON;

function createSurveyElements() {
    //create the container
    var surveydiv = document.createElement('div');
    surveydiv.id = "surveyElement"
    //document.body.appendChild(surveydiv);

    var modal = document.createElement('div');
    modal.style.cssText = 'position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index:99999997;max-height:70%;width:70%;overflow:auto;';
    
    var backdrop = document.createElement('div');
    backdrop.style.cssText = 'position: fixed;z-index: 9999;inset: 0px;background: rgb(85, 85, 85);opacity: 0.8;';
    backdrop.addEventListener("click", function () {
        document.body.removeChild(backdrop);
        document.body.removeChild(modal);
    });

    fbBtn = document.createElement('div');
    fbBtn.id = 'floatedFeedback';
    fbBtn.innerHTML = '<a href="javascript:void(0)" target="_self">Feedback</a>';
    //CSS for feedback button
    var fbStyles = document.createElement('style')
    fbStyles.innerHTML = `#floatedFeedback{font-family: sans-serif; font-size: 14px; font-weight: bold; position: fixed; right: 0;top: 40%;margin: 0;border-radius: 5px 5px 0px 0px;moz-transform: rotate(-90deg);ms-transform: rotate(-90deg);o-transform: rotate(-90deg);webkit-transform: rotate(-90deg);transform: rotate(-90deg);text-align: center;z-index: 15;transform-origin: bottom right;}
    #floatedFeedback a{text-decoration:none;text-transform:uppercase;padding:15px 20px;display:block}`
    document.getElementsByTagName('head')[0].appendChild(fbStyles);
    fbBtn.addEventListener("click", function () {
        console.log('button clicked');
        document.body.appendChild(backdrop);
        modal.appendChild(surveydiv);
        document.body.appendChild(modal);
        var survey = new Survey.Model(surveyJSON);
        $("#surveyElement").Survey({
            model: survey,
            onComplete:sendDataToServer
        });
    });
}

var initSurvey = function () {
    createSurveyElements();
}

function sendDataToServer(survey) {
    var resultAsString = JSON.stringify(survey.data);
    console.log(resultAsString); //send Ajax request to your web server.
}

var loadJS = function (url, implementationCode) {
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

function initialize() {
    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
    loadCSS('https://unpkg.com/survey-jquery/survey.min.css');
    loadCSS('https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/custom_widgets.css');
    loadJS('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js');
    loadJS('https://cdn.jsdelivr.net/gh/amarshilpakar/surveyjs/custom_widgets_1.0.1.js');
    loadJS('https://unpkg.com/survey-jquery', initSurvey);
}

initialize();

function StartSurvey(configuration) {
    surveyJSON = configuration.data;
    var mainC = configuration.surveyMainColor ? configuration.surveyMainColor : '#f3f3f3';
    var hoverC = configuration.surveyHoverColor ? configuration.surveyHoverColor : '#22acc4';
    loadAllCustomWidgets(Survey,mainC, hoverC);
    loadTranslations(configuration.language ? configuration.language : 'en');
    if(configuration.showAsPopup) {
        var css = document.createElement('style');
        var bgColor = configuration.btnCss ? configuration.btnCss.background ? configuration.btnCss.background : '#18466A' : '#18466A';
        var color = configuration.btnCss ? configuration.btnCss.color ? configuration.btnCss.color : 'white' : 'white';
        css.innerHTML = `#floatedFeedback{background: ${bgColor}} #floatedFeedback a{color:${color}}`
        document.getElementsByTagName('head')[0].appendChild(css);
        document.body.appendChild(fbBtn);
    } else if(configuration.parentElementId) {
        var survey = new Survey.Model(surveyJSON);
        $("#surveyContainer").Survey({
            model: survey,
            onComplete:sendDataToServer
        });
    } else {
        var css = document.createElement('style');
        var bgColor = configuration.btnCss ? configuration.btnCss.background ? configuration.btnCss.background : '#18466A' : '#18466A';
        var color = configuration.btnCss ? configuration.btnCss.color ? configuration.btnCss.color : 'white' : 'white';
        css.innerHTML = `#floatedFeedback{background: ${bgColor}} #floatedFeedback a{color:${color}}`
        document.getElementsByTagName('head')[0].appendChild(css);
        document.body.appendChild(fbBtn);
    }
    
}



