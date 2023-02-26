import React from 'react';
import {View, TextInput, StyleSheet, Animated, TouchableOpacity, Text} from 'react-native';
import useSearchBar, {SearchBoxProps} from "./useSearchBar";
import {DefaultTheme} from "react-native-paper";

const SearchBox = ({onSearch}: SearchBoxProps) => {
  const {
    handleSearch,
    handleFocus,
    handleBlur,
    interpolatedAnimation,
    searchText,
    setSearchText,
  } = useSearchBar({onSearch});

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.searchBar, {width: interpolatedAnimation}]}>
        <TextInput
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search"
          placeholderTextColor={DefaultTheme.colors.primary}
        />
      </Animated.View>
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 16,
    maxHeight: 40,
    marginVertical: 16,
    justifyContent: 'center',
  },
  searchBar: {
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 16,
    overflow: 'hidden',
  },
  searchInput: {
    flex: 1,
    color: '#000',
    fontSize: 16,
  },
  searchButton: {
    marginLeft: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#007AFF',
  },
  searchButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default SearchBox;
