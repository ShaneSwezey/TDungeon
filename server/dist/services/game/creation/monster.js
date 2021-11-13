"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monsterFactory = void 0;
var orc_1 = require("../monster/orc");
var goblin_1 = require("../monster/goblin");
//import { orge } from '../monster/ogre';
var monster_1 = require("../monster");
var monsterFactory = function (monsterStats) {
    switch (monsterStats.type) {
        case monster_1.MonsterType.Orc:
            return orc_1.orc(monsterStats);
        case monster_1.MonsterType.Goblin:
            return goblin_1.goblin(monsterStats);
        // case MonsterType.Ogre:
        //     return orge();
        default:
            throw new Error("Monster type " + monsterStats.type + " was not found!");
    }
};
exports.monsterFactory = monsterFactory;
