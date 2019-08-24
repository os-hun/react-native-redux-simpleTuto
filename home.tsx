import React, {Component} from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from "react-redux"
import { setName, deleteName } from "./redux"
import {store} from "./redux"

interface Props {
  name: string,
  deleteName: any,
  setName: any,
}
export class Home extends Component<Props>{
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
        <Text style={{marginTop: 100}}>My name is {this.props.name}.</Text>
        <View style={{flexDirection: 'row'}}>
          <Button
            onPress={this.props.deleteName}
            title="deleteName"
          />
          <Button
            onPress={() => this.props.setName('カバヤ')}
            title="setName"
          />
        </View>
        {/* ストアは、以下の様なJSONで記述されています。combine reducerのキーにuserを使ったのでuserプロパティの中に、stateが保存されます。 */}
        {/* stor のstateを取り出すにはgetStateメソッドを使います。JSON.stringifyで文字列へと変換しています。 */}
        <Text style={{marginBottom: 100}}>現在のstore: {JSON.stringify(store.getState())}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state: any) => ({
  name: state.user.name
})

const mapDispatchToProps = {
  setName,
  deleteName
}

export default connect( mapStateToProps, mapDispatchToProps )(Home)
