import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

const useDimension = () => {
  const [screen, setScreen] = useState(Dimensions.get('window'));

  useEffect(() => {
    const handleOnChange = screen => {
      setScreen(screen.window);
    };

    Dimensions.addEventListener('change', handleOnChange);
    return () => Dimensions.removeEventListener('change', handleOnChange);
  });

  const {width, height} = screen;
  return {width, height};
};

export default useDimension;
