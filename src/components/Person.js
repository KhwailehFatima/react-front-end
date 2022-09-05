import axios from "axios";
import { useState } from "react";

function Person () {
    const [ name, setName ] = useState( "Fatima" );
    const [ age, setAge ] = useState( 28 );
    const [ gender, setGender ] = useState( "Female" );
    const [ newAge, setNewAge ] = useState( '' );

    async function handleSubmit ( event ) {
        event.preventDefault();
        // console.log(event.target.children[0].children[0].value)
        setName( event.target.children[ 0 ].children[ 0 ].value || name );
        setGender( event.target.children[ 4 ].children[ 0 ].value || gender);
        let oldAge = event.target.children[ 2 ].children[ 0 ].value || age;
        setAge( oldAge );
        console.log(oldAge);
        await axios.post( `${process.env.REACT_APP_SERVER}/person?name=${name}&age=${oldAge}&gender=${gender}` )
            .then( response => {
                setNewAge( response.data );
            } )
            .catch( error => {
                console.log( error );
            } );
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop:'2vh',flexDirection: 'row', backgroundColor:'grey'}}>
            <div data-testid="person">
                <h2>Person</h2>
                <p data-testid="name">My name is {name}</p>
                <p data-testid="age">My age is {age}</p>
                <p data-testid="gender">My gender is {gender}</p>
                {newAge && <p data-testid="newAge">My new age is {newAge}</p>}
            </div>

            <div style={{margin: '2vw', padding: '1vh'}}>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="newName" data-testid="name-input" />
                    </label>
                    <br />
                    <label>
                        Age:
                        <input type="number" name="age" data-testid="age-input" />
                    </label>
                    <br />
                    <label>
                        Gender:
                        <select name="gender" data-testid="gender-input" >
                            <option value="male">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>
                    <br />
                    <input type="submit" value="Submit" data-testid="submit" />
                </form>
            </div>
        </div>
    );
}


export default Person;