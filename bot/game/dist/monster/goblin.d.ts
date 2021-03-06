import { IGoblin, IMonsterStats } from '../interfaces/monster';
import { IAction } from "../interfaces/battleEvent";
export declare const goblin: ({ id, currentHitPoints }: IMonsterStats) => IGoblin;
export declare const executeGoblinAttack: (goblin: IGoblin) => IAction[][];
//# sourceMappingURL=goblin.d.ts.map