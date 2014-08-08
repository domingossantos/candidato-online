/**
 * Created by domingos on 8/7/14.
 */
Ext.define('CandidatoOnline.view.HomeView',{
    extend: 'Ext.Container',
    xtype: 'homeView',
    id: 'homeView',

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
                title: 'Candidato Online',
                items: [
                    {
                        xtype: 'button',
                        icon: 'true',
                        iconCls: 'settings',
                        text: '',
                        handler: function() {
                            Ext.Viewport.toggleMenu('left');
                        }
                    }
                ]
            },
            {
                id: 'formLogin',
                xtype: 'fieldset',
                width: '95%',
                items: [
                    {
                        xtype: 'emailfield',
                        itemId: 'dsEmail',
                        label: 'E-mail',
                        labelAlign: 'top',
                        placeHolder: 'email@exemplo.com.br',
                        required: true
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'vlSenha',
                        label: 'Senha',
                        labelAlign: 'top',
                        required: true
                    }
                ]
            },
            {
                id: 'btEntrar',
                xtype: 'button',
                ui: 'confirm',
                width: '95%',
                text: 'Entrar'
            }

        ]
    },

    doSetHidden : function(hidden) {
        this.callParent(arguments);

        if(hidden) {
            Ext.Viewport.removeMenu('left');
        } else {
            Ext.Viewport.setMenu(this.menuForSide('left'), {
                side: 'left',
                reveal: true
            });
        }
    },

    menuForSide : function(side) {
        var menus = [
            {
                id: 'btMeusDados',
                text: 'Meus Dados',
                scope: this,
                iconCls: 'user'
            },
            {
                id: 'btDesenv',
                text: 'Sobre o Aplicativo',
                scope: this,
                iconCls: 'info'
            },
            {
                id: 'btSair',
                text: 'Sair',
                scope: this,
                iconCls: 'info'
            }
        ];

        return Ext.create('Ext.Menu', { items : menus });
    }
});