/**
 * Created by domingos on 8/7/14.
 */
Ext.define('CandidatoOnline.controller.HomeController', {
    extend : 'Ext.app.Controller',

    config:{
        refs:{
            mainView: "#mainView",
            btEntrar: "#btEntrar"
        },
        control:{
            btEntrar:{
                tap: 'abrirMenu'
            }
        }
    },

    abrirMenu:function(){
        this.getMainView().avancar(1);
    }
});