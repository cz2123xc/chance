import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Percent = (count: number, percent: number): number => {
  const result = count * percent;
  return isNaN(Number(result)) ? 0 : result;
};

const Price = (count: number, percent: number, price: number) => {
  // 실패 확률 계산
  let result: number | string = 100 / percent;
  // 실패 확률 기반 비용 계산 소수점 없음
  result = (result * count * price).toFixed(0);

  // result 가 NaN이면 0으로 바꿔줌 아니라면 스트링으로 변환 후 콤마
  result = isNaN(Number(result))
    ? 0
    : result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return result;
};

const successCount = (count: number, percent: number) => {
  const percentage = Percent(count, percent);
  let result = percentage / 100;

  if (result < 1) {
    // 1 이하면 소수점 2자리까지 반올림
    result = Number(result.toFixed(2));
  } else {
    // 1 이상이면 소수점 버림
    result = Number(result.toFixed(0));
  }

  // 소수점 아래 버림 toFixed = 문자를 반환해서 Math 사용
  return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
            value={isNaN(percent) ? null : percent.toString()}
            onChangeText={text => setPercent(text)}
            placeholder="확률을 입력 하세요 ( 숫자 ) "
          />
        </View>
        <View>
          <Text style={styles.subTitle}>제작 개수</Text>
          <TextInput
            style={styles.input}
            value={count ? count.toString() : ''}
            onChangeText={text => setCount(text)}
            placeholder="제작 개수를 입력 하세요 ( 숫자 ) "
          />
        </View>
        <View>
          <Text style={styles.subTitle}>가격 (1 EA)</Text>
          <TextInput
            style={styles.input}
            value={price ? price.toString() : ''}
            onChangeText={text => setPrice(text)}
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
