/**
 * Created by domingos on 8/7/14.
 */
Ext.application({
    name:'CandidatoOnline',

    viewport: {
        autoMaximize: true
    },

    views: [
        'MainView'
    ],

    controllers: [
        'HomeController',
        'MenuController'
    ],

    requires: [
        'Ext.MessageBox'
    ],



    launch: function(){
        Ext.fly('carregando').destroy();
        Ext.create('CandidatoOnline.view.MainView', {fullscreen: true});
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
