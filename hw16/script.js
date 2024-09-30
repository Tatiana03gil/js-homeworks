/*async function getUserData(userID) {
  try {
    const answer = fetch(`https://site.com/users/${userID}`);

    if (!answer.ok) {
      throw new Error("Нет такого пользователя!");
    }

    const userData = (await answer).json();
    return userData;
  } catch (error) {
    return Promise.reject(error.message);
  }
}

getUserData(1)
  .then((user) => console.log(user))
  .catch((error) => console.error(error));
*/

/*async function saveUserData(userData) {
    try {
    const answer = await fetch('https://site.com/users', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
    });
    if (!answer.ok) {
    throw new Error('Данные не сохранены');
    }
    } catch (error) {
    return Promise.reject(error.message);
    }
    }
    
    const user = {
        name: 'John Smith',
        age: 30,
        email: 'john@example.com'
        };
        saveUserData(user)
        .then(() => {
        console.log('User data saved successfully');
        })
        .catch(error => {
        console.error(error);
        });*/

function changeStyleDelayed(elementID, delay) {
  const element = document.getElementById(elementID);
  setTimeout(() => {
    if (element) {
      element.style.color = "red";
    }
  }, delay);
}
changeStyleDelayed("title", 2000);
