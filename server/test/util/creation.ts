import { heroFactory } from "../../services/game/creation/hero";
import { Hero, HeroType } from "../../services/game/hero";
import { getRandomInt } from "../../services/game/utils/math";
import { name } from 'faker';
import { Monster, MonsterType } from "../../services/game/monster";
import { monsterFactory } from "../../services/game/creation/monster";


const getRandomType = <T>(types: T[]) => {
    const ceiling = types.length;
    const rand = getRandomInt(1, ceiling);
    return types[rand - 1];
}

export const createHeroes = (floor: number, ceiling: number) => {
    const numOfHeroes = getRandomInt(floor, ceiling);
    const heroes: Hero[] = [];
    const heroTypes = Object.values(HeroType);
    for (let i = 0; i < numOfHeroes; i++) {
        const heroType = getRandomType(heroTypes);
        const hero = heroFactory({ name: name.firstName(), type: heroType });
        heroes.push(hero);
    }
    return heroes;
}

export const createMonsters = (floor: number, ceiling: number) => {
    const numOfMonsters = getRandomInt(floor, ceiling);
    const monsters: Monster[] = [];
    const monsterTypes = Object.values(MonsterType);
    for (let i = 0; i < numOfMonsters; i++) {
        const monsterType = getRandomType(monsterTypes);
        const monster = monsterFactory({ type: monsterType });
        monsters.push(monster);
    }
    return monsters;
}