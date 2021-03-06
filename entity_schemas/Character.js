//ENTITY-SCHEMA
import * as Entity from "/res/dnd/entity.js?ver=ent-4";

export default class Character extends Entity.Entity {
    /* Method Overrides */
    //init()                  {}
    //on_viewer_open()        {}
    //on_map_select()         {}
    //on_map_drop(e)          {} // e: source_map, target_map
    //on_change_attribute(e)  {} // e: attr, old_value, new_value
}

/* Property Overrides */
Character.prototype.attributes = {
    "hp": Entity.ATTR_NUMBER,
    "hp max": Entity.ATTR_NUMBER,
    "heat capacity": Entity.ATTR_NUMBER,
    "armor": Entity.ATTR_NUMBER,
    "melee bonus": Entity.ATTR_NUMBER,
    "name": Entity.ATTR_STRING,
    "pronoun": Entity.ATTR_STRING,
    "equipped ranged": [Entity.ATTR_ENTITY, "Weapon"],
    "equipped melee": [Entity.ATTR_ENTITY, "Weapon"],
    "weapons": [Entity.ATTR_ENTITY|Entity.ATTR_ARRAY, "Weapon"],
    "equipment": [Entity.ATTR_ENTITY|Entity.ATTR_ARRAY, "Equipment"]
};

Character.prototype.layout = [
    {
        type: "row section",
        children: [
            {type: "text attribute", name: "Name", key: "name"},
            {type: "text attribute", name: "Pronoun", key: "pronoun"}
        ]
    },
    {
        type: "column section",
        title: "Equipped Ranged",
        children: [
            {type: "entity attribute", key: "equipped ranged", schema: "Weapon"}
        ]
    },
    {
        type: "column section",
        title: "Equipped Melee",
        children: [
            {type: "entity attribute", key: "equipped melee", schema: "Weapon"}
        ]
    },
    {
        type: "column section",
        title: "Weapons",
        children: [
            {type: "entity array attribute", key: "weapons", schema: "Weapon"}
        ]
    },
    {
        type: "column section",
        title: "Equipment",
        children: [
            {type: "entity array attribute", key: "equipment", schema: "Equipment"}
        ]
    }
];
