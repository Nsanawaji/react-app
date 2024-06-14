//Working with props children to create components that accept input within the tags
export default function TabButton(props) {
  return <li><button>{props.children}</button></li>;
}

