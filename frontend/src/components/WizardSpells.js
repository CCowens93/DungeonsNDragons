import React, { Component } from 'react'
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { CsvToHtmlTable } from 'react-csv-to-table';

class WizardSpells extends Component{


    render(){


    const data =
    `Cantrip,Type,Casting Time,Range,Components,Duration,Effect,Damage
     Acid Splash,Conjuration,1 action,60 feet,V S,Instantaneous,You hurl a bubble of acid. Choose one creature within range or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 damage.,This spells damage increases by 1d6 when you reach 5th level (2d6) 11th level (3d6) and 17th level(4d6).`


        return(
        <div>
        <AppNavbar/>
        <CsvToHtmlTable
          data={data}
          csvDelimiter=","
          className="wizard-cantrip-table"
          tableClassName="table table-striped table-hover"
        />
        <Container fluid>
        <Table>
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
                <tr>
                    <td width="10%">Acid Splash</td>
                    <td width="10%">Conjuration</td>
                    <td width="5%">1 Action</td>
                    <td width="10%">60 Feet</td>
                    <td width="5%">V, S</td>
                    <td width="5%">Instantaneous</td>
                    <td width="30%">You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 damage.</td>
                    <td width="30%">This spells damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level(4d6).</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
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
        )

  }
}


export default WizardSpells