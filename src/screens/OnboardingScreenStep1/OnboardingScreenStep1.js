import { Text, View, StyleSheet } from "react-native";
import { COLORS } from "../../constants/COLORS";

const OnboardingScreenStep1 = () => {
    <View style={style.container}>
        <Text style={style.title}>TodyApp</Text>
        <Text style={style.subtitle}>
            The best todo list application for you
        </Text>
    </View>;
};

const style = StyleSheet.create({
    container: {
        backgroundColor: COLORS.PRIMARY,
        width: "auto",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        color: COLORS.SECONDARY,
    },
    subtitle: {
        fontSize: 16,
        color: COLORS.SECONDARY,
    },
});

export default OnboardingScreenStep1;
