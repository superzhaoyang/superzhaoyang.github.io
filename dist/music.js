const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	  {
        name: "Silver scrapes",
        artist: '不写了',
        url: '/Silver scrapes.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      },
      {
        name: "太空",
        artist: '吴青峰',
        url: '/太空.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      },
      {
        name: 'May i see you again',
        artist: 'MT1990',
        url: '/MISUA.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      },
	  {
        name: '蜂鸟',
        artist: '吴青峰',
        url: '/蜂鸟.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      },
	  {
        name: '亚索',
        artist: '知不道',
        url: '/亚索.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});