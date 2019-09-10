const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "蜂鸟",
        artist: '吴青峰',
        url: 'http://www.ytmp3.cn/down/60648.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/84.jpg',
      }
    ]
});