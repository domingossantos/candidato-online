/**
 * Created by domingos on 8/8/14.
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
Ext.define('CandidatoOnline.view.UteisView',{
    extend: 'Ext.Container',
    xtype: 'uteisView',
    id: 'uteisView',

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
                title: 'Candidato Online - Fones Uteis',
                items:[
                    {
                        id: 'btVoltarUteis',
                        xtype: 'button',
                        ui: 'back',
                        text: 'Voltar'
                    }
                ]
            }


        ]
    }


});