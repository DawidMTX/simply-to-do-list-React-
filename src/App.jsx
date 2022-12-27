import Input from "./components/Input"
import Content from './components/Content'
import './App.css';
import sun from './images/icon-sun.svg'
import moon from './images/icon-moon.svg'
import { useEffect, useState } from "react";
import ControlPanel from "./components/ControlPanel";
import Themecontext from "./store/theme-context";

function App(props) {
  const [displayTask, setDisplayTask] = useState([])
  const [changeTheme, setChangeTheme] = useState(true)
  const [saveTask, setSaveTask] = useState([
    { name: 'Do shopping', id: 1, status: 'toDo' },
    { name: 'Do homework', id: 2, status: 'toDo' },
  ])


  const handle = () => {
    setChangeTheme(!changeTheme)
  }


  const showTasks = (tasks) => {
    setSaveTask((prev) => {
      return [{
        name: tasks,
        id: Math.floor(Math.random().toFixed(2).toString() * 100),
        status: "toDo"
      }, ...prev]
    })
  }

  const change = (idx) => {

    const newlist = saveTask.filter((item) => (item.id === idx))
    newlist[0].status = 'done'
    setSaveTask((prev) => {
      return [...prev]
    })
  }

  const deleteCompletedItems = () => {
    const clearList = saveTask.filter((item) => item.status !== 'done')
    setSaveTask(clearList)
  }

  useEffect(() => {
    setDisplayTask(saveTask)
  }, saveTask)

  const showAllItems = () => {
    setDisplayTask(saveTask)
  }

  const showactiveItems = () => {
    setDisplayTask(saveTask.filter((item) => item.status == 'toDo'))

  }
  const showCompletedItems = () => {

    setDisplayTask(saveTask.filter((item) => item.status == 'done'))

  }

  const deleteSingleItem = (idx) => {
    setSaveTask(saveTask.filter((item) => item.id !== idx))
  }

  return (
    <Themecontext.Provider value={changeTheme}>
      <main>
        <div className={`${"backgroundImage"} ${changeTheme ? "backgroundImageDark" : "backgroundImageLigth"}`}></div>

        <div className="contener">
          <div className="header">
            <h1 className="title">TODO</h1>
            <button className="iconButton" onClick={handle}><img className="icon" src={changeTheme ? sun : moon} /></button>
          </div>

          <div className="content">
            <Input tasks={showTasks} />
            <Content
              deleteSingle={deleteSingleItem}
              show={displayTask}
              changeStatus={change}
              deleteAll={deleteCompletedItems} />
            <ControlPanel
              allItems={showAllItems}
              activeItems={showactiveItems}
              completedItems={showCompletedItems}
            />
          </div>
        </div>
      </main>
    </Themecontext.Provider>
  );
}

export default App;
