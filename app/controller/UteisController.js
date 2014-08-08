/**
 * Created by domingos on 8/8/14.
 */
Ext.define('CandidatoOnline.controller.UteisController', {
    extend : 'Ext.app.Controller',

    config:{
        refs:{
            mainView: "#mainView",
            btVoltarUteis: "#btVoltarUteis"
        },
        control:{
            btVoltarUteis:{
                tap: 'voltarUteis'
            }
        }
    },

    voltarUteis:function(){
        this.getMainView().voltar(3);
    }
});