import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, StatusBar, Image, TextInput, ActivityIndicator, TouchableOpacity, Button, Pressable } from 'react-native';

function Browse({ navigation }) 
{
    const [postList, setPostList] = useState([]);

    const fetchData = async () => {
        const response = await fetch(
            'https://mysteamlist.com/api/games'
        );
        const data = await response.json()
        return data
    };

    const displayGame = async (input) => {
        const payload = await fetchData();

        setPostList(payload);
    }

    useEffect(() => {
        displayGame();
    }, []);

    const [showContent, setShowContent] = useState(false);

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.dropContainer}>
              <TouchableOpacity onPress={()=> setShowContent(!showContent)}>
                <View>
                  <Text style={styles.label}>Drop Down</Text>
                </View>
              </TouchableOpacity>
              {showContent && (
                <View style = {styles.dropButtonContent}>
                    <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.buttonText}>Logout</Text>
                    </Pressable>
                    <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate('QR')}>
                        <Text style={styles.buttonText}>QR-Login</Text>
                    </Pressable>
                </View>
              )}
            </View>

            <View style={styles.searchContainer}>
                <Text style={styles.label}>Search</Text>
                <TextInput style={styles.input} onChangeText={text => displayGame(text)} placeholder='Search for games'/>
            </View>

            <View style={styles.listContainer}>
                <FlatList
                    data={postList}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.card}>
                                <Image style={styles.tinyLogo} source={{uri: item.Image}}/>
                                <Text style={styles.titleText}>{item.Name}</Text>
                                <Text style={styles.bodyText}>{item.Description}</Text>
                            </View>
                        )
                    }}
                    ItemSeparatorComponent={() => (
                        <View
                            style={{
                                height: 16,
                            }}
                        />
                    )}
                    ListEmptyComponent={<Text>No Posts Found</Text>}
                    ListHeaderComponet={<Text style={styles.headerText}>Post List</Text>}
                    ListFooterComponent={
                        <Text style={styles.footerText}>End of list</Text>
                    }
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingTop: StatusBar.currentHeight,
    },
    listContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
    card: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
    titleText: {
        fontSize: 16,
    },
    bodyText: {
        fontSize: 10,
        color: "#666666",
    },
    headerText: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 12,
    },
    footerText: {
        fontSize: 24,
        textAlign: "center",
        marginTop: 12,
    },
    tinyLogo: {
      height: 100,
      marginBottom: 5
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
      fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 5,
    },
    games: {
      marginTop: 5,
      marginBottom: 5,
      fontSize: 26,
      justifyContent: 'center',
    },
    searchContainer: {
      backgroundColor: "white",
      padding: 20,
      shadowColor: "black",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      marginBottom: 15
    },
    dropContainer: {
        backgroundColor: "white",
        padding: 20,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonContainer: {
        width: 150,
        backgroundColor: "#4A55A2",
        padding: 15,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 6,
        marginTop: 10,

    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    dropButtonContent: {
        marginTop: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        alignContent: 'center'
    }
});

export default Browse;