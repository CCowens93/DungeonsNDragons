import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Table, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class WizardEdit extends Component {

  emptyItem = {
    name: '',
    classAndLevel: '',
    race: '',
    background: '',
    alignment: '',
    playerName: '',
    experiencePoints:'',
    age:'',
    eyes:'',
    height:'',
    skin:'',
    weight:'',
    hair:'',
    personalityTraits:'',
    ideals:'',
    bonds:'',
    flaws:'',
    featuresAndTraits:'',
    additionalFeaturesAndTraits:'',
    treasure:'',
    characterAppearance:'',
    characterBackstory:'',
    alliesAndOrganizations:'',
    cantripList:[]
    };

constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  async componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      const wizard = await (await fetch(`/api/wizard/${this.props.match.params.id}`)).json();
      this.setState({item: wizard});
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }

async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    await fetch('/api/wizard/{id}', {
      method: (item.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/wizard');
  }

render() {
    const {item} = this.state;
    const title = <h2>{item.id ? `Update ${item.name}` : 'Add Wizard'}</h2>;

    let wizardLevel = 1
    let proficiencyBonus = 2
    let features = ["Spell Casting", " Arcane Recovery"]
    let cantripsKnown = 3
    let firstSpellSlot = 2
    let secondSpellSlot = 0
    let thirdSpellSlot = 0
    let fourthSpellSlot = 0
    let fifthSpellSlot = 0
    let sixthSpellSlot = 0
    let seventhSpellSlot = 0
    let eightSpellSlot = 0
    let ninthSpellSlot = 0

    if(item.experiencePoints >= 300){
        firstSpellSlot = firstSpellSlot + 1
        wizardLevel = wizardLevel + 1
        features = "Arcane Tradition"
    }

    if(item.experiencePoints >=900){
        firstSpellSlot = firstSpellSlot + 1
        secondSpellSlot = seventhSpellSlot + 2
        wizardLevel = wizardLevel + 1
    }

    if(item.experiencePoints >=2700){
        cantripsKnown = cantripsKnown + 1
        secondSpellSlot = secondSpellSlot + 1
        wizardLevel = wizardLevel + 1
        features = "Ability Score Improvement"
    }

    if(item.experiencePoints >=6500){
        proficiencyBonus = proficiencyBonus + 1
        thirdSpellSlot = thirdSpellSlot + 2
        wizardLevel = wizardLevel + 1
    }

    if(item.experiencePoints >=14000){
        thirdSpellSlot = thirdSpellSlot + 1
        wizardLevel = wizardLevel + 1
        features = "Arcane Tradition Features"
    }

    if(item.experiencePoints >=23000){
        fourthSpellSlot = fourthSpellSlot + 1
        wizardLevel = wizardLevel + 1
    }

    if(item.experiencePoints >= 34000){
        fourthSpellSlot = fourthSpellSlot + 1
        wizardLevel = wizardLevel + 1
        features = "Ability Score Improvement"
    }

    if(item.experiencePoints >= 48000){
        proficiencyBonus = proficiencyBonus + 1
        fourthSpellSlot = fourthSpellSlot + 1
        fifthSpellSlot = fifthSpellSlot + 1
        wizardLevel = wizardLevel + 1
    }

    if(item.experiencePoints >= 64000){
        cantripsKnown = cantripsKnown + 1
        fifthSpellSlot = fifthSpellSlot + 1
        wizardLevel = wizardLevel + 1
        features = "Arcane Tradition Features"
    }

    if(item.experiencePoints >= 85000){
        sixthSpellSlot = sixthSpellSlot + 1
        wizardLevel = wizardLevel + 1
    }

    if(item.experiencePoints >= 100000){
        features = "Ability Score Improvement"
    }

    if(item.experiencePoints >= 120000){
        proficiencyBonus = proficiencyBonus + 1
        seventhSpellSlot = seventhSpellSlot + 1
        wizardLevel = wizardLevel + 1
    }

    if(item.experiencePoints >= 140000){
        features = "Arcane Tradition Feature"

    }

    if(item.experiencePoints >= 165000){
        eightSpellSlot = eightSpellSlot + 1
        wizardLevel = wizardLevel + 1
    }

    if(item.experiencePoints >= 195000){
        features = "Ability Score Improvement"
    }

    if(item.experiencePoints >= 225000){
        proficiencyBonus = proficiencyBonus + 1
        ninthSpellSlot = ninthSpellSlot + 1
        wizardLevel = wizardLevel + 1
    }

    if(item.experiencePoints >= 265000){
        features = "Spell Mastery"
    }

    if(item.experiencePoints >= 305000){
        sixthSpellSlot = sixthSpellSlot + 1
        wizardLevel = wizardLevel + 1
        features = "Ability Score Improvement"
    }

    if(item.experiencePoints >= 355000){
        seventhSpellSlot = seventhSpellSlot + 1
        wizardLevel = wizardLevel + 1
        features = "Signature Spells"
    }

    return <div>
      <AppNavbar/>
      <a href="#cantripLink">Spells</a>
      <Container>
        {title}

        <Form onSubmit={this.handleSubmit}>
           <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" value={item.name || ''}
                   onChange={this.handleChange}/>
            </FormGroup>
            <div className="row">
           <FormGroup className="col-md-4 mb-3">
            <Label for="classAndLevel">Class & Level</Label>
            <Input type="text" name="classAndLevel" id="classAndLevel" value={item.classAndLevel || ''}
                   onChange={this.handleChange}/>
          </FormGroup>

          <FormGroup className="col-md-4 mb-3">
            <Label for="race">Race</Label>
            <Input type="text" name="race" id="race" value={item.race || ''}
                   onChange={this.handleChange}/>
          </FormGroup>

            <FormGroup className="col-md-4 mb-3">
              <Label for="background">Background</Label>
              <Input type="text" name="background" id="background" value={item.background || ''}
                     onChange={this.handleChange} />
            </FormGroup>

            <FormGroup className="col-md-4 mb-3">
              <Label for="alignment">Alignment</Label>
              <Input
                type="select"
                value={item.alignment || ''}
                name="alignment" id="alignment"
                onChange={this.handleChange}>
                    <option value="" disabled hidden>Select One</option>
                    <option value="Lawful Good">Lawful Good</option>
                    <option value="Neutral Good">Neutral Good</option>
                    <option value="Chaotic Good">Chaotic Good</option>
                    <option value="Lawful Neutral">Lawful Neutral</option>
                    <option value="True Neutral">True Neutral</option>
                    <option value="Chaotic Neutral">Chaotic Neutral</option>
                    <option value="Lawful Evil">Lawful Evil</option>
                    <option value="Neutral Evil">Neutral Evil</option>
                    <option value="Chaotic Evil">Chaotic Evil</option>
              </Input>
            </FormGroup>

            <FormGroup className="col-md-4 mb-3">
              <Label for="playerName">Player Name</Label>
              <Input type="text" name="playerName" id="playerName" value={item.playerName || ''}
                     onChange={this.handleChange} />
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
              <Label for="experiencePoints">Experience Points</Label>
              <Input type="number" name="experiencePoints" id="experiencePoints" value={item.experiencePoints || ''}
                     onChange={this.handleChange} />
            </FormGroup>

          </div>
          <div className="row">
            <FormGroup className="col-md-4 mb-3">
                <Label for="age">Age</Label>
                <Input type="text" name="age" id="age" value={item.age || ''}
                    onChange={this.handleChange} />
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
                <Label for="eyes">Eyes</Label>
                <Input type="text" name="eyes" id="eyes" value={item.eyes || ''}
                    onChange={this.handleChange} />
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
                <Label for="height">Height</Label>
                <Input type="text" name="height" id="height" value={item.height || ''}
                    onChange={this.handleChange} />
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
                <Label for="skin">Skin</Label>
                <Input type="text" name="skin" id="skin" value={item.skin || ''}
                    onChange={this.handleChange} />
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
                <Label for="weight">Weight</Label>
                <Input type="text" name="weight" id="weight" value={item.weight || ''}
                    onChange={this.handleChange} />
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
                <Label for="hair">Hair</Label>
                <Input type="text" name="hair" id="hair" value={item.hair || ''}
                    onChange={this.handleChange} />
            </FormGroup>
          </div>
            <FormGroup>
              <Label for="personalityTraits">Personality Traits</Label>
              <Input type="text" name="personalityTraits" id="personalityTraits" value={item.personalityTraits ||''}
                     onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="ideals">Ideals</Label>
              <Input type="text" name="ideals" id="ideals" value={item.ideals ||''}
                     onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
               <Label for="bonds">Bonds</Label>
               <Input type="text" name="bonds" id="personalityTraits" value={item.bonds ||''}
                      onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="flaws">Flaws</Label>
              <Input type="text" name="flaws" id="flaws" value={item.flaws ||''}
                        onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="featuresAndTraits">Features & Traits</Label>
                <Input type="text" name="featuresAndTraits" id="featuresAndTraits" value={item.featuresAndTraits || ''}
                        onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="additionalFeaturesAndTraits">Additional Features & Traits</Label>
                <Input type="text" name="additionalFeaturesAndTraits" id="additionalFeaturesAndTraits" value={item.additionalFeaturesAndTraits || ''}
                        onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="treasure">Treasure</Label>
                <Input type="text" name="treasure" id="treasure" value={item.treasure || ''}
                        onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="characterAppearances">Character Appearances</Label>
                <Input type="text" name="characterAppearances" id="characterAppearances" value={item.characterAppearances || ''}
                        onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="characterBackstory">Character Backstory</Label>
                <Input type="text" name="characterBackstory" id="characterBackstory" value={item.characterBackstory || ''}
                        onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="alliesAndOrganizations"> Allies & Organizations</Label>
                <Input type="text" name="alliesAndOrganizations" id="alliesAndOrganizations" value={item.alliesAndOrganizations || ''}
                        onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/wizard">Cancel</Button>
          </FormGroup>
        </Form>

        <p><Link to="/wizard-cantrips/" id="cantripLink">Cantrips</Link></p>
        <p><Link to="/wizard-level1-spells/">Level 1 Spells</Link></p>

        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label>Experience Points</Label>
                <input
                    name="experiencePoints"
                    id="experiencePoints"
                    type="number"
                    placeholder="experience"
                    value={item.experiencePoints}
                    onChange={this.handleChange}
               />
            </FormGroup>
            <FormGroup>
                <Button color="primary" type="submit">Save</Button>{' '}
            </FormGroup>
        </Form>

        <Table>
            <thead>

                <tr>
                    <th>Level</th>
                    <th>Proficiency Bonus</th>
                    <th>Features</th>
                    <th>Cantrips Known</th>
                    <th>Spell Slots per Spell Level
                        <th>1st</th>
                        <th>2nd</th>
                        <th>3rd</th>
                        <th>4th</th>
                        <th>5th</th>
                        <th>6th</th>
                        <th>7th</th>
                        <th>8th</th>
                        <th>9th</th>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{wizardLevel}</td>
                    <td>+{proficiencyBonus}</td>
                    <td>{features}</td>
                    <td>{cantripsKnown}</td>
                    <td>
                        <td width="13%">{firstSpellSlot}</td>
                        <td width="13%">{secondSpellSlot}</td>
                        <td width="13%">{thirdSpellSlot}</td>
                        <td width="13%">{fourthSpellSlot}</td>
                        <td width="13%">{fifthSpellSlot}</td>
                        <td width="13%">{sixthSpellSlot}</td>
                        <td width="13%">{seventhSpellSlot}</td>
                        <td width="13%">{eightSpellSlot}</td>
                        <td width="13%">{ninthSpellSlot}</td>
                    </td>
                </tr>
            </tbody>
        </Table>


        <Table>
            <thead>
                <tr>
                    <th>Strength</th>
                    <th>Dexterity</th>
                    <th>Constitution</th>
                    <th>Intelligence</th>
                    <th>Wisdom</th>
                    <th>Charisma</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </Table>

      </Container>
    </div>
  }
}

export default withRouter(WizardEdit);