import React, { Component } from 'react'
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


class WizardLevel1Spells extends Component {

        wizardSpellLevel1 = [
            {
                name:'Alarm',
                type:'1st‐level abjuration (ritual)',
                castingTime:'1 minute',
                range:'30 feet',
                components:'V, S, M (a tiny bell and a piece of fine silver wire)',
                duration:'8 hours',
                effect:"You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping.An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.",
                damage:"None"
            },
              {
                name:'Burning Hands',
                type:'1st-level evocation',
                castingTime:'1 action',
                range:'Self (15-foot cone)',
                components:'V, S',
                duration:'Instantaneous',
                effect:"As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. The fire ignites any flammable objects in the area that aren't being worn or carried.",
                damage:"A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
            },
               {
                 name:'Charm Person',
                 type:'1st-level enchantment',
                 castingTime:'1 action',
                 range:'30 feet',
                 components:'V, S',
                 duration:'1 hour',
                 effect:"You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you. When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.",
                 damage:"None"
             },
                {
                 name:'Color Spray',
                 type:'1st-level illusion',
                 castingTime:'1 action',
                 range:'Self (15-foot cone)',
                 components:'V, S, M (a pinch of powder or sand that is colored red, yellow, and blue)',
                 duration:'1 round',
                 effect:"A dazzling array of flashing, colored light springs from your hand. Roll 6d10; the total is how many hit points of creatures this spell can effect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that can't see).Starting with the creature that has the lowest current hit points, each creature affected by this spell is blinded until the spell ends. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected. When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d10 for each slot level above 1st.",
                 damage:"None"
             },
                {
                  name:'Comprehend Languages',
                  type:'1st-level divination (ritual)',
                  castingTime:'1 action',
                  range:'Self',
                  components:'V, S, M (a pinch of soot and salt)',
                  duration:'1 hour',
                  effect:"For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text.This spell doesn't decode secret messages in a text or a glyph, such as an arcane sigil, that isn't part of a written language.",
                  damage:"None"
              },
                {
                  name:'Detect Magic',
                  type:'1st-level divination (ritual)',
                  castingTime:'1 action',
                  range:'Self',
                  components:'V, S',
                  duration:'Concentration, up to 10 minutes',
                  effect:"For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
                  damage:"None"
              },
                {
                   name:'Disguise Self',
                   type:'1st-level illusion',
                   castingTime:'1 action',
                   range:'Self',
                   components:'V, S',
                   duration:'1 hour',
                   effect:"You make yourself--including your clothing, armor, weapons, and other belongings on your person--look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC.",
                   damage:"None"
               },
                {
                  name:'Expeditious Retreat',
                  type:'1st-level transmutation',
                  castingTime:'1 bonus action',
                  range:'Self',
                  components:'V, S',
                  duration:'Concentration, up to 10 minutes',
                  effect:"This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action.",
                  damage:"None"
              },
                {
                  name:'False Life',
                  type:'1st-level necromancy',
                  castingTime:'1 action',
                  range:'Self',
                  components:'V, S, M (a small amount of alcohol or distilled spirits)',
                  duration:'1 hour',
                  effect:"You olster yourself with a necromantic facsimile of life.",
                  damage:"You gain 1d4 + 4 temporary hit points for the duration. When you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional temporary hit points for each slot level above 1st."
              },
                {
                  name:'Feather Fall',
                  type:'1st-level transmutation',
                  castingTime:'1 reaction, which you take when you or a creature within 60 feet of you falls',
                  range:'60 feet',
                  components:'V, M (a small feather or piece of down)',
                  duration:'1 minute',
                  effect:"Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.",
                  damage:"None"
              },
                {
                  name:'Find Familiar',
                  type:'1st-level conjuration (ritual)',
                  castingTime:'1 hour',
                  range:'10 feet',
                  components:'V, S, M (10 gp worth of charcoal, incense, and herbs that must be consumed by fire in a brass brazier)',
                  duration:'Instantaneous',
                  effect:"You gain the service of a familiar, a spirit that takes an animal form you choose: bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of a beast.Your familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can't attack, but it can take other actions as normal.When the familiar drops to 0 hit points, it disappears, leaving behind no physical form. It reappears after you cast this spell again.While your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through your familiar's eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are deaf and blind with regard to your own senses.As an action, you can temporarily dismiss your familiar. It disappears into a pocket dimension where it awaits your summons. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 30 feet of you.You can't have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Choose one of the forms from the above list. Your familiar transforms into the chosen creature.Finally, when you cast a spell with a range of touch, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your attack modifier for the roll.",
                  damage:"None"
              },
                {
                  name:'Floating Disk',
                  type:'1st-level conjuration (ritual)',
                  castingTime:'1 action',
                  range:'30 feet',
                  components:'V, S, M (a drop of mercury)',
                  duration:'1 hour',
                  effect:"This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the duration, and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground.The disk is immobile while you are within 20 feet of it. If you move more than 20 feet away from it, the disk follows you so that it remains within 20 feet of you. It can move across uneven terrain, up or down stairs, slopes and the like, but it can't cross an elevation change of 10 feet or more. For example, the disk can't move across a 10-foot-deep pit, nor could it leave such a pit if it was created at the bottom.If you move more than 100 feet from the disk (typically because it can't move around an obstacle to follow you), the spell ends.",
                  damage:"None"
              },
                {
                  name:'Fog Cloud',
                  type:'1st-level conjuration',
                  castingTime:'1 action',
                  range:'120 feet',
                  components:'V, S',
                  duration:'Concentration, up to 1 hour',
                  effect:"You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it. When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st.",
                  damage:"None"
              },
                {
                  name:'Grease',
                  type:'1st-level conjuration',
                  castingTime:'1 action',
                  range:'60 feet',
                  components:'V, S, M (a bit of pork rind or butter)',
                  duration:'1 minute',
                  effect:"Slick grease covers the ground in a 10-foot square centered on a point within range and turns it into difficult terrain for the duration.When the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or fall prone. A creature that enters the area or ends its turn there must also succeed on a Dexterity saving throw or fall prone.",
                  damage:"None"
              },
                {
                  name:'Hideous Laughter',
                  type:'1st-level enchantment',
                  castingTime:'1 action',
                  range:'30 feet',
                  components:'V, S, M (tiny tarts and a feather that is waved in the air)',
                  duration:'Concentration, up to 1 minute',
                  effect:"A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laughter if this spell affects it. The target must succeed on a Wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score of 4 or less isn't affected.At the end of each of its turns, and each time it takes damage, the target can make another Wisdom saving throw. The target has advantage on the saving throw if it's triggered by damage. On a success, the spell ends.",
                  damage:"None"
              },
{
                  name:'Identify',
                  type:'1st-level divination (ritual)',
                  castingTime:'1 minute',
                  range:'Touch',
                  components:'V, S, M (a pearl worth at least 100 gp and an owl feather)',
                  duration:'Instantaneous',
                  effect:"You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it.If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it.",
                  damage:"None"
              },
                {
                  name:'Illusory Script',
                  type:'1st-level illusion (ritual)',
                  castingTime:'1 minute',
                  range:'Touch',
                  components:'S, M (a lead-based ink worth at least 10 gp, which the spell consumes)',
                  duration:'10 days',
                  effect:"You write on parchment, paper, or some other suitable writing material and imbue it with a potent illusion that lasts for the duration.To you and any creatures you designate when you cast the spell, the writing appears normal, written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, you can cause the writing to appear to be an entirely different message, written in a different hand and language, though the language must be one you know.Should the spell be dispelled, the original script and the illusion both disappear.A creature with truesight can read the hidden message.",
                  damage:"None"
              },
   {
                  name:'Jump',
                  type:'1st-level transmutation',
                  castingTime:'1 action',
                  range:'Touch',
                  components:"V, S, M (a grasshopper's hind leg)",
                  duration:'1 minute',
                  effect:"You touch a creature. The creature's jump distance is tripled until the spell ends.",
                  damage:"None"
              },
    {
                   name:'Longstrider',
                   type:'1st-level transmutation',
                   castingTime:'1 action',
                   range:'Touch',
                   components:'V, S, M (a pinch of dirt)',
                   duration:'1 hour',
                   effect:"You touch a creature. The target's speed increases by 10 feet until the spell ends. When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
                   damage:"None"
               },
   {
                  name:'Mage Armor',
                  type:'1st-level abjuration',
                  castingTime:'1 action',
                  range:'Touch',
                  components:'V, S, M (a piece of cured leather)',
                  duration:'8 hours',
                  effect:"You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action.",
                  damage:"None"
              },
   {
                  name:'Magic Missile',
                  type:'1st-level evocation',
                  castingTime:'1 action',
                  range:'120 feet',
                  components:'V, S',
                  duration:'Instantaneous',
                  effect:"You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range.",
                  damage:"A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several. When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st."
              },
   {
                  name:'Protection from Evil and Good',
                  type:'1st-level abjuration',
                  castingTime:'1 action',
                  range:'Touch',
                  components:'V, S, M (holy water or powdered silver and iron, which the spell consumes)',
                  duration:'Concentration up to 10 minutes',
                  effect:"Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead.The protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also can't be charmed, frightened, or possessed by them. If the target is already charmed, frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect.",
                  damage:"None"
              },
   {
                  name:'Shield',
                  type:'1st-level abjuration',
                  castingTime:'1 reaction, which you take when you are hit by an attack or targeted by the magic missile spell',
                  range:'Self',
                  components:'V, S',
                  duration:'1 round',
                  effect:"An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile.",
                  damage:"None"
              },
    {
                   name:'Silent Image',
                   type:'1st-level illusion',
                   castingTime:'1 action',
                   range:'60 feet',
                   components:'V, S, M (a bit of fleece)',
                   duration:'Concentration, up to 10 minutes',
                   effect:"You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn't accompanied by sound, smell, or other sensory effects.You can use your action to cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking.Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image.",
                   damage:"None"
               },
   {
                  name:'Sleep',
                  type:'1st-level enchantment',
                  castingTime:'1 action',
                  range:'90 feet',
                  components:'V, S, M (a pinch of fine sand, rose petals, or a cricket)',
                  duration:'1 minute',
                  effect:"This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures).Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.Undead and creatures immune to being charmed aren't affected by this spell. When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st.",
                  damage:"None"
              },
   {
                  name:'Thunderwave',
                  type:'1st-level evocation',
                  castingTime:'1 action',
                  range:'Self (15-foot cube)',
                  components:'V, S',
                  duration:'Instantaneous',
                  effect:"A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw.",
                  damage:"On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed.In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
              },
   {
                  name:'Unseen Servant',
                  type:'1st-level conjuration (ritual)',
                  castingTime:'1 action',
                  range:'60 feet',
                  components:'V, S, M (a piece of string and a bit of wood)',
                  duration:'1 hour',
                  effect:"This spell creates an invisible, mindless, shapeless force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can't attack. If it drops to 0 hit points, the spell ends.Once on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring wine. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command.If you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends.",
                  damage:"None"
              }
        ]

