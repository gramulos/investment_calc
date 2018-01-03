import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { Animated, View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';

export class Select extends Component {
  constructor(props) {
    super(props);
    this.icons = {
      up: this.props.arrowUpType,
      down: this.props.arrowDownType,
    };
    this.state = {
      expanded: this.props.expanded,
      selectedValue: this.props.selectedValue,
      title: this.props.title,
    };
  }

  onSelectedItemChange(value, text) {
    this.setState({
      selectedValue: value,
      title: text,
    });
    this.props.onSelect(value);
    this.toggle();
  }

  setMaxHeight() {
    if (!this.state.maxHeight) {
      this.setState({ maxHeight: 135 });
    }
  }

  setMinHeight(event) {
    if (!this.state.animation) {
      this.setState({ animation:
        this.state.expanded ?
          new Animated.Value() :
          new Animated.Value(parseInt(event.nativeEvent.layout.height, 10))
      });
    }
    this.setState({ minHeight: event.nativeEvent.layout.height });
  }

  toggle() {
    const initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight;
    const finalValue = this.state.expanded ? this.state.minHeight : this.state.minHeight + this.state.maxHeight;

    this.setState({ expanded: !this.state.expanded });
    this.state.animation.setValue(initialValue);

    Animated.spring(
      this.state.animation,
      {
        toValue: finalValue,
        bounciness: 0,
      }
    ).start();
  }

  renderOptions() {
    return Children.map(this.props.children, child =>
      React.cloneElement(child, {
        onPress: this.onSelectedItemChange.bind(this),
        selectedValue: this.state.selectedValue,
        updateTitle: value => this.setState({ title: value }),
        title: this.state.title
      })
    );
  }

  render() {
    const { style } = this.props;
    const icon = this.icons[this.state.expanded ? 'up' : 'down'];
    const containerStyle = this.state.expanded ? [styles.selectbox, style, { height: this.state.animation }] : [styles.selectbox, style, styles.selectboxExpanded, { height: this.state.animation }];

    return (
      <Animated.View style={containerStyle}>
        <TouchableWithoutFeedback onPress={this.toggle.bind(this)} onLayout={this.setMinHeight.bind(this)}>
          <View style={styles.titleContainer}>
            <Text style={styles.label}>{this.state.title}</Text>
            <Ionicons name={icon} style={styles.icon} />
          </View>
        </TouchableWithoutFeedback>
        <ScrollView onLayout={this.setMaxHeight.bind(this)}>
          {this.renderOptions()}
        </ScrollView>
      </Animated.View>
    );
  }
}

export const Option = ({ children, value, onPress, selectedValue, updateTitle, title }) => {
  if (selectedValue === value && title !== children) {
    updateTitle(children);
  }

  return (
    <TouchableWithoutFeedback onPress={() => onPress(value, children)}>
      <View>
        <Text style={selectedValue === value ? [styles.option, styles.optionSelected] : styles.option}>{children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

Select.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  expanded: PropTypes.bool,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSelect: PropTypes.func.isRequired,
};

Select.defaultProps = {
  arrowDownType: 'ios-arrow-down',
  arrowUpType: 'ios-arrow-up',
  expanded: false,
  style: {},
  selectedValue: 0,
  title: 'Choose one',
};

const styles = StyleSheet.create({
  selectbox: {
    width: Dimensions.get('window').width - 20,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    borderRadius: 3,
    marginLeft: 10,
    marginRight: 10,
  },
  selectboxExpanded: {
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  icon: {
    color: '#0667d0',
    fontSize: 20,
    lineHeight: 21,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 45,
    paddingLeft: 15,
    paddingRight: 15,
  },
  label: {
    color: '#2e2e2e',
    fontFamily: 'Roboto-500',
    fontSize: 14,
    lineHeight: 21,
  },
  option: {
    color: '#2e2e2e',
    fontFamily: 'Roboto-500',
    fontSize: 14,
    lineHeight: 21,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  optionSelected: {
    backgroundColor: '#0667d0',
    color: '#ffffff',
  }
});
