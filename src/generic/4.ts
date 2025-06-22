class Component<T> {
  constructor(public props: T) {}
}

interface Props {
  title: string;
}

class Page extends Component<Props> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
