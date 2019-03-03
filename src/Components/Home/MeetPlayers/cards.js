import React, { Component } from 'react';
import Animate from 'react-move/Animate';
import { easePolyOut } from 'd3-ease';
import Otamendi from '../../../Resources/images/players/Otamendi.png';
import Morales from '../../../Resources/images/players/player_to_upload/KEEP/ederson_morales.png';
import DeBruyne from '../../../Resources/images/players/player_to_upload/MIDF/kevin_de_bruyne.png';
import Leroy from '../../../Resources/images/players/player_to_upload/MIDF/leroy_sane.png';

import PlayerCard from '../../UI/playerCard';

class HomeCards extends Component {
    state = { 
        cards: [
            {
                bottom: 90,
                left: 300,
                number:"19",
                name:"Sane",
                lastName:"Leroy",
                bck: Leroy
            },
            {
                bottom: 60,
                left: 200,
                number:"17",
                name:"Kevin",
                lastName:"De Bruyne",
                bck: DeBruyne
            },
            {
                bottom: 30,
                left: 100,
                number:"31",
                name:"Ederson",
                lastName:"Morales",
                bck: Morales
            },
            {
                bottom: 0,
                left: 0,
                number:"30",
                name:"Nicolas",
                lastName:"Otamendi",
                bck: Otamendi
            }
        ]
     }

     showAnimateCards = () => (
        this.state.cards.map((card, i) => (
            <Animate
                key={i}
                show={this.props.show}

                start = {{
                    left:0,
                    bottom:0
                }}
                
                enter = {{
                    left: [card.left],
                    bottom: [card.bottom],
                    timing: {duration: 1000, ease: easePolyOut}
                }}
            
            >
                {({left, bottom}) => {
                    return (
                        <div
                            style={{
                                position: 'absolute',
                                left,
                                bottom
                            }}>
                            <PlayerCard number={card.number} name={card.name} lastName={card.lastName} bck={card.bck}/>
                        </div>
                    )
                }}
            </Animate>
        ))
     )

    render() {
        return (
            <div>
                {this.showAnimateCards()}
            </div>
        );
    }
}

export default HomeCards;