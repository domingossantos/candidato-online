/**
 * Created by domingos on 8/7/14.
 */
/**
 * Created by domingos on 8/7/14.
 */
Ext.define('CandidatoOnline.view.MenuView',{
    extend: 'Ext.Container',
    xtype: 'menuView',
    id: 'menuView',

    requires: [
        'Ext.XTemplate'
    ],

    config:{
        layout: {
            type: 'vbox',
            align: 'center'
        },
        scrollable: 'vertical',
        items:[
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Candidato Online'
            },
            {
                id: 'btPesquisa',
                xtype: 'button',
                ui: 'confirm',
                width: '70%',
                text: 'Pesquisa'
            },
            {
                id: 'btContas',
                xtype: 'button',
                ui: 'confirm',
                width: '70%',
                text: 'Contas'
            },
            {
                id: 'btUtil',
                xtype: 'button',
                ui: 'confirm',
                width: '70%',
                text: 'Fones Uteis'
            }

        ]
    }


});