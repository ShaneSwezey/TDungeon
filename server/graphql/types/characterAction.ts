import { createUnionType, Field, ObjectType } from "type-graphql";
import { HeroType } from "../../game/enums/hero";
import { IAction, ICharacterAction } from "../../game/interfaces/battleEvent";
import { BattleEventCharacter } from "../../game/types/character";
import { ActionGraphqlType } from "./action";
import { BattleEventHeroGraphqlType } from "./hero";
import { BattleEventMonsterGraphqlHeroType } from "./monster";

const CharacterUnion = createUnionType({
    name: "Character",
    types: () => [BattleEventHeroGraphqlType, BattleEventMonsterGraphqlHeroType] as const,
    resolveType: value => {
        if (
            value.type === HeroType.WARRIOR ||
            value.type === HeroType.RANGER ||
            value.type === HeroType.ROGUE || 
            value.type === HeroType.MAGE ||
            value.type === HeroType.SORCERER ||
            value.type === HeroType.PRIEST
        ) return BattleEventHeroGraphqlType;
        else return BattleEventMonsterGraphqlHeroType;
    }
});

@ObjectType("CharacterAction")
export class CharacterActionGraphqlType implements ICharacterAction {
    @Field(() => CharacterUnion, { nullable: true })
    character: BattleEventCharacter;
   
    @Field(() => ActionGraphqlType, { nullable: false })
    action: IAction;
}