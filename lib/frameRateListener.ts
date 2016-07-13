class FrameRateListener {
    private _listenFPSCallbacks = []
    private _lastTime
    private _fps
    private _isEnd              = true
    private _recordBind         = this._record.bind(this)


    private _record() {
        if (this._isEnd) return

        let now = Date.now()
        if (now - this._lastTime >= 1000) {
            this._triggerFPSCallbacks()
            this._fps      = 1
            this._lastTime = this._getTimeMarkPoint(now)
        } else {
            this._fps += 1
        }
        requestAnimationFrame(this._recordBind)
    }

    private _getTimeMarkPoint(time) {
        return time - time % 1000
    }

    private _triggerFPSCallbacks() {
        this._listenFPSCallbacks.forEach(callback => {
            callback(this._lastTime, this._fps)
        })
    }

    start() {
        this._isEnd    = false
        this._fps      = 0
        this._lastTime = this._getTimeMarkPoint(Date.now())
        requestAnimationFrame(this._recordBind)
    }

    stop() {
        this._isEnd = true
    }

    listenFPS(callback) {
        this._listenFPSCallbacks.push(callback)
    }
}


export default new FrameRateListener()