var App42SafariPushService = {};

(function () {
    this.webPushId;
    this.apiKey;
    this.secretKey;
    this.initialize = function () {
        if (this.webPushId && this.apiKey) {
            initializePush(webPushId);
        } else {
            console.warn("WEB-PUSH-ID / API-KEY IS NULL OR BLANK.")
        }
    }
}).apply(App42SafariPushService);


var initializePush = function () {
    console.log("Unsupported App42SafariPushService.web " + App42SafariPushService.webPushId);
    console.log("Unsupported App42SafariPushService.apiKey " + App42SafariPushService.apiKey);
    // Ensure that the user can receive Safari Push Notifications.
    if ('safari' in window && 'pushNotification' in window.safari) {
        // var webPushId = 'web.com.shephertz.safariakm';
        var permissionData = window.safari.pushNotification.permission(App42SafariPushService.webPushId);
        checkRemotePermission(permissionData);
    } else {
        console.log("Unsupported device.");
        // alert ("Unsupported device.");
    }
};

var checkRemotePermission = function (permissionData) {
    //var webPushId = "web.com.shephertz.safariakm";
    var webServiceUrl = "https://safaripush.shephertz.com";
    console.log("1 ", permissionData);
    if (permissionData.permission === 'default') {
        //Notification.
        console.log("2 ", permissionData);
        // This is a new web service URL and its validity is unknown.
        window.safari.pushNotification.requestPermission(
            webServiceUrl, // The web service URL.
            App42SafariPushService.webPushId,     // The Website Push ID.
            { "apiKey": App42SafariPushService.apiKey,
            "secretKey": App42SafariPushService.secretKey
         }, // Data that you choose to send to your server to help you identify the user.
            checkRemotePermission         // The callback function.
        );
    }
    else if (permissionData.permission === 'denied') {
        console.log("3 ", permissionData);
        // The user said no.
    }
    else if (permissionData.permission === 'granted') {
        // The web service URL is a valid push provider, and the user said yes.
        // permissionData.deviceToken is now available to use.
        console.log("4 ", permissionData);
        //alert("Device Token Recieved : " + permissionData.deviceToken);
    }
};