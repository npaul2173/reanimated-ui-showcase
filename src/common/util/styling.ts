const getRoundedStyles = (size: number) => {
  const styles: Record<string, any> = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  // Cast to StyleProp<T> explicitly to make TypeScript happy
  return styles;
};

export { getRoundedStyles };
