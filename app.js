var App = () => (
  <div>
  Grocery List
  <GroceryList list={['Orange', 'Candy']}/>
  </div>
);

Class GrocerList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			done: false
		};

	onGroceryItemClick() {
		this.setState({
			done: !this.state.done
		});
	}

	render() {
		var style = {textDecoration:this.state.done ? 'bold' : 'none'
		};

		return (
			<li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.GroceryList}</li>
		)
	};

	}

var GroceryList = (props) => (
	<div>
		<li>{props.list[0]}</li>
		<li>{props.list[1]}</li>
	</div>
);


ReactDOM.render(<App />, document.getElementById("app"));


class TodoListItem extends React.Component {

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {

    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    return (
      <li>{this.props.todo}</li>
    );

  }

}

// Update our `TodoList` to use the new `TodoListItem` component
// This can still be a stateless function component!
var TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <TodoListItem todo={todo} />
    )}
  </ul>
);