Ext.application({
    name: 'arise',    // 어플리케이션 명
    
    appFolder : 'app', // 어플리케이션 폴더
    
    // 실행시 사용할 모든 컨트롤러를 명시한다.
    controllers: [
        'FrameController' // 어플리케이션이 사용할 컨트롤러
    ],
    
    autoCreateViewport: true
});