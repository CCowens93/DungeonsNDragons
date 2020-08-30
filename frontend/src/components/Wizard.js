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


            return <tr className="wiz" key={wizard.id}>
            <br></br>
            <div className="wizzz">
                  <th width="150px" height="100px">Name</th>
                  <td width="150px" height="100px" style={{whiteSpace: 'wrap'}}><Link to={"/wizard/" + wizard.id}>{wizard.name}</Link></td>
            </div>
            <div className="wizzz">
                  <th width="150px" height="100px">Class and Level</th>
                  <td width="150px" height="100px">{classAndLevel}</td>
            </div>
            <div className="wizzz">
                  <th width="150px" height="100px">Race</th>
                  <td width="150px" height="100px">{race}</td>
            </div>
            <div className="wizzz">
                  <th width="150px" height="100px">Background</th>
                  <td width="150px" height="100px">{background}</td>
            </div>
            <div className="wizzz">
                  <th width="150px" height="100px">Alignment</th>
                  <td width="150px" height="100px">{alignment}</td>
            </div>
            <div className="wizzz">
                  <th width="150px" height="100px">Player Name</th>
                  <td width="150px" height="100px">{playerName}</td>
            </div>
            <div className="wizzz">
                  <th width="150px" height="100px">Experience Points</th>
                  <td width="150px" height="100px">{experiencePoints}</td>
            </div>

            <div className="wizzz">
                  <th width="100px" height="100px">Action</th>
                  <td width="100px" height="100px">
                     <ButtonGroup>
                         <Button size="sm" color="danger" onClick={() => this.remove(wizard.id)}>Delete</Button>
                     </ButtonGroup>
                  </td>
                  <br></br>
            </div>
                </tr>

              });



              return (
                    <div>
                      <AppNavbar/>
                      <Container fluid>
                        <div>
                          <Button color="success" tag={Link} to="/wizard/new">Add Wizard</Button>
                        </div>
                        <h3>Wizard Characters</h3>
                        <div className="wiz">
                        <Table className="wiz">
                          <thead>
                          <tr className="wiz">
                          </tr>
                          </thead>
                          <tbody>
                          {wizardList}
                          </tbody>
                        </Table>
                        </div>
                      </Container>
                    </div>
                  );
        }
}

export default Wizard;
