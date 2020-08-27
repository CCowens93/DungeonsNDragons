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
                const character = `${wizard.name || ''} ${wizard.classAndLevel || ''} ${wizard.race || ''}`;
                return <tr key={wizard.id}>
                  <td style={{whiteSpace: 'nowrap'}}>{wizard.name}</td>
                  <td>{character}</td>
                  <td>{wizard.events.map(event => {
                    return <div key={event.id}>{new Intl.DateTimeFormat('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: '2-digit'
                    }).format(new Date(event.date))}: {event.title}</div>
                  })}</td>
                  <td>
                    <ButtonGroup>
                      <Button size="sm" color="primary" tag={Link} to={"/wizard/" + wizard.id}>Edit</Button>
                      <Button size="sm" color="danger" onClick={() => this.remove(wizard.id)}>Delete</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              });

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
                            <th width="20%">Name</th>
                            <th width="20%">Class and Level</th>
                            <th>Race</th>
                            <th width="10%">Actions</th>
                          </tr>
                          </thead>
                          <tbody>
                          {wizardList}
                          </tbody>
                        </Table>
                      </Container>
                    </div>
                  );
        }
}

export default Wizard;
