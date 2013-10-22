Ext.application({
	
	paths: {
		//'Ims.common': 'resources/js/common',
		//'Imagine': 'resources/js/Imagine',
		'Ext.ux': 'resources/js/extjs-4.2.1/examples/ux'
	},

	
    name: 'Arise',    // 어플리케이션 명
    
    namespaces: ['Arise.app'],

    appFolder : 'resources/js/app', // 어플리케이션 폴더
    
    // 실행시 사용할 모든 컨트롤러를 명시한다.
    controllers: [
        'FrameController' // 어플리케이션이 사용할 컨트롤러
    ],
    
    uses: [
	       /*ant-generated-line*/
	],
    
    autoCreateViewport: true
});