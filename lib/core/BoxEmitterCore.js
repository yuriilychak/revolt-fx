"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseEmitterCore_1 = require("./BaseEmitterCore");
var Rnd_1 = require("../util/Rnd");
var BoxEmitterCore = /** @class */ (function (_super) {
    __extends(BoxEmitterCore, _super);
    function BoxEmitterCore(emitter) {
        return _super.call(this, emitter) || this;
    }
    // *********************************************************************************************
    // * Public																					   *
    // *********************************************************************************************
    BoxEmitterCore.prototype.emit = function (particle) {
        var settings = this._settings;
        var emitter = this.emitter;
        var w2 = settings.width * 0.5;
        var h2 = settings.height * 0.5;
        var angle = emitter.rotation;
        var x = Rnd_1.Rnd.float(-w2, w2);
        var y = Rnd_1.Rnd.float(-h2, h2);
        if (angle != 0) {
            particle.component.x = this.x + x * Math.cos(angle) - y * Math.sin(angle);
            particle.component.y = this.y + x * Math.sin(angle) + y * Math.cos(angle);
        }
        else {
            particle.component.x = this.x + x;
            particle.component.y = this.y + y;
        }
        if (settings.radial) {
            angle += Math.atan2(y, x);
            particle.dx = Math.cos(angle);
            particle.dy = Math.sin(angle);
        }
        else {
            particle.dx = this._dx;
            particle.dy = this._dy;
        }
        particle.component.rotation = angle;
    };
    return BoxEmitterCore;
}(BaseEmitterCore_1.BaseEmitterCore));
exports.BoxEmitterCore = BoxEmitterCore;