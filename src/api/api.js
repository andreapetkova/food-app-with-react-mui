const url = 'https://react-food-app-49387-default-rtdb.firebaseio.com/';

async function request(suffix, options) {
  try {
    const response = await fetch(url + suffix, options);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}

function createOptions(method = 'GET', data) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data !== undefined) {
    options.body = JSON.stringify(data);
  }

  return options;
}

export function getMeals() {
  return request('meals.json', createOptions());
}

export async function postOrder(data) {
  return request('orders.json', createOptions('post', data));
}
