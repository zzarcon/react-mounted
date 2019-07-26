# react-mounted
> Safely perform actions without worrying if the component is mounted

Things like this are fine ⛑

```typescript
import {MountedComponent} from 'react-mounted'

class WildComponent extends MountedComponent {
  componentWillUnmount() {
    setTimeout(() => {
      this.setState({
        count: 1
      }, 1000)
    });
  }
}
```
