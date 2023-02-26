import React from "react";
import {StyleSheet, View} from "react-native";
import {ActivityIndicator, MD2Colors, Snackbar} from 'react-native-paper';

import SearchBar from "../../components/SearchBar";
import News from "../../components/News";
import useHome from "./useHome";

const HomeScreen = () => {
  const { news, error, hideError, loading, onSearch } = useHome();
  return (
    <View style={styles.container}>
      <SearchBar onSearch={onSearch}/>
      {loading && <ActivityIndicator animating={true} color={MD2Colors.red800} />}
      <News articles={news}/>
      <Snackbar
        visible={Boolean(error)}
        onDismiss={hideError}>
        {error}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});


export default HomeScreen;