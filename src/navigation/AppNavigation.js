import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnboardingScreenStep1 from "../screens/OnboardingScreenStep1/OnboardingScreenStep1";

//Create stack instance
const { Screen, Navigator } = createStackNavigator();

//Define a list of screens

export default AppNavigation = () => {
    return (
        <Navigator initialRouteName="OnboardingStep1">
            <Screen name="OnboardingStep1" component={OnboardingScreenStep1} />
        </Navigator>
    );
};
