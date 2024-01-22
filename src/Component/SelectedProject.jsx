import Task from "./Task";

export default function selectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    date: "numeric",
  });
  return (
    <div className="w-[34rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-500">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-700 mb-2">
            {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-700 whitespace-pre-wrap">
          {project.descrption}
        </p>
      </header>
      <Task onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
