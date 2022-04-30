import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Percent = (count: number, percent: number): number => {
  const result = count * percent;
  return isNaN(Number(result)) ? 0 : result;
};

const Price = (count: number, percent: number, price: number) => {
  const result = (count * percent * price).toFixed(0);
  return isNaN(Number(result)) ? 0 : result;
};

const successCount = (count: number, percent: number) => {
  const percentage = Percent(count, percent);
  return Math.floor(percentage / 100);
};

export default function Home() {
  const [count, setCount] = useState<any>();
  const [percent, setPercent] = useState<any>();
  const [price, setPrice] = useState<any>();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainTitle}>예상비용 산출기</Text>
        <View>
          <Text style={styles.subTitle}>확률 (%)</Text>
          <TextInput
            style={styles.input}
            value={isNaN(percent) ? 0 : percent}
            onChangeText={text => setPercent(text)}
            placeholder="확률을 입력 하세요 ( 숫자 ) "
          />
        </View>
        <View>
          <Text style={styles.subTitle}>횟수</Text>
          <TextInput
            style={styles.input}
            value={isNaN(count) ? 0 : count}
            onChangeText={text => setCount(parseFloat(text))}
            placeholder="시도 횟수를 입력 하세요 ( 숫자 ) "
          />
        </View>
        <View>
          <Text style={styles.subTitle}>가격 (1 EA)</Text>
          <TextInput
            style={styles.input}
            value={isNaN(price) ? 0 : price}
            onChangeText={text => setPrice(parseFloat(text))}
            placeholder="가격을 입력 하세요 ( 숫자 ) "
          />
        </View>
      </View>

      <View style={styles.resultWrapper}>
        <View>
          <Text style={styles.resultPercentTitle}>예상 성공 수량</Text>
          <Text style={styles.resultPercent}>
            {successCount(count, percent)} 개
          </Text>
        </View>
        <View>
          <Text style={styles.resultPriceTitle}>비용</Text>
          <Text style={styles.resultPrice}>{Price(count, percent, price)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resultWrapper: {
    marginTop: 20,
    marginBottom: 20,
  },
  resultPrice: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange',
  },
  resultPercent: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff0000',
  },
  resultPercentTitle: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  resultPriceTitle: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    width: 210,
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
