"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractShape_1 = __importDefault(require("./AbstractShape"));
class Hexagon extends AbstractShape_1.default {
    constructor(game, isAlpha = false, shiny = (Math.random() < 0.001) && !isAlpha) {
        super(game);
        this.nameData.values.name = isAlpha ? "Alpha Hexagon" : "Hexgon";
        this.healthData.values.health = this.healthData.values.maxHealth = (isAlpha ? 10000 : 500);
        this.physicsData.values.size = (isAlpha ? 300 : 100) * Math.SQRT1_2;
        this.physicsData.values.sides = 6;
        this.styleData.values.color = shiny ? 7 : 19;
        this.physicsData.values.absorbtionFactor = isAlpha ? 0.05 : 0.5;
        this.physicsData.values.pushFactor = 11;
        this.isAlpha = isAlpha;
        this.isShiny = shiny;
        this.damagePerTick = isAlpha ? 30 : 18;
        this.scoreReward = isAlpha ? 10000 : 500;
        if (shiny) {
            this.scoreReward *= 100;
            this.healthData.values.health = this.healthData.values.maxHealth *= 10;
        }
    }
}
exports.default = Hexagon;
Hexagon.BASE_ROTATION = AbstractShape_1.default.BASE_ROTATION / 2;
Hexagon.BASE_ORBIT = AbstractShape_1.default.BASE_ORBIT / 2;
Hexagon.BASE_VELOCITY = AbstractShape_1.default.BASE_VELOCITY / 2;
