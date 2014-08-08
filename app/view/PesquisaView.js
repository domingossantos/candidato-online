/**
 * Created by domingos on 8/7/14.
 */
/**
 * Created by domingos on 8/8/14.
 */
/**
 * Created by domingos on 8/7/14.
 */
/**
 * Created by domingos on 8/7/14.
 */
Ext.define('CandidatoOnline.view.PesquisaView',{
    extend: 'Ext.Container',
    xtype: 'pesquisaView',
    id: 'pesquisaView',

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
                title: 'Candidato Online - Pesquisa',
                items:[
                    {
                        id: 'btVoltarPesquisa',
                        xtype: 'button',
                        ui: 'back',
                        text: 'Voltar'
                    }
                ]
            }
        ]
    }
});