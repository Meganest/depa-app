import * as React from "react";
import { Text } from 'react-native';

export default MyText = (props) => (
    <Text style={{ fontFamily: 'Prompt' }}>
        {props.children}
    </Text>
)