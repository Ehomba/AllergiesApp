import React from 'react';

class ShowMe extends Component {
    constructor(props) {
        super(props);

        this.setState({
            SignatureOfGuest: "",
            MessageofGuest: "",
        });
    };

    axios.post('https://git.heroku.com/allergies-app-t3.git', {
        SignatureOfGuest: this.state.SignatureOfGuest,
        MessageofGuest: this.state.MessageofGuest,
    })
        .then(response => {
        console.log(response, 'Signature added!');
        })
        .catch (err => {
    console.log(err, 'Signature not added, try again');
});

render(){
    <input
        onChange={this.handleSignatureOfGuest}
        name="SignatureOfGuest"
        className="NameinputForm"
        value={this.state.SignatureOfGuest}
        placeholder="Enter your name"
    />
        <textarea
            onChange={this.handleMessageofGuest}
            name="MessageofGuest"
            className="MessageinputForm"
            value={this.state.MessageofGuest}
            placeholder="Type a message"
        />

        <button
            className="submitbuttonguestbook"
            type="submit"
            onClick={this.addToGuestBook}
        >
            Submit to Guestbook<i className="GuestBookButton2" aria-hidden="true" />
        </button>

    }
    }

export default ShowMe;