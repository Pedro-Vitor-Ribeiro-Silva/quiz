import { StyleSheet, Text, View, Button } from "react-native";

export default function Exemplo1(){
    let contadoNormal = 0;

    function incrementarContadorNormal(){
        contadoNormal += 1;
        console.warn('Valor do contador normal:', contadoNormal);
        
    }





    return(
        <View style={styles.container}>
            <Text>Exemplo sem useState</Text>
            <Text>Contador normal: {contadoNormal}</Text>
            <Button
            title="Aumentar valor do contador"
            onPress={incrementarContadorNormal}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        alignItems: "center",
        justifyContent: "center",
        padding: 20

    }
})