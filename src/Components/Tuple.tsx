const Tuple = () => {
    let ourTuple: [number, boolean, string];
    ourTuple = [55, false, "learning"];
    ourTuple.push("77");
    console.log(ourTuple);

    // const secondExample:  readonly [number, boolean, string];
    // secondExample = [55, false, "learning"];
    // secondExample.push("nine");
    // console.log(secondExample);
  return (
    <div>Tuple</div>
  )
}

export default Tuple