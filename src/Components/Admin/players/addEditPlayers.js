import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';

import FormField from '../../UI/FormFields';
import { validate } from '../../UI/misc';

import { firebase, firebasePlayers, firebaseDB } from '../../../firebase';


class AddEditPlayers extends Component {
    state = { 
        playerId:'',
        formType:'',
        formError: false,
        formSuccess:'',
        defaultImg: '',
        formData: {
            name: {
                element: 'input',
                value: '',
                config: {
                    label: 'Player Name',
                    name: 'name_input',
                    type: 'text'
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            },

            lastname: {
                element: 'input',
                value: '',
                config: {
                    label: 'Player Last Name',
                    name: 'lastname_input',
                    type: 'text'
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            },

            number: {
                element: 'input',
                value: '',
                config: {
                    label: 'Player Number',
                    name: 'number_input',
                    type: 'text'
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            },

            position: {
                element: 'select',
                value: '',
                config: {
                    label: 'Select a position',
                    name: 'select_position',
                    type: 'select',
                    options: [
                        {key:"Keeper", value:"Keeper"},
                        {key:"Defence", value:"Defence"},
                        {key:"Midfield", value:"Midfield"},
                        {key:"Striker", value:"Striker"}
                    ]
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            }

        }
     }

     componentDidMount() {
         const playerId = this.props.match.params.id;

         if(!playerId){
             this.setState({
                 formType: "Add Player"
             })
         } else {
             //edit player
             this.setState({
                formType: "Edit Player"
            })
         }
     }

     updateForm (element) {
        const newFormData = {...this.state.formData}
        const newElement = {...newFormData[element.id]}
        
        newElement.value = element.event.target.value;

        let validData = validate(newElement) 
        newElement.valid = validData[0]
        newElement.validationMessage = validData[1]

        newFormData[element.id] = newElement;

        this.setState({
            formError: false,
            formData : newFormData
        });
     }


     submitForm(event){
        event.preventDefault()
        
        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value;
            formIsValid = this.state.formData[key].valid && formIsValid;
        }

        if(formIsValid){
                ///submit form
        } else {
            this.setState({
                formError: true
            })
        }
     }

    render() {
        return (
            <AdminLayout>
                <div className="editplayers_dialog_wrapper">
                    <h2>{this.state.formType}</h2>

                    <div>
                        <form onSubmit={(event)=>this.submitForm(event)}>
                            <FormField
                                id={'name'}
                                formdata={this.state.formData.name}
                                change={(element) => this.updateForm(element)}
                            />

                            <FormField
                                id={'lastname'}
                                formdata={this.state.formData.lastname}
                                change={(element) => this.updateForm(element)}
                            />

                            <FormField
                                id={'number'}
                                formdata={this.state.formData.number}
                                change={(element) => this.updateForm(element)}
                            />

                            <FormField
                                id={'position'}
                                formdata={this.state.formData.position}
                                change={(element) => this.updateForm(element)}
                            />

                            <div className="success_label">
                                {this.state.formSuccess}
                            </div>
                            {this.state.formError ?
                                <div className="error_label">Something is wrong</div>
                                : null
                            }

                            <div className="admin_submit">
                                <button onClick={(event) => this.submitForm(event)}>
                                    {this.state.formType}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </AdminLayout>
        );
    }
}

export default AddEditPlayers;