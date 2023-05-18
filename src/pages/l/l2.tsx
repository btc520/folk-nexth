// const change2 = () => {
//   console.log('test !!!!')
//   test1 = 'gogo2'
// }
export default function Test() {
  let test1 = 'hechao'

  const change1 = () => {
    console.log('test !!')
    test1 = 'gogo2'
  }
  change1()
  // setInterval(change2, 10000);
  // setInterval(change1, 1000);

  return <div>{test1}</div>
}
