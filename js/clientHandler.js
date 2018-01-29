// var initializePush = function() {
//     // Ensure that the user can receive Safari Push Notifications.
//     if ('safari' in window && 'pushNotification' in window.safari) {
//         var webPushId = 'web.com.safari.testSafariPushNotification';
//         var permissionData = window.safari.pushNotification.permission(webPushId);
//         checkRemotePermission(permissionData);
//     }else{
//         console.log("Unsupported device.")
//         alert ("Unsupported device.");
//     }
// };
 
// var checkRemotePermission = function (permissionData) {
//     var getPushPackageUrl = 'https://api.shephertz.com';
//     var webPushId = 'web.com.safari.testSafariPushNotification';
//     if (permissionData.permission === 'default') {
//         // This is a new web service URL and its validity is unknown.
//         window.safari.pushNotification.requestPermission(
//             getPushPackageUrl, // The web service URL.
//             webPushId,     // The Website Push ID.
//             {"UserName":"Akshay"}, // Data that you choose to send to your server to help you identify the user.
//             checkRemotePermission         // The callback function.
//         );
//     }
//     else if (permissionData.permission === 'denied') {
//         // The user said no.
//     }
//     else if (permissionData.permission === 'granted') {
//         // The web service URL is a valid push provider, and the user said yes.
//         // permissionData.deviceToken is now available to use.
//         alert("Device Token Recieved : " + permissionData.deviceToken);
//     }
// };


//==================================================================
Pushwoosh.push(['onReady', function(api) {
    console.log('Pushwoosh ready');
}]);


// Executed after a user agrees to receive push notifications. 

Pushwoosh.push(['onSubscribe', function(api) {
    console.log('Event: onSubscribe triggered');
}]);


//  Executed after a device is unregistered from notifications.

Pushwoosh.push(['onUnsubscribe', function(api) {
    console.log('Event: onUnsubscribe triggered');
}]);


// Executed during the SDK initialization if 'autoSubscribe: false' or/and if a user ignores a push notification promt.

Pushwoosh.push(['onPermissionPrompt', function(api) {
    console.log('Event: onPermissionPrompt triggered');
}]);

// Executed during the SDK initialization if a user blocks push notifications.

Pushwoosh.push(['onPermissionDenied', function(api) {
    console.log('Event: onPermissionDenied triggered');
}]);

// Executed during the SDK initialization if a user allows push notifications.

Pushwoosh.push(['onPermissionGranted', function(api) {
    console.log('Event: onPermissionGranted triggered');
}]);

Pushwoosh.push('onNotificationClick', function(api, payload) {
	const {
		url,
		messageHash,
		customData // JSON
	} = payload;
});


// Executed when a push notification is displayed.

Pushwoosh.push(['onPushDelivery', function(api, payload) {
    console.log('Event: onPushDelivery triggered', payload);
}]);


Pushwoosh.push(function(api) {
    // Set tags for a user
    api.setTags({
      'Tag Name 1': 'value1',
      'Tag Name 2': 'value2'
    });
   
    // Get tags for a user from server
    api.getTags();
     
    // Register user ID
    api.registerUser('myUserID');
    
    // Post an Event
    api.postEvent('myEventName', {attributeName: 'attributeValue'});
  
       //Unregister from notifications
    api.unregisterDevice();
  });


  Pushwoosh.push(function(api) {
    var myCustomTags = {
      'Tag 1': 123,
      'Tag 2': 'some string'
    };
    api.setTags(myCustomTags)
      .then(function(res) {
        var skipped = res && res.skipped || [];
        if (!skipped.length) {
          console.log('success');
        }
        else {
          console.warn('skipped tags:', skipped);
        }
      })
      .catch(function(err) {
        console.error('setTags error:', err);
      });
  });

  Pushwoosh.getParams().then(function(params) {
    params = params || {};
    var hwid = params.hwid;
    console.log('hwid : ' + hwid);
    var pushToken = params.pushToken;
    console.log('pushToken : ' + pushToken);
    var userId = params.userId;
    console.log('userId : ' + userId);
  });
