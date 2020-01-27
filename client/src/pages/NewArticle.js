import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Wrapper from '../components/UI/Wrapper'
import { Container } from 'react-bootstrap'
import axios from "axios";

class NewArticlePage extends Component {

    state = {
        header: '',
        subheader: '',
        body: '',
        category: '',
        redirect: false
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // event.preventDefault();

        let article = {
            header: this.state.header,
            // subheader: this.state.subheader,
            // body: this.state.body,
            // category: this.state.category,
            // likes: 0
        };
        axios.post("/api/new-article", article).then(res => {
            console.log("completed update")
            console.log(res)
            // this.setState({ redirect: true })
        })
    }

    render() {
        return this.state.redirect ? (
            <Redirect to="/profile" />
        ) : (
                <Wrapper >
                    <Container id="new-article-page">
                        <form
                            action="/api/new-article"
                            method="POST"
                            id='new-article-form'>
                            <input
                                className="new-article-input"
                                type="text"
                                name="header"
                                value={this.state.header}
                                onChange={this.handleInputChange}></input>
                            <input
                                className="new-article-input"
                                type="text"
                                name="subheader"
                                value={this.state.subheader}
                                onChange={this.handleInputChange}
                            ></input>
                            <textarea
                                className="new-article-textarea"
                                type="text"
                                name="body"
                                value={this.state.body}
                                onChange={this.handleInputChange}></textarea>
                            <button
                                type="submit"
                                value="Submit"
                                onClick={() => this.handleFormSubmit()}>Submit Article</button>
                        </form>
                    </Container>
                </Wrapper>
            )
    }
}

export default NewArticlePage;
