import {Component} from 'react';

export class MountedComponent<P = {}, S = {}, SS = any> extends Component<P, S, SS> {
  isComponentMounted?: boolean;

  constructor(props: P) {
    super(props);

    const superSetState = this.setState.bind(this);

    this.setState = (state) => {
      if (!this.isComponentMounted) return;

      superSetState(state);
    };
  }

  componentDidMount() {
    this.isComponentMounted = true;
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }
}