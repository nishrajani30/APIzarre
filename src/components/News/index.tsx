import React from 'react';
import {FlatList, StyleSheet, Text, View} from "react-native";
import {Article} from "../../types/article";
import NewsItem from "./NewsItem";


interface NewsListPros {
  articles: Article[]
}

const News = ({articles}: NewsListPros) => {
  return (
    <View style={styles.container}>
      { articles?.length === 0 && <Text style={styles.center}>No news found</Text>}
      { articles?.length > 0 && <FlatList
          data={articles}
          renderItem={({item}) => <NewsItem article={item}/>}
          keyExtractor={(item) => item.url}
      />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default News;