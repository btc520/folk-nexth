// const change2 = () => {
//   console.log('test !!!!')
//   test1 = 'gogo2'
// }

export default function Test() {
  let test1 = 'hechao'

  // const function
  const change1 = (t: string) => {
    test1 = 'hello ' + t + ' !!'
    console.log(test1)
  }

  // 花括号是 object
  const ThisObject = {
    name: ['Bob', 'Smith'],
  }

  console.log(ThisObject['name'][1])

  change1(ThisObject.name[0])
  // setInterval(change2, 10000);
  // setInterval(change1, 1000);

  return <div>{test1}</div>
}
