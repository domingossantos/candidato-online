/**
 * Created by domingos on 8/8/14.
 */
Ext.define('CandidatoOnline.controller.PesquisaController', {
    extend : 'Ext.app.Controller',

    config:{
        refs:{
            mainView: "#mainView",
            btVoltarPesquisa: "#btVoltarPesquisa"
        },
        control:{
            btVoltarPesquisa:{
                tap: 'voltarPesquisa'
            }
        }
    },

    voltarPesquisa:function(){
        this.getMainView().voltar(1);
    }

});