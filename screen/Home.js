import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((myJson) => {
                this.setState({
                    isLoading: false,
                    itemSource: myJson.movies,
                    titleSource: myJson.title
                })
            })
            .catch((error) => {
                console.log(error)

            })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 10 }}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <View style={{flex:1}}>
                <View style={{alignItems: 'center' }}>
                    <Text>{this.state.titleSource}</Text>
                </View>
                <View>
                    <FlatList
                        data={this.state.itemSource}
                        renderItem={({ item }) => <Text>{item.title}</Text>}
                        keyExtractor={(item, index) => item.toString()}
                    />
                </View>
            </View>
        );
    }
}
