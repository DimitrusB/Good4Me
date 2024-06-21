export const getPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error('Ошибка при получении постов:', error);
    }
  };