const fetch = require('node-fetch');
const baseUrl = 'https://api.infusionsoft.com/crm/rest';

exports.handler = async(event) => {
  const pat = JSON.parse(event.body).pat;
  let tasks = [];
  let url = `${baseUrl}/v1/tasks/search?limit=1000&offset=0`;
  const options = {
    headers: {
      'X-Keap-API-Key': pat,
    },
  };
  do {
    const response = await fetch(url, options);
    const data = await response.json();
    if (!data.tasks) return { statusCode: 404, body: JSON.stringify({ error: data }) };
    if (data.tasks.length == 0) break;
    for (let task of data.tasks) {
      tasks.push({
        id: task.id,
        title: task.title,
        description: task.description,
        type: task.type,
        priority: task.priority,
        completed: task.completed,
        contact_id: task.contact ? task.contact.id : null,
        contact_email: task.contact ? task.contact.email : null,
        contact_first_name: task.contact ? task.contact.first_name : null,
        contact_last_name: task.contact ? task.contact.last_name : null,
        url: task.url,
        due_date: task.due_date,
        creation_date: task.creation_date,
        modification_date: task.modification_date,
        completion_date: task.completion_date,
        remind_time: task.remind_time,
        user_id: task.user_id,
      });
    }
    url = data.next;
  } while (url !== null);
  return {
    statusCode: 200,
    body: JSON.stringify(tasks),
  };
};