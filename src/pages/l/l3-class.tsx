class Person {
  name: string
}

const person = new Person()
person.name = 'Jane'

export default function Home() {
  return <div>{person.name} </div>
}



