const { taskManager } = require('@hisense-staging/velo-npm/backend');
const{TASKS_NAMES,TASK_TYPE,TASKS} = require('sr-npm/backend/consts');
const { items: wixData } = require("@wix/data");


export async function fetchAndSaveBasicJobsFast() { 
    const task = {
        name: TASKS_NAMES.SYNC_JOBS_FAST,
        data: {},
        type: TASK_TYPE.SCHEDULED,
      };  
      taskManager().schedule(task);
      await wixData.save("templateType", {
        templateType: "INTERNAL"
      });
}
export async function runScheduledTasks() {
    return taskManager().runScheduledTasks(TASKS);
  }






