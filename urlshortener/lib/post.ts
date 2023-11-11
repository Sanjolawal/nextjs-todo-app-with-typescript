export const Post = async (todo: string | undefined) => {
  await fetch(`/api`, {
    method: `POST`,
    body: JSON.stringify({ text: todo }),
  });
};

export const Get = async () => {
  return (await fetch(`/api`)).json();
};
