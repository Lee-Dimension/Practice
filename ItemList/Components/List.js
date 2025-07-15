import React from 'react';
import { FlatList, Text, ToastAndroid, StyleSheet, TouchableOpacity } from 'react-native';

const data = [
  { id: '1', title: '첫번째 아이템' },
  { id: '2', title: '두번째 아이템' },
  { id: '3', title: '세번째 아이템' },
];

export default function List({ filter, onItemPress }) {
  const filteredData = data.filter(item =>
    item.title.includes(filter)
  );

  return (
    <FlatList
      data={filteredData}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.itemCard}
          activeOpacity={0.7}
          onPress={() => {
            ToastAndroid.show(`${item.title} 눌림`, ToastAndroid.SHORT);
          }}
        >
          <Text style={styles.itemText}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  itemCard: {
    backgroundColor: '#bbd3ffff',
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 14,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#689dffff',
  },
  itemText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#33538fff',
    textAlign: 'left',
  },
});
