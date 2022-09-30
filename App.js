import React, {useEffect, useRef} from 'react';
import {View, Text, Animated, Easing} from 'react-native';
import Svg, {Circle, G, Polygon, Rect} from 'react-native-svg';

export default () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2F6E84',
      }}>
      {[...Array(10).keys()].map(v => (
        <Bubble key={v} delay={v * 100} />
      ))}
      <SubMarine />
    </View>
  );
};

const SubMarine = () => {
  const AnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animate();
  }, []);

  const Animate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(AnimatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(AnimatedValue, {
          toValue: -1,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(AnimatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ]),
    ).start();
  };

  const rotateZ = AnimatedValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ['-5deg', '0deg', '5deg'],
  });

  const traslate = AnimatedValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [-10, 0, 10],
  });

  return (
    <Animated.View
      style={[
        {alignItems: 'center'},
        {transform: [{translateY: traslate}, {rotateZ}]},
      ]}>
      <SubMarineHeader />
      <SubMarineBody />
    </Animated.View>
  );
};

const SubMarineHeader = () => {
  return (
    <View style={{alignItems: 'flex-end'}}>
      <Telescope />
      <View
        style={{
          backgroundColor: '#D93A54',
          height: 35,
          width: 100,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#AA2138',
            height: 25,
            width: 80,
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Light />
          <Light />
          <Light />
        </View>
      </View>
    </View>
  );
};

const Light = () => {
  const AnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animate();
  }, []);

  const Animate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(AnimatedValue, {
          toValue: 1,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(AnimatedValue, {
          toValue: 0,
          duration: 2500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  const opacity = AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <Animated.View
      style={{
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        opacity,
      }}
    />
  );
};

const Telescope = () => {
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'flex-start', marginRight: 10}}>
      <View
        style={{
          height: 30,
          width: 10,
          backgroundColor: '#D93A54',
          borderTopLeftRadius: 20,
        }}
      />
      <View
        style={{
          height: 10,
          width: 15,
          backgroundColor: '#D93A54',
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}
      />
    </View>
  );
};

const SubMarineBody = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <SubMarineEngine />
      <View
        style={{
          height: 150,
          width: 270,
          backgroundColor: '#D93A54',
          borderRadius: 70,
        }}>
        <CenterStar />
        <BuddyWindow />
      </View>
      <FrontLight />
    </View>
  );
};

const SubMarineEngine = () => {
  return (
    <View
      style={{
        height: 130,
        width: 50,
        backgroundColor: '#D93A54',
        borderRadius: 20,
        marginRight: -10,
      }}>
      <Engine />
    </View>
  );
};

const Engine = () => {
  return (
    <View style={{paddingVertical: 10}}>
      {[...Array(5).keys()].map((_, i) => (
        <EngineLight key={`${i}`} delay={i * 100} />
      ))}
    </View>
  );
};

const EngineLight = ({delay}) => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    Animated.loop(
      Animated.timing(translateY, {
        delay,
        toValue: 100,
        duration: 400,
        useNativeDriver: true,
      }),
    ).start();
  };
  return (
    <Animated.View
      style={[
        {
          width: 30,
          height: 10,
          backgroundColor: 'white',
          alignSelf: 'center',
          borderRadius: 10,
          position: 'absolute',
          top: 10,
        },
        {transform: [{translateY}]},
      ]}
    />
  );
};

const CenterStar = () => {
  const AnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    Animated.loop(
      Animated.timing(AnimatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear, // Easing is an additional import from react-native
        useNativeDriver: true,
      }),
    ).start();
  };

  const rotateZ = AnimatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '180deg', '360deg'],
  });
  return (
    <View
      style={{
        position: 'absolute',
        top: '40%',
        right: '50%',
        backgroundColor: '#D93A54',
        height: 40,
        width: 40,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={[
          {
            backgroundColor: '#AA2138',
            height: 30,
            width: 30,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
          },
          {transform: [{rotateZ}]},
        ]}>
        <View
          style={{
            height: 30,
            width: 5,
            backgroundColor: 'white',
            borderRadius: 10,
            position: 'absolute',
          }}
        />
        <View
          style={{
            height: 30,
            width: 5,
            backgroundColor: 'white',
            borderRadius: 10,
            transform: [{rotateZ: '-90deg'}],
          }}
        />
      </Animated.View>
    </View>
  );
};

const BuddyWindow = () => {
  const strokeDasharray = 45 * 2 * Math.PI;
  return (
    <View
      style={{
        position: 'absolute',
        top: '30%',
        right: '20%',
        backgroundColor: '#D93A54',
        height: 50,
        width: 50,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#1A3B48',
          height: 45,
          width: 45,
          borderRadius: 45 / 2,
        }}>
        <Svg height={45} width={45} viewBox={`0 0 ${45 / 2} ${45 / 2}`}>
          <Circle
            // fill={'white'}
            cx={'50%'}
            cy={'50%'}
            r={'40%'}
            stroke={'white'}
            strokeDasharray={strokeDasharray}
            strokeLinecap={'round'}
            strokeWidth={1}
            strokeDashoffset={strokeDasharray * 0.95}
          />
        </Svg>
      </View>
    </View>
  );
};

const FrontLight = () => {
  return (
    <View
      style={{
        height: 30,
        width: 30,
        backgroundColor: '#D93A54',
        position: 'absolute',
        right: 0,
        bottom: 0,
        transform: [{rotateZ: '45deg'}],
      }}>
      <Svg height={200} width={200}>
        <Polygon points="10,20 200,100 200,-200" fill="white" opacity={0.2} />
        <Rect fill={'#D93A54'} x="0" y="0" width={'30'} height={'30'} />
      </Svg>
    </View>
  );
};

const Bubble = ({delay}) => {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    Animated.loop(
      Animated.timing(translateX, {
        delay,
        toValue: -400,
        duration: 1000,
        useNativeDriver: true,
      }),
    ).start();
  };
  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          top: `${Math.random() * 100}%`,
          right: -20,
          backgroundColor: '#367C98',
          height: 20,
          width: 20,
          borderRadius: 10,
          zIndex: Math.floor(Math.random() * 2),
        },
        {
          transform: [{translateX}],
        },
      ]}
    />
  );
};
