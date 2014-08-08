/**
 * Created by domingos on 8/7/14.
 */
Ext.application({
    name:'CandidatoOnline',

    viewport: {
        autoMaximize: true
    },

    requires: [
        'Ext.MessageBox'
    ],



    launch: function(){
         // Initialize the main view
        Ext.create('CandidatoOnline.view.HomeView', {fullscreen: true});

    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
