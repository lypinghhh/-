function EventEmitter(){
    this._maxListeners = 10;
    this._events = Object.create(null);
}

//像事件队列添加事件

EventEmitter