/**
 * Created by domingos on 8/7/14.
 */
Ext.define('CandidatoOnline.controller.HomeController', {
    extend : 'Ext.app.Controller',

    config:{
        refs:{
            mainView: "#homeView",
            btEntrar: "#btEntrar"
        },
        control:{
            btbtEntrar:{
                tap: 'abrirMenu'
            }
        },
        launch: function() {

        },

        abrirMenu:function(){
            Ext.Viewport.hideMenu('left');
            this.getMainView().avancar(1);
        }
    }
});
