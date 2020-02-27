var KeySupport = function (callback) {
    var keySupport = {
        addEvent: function (obj, type, fn, ref_obj) {
            if (obj.addEventListener)
                obj.addEventListener(type, fn, false);
            else if (obj.attachEvent) {
                // IE
                obj["e" + type + fn] = fn;
                obj[type + fn] = function () {
                    obj["e" + type + fn](window.event, ref_obj);
                }
                obj.attachEvent("on" + type, obj[type + fn]);
            }
        },
        removeEvent: function (obj, eventName, eventCallback) {
            if (obj.removeEventListener) {
                obj.removeEventListener(eventName, eventCallback);
            } else if (obj.attachEvent) {
                obj.detachEvent(eventName);
            }
        },
        input: "",
        pattern: "38384040373937396665",
        keydownHandler: function (e, ref_obj) {
            if (ref_obj) {
                keySupport = ref_obj;
            } // IE
            keySupport.input += e ? e.keyCode : event.keyCode;
            if (keySupport.input.length > keySupport.pattern.length) {
                keySupport.input = keySupport.input.substr((keySupport.input.length - keySupport.pattern.length));
            }
            if (keySupport.input === keySupport.pattern) {
                keySupport.code(keySupport._currentLink);
                keySupport.input = '';
                e.preventDefault();
                return false;
            }
        },
        load: function (link) {
            this._currentLink = link;
            this.addEvent(document, "keydown", this.keydownHandler, this);
            this.iphone.load(link);
        },
        unload: function () {
            this.removeEvent(document, 'keydown', this.keydownHandler);
            this.iphone.unload();
        },
        code: function (link) {
            window.location = link
        },
        iphone: {
            start_x: 0,
            start_y: 0,
            stop_x: 0,
            stop_y: 0,
            tap: false,
            capture: false,
            orig_keys: "",
            keys: ["UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "TAP", "TAP"],
            input: [],
            code: function (link) {
                keySupport.code(link);
            },
            touchmoveHandler: function (e) {
                if (e.touches.length === 1 && keySupport.iphone.capture === true) {
                    var touch = e.touches[0];
                    keySupport.iphone.stop_x = touch.pageX;
                    keySupport.iphone.stop_y = touch.pageY;
                    keySupport.iphone.tap = false;
                    keySupport.iphone.capture = false;
                    keySupport.iphone.check_direction();
                }
            },
            touchendHandler: function () {
                keySupport.iphone.input.push(keySupport.iphone.check_direction());
                
                if (keySupport.iphone.input.length > keySupport.iphone.keys.length) keySupport.iphone.input.shift();
                
                if (keySupport.iphone.input.length === keySupport.iphone.keys.length) {
                    var match = true;
                    for (var i = 0; i < keySupport.iphone.keys.length; i++) {
                        if (keySupport.iphone.input[i] !== keySupport.iphone.keys[i]) {
                            match = false;
                        }
                    }
                    if (match) {
                        keySupport.iphone.code(keySupport._currentLink);
                    }
                }
            },
            touchstartHandler: function (e) {
                keySupport.iphone.start_x = e.changedTouches[0].pageX;
                keySupport.iphone.start_y = e.changedTouches[0].pageY;
                keySupport.iphone.tap = true;
                keySupport.iphone.capture = true;
            },
            load: function (link) {
                this.orig_keys = this.keys;
                keySupport.addEvent(document, "touchmove", this.touchmoveHandler);
                keySupport.addEvent(document, "touchend", this.touchendHandler, false);
                keySupport.addEvent(document, "touchstart", this.touchstartHandler);
            },
            unload: function () {
                keySupport.removeEvent(document, 'touchmove', this.touchmoveHandler);
                keySupport.removeEvent(document, 'touchend', this.touchendHandler);
                keySupport.removeEvent(document, 'touchstart', this.touchstartHandler);
            },
            check_direction: function () {
                x_magnitude = Math.abs(this.start_x - this.stop_x);
                y_magnitude = Math.abs(this.start_y - this.stop_y);
                x = ((this.start_x - this.stop_x) < 0) ? "RIGHT" : "LEFT";
                y = ((this.start_y - this.stop_y) < 0) ? "DOWN" : "UP";
                result = (x_magnitude > y_magnitude) ? x : y;
                result = (this.tap === true) ? "TAP" : result;
                return result;
            }
        }
    }
    typeof callback === "string" && keySupport.load(callback);
    if (typeof callback === "function") {
        keySupport.code = callback;
        keySupport.load();
    }
    return keySupport;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = KeySupport;
} else {
        if (typeof define === 'function' && define.amd) {
                define([], function() {
                        return KeySupport;
                });
        } else {
                window.KeySupport = KeySupport;
        }
}
