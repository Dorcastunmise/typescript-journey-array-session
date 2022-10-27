const NamedTuples = () => {
    //named tuples provie contxt for values at each index
  const graph: [x:number, y:number] = [55.2, 41.3];
  
  //destructuring
  const graphs: [number, number] = [55.2, 41.3];
  const [a, b] = graphs;
    return (
    <div>NamedTuples</div>
  )
}

export default NamedTuples