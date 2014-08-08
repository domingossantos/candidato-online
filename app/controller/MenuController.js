/**
 * Created by domingos on 8/8/14.
 */
Ext.define('CandidatoOnline.controller.MenuController', {
    extend : 'Ext.app.Controller',

    config:{
        refs:{
            mainView: "#mainView",
            btPesquisa: "#btPesquisa",
            btContas: "#btContas"
        },
        control:{
            btPesquisa:{
                tap: 'abrirPesquisa'
            },
            btContas:{
                tap: 'abrirContas'
            },
            btUtil:{
                tap: 'abrirUtil'
            }
        }
    },

    abrirPesquisa:function(){
        this.getMainView().avancar(2);
    },

    abrirContas:function(){
        this.getMainView().avancar(3);
    },

    abrirUtil:function(){
        this.getMainView().avancar(4);
    }
});