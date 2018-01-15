var initializePush = function() {
    // Ensure that the user can receive Safari Push Notifications.
    if ('safari' in window && 'pushNotification' in window.safari) {
        var webPushId = 'web.com.safari.testSafariPushNotification';
        var permissionData = window.safari.pushNotification.permission(webPushId);
        checkRemotePermission(permissionData);
    }else{
        console.log("Unsupported device.")
        alert ("Unsupported device.");
    }
};
 
var checkRemotePermission = function (permissionData) {
    var getPushPackageUrl = 'https://api.shephertz.com';
    var webPushId = 'web.com.safari.testSafariPushNotification';
    if (permissionData.permission === 'default') {
        // This is a new web service URL and its validity is unknown.
        window.safari.pushNotification.requestPermission(
            getPushPackageUrl, // The web service URL.
            webPushId,     // The Website Push ID.
            {"UserName":"Akshay"}, // Data that you choose to send to your server to help you identify the user.
            checkRemotePermission         // The callback function.
        );
    }
    else if (permissionData.permission === 'denied') {
        // The user said no.
    }
    else if (permissionData.permission === 'granted') {
        // The web service URL is a valid push provider, and the user said yes.
        // permissionData.deviceToken is now available to use.
        alert("Device Token Recieved : " + permissionData.deviceToken);
    }
};
