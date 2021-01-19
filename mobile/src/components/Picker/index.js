import React from 'react';

import SwitchSelector from "react-native-switch-selector";




<SwitchSelector
  initial={0}
  onPress={value => this.setState({ gender: value })}
  textColor={colors.purple} //'#7a44cf'
  selectedColor={colors.white}
  buttonColor={colors.purple}
  borderColor={colors.purple}
  hasPadding
  options={[
    { label: "Feminino", value: "f", imageIcon: images.feminino }, //images.feminino = require('./path_to/assets/img/feminino.png')
    { label: "Masculino", value: "m", imageIcon: images.masculino } //images.masculino = require('./path_to/assets/img/masculino.png')
  ]}
/>