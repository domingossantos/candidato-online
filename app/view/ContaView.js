/**
 * Created by domingos on 8/8/14.
 */
/**
 * Created by domingos on 8/7/14.
 */
/**
 * Created by domingos on 8/7/14.
 */
Ext.define('CandidatoOnline.view.ContaView',{
    extend: 'Ext.Container',
    xtype: 'contaView',
    id: 'contaView',

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
                title: 'Candidato Online - Conta',
                items:[
                    {
                        id: 'btVoltarConta',
                        xtype: 'button',
                        ui: 'back',
                        text: 'Voltar'
                    }
                ]

            }


        ]
    }


});