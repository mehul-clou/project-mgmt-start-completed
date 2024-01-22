import { useState } from "react";
import NewProject from "./Component/NewProject";
import NoProjectSelected from "./Component/NoProjectSelected";
import ProjectSidebar from "./Component/ProjectSidebar";
import SelectedProject from "./Component/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectState((prevValue) => {
      const taskId = Math.random();

      const newTask = {
        text: text,
        id: taskId,
        projectId: prevValue.selectedProjectId,
      };

      return {
        ...prevValue,
        tasks: [newTask, ...prevValue.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      Id: Math.random(),
    };
    setProjectState((prevValue) => {
      return {
        ...prevValue,
        selectedProjectId: undefined,
        projects: [...prevValue.projects, newProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.Id !== prevState.selectedProjectId,
        ),
      };
    });
  }
  console.log(projectState);

  const selectedProject = projectState.projects.find(
    (project) => project.Id === projectState.selectedProjectId,
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedprojectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
