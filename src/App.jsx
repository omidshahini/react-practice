
import './App.css'

const messages = [
  'work out',
  'take a break',
  'read a book'
]
const App = () => {
  return (
    <div className='w-xl bg-amber-200 mt-4 mx-auto'>
      <div className='flex flex-row justify-center items-center gap-50 steps'>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
    </div>
  )
}

export default App