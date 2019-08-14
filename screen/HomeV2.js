import React, { Component } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'

export default class HomeV2 extends Component {
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
                    titleSource: myJson.title,
                    descSource: myJson.description,
                    itemSource: myJson.movies
                })
            })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator />
            )
        }
        return (
            <View>
                <View>
                    <FlatList
                        data={this.state.itemSource}
                        renderItem={({ item, index }) =>
                            <Content
                                data={item}
                                index={index}
                            />}
                        keyExtractor={(item, index) => item.toString()}
                    />
                </View>
            </View>
        )
    }
}
class Content extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.data.title}, {this.props.data.releaseYear}</Text>
            </View>
        )
    }
}

