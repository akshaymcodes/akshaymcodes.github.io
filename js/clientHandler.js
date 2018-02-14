var initializePush = function() {
    // Ensure that the user can receive Safari Push Notifications.
    if ('safari' in window && 'pushNotification' in window.safari) {
        var webPushId = 'web.com.shephertz.safariakm';
        var permissionData = window.safari.pushNotification.permission(webPushId);
        checkRemotePermission(permissionData);
    }else{
        console.log("Unsupported device.");
        alert ("Unsupported device.");
    }
};

var checkRemotePermission = function (permissionData) {
    var webPushId = "web.com.shephertz.safariakm";
    var getPushPackageUrl = "https://safaripush.shephertz.com";
    console.log("11111111",permissionData);
    if (permissionData.permission === 'default') {
        console.log("22222",permissionData);
        // This is a new web service URL and its validity is unknown.
        window.safari.pushNotification.requestPermission(
            getPushPackageUrl, // The web service URL.
            webPushId,     // The Website Push ID.
            {"apiKey":"07615a186d1377718979b0d92c146e750ced1c90d62aa8cbd340fb79a04b330f"}, // Data that you choose to send to your server to help you identify the user.
            checkRemotePermission         // The callback function.
        );
    }
    else if (permissionData.permission === 'denied') {
        console.log("3333",permissionData);
        // The user said no.
    }
    else if (permissionData.permission === 'granted') {
        // The web service URL is a valid push provider, and the user said yes.
        // permissionData.deviceToken is now available to use.
        console.log("permissionData ", permissionData);
        alert("Device Token Recieved : " + permissionData.deviceToken);
    }
};