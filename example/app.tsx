import * as React from 'react';
import {Component} from 'react';
import {GHCorner} from 'react-gh-corner';
import {AppWrapper} from './styled';
import { MountedComponent } from '../src/mounted';

export interface AppState {
  isSafeVisible: boolean;  
}

const repoUrl = 'https://github.com/zzarcon/react-mounted';

interface SafeComponentProps {
  isOpen?: boolean;
}

interface SafeComponentState {
  count: number;
}

class SafeComponent extends MountedComponent<SafeComponentProps, SafeComponentState> {
  state: SafeComponentState = {
    count: 1
  }

  componentDidMount() {
    super.componentDidMount()
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  render() {
    const {count} = this.state;

    return (
      <div>Safe: {count}</div>
    )
  }
}

export default class App extends Component <{}, AppState> {
  state: AppState = {
    isSafeVisible: true   
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isSafeVisible: false
      })
    }, 500)
  }

  render() {
    const {isSafeVisible} = this.state;

    return (
      <AppWrapper>
        <GHCorner openInNewTab href={repoUrl} />
        {isSafeVisible && <SafeComponent isOpen />}
      </AppWrapper>
    )
  }
}