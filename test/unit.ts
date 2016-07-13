import frameListener from '../lib/frameRateListener'


frameListener.listenFPS((time, fps) => {
    console.log(time, fps)
})

frameListener.start()