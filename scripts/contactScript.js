function sendMessage() {
    "use strict";
    
    var
        name = document.forms['contactForm']['name'].value,
        email = document.forms['contactForm']['email'].value,
        subject = document.forms['contactForm']['subject'].value,
        message = document.forms['contactForm']['message'].value,
        alertMessage;
    
    alertMessage = 'Bonjour ' + name + '!\nVotre message a été envoyé avec succès à notre équipe de support sous le sujet "' + subject + '", nous vous enverrons un email à votre email "' + email + '" bientôt.\n\nVotre message :\n' + message;
    
    alert(alertMessage);
    
    return true;
}
