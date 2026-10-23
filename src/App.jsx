import {useActionState, useState} from 'react'

const App = () => {
  const [task, setTask] = useState('')
  const [description, setDescription] = useState('')
  const [notes, setNotes] = useState([
    {
      id: 1,
      task: 'Sample Note',
      description: 'This is a simple note description to showcase the UI.'
    }
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!task.trim()) return

    const newNote = {
      id: Date.now(),
      task,
      description
    }

    setNotes([newNote, ...notes])
    setTask('')
    setDescription('')
  }

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Notes App</h1>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-lg shadow-md mb-8 flex flex-col gap-4"
        >
          <h2 className="text-xl font-semibold text-gray-700">Add a New Note</h2>

          <input
            type="text"
            name="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter Task / Title"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Task Description"
            rows="4"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="self-start px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200 cursor-pointer"
          >
            Add Note
          </button>
        </form>

        {/* Notes Display Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Notes</h2>

          {notes.length === 0 ? (
            <p className="text-gray-500 italic">No notes added yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="bg-[url(https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png)] bg-cover bg-center h-full w-full p-5 rounded-lg flex flex-col justify-between"
                >
                  <div>
                    <h3 className="mt-4text-lg font-bold text-gray-800 mb-2">{note.task}</h3>
                    <p className="text-gray-600 whitespace-pre-wrap">{note.description}</p>
                  </div>

                  <button
                    onClick={() => handleDelete(note.id)}
                    className="self-center mt-4 w-1/2 text-sm bg-red-600 rounded-4xl m-2 text-white hover:accent-gray-400 font-medium cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App