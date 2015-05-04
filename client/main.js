Accounts.ui.config({	
	passwordSignupFields: 'USERNAME_AND_EMAIL' //  One of 'USERNAME_AND_EMAIL', 'USERNAME_AND_OPTIONAL_EMAIL', 'USERNAME_ONLY', or 'EMAIL_ONLY' (default).
});


  ShareIt.configure({
    useFB: false,          // boolean (default: true)
                          // Whether to show the Facebook button
    useTwitter: true,     // boolean (default: true)
                          // Whether to show the Twitter button
    useGoogle: false,      // boolean (default: true)
                          // Whether to show the Google+ button
    classes: "large btn", // string (default: 'large btn')
                          // The classes that will be placed on the sharing buttons, bootstrap by default.
    iconOnly: false,      // boolean (default: false)
                          // Don't put text on the sharing buttons
    applyColors: true     // boolean (default: true)
                          // apply classes to inherit each social networks background color
  });