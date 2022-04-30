import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Sub() {
  const [percent, setPercent] = useState<any>(0);
  const [count, setCount] = useState<any>(0);
  const [successCount, setSuccessCount] = useState<any>(0);
  const [successRate, setSuccessRate] = useState<any>(0);

  const Simulate = () => {
    let success: number = 0;
    // count 만큼 반복
    for (let i = 0; i < count; i++) {
      // 성공 여부를 결정하는 랜덤 값을 생성 최대값 100 최소값 percent z
      const random = Math.random() * 100;
      // 성공 여부에 따라 성공 횟수를 증가시킨다.
      if (random < percent) {
        success = success + 1;
      }
    }
    setSuccessCount(success);
    const SRate = isNaN(Number(((success / count) * 100).toFixed(2)))
      ? 0
      : ((success / count) * 100).toFixed(2);
    setSuccessRate(SRate);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainTitle}>시뮬레이션</Text>
        <View>
          <Text style={styles.subTitle}>확률 (%)</Text>
          <TextInput
            style={styles.input}
            value={isNaN(percent) ? 0 : percent}
            onChangeText={text => setPercent(parseFloat(text))}
            placeholder="확률을 입력 하세요 ( 숫자 ) "
          />
        </View>
        <View>
          <Text style={styles.subTitle}>강화개수</Text>
          <TextInput
            style={styles.input}
            // 숫자만 입력 가능
            value={isNaN(count) ? 0 : count}
            onChangeText={text => setCount(parseFloat(text))}
            placeholder="강화개수를 입력 하세요 ( 숫자 ) "
          />
        </View>
        <View>
          <TouchableOpacity style={styles.buttonWrapper} onPress={Simulate}>
            <Text style={styles.actionButton}>시뮬레이션</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View>
          <Text style={styles.successCount}>성공 수량</Text>
          <Text style={styles.countResult}>{successCount + ' 개'}</Text>
        </View>
        <View>
          <Text style={styles.successRate}>이번 회차 성공률</Text>
          <Text style={styles.rateResult}>{successRate + ' %'}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  successRate: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
  },
  rateResult: {
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
  },
  successCount: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
  },
  countResult: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
  },
  buttonWrapper: {
    marginTop: 20,
    alignItems: 'center',
  },
  actionButton: {
    backgroundColor: 'red',
    lineHeight: 50,
    textAlign: 'center',
    height: 50,
    width: 150,
    color: '#fff',
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    width: 210,
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
