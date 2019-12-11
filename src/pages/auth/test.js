export class ScreenComponentOne extends React.Component {
    render() {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            borderWidth: 25,
            borderColor: 'teal',
          }}>
          <Button
            title="Go to two"
            onPress={() => this.props.navigation.navigate('routeNameTwo')}
          />
        </View>
      );
    }
  }
  
 export class ScreenComponentTwo extends React.Component {
    render() {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            borderWidth: 25,
            borderColor: 'orange',
          }}>
          <Button
            title="Go to one"
            onPress={() => this.props.navigation.navigate('routeNameOne')}
          />
        </View>
      );
    }
  }