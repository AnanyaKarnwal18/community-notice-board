import { useState } from "react";

import Navbar from "./components/layout/Navbar";

import Footer from "./components/layout/Footer";

import LatestUpdates from "./components/dashboard/LatestUpdates";
import Events from "./components/dashboard/Events";
import Pinned from "./components/dashboard/Pinned";
import Todo from "./components/dashboard/Todo";
import TaskStatus from "./components/dashboard/TaskStatus";
import Poll from "./components/dashboard/Poll";
import Weather from "./components/dashboard/Weather";
import UserNotices from "./components/dashboard/UserNotices";
import NoticeForm from "./components/dashboard/NoticeForm";
import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, null, " ");
    }
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [notices, setNotices] = useState([]);

  const addNotice = (notice) => {
    setNotices((prev) => [{ id: Date.now(), ...notice }, ...prev]);
  };

  const deleteNotice = (id) => {
    setNotices((prev) => prev.filter((notice) => notice.id !== id));
  };

  return (
    <>
      <Navbar onPostClick={() => setShowForm(true)} />

      <div className="layout">
        <div className="content">
          <div id="latest-updates">
            <LatestUpdates />
          </div>

          <div id="notices">
            {showForm && (
              <NoticeForm
                addNotice={(notice) => {
                  addNotice(notice);
                  setShowForm(false);
                }}
              />
            )}

            <UserNotices notices={notices} deleteNotice={deleteNotice} />
          </div>

          <div id="events">
            <div className="row">
              <Events />
              <Pinned />
            </div>
          </div>

          <div id="polls">
            <Poll />
          </div>
          <div className="app-shell">
            <div id="tasks">
              <div className="main-grid">
                <Todo />
                <TaskStatus />
              </div>
            </div>
          </div>

          <div id="weather">
            <Weather />
          </div>
        </div>
      </div>

      <Footer />

    </>
  );
}

export default App;
