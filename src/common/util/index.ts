// 👇 Closure for unique IDs

export const generateSquenceId = () => {
  let counter = 1;
  return () => `user-${counter++}`;
};
