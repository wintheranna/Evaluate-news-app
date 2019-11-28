function handleSubmit(event) {
    event.preventDefault()
    // check what text/URL was put into the form field
    let name = document.getElementById('name').value;
    // check for valid URL
    Client.checkForUrl(name);
    console.log("::: Form Submitted :::")
    postData('/save', {
      name: name
    });
    updateUI('http://localhost:8081/api');
    // check for name
    Client.checkForName(name)
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
      })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    });
    }

/* Function to POST data */
const postData = async (url='', data={}) => {
  console.log(data);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  });
  try {
    console.log(response);
  } catch(error) {
      console.log('error', error);
      alert("Invalid URL, try again!");
    }
}

/* Function to fetch data and update user interface */
const updateUI = async () => {
const request = await fetch('http://localhost:8081/api');
try {
  const allData = await request.json();
    console.log(allData);
    document.getElementById('results').innerHTML = '<br>Polarity: ' + allData.polarity + '<br>';
    document.getElementById('results').innerHTML += '<br>Subjectivity: ' + allData.polarity_confidence + '<br>';
    document.getElementById('results').innerHTML += '<br>Text: ' + allData.text + '<br>';
} catch(error) {
    console.log('error', error);
  }
}

export { handleSubmit }
