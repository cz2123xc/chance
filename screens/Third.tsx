import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Third() {
  const [first, setFirst] = React.useState<number | null>();
  const [firstPercent, setFirstPercent] = React.useState<number | null>();
  const [second, setSecond] = React.useState<number | null>();
  const [secondPercent, setSecondPercent] = React.useState<number | null>();
  const [third, setThird] = React.useState<number | null>();
  const [thirdPercent, setThirdPercent] = React.useState<number | null>();
  const [fourth, setFourth] = React.useState<number | null>();
  const [fourthPercent, setFourthPercent] = React.useState<number | null>();
  const [fifth, setFifth] = React.useState<number | null>();
  const [fifthPercent, setFifthPercent] = React.useState<number | null>();
  const [sixth, setSixth] = React.useState<number | null>();
  const [sixthPercent, setSixthPercent] = React.useState<number | null>();
  const [price, setPrice] = React.useState<number | null>();

  const getNesting = (
    percentValue: number | null | undefined,
    priceValue: number | null | undefined,
  ): any => {
    if (
      percentValue !== null &&
      priceValue !== null &&
      percentValue !== undefined &&
      priceValue !== undefined
    ) {
      const result = (100 / percentValue) * priceValue;
      if (result === Infinity) {
        return 0;
      }
      return isNaN(result) ? 0 : Math.floor(result);
    }
  };

  const resetParameters = () => {
    setFirst(null);
    setFirstPercent(null);
    setSecond(null);
    setSecondPercent(null);
    setThird(null);
    setThirdPercent(null);
    setFourth(null);
    setFourthPercent(null);
    setFifth(null);
    setFifthPercent(null);
    setSixth(null);
    setSixthPercent(null);
    setPrice(null);
  };

  useEffect(() => {
    const firstValue = getNesting(firstPercent, price);
    const secondValue = getNesting(secondPercent, firstValue);
    const thirdValue = getNesting(thirdPercent, secondValue);
    const fourthValue = getNesting(fourthPercent, thirdValue);
    const fifthValue = getNesting(fifthPercent, fourthValue);
    const sixthValue = getNesting(sixthPercent, fifthValue);

    setFirst(firstValue);
    setSecond(secondValue);
    setThird(thirdValue);
    setFourth(fourthValue);
    setFifth(fifthValue);
    setSixth(sixthValue);
  }, [
    price,
    firstPercent,
    secondPercent,
    thirdPercent,
    fourthPercent,
    fifthPercent,
    sixthPercent,
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>?????? ????????? ?????????</Text>

      <View style={styles.priceWrapper}>
        <Text style={styles.subTitle}>?????? ??????</Text>
        <View style={styles.setWrapper}>
          <TextInput
            value={price ? price.toString() : ''}
            onChangeText={text => setPrice(parseFloat(text))}
            style={styles.priceInput}
          />
          <TouchableOpacity onPress={resetParameters}>
            <Text style={styles.resetButton}>??????</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.calWrapper}>
        <View>
          <Text style={styles.subTitle}>1??? ?????? ?????????</Text>
          <TextInput
            value={firstPercent ? firstPercent.toString() : ''}
            onChangeText={text => setFirstPercent(parseFloat(text))}
            style={styles.input}
            placeholder="????????? ?????? ?????????"
          />
        </View>
        <View>
          <Text style={styles.subTitle}>2??? ?????? ?????????</Text>
          <TextInput
            value={secondPercent ? secondPercent.toString() : ''}
            onChangeText={text => setSecondPercent(parseFloat(text))}
            style={styles.input}
            placeholder="????????? ?????? ?????????"
          />
        </View>
      </View>
      <View style={styles.calWrapper}>
        <View>
          <Text style={styles.subTitle}>3??? ?????? ?????????</Text>
          <TextInput
            value={thirdPercent ? thirdPercent.toString() : ''}
            onChangeText={text => setThirdPercent(parseFloat(text))}
            style={styles.input}
            placeholder="????????? ?????? ?????????"
          />
        </View>
        <View>
          <Text style={styles.subTitle}>4??? ?????? ?????????</Text>
          <TextInput
            value={fourthPercent ? fourthPercent.toString() : ''}
            onChangeText={text => setFourthPercent(parseFloat(text))}
            style={styles.input}
            placeholder="????????? ?????? ?????????"
          />
        </View>
      </View>
      <View style={styles.calWrapper}>
        <View>
          <Text style={styles.subTitle}>5??? ?????? ?????????</Text>
          <TextInput
            value={fifthPercent ? fifthPercent.toString() : ''}
            onChangeText={text => setFifthPercent(parseFloat(text))}
            style={styles.input}
            placeholder="????????? ?????? ?????????"
          />
        </View>
        <View>
          <Text style={styles.subTitle}>6??? ?????? ?????????</Text>
          <TextInput
            value={sixthPercent ? sixthPercent.toString() : ''}
            onChangeText={text => setSixthPercent(parseFloat(text))}
            style={styles.input}
            placeholder="????????? ?????? ?????????"
          />
        </View>
      </View>

      <View>
        <Text style={styles.subTitle}>
          1????????? ?????? ??????{' '}
          {first?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Text>
        <Text style={styles.subTitle}>
          2????????? ?????? ??????{' '}
          {second?.toFixed()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Text>
        <Text style={styles.subTitle}>
          3????????? ?????? ??????{' '}
          {third?.toFixed()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Text>
        <Text style={styles.subTitle}>
          4????????? ?????? ??????{' '}
          {fourth?.toFixed()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Text>
        <Text style={styles.subTitle}>
          5????????? ?????? ??????{' '}
          {fifth?.toFixed()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Text>
        <Text style={styles.subTitle}>
          6????????? ?????? ??????{' '}
          {sixth?.toFixed()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  setWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: 'orange',
    width: 100,
    textAlign: 'center',
    height: 50,
    color: 'black',
    lineHeight: 50,
    fontSize: 20,
  },
  priceWrapper: {
    marginBottom: 10,
  },
  calWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  priceInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    width: 120,
    color: '#fff',
    height: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    width: 120,
    color: '#fff',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 30,
    marginBottom: 30,
  },
  container: {
    backgroundColor: '#000000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
