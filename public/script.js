/* global tableau */

let myConnector = tableau.makeConnector();

myConnector.init = function(initCallback) {
  tableau.authType = tableau.authTypeEnum.basic;
  if (tableau.phase == tableau.phaseEnum.interactivePhase && tableau.password.length > 0) {
    document.getElementById('pat').value = tableau.password;
  }
  initCallback();
};

myConnector.getSchema = function(schemaCallback) {
  const taskColumns = [{
      id: 'id',
      alias: 'ID',
      dataType: tableau.dataTypeEnum.int,
      columnType: tableau.columnTypeEnum.discrete,
    },
    {
      id: 'title',
      alias: 'Title',
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: 'description',
      alias: 'Description',
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: 'type',
      alias: 'Type',
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: 'priority',
      alias: 'Priority',
      dataType: tableau.dataTypeEnum.int,
      columnType: tableau.columnTypeEnum.discrete,
    },
    {
      id: 'completed',
      alias: 'Completed',
      dataType: tableau.dataTypeEnum.bool,
    },
    {
      id: 'contact_id',
      alias: 'Contact ID',
      dataType: tableau.dataTypeEnum.int,
      columnType: tableau.columnTypeEnum.discrete,
    },
    {
      id: 'contact_email',
      alias: 'Contact Email',
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: 'contact_first_name',
      alias: 'Contact First Name',
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: 'contact_last_name',
      alias: 'Contact Last Name',
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: 'url',
      alias: 'URL',
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: 'due_date',
      alias: 'Due Date',
      dataType: tableau.dataTypeEnum.datetime,
    },
    {
      id: 'creation_date',
      alias: 'Creation Date',
      dataType: tableau.dataTypeEnum.datetime,
    },
    {
      id: 'modification_date',
      alias: 'Modification Date',
      dataType: tableau.dataTypeEnum.datetime,
    },
    {
      id: 'completion_date',
      alias: 'Completion Date',
      dataType: tableau.dataTypeEnum.datetime,
    },
    {
      id: 'remind_time',
      alias: 'Remind Time',
      dataType: tableau.dataTypeEnum.int,
    },
    {
      id: 'user_id',
      alias: 'User ID',
      dataType: tableau.dataTypeEnum.int,
      columnType: tableau.columnTypeEnum.discrete,
    },
  ];

  const taskTable = {
    id: 'tasks',
    alias: 'Tasks',
    columns: taskColumns,
  };

  schemaCallback([taskTable]);
};

myConnector.getData = async function(table, doneCallback) {
  try {
    const pat = tableau.password;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pat }),
    };
    const taskResponse = await fetch('/getTasks', options);
    const taskData = await taskResponse.json();
    if (taskData.error)
      return tableau.abortWithError(
        'Failure fetching task data! ' + JSON.stringify(taskData.error)
      );
    table.appendRows(taskData);
    doneCallback();
  } catch (error) {
    tableau.abortWithError('Something went wrong! ', error);
  }
};

tableau.registerConnector(myConnector);
window._tableau.triggerInitialization && window._tableau.triggerInitialization(); // Make sure WDC is initialized properly

async function submit() {
  const pat = document.getElementById('pat').value;
  if (!pat)
    return (document.getElementById('error').innerHTML =
      'Please enter your Keap Personal Access Token.');
  tableau.password = pat;
  tableau.connectionName = 'Keap Tasks';
  tableau.submit();
}