import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 0,
  },

  /* Header styles */
  menuIcon: {
    width: 24,
    height: 24,
  },
  logoContainer: {
    alignItems: 'center',
  },
  textLogo: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  /* content styles */
  content: {
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  btn: {
    marginVertical: 15,
    paddingHorizontal: 16,
    borderColor: '#0b0c0bff',
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 5,
    width: 150,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  optionsContainer: {
    backgroundColor: '#c4c1c1ff',
    borderRadius: 8,
    padding: 8,
    marginTop: 10,
    elevation: 0,
    opacity: 0.5,
  },
  contentText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    lineHeight: 30,
  },

  /* card style */
  card: {
    width: '100%',
    height: 250,
    backgroundColor: '#e6e5e6ff',
    borderRadius: 20,
    marginBottom: 10,
  },
  cardImage: {
    borderRadius: 10,
    width: '100%',
    height: '70%',
    margin: 'auto',
  },

  /* locations styles */
  locationContainer: {
    marginTop: 30,
    backgroundColor: '#ceccceff',
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: '#313030ff',
  },
  locationCardStyles: {
    marginTop: 20,
  },
  /* footer style */
  footer: {
    height: 120,
    backgroundColor: '#f8f8f8',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  footerHeaderText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  footerText: {
    fontWeight: 'bold',
    paddingBottom: 5,
  },
});
export default Styles;
