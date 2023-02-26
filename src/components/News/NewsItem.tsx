import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'

import {Article} from "../../types/article";
import {Card} from "react-native-paper";

interface NewsItemProps {
  article: Article
}

const NewsItem = ({ article }: NewsItemProps) => {
  return (
    <Card style={styles.card} elevation={2}>
      <View style={styles.searchItem}>
        <Image style={styles.image} source={{ uri: article.urlToImage }} />
        <View style={styles.searchInfo}>
          <View>
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.subtitle}>{article.author}</Text>
          </View>
        </View>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 5,
    overflow: 'hidden',
  },
  image: {
    height: 120,
    width: 90,
    marginRight: 10,
  },
  searchItem: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 10,
  },
  searchInfo: {
    justifyContent: 'space-between',
    paddingVertical: 10,
    flex: 0.8,
  },
  platforms: {
    fontSize: 12,
  },
  rating: {
    justifyContent: 'center',
    paddingRight: 10,
    flex: 0.2,
  },
})

export default NewsItem