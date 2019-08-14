import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Root } from 'native-base'
import Home from './Home'
import HomeV2 from './HomeV2'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Root>
                <Home />
            </Root>
        );
    }
}
