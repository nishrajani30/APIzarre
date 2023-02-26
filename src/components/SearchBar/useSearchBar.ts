import {useState} from "react";
import {Animated} from "react-native";

export interface SearchBoxProps {
  onSearch: (searchText: string) => void;
}

const useSearchBar = ({ onSearch }: SearchBoxProps) => {
  const [searchText, setSearchText] = useState('');
  const [animationValue, setAnimationValue] = useState(new Animated.Value(0));

  const handleSearch = () => {
    // handle search functionality here
    console.log(`Searching for ${searchText}`);
    onSearch(searchText);
  };

  const handleFocus = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    Animated.timing(animationValue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const interpolatedAnimation = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['50%', '70%'],
  });

  return {
    searchText,
    setSearchText,
    handleSearch,
    handleFocus,
    handleBlur,
    interpolatedAnimation,
  }
}

export default useSearchBar;