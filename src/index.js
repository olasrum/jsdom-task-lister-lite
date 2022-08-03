document.addEventListener("DOMContentLoaded", () => { 

  //By default, submit button is disabled
  document.querySelector('#submit').disabled = true;

  //When user finishes typing text > 0 then submit button is enabled
  document.querySelector('#new-task-description').onkeyup = () => {
    if (document.querySelector('#new-task-description').value.length > 0) {
      document.querySelector('#submit').disabled = false;
    } else {
      document.querySelector('#submit').disabled = true;
    } 
  }

  document.querySelector('form').onsubmit = () => {
    const newTask = document.querySelector('#new-task-description').value;
    
    const li = document.createElement('li')
    li.innerHTML = newTask;

    document.querySelector('#tasks').append(li);

    document.querySelector('#new-task-description').value = '';
    document.querySelector('#submit').disabled = true;

    //Stop form submitting
    return false;
  }
});



