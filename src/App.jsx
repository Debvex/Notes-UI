const App = () => {
  return (
      <div>
        <form className="flex flex-col justify-between p-240 border-8 border-b-gray-50">
          <input type='text' name='task' placeholder='Enter Task: ' className='p-5 border-2 rounded'/>
          <textarea name='task' placeholder='Enter Task Description: '></textarea>
        </form>
      </div>
  )
}
export default App;