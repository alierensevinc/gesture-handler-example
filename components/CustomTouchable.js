import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const CustomTouchable = ({ children, onPress }) => {
  const isActive = useSharedValue(false);

  const gesture = Gesture.Tap()
    .onTouchesDown(() => {
      isActive.value = true;
    })
    .onTouchesUp(() => {
      runOnJS(onPress)();
    })
    .onFinalize(() => {
      isActive.value = false;
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isActive.value ? 0.5 : 1, {
        duration: 100,
      }),
      transform: [
        {
          scale: withSpring(isActive.value ? 1.25 : 1),
        },
      ],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={animatedStyle}>{children}</Animated.View>
    </GestureDetector>
  );
};

export default CustomTouchable;
