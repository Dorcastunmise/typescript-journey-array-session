const Inference = () => {
    const numbers = [1, 2, 3];
    numbers.push(4);
    numbers.push("2");
    console.log(numbers);

    let head: number = numbers[1];
    console.log("head :", head);
  return (
    <div>Inference</div>
  )
}

export default Inference