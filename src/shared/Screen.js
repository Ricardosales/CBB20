import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView,  StyleSheet } from 'react-native'

const Screen = ({ children, scrollEnabled, style }) => (
  <React.Fragment>    
    <ScrollView
      scrollEnabled={scrollEnabled}
      style={[styles.scrollView, style]}
      contentContainerStyle={styles.scrollViewContentContainer}
    >
      {children}
    </ScrollView>
  </React.Fragment>
)

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#eee'
  },
  scrollViewContentContainer: {
    flexGrow: 1,
    padding: 20
  }
})

Screen.defaultProps = {
  children: null,
  scrollEnabled: true,
  style: {}
}

Screen.propTypes = {
  children: PropTypes.node,
  scrollEnabled: PropTypes.bool,
  style: PropTypes.object
}

export default Screen
