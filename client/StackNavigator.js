import CoursesList from "./components/CoursesList";
import CourseDetails from "./components/CourseDetails";
import AddReview from "./components/AddReview";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function StackNavigator() {
    const Stack = createNativeStackNavigator();
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="CoursesList" component={CoursesList} />
        <Stack.Screen name="CourseDetails" component={CourseDetails} />
        <Stack.Screen name="AddReview" component={AddReview} />
      </Stack.Navigator>
  
  );
}

export default StackNavigator;
