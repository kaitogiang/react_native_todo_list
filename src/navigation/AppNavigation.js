// src/navigation/AppNavigator.js (Hoặc tên file của bạn)

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreenStep1 from "../screens/OnboardingScreenStep1";

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="OnboardingStep1"
                    component={OnboardingScreenStep1}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
