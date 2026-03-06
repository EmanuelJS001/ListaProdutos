import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    nome: 'Colisor de Hádrons',
    valor: '4.750.000.000',
    dtCadastro: '15/03/2025',
    qntd: '2'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    nome: 'Detector de partículas',
    valor: '500.000.000',
    dtCadastro: '19/04/2025',
    qntd: '10'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    nome: 'Ímã supercondutor',
    valor: '150.000',
    dtCadastro: '19/04/2025',
    qntd: '800'
  },
    {
    id: '67aebcbd-94b2-441f-92f1-f65257fd79d6',
    nome: 'Sistema de criogenia',
    valor: '50.000.000',
    dtCadastro: '02/05/2025',
    qntd: '20'
  },  
    {
    id: '233c8bcd-a653-45e8-ba2e-03be895ea563',
    nome: 'Sistema de computação para análise de dados',
    valor: '10.000.000',
    dtCadastro: '25/05/2025',
    qntd: '50'
  },
];

const Item = ({nome, valor, dtCadastro, qntd}) => (
  <View style={styles.item}>
    <Text style={styles.nome}>{nome}</Text>
    <Text style={styles.nome }>{valor}</Text>
    <Text style={styles.nome}>{dtCadastro}</Text>
    <Text style={styles.nome}>{qntd}</Text>
  </View>
);

export default function App(){  
return(
  <View style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={({item}) => <Item nome={item.nome} valor={item.valor} dtCadastro={item.dtCadastro} qntd={item.qntd}/>}
      keyExtractor={item => item.id}
    />
  </View>
  )  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#569dee',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  nome: {
    fontSize: 32,
  },
});