import { View, Text, Pressable, Image, StyleSheet } from "react-native"

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
    return <View style={styles.mealItem}>
        <Pressable>
            <View>
                <Image 
                    source={ {uri: imageUrl}} 
                    style={styles.image} 
                    onError={(error) => console.error(error.nativeEvent.error)} />
                <Text style={styles.title} >{title}</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.detailItem}>{duration}m</Text>
                <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
            </View>
        </Pressable>
    </View>
}

export default MealItem

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 16,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})