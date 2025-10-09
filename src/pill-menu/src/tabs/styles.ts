import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: '#F5F7FA',
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    position: 'relative',
  },
  tabButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 14,
    color: '#333',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#000',
  },
  animatedIndicator: {
    height: '100%',
    backgroundColor: '#FFD700', // Yellow
    borderRadius: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
  },
});
