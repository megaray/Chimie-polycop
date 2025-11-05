import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { styles } from '../styles/documentStyles';

// Composant Table générique
export const Table = ({ headers, rows }) => (
  <View style={styles.table}>
    {/* En-tête */}
    <View style={[styles.tableRow, styles.tableHeader]}>
      {headers.map((header, index) => (
        <View
          key={index}
          style={index === headers.length - 1 ? styles.tableColLast : styles.tableCol}
        >
          <Text style={styles.tableCellHeader}>{header}</Text>
        </View>
      ))}
    </View>

    {/* Lignes de données */}
    {rows.map((row, rowIndex) => (
      <View
        key={rowIndex}
        style={rowIndex === rows.length - 1 ? styles.tableRowLast : styles.tableRow}
      >
        {row.map((cell, cellIndex) => (
          <View
            key={cellIndex}
            style={cellIndex === row.length - 1 ? styles.tableColLast : styles.tableCol}
          >
            <Text style={styles.tableCell}>{cell}</Text>
          </View>
        ))}
      </View>
    ))}
  </View>
);
