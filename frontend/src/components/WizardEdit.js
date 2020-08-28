import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class WizardEdit extends Component {

  emptyItem = {
    name: '',
    classAndLevel: '',
    race: '',
    background: '',
    alignment: '',
    playerName: '',
    experiencePoints:''
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

    await fetch('/api/wizard', {
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
    const title = <h2>{item.id ? 'Edit Wizard' : 'Add Wizard'}</h2>;

    return <div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
           <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" value={item.name || ''}
                   onChange={this.handleChange}/>
            </FormGroup>
           <FormGroup>
            <Label for="classAndLevel">Class & Level</Label>
            <Input type="text" name="classAndLevel" id="classAndLevel" value={item.classAndLevel || ''}
                   onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="race">Race</Label>
            <Input type="text" name="race" id="race" value={item.race || ''}
                   onChange={this.handleChange}/>
          </FormGroup>
          <div className="row">
            <FormGroup className="col-md-4 mb-3">
              <Label for="background">Background</Label>
              <Input type="text" name="background" id="background" value={item.background || ''}
                     onChange={this.handleChange} />
            </FormGroup>

            <FormGroup className="col-md-5 mb-3">
              <Label for="alignment">Alignment</Label>
              <Input
                type="select"
                value={item.alignment || ''}
                name="alignment" id="alignment"
                onChange={this.handleChange}>
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

            <FormGroup className="col-md-3 mb-3">
              <Label for="playerName">Player Name</Label>
              <Input type="text" name="playerName" id="playerName" value={item.playerName || ''}
                     onChange={this.handleChange} />
            </FormGroup>
            <FormGroup className="col-md-3 mb-3">
              <Label for="experiencePoints">Experience Points</Label>
              <Input type="number" name="experiencePoints" id="experiencePoints" value={item.experiencePoints || ''}
                     onChange={this.handleChange} />
            </FormGroup>
          </div>
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/wizard">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  }
}

export default withRouter(WizardEdit);