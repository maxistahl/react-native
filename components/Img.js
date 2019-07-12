import React, {useState} from 'react';
import {Image} from 'react-native';

export default (Img = ({src, style}) => {
  const [showDefault, setShowDefault] = useState(false);
  const icon = showDefault ? require('../assets/unknownuser.png') : {uri: src};

  return <Image style={style} source={icon} onError={() => setShowDefault(true)} />;
});
