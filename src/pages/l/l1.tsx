export default function Test() {
  let test1 = 'hechao'

  const change1 = () => {
    console.log('test !!')
    test1 = 'gogo2'
  }
  const change2 = () => {
    console.log('test !!!!')
    test1 = 'gogo2'
  }

  //setInterval(change2, 5000);

  return <div>{test1}</div>
}
