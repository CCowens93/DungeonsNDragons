import React, { Component } from 'react'
import { Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class WizardCantrip extends Component{


         cantrip = [
             {
                     _id:1,
                     name: 'Acid Splash',
                     type: 'Conjuration',
                     castingTime:'1 action',
                     range:'60 feet',
                     components: 'V,S',
                     duration: 'Instantaneous',
                     effect:'You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 damage.',
                     damage:"This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level(4d6)."
                   },
                   {
                     _id: 2,
                     name: 'Chill Touch',
                     type: 'Necromancy',
                     castingTime: '1 action',
                     range: '120 feet',
                     components: 'V, S',
                     duration: '1 round',
                     effect: "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. If you hit an undead target, it has disadvantage on attack rolls against you until the end of your next turn.",
                     damage: "On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target.This spell's damage increases by 1d8 when you reach 5th level (2db), 11th level (3d8), and 17th level (4d8)."
                   },
                   {
                     _id: 3,
                     name:'Dancing Lights',
                     type:'Evocation',
                     castingTime:'1 action',
                     range:'120 feet',
                     components:'V, S, M(a bit of phosphorus or wychwood, or a glowworm)',
                     duration:'Concentration, up to 1 minute',
                     effect:"You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius. As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range.",
                     damage:'None'
                   },
                   {
                      _id: 4,
                      name:'Fire Bolt',
                      type:'Evocation',
                      castingTime:'1 action',
                      range:'120 feet',
                      components:'V, S',
                      duration:'Instantaneous',
                      effect:"You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. A flammable object hit by this spell ignites if it isn't being worn or carried.",
                      damage:"On a hit, the target takes 1d10 fire damage. This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level(3d10), and 17th level (4d10)."
                    },
                    {
                      _id: 5,
                      name:'Light',
                      type:'Evocation',
                      castingTime:'1 action',
                      range:'Touch',
                      components:'V, M (a firefly or phosphorescent moss)',
                      duration:'1 hour',
                      effect:"You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action. If you target an object held or worn by hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.",
                      damage:"None"
                    },
                    {
                      _id: 7,
                      name:'Mending',
                      type:'Transmutation',
                      castingTime:'1 minute',
                      range:'Touch',
                      components:'V, S, M (two lodestones)',
                      duration:'Instantaneous',
                      effect:"This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage. This spell can physically repair a magic or construct, but the spell can't restore magic to such an object.",
                      damage:"None"
                    },
                    {
                       _id: 8,
                       name:'Message',
                       type:'Transmutation',
                       castingTime:'1 action',
                       range:'120 feet',
                       components:'V, S, M (a short piece of copper wire)',
                       duration:'1 round',
                       effect:"You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear. You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn't have to follow a straight line and can travel freely around corners or through openings.",
                       damage:"None"
                     },
                    {
                      _id: 9,
                      name:'Minor Illusion',
                      type:'Illusion',
                      castingTime:'1 action',
                      range:'30 feet',
                      components:'S, M (a bit of fleece)',
                      duration:'1 minute',
                      effect:"You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again. If you create a sound, its volume can range from a whisper to a scream. If can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends. If you create an image or an object--such as a chair, muddy footprints, or a small chest--it must be no larger than a 5-foot cuve. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it be an illusion, because things can pass through it. If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.",
                      damage:"None"
                    },
                    {
                      _id: 10,
                      name:'Poison Spray',
                      type:' Conjuration',
                      castingTime:'1 action',
                      range:'10 feet',
                      components:'V, S',
                      duration:'Instantaneous',
                      effect:"You extend your hand toward a creature you can see within range and project a puff of noxious gas from you palm.",
                      damage:"The creature must succeed on a Constitution saving throw or take 1d12 poison damage. This spell's damage increases by 1d12 when you reach 5th level (2d12), 11th level 3d12), and 17th level(4d12)."
                    },
                    {
                      _id: 11,
                      name:'Prestidigation',
                      type:'Transmutation',
                      castingTime:'1 action',
                      range:'10 feet',
                      components:'V ,S',
                      duration:'Up to 1 hour',
                      effect:"This spell is a minor magical trick that novice spell casters use for practice. If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action. You create one of the following magical effects within range: 1) Your create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor. 2) You instantaneously light or snuff out a candle, a torch, or a small campfire. 3) You instantaneously clean or soil an object no larger than 1 cubic foot. 4) You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour. 5) You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour. 6) You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn. ",
                      damage:"None"
                    },
                    {
                      _id: 12,
                      name:'Ray of Frost',
                      type:'Evocation',
                      castingTime:'1 action',
                      range:'60 feet',
                      components:'V, S',
                      duration:'Instantaneous',
                      effect:"A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target.",
                      damage:"On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn. The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
                    },
                    {
                      _id: 13,
                      name:'Shocking Grasp',
                      type:'Evocation',
                      castingTime:'1 action',
                      range:'Touch',
                      components:'V, S',
                      duration:'Instantaneous',
                      effect:"Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal.",
                      damage:"On a hit, the target takes 1d8 lightning damage, and it can't take reactions until the start of its next turn. The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
                    },
                    {
                      _id: 13,
                      name:'Shocking Grasp',
                      type:'Evocation',
                      castingTime:'1 action',
                      range:'Touch',
                      components:'V, S',
                      duration:'Instantaneous',
                      effect:"Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal.",
                      damage:"On a hit, the target takes 1d8 lightning damage, and it can't take reactions until the start of its next turn. The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
                    }


             ]


     render(){


     const wizardCantripTable = this.cantrip.map((spell, i) => (
                          <tr key={i}>
                              <td>{spell.name}</td>
                              <td>{spell.type}</td>
                              <td width={200}>{spell.castingTime}</td>
                              <td>{spell.range}</td>
                              <td>{spell.components}</td>
                              <td>{spell.duration}</td>
                              <td width={500}>{spell.effect}</td>
                              <td width={500}>{spell.damage}</td>
                          </tr>
                     ))


    return(
        <div>
        <AppNavbar/>

        <Dropdown
                placeholder="Select"
                options="hello"
        />

        <Container fluid>
        <Table bordered hover dark>
            <thead>
                <tr>
                    <th>Cantrip</th>
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
                    {wizardCantripTable}
            </tbody>
        </Table>
        </Container>

        </div>
        )

  }
}


export default WizardCantrip