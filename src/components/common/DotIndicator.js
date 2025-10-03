import { StyleSheet, View } from "react-native";
import { COLORS } from "../../constants/COLORS";

const DotElement = ({ isActive }) => {
    return <View style={[style.dot, isActive ? style.active : null]}></View>;
};

const DotIndicator = ({ currentIndex, totalDot }) => {
    return (
        <View style={style.dotContainer}>
            {Array.from({ length: totalDot }, (_, index) => (
                <DotElement key={index} isActive={currentIndex === index} />
            ))}
        </View>
    );
};

const style = StyleSheet.create({
    dot: {
        width: 8,
        height: 8,
        borderRadius: 10,
        marginHorizontal: 4,
        backgroundColor: COLORS.SECONDARY,
    },
    active: {
        width: 20,
    },
    dotContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default DotIndicator;
