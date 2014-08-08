/**
 * Created by domingos on 8/8/14.
 */
Ext.define('CandidatoOnline.controller.ContaController', {
    extend : 'Ext.app.Controller',

    config:{
        refs:{
            mainView: "#mainView",
            btVoltarConta: "#btVoltarConta"
        },
        control:{
            btVoltarConta:{
                tap: 'voltarConta'
            }
        }
    },

    voltarConta:function(){
        this.getMainView().voltar(2);
    }
});