import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Third() {
  const [first, setFirst] = React.useState<any>(0);
  const [firstPercent, setFirstPercent] = React.useState<any>(0);
  const [second, setSecond] = React.useState<any>(0);
  const [secondPercent, setSecondPercent] = React.useState<any>(0);
  const [third, setThird] = React.useState<any>(0);
  const [thirdPercent, setThirdPercent] = React.useState<any>(0);
  const [fourth, setFourth] = React.useState<any>(0);
  const [fourthPercent, setFourthPercent] = React.useState<any>(0);
  const [fifth, setFifth] = React.useState<any>(0);
  const [fifthPercent, setFifthPercent] = React.useState<any>(0);
  const [sixth, setSixth] = React.useState<any>(0);
  const [sixthPercent, setSixthPercent] = React.useState<any>(0);
  const [price, setPrice] = React.useState<any>(0);

  const getNesting = (percentValue: number, priceValue: number): number => {
    const result = (100 / percentValue) * priceValue;
    if (result === Infinity) {
      return 0;
    }
    return isNaN(result) ? 0 : result;
  };

  const resetParameters = () => {
    setFirst(0);
    setFirstPercent(0);
    setSecond(0);
    setSecondPercent(0);
    setThird(0);
    setThirdPercent(0);
    setFourth(0);
    setFourthPercent(0);
    setFifth(0);
    setFifthPercent(0);
    setSixth(0);
    setSixthPercent(0);
    setPrice(0);
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
      <Text style={styles.mainTitle}>강화 성공률 계산기</Text>

      <View style={styles.priceWrapper}>
        <Text style={styles.subTitle}>개당 가격</Text>
        <View style={styles.setWrapper}>
          <TextInput
            value={isNaN(price) ? 0 : price}
            onChangeText={text => setPrice(parseFloat(text))}
            style={styles.priceInput}
          />
          <TouchableOpacity onPress={resetParameters}>
            <Text style={styles.resetButton}>리셋</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.calWrapper}>
        <View>
          <Text style={styles.subTitle}>1차 강화 성공률</Text>
          <TextInput
            value={isNaN(firstPercent) ? 0 : firstPercent}
            onChangeText={text => setFirstPercent(parseFloat(text))}
            style={styles.input}
            placeholder="퍼센트 입력 하세요"
          />
        </View>
        <View>
          <Text style={styles.subTitle}>2차 강화 성공률</Text>
          <TextInput
            value={isNaN(secondPercent) ? 0 : secondPercent}
            onChangeText={text => setSecondPercent(parseFloat(text))}
            style={styles.input}
            placeholder="퍼센트 입력 하세요"
          />
        </View>
      </View>
      <View style={styles.calWrapper}>
        <View>
          <Text style={styles.subTitle}>3차 강화 성공률</Text>
          <TextInput
            value={isNaN(thirdPercent) ? 0 : thirdPercent}
            onChangeText={text => setThirdPercent(parseFloat(text))}
            style={styles.input}
            placeholder="퍼센트 입력 하세요"
          />
        </View>
        <View>
          <Text style={styles.subTitle}>4차 강화 성공률</Text>
          <TextInput
            value={isNaN(fourthPercent) ? 0 : fourthPercent}
            onChangeText={text => setFourthPercent(parseFloat(text))}
            style={styles.input}
            placeholder="퍼센트 입력 하세요"
          />
        </View>
      </View>
      <View style={styles.calWrapper}>
        <View>
          <Text style={styles.subTitle}>5차 강화 성공률</Text>
          <TextInput
            value={isNaN(fifthPercent) ? 0 : fifthPercent}
            onChangeText={text => setFifthPercent(parseFloat(text))}
            style={styles.input}
            placeholder="퍼센트 입력 하세요"
          />
        </View>
        <View>
          <Text style={styles.subTitle}>6차 강화 성공률</Text>
          <TextInput
            value={isNaN(sixthPercent) ? 0 : sixthPercent}
            onChangeText={text => setSixthPercent(parseFloat(text))}
            style={styles.input}
            placeholder="퍼센트 입력 하세요"
          />
        </View>
      </View>

      <View>
        <Text style={styles.subTitle}>
          1차강화 예상 비용 {first.toFixed(0)}
        </Text>
        <Text style={styles.subTitle}>
          2차강화 예상 비용 {second.toFixed(0)}
        </Text>
        <Text style={styles.subTitle}>
          3차강화 예상 비용 {third.toFixed(0)}
        </Text>
        <Text style={styles.subTitle}>
          4차강화 예상 비용 {fourth.toFixed(0)}
        </Text>
        <Text style={styles.subTitle}>
          5차강화 예상 비용 {fifth.toFixed(0)}
        </Text>
        <Text style={styles.subTitle}>
          6차강화 예상 비용 {sixth.toFixed(0)}
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
