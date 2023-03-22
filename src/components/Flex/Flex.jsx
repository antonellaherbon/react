function Flex(props) {
    return <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap"}}>{props.children}</div>;
  }
  export default Flex;