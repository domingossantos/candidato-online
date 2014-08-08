/**
 * Created by domingos on 8/8/14.
 */

Ext.define('CandidatoOnline.view.MainView', {
    extend      : 'Ext.Container',
    xtype       : 'mainView',
    fullscreen  : true,
    id          : 'mainView',

    requires : [
        'CandidatoOnline.view.HomeView',
        'CandidatoOnline.view.MenuView',
        'CandidatoOnline.view.PesquisaView',
        'CandidatoOnline.view.ContaView',
        'CandidatoOnline.view.UteisView'
    ],

    config: {

        height: '100%',

        layout: {
            type: 'card'
        },

        items : [
            { xtype : 'homeView' },
            { xtype : 'menuView' },
            { xtype : 'pesquisaView' },
            { xtype : 'contaView' },
            { xtype : 'uteisView' }
        ]
    },

    avancar : function(posicao) {
        if (typeof(posicao) === "undefined") {
            posicao = 1;
        }

        var selecionado = this.indexOf(this.getActiveItem());
        this.animateActiveItem((selecionado + posicao), {type : 'slide', direction : 'left'});
    },

    voltar : function(posicao) {
        if (typeof(posicao) === "undefined") {
            posicao = 1;
        }

        var selecionado = this.indexOf(this.getActiveItem());
        this.animateActiveItem((selecionado - posicao), {type : 'slide', direction : 'right'});
    }
});