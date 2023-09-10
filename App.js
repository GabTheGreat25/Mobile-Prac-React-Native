import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
  SectionList,
  ScrollView,
} from "react-native";
import pokemonList from "./data.json";
import groupedPokemonList from "./grouped-data.json";

export default function App() {
  return (
    <SafeAreaView styles={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map((pokemon) => {
          //? map is a function that takes in a function as an argument
          //! Show all the pokemon even when not rendering
          console.log(pokemon.id);
          return (
            <View style={styles.card} key={pokemon.id}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
      {/* <View style={styles.scrollView}>
        <FlatList
          data={pokemonList}
          renderItem={({ item }) => {
            console.log(item.id);
            //? FlatList only renders the items that are visible
            //! FlatList is more performant than ScrollView also uses less memory and lazy loading
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={
            <View
              style={{
                height: 16,
              }}
            />
          }
          ListEmptyComponent={<Text>No Items Found</Text>}
          ListHeaderComponent={
            <Text style={styles.headerText}>Pokemon List</Text>
          }
          ListFooterComponent={
            <Text style={styles.footerText}>End of list</Text>
          }
          // horizontal={true}
        />
      </View> */}
      <View style={styles.scrollView}>
        <SectionList
          sections={groupedPokemonList}
          renderItem={({ item }) => {
            //? SectionList only renders the items that are visible
            //! SectionList is for grouping data or nesting data
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item}</Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeaderText}>{section.type}</Text>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 16,
              }}
            />
          )}
          SectionSeparatorComponent={() => (
            <View
              style={{
                height: 16,
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
  },
  scrollView: {
    paddingHorizontal: 16,
    backgroundColor: "plum",
    paddingTop: StatusBar.currentHeight, //? StatusBar.currentHeight is the height of the status bar
  },
  card: {
    backgroundColor: "plum",
    padding: 16,
    borderRadius: 8,
    // marginBottom: 16,
    borderWidth: 1,
  },
  cardText: {
    fontSize: 30,
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
  sectionHeaderText: {
    backgroundColor: "plum",
    fontSize: 24,
    fontWeight: "bold",
  },
});