    render(){



      const wizardSpellLevel1 = [
                {
                    id: 1,
                    name:'Alarm',
                    type:'1st‐level abjuration (ritual)',
                    castingTime:'1 minute',
                    range:'30 feet',
                    components:'V, S, M (a tiny bell and a piece of fine silver wire)',
                    duration:'8 hours',
                    effect:"You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping.An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.",
                    damage:"None"
                },
                  {
                    id: 2,
                    name:'Burning Hands',
                    type:'1st-level evocation',
                    castingTime:'1 action',
                    range:'Self (15-foot cone)',
                    components:'V, S',
                    duration:'Instantaneous',
                    effect:"As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. The fire ignites any flammable objects in the area that aren't being worn or carried.",
                    damage:"A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
                },
                   {
                     id: 3,
                     name:'Charm Person',
                     type:'1st-level enchantment',
                     castingTime:'1 action',
                     range:'30 feet',
                     components:'V, S',
                     duration:'1 hour',
                     effect:"You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you. When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.",
                     damage:"None"
                 },
                    {
                     id: 4,
                     name:'Color Spray',
                     type:'1st-level illusion',
                     castingTime:'1 action',
                     range:'Self (15-foot cone)',
                     components:'V, S, M (a pinch of powder or sand that is colored red, yellow, and blue)',
                     duration:'1 round',
                     effect:"A dazzling array of flashing, colored light springs from your hand. Roll 6d10; the total is how many hit points of creatures this spell can effect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that can't see).Starting with the creature that has the lowest current hit points, each creature affected by this spell is blinded until the spell ends. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected. When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d10 for each slot level above 1st.",
                     damage:"None"
                 },
                    {
                      id: 5,
                      name:'Comprehend Languages',
                      type:'1st-level divination (ritual)',
                      castingTime:'1 action',
                      range:'Self',
                      components:'V, S, M (a pinch of soot and salt)',
                      duration:'1 hour',
                      effect:"For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text.This spell doesn't decode secret messages in a text or a glyph, such as an arcane sigil, that isn't part of a written language.",
                      damage:"None"
                  },
                    {
                      id: 6,
                      name:'Detect Magic',
                      type:'1st-level divination (ritual)',
                      castingTime:'1 action',
                      range:'Self',
                      components:'V, S',
                      duration:'Concentration, up to 10 minutes',
                      effect:"For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
                      damage:"None"
                  },
                    {
                       id: 7,
                       name:'Disguise Self',
                       type:'1st-level illusion',
                       castingTime:'1 action',
                       range:'Self',
                       components:'V, S',
                       duration:'1 hour',
                       effect:"You make yourself--including your clothing, armor, weapons, and other belongings on your person--look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC.",
                       damage:"None"
                   },
                    {
                      id: 8,
                      name:'Expeditious Retreat',
                      type:'1st-level transmutation',
                      castingTime:'1 bonus action',
                      range:'Self',
                      components:'V, S',
                      duration:'Concentration, up to 10 minutes',
                      effect:"This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action.",
                      damage:"None"
                  },
                    {
                      id: 9,
                      name:'False Life',
                      type:'1st-level necromancy',
                      castingTime:'1 action',
                      range:'Self',
                      components:'V, S, M (a small amount of alcohol or distilled spirits)',
                      duration:'1 hour',
                      effect:"You olster yourself with a necromantic facsimile of life.",
                      damage:"You gain 1d4 + 4 temporary hit points for the duration. When you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional temporary hit points for each slot level above 1st."
                  },
                    {
                      id: 10,
                      name:'Feather Fall',
                      type:'1st-level transmutation',
                      castingTime:'1 reaction, which you take when you or a creature within 60 feet of you falls',
                      range:'60 feet',
                      components:'V, M (a small feather or piece of down)',
                      duration:'1 minute',
                      effect:"Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.",
                      damage:"None"
                  },
                    {
                      id: 11,
                      name:'Find Familiar',
                      type:'1st-level conjuration (ritual)',
                      castingTime:'1 hour',
                      range:'10 feet',
                      components:'V, S, M (10 gp worth of charcoal, incense, and herbs that must be consumed by fire in a brass brazier)',
                      duration:'Instantaneous',
                      effect:"You gain the service of a familiar, a spirit that takes an animal form you choose: bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of a beast.Your familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can't attack, but it can take other actions as normal.When the familiar drops to 0 hit points, it disappears, leaving behind no physical form. It reappears after you cast this spell again.While your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through your familiar's eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are deaf and blind with regard to your own senses.As an action, you can temporarily dismiss your familiar. It disappears into a pocket dimension where it awaits your summons. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 30 feet of you.You can't have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Choose one of the forms from the above list. Your familiar transforms into the chosen creature.Finally, when you cast a spell with a range of touch, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your attack modifier for the roll.",
                      damage:"None"
                  },
                    {
                      id: 12,
                      name:'Floating Disk',
                      type:'1st-level conjuration (ritual)',
                      castingTime:'1 action',
                      range:'30 feet',
                      components:'V, S, M (a drop of mercury)',
                      duration:'1 hour',
                      effect:"This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the duration, and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground.The disk is immobile while you are within 20 feet of it. If you move more than 20 feet away from it, the disk follows you so that it remains within 20 feet of you. It can move across uneven terrain, up or down stairs, slopes and the like, but it can't cross an elevation change of 10 feet or more. For example, the disk can't move across a 10-foot-deep pit, nor could it leave such a pit if it was created at the bottom.If you move more than 100 feet from the disk (typically because it can't move around an obstacle to follow you), the spell ends.",
                      damage:"None"
                  },
                    {
                      id: 13,
                      name:'Fog Cloud',
                      type:'1st-level conjuration',
                      castingTime:'1 action',
                      range:'120 feet',
                      components:'V, S',
                      duration:'Concentration, up to 1 hour',
                      effect:"You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it. When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st.",
                      damage:"None"
                  },
                    {
                      id: 14,
                      name:'Grease',
                      type:'1st-level conjuration',
                      castingTime:'1 action',
                      range:'60 feet',
                      components:'V, S, M (a bit of pork rind or butter)',
                      duration:'1 minute',
                      effect:"Slick grease covers the ground in a 10-foot square centered on a point within range and turns it into difficult terrain for the duration.When the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or fall prone. A creature that enters the area or ends its turn there must also succeed on a Dexterity saving throw or fall prone.",
                      damage:"None"
                  },
                    {
                      id: 15,
                      name:'Hideous Laughter',
                      type:'1st-level enchantment',
                      castingTime:'1 action',
                      range:'30 feet',
                      components:'V, S, M (tiny tarts and a feather that is waved in the air)',
                      duration:'Concentration, up to 1 minute',
                      effect:"A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laughter if this spell affects it. The target must succeed on a Wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score of 4 or less isn't affected.At the end of each of its turns, and each time it takes damage, the target can make another Wisdom saving throw. The target has advantage on the saving throw if it's triggered by damage. On a success, the spell ends.",
                      damage:"None"
                  },
                    {
                      id: 16,
                      name:'Identify',
                      type:'1st-level divination (ritual)',
                      castingTime:'1 minute',
                      range:'Touch',
                      components:'V, S, M (a pearl worth at least 100 gp and an owl feather)',
                      duration:'Instantaneous',
                      effect:"You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it.If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it.",
                      damage:"None"
                  },
                    {
                      id: 17,
                      name:'Illusory Script',
                      type:'1st-level illusion (ritual)',
                      castingTime:'1 minute',
                      range:'Touch',
                      components:'S, M (a lead-based ink worth at least 10 gp, which the spell consumes)',
                      duration:'10 days',
                      effect:"You write on parchment, paper, or some other suitable writing material and imbue it with a potent illusion that lasts for the duration.To you and any creatures you designate when you cast the spell, the writing appears normal, written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, you can cause the writing to appear to be an entirely different message, written in a different hand and language, though the language must be one you know.Should the spell be dispelled, the original script and the illusion both disappear.A creature with truesight can read the hidden message.",
                      damage:"None"
                  },
                    {
                      id: 18,
                      name:'Jump',
                      type:'1st-level transmutation',
                      castingTime:'1 action',
                      range:'Touch',
                      components:"V, S, M (a grasshopper's hind leg)",
                      duration:'1 minute',
                      effect:"You touch a creature. The creature's jump distance is tripled until the spell ends.",
                      damage:"None"
                  },
                    {
                       id: 19,
                       name:'Longstrider',
                       type:'1st-level transmutation',
                       castingTime:'1 action',
                       range:'Touch',
                       components:'V, S, M (a pinch of dirt)',
                       duration:'1 hour',
                       effect:"You touch a creature. The target's speed increases by 10 feet until the spell ends. When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
                       damage:"None"
                   },
                    {
                      id: 20,
                      name:'Mage Armor',
                      type:'1st-level abjuration',
                      castingTime:'1 action',
                      range:'Touch',
                      components:'V, S, M (a piece of cured leather)',
                      duration:'8 hours',
                      effect:"You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action.",
                      damage:"None"
                  },
                    {
                      id: 21,
                      name:'Magic Missile',
                      type:'1st-level evocation',
                      castingTime:'1 action',
                      range:'120 feet',
                      components:'V, S',
                      duration:'Instantaneous',
                      effect:"You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range.",
                      damage:"A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several. When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st."
                  },
                    {
                      id: 22,
                      name:'Protection from Evil and Good',
                      type:'1st-level abjuration',
                      castingTime:'1 action',
                      range:'Touch',
                      components:'V, S, M (holy water or powdered silver and iron, which the spell consumes)',
                      duration:'Concentration up to 10 minutes',
                      effect:"Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead.The protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also can't be charmed, frightened, or possessed by them. If the target is already charmed, frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect.",
                      damage:"None"
                  },
                    {
                      id: 23,
                      name:'Shield',
                      type:'1st-level abjuration',
                      castingTime:'1 reaction, which you take when you are hit by an attack or targeted by the magic missile spell',
                      range:'Self',
                      components:'V, S',
                      duration:'1 round',
                      effect:"An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile.",
                      damage:"None"
                  },
                    {
                       id: 24,
                       name:'Silent Image',
                       type:'1st-level illusion',
                       castingTime:'1 action',
                       range:'60 feet',
                       components:'V, S, M (a bit of fleece)',
                       duration:'Concentration, up to 10 minutes',
                       effect:"You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn't accompanied by sound, smell, or other sensory effects.You can use your action to cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking.Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image.",
                       damage:"None"
                   },
                    {
                      id: 25,
                      name:'Sleep',
                      type:'1st-level enchantment',
                      castingTime:'1 action',
                      range:'90 feet',
                      components:'V, S, M (a pinch of fine sand, rose petals, or a cricket)',
                      duration:'1 minute',
                      effect:"This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures).Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.Undead and creatures immune to being charmed aren't affected by this spell. When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st.",
                      damage:"None"
                  },
                    {
                      id: 26,
                      name:'Thunderwave',
                      type:'1st-level evocation',
                      castingTime:'1 action',
                      range:'Self (15-foot cube)',
                      components:'V, S',
                      duration:'Instantaneous',
                      effect:"A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw.",
                      damage:"On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed.In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
                  },
                    {
                      id: 27,
                      name:'Unseen Servant',
                      type:'1st-level conjuration (ritual)',
                      castingTime:'1 action',
                      range:'60 feet',
                      components:'V, S, M (a piece of string and a bit of wood)',
                      duration:'1 hour',
                      effect:"This spell creates an invisible, mindless, shapeless force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can't attack. If it drops to 0 hit points, the spell ends.Once on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring wine. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command.If you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends.",
                      damage:"None"
                  }
            ]


         const wizardSpellLevel1Table = this.wizardSpellLevel1.map((spell, i) => (
                     <tr key={i}>
                         <td name="cantripname" id="cantripname">{spell.name}</td>
                         <td>{spell.type}</td>
                         <td width={200}>{spell.castingTime}</td>
                         <td>{spell.range}</td>
                         <td>{spell.components}</td>
                         <td>{spell.duration}</td>
                         <td width={500}>{spell.effect}</td>
                         <td width={500}>{spell.damage}</td>
                     </tr>
                ))

        const dropDownList = this.wizardSpellLevel1.map((name, i) => (
                    <tr key={i}>
                        <td><a href="#cantripname">{name.name}</a></td>

                    </tr>
        ))

        return(

        <div>
         <AppNavbar/>

            <Dropdown
                options={dropDownList}
                textField="name"
                placeholder="Select a Spell"
            />

         <Container fluid>
         <Table>
             <thead>
                 <tr>
                     <th>Level 1 Spell</th>
                     <th>Type</th>
                     <th>Casting Time</th>
                     <th>Range</th>
                     <th>Components</th>
                     <th>Duration</th>
                     <th>Effect</th>
                     <th>Damage</th>
                 </tr>
             </thead>
             <tbody>
                 {wizardSpellLevel1Table}

             </tbody>
         </Table>
         </Container>

         </div>
        )
    }
}

export default WizardLevel1Spells