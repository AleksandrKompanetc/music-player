import './App.css'
import { useState } from 'react'
import { TracksList } from './components/TracksList'

export function App() {
  // const [tracks, setTracks] = useState<Track[]>([])
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
  const [search, setSearch] = useState('')

  return (
    <div className='app'>
      <h1
        className="title"
      >
        🎵 Audius Music Player
      </h1>

      {selectedTrackId && (<button
        className='reset-btn'
        onClick={() => setSelectedTrackId(null)}
      >
        Reset
      </button>)}

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search track..."
        className='search-input'
      />

      <TracksList />

      {/* <div className='layout'>
        <TracksList />
        
    </div>
  )
}

export default App




























// import { useState } from 'react'

// type Todo = {
//   id: number
//   task: string
//   completed: boolean
// }

// type Filter = 'all' | 'active' | 'completed'

// export default function App() {
//   const [todo, setTodo] = useState('')
//   const [todos, setTodos] = useState<Todo[]>([])
//   const [filter, setFilter] = useState<Filter>('all')
//   const [editingTaskValue, setEditingTaskValue] = useState<string>('')
//   const [editingId, setEditingId] = useState<number | null>(null)

//   const addTodo = (todo: string) => {
//     if (todo.trim() === '') return
//     const newTodo = {
//       id: Date.now(),
//       task: todo,
//       completed: false
//     }
//     setTodos([...todos, newTodo])
//     setTodo('')
//   }

//   const toggleTask = (id: number) => {
//     setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
//   }

//   const deleteTask = (id: number) => {
//     setTodos(todos.filter(todo => todo.id !== id))
//   }

//   const saveTodo = (id: number) => {
//     if (!editingTaskValue) return

//     setTodos(prev => 
//       prev.map(t =>
//         t.id === id ? {...t, task: editingTaskValue} : t)
//     )
//     setEditingId(null)
//   }

//   const filterTasks = (filter: Filter) => {
//     setFilter(filter)
//   }

//   const filteredTodos = todos.filter(todo => {
//     if (filter === 'active') return !todo.completed
//     if (filter === 'completed') return todo.completed
//     return true
//   })

//   const allTodos: number = todos.length
//   const activeTodos: number = todos.filter(todo => !todo.completed).length
//   const completedTodos: number = todos.filter(todo => todo.completed).length

//   const tasksCount =
//     filter === 'all'
//       ? allTodos
//       : filter === 'active'
//         ? activeTodos
//         : completedTodos

//   return (
//     <div>
//       <h1>Todo App</h1>
//       <input
//         value={todo}
//         onChange={(e) => setTodo(e.target.value)}
//         placeholder='Enter a new todo...'
//       />
//       <button onClick={() => addTodo(todo)}>Add</button>

//       <ul>
//         {filteredTodos.map(todo => (
//           <li
//             key={todo.id}
//             style={{ listStyle: 'none' }}
//           >
//             <input
//               type='checkbox'
//               checked={todo.completed}
//               onChange={() => toggleTask(todo.id)}
//             />
//             {editingId === todo.id ? (
//               <input
//                 type='text'
//                 value={editingTaskValue}
//                 onChange={(e) => setEditingTaskValue(e.target.value)}
//                 autoFocus
//                 onBlur={() => saveTodo(todo.id)}
//                 onKeyDown={(e) => {
//                   if (e.key === 'Enter') {
//                     saveTodo(todo.id)
//                     setEditingId(null)
//                   }

//                   if (e.key === 'Escape') {
//                     setEditingId(null)
//                   }
//                 }}
//               />
//             ) : (
//               <span
//                 onDoubleClick={() => {
//                   setEditingId(todo.id)
//                   setEditingTaskValue(todo.task)
//                 }}
//                 style={{ marginLeft: '5px', textDecoration: todo.completed ? 'line-through' : '' }}
//               >
//                 {todo.task}
//               </span>
//             )}
//             <button
//               onClick={() => deleteTask(todo.id)}
//               style={{ margin: '10px', backgroundColor: 'orange', borderRadius: '5px', border: 'none', padding: '2px 5px' }}
//             >
//               Delete</button>
//           </li>
//         ))}
//       </ul>

//       <div>
//         <button
//           style={{ marginLeft: '10px', borderRadius: '5px', border: 'none', padding: '2px 5px', backgroundColor: 'blue' }}
//           onClick={() => filterTasks('all')}
//         >
//           All
//         </button>
//         <button
//           style={{ marginLeft: '10px', borderRadius: '5px', border: 'none', padding: '2px 5px', backgroundColor: 'blue' }}
//           onClick={() => filterTasks('active')}
//         >
//           Active
//         </button>
//         <button
//           style={{ marginLeft: '10px', borderRadius: '5px', border: 'none', padding: '2px 5px', backgroundColor: 'blue' }}
//           onClick={() => filterTasks('completed')}
//         >
//           Completed
//         </button>
//       </div>

//       {todos.length > 0 && (
//         <div>{tasksCount} todos</div>
//       )}
//     </div>
//   )
// }
