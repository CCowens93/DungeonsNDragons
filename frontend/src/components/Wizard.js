import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class Wizard extends Component{

    constructor(props){
    super(props);
    this.state = { wizard: [], isLoading: true};
    this.remove = this.remove.bind(this);
    }

    componentDidMount(){
        this.setState({isLoading: true});
        fetch('api/wizard')
            .then(response => response.json())
            .then(data => this.setState({wizard:data,isLoading: false}));
    }
    async remove(id) {
        await fetch(`/api/wizard/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
          let updatedWizard = [...this.state.wizard].filter(i => i.id !== id);
          this.setState({wizard: updatedWizard});
        });
      }

      render() {
          const {wizard, isLoading} = this.state;

          if (isLoading) {
            return <p>Loading...</p>;
          }

          const wizardList = wizard.map(wizard => {
                const classAndLevel = `${wizard.classAndLevel}`;
                const race = `${wizard.race}`;
                const background = `${wizard.background}`;
                const alignment = `${wizard.alignment}`;
                const playerName = `${wizard.playerName}`;
                const experiencePoints =`${wizard.experiencePoints}`;
                const personalityTraits = `${wizard.personalityTraits}`;

            return <tr key={wizard.id}>

                  <td style={{whiteSpace: 'nowrap'}}>{wizard.name}</td>
                  <td>{classAndLevel}</td>
                  <td>{race}</td>
                  <td>{background}</td>
                  <td>{alignment}</td>
                  <td>{playerName}</td>
                  <td>{experiencePoints}</td>

                  <td>
                    <ButtonGroup>
                      <Button size="sm" color="primary" tag={Link} to={"/wizard/" + wizard.id}>Edit</Button>
                      <Button size="sm" color="danger" onClick={() => this.remove(wizard.id)}>Delete</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              });

              const wizardList2 = wizard.map(wizard => {
                    const personalityTraits = `${wizard.personalityTraits}`;

              return <tr key={wizard.id}>
                    <td>{personalityTraits}</td>
                    <td>
                    <ButtonGroup>
                      <Button size="sm" color="primary" tag={Link} to={"/wizard/" + wizard.id}>Edit</Button>
                      <Button size="sm" color="danger" onClick={() => this.remove(wizard.id)}>Delete</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              })

              return (
                    <div>
                      <AppNavbar/>
                      <Container fluid>
                        <div className="float-right">
                          <Button color="success" tag={Link} to="/wizard/new">Add Wizard</Button>
                        </div>
                        <h3>My Wizards</h3>
                        <Table className="mt-4">
                          <thead>
                          <tr>
                            <th width="10%">Name</th>
                            <th width="10%">Class and Level</th>
                            <th width="10%">Race</th>
                            <th width="10%">Background</th>
                            <th width="10%">Alignment</th>
                            <th width="10%">Player Name</th>
                            <th width="10%">Experience Points</th>
                            <th width="10%">Actions</th>
                          </tr>

                          </thead>
                          <tbody>
                          {wizardList}
                          </tbody>
                        </Table>

                        <Table className="mt-4">
                            <thead>
                                <tr>
                                    <th width="10%">Personality Traits</th>
                                    <th width="10%">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {wizardList2}
                            </tbody>
                        </Table>

                      </Container>



                    </div>
                  );
        }
}

export default Wizard;
