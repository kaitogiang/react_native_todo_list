import { Text, View, StyleSheet } from "react-native";
import { COLORS } from "../../constants/COLORS";
import { IconTodo } from "../../assets/icons";
import DotIndicator from "../../components/common/DotIndicator";

const OnboardingScreenStep1 = () => {
    return (
        <View style={style.container}>
            <IconTodo></IconTodo>
            <Text style={style.title}>TodyApp</Text>
            <Text style={style.subtitle}>
                The best todo list application for you
            </Text>
            <DotIndicator totalDot={3} currentIndex={0} />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: COLORS.PRIMARY,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    title: {
        fontSize: 30,
        color: COLORS.SECONDARY,
        marginBottom: 10,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 16,
        color: COLORS.SECONDARY,
    },
});

export default OnboardingScreenStep1;
