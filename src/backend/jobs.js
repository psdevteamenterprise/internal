const { taskManager } = require('psdev-task-manager/backend/tasks/taskManager');
const{TASKS_NAMES,TASK_TYPE,TASKS} = require('sr-npm/backend/consts');
const{markTemplateAsInternal} = require('sr-npm/backend/data');


export async function fetchAndSaveBasicJobsFast() { 
    await markTemplateAsInternal();
    const task = {
        name: TASKS_NAMES.SYNC_JOBS_FAST,
        data: {},
        type: TASK_TYPE.SCHEDULED,
      };  
      taskManager().schedule(task);


}
export async function runScheduledTasks() {
    return taskManager().runScheduledTasks(TASKS);
  }






