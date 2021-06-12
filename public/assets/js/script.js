$(".logoBrightInicio").on('click', function () {
    window.location = "/";
});

$(".serviciosInicio").on('click', function () {
    window.location = "/servicios";
});

$(".goToContact").on('click', function () {
    window.location = "/contacto";
});

// $(".empezarYa").on('click', function () {
//     // Proving FB 

//     'use strict';
//     const bizSdk = require('facebook-nodejs-business-sdk');
//     const ServerEvent = bizSdk.ServerEvent;
//     const EventRequest = bizSdk.EventRequest;
//     const UserData = bizSdk.UserData;
//     const CustomData = bizSdk.CustomData;
//     const Content = bizSdk.Content;

//     const access_token = 'EAADBHK9HAXYBADGXTxrQK5sCOeFmeLZAb1Pt3xfZBuOZCnQhZCdUqF7clffwZACUujHZByp1wMF39gyB22zkNM07l9t97t77xYzyCjf1ynVheBnGjeolNqQNUfrZCV636nyjHD5WfyZA8eVnA1jRzZAAK7ZAGckFSoH308N2fso5V0cZCMewDFyrwf6';
//     const pixel_id = '529249911447264';
//     const api = bizSdk.FacebookAdsApi.init(access_token);

//     let current_timestamp = Math.floor(new Date() / 1000);

//     const userData_0 = (new UserData())
//         .setEmails(["7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068"])
//         .setPhones([]);
//     const customData_0 = (new CustomData())
//         .setValue(142.52)
//         .setCurrency("USD");
//     const serverEvent_0 = (new ServerEvent())
//         .setEventName("Purchase")
//         .setEventTime(1623272237)
//         .setUserData(userData_0)
//         .setCustomData(customData_0)
//         .setActionSource("email");

//     const eventsData = [serverEvent_0];
//     const eventRequest = (new EventRequest(access_token, pixel_id))
//         .setEvents(eventsData);
//     eventRequest.execute();


//     // Proving FB
// });
$(".bannerDiving, .bannerDivingInsta").click(function(){
    window.open("https://www.xyncs.com/contacto");
});